// Leaderboard Functions - Competitive Daily Update System

// Seeded random number generator for consistent daily scores
function seededRandom(seed) {
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
}

// Get today's date as a number (YYYYMMDD format)
function getTodayDateNumber() {
    const today = new Date();
    return today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
}

// Competitive fake players with varied skill levels
const FAKE_PLAYERS = [
    { name: "Sarah", basePoints: 1200, dailyGain: [80, 180], avatar: "👩", skill: 0.9 },
    { name: "Mike", basePoints: 1150, dailyGain: [70, 160], avatar: "👨", skill: 0.85 },
    { name: "Jessica", basePoints: 1100, dailyGain: [60, 150], avatar: "👩‍🦰", skill: 0.8 },
    { name: "David", basePoints: 1050, dailyGain: [50, 140], avatar: "👨‍🦱", skill: 0.75 },
    { name: "Emily", basePoints: 1000, dailyGain: [60, 130], avatar: "👱‍♀️", skill: 0.7 },
    { name: "James", basePoints: 950, dailyGain: [50, 120], avatar: "🧔", skill: 0.65 },
    { name: "Rachel", basePoints: 900, dailyGain: [40, 110], avatar: "👩‍🦱", skill: 0.6 },
    { name: "Chris", basePoints: 850, dailyGain: [40, 100], avatar: "👨‍🦰", skill: 0.55 },
    { name: "Amanda", basePoints: 800, dailyGain: [30, 90], avatar: "👱", skill: 0.5 },
    { name: "Daniel", basePoints: 750, dailyGain: [30, 80], avatar: "👨‍🦲", skill: 0.45 }
];

// Calculate a player's score for today
function calculateDailyScore(player, dayNumber) {
    const seed = dayNumber * 1000 + player.name.charCodeAt(0);
    const randomFactor = seededRandom(seed);
    
    // Calculate days since "start" (arbitrary start date)
    const startDate = 20250101; // Jan 1, 2025
    const daysSinceStart = Math.floor((dayNumber - startDate) / 1);
    
    // Each day, players gain points within their range
    let totalPoints = player.basePoints;
    
    for (let day = 0; day < daysSinceStart; day++) {
        const daySeed = (startDate + day) * 1000 + player.name.charCodeAt(0);
        const dayRandom = seededRandom(daySeed);
        
        // Random daily gain within the player's range
        const [minGain, maxGain] = player.dailyGain;
        const dailyPoints = Math.floor(minGain + dayRandom * (maxGain - minGain));
        
        // Apply skill factor (better players are more consistent)
        const skillBonus = player.skill * 20;
        totalPoints += dailyPoints + skillBonus;
    }
    
    // Add some variance for today specifically
    const todayBonus = Math.floor(randomFactor * 50);
    totalPoints += todayBonus;
    
    return Math.floor(totalPoints);
}

async function initializeLeaderboard() {
    console.log('🏆 Initializing Competitive Leaderboard...');
    try {
        await updateLeaderboardScores();
        renderLeaderboard();
        // Keep leaderboard fresh: recalc every 6 hours to reflect decay and daily fake player updates
        setInterval(async () => {
            await updateLeaderboardScores();
            renderLeaderboard();
        }, 6 * 60 * 60 * 1000);
    } catch (error) {
        console.error('Error initializing leaderboard:', error);
    }
}

async function updateLeaderboardScores() {
    console.log('🔄 Updating competitive leaderboard scores...');
    
    if (!db) await initDB();
    
    const today = getTodayDateNumber();
    
    // Get existing leaderboard
    let lb = await dbGet('leaderboard', 'scores');
    
    // Check if we need to update (new day or first time)
    const needsUpdate = !lb || !lb.lastUpdatedDate || lb.lastUpdatedDate !== today;
    
    if (needsUpdate) {
        console.log('📅 New day detected! Updating all player scores...');
        
        // Calculate today's scores for all fake players
        const fakeUsers = FAKE_PLAYERS.map(player => ({
            name: player.name,
            points: calculateDailyScore(player, today),
            avatar: player.avatar,
            isFake: true
        }));
        
        // Initialize or update leaderboard
        if (!lb) {
            lb = {
                id: 'scores',
                users: fakeUsers,
                lastUpdatedDate: today,
                lastUpdated: new Date().toISOString()
            };
        } else {
            // Update fake players' scores
            lb.users = lb.users.filter(u => !u.isFake); // Remove old fake players
            lb.users.push(...fakeUsers); // Add updated fake players
            lb.lastUpdatedDate = today;
            lb.lastUpdated = new Date().toISOString();
        }
        
        await dbSet('leaderboard', lb);
    }
    
    // Ensure current user is in the list and track last active time
    if (userData) {
        // Update user's lastActive timestamp when they play (if available), otherwise use existing
        const currentLastActive = userData.lastActive || new Date().toISOString();

        const userEntryIndex = lb.users.findIndex(u => u.name === userData.name && !u.isFake);
        if (userEntryIndex !== -1) {
            lb.users[userEntryIndex].points = userData.gamePoints || 0;
            lb.users[userEntryIndex].lastActive = currentLastActive;
        } else {
            lb.users.push({
                name: userData.name,
                points: userData.gamePoints || 0,
                avatar: "👤",
                isFake: false,
                lastActive: currentLastActive
            });
        }

        // Compute ranking points that factor in inactivity decay
        const DECAY_DAILY = 0.02; // 2% decay per day of inactivity
        const MIN_EFFECTIVE = 0.10; // at least 10% of points remain
        const today = new Date();

        lb.users = lb.users.map(u => {
            // Ensure lastActive exists; fake users are active daily
            if (!u.lastActive) {
                if (u.isFake) u.lastActive = new Date().toISOString();
                else u.lastActive = new Date().toISOString();
            }

            // Calculate days since last active
            const last = new Date(u.lastActive);
            const daysInactive = Math.max(0, Math.floor((today - last) / (1000 * 60 * 60 * 24)));

            // Effective ranking points: apply decay for human users only
            let rankPoints = u.points;
            if (!u.isFake) {
                const factor = Math.pow(1 - DECAY_DAILY, daysInactive);
                rankPoints = Math.max(Math.floor(u.points * factor), Math.floor(u.points * MIN_EFFECTIVE));
            } else {
                // Fake players are active daily; keep their calculated points
                rankPoints = u.points;
            }

            return Object.assign({}, u, { rankPoints: rankPoints, daysInactive: daysInactive });
        });

        // Sort by rankPoints (highest first), tie-breaker by raw points
        lb.users.sort((a, b) => (b.rankPoints - a.rankPoints) || (b.points - a.points));

        // Keep only top 15 to avoid clutter
        lb.users = lb.users.slice(0, 15);

        // Save back
        await dbSet('leaderboard', lb);
    }
}

