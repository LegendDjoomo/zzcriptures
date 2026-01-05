// Current story state
let currentStoryKey = null;
let currentStoryChapterIndex = 0;
let currentFilter = 'all'; // Track active filter

// Main filter categories
const FILTER_CATEGORIES = [
    'all',
    'obedience',
    'sin',
    'grace',
    'temptation',
    'day in a life',
    'faith',
    'love',
    'courage',
    'mission',
    'compassion',
    'leadership',
    'miracles'
];

function populateGenZStories(filterTag) {
    const container = document.getElementById('genz-stories-list');
    if (!container) return;
    
    container.innerHTML = ''; // Clear existing content
    
    // Determine the active filter: prefer explicit parameter, otherwise use global currentFilter
    const activeFilter = (typeof filterTag !== 'undefined' && filterTag !== null) ? filterTag : (typeof currentFilter !== 'undefined' ? currentFilter : 'all');
    if (typeof filterTag !== 'undefined' && filterTag !== null) {
        currentFilter = filterTag;
    }

    // Ensure stories object exists
    if (typeof stories === 'undefined') {
        console.error('Stories data not found');
        container.innerHTML = '<p>Error loading stories.</p>';
        return;
    }

    const afLower = String(activeFilter).toLowerCase();

    // Filter stories based on tag
    const filteredStories = Object.entries(stories).filter(([key, story]) => {
        if (afLower === 'all') return true;
        
        if (!story.tag || !Array.isArray(story.tag)) {
            // Stories without tags go to 'others'
            return afLower === 'others';
        }
        
        // Check if any tag matches the filter (case-insensitive, partial match)
        const hasMatchingTag = story.tag.some(tag => {
            if (typeof tag !== 'string') return false;
            const tagLower = tag.toLowerCase();
            return tagLower.includes(afLower) || afLower.includes(tagLower);
        });
        
        if (afLower === 'others') {
            // 'others' shows stories that don't match any main category
            const matchesMainCategory = FILTER_CATEGORIES.slice(1).some(category => 
                story.tag.some(tag => {
                    if (typeof tag !== 'string') return false;
                    const tagLower = tag.toLowerCase();
                    const categoryLower = category.toLowerCase();
                    return tagLower.includes(categoryLower) || categoryLower.includes(tagLower);
                })
            );
            return !matchesMainCategory;
        }
        
        return hasMatchingTag;
    });

    // Show empty state if no stories match
    if (filteredStories.length === 0) {
        container.innerHTML = `
            <div class="stories-empty-state">
                <h3>No stories found</h3>
                <p>No stories match the "${filterTag}" category.</p>
            </div>
        `;
        return;
    }

    // Render filtered stories
    filteredStories.forEach(([key, story]) => {
        const card = document.createElement('div');
        card.className = 'story-card';
        // Set background image
        card.style.backgroundImage = `url('${story.image}')`;
        
        // Add click handler - now opens full-screen viewer
        card.onclick = () => openStoryViewer(key, 0);

        card.innerHTML = `
            <div class="story-overlay">
                <div class="story-title">${story.title}</div>
                <div class="story-meta">${story.totalChapters} Parts</div>
            </div>
        `;
        
        container.appendChild(card);
    });
}

// Initialize filter tabs
function initializeStoryFilters() {
    const container = document.getElementById('story-filter-tabs');
    if (!container) return;
    
    container.innerHTML = '';
    
    FILTER_CATEGORIES.forEach(category => {
        const tab = document.createElement('button');
        tab.className = 'filter-tab';
        if (category === currentFilter) {
            tab.classList.add('active');
        }
        tab.textContent = category;
        tab.onclick = () => filterStoriesByTag(category);
        container.appendChild(tab);
    });
}

// Filter stories by tag
function filterStoriesByTag(tag) {
    currentFilter = tag;
    
    // Update active tab
    document.querySelectorAll('.filter-tab').forEach(tab => {
        if (tab.textContent.toLowerCase() === tag.toLowerCase()) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });
    
    // Re-populate stories with filter
    populateGenZStories(tag);
}

