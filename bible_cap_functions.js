// Shuffle function for better randomization
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Improved randomizer 
let shuffledStatements = [];
let currentShuffleIndex = 0;

function getNextRandomStatement() {
    if (currentShuffleIndex >= shuffledStatements.length) {
        shuffledStatements = shuffleArray(capStatements);
        currentShuffleIndex = 0;
    }
    
    const statement = shuffledStatements[currentShuffleIndex];
    currentShuffleIndex++;
    return statement;
}

// Game Variables
let capCurrentIndex = 0;
let capStreak = 0;
let capGameActive = false;
let capUsedStatements = [];
let touchStartX = 0;
let touchEndX = 0;

function startBibleOrCap() {
    // Prefer modal when available, otherwise fall back to the in-page Activities UI
    const modal = document.getElementById('bible-cap-modal');
    const startScreen = document.getElementById('cap-start-screen');

    showCapStartScreen();

    if (modal) {
        modal.classList.add('active');
        return;
    }

    // Fallback: show the Activities section and reveal the game start screen
    console.warn('[startBibleOrCap] bible-cap-modal not found, using in-page fallback');
    try {
        showSection('activities-section');
        if (startScreen) {
            startScreen.classList.remove('hidden');
            startScreen.scrollIntoView({ behavior: 'smooth' });
        }
    } catch (err) {
        console.error('[startBibleOrCap] fallback failed', err);
        showToast('Game loading error. Please refresh page.', 'error');
    }
}

function hideCapGame() {
    const modal = document.getElementById('bible-cap-modal');
    if (modal) {
        modal.classList.remove('active');
    } else {
        // hide in-page screens if present
        ['cap-start-screen', 'cap-game-screen', 'cap-results-screen'].forEach(id => {
            const el = document.getElementById(id);
            if (el) el.classList.add('hidden');
        });
        // Return to Activities section for fallback UX
        try { showSection('activities-section'); } catch (e) { /* ignore */ }
    }
    resetCapGame();
}

function showCapStartScreen() {
    const startScreen = document.getElementById('cap-start-screen');
    const gameScreen = document.getElementById('cap-game-screen');
    const resultsScreen = document.getElementById('cap-results-screen');
    
    if (startScreen) startScreen.classList.remove('hidden');
    if (gameScreen) gameScreen.classList.add('hidden');
    if (resultsScreen) resultsScreen.classList.add('hidden');
}

function startCapGame() {
    capStreak = 0;
    capGameActive = true;
    
    // Initialize shuffle on game start
    shuffledStatements = shuffleArray(capStatements);
    currentShuffleIndex = 0;
    
    document.getElementById('cap-start-screen')?.classList.add('hidden');
    document.getElementById('cap-game-screen')?.classList.remove('hidden');
    document.getElementById('cap-results-screen')?.classList.add('hidden');
    document.getElementById('cap-feedback')?.classList.add('hidden');
    
    loadNextCapStatement();
    setupSwipeListeners();
}
function loadNextCapStatement() {
    const statement = getNextRandomStatement();
    
    const statementEl = document.getElementById('cap-statement');
    const streakEl = document.getElementById('cap-streak-count');
    
    if (statementEl) statementEl.textContent = statement.text;
    if (streakEl) streakEl.textContent = capStreak;
    
    const card = document.getElementById('cap-card');
    if (card) {
        card.style.transform = 'translateX(0) rotate(0deg)';
        card.style.opacity = '1';
    }
    
    // Store current statement for answer checking
    window.currentCapStatement = statement;
}

function setupSwipeListeners() {
    const card = document.getElementById('cap-card');
    if (!card) return;
    
    card.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    
    card.addEventListener('touchmove', (e) => {
        if (!capGameActive) return;
        touchEndX = e.changedTouches[0].screenX;
        const diff = touchEndX - touchStartX;
        const rotation = diff / 20;
        card.style.transform = `translateX(${diff}px) rotate(${rotation}deg)`;
    }, { passive: true });
    
    card.addEventListener('touchend', () => {
        if (!capGameActive) return;
        const diff = touchEndX - touchStartX;
        
        if (Math.abs(diff) > 100) {
            const swipedRight = diff > 0;
            guessAnswer(swipedRight);
        } else {
            card.style.transform = 'translateX(0) rotate(0deg)';
        }
        
        touchStartX = 0;
        touchEndX = 0;
    });
}

