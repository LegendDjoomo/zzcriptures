/**
 * Daily Fact - Shows a daily Bible Fun Fact
 * Uses the bibleFunFacts array from Fun_Facts_items.js
 * Updates daily like the Daily Verse
 */

/**
 * Get daily fact based on current date
 * Same fact for entire day
 */
function getDailyFact() {
    const today = new Date();
    const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 86400000);
    const index = dayOfYear % bibleFunFacts.length;
    return bibleFunFacts[index];
}

/**
 * Display the daily fact on the home screen
 */
function displayDailyFact() {
    const fact = getDailyFact();
    
    const emojiElement = document.getElementById('dyk-emoji');
    const titleElement = document.getElementById('dyk-title');
    const contentElement = document.getElementById('dyk-content');
    
    if (emojiElement && titleElement && contentElement) {
        emojiElement.textContent = fact.emoji;
        titleElement.textContent = fact.title;
        contentElement.textContent = fact.content;
        
        // Add a subtle fade-in animation
        contentElement.style.animation = 'none';
        setTimeout(() => {
            contentElement.style.animation = 'fadeIn 0.6s ease-in';
        }, 10);
    }
}

// Initialize daily fact on page load
document.addEventListener('DOMContentLoaded', function() {
    // Check if bibleFunFacts is loaded (wait a bit if needed)
    if (typeof bibleFunFacts !== 'undefined') {
        displayDailyFact();
    } else {
        // Retry after a short delay if bibleFunFacts hasn't loaded yet
        setTimeout(displayDailyFact, 500);
    }
});
