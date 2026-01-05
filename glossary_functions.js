// Optimized Glossary Functions with Lazy Loading and Pagination

// Glossary Variables
let currentGlossaryFilter = 'all';
let currentSearchTerm = '';
let glossaryScriptsLoaded = false;
let filteredGlossaryItems = [];
let displayedItemsCount = 0;
const ITEMS_PER_PAGE = 40; // Increased to 40 to buffer better against fast scrolling
let glossaryLoading = false; // prevents duplicate concurrent loads
let glossaryScrollHandlerAttached = false; // tracks scroll listener so we can remove it when done

// Lazy load glossary scripts
async function loadGlossaryScripts() {
    if (glossaryScriptsLoaded) return true;
    
    try {
        // Load glossary items first
        await loadScript('glossary_items.js');
        glossaryScriptsLoaded = true;
        return true;
    } catch (error) {
        console.error('Failed to load glossary scripts:', error);
        return false;
    }
}

// Helper function to dynamically load scripts
function loadScript(src) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
        document.head.appendChild(script);
    });
}

// Initialize and show glossary
async function initializeAndShowGlossary() {
    const loadingDiv = document.getElementById('glossary-loading');
    const contentDiv = document.getElementById('glossary-content');
    
    // Show loading indicator
    if (loadingDiv) loadingDiv.style.display = 'block';
    if (contentDiv) contentDiv.style.display = 'none';
    
    // Load scripts if not already loaded
    const loaded = await loadGlossaryScripts();
    
    if (!loaded) {
        if (loadingDiv) {
            loadingDiv.innerHTML = `
                <div class="card text-center">
                    <div style="font-size: 3rem; margin-bottom: 1rem;">❌</div>
                    <h3 class="card-title">Failed to Load Glossary</h3>
                    <p class="card-description">Please refresh the page and try again.</p>
                </div>
            `;
        }
        return;
    }
    
    // Hide loading, show content
    if (loadingDiv) loadingDiv.style.display = 'none';
    if (contentDiv) contentDiv.style.display = 'block';
    
    // Initialize glossary if bibleGlossary exists
    if (typeof bibleGlossary !== 'undefined') {
        initializeGlossary();
        filterGlossaryByLetter('all');
    }
}