function guessAnswer(guessReal) {
    if (!capGameActive) return;
    
    const currentStatement = window.currentCapStatement;
    if (!currentStatement) return;
    
    const isCorrect = guessReal === currentStatement.isReal;
    const feedback = document.getElementById('cap-feedback');
    const card = document.getElementById('cap-card');
    
    capGameActive = false;
    
    const direction = guessReal ? 1 : -1;
    if (card) {
        card.style.transform = `translateX(${direction * 1000}px) rotate(${direction * 30}deg)`;
        card.style.opacity = '0';
    }
    
    if (isCorrect) {
        capStreak++;
        if (feedback) {
            feedback.innerHTML = `
                <div style="color: var(--accent-sage); font-weight: 700; font-size: 1.2rem;">
                    ✅ Correct! 
                </div>
                <div style="font-size: 0.9rem; margin-top: 5px;">
                    ${currentStatement.isReal ? `Reference: ${currentStatement.reference}` : 'That was indeed CAP!'}
                </div>
            `;
            feedback.style.background = 'rgba(102, 187, 106, 0.2)';
            feedback.classList.remove('hidden');
        }
        
        setTimeout(() => {
            if (feedback) feedback.classList.add('hidden');
            if (card) {
                card.style.transition = 'none';
                card.style.transform = 'translateX(0) rotate(0deg)';
                card.style.opacity = '1';
                setTimeout(() => {
                    card.style.transition = 'transform 0.3s ease, opacity 0.3s ease';
                    capGameActive = true;
                    loadNextCapStatement();
                }, 50);
            }
        }, 1500);
        
    } else {
        if (feedback) {
            feedback.innerHTML = `
                <div style="color: #c98986; font-weight: 700; font-size: 1.2rem;">
                    ❌ Wrong!
                </div>
                <div style="font-size: 0.9rem; margin-top: 5px;">
                    ${currentStatement.isReal ? `It was REAL! ${currentStatement.reference}` : 'That was CAP!'}
                </div>
            `;
            feedback.style.background = 'rgba(201, 137, 134, 0.2)';
            feedback.classList.remove('hidden');
        }
        
        setTimeout(() => {
            endCapGame();
        }, 2000);
    }
}

function endCapGame() {
    capGameActive = false;
    
    const pointsEarned = capStreak * 5;
    const isNewRecord = capStreak > (userData.capBestStreak || 0);
    
    if (isNewRecord) {
        userData.capBestStreak = capStreak;
    }
    
    addGamePoints(pointsEarned, 'cap');
    
    const finalStreakEl = document.getElementById('cap-final-streak');
    const pointsEarnedEl = document.getElementById('cap-points-earned');
    const newRecordEl = document.getElementById('cap-new-record');
    
    if (finalStreakEl) finalStreakEl.textContent = capStreak;
    if (pointsEarnedEl) pointsEarnedEl.textContent = pointsEarned;
    
    if (isNewRecord && capStreak > 0) {
        newRecordEl?.classList.remove('hidden');
    } else {
        newRecordEl?.classList.add('hidden');
    }
    
    document.getElementById('cap-game-screen')?.classList.add('hidden');
    document.getElementById('cap-results-screen')?.classList.remove('hidden');
    
    // Award achievement for completing cap game
    if (window.zc && window.zc.onCapGameCompleted) {
        window.zc.onCapGameCompleted(capStreak, capStreak > 0);
    }
}

function restartCapGame() {
    resetCapGame();
    startCapGame();
}

function resetCapGame() {
    capStreak = 0;
    capGameActive = false;
    capUsedStatements = [];
    touchStartX = 0;
    touchEndX = 0;
}
