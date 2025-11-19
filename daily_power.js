// Daily Power - Biblical Motivations in Gen Z Voice
const dailyPowerMotivations = [
    // God's Back
    "God got your back, don't back down.",
    "The Almighty got you covered, fr fr.",
    "Stay blessed, He stays loyal.",
    "God's grace hits different, trust it.",
    
    // Strength & Resilience
    "Strength looks different when God's in your corner.",
    "Built different with Jesus as your foundation.",
    "Your struggle is temporary, God's love is forever.",
    "Resilience is faith doing its thing.",
    "You're stronger than the storm, no cap.",
    
    // Trust & Faith
    "Faith over fear, always.",
    "Trust God's timeline, it slaps.",
    "He won't bring you to it if He can't bring you through it.",
    "Your faith is the blueprint, God's the architect.",
    "Believe in the impossible, that's where God lives.",
    
    // Overcoming
    "The victory's already written, you're just reading the ending.",
    "Every setback is a setup for a comeback.",
    "You're not just surviving, you're thriving in His grace.",
    "Defeat is not in God's dictionary.",
    "Rise up, that's what champions do.",
    
    // Love & Forgiveness
    "Love yourself like God loves you—unconditionally.",
    "Forgiveness is the cheat code to peace.",
    "Grace over judgment, always.",
    "You're worthy of love, especially God's.",
    "Let go of what God already forgave.",
    
    // Purpose & Direction
    "You're here for a reason, walk in it.",
    "Your purpose is bigger than your pain.",
    "God's got a plan and it's fire.",
    "Don't just exist, live your calling.",
    "You were born for this moment.",
    
    // Confidence & Identity
    "You're a child of the King, act like it.",
    "Your identity is in Christ, that's unshakeable.",
    "God made you intentional, not by accident.",
    "Walk in your power, you've got it in you.",
    "You're designed for greatness.",
    
    // Blessings & Abundance
    "Blessings are chasing you, turn around.",
    "God's provision never misses, ever.",
    "Abundance starts in your mind, then overflows.",
    "You're blessed beyond measure.",
    "Open your hands, He's pouring it out.",
    
    // Trials & Growth
    "Trials are just God's way of leveling you up.",
    "Pain is the tuition for transformation.",
    "What you're going through is making you stronger.",
    "God never wastes a struggle.",
    "Your testimony will set someone free.",
    
    // Prayer & Connection
    "Prayer changes things, and that thing is you.",
    "Talk to God, He's the best listener.",
    "Your prayers are hitting heaven, trust that.",
    "Connection with God hits different.",
    "He hears every word, every whisper.",
    
    // Peace & Anxiety
    "Peace isn't the absence of storms, it's trust in the captain.",
    "Anxiety? God said 'nah fam.'",
    "Cast your cares, carry His peace.",
    "Worry is renting space in your mind rent-free, evict it.",
    "Be still and know He's got it.",
    
    // Hope & Future
    "Hope deferred doesn't make you lose, it makes you determined.",
    "Your future is brighter than you think.",
    "God's promises never expire.",
    "The best is yet to come, that's facts.",
    "Your comeback story is about to go viral.",
    
    // Generosity & Service
    "Give and watch God multiply it back.",
    "Serving others serves your soul.",
    "Blessing others is the ultimate flex.",
    "Your gifts are meant to be shared.",
    "Give it all to God, watch the returns.",
    
    // Praise & Gratitude
    "Praise God even before you see it.",
    "Thankful is the new grateful.",
    "Count your blessings, not your problems.",
    "Gratitude shifts your whole vibe.",
    "Every moment with Him is a blessing.",
    
    // Truth & Wisdom
    "God's word is the realest truth you'll ever know.",
    "Wisdom is free, you just gotta ask.",
    "Truth hits harder than any lie.",
    "God's knowledge is streets ahead.",
    "Speak truth even when your voice shakes.",
    
    // Light & Darkness
    "You're the light, let it shine.",
    "Darkness got nothing on God's light.",
    "Be the light someone else is searching for.",
    "Your light affects everyone around you.",
    "Shine regardless of the darkness.",
    
    // Worthy & Valuable
    "You're worth the blood of Jesus, that says everything.",
    "Your value is not based on what you do, who you are.",
    "You're too valuable to waste on mediocrity.",
    "God sees your worth, even when you don't.",
    "You matter more than you think.",
];

/**
 * Get daily power motivation based on current date
 * Same motivation for entire day
 */
function getDailyPower() {
    const today = new Date();
    const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 86400000);
    const index = dayOfYear % dailyPowerMotivations.length;
    return dailyPowerMotivations[index];
}

/**
 * Display the daily power motivation on the home screen
 */
function displayDailyPower() {
    const dailyPowerElement = document.getElementById('daily-power-text');
    if (dailyPowerElement) {
        dailyPowerElement.textContent = getDailyPower();
        
        // Add a subtle fade-in animation
        dailyPowerElement.style.animation = 'none';
        setTimeout(() => {
            dailyPowerElement.style.animation = 'fadeIn 0.6s ease-in';
        }, 10);
    }
}

// Initialize daily power on page load
document.addEventListener('DOMContentLoaded', function() {
    displayDailyPower();
});