// Open the full-screen story viewer
function openStoryViewer(storyKey, chapterIndex) {
    const story = stories[storyKey];
    if (!story) return;
    
    const chapter = story.chapters[chapterIndex];
    if (!chapter) return;

    // Store current state
    currentStoryKey = storyKey;
    currentStoryChapterIndex = chapterIndex;

    // Get viewer elements
    const viewer = document.getElementById('genz-story-viewer');
    const title = document.getElementById('story-viewer-title');
    const partIndicator = document.getElementById('story-part-indicator');
    const heading = document.getElementById('story-viewer-heading');
    const body = document.getElementById('story-viewer-body');
    const progressBar = document.getElementById('story-progress-bar');
    const prevBtn = document.getElementById('story-prev-btn');
    const nextBtn = document.getElementById('story-next-btn');
    const reflectSection = document.getElementById('story-reflect-section');
    const reflectContent = document.getElementById('story-reflect-content');

    if (!viewer) return;

    // Update content
    title.textContent = `${story.title}: Part ${chapter.num}`;
    partIndicator.textContent = `Part ${chapter.num} of ${story.totalChapters}`;
    heading.textContent = chapter.heading;
    body.innerHTML = chapter.content;

    // Update progress bar
    const progress = (chapter.num / story.totalChapters) * 100;
    progressBar.style.width = `${progress}%`;

    // Update navigation buttons
    if (chapterIndex > 0) {
        prevBtn.disabled = false;
    } else {
        prevBtn.disabled = true;
    }

    if (chapterIndex < story.totalChapters - 1) {
        nextBtn.disabled = false;
        nextBtn.textContent = 'Next Part →';
    } else {
        nextBtn.disabled = false;
        nextBtn.textContent = 'Finish';
    }

    // Handle reflect section (if exists in chapter)
    if (chapter.reflect) {
        reflectContent.textContent = chapter.reflect;
        reflectSection.style.display = 'block';
    } else {
        reflectSection.style.display = 'none';
    }

    // Ensure the viewer reflects the current theme (copy theme classes from body)
    const bodyClasses = ['theme-flex', 'theme-aesthetic', 'dark-mode', 'theme-light'];
    bodyClasses.forEach(c => {
        if (document.body.classList.contains(c)) viewer.classList.add(c);
        else viewer.classList.remove(c);
    });

    // Also set inline fallback using computed story vars (helps when CSS specificity blocks variables)
    try {
        const cs = getComputedStyle(document.body);
        const bg = cs.getPropertyValue('--story-bg').trim();
        const text = cs.getPropertyValue('--story-text').trim();
        if (bg) viewer.style.background = bg;
        if (text) viewer.style.color = text;
    } catch (e) { /* ignore */ }

    // Show viewer with animation
    viewer.classList.add('active');
}

// Close story viewer
function closeStoryViewer() {
    const viewer = document.getElementById('genz-story-viewer');
    if (viewer) {
        viewer.classList.remove('active');
        // remove any theme classes and inline fallbacks
        ['theme-flex','theme-aesthetic','dark-mode','theme-light'].forEach(c => viewer.classList.remove(c));
        viewer.style.background = '';
        viewer.style.color = '';
    }
    currentStoryKey = null;
    currentStoryChapterIndex = 0;
}

// Navigate to previous chapter
function navigatePreviousChapter() {
    if (currentStoryKey && currentStoryChapterIndex > 0) {
        openStoryViewer(currentStoryKey, currentStoryChapterIndex - 1);
    }
}

// Navigate to next chapter
function navigateNextChapter() {
    if (currentStoryKey) {
        const story = stories[currentStoryKey];
        if (currentStoryChapterIndex < story.totalChapters - 1) {
            openStoryViewer(currentStoryKey, currentStoryChapterIndex + 1);
        } else {
            // Finished the story - return to story list
            closeStoryViewer();
            showSection('genz-stories-section');
        }
    }
}

// Share story function
function shareStory() {
    const story = stories[currentStoryKey];
    if (!story) return;
    
    const chapter = story.chapters[currentStoryChapterIndex];
    const shareText = `Check out this story: ${story.title} - ${chapter.heading}`;
    
    if (navigator.share) {
        navigator.share({
            title: story.title,
            text: shareText,
            url: window.location.href
        }).catch(err => console.log('Error sharing:', err));
    } else {
        // Fallback - copy to clipboard
        navigator.clipboard.writeText(shareText).then(() => {
            showToast('Link copied to clipboard!');
        });
    }
}

// Expose functions globally
window.populateGenZStories = populateGenZStories;
window.initializeStoryFilters = initializeStoryFilters;
window.filterStoriesByTag = filterStoriesByTag;
window.openStoryViewer = openStoryViewer;
window.closeStoryViewer = closeStoryViewer;
window.navigatePreviousChapter = navigatePreviousChapter;
window.navigateNextChapter = navigateNextChapter;
window.shareStory = shareStory;