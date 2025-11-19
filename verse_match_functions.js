// Verse Match Game Variables
let matchGameActive = false;
let matchStreak = 0;
let shuffledPairs = [];
let currentPairIndex = 0;

// Get random options for multiple choice
function getRandomOptions(correctGenZ) {
    // Get 3 random wrong answers
    const wrongOptions = verseMatchPairs
        .filter(pair => pair.genZ !== correctGenZ)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3)
        .map(pair => pair.genZ);
    
    // Combine with correct answer and shuffle
    const allOptions = [...wrongOptions, correctGenZ];
    return shuffleArray(allOptions);
}

// Show Verse Match Modal
function startVerseMatch() {
    console.log('🎮 Starting Verse Match...');
    const modal = document.getElementById('verse-match-modal');
    if (!modal) {
        console.error('❌ Verse Match modal not found!');
        showToast('Game loading error. Please refresh page.', 'error');
        return;
    }
    showMatchStartScreen();
    modal.classList.add('active');
}

// Hide Verse Match Modal
function hideVerseMatch() {
    const modal = document.getElementById('verse-match-modal');
    if (modal) modal.classList.remove('active');
    resetMatchGame();
}

// Show Start Screen
function showMatchStartScreen() {
    const startScreen = document.getElementById('match-start-screen');
    const gameScreen = document.getElementById('match-game-screen');
    const resultsScreen = document.getElementById('match-results-screen');
    
    if (startScreen) startScreen.classList.remove('hidden');
    if (gameScreen) gameScreen.classList.add('hidden');
    if (resultsScreen) resultsScreen.classList.add('hidden');
}

// Start the Game
function startMatchGame() {
    console.log('🚀 Starting Verse Match Game...');
    
    matchStreak = 0;
    matchGameActive = true;
    
    // Shuffle all pairs and start fresh
    shuffledPairs = shuffleArray([...verseMatchPairs]);
    currentPairIndex = 0;
    
    const startScreen = document.getElementById('match-start-screen');
    const gameScreen = document.getElementById('match-game-screen');
    const resultsScreen = document.getElementById('match-results-screen');
    const feedbackEl = document.getElementById('match-feedback');
    
    if (startScreen) startScreen.classList.add('hidden');
    if (gameScreen) gameScreen.classList.remove('hidden');
    if (resultsScreen) resultsScreen.classList.add('hidden');
    if (feedbackEl) feedbackEl.classList.add('hidden');
    
    loadNextMatch();
}

// Load next match
function loadNextMatch() {
    console.log('📖 Loading next match...');
    
    // If we've gone through all pairs, reshuffle
    if (currentPairIndex >= shuffledPairs.length) {
        console.log('🔄 Reshuffling pairs...');
        shuffledPairs = shuffleArray([...verseMatchPairs]);
        currentPairIndex = 0;
    }
    
    const currentPair = shuffledPairs[currentPairIndex];
    console.log('📝 Current pair:', currentPair);
    
    if (!currentPair) {
        console.error('❌ No current pair found!');
        return;
    }
    
    const options = getRandomOptions(currentPair.genZ);
    console.log('✅ Options generated:', options.length);
    
    // Update UI
    const scoreEl = document.getElementById('match-score');
    const originalVerseEl = document.getElementById('original-verse');
    const optionsContainer = document.getElementById('match-options');
    
    if (scoreEl) {
        scoreEl.textContent = matchStreak;
        console.log('🔥 Score updated to:', matchStreak);
    }
    
    if (originalVerseEl) {
        originalVerseEl.textContent = `"${currentPair.original}"`;
        console.log('📜 Original verse set');
    }
    
    if (optionsContainer) {
        optionsContainer.innerHTML = ''; // Clear first
        
        options.forEach((option, index) => {
            const button = document.createElement('button');
            button.className = 'btn btn-secondary match-option';
            button.style.textAlign = 'left';
            button.style.justifyContent = 'flex-start';
            button.style.whiteSpace = 'normal';
            button.style.height = 'auto';
            button.style.minHeight = '60px';
            button.style.padding = '12px';
            button.style.marginBottom = '8px';
            button.textContent = option;
            
            button.onclick = () => {
                console.log('🖱️ Option clicked:', index);
                selectMatchOption(index, option);
            };
            
            optionsContainer.appendChild(button);
        });
        console.log('🎯 Options buttons created:', options.length);
    }
    
    // Store current correct answer for checking
    window.currentCorrectGenZ = currentPair.genZ;
    window.currentReference = currentPair.reference;
    
    console.log('✅ Match loaded successfully!');
}