function renderLeaderboard() {
    // Render into page and modal if present
    const pageContainer = document.getElementById('leaderboard-page-container');
    const modalContainer = document.getElementById('leaderboard-container');
    if (!pageContainer && !modalContainer) return;

    // Fetch latest data
    initDB().then(async () => {
        const lb = await dbGet('leaderboard', 'scores');
        if (!lb || !lb.users) return;

        let html = '<div class="leaderboard-list">';
        
        lb.users.forEach((user, index) => {
            const isCurrentUser = userData && user.name === userData.name && !user.isFake;
            const rank = index + 1;
            let rankClass = 'rank-other';
            let rankEmoji = '';
            
            if (rank === 1) {
                rankClass = 'rank-1';
                rankEmoji = '🥇';
            } else if (rank === 2) {
                rankClass = 'rank-2';
                rankEmoji = '🥈';
            } else if (rank === 3) {
                rankClass = 'rank-3';
                rankEmoji = '🥉';
            }

            // Determine stale indicator
            const daysInactive = user.daysInactive || 0;
            const stale = (!user.isFake && daysInactive >= 30);
            const staleBadge = stale ? `<span class="stale-badge">Stale</span>` : '';

            // Show effective ranking points in small text so users see why ranks moved
            const rankPointsDisplay = (typeof user.rankPoints !== 'undefined') ? ` (rank: ${user.rankPoints.toLocaleString()})` : '';

            html += `
                <div class="leaderboard-item ${isCurrentUser ? 'current-user' : ''}">
                    <div class="rank ${rankClass}">${rankEmoji || rank}</div>
                    <div class="avatar">${user.avatar || '👤'}</div>
                    <div class="info">
                        <div class="name">${user.name} ${isCurrentUser ? '(You)' : ''} ${staleBadge}</div>
                        <div class="points">${user.points.toLocaleString()} pts <span class="rank-points">${rankPointsDisplay}</span></div>
                        <div class="last-active" style="font-size:0.85rem; color:var(--text-muted);">${user.isFake ? 'Active' : (daysInactive === 0 ? 'Active today' : `${daysInactive} day${daysInactive===1?'':'s'} ago`)}</div>
                    </div>
                </div>
            `;
        });

        html += '</div>';
        
        // Add last updated info
        if (lb.lastUpdated) {
            const lastUpdate = new Date(lb.lastUpdated);
            html += `<div style="text-align: center; margin-top: 20px; color: var(--text-muted); font-size: 0.85rem;">
                Last updated: ${lastUpdate.toLocaleDateString()} at ${lastUpdate.toLocaleTimeString()}
            </div>`;
        }
        
        // Inject HTML into both page and modal containers if they exist
        if (pageContainer) pageContainer.innerHTML = html;
        if (modalContainer) modalContainer.innerHTML = html;
    });
}

function assignAvatarToUser(user) {
    // Helper to assign random avatars if needed
    const avatars = ["👨", "👩", "👨‍🦱", "👩‍🦰", "👱", "👱‍♀️", "🧔", "🧕"];
    user.avatar = avatars[Math.floor(Math.random() * avatars.length)];
}

// Expose globally
window.initializeLeaderboard = initializeLeaderboard;
window.updateLeaderboardScores = updateLeaderboardScores;
window.renderLeaderboard = renderLeaderboard;
window.assignAvatarToUser = assignAvatarToUser;
