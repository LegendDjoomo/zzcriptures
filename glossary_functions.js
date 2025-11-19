// Glossary Variables
let currentGlossaryFilter = 'all';
let currentSearchTerm = '';

// Render glossary based on current filters
function renderGlossary() {
    const glossaryList = document.getElementById('glossary-list');
    const glossaryCount = document.getElementById('glossary-count');
    
    if (!glossaryList) return;
    
    // Filter glossary items
    let filteredGlossary = bibleGlossary;
    
    // Apply search filter
    if (currentSearchTerm) {
        const searchTerm = currentSearchTerm.toLowerCase();
        filteredGlossary = filteredGlossary.filter(item => 
            item.term.toLowerCase().includes(searchTerm) ||
            item.definition.toLowerCase().includes(searchTerm) ||
            item.category.toLowerCase().includes(searchTerm)
        );
    }
    
    // Apply alphabet filter
    if (currentGlossaryFilter !== 'all') {
        filteredGlossary = filteredGlossary.filter(item => 
            item.term.charAt(0).toUpperCase() === currentGlossaryFilter
        );
    }
    
    // Sort alphabetically
    filteredGlossary.sort((a, b) => a.term.localeCompare(b.term));
    
    // Update count
    if (glossaryCount) {
        glossaryCount.textContent = filteredGlossary.length;
    }
    
    // Group by first letter
    const groupedGlossary = {};
    filteredGlossary.forEach(item => {
        const firstLetter = item.term.charAt(0).toUpperCase();
        if (!groupedGlossary[firstLetter]) {
            groupedGlossary[firstLetter] = [];
        }
        groupedGlossary[firstLetter].push(item);
    });
    
    // Render grouped items
    if (filteredGlossary.length === 0) {
        glossaryList.innerHTML = `
            <div class="card text-center">
                <h3 class="card-title">No results found</h3>
                <p class="card-description">Try a different search term or letter filter.</p>
            </div>
        `;
        return;
    }
    
    let html = '';
    
    // If we're filtering by a specific letter, don't show letter headers
    if (currentGlossaryFilter !== 'all') {
        html = filteredGlossary.map(item => renderGlossaryItem(item)).join('');
    } else {
        // Show alphabetical sections
        const sortedLetters = Object.keys(groupedGlossary).sort();
        
        sortedLetters.forEach(letter => {
            html += `
                <div class="glossary-letter-section">
                    <div class="glossary-letter-header">${letter}</div>
                    <div class="glossary-letter-items">
                        ${groupedGlossary[letter].map(item => renderGlossaryItem(item)).join('')}
                    </div>
                </div>
            `;
        });
    }
    
    glossaryList.innerHTML = html;
    
    // Show/hide back to top button
    updateBackToTopButton();
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
        renderGlossary();
    }
}

// Filter glossary by letter
function filterGlossaryByLetter(letter) {
    currentGlossaryFilter = letter;
    updateAlphabetButtons();
    renderGlossary();
    
    // Scroll to top when changing filters
    const glossaryList = document.getElementById('glossary-list');
    if (glossaryList) {
        glossaryList.scrollTop = 0;
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
    // Close glossary modal
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

// Update back to top button visibility
function updateBackToTopButton() {
    const backToTopBtn = document.getElementById('back-to-top');
    const glossaryList = document.getElementById('glossary-list');
    
    if (backToTopBtn && glossaryList) {
        if (glossaryList.scrollHeight > 400) {
            backToTopBtn.style.display = 'block';
        } else {
            backToTopBtn.style.display = 'none';
        }
    }
}

// Scroll to top function
function scrollToTop() {
    const glossaryList = document.getElementById('glossary-list');
    if (glossaryList) {
        glossaryList.scrollTop = 0;
    }
}

// Initialize glossary when app loads
function initializeGlossary() {
    // Sort glossary alphabetically on load
    bibleGlossary.sort((a, b) => a.term.localeCompare(b.term));
}