// Render glossary with pagination
function renderGlossary(resetPagination = true) {
    const glossaryList = document.getElementById('glossary-list');
    const glossaryCount = document.getElementById('glossary-count');
    const loadMoreContainer = document.getElementById('glossary-load-more-container');
    
    if (!glossaryList || typeof bibleGlossary === 'undefined') return;
    
    // Reset pagination if needed
    if (resetPagination) {
        displayedItemsCount = 0;
        glossaryList.innerHTML = '';
    }
    
    // Filter glossary items
    filteredGlossaryItems = bibleGlossary;
    
    // Apply search filter
    if (currentSearchTerm) {
        const searchTerm = currentSearchTerm.toLowerCase();
        filteredGlossaryItems = filteredGlossaryItems.filter(item => 
            item.term.toLowerCase().includes(searchTerm) ||
            item.definition.toLowerCase().includes(searchTerm) ||
            item.category.toLowerCase().includes(searchTerm)
        );
    }
    
    // Apply alphabet filter
    if (currentGlossaryFilter !== 'all') {
        filteredGlossaryItems = filteredGlossaryItems.filter(item => 
            item.term.charAt(0).toUpperCase() === currentGlossaryFilter
        );
    }
    
    // Sort alphabetically
    filteredGlossaryItems.sort((a, b) => a.term.localeCompare(b.term));
    
    // Update count
    if (glossaryCount) {
        glossaryCount.textContent = filteredGlossaryItems.length;
    }
    
    // Render items with pagination
    renderPaginatedItems();
    
    // Show/hide load more container and setup intersection observer
    if (loadMoreContainer) {
        if (displayedItemsCount < filteredGlossaryItems.length) {
            // Ensure loader area is visible
            loadMoreContainer.style.display = 'block';
            const glossaryListEl = document.getElementById('glossary-list');

            // Reset any existing observer so we can attach a fresh one (anchors may change on filter/search)
            if (window.glossaryObserver) {
                window.glossaryObserver.disconnect();
                window.glossaryObserver = null;
            }

            // Setup Intersection Observer for Infinite Scroll anchored to the glossary list
            window.glossaryObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && !glossaryLoading && displayedItemsCount < filteredGlossaryItems.length) {
                        glossaryLoading = true;
                        // show subtle loader state
                        loadMoreContainer.classList.add('loading');
                        loadMoreGlossaryItems();
                    }
                });
            }, { root: glossaryListEl || null, rootMargin: '200px', threshold: 0.1 });

            window.glossaryObserver.observe(loadMoreContainer);

            // Attach a throttled scroll fallback for very fast scrolls (observer can miss rapid jumps)
            if (glossaryListEl && !glossaryScrollHandlerAttached) {
                let ticking = false;
                const onScrollCheck = () => {
                    if (glossaryLoading) return;
                    const threshold = 300; // px to trigger early
                    if (glossaryListEl.scrollTop + glossaryListEl.clientHeight >= glossaryListEl.scrollHeight - threshold && displayedItemsCount < filteredGlossaryItems.length) {
                        glossaryLoading = true;
                        if (loadMoreContainer) {
                            loadMoreContainer.classList.add('loading');
                            loadMoreContainer.style.display = 'block';
                        }
                        loadMoreGlossaryItems();
                    }
                };
                const throttled = () => {
                    if (!ticking) {
                        window.requestAnimationFrame(() => {
                            onScrollCheck();
                            ticking = false;
                        });
                        ticking = true;
                    }
                };
                glossaryListEl.addEventListener('scroll', throttled, { passive: true });
                window._glossary_throttled_scroll = throttled;
                glossaryScrollHandlerAttached = true;
            }
        } else {
            loadMoreContainer.style.display = 'none';
            loadMoreContainer.classList.remove('loading');
            if (window.glossaryObserver) {
                window.glossaryObserver.disconnect();
                window.glossaryObserver = null;
            }

            // Remove scroll fallback if attached
            const glossaryListEl = document.getElementById('glossary-list');
            if (glossaryListEl && glossaryScrollHandlerAttached) {
                const throttled = window._glossary_throttled_scroll;
                if (throttled) {
                    glossaryListEl.removeEventListener('scroll', throttled);
                    window._glossary_throttled_scroll = null;
                }
                glossaryScrollHandlerAttached = false;
            }
        }
    }
    
    // Show/hide back to top button
    updateBackToTopButton();
}

// Render paginated items
function renderPaginatedItems() {
    const glossaryList = document.getElementById('glossary-list');
    if (!glossaryList) return;
    
    // Calculate items to render
    const startIndex = displayedItemsCount;
    const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, filteredGlossaryItems.length);
    const itemsToRender = filteredGlossaryItems.slice(startIndex, endIndex);
    
    let htmlContent = '';

    // Group by first letter if showing all
    if (currentGlossaryFilter === 'all' && !currentSearchTerm) {
        const groupedGlossary = {};
        itemsToRender.forEach(item => {
            const firstLetter = item.term.charAt(0).toUpperCase();
            if (!groupedGlossary[firstLetter]) {
                groupedGlossary[firstLetter] = [];
            }
            groupedGlossary[firstLetter].push(item);
        });

        const sortedLetters = Object.keys(groupedGlossary).sort();

        // Insert each letter group, and if the last rendered section already has the same letter, merge into it
        sortedLetters.forEach(letter => {
            const lastSection = glossaryList.querySelector('.glossary-letter-section:last-of-type');
            const lastHeader = lastSection ? lastSection.querySelector('.glossary-letter-header') : null;
            const letterItemsHtml = groupedGlossary[letter].map(item => renderGlossaryItem(item)).join('');

            if (lastHeader && lastHeader.textContent === letter && lastSection) {
                // Merge items into existing section to avoid duplicate sticky headers and layout gaps
                const itemsContainer = lastSection.querySelector('.glossary-letter-items');
                if (itemsContainer) {
                    itemsContainer.insertAdjacentHTML('beforeend', letterItemsHtml);
                } else {
                    // Fallback: append a new section if something unexpected
                    htmlContent += `
                        <div class="glossary-letter-section">
                            <div class="glossary-letter-header">${letter}</div>
                            <div class="glossary-letter-items">
                                ${letterItemsHtml}
                            </div>
                        </div>
                    `;
                }
            } else {
                // New letter section
                htmlContent += `
                    <div class="glossary-letter-section">
                        <div class="glossary-letter-header">${letter}</div>
                        <div class="glossary-letter-items">
                            ${letterItemsHtml}
                        </div>
                    </div>
                `;
            }
        });
    } else {
        // Render flat list
        htmlContent = itemsToRender.map(item => renderGlossaryItem(item)).join('');
    }

    // Batch insertion to DOM
    if (htmlContent) {
        glossaryList.insertAdjacentHTML('beforeend', htmlContent);
    }
    
    // Update displayed count
    displayedItemsCount = endIndex;

    // Ensure the glossary scroller is filled — useful if the user jumped/fast-scrolled and content didn't reach the scrollbar
    ensureGlossaryFilled();
}