// Select an option
function selectMatchOption(optionIndex, selectedGenZ) {
    console.log('🎯 Option selected:', optionIndex);
    
    if (!matchGameActive) {
        console.log('❌ Game not active!');
        return;
    }
    
    const isCorrect = selectedGenZ === window.currentCorrectGenZ;
    const feedback = document.getElementById('match-feedback');
    const options = document.querySelectorAll('.match-option');
    
    matchGameActive = false;
    
    // Highlight selected option
    if (options[optionIndex]) {
        options[optionIndex].classList.add(isCorrect ? 'btn-primary' : 'btn-danger');
        options[optionIndex].classList.remove('btn-secondary');
    }
    
    if (isCorrect) {
        matchStreak++;
        if (feedback) {
            feedback.innerHTML = `
                <div style="color: var(--accent-sage); font-weight: 700; font-size: 1.2rem;">
                    ✅ Correct! +1 to streak 🔥
                </div>
                <div style="font-size: 0.9rem; margin-top: 5px;">
                    Reference: ${window.currentReference}
                </div>
            `;
            feedback.style.background = 'rgba(102, 187, 106, 0.2)';
            feedback.classList.remove('hidden');
        }
        
        // Move to next pair after delay
        setTimeout(() => {
            currentPairIndex++;
            matchGameActive = true;
            loadNextMatch();
            if (feedback) feedback.classList.add('hidden');
        }, 1500);
        
    } else {
        // Wrong answer - game over
        if (feedback) {
            feedback.innerHTML = `
                <div style="color: #c98986; font-weight: 700; font-size: 1.2rem;">
                    ❌ Wrong!
                </div>
                <div style="font-size: 0.9rem; margin-top: 5px;">
                    The correct match was: "${window.currentCorrectGenZ}"
                </div>
                <div style="font-size: 0.9rem; margin-top: 5px;">
                    Reference: ${window.currentReference}
                </div>
            `;
            feedback.style.background = 'rgba(201, 137, 134, 0.2)';
            feedback.classList.remove('hidden');
        }
        
        setTimeout(() => {
            endMatchGame();
        }, 2500);
    }
}

// End the game
function endMatchGame() {
    matchGameActive = false;
    
    const pointsEarned = matchStreak * 10; // 10 points per correct match
    const isNewRecord = matchStreak > (userData.matchHighScore || 0);
    
    if (isNewRecord && matchStreak > 0) {
        userData.matchHighScore = matchStreak;
        saveUserData();
    }
    
    addGamePoints(pointsEarned, 'match');
    
    // Update results screen
    const finalScoreEl = document.getElementById('match-final-score');
    const streakCountEl = document.getElementById('match-streak-count');
    const newRecordEl = document.getElementById('match-new-record');
    
    if (finalScoreEl) finalScoreEl.textContent = pointsEarned;
    if (streakCountEl) streakCountEl.textContent = matchStreak;
    
    if (isNewRecord && matchStreak > 0) {
        if (newRecordEl) newRecordEl.classList.remove('hidden');
    } else {
        if (newRecordEl) newRecordEl.classList.add('hidden');
    }
    
    document.getElementById('match-game-screen').classList.add('hidden');
    document.getElementById('match-results-screen').classList.remove('hidden');
    
    // Award achievement for completing match game
    if (window.zc && window.zc.onMatchGameCompleted) {
        window.zc.onMatchGameCompleted(matchStreak);
    }
}

// Restart game
function restartMatchGame() {
    resetMatchGame();
    startMatchGame();
}

// Reset game state
function resetMatchGame() {
    matchGameActive = false;
    matchStreak = 0;
    shuffledPairs = [];
    currentPairIndex = 0;
}
