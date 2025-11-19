const bibleFunFacts = [
    {
        title: "Shortest Verse",
        content: "The shortest verse in the Bible is 'Jesus wept.' (John 11:35). It's only 9 letters in English and 16 in Greek!",
        emoji: "📏",
        reference: "John 11:35",
        category: "Bible Stats"
    },
    {
        title: "Longest Verse", 
        content: "The longest verse in the Bible is Esther 8:9 with 90 words in the original Hebrew!",
        emoji: "📜",
        reference: "Esther 8:9",
        category: "Bible Stats"
    },
    {
        title: "Middle of the Bible",
        content: "Psalm 118:8 is the middle verse of the entire Bible! It says 'It is better to take refuge in the Lord than to trust in humans.'",
        emoji: "🎯",
        reference: "Psalm 118:8",
        category: "Bible Stats"
    },
    {
        title: "Noah's Ark Dimensions",
        content: "Noah's Ark was 300 cubits long, 50 cubits wide, and 30 cubits high. That's about 450 feet long - longer than a football field!",
        emoji: "🚢",
        reference: "Genesis 6:15",
        category: "Old Testament"
    },
    {
        title: "Manna from Heaven",
        content: "The Israelites ate manna for 40 years in the desert! The word 'manna' literally means 'What is it?' in Hebrew.",
        emoji: "🍞",
        reference: "Exodus 16:35",
        category: "Old Testament"
    },
    {
        title: "Jonah's Great Fish",
        content: "The Bible never actually says Jonah was swallowed by a whale! It calls it a 'great fish' or 'huge fish'.",
        emoji: "🐟",
        reference: "Jonah 1:17",
        category: "Old Testament"
    },
    {
        title: "Paul's Letters",
        content: "The Apostle Paul wrote 13 books of the New Testament - nearly half of all the New Testament books!",
        emoji: "✉️",
        reference: "Various New Testament Books",
        category: "New Testament"
    },
    {
        title: "Jesus' Genealogy",
        content: "Jesus' genealogy in Matthew includes 5 women: Tamar, Rahab, Ruth, Bathsheba, and Mary - unusual for ancient genealogies!",
        emoji: "🌳",
        reference: "Matthew 1:1-17",
        category: "New Testament"
    },
    {
        title: "The Lord's Prayer",
        content: "The Lord's Prayer is only 66 words long in the King James Version, but it's one of the most famous prayers in history!",
        emoji: "🙏",
        reference: "Matthew 6:9-13",
        category: "New Testament"
    },
    {
        title: "Books of the Bible",
        content: "The Bible has 66 books total: 39 in the Old Testament and 27 in the New Testament.",
        emoji: "📚",
        reference: "Complete Bible",
        category: "Bible Stats"
    },
    {
        title: "Written Over 1500 Years",
        content: "The Bible was written over approximately 1500 years by 40 different authors from various backgrounds!",
        emoji: "⏳",
        reference: "Complete Bible",
        category: "Bible Stats"
    },
    {
        title: "Most Mentioned Woman",
        content: "Mary (Jesus' mother) is the most mentioned woman in the Bible, appearing about 50 times!",
        emoji: "👑",
        reference: "Various Gospels",
        category: "People"
    },
    {
        title: "Longest Life",
        content: "Methuselah lived the longest life recorded in the Bible - 969 years!",
        emoji: "🎂",
        reference: "Genesis 5:27",
        category: "Old Testament"
    },
    {
        title: "Shortest Psalm",
        content: "Psalm 117 is the shortest chapter in the Bible with only 2 verses!",
        emoji: "📝",
        reference: "Psalm 117",
        category: "Bible Stats"
    },
    {
        title: "Longest Psalm", 
        content: "Psalm 119 is the longest chapter in the Bible with 176 verses!",
        emoji: "📖",
        reference: "Psalm 119",
        category: "Bible Stats"
    },
    {
        title: "Jesus' Miracles",
        content: "Jesus performed at least 37 recorded miracles in the Gospels, but John says there were many more not written down!",
        emoji: "✨",
        reference: "John 21:25",
        category: "New Testament"
    },
    {
        title: "The Ten Commandments",
        content: "The Ten Commandments appear twice in the Bible - in Exodus 20 and Deuteronomy 5!",
        emoji: "⚖️",
        reference: "Exodus 20, Deuteronomy 5",
        category: "Old Testament"
    },
    {
        title: "Biblical Languages",
        content: "The Bible was originally written in 3 languages: Hebrew (most of OT), Aramaic (parts of Daniel/Ezra), and Greek (NT)!",
        emoji: "🔤",
        reference: "Complete Bible",
        category: "Bible Stats"
    },
    {
        title: "David's Psalms",
        content: "King David wrote at least 73 of the 150 Psalms in the Bible!",
        emoji: "🎵",
        reference: "Book of Psalms",
        category: "Old Testament"
    },
    {
        title: "Proverbs Collection",
        content: "Most of the Proverbs were written by Solomon, but chapters 30-31 were written by Agur and King Lemuel!",
        emoji: "💡",
        reference: "Proverbs 30:1, 31:1",
        category: "Old Testament"
    },
    {
        title: "Paul's Trade",
        content: "The Apostle Paul was a tentmaker by trade! He supported himself while preaching.",
        emoji: "⛺",
        reference: "Acts 18:3",
        category: "New Testament"
    },
    {
        title: "Jesus' Brothers",
        content: "Jesus had at least 4 brothers: James, Joseph, Simon, and Judas, and some sisters too!",
        emoji: "👨‍👦‍👦",
        reference: "Matthew 13:55-56",
        category: "New Testament"
    },
    {
        title: "The Good Samaritan",
        content: "The Parable of the Good Samaritan is only found in Luke's Gospel, not in Matthew, Mark, or John!",
        emoji: "🤝",
        reference: "Luke 10:25-37",
        category: "New Testament"
    },
    {
        title: "Elijah's Chariot",
        content: "Elijah didn't actually die - he was taken up to heaven in a chariot of fire!",
        emoji: "🔥",
        reference: "2 Kings 2:11",
        category: "Old Testament"
    },
    {
        title: "Gideon's Army",
        content: "God reduced Gideon's army from 32,000 to just 300 men to show that victory comes from God, not numbers!",
        emoji: "⚔️",
        reference: "Judges 7:2-7",
        category: "Old Testament"
    },
    {
    title: "Daniel in the Lion's Den",
    content: "Daniel trusted God fully, and He shut the mouths of lions to keep Daniel safe all night!",
    emoji: "🦁",
    reference: "Daniel 6:16-23",
    category: "Old Testament"
},
{
    title: "Joshua and the Sun",
    content: "God made the sun stand still for a whole day so Joshua could finish the battle—talk about divine backup!",
    emoji: "☀️",
    reference: "Joshua 10:12-14",
    category: "Old Testament"
},
{
    title: "Shadrach, Meshach, Abednego",
    content: "These three refused to bow to a statue and survived a blazing furnace without a scratch. God’s got your back!",
    emoji: "🔥🛡️",
    reference: "Daniel 3:16-28",
    category: "Old Testament"
},
{
    title: "Moses and the Red Sea",
    content: "Moses parted the Red Sea with God’s power, giving Israel a dry path and saving them from Pharaoh’s army!",
    emoji: "🌊",
    reference: "Exodus 14:21-22",
    category: "Old Testament"
},
{
    title: "Elisha and the Bears",
    content: "Elisha cursed some rude kids, and 2 bears came out and taught them a lesson—God takes disrespect seriously!",
    emoji: "🐻",
    reference: "2 Kings 2:23-24",
    category: "Old Testament"
},
{
    title: "Noah's Ark",
    content: "Noah built a massive ark to survive the flood God sent. Talk about extreme prep energy! 🌧️🛶",
    emoji: "🛶",
    reference: "Genesis 6:14-22",
    category: "Old Testament"
},
{
    title: "Samson's Strength",
    content: "Samson was insane strong 'cause of his hair. When he lost it, he lost his superpowers—God’s plan, not gym gains!",
    emoji: "💪",
    reference: "Judges 16:17-20",
    category: "Old Testament"
},
{
    title: "Elijah vs the Prophets of Baal",
    content: "Elijah called down fire from heaven to roast the altar, showing God’s power beats fake flexes any day!",
    emoji: "🔥⚡",
    reference: "1 Kings 18:36-38",
    category: "Old Testament"
},
{
    title: "Jonah and the Big Fish",
    content: "Jonah got swallowed by a giant fish for three days—God gave him a timeout to rethink his choices!",
    emoji: "🐋",
    reference: "Jonah 1:17",
    category: "Old Testament"
},
{
    title: "David vs Goliath",
    content: "David took down a giant with just a sling and a rock. Size doesn’t flex on God’s favor!",
    emoji: "🪨",
    reference: "1 Samuel 17:49-50",
    category: "Old Testament"
},
{
    title: "Hezekiah’s Miracle",
    content: "God made the sun go backward to prove He’s the ultimate boss of time. No cap.",
    emoji: "☀️⏪",
    reference: "Isaiah 38:8",
    category: "Old Testament"
},
{
    title: "Jacob’s Ladder",
    content: "Jacob saw angels going up and down a ladder to heaven—God’s way of saying He’s always on the move for us.",
    emoji: "🪜✨",
    reference: "Genesis 28:12",
    category: "Old Testament"
},
{
    title: "Methuselah’s Longevity",
    content: "Methuselah lived 969 years—the Bible’s ultimate endurance record. Imagine the patience and life hacks he had! 🕰️",
    emoji: "🧓",
    reference: "Genesis 5:27",
    category: "Old Testament"
},
{
    title: "Balaam’s Talking Donkey",
    content: "A donkey straight-up talked to Balaam to save him from sinning. God uses whatever works, even four-legged critics! 🐴",
    emoji: "🗣️",
    reference: "Numbers 22:28-30",
    category: "Old Testament"
},
{
    title: "Hezekiah’s Sun Shadow Trick",
    content: "God made the shadow on the sun go backward as proof of His power—no time machine needed, just divine flex. ⏳☀️",
    emoji: "☀️",
    reference: "Isaiah 38:8",
    category: "Old Testament"
},
{
    title: "Elisha and the Floating Axe",
    content: "Elisha made a lost axe head float in water. Proof: God can make the impossible look chill. 🪓💧",
    emoji: "🪓",
    reference: "2 Kings 6:5-7",
    category: "Old Testament"
},
{
    title: "The Sun Stood Still",
    content: "Joshua literally paused time—well, the sun did—to finish a battle. Imagine stopping a whole day just to win! 🌞",
    emoji: "🌞",
    reference: "Joshua 10:12-14",
    category: "Old Testament"
},
{
    title: "Jael and Sisera",
    content: "Jael killed the enemy general by driving a tent peg through his head. God sometimes raises unexpected warriors. ⚡",
    emoji: "📌",
    reference: "Judges 4:21",
    category: "Old Testament"
},
{
    title: "The Valley of Dry Bones",
    content: "God brought an entire valley of skeletons back to life—talk about an ultimate resurrection flex! ☠️➡️🧍",
    emoji: "💀",
    reference: "Ezekiel 37:1-10",
    category: "Old Testament"
},
{
    title: "Saul and the Spirit’s Exit",
    content: "God’s Spirit literally left King Saul, showing that divine favor isn’t permanent if you go rogue. 😬",
    emoji: "💨",
    reference: "1 Samuel 16:14",
    category: "Old Testament"
},
{
    title: "The Floating Cloud Guidance",
    content: "God guided Israel with a cloud by day and fire by night—no GPS, just pure divine navigation. ☁️🔥",
    emoji: "🌫️",
    reference: "Exodus 13:21-22",
    category: "Old Testament"
},
{
    title: "The Earth Swallowed Korah",
    content: "Korah and his crew rebelled, and the ground literally opened to swallow them—instant divine accountability. 🌍⚡",
    emoji: "🌌",
    reference: "Numbers 16:31-33",
    category: "Old Testament"
},
{
    title: "The Floating Dead Sea Scrolls Prophecy",
    content: "Ezekiel saw mysterious wheels and creatures full of eyes moving in sync—basically God showing the cosmic squad His control. 👁️✨",
    emoji: "🌀",
    reference: "Ezekiel 1:15-21",
    category: "Old Testament"
},
{
    title: "The 7000 Who Never Bent Knees",
    content: "God told Elijah 7,000 people never worshiped Baal or kissed him—small faithful squad > big fake flex. 🙌",
    emoji: "✊",
    reference: "1 Kings 19:18",
    category: "Old Testament"
},
{
    title: "Hezekiah’s Illness Rewind",
    content: "God added 15 years to Hezekiah’s life after praying—divine bonus time isn’t just a metaphor. ⏳💊",
    emoji: "🕰️",
    reference: "Isaiah 38:5",
    category: "Old Testament"
},
{
    title: "The Sunflower Army",
    content: "When Gideon’s army was reduced to 300, God used trumpets, jars, and torches to make the enemy freak out—strategy upgrade from Heaven. 🎺🔥",
    emoji: "🛡️",
    reference: "Judges 7:16-22",
    category: "Old Testament"
},
{
    title: "Peter Walks on Water",
    content: "Peter tried to walk on water toward Jesus, legit floating until fear took over—faith + focus = miraculous flex. 🌊✋",
    emoji: "🚶‍♂️",
    reference: "Matthew 14:29-31",
    category: "New Testament"
},
{
    title: "Paul Survives a Snake Bite",
    content: "Paul was bitten by a poisonous snake, shook it off like it was nothing—God really had his back. 🐍💥",
    emoji: "🪤",
    reference: "Acts 28:3-6",
    category: "New Testament"
},
{
    title: "The Seventy Times Seven Rule",
    content: "Jesus said forgive 490 times—basically infinite patience flex. Mercy is next-level power. ✨",
    emoji: "♾️",
    reference: "Matthew 18:21-22",
    category: "New Testament"
},
{
    title: "The Eutychus Nap",
    content: "A dude named Eutychus fell asleep and dropped three stories during Paul’s sermon—God woke him up, no cap. 😴⬇️",
    emoji: "🛏️",
    reference: "Acts 20:9-10",
    category: "New Testament"
},
{
    title: "The Prison Shake-Up",
    content: "Paul and Silas got jailed, sang at midnight, and the prison shook—doors open, chains gone. God’s ultimate jailbreak. 🎶⚡",
    emoji: "⛓️",
    reference: "Acts 16:25-26",
    category: "New Testament"
},
{
    title: "John’s Island Vision",
    content: "On Patmos, John saw a rainbow-eyed Christ, a scroll with seals, and angels everywhere—apocalyptic aesthetic unlocked. 🌈👁️",
    emoji: "📜",
    reference: "Revelation 1:12-16",
    category: "New Testament"
},
{
    title: "The Floating Axe Head",
    content: "Elisha made an iron axe head float in water. God can turn even lost tools into miracles. 🪓💦",
    emoji: "🪄",
    reference: "2 Kings 6:5-7",
    category: "Old Testament"
},
{
    title: "The Talking Donkey 2.0",
    content: "Balaam’s donkey literally argues with him—God will even use stubborn animals to school humans. 🐴💬",
    emoji: "🐴",
    reference: "Numbers 22:28-30",
    category: "Old Testament"
},
{
    title: "The Sun Reverses",
    content: "God made the shadow go backward for King Hezekiah—time manipulation God style. ⏪☀️",
    emoji: "☀️",
    reference: "Isaiah 38:8",
    category: "Old Testament"
},
{
    title: "The Valley of Dry Bones",
    content: "Ezekiel saw bones come back to life—resurrection flex on a mass scale. ☠️➡️🧍",
    emoji: "💀",
    reference: "Ezekiel 37:1-10",
    category: "Old Testament"
},
{
    title: "The She-Bears Lesson",
    content: "Elisha cursed disrespectful kids, and 2 bears taught them a brutal lesson. God’s strict, no cap. 🐻⚡",
    emoji: "🐻",
    reference: "2 Kings 2:23-24",
    category: "Old Testament"
},
{
    title: "Paul Survives Snake Bite",
    content: "A poisonous snake bites Paul, he shakes it off—God literally shielding Him like a boss. 🐍🛡️",
    emoji: "🐍",
    reference: "Acts 28:3-6",
    category: "New Testament"
},
{
    title: "Eutychus Falls Asleep",
    content: "During Paul’s sermon, Eutychus naps and falls 3 stories—but God revives him. Sleep flex, divine style. 😴⬇️",
    emoji: "🛌",
    reference: "Acts 20:9-10",
    category: "New Testament"
},
{
    title: "The Midnight Prison Shake",
    content: "Paul and Silas sing at midnight, prison shakes, doors open, chains gone—God’s jailbreak energy. ⛓️🎶",
    emoji: "⚡",
    reference: "Acts 16:25-26",
    category: "New Testament"
},
{
    title: "John’s Patmos Vision",
    content: "John sees rainbow-eyed Christ, a sealed scroll, and angels everywhere—apocalypse aesthetic unlocked. 🌈👁️",
    emoji: "📜",
    reference: "Revelation 1:12-16",
    category: "New Testament"
},
{
    title: "The Fiery Furnace Crew",
    content: "Shadrach, Meshach, and Abednego survive a blazing furnace untouched—God turns hot mess into hot flex. 🔥🛡️",
    emoji: "🔥",
    reference: "Daniel 3:16-28",
    category: "Old Testament"
},
{
    title: "Elijah’s Chariot",
    content: "Elijah didn’t die; God snatched him in a fiery chariot—exit like a legend. 🔥",
    emoji: "🔥",
    reference: "2 Kings 2:11",
    category: "Old Testament"
},
{
    title: "Gideon’s 300 vs. Thousands",
    content: "God shrinks Gideon’s army from 32,000 to 300 to show it’s Him, not numbers. ⚔️",
    emoji: "⚔️",
    reference: "Judges 7:2-7",
    category: "Old Testament"
},
{
    title: "Jacob’s Ladder",
    content: "Angels go up and down a ladder to heaven—God always moving for His squad. 🪜✨",
    emoji: "🪜",
    reference: "Genesis 28:12",
    category: "Old Testament"
},
{
    title: "Jael vs. Sisera",
    content: "Jael drives a tent peg through the enemy general—God raises unexpected warriors. 📌⚡",
    emoji: "📌",
    reference: "Judges 4:21",
    category: "Old Testament"
},
{
    title: "Balaam’s Prophetic Blessing",
    content: "Balaam gets sent to curse Israel but ends up blessing them—God flips curses into blessings. 🌀",
    emoji: "🔮",
    reference: "Numbers 23:20-23",
    category: "Old Testament"
}




];