// Load more glossary items
function loadMoreGlossaryItems() {
    // idempotent set to prevent races when called from different triggers
    glossaryLoading = true;

    requestAnimationFrame(() => {
        renderPaginatedItems();
        
        // Update load more container visibility
        const loadMoreContainer = document.getElementById('glossary-load-more-container');
        if (loadMoreContainer) {
            if (displayedItemsCount >= filteredGlossaryItems.length) {
                // no more items
                loadMoreContainer.style.display = 'none';
                loadMoreContainer.classList.remove('loading');
                if (window.glossaryObserver) {
                    window.glossaryObserver.disconnect();
                    window.glossaryObserver = null;
                }

                // Remove scroll fallback if attached
                const glossaryListEl = document.getElementById('glossary-list');
                if (glossaryListEl && glossaryScrollHandlerAttached) {
                    const throttled = window._glossary_throttled_scroll;
                    if (throttled) {
                        glossaryListEl.removeEventListener('scroll', throttled);
                        window._glossary_throttled_scroll = null;
                    }
                    glossaryScrollHandlerAttached = false;
                }
            } else {
                // still more items — ensure loader visible but stop spinner state
                loadMoreContainer.style.display = 'block';
                loadMoreContainer.classList.remove('loading');
            }
        }
        
        // allow the observer to trigger again
        glossaryLoading = false;
        updateBackToTopButton();

        // If the content didn't fill the container (fast scrolling left us with a short content), trigger extra loads until it's scrollable
        ensureGlossaryFilled();
    });
}

// Render individual glossary item
function renderGlossaryItem(item) {
    const referencesHtml = item.references.map(ref => 
        `<span class="glossary-reference" onclick="searchBibleVerse('${ref}')">${ref}</span>`
    ).join(', ');
    
    return `
        <div class="glossary-item card">
            <div class="glossary-header">
                <div style="display: flex; align-items: center; gap: 10px;">
                    <span class="glossary-emoji">${item.emoji}</span>
                    <div>
                        <h3 class="glossary-term">${item.term}</h3>
                        <div class="glossary-category">${item.category}</div>
                    </div>
                </div>
            </div>
            <div class="glossary-definition">
                ${item.definition}
            </div>
            <div class="glossary-references">
                <strong>References:</strong> ${referencesHtml}
            </div>
        </div>
    `;
}

// Search glossary
function searchGlossary() {
    const searchInput = document.getElementById('glossary-search');
    if (searchInput) {
        currentSearchTerm = searchInput.value.trim();
        renderGlossary(true); // Reset pagination on search
    }
}

// Filter glossary by letter
function filterGlossaryByLetter(letter) {
    currentGlossaryFilter = letter;
    updateAlphabetButtons();
    renderGlossary(true); // Reset pagination on filter change
    
    // Scroll to top when changing filters
    const glossaryList = document.getElementById('glossary-list');
    if (glossaryList) {
        requestAnimationFrame(() => {
            glossaryList.scrollTop = 0;
        });
    }
}

// Update alphabet buttons active state
function updateAlphabetButtons() {
    const alphabetButtons = document.querySelectorAll('.alphabet-btn');
    alphabetButtons.forEach(button => {
        const buttonLetter = button.textContent;
        if (buttonLetter === 'All' && currentGlossaryFilter === 'all') {
            button.classList.add('active');
        } else if (buttonLetter === currentGlossaryFilter) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}

// Search Bible verse from reference
async function searchBibleVerse(reference) {
    // Close glossary section
    const glossarySection = document.getElementById('glossary-section');
    if (glossarySection) {
        glossarySection.classList.remove('active');
    }

    // Show Bible section
    showSection('bible-section');
    showToast(`Searching for: ${reference}`);

    // Parse reference
    const parts = reference.match(/(\d?\s?[a-zA-Z]+)\s?(\d+):?(\d+)?/);
    if (!parts) {
        showToast('Could not parse reference', 'error');
        return;
    }

    const bookName = parts[1].trim();
    const chapter = parseInt(parts[2]);
    const verse = parts[3] ? parseInt(parts[3]) : null;

    // Find book
    const book = bibleBooks.find(b => b.title.toLowerCase() === bookName.toLowerCase() || b.id.toLowerCase() === bookName.toLowerCase().replace(/\s/g, ''));
    if (!book) {
        showToast(`Book not found: ${bookName}`, 'error');
        return;
    }

    // Load chapter
    await loadChapterDirectly(book, chapter);

    // Scroll to verse
    if (verse) {
        setTimeout(() => {
            const versesInPage = document.querySelectorAll('[data-verse]');
            const targetVerse = Array.from(versesInPage).find(el => parseInt(el.dataset.verse) === verse);
            if (targetVerse) {
                targetVerse.scrollIntoView({ behavior: 'smooth', block: 'center' });
                // Highlight it briefly
                targetVerse.style.transition = 'background-color 0.3s ease';
                targetVerse.style.backgroundColor = 'var(--accent-gold-alpha)';
                setTimeout(() => {
                    targetVerse.style.backgroundColor = '';
                }, 2000);
            } else {
                console.warn(`Verse ${verse} not found in DOM`);
            }
        }, 500);
    }
}

// Attempt to fill the visible scroller by loading additional pages until scrollable or out of items
function ensureGlossaryFilled() {
    const glossaryList = document.getElementById('glossary-list');
    const loadMoreContainer = document.getElementById('glossary-load-more-container');
    if (!glossaryList) return;

    // If the content is shorter than the viewport or the user scrolled to/into the bottom and more items exist, trigger another load
    if ((glossaryList.scrollHeight <= glossaryList.clientHeight || (glossaryList.scrollTop + glossaryList.clientHeight >= glossaryList.scrollHeight - 50)) && displayedItemsCount < filteredGlossaryItems.length && !glossaryLoading) {
        glossaryLoading = true;
        if (loadMoreContainer) {
            loadMoreContainer.style.display = 'block';
            loadMoreContainer.classList.add('loading');
        }
        // schedule the load — small delay lets the browser finish layout
        setTimeout(() => {
            loadMoreGlossaryItems();
        }, 50);
    }
}

// Update back to top button visibility
function updateBackToTopButton() {
    requestAnimationFrame(() => {
        const backToTopBtn = document.getElementById('back-to-top');
        const glossaryList = document.getElementById('glossary-list');
        
        if (backToTopBtn && glossaryList) {
            if (glossaryList.scrollHeight > 400) {
                backToTopBtn.style.display = 'block';
            } else {
                backToTopBtn.style.display = 'none';
            }
        }
    });
}

// Scroll to top function
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Initialize glossary when app loads
function initializeGlossary() {
    // Sort glossary alphabetically on load
    if (typeof bibleGlossary !== 'undefined') {
        bibleGlossary.sort((a, b) => a.term.localeCompare(b.term));
    }
}
