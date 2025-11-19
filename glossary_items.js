// Bible Glossary Data
const bibleGlossary = [
    {
        term: "Abba",
        definition: "An Aramaic word meaning 'Father' - used by Jesus and early Christians to address God in an intimate, personal way.",
        category: "Theology",
        references: ["Romans 8:15", "Galatians 4:6", "Mark 14:36"],
        emoji: "🙏"
    },
    {
        term: "Apostle",
        definition: "Someone sent out with a message or mission. The 12 apostles were Jesus' closest followers, chosen to spread the gospel.",
        category: "People",
        references: ["Matthew 10:2-4", "Acts 1:26", "1 Corinthians 12:28"],
        emoji: "👥"
    },
    {
        term: "Baptism",
        definition: "A ceremony using water to symbolize spiritual cleansing, new life, and identification with Jesus' death and resurrection.",
        category: "Practices",
        references: ["Matthew 28:19", "Acts 2:38", "Romans 6:3-4"],
        emoji: "💧"
    },
    {
        term: "Covenant",
        definition: "A sacred agreement or promise between God and His people, often involving commitments and blessings.",
        category: "Theology",
        references: ["Genesis 9:9", "Exodus 19:5", "Jeremiah 31:31"],
        emoji: "🤝"
    },
    {
        term: "Disciple",
        definition: "A follower or student of a teacher. Jesus had many disciples who learned from Him and followed His teachings.",
        category: "People",
        references: ["Matthew 28:19", "Luke 14:27", "John 8:31"],
        emoji: "📚"
    },
    {
        term: "Epistle",
        definition: "A formal letter, usually referring to the 21 letters in the New Testament written by apostles to early churches.",
        category: "Bible Books",
        references: ["Romans", "1 Corinthians", "Ephesians", "James"],
        emoji: "✉️"
    },
    {
        term: "Faith",
        definition: "Confident trust in God and His promises, even when we can't see the outcome.",
        category: "Theology",
        references: ["Hebrews 11:1", "Romans 10:17", "2 Corinthians 5:7"],
        emoji: "⭐"
    },
    {
        term: "Gospel",
        definition: "Means 'good news' - the message of salvation through Jesus Christ. Also refers to the first four books of the New Testament.",
        category: "Theology",
        references: ["Mark 1:1", "Romans 1:16", "1 Corinthians 15:1-4"],
        emoji: "📖"
    },
    {
        term: "Grace",
        definition: "God's unmerited favor and love toward us - getting what we don't deserve because of God's kindness.",
        category: "Theology",
        references: ["Ephesians 2:8-9", "Romans 3:24", "2 Corinthians 12:9"],
        emoji: "🎁"
    },
    {
        term: "Heaven",
        definition: "God's dwelling place and the eternal home of believers - described as a place of perfect joy, peace, and God's presence.",
        category: "Theology",
        references: ["John 14:2", "Revelation 21:1-4", "Matthew 6:20"],
        emoji: "✨"
    },
    {
        term: "Israel",
        definition: "The name God gave to Jacob, and later the nation of God's chosen people. Today refers to both the ancient nation and modern country.",
        category: "Places",
        references: ["Genesis 32:28", "Exodus 3:15", "Romans 9:6-8"],
        emoji: "🇮🇱"
    },
    {
        term: "Jerusalem",
        definition: "The holy city for Jews, Christians, and Muslims. Key location for many biblical events and where Jesus was crucified.",
        category: "Places",
        references: ["Psalm 122:6", "Matthew 23:37", "Revelation 21:2"],
        emoji: "🏛️"
    },
    {
        term: "Kingdom of God",
        definition: "God's rule and reign - both a present reality and future hope where God's will is perfectly done.",
        category: "Theology",
        references: ["Matthew 6:33", "Luke 17:21", "Romans 14:17"],
        emoji: "👑"
    },
    {
        term: "Law",
        definition: "Usually refers to the first five books of the Bible (Torah) or God's commandments given to Moses.",
        category: "Theology",
        references: ["Exodus 20:1-17", "Psalm 119:105", "Romans 7:12"],
        emoji: "⚖️"
    },
    {
        term: "Messiah",
        definition: "Hebrew for 'Anointed One' - the promised deliverer who would save God's people. Greek equivalent is 'Christ'.",
        category: "Theology",
        references: ["John 1:41", "Matthew 16:16", "Acts 2:36"],
        emoji: "💫"
    },
    {
        term: "Miracle",
        definition: "An extraordinary event that reveals God's power and cannot be explained by natural laws alone.",
        category: "Theology",
        references: ["John 2:11", "Acts 2:22", "Hebrews 2:4"],
        emoji: "✨"
    },
    {
        term: "New Testament",
        definition: "The second part of the Christian Bible, containing 27 books about Jesus' life and early Christianity.",
        category: "Bible Books",
        references: ["2 Corinthians 3:6", "Hebrews 9:15", "Luke 22:20"],
        emoji: "📘"
    },
    {
        term: "Old Testament",
        definition: "The first part of the Christian Bible, containing 39 books about God's relationship with Israel before Jesus.",
        category: "Bible Books",
        references: ["2 Timothy 3:16", "Luke 24:27", "Romans 15:4"],
        emoji: "📗"
    },
    {
        term: "Parable",
        definition: "A simple story used to illustrate a spiritual or moral lesson. Jesus often taught using parables.",
        category: "Teaching Methods",
        references: ["Matthew 13:3", "Mark 4:33-34", "Luke 15:3"],
        emoji: "📖"
    },
    {
        term: "Prophecy",
        definition: "A message from God spoken through a prophet, often predicting future events or calling people to repentance.",
        category: "Theology",
        references: ["2 Peter 1:21", "Amos 3:7", "1 Corinthians 14:1"],
        emoji: "🔮"
    },
    {
        term: "Redemption",
        definition: "Being bought back or rescued from sin and its consequences through Jesus' sacrifice.",
        category: "Theology",
        references: ["Ephesians 1:7", "Galatians 3:13", "1 Peter 1:18-19"],
        emoji: "💝"
    },
    {
        term: "Resurrection",
        definition: "Coming back to life after death. Refers to Jesus rising from the dead and believers' future resurrection.",
        category: "Theology",
        references: ["1 Corinthians 15:20-22", "John 11:25", "Romans 6:5"],
        emoji: "🕊️"
    },
    {
        term: "Salvation",
        definition: "Being saved from sin and its consequences, receiving eternal life through faith in Jesus Christ.",
        category: "Theology",
        references: ["Acts 4:12", "Romans 10:9", "Ephesians 2:8"],
        emoji: "🛡️"
    },
    {
        term: "Sin",
        definition: "Missing the mark - any thought, word, or action that goes against God's will and character.",
        category: "Theology",
        references: ["Romans 3:23", "1 John 1:8", "James 4:17"],
        emoji: "🎯"
    },
  {
    term: "Trinity",
    definition: "The Christian doctrine of one God eternally existing as three distinct persons: Father, Son, and Holy Spirit.",
    category: "Theology",
    references: ["Matthew 28:19", "2 Corinthians 13:14", "1 Peter 1:2"],
    emoji: "☦️"
},
{
    term: "Testimony",
    definition: "Personal witness to God's work in one's life, or the collective witness of Scripture about Christ.",
    category: "Spiritual Life",
    references: ["Revelation 12:11", "Psalm 119:111", "John 15:27"],
    emoji: "🗣️"
},
{
    term: "Temptation",
    definition: "Enticement to sin, which God allows but provides escape from for those who rely on him.",
    category: "Spiritual Life",
    references: ["1 Corinthians 10:13", "Matthew 6:13", "James 1:12-14"],
    emoji: "🎭"
},
{
    term: "Thanksgiving",
    definition: "Expression of gratitude to God for his character, works, and blessings.",
    category: "Worship",
    references: ["1 Thessalonians 5:18", "Psalm 100:4", "Philippians 4:6"],
    emoji: "🙏"
},
{
    term: "Transfiguration",
    definition: "The event where Jesus' divine glory was revealed to Peter, James, and John on a mountain.",
    category: "Biblical Events",
    references: ["Matthew 17:1-9", "Mark 9:2-8", "2 Peter 1:16-18"],
    emoji: "✨"
},
{
    term: "Tithe",
    definition: "The practice of giving ten percent of one's income to God's work, demonstrating trust and worship.",
    category: "Stewardship",
    references: ["Malachi 3:10", "Leviticus 27:30", "Matthew 23:23"],
    emoji: "💵"
},
{
    term: "Tongues",
    definition: "Spiritual gift of speaking in unlearned languages, either human or heavenly.",
    category: "Spiritual Gifts",
    references: ["1 Corinthians 14:2", "Acts 2:4", "1 Corinthians 13:1"],
    emoji: "🗣️"
},
{
    term: "Tribulation",
    definition: "Period of great suffering and trouble, either in general life or the end-times judgment.",
    category: "Eschatology",
    references: ["John 16:33", "Matthew 24:21", "Revelation 7:14"],
    emoji: "🌋"
},
{
    term: "Truth",
    definition: "God's absolute reality and faithfulness, fully revealed in Jesus Christ and Scripture.",
    category: "Theology",
    references: ["John 14:6", "John 17:17", "Ephesians 4:15"],
    emoji: "💎"
},
{
    term: "Temple",
    definition: "The dwelling place of God, first physical building, now believers individually and corporately.",
    category: "Biblical Imagery",
    references: ["1 Corinthians 3:16", "1 Corinthians 6:19", "John 2:19-21"],
    emoji: "⛪"
},
{
    term: "Teaching",
    definition: "The ministry of instructing believers in biblical truth for spiritual growth and maturity.",
    category: "Ministry",
    references: ["Matthew 28:20", "2 Timothy 2:2", "Acts 2:42"],
    emoji: "👨‍🏫"
},
{
    term: "Traditions",
    definition: "Practices and teachings passed down, which can be godly or contrary to Scripture.",
    category: "Theology",
    references: ["2 Thessalonians 2:15", "Matthew 15:3", "Colossians 2:8"],
    emoji: "📜"
},
{
    term: "Transgression",
    definition: "Willful violation of God's law, rebellion against his authority.",
    category: "Sin",
    references: ["1 John 3:4", "Psalm 51:1", "Isaiah 53:5"],
    emoji: "🚫"
},
{
    term: "Trials",
    definition: "Difficult circumstances that test and strengthen faith when endured with God's help.",
    category: "Spiritual Life",
    references: ["James 1:2-4", "1 Peter 1:6-7", "Romans 5:3-4"],
    emoji: "🔥"
},
{
    term: "Trust",
    definition: "Confident reliance on God's character, promises, and faithfulness despite circumstances.",
    category: "Faith",
    references: ["Proverbs 3:5-6", "Psalm 37:5", "Isaiah 26:4"],
    emoji: "🤝"
},
{
    term: "Throne",
    definition: "Symbol of God's sovereign rule and authority over all creation.",
    category: "Biblical Imagery",
    references: ["Revelation 4:2", "Hebrews 4:16", "Psalm 11:4"],
    emoji: "👑"
},
{
    term: "Tabernacle",
    definition: "The portable sanctuary where God dwelt among Israel during the wilderness journey.",
    category: "Biblical Places",
    references: ["Exodus 25:8-9", "Hebrews 8:5", "Exodus 40:34-35"],
    emoji: "⛺"
},
{
    term: "Talent",
    definition: "Large unit of money in Jesus' parables, representing resources God entrusts to believers.",
    category: "Biblical Imagery",
    references: ["Matthew 25:14-30", "Luke 19:12-27"],
    emoji: "💰"
},
{
    term: "Thorn in the Flesh",
    definition: "Paul's description of a persistent difficulty that kept him dependent on God's grace.",
    category: "Spiritual Life",
    references: ["2 Corinthians 12:7", "Numbers 33:55", "Ezekiel 28:24"],
    emoji: "🌹"
},
{
    term: "Tree of Life",
    definition: "Symbol of eternal life and God's provision, from Eden to the New Jerusalem.",
    category: "Biblical Imagery",
    references: ["Genesis 2:9", "Revelation 22:2", "Proverbs 3:18"],
    emoji: "🌳"
},
{
    term: "Trumpet",
    definition: "Instrument used for signaling, worship, and announcing important events, including Christ's return.",
    category: "Biblical Imagery",
    references: ["1 Corinthians 15:52", "Matthew 24:31", "Revelation 8:2"],
    emoji: "📯"
},
{
    term: "Two-edged Sword",
    definition: "Metaphor for God's Word, which cuts deeply to judge thoughts and intentions.",
    category: "Biblical Imagery",
    references: ["Hebrews 4:12", "Revelation 1:16", "Ephesians 6:17"],
    emoji: "⚔️"
},
{
    term: "Types",
    definition: "Old Testament persons, events, or institutions that prefigure and point to Christ.",
    category: "Biblical Studies",
    references: ["Colossians 2:17", "Hebrews 8:5", "Romans 5:14"],
    emoji: "🔍"
},
{
    term: "Tares",
    definition: "Weeds that resemble wheat, representing false believers among the genuine in Jesus' parable.",
    category: "Biblical Parables",
    references: ["Matthew 13:24-30", "Matthew 13:36-43"],
    emoji: "🌾"
},
{
    term: "Temptation of Christ",
    definition: "Satan's attempt to divert Jesus from his messianic mission through three specific tests.",
    category: "Biblical Events",
    references: ["Matthew 4:1-11", "Luke 4:1-13", "Hebrews 4:15"],
    emoji: "😈"
},
{
    term: "Theocracy",
    definition: "Government directly by God, as Israel experienced before human kings.",
    category: "Theology",
    references: ["1 Samuel 8:7", "Judges 8:23", "Exodus 19:5-6"],
    emoji: "🏛️"
},
{
    term: "Theophany",
    definition: "A visible manifestation of God to humans, often in human or angelic form.",
    category: "Theology",
    references: ["Genesis 18:1-33", "Exodus 3:2", "Daniel 3:25"],
    emoji: "👁️"
},
{
    term: "Theology Proper",
    definition: "The study of God the Father - his attributes, works, and relationship to creation.",
    category: "Theology",
    references: ["John 4:24", "1 Timothy 1:17", "Psalm 90:2"],
    emoji: "👑"
},
{
    term: "Threshing Floor",
    definition: "Place where grain was separated from chaff, symbolizing God's judgment and purification.",
    category: "Biblical Imagery",
    references: ["Ruth 3:2-14", "Matthew 3:12", "1 Chronicles 21:15-28"],
    emoji: "🌾"
},
{
    term: "Time",
    definition: "The created sequence of events under God's sovereign control and for his purposes.",
    category: "Theology",
    references: ["Ecclesiastes 3:1", "Galatians 4:4", "Ephesians 5:16"],
    emoji: "⏰"
},
{
    term: "Tongue",
    definition: "The physical organ representing speech, which must be controlled for godliness.",
    category: "Spiritual Life",
    references: ["James 3:5-8", "Proverbs 18:21", "Psalm 34:13"],
    emoji: "👅"
},
{
    term: "Torah",
    definition: "The first five books of the Bible, or the entire Jewish law given through Moses.",
    category: "Biblical Studies",
    references: ["Deuteronomy 31:9", "Joshua 1:8", "Matthew 5:17"],
    emoji: "📜"
},
{
    term: "Tradition of the Elders",
    definition: "Human religious regulations that sometimes contradicted or added to God's commands.",
    category: "Biblical Terms",
    references: ["Matthew 15:2", "Mark 7:3", "Galatians 1:14"],
    emoji: "👴"
},
{
    term: "Transgression",
    definition: "Knowing violation of God's law, representing willful rebellion against him.",
    category: "Sin",
    references: ["Romans 4:15", "Psalm 32:1", "Isaiah 53:8"],
    emoji: "⚖️"
},
{
    term: "Treasure",
    definition: "What one values most, which should be heavenly rather than earthly.",
    category: "Spiritual Life",
    references: ["Matthew 6:19-21", "2 Corinthians 4:7", "Colossians 2:3"],
    emoji: "💎"
},
{
    term: "Trespass",
    definition: "Specific act of sinning against God or another person.",
    category: "Sin",
    references: ["Matthew 6:14-15", "Ephesians 2:1", "Colossians 2:13"],
    emoji: "🚧"
},
{
    term: "Tribes of Israel",
    definition: "The twelve divisions of the Israelite people descended from Jacob's sons.",
    category: "Biblical Groups",
    references: ["Genesis 49:1-28", "Revelation 7:4-8", "Exodus 24:4"],
    emoji: "👨‍👩‍👧‍👦"
},
{
    term: "Trinity Sunday",
    definition: "Liturgical celebration of the triune God, observed the Sunday after Pentecost.",
    category: "Church Calendar",
    references: ["Matthew 28:19", "2 Corinthians 13:14"],
    emoji: "📅"
},
{
    term: "Triumphal Entry",
    definition: "Jesus' entry into Jerusalem on Palm Sunday, fulfilling prophecy about the Messiah.",
    category: "Biblical Events",
    references: ["Matthew 21:1-11", "John 12:12-19", "Zechariah 9:9"],
    emoji: "🎉"
},
{
    term: "Troubler of Israel",
    definition: "Name King Ahab called Elijah, though Ahab himself was the real source of trouble.",
    category: "Biblical Figures",
    references: ["1 Kings 18:17-18", "1 Kings 21:20"],
    emoji: "🌧️"
},
{
    term: "True Vine",
    definition: "Jesus' description of himself as the source of spiritual life and fruitfulness.",
    category: "Theology",
    references: ["John 15:1", "Isaiah 5:1-7", "Psalm 80:8-16"],
    emoji: "🍇"
},
{
    term: "Trustworthiness",
    definition: "The quality of being reliable and faithful, reflecting God's character.",
    category: "Virtues",
    references: ["1 Corinthians 4:2", "Proverbs 25:13", "Luke 16:10-12"],
    emoji: "🛡️"
},
{
    term: "Truthfulness",
    definition: "Commitment to honesty and integrity in speech and action.",
    category: "Virtues",
    references: ["Ephesians 4:25", "Colossians 3:9", "Zechariah 8:16"],
    emoji: "💯"
},
{
    term: "Tutor",
    definition: "Paul's metaphor for the Law as a guardian that leads us to Christ.",
    category: "Biblical Imagery",
    references: ["Galatians 3:24-25", "1 Corinthians 4:15"],
    emoji: "👨‍🏫"
},
{
    term: "Twelve",
    definition: "Number representing governmental perfection, seen in the 12 tribes and 12 apostles.",
    category: "Biblical Numbers",
    references: ["Matthew 10:1", "Revelation 21:12", "Luke 22:30"],
    emoji: "1️⃣2️⃣"
},
{
    term: "Two Witnesses",
    definition: "Prophetic figures in Revelation who testify during the tribulation and are martyred.",
    category: "Eschatology",
    references: ["Revelation 11:3-12", "Zechariah 4:11-14"],
    emoji: "👥"
},
{
    term: "Tychicus",
    definition: "Faithful companion of Paul who delivered letters and encouraged churches.",
    category: "Biblical Figures",
    references: ["Ephesians 6:21", "Colossians 4:7", "2 Timothy 4:12"],
    emoji: "💌"
},
{
    term: "Type of Christ",
    definition: "Old Testament person, event, or institution that foreshadows Jesus and his work.",
    category: "Biblical Studies",
    references: ["Romans 5:14", "1 Corinthians 10:6", "Hebrews 9:24"],
    emoji: "🔍"
},
{
    term: "Tyranny",
    definition: "Oppressive and unjust rule that God opposes and will ultimately judge.",
    category: "Ethics",
    references: ["Exodus 1:13-14", "Isaiah 14:4-6", "Revelation 18:7-8"],
    emoji: "⚖️"
},
{
    term: "Tabitha",
    definition: "Also called Dorcas, a disciple known for good works whom Peter raised from the dead.",
    category: "Biblical Figures",
    references: ["Acts 9:36-42"],
    emoji: "👗"
},
{
    term: "Talent",
    definition: "A large sum of money in Jesus' parables, representing resources God gives us to steward.",
    category: "Biblical Terms",
    references: ["Matthew 25:14-30"],
    emoji: "💰"
},
{
    term: "Tarshish",
    definition: "A distant port that Jonah tried to sail to when fleeing God's call.",
    category: "Biblical Places",
    references: ["Jonah 1:3", "Psalm 48:7"],
    emoji: "⛵"
},
{
    term: "Teachable",
    definition: "Willingness to receive instruction and correction, essential for spiritual growth.",
    category: "Virtues",
    references: ["Proverbs 12:1", "Acts 17:11", "2 Timothy 3:16-17"],
    emoji: "🎓"
},
{
    term: "Tears",
    definition: "Expressions of grief, repentance, or compassion that God notices and values.",
    category: "Spiritual Life",
    references: ["Psalm 56:8", "Revelation 21:4", "2 Corinthians 2:4"],
    emoji: "😢"
},
{
    term: "Tekoa",
    definition: "Home of the prophet Amos, a shepherd called to prophesy against Israel.",
    category: "Biblical Places",
    references: ["Amos 1:1", "2 Chronicles 20:20"],
    emoji: "🏞️"
},
{
    term: "Temperance",
    definition: "Self-control and moderation in all things, a fruit of the Spirit.",
    category: "Virtues",
    references: ["Galatians 5:23", "2 Peter 1:6", "1 Corinthians 9:25"],
    emoji: "⚖️"
},
{
    term: "Temple Tax",
    definition: "Annual payment required for maintenance of the temple, which Jesus miraculously provided.",
    category: "Biblical Practices",
    references: ["Matthew 17:24-27", "Exodus 30:13"],
    emoji: "💲"
},
{
    term: "Temptress",
    definition: "A woman who uses sexual allure to lead others into sin.",
    category: "Biblical Imagery",
    references: ["Proverbs 5:3-5", "Proverbs 7:5-27", "Matthew 14:3-4"],
    emoji: "💄"
},
{
    term: "Ten Commandments",
    definition: "The moral law given by God to Moses on Mount Sinai, summarizing our duties to God and others.",
    category: "Biblical Terms",
    references: ["Exodus 20:1-17", "Deuteronomy 5:6-21", "Matthew 22:36-40"],
    emoji: "📝"
},
{
    term: "Tentmaking",
    definition: "Paul's practice of supporting himself through trade while ministering.",
    category: "Ministry",
    references: ["Acts 18:3", "1 Corinthians 9:14-15", "2 Thessalonians 3:8"],
    emoji: "🛠️"
},
{
    term: "Testament",
    definition: "A covenant or will, also referring to the two main divisions of Scripture.",
    category: "Biblical Studies",
    references: ["Hebrews 9:16-17", "2 Corinthians 3:6", "Luke 22:20"],
    emoji: "📖"
},
{
    term: "Tetrarch",
    definition: "A ruler of one quarter of a region, like Herod Antipas who beheaded John the Baptist.",
    category: "Biblical Terms",
    references: ["Luke 3:1", "Matthew 14:1", "Luke 9:7"],
    emoji: "👑"
},
{
    term: "Theocracy",
    definition: "Government by God, where he is recognized as the supreme ruler.",
    category: "Theology",
    references: ["Judges 8:23", "1 Samuel 8:7", "Exodus 19:5-6"],
    emoji: "🏛️"
},
{
    term: "Theodicy",
    definition: "The defense of God's goodness and power in the face of evil's existence.",
    category: "Theology",
    references: ["Romans 9:14-24", "Job 38:1-42:6", "Isaiah 55:8-9"],
    emoji: "🤔"
},
{
    term: "Theology of the Cross",
    definition: "Emphasis on God's revelation through Christ's suffering rather than human glory.",
    category: "Theology",
    references: ["1 Corinthians 1:18-25", "Philippians 2:5-8", "2 Corinthians 12:9"],
    emoji: "✝️"
},
{
    term: "Theophany",
    definition: "A visible manifestation of God to human beings.",
    category: "Theology",
    references: ["Genesis 18:1-33", "Exodus 3:2-6", "Daniel 3:25"],
    emoji: "👁️"
},
{
    term: "Thessalonica",
    definition: "A city in Macedonia where Paul established a church and to whom he wrote two epistles.",
    category: "Biblical Places",
    references: ["Acts 17:1-9", "1 Thessalonians 1:1"],
    emoji: "🏛️"
},
{
    term: "Thirst",
    definition: "Physical and spiritual longing, which Jesus invites us to satisfy in him.",
    category: "Spiritual Life",
    references: ["John 4:14", "Psalm 42:1", "Revelation 21:6"],
    emoji: "💧"
},
{
    term: "Thomas",
    definition: "Apostle known for his doubt of Jesus' resurrection until he saw proof.",
    category: "Biblical Figures",
    references: ["John 20:24-29", "John 11:16", "John 14:5"],
    emoji: "❓"
},
{
    term: "Thousand Years",
    definition: "The millennial period described in Revelation 20, interpreted variously by Christians.",
    category: "Eschatology",
    references: ["Revelation 20:2-7", "2 Peter 3:8"],
    emoji: "⏳"
},
{
    term: "Three",
    definition: "Number of divine perfection, seen in the Trinity and many significant biblical events.",
    category: "Biblical Numbers",
    references: ["Matthew 12:40", "1 John 5:7-8", "Matthew 28:19"],
    emoji: "3️⃣"
},
{
    term: "Threshing",
    definition: "The process of separating grain from chaff, used as a metaphor for judgment.",
    category: "Biblical Imagery",
    references: ["Matthew 3:12", "Ruth 3:2", "1 Corinthians 9:9-10"],
    emoji: "🌾"
},
{
    term: "Throne of Grace",
    definition: "Description of God's heavenly throne where we can find mercy and help.",
    category: "Theology",
    references: ["Hebrews 4:16", "Revelation 22:1", "Psalm 45:6"],
    emoji: "🪑"
},
{
    term: "Timothy",
    definition: "Paul's young protégé in ministry, recipient of two pastoral epistles.",
    category: "Biblical Figures",
    references: ["1 Timothy 1:2", "Acts 16:1-3", "2 Timothy 1:2"],
    emoji: "👨‍💼"
},
{
    term: "Tishbite",
    definition: "Description of Elijah, identifying him as from Tishbe in Gilead.",
    category: "Biblical Terms",
    references: ["1 Kings 17:1", "1 Kings 21:17"],
    emoji: "🌄"
},
{
    term: "Tithe of Tithes",
    definition: "The portion that Levites were to give from the tithes they received.",
    category: "Biblical Practices",
    references: ["Numbers 18:26", "Nehemiah 10:38"],
    emoji: "💵"
},
{
    term: "Titus",
    definition: "Gentile companion of Paul who helped organize the Corinthian church.",
    category: "Biblical Figures",
    references: ["2 Corinthians 2:13", "Titus 1:4", "Galatians 2:3"],
    emoji: "💼"
},
{
    term: "Tongues of Fire",
    definition: "The visible manifestation of the Holy Spirit at Pentecost.",
    category: "Biblical Events",
    references: ["Acts 2:3", "Isaiah 5:24", "Matthew 3:11"],
    emoji: "🔥"
},
{
    term: "Topheth",
    definition: "A place in the Valley of Hinnom where child sacrifice occurred, symbolizing judgment.",
    category: "Biblical Places",
    references: ["Jeremiah 7:31-32", "2 Kings 23:10", "Isaiah 30:33"],
    emoji: "🔥"
},
{
    term: "Tradition",
    definition: "Teachings and practices handed down, which must be evaluated by Scripture.",
    category: "Theology",
    references: ["2 Thessalonians 2:15", "Matthew 15:3", "Colossians 2:8"],
    emoji: "📜"
},
{
    term: "Transformation",
    definition: "The process of being changed into Christ's image by the renewing of the mind.",
    category: "Spiritual Life",
    references: ["Romans 12:2", "2 Corinthians 3:18", "Philippians 3:21"],
    emoji: "🦋"
},
{
    term: "Treasure in Heaven",
    definition: "Eternal rewards stored up through faithful service and generosity on earth.",
    category: "Spiritual Life",
    references: ["Matthew 6:20", "Matthew 19:21", "Luke 12:33"],
    emoji: "💎"
},
{
    term: "Tree of Knowledge",
    definition: "The tree in Eden whose fruit Adam and Eve were forbidden to eat.",
    category: "Biblical Imagery",
    references: ["Genesis 2:9", "Genesis 2:17", "Genesis 3:3"],
    emoji: "🌳"
},
{
    term: "Trespass Offering",
    definition: "A sacrifice for sins committed against God or others, requiring restitution.",
    category: "Biblical Practices",
    references: ["Leviticus 5:14-19", "Leviticus 6:1-7", "Ezra 10:19"],
    emoji: "🐑"
},
{
    term: "Tribunal",
    definition: "The judgment seat of Christ where believers' works will be evaluated.",
    category: "Eschatology",
    references: ["2 Corinthians 5:10", "Romans 14:10"],
    emoji: "⚖️"
},
{
    term: "Triumph",
    definition: "Christ's victory over sin, death, and Satan, in which believers share.",
    category: "Theology",
    references: ["2 Corinthians 2:14", "Colossians 2:15", "1 Corinthians 15:57"],
    emoji: "🏆"
},
{
    term: "Troas",
    definition: "A city where Paul received the Macedonian vision and where Eutychus fell from a window.",
    category: "Biblical Places",
    references: ["Acts 16:8-11", "Acts 20:5-12", "2 Corinthians 2:12"],
    emoji: "🏛️"
},
{
    term: "True Light",
    definition: "Jesus as the genuine illumination for all humanity, exposing and giving life.",
    category: "Theology",
    references: ["John 1:9", "1 John 2:8", "John 8:12"],
    emoji: "💡"
},
{
    term: "Trumpet Call",
    definition: "The sound that will accompany Christ's return and the resurrection of the dead.",
    category: "Eschatology",
    references: ["1 Thessalonians 4:16", "1 Corinthians 15:52", "Matthew 24:31"],
    emoji: "📯"
},
{
    term: "Trust in the Lord",
    definition: "Complete reliance on God's wisdom, power, and goodness rather than human understanding.",
    category: "Faith",
    references: ["Proverbs 3:5-6", "Psalm 37:3", "Isaiah 26:4"],
    emoji: "🙏"
},
{
    term: "Truth in Love",
    definition: "The balance of maintaining biblical truth while expressing Christlike love.",
    category: "Virtues",
    references: ["Ephesians 4:15", "2 John 1:3", "1 Peter 3:15"],
    emoji: "💝"
},
{
    term: "Turtle Dove",
    definition: "A bird used in sacrifices, especially by the poor, symbolizing purity and mourning.",
    category: "Biblical Imagery",
    references: ["Leviticus 1:14", "Luke 2:24", "Psalm 74:19"],
    emoji: "🕊️"
},
{
    term: "Twinkling of an Eye",
    definition: "The instantaneous nature of the transformation at Christ's return.",
    category: "Eschatology",
    references: ["1 Corinthians 15:52", "Luke 18:25"],
    emoji: "👁️"
},
{
    term: "Two or Three",
    definition: "The minimum number for establishing testimony or gathering in Jesus' name.",
    category: "Biblical Numbers",
    references: ["Matthew 18:16", "Matthew 18:20", "2 Corinthians 13:1"],
    emoji: "👥"
},
{
    term: "Tyre",
    definition: "Phoenician seaport whose kings allied with Israel but whose pride God judged.",
    category: "Biblical Places",
    references: ["Ezekiel 26:1-21", "Matthew 11:21", "Acts 21:3"],
    emoji: "🏺"
},
    {
    term: "Unity",
    definition: "The spiritual oneness of believers in Christ, transcending human divisions through the Holy Spirit.",
    category: "Ecclesiology",
    references: ["Ephesians 4:3-6", "John 17:21", "1 Corinthians 12:12-13"],
    emoji: "🤝"
},
{
    term: "Unbelief",
    definition: "The state of refusing to trust God's promises and reject Christ's salvation.",
    category: "Sin",
    references: ["Hebrews 3:12", "John 3:18", "Romans 11:20"],
    emoji: "🚫"
},
{
    term: "Unction",
    definition: "Anointing or special empowerment by the Holy Spirit for ministry and spiritual understanding.",
    category: "Spiritual Life",
    references: ["1 John 2:20", "2 Corinthians 1:21", "1 John 2:27"],
    emoji: "🕊️"
},
{
    term: "Understanding",
    definition: "Spiritual comprehension and insight granted by God through his Word and Spirit.",
    category: "Virtues",
    references: ["Proverbs 2:6", "Psalm 119:130", "Colossians 1:9"],
    emoji: "💡"
},
{
    term: "Union with Christ",
    definition: "The believer's spiritual identification with Jesus in his death, resurrection, and glory.",
    category: "Theology",
    references: ["Romans 6:5", "Galatians 2:20", "Ephesians 2:5-6"],
    emoji: "🔗"
},
{
    term: "Unity of the Spirit",
    definition: "The supernatural harmony among believers created and maintained by the Holy Spirit.",
    category: "Ecclesiology",
    references: ["Ephesians 4:3", "Philippians 2:1-2", "1 Corinthians 12:13"],
    emoji: "🕊️"
},
{
    term: "Universe",
    definition: "All created reality, which declares God's glory and is sustained by his power.",
    category: "Theology",
    references: ["Psalm 19:1", "Colossians 1:16-17", "Hebrews 1:3"],
    emoji: "🌌"
},
{
    term: "Unjust",
    definition: "Those who practice injustice and unrighteousness, opposing God's moral order.",
    category: "Ethics",
    references: ["1 Peter 3:18", "Luke 18:6", "2 Thessalonians 1:6"],
    emoji: "⚖️"
},
{
    term: "Unleavened Bread",
    definition: "Bread made without yeast, symbolizing purity and haste in the Passover and Christian life.",
    category: "Biblical Practices",
    references: ["Exodus 12:15", "1 Corinthians 5:7-8", "Deuteronomy 16:3"],
    emoji: "🍞"
},
{
    term: "Unction of the Spirit",
    definition: "The Holy Spirit's anointing that teaches, guides, and empowers believers.",
    category: "Spiritual Life",
    references: ["1 John 2:27", "2 Corinthians 1:21-22", "Acts 10:38"],
    emoji: "🔥"
},
{
    term: "Unsearchable",
    definition: "Beyond human comprehension, describing God's wisdom, judgments, and ways.",
    category: "Theology",
    references: ["Romans 11:33", "Psalm 145:3", "Job 5:9"],
    emoji: "🔍"
},
{
    term: "Unction for Ministry",
    definition: "Special empowerment by the Holy Spirit for effective service and witness.",
    category: "Ministry",
    references: ["Acts 1:8", "Luke 4:18", "1 John 2:20"],
    emoji: "💪"
},
{
    term: "Unfeigned",
    definition: "Genuine and sincere, without hypocrisy or pretense.",
    category: "Virtues",
    references: ["2 Timothy 1:5", "1 Peter 1:22", "Romans 12:9"],
    emoji: "❤️"
},
{
    term: "Unicorn",
    definition: "Mythical creature sometimes mentioned in older Bible translations, likely referring to a wild ox.",
    category: "Biblical Imagery",
    references: ["Numbers 23:22", "Job 39:9", "Psalm 92:10"],
    emoji: "🦄"
},
{
    term: "Unity of the Faith",
    definition: "The shared beliefs and common confession that bind Christians together.",
    category: "Ecclesiology",
    references: ["Ephesians 4:13", "Jude 1:3", "1 Corinthians 1:10"],
    emoji: "✝️"
},
{
    term: "Unction to Pray",
    definition: "The Holy Spirit's prompting and assistance in effective prayer.",
    category: "Spiritual Life",
    references: ["Romans 8:26", "Jude 1:20", "Ephesians 6:18"],
    emoji: "🙏"
},
{
    term: "Unrighteousness",
    definition: "Actions and attitudes contrary to God's moral character and commands.",
    category: "Sin",
    references: ["1 John 1:9", "Romans 1:18", "1 Corinthians 6:9"],
    emoji: "😈"
},
{
    term: "Unveiled",
    definition: "Freedom to behold God's glory without obstruction, through Christ.",
    category: "Spiritual Life",
    references: ["2 Corinthians 3:16-18", "Matthew 27:51", "Hebrews 10:20"],
    emoji: "👁️"
},
{
    term: "Upright",
    definition: "Moral integrity and righteousness in character and conduct.",
    category: "Virtues",
    references: ["Psalm 25:8", "Proverbs 2:7", "Ecclesiastes 7:29"],
    emoji: "⬆️"
},
{
    term: "Urgency",
    definition: "The immediate importance of responding to the gospel and fulfilling God's mission.",
    category: "Evangelism",
    references: ["2 Corinthians 6:2", "John 9:4", "Romans 13:11"],
    emoji: "⏰"
},
{
    term: "Urim and Thummim",
    definition: "Sacred objects used by the high priest to discern God's will in the Old Testament.",
    category: "Biblical Practices",
    references: ["Exodus 28:30", "Numbers 27:21", "1 Samuel 28:6"],
    emoji: "💎"
},
{
    term: "Usury",
    definition: "Charging excessive interest on loans, condemned when exploiting the poor.",
    category: "Ethics",
    references: ["Exodus 22:25", "Psalm 15:5", "Luke 6:35"],
    emoji: "💰"
},
{
    term: "Utterance",
    definition: "Speech empowered by the Holy Spirit for effective communication of God's truth.",
    category: "Spiritual Gifts",
    references: ["Ephesians 6:19", "1 Corinthians 1:5", "Colossians 4:3"],
    emoji: "🗣️"
},
{
    term: "Unction for Healing",
    definition: "Anointing with oil for physical healing in Jesus' name.",
    category: "Spiritual Gifts",
    references: ["James 5:14", "Mark 6:13", "Mark 16:18"],
    emoji: "🩹"
},
{
    term: "Unchangeable",
    definition: "God's attribute of immutability - his eternal consistency in character and promises.",
    category: "Theology",
    references: ["Malachi 3:6", "Hebrews 13:8", "James 1:17"],
    emoji: "🛡️"
},
{
    term: "Uncircumcised",
    definition: "Those outside God's covenant, metaphorically referring to spiritual insensitivity.",
    category: "Biblical Terms",
    references: ["Acts 7:51", "Romans 2:25-29", "Colossians 2:11"],
    emoji: "❌"
},
{
    term: "Unclean",
    definition: "Ritually impure or morally defiled, requiring purification through God's prescribed means.",
    category: "Biblical Terms",
    references: ["Leviticus 11:44", "Acts 10:15", "2 Corinthians 6:17"],
    emoji: "🚫"
},
{
    term: "Unction for Witness",
    definition: "The Holy Spirit's empowerment for bold and effective evangelism.",
    category: "Evangelism",
    references: ["Acts 1:8", "Acts 4:31", "Luke 12:12"],
    emoji: "📢"
},
{
    term: "Understanding Heart",
    definition: "Wisdom and discernment granted by God to comprehend spiritual truth.",
    category: "Spiritual Life",
    references: ["1 Kings 3:9", "Proverbs 8:5", "Psalm 119:34"],
    emoji: "💖"
},
{
    term: "Undefiled",
    definition: "Pure, uncontaminated, and free from moral corruption.",
    category: "Virtues",
    references: ["James 1:27", "Hebrews 7:26", "Psalm 119:1"],
    emoji: "⚪"
},
{
    term: "Unfruitful",
    definition: "Lacking spiritual productivity and evidence of God's work in one's life.",
    category: "Spiritual Life",
    references: ["Matthew 13:22", "John 15:2", "Ephesians 5:11"],
    emoji: "🌱"
},
{
    term: "Unity of Marriage",
    definition: "The one-flesh relationship between husband and wife reflecting Christ and the Church.",
    category: "Ethics",
    references: ["Genesis 2:24", "Ephesians 5:31-32", "Matthew 19:5-6"],
    emoji: "💑"
},
{
    term: "Unjust Steward",
    definition: "Parable character who used worldly wisdom, teaching lessons about faithful management.",
    category: "Biblical Parables",
    references: ["Luke 16:1-13"],
    emoji: "💼"
},
{
    term: "Unleavened",
    definition: "Without yeast, symbolizing removal of sin and corruption in the Christian life.",
    category: "Biblical Imagery",
    references: ["1 Corinthians 5:7", "Exodus 12:17", "Galatians 5:9"],
    emoji: "🍞"
},
{
    term: "Unmerited Favor",
    definition: "Grace - God's kindness and blessing given freely, not earned by human effort.",
    category: "Theology",
    references: ["Ephesians 2:8-9", "Romans 3:24", "Titus 3:5"],
    emoji: "🎁"
},
{
    term: "Unprofitable Servant",
    definition: "Description of servants who merely do their duty, emphasizing humility in service.",
    category: "Spiritual Life",
    references: ["Luke 17:10", "Romans 3:12"],
    emoji: "🙇"
},
{
    term: "Unquenchable Fire",
    definition: "Eternal judgment that cannot be extinguished, reserved for the unrepentant.",
    category: "Theology",
    references: ["Matthew 3:12", "Mark 9:43", "Luke 3:17"],
    emoji: "🔥"
},
{
    term: "Unrighteous Judge",
    definition: "Parable character illustrating God's willingness to answer persistent prayer.",
    category: "Biblical Parables",
    references: ["Luke 18:1-8"],
    emoji: "⚖️"
},
{
    term: "Unsearchable Riches",
    definition: "The immeasurable spiritual wealth available in Christ Jesus.",
    category: "Theology",
    references: ["Ephesians 3:8", "Romans 11:33", "Colossians 2:2-3"],
    emoji: "💎"
},
{
    term: "Unspotted",
    definition: "Pure and free from moral contamination in a corrupt world.",
    category: "Virtues",
    references: ["James 1:27", "2 Peter 3:14", "1 Timothy 6:14"],
    emoji: "✨"
},
{
    term: "Unstable",
    definition: "Spiritually inconsistent and easily swayed from faith and obedience.",
    category: "Spiritual Life",
    references: ["James 1:8", "2 Peter 2:14", "Ephesians 4:14"],
    emoji: "🌊"
},
{
    term: "Unction for Teaching",
    definition: "The Holy Spirit's enablement to communicate God's truth with clarity and power.",
    category: "Ministry",
    references: ["1 Corinthians 2:13", "1 John 2:27", "Acts 18:25"],
    emoji: "👨‍🏫"
},
{
    term: "Unveiled Face",
    definition: "Freedom to approach God directly and behold his glory through Christ.",
    category: "Spiritual Life",
    references: ["2 Corinthians 3:18", "Exodus 34:29-35", "Hebrews 4:16"],
    emoji: "😊"
},
{
    term: "Uphold",
    definition: "God's sustaining power that maintains creation and supports his people.",
    category: "Theology",
    references: ["Psalm 54:4", "Isaiah 41:10", "Hebrews 1:3"],
    emoji: "🖐️"
},
{
    term: "Uprightness",
    definition: "Moral integrity and righteousness that pleases God.",
    category: "Virtues",
    references: ["Psalm 25:21", "Proverbs 11:3", "Ecclesiastes 7:29"],
    emoji: "🎯"
},
{
    term: "Ur of the Chaldeans",
    definition: "Ancient city in Mesopotamia, the original home of Abraham before God called him.",
    category: "Biblical Places",
    references: ["Genesis 11:28", "Genesis 15:7", "Nehemiah 9:7"],
    emoji: "🏛️"
},
{
    term: "Usurp",
    definition: "To wrongfully seize authority, particularly regarding gender roles in the church.",
    category: "Ethics",
    references: ["1 Timothy 2:12", "3 John 1:9", "Jude 1:11"],
    emoji: "👑"
},
{
    term: "Uttermost",
    definition: "Completely, fully, to the greatest extent - describing Christ's saving power.",
    category: "Theology",
    references: ["Hebrews 7:25", "Acts 1:8", "Luke 11:50"],
    emoji: "🔚"
},
{
    term: "Unction for Preaching",
    definition: "The Holy Spirit's anointing for proclaiming God's Word with power and conviction.",
    category: "Ministry",
    references: ["1 Corinthians 2:4", "1 Thessalonians 1:5", "Jeremiah 23:29"],
    emoji: "📖"
},
{
    term: "Unanimity",
    definition: "Complete agreement among believers, especially in prayer and purpose.",
    category: "Ecclesiology",
    references: ["Romans 15:6", "Acts 1:14", "Acts 2:46"],
    emoji: "👥"
},
{
    term: "Unction for Leadership",
    definition: "The Holy Spirit's empowerment for spiritual oversight and guidance of God's people.",
    category: "Ministry",
    references: ["Acts 20:28", "1 Timothy 4:14", "2 Timothy 1:6"],
    emoji: "👑"
},
    {
    term: "Victory",
    definition: "Triumph over sin, death, and evil accomplished through Christ's work and applied to believers.",
    category: "Theology",
    references: ["1 Corinthians 15:57", "1 John 5:4", "Romans 8:37"],
    emoji: "🏆"
},
{
    term: "Vine",
    definition: "Metaphor for Christ as the source of spiritual life and fruitfulness for believers.",
    category: "Biblical Imagery",
    references: ["John 15:1-5", "Psalm 80:8-9", "Isaiah 5:1-7"],
    emoji: "🍇"
},
{
    term: "Virtue",
    definition: "Moral excellence and Christlike character qualities that reflect God's nature.",
    category: "Virtues",
    references: ["2 Peter 1:5", "Philippians 4:8", "Galatians 5:22-23"],
    emoji: "⭐"
},
{
    term: "Vision",
    definition: "Supernatural revelation from God, often through dreams or spiritual insight.",
    category: "Spiritual Life",
    references: ["Proverbs 29:18", "Acts 16:9-10", "Daniel 2:19"],
    emoji: "👁️"
},
{
    term: "Vocation",
    definition: "God's calling to serve him in every area of life, including work and relationships.",
    category: "Spiritual Life",
    references: ["Ephesians 4:1", "1 Corinthians 7:20", "Colossians 3:23-24"],
    emoji: "🎯"
},
{
    term: "Voice",
    definition: "God's communication to humanity, both through Scripture and by his Spirit.",
    category: "Spiritual Life",
    references: ["John 10:27", "Psalm 95:7", "1 Kings 19:12"],
    emoji: "🗣️"
},
{
    term: "Vow",
    definition: "A solemn promise made to God, to be fulfilled faithfully.",
    category: "Spiritual Life",
    references: ["Ecclesiastes 5:4-5", "Numbers 30:2", "Psalm 76:11"],
    emoji: "🤝"
},
{
    term: "Vindication",
    definition: "God's act of clearing the righteous from false accusation and demonstrating their innocence.",
    category: "Theology",
    references: ["Psalm 26:1", "Isaiah 50:8", "1 Timothy 3:16"],
    emoji: "⚖️"
},
{
    term: "Vineyard",
    definition: "Metaphor for God's people, his kingdom work, or the nation of Israel.",
    category: "Biblical Imagery",
    references: ["Isaiah 5:7", "Matthew 20:1-16", "Psalm 80:8-15"],
    emoji: "🍇"
},
{
    term: "Vessel",
    definition: "Metaphor for believers as containers of God's treasure, power, and purpose.",
    category: "Biblical Imagery",
    references: ["2 Corinthians 4:7", "2 Timothy 2:20-21", "1 Thessalonians 4:4"],
    emoji: "🏺"
},
{
    term: "Victim",
    definition: "One who suffers harm or injustice, for whom God shows special concern and compassion.",
    category: "Ethics",
    references: ["Psalm 10:14", "Psalm 82:3-4", "Jeremiah 22:3"],
    emoji: "🆘"
},
{
    term: "Vigilance",
    definition: "Spiritual alertness and watchfulness against temptation and in preparation for Christ's return.",
    category: "Spiritual Life",
    references: ["1 Peter 5:8", "Matthew 26:41", "Mark 13:33"],
    emoji: "👀"
},
{
    term: "Vindictiveness",
    definition: "The desire for revenge, which believers are commanded to reject in favor of forgiveness.",
    category: "Sin",
    references: ["Romans 12:19", "Leviticus 19:18", "Matthew 5:38-39"],
    emoji: "⚔️"
},
{
    term: "Violence",
    definition: "Physical force intended to harm, which God hates but will ultimately judge.",
    category: "Sin",
    references: ["Psalm 11:5", "Genesis 6:11", "Matthew 26:52"],
    emoji: "💥"
},
{
    term: "Virgin",
    definition: "A person who has not had sexual intercourse, emphasizing purity and dedication to God.",
    category: "Biblical Themes",
    references: ["Matthew 1:23", "2 Corinthians 11:2", "Revelation 14:4"],
    emoji: "⚪"
},
{
    term: "Visionary",
    definition: "One who receives and communicates divine revelations about God's plans and purposes.",
    category: "Ministry",
    references: ["Joel 2:28", "Acts 2:17", "1 Samuel 3:1"],
    emoji: "🔭"
},
{
    term: "Visitation",
    definition: "God's special intervention in human affairs, either for blessing or judgment.",
    category: "Theology",
    references: ["Luke 19:44", "1 Peter 2:12", "Exodus 3:16"],
    emoji: "👑"
},
{
    term: "Vitality",
    definition: "Spiritual liveliness and vigor that comes from abiding in Christ.",
    category: "Spiritual Life",
    references: ["John 10:10", "Psalm 92:14", "Isaiah 40:31"],
    emoji: "💪"
},
{
    term: "Vivification",
    definition: "The work of the Holy Spirit in making believers spiritually alive in Christ.",
    category: "Theology",
    references: ["Ephesians 2:5", "Romans 8:11", "John 5:21"],
    emoji: "🌱"
},
{
    term: "Vocation",
    definition: "God's specific calling on a person's life to serve him in particular ways.",
    category: "Spiritual Life",
    references: ["Ephesians 4:1", "1 Corinthians 7:17", "2 Peter 1:10"],
    emoji: "🎖️"
},
{
    term: "Voice of the Lord",
    definition: "God's powerful speech that creates, commands, and reveals his will.",
    category: "Theology",
    references: ["Psalm 29:3-9", "John 5:25", "Hebrews 3:7"],
    emoji: " 🔊"
},
{
    term: "Volunteer",
    definition: "One who willingly offers themselves for God's service without compulsion.",
    category: "Ministry",
    references: ["Judges 5:2", "Psalm 110:3", "2 Corinthians 8:3"],
    emoji: "✋"
},
{
    term: "Vow of Nazirite",
    definition: "A special consecration to God involving abstinence from wine, haircuts, and contact with dead bodies.",
    category: "Biblical Practices",
    references: ["Numbers 6:1-21", "Judges 13:5", "Acts 21:23-24"],
    emoji: "🙏"
},
{
    term: "Vulnerability",
    definition: "Openness and transparency before God and others that allows for genuine relationship and healing.",
    category: "Spiritual Life",
    references: ["Psalm 51:6", "James 5:16", "2 Corinthians 12:9"],
    emoji: "💝"
},
{
    term: "Vulture",
    definition: "Bird of prey used as symbol of God's judgment and the gathering of enemies.",
    category: "Biblical Imagery",
    references: ["Matthew 24:28", "Job 39:27-30", "Habakkuk 1:8"],
    emoji: "🦅"
},
{
    term: "Valley",
    definition: "Metaphor for times of difficulty, testing, or spiritual darkness in the believer's journey.",
    category: "Biblical Imagery",
    references: ["Psalm 23:4", "Ezekiel 37:1", "Hosea 2:15"],
    emoji: "🏞️"
},
{
    term: "Vanity",
    definition: "Futility and emptiness of life lived apart from God and eternal purposes.",
    category: "Biblical Themes",
    references: ["Ecclesiastes 1:2", "Ephesians 4:17", "Psalm 39:5"],
    emoji: "🎭"
},
{
    term: "Veil",
    definition: "A covering that separates holy from common, removed in Christ to grant access to God.",
    category: "Biblical Imagery",
    references: ["Exodus 26:33", "Matthew 27:51", "2 Corinthians 3:14-16"],
    emoji: "🧣"
},
{
    term: "Vengeance",
    definition: "Retributive justice that belongs to God alone, not to be taken by individuals.",
    category: "Theology",
    references: ["Romans 12:19", "Deuteronomy 32:35", "Hebrews 10:30"],
    emoji: "⚡"
},
{
    term: "Vestment",
    definition: "Special garments worn by priests in worship, representing righteousness and service to God.",
    category: "Biblical Practices",
    references: ["Exodus 28:2", "Revelation 19:8", "Psalm 132:9"],
    emoji: "👘"
},
{
    term: "Vexation",
    definition: "Spiritual distress, agitation, or torment caused by sin, opposition, or divine discipline.",
    category: "Spiritual Life",
    references: ["2 Peter 2:8", "Ecclesiastes 1:14", "Isaiah 65:14"],
    emoji: "😫"
},
{
    term: "Vigil",
    definition: "A period of watchful prayer and spiritual preparation, especially before significant events.",
    category: "Spiritual Disciplines",
    references: ["Matthew 26:38-41", "Luke 6:12", "Acts 12:12"],
    emoji: "🕯️"
},
{
    term: "Vindicator",
    definition: "God as the defender and protector of his people, especially the oppressed and innocent.",
    category: "Theology",
    references: ["Psalm 68:5", "Proverbs 23:11", "Jeremiah 50:34"],
    emoji: "🛡️"
},
{
    term: "Vinegar",
    definition: "Sour wine offered to Jesus on the cross, fulfilling prophecy and symbolizing his suffering.",
    category: "Biblical Imagery",
    references: ["Psalm 69:21", "Matthew 27:48", "John 19:29"],
    emoji: "🍷"
},
{
    term: "Viper",
    definition: "Venomous snake used as metaphor for evil people, hypocrisy, and spiritual danger.",
    category: "Biblical Imagery",
    references: ["Matthew 3:7", "Acts 28:3", "Job 20:16"],
    emoji: "🐍"
},
{
    term: "Virgin Birth",
    definition: "The miraculous conception of Jesus by the Holy Spirit without a human father.",
    category: "Theology",
    references: ["Matthew 1:18-25", "Luke 1:26-35", "Isaiah 7:14"],
    emoji: "👶"
},
{
    term: "Virtuous Woman",
    definition: "The ideal woman described in Proverbs, characterized by wisdom, industry, and fear of the Lord.",
    category: "Biblical Figures",
    references: ["Proverbs 31:10-31", "Ruth 3:11"],
    emoji: "👩"
},
{
    term: "Vision of God",
    definition: "The beatific vision - seeing God face to face, the ultimate hope of believers.",
    category: "Theology",
    references: ["Matthew 5:8", "1 Corinthians 13:12", "Revelation 22:4"],
    emoji: "👁️"
},
{
    term: "Visitors",
    definition: "Strangers and travelers to be shown hospitality as if entertaining Christ himself.",
    category: "Ethics",
    references: ["Hebrews 13:2", "Matthew 25:35", "3 John 1:5"],
    emoji: "👋"
},
{
    term: "Vital Union",
    definition: "The spiritual connection between Christ and believers that enables Christian life and growth.",
    category: "Theology",
    references: ["John 15:4-5", "Galatians 2:20", "Colossians 3:3"],
    emoji: "🔗"
},
{
    term: "Vivid",
    definition: "The clarity and power of biblical revelation and spiritual experience.",
    category: "Spiritual Life",
    references: ["2 Peter 1:16-19", "Hebrews 4:12", "1 John 1:1"],
    emoji: "🎨"
},
{
    term: "Vocation of Church",
    definition: "The collective calling of God's people to worship, witness, and service in the world.",
    category: "Ecclesiology",
    references: ["Ephesians 4:11-16", "1 Peter 2:9", "Matthew 28:19-20"],
    emoji: "⛪"
},
{
    term: "Voiceless",
    definition: "The condition of those without power or representation, whom God especially hears.",
    category: "Ethics",
    references: ["Psalm 10:17-18", "Proverbs 31:8", "Job 29:12-13"],
    emoji: "🤐"
},
{
    term: "Volition",
    definition: "The human will and its role in responding to God's grace and choosing obedience.",
    category: "Theology",
    references: ["Joshua 24:15", "Philippians 2:13", "John 7:17"],
    emoji: "🤔"
},
{
    term: "Volume of the Book",
    definition: "Phrase referring to Scripture as containing God's will and testimony about Christ.",
    category: "Theology",
    references: ["Hebrews 10:7", "Psalm 40:7", "Luke 24:27"],
    emoji: "📚"
},
{
    term: "Voluntary",
    definition: "Willing service and sacrifice offered to God from a cheerful heart.",
    category: "Worship",
    references: ["2 Corinthians 9:7", "Exodus 35:5", "Leviticus 1:3"],
    emoji: "🎁"
},
{
    term: "Votary",
    definition: "One dedicated to religious service through vows, such as a nun or monk.",
    category: "Church History",
    references: ["1 Timothy 5:9-10", "Acts 21:23-24"],
    emoji: "🙏"
},
{
    term: "Vouchsafe",
    definition: "To graciously grant or condescend to give, as God does with his blessings.",
    category: "Theology",
    references: ["Psalm 84:11", "James 1:17", "Romans 8:32"],
    emoji: "🎁"
},
{
    term: "Vow of Praise",
    definition: "Commitment to worship God publicly for his deliverance and faithfulness.",
    category: "Worship",
    references: ["Psalm 56:12", "Psalm 116:14", "Jonah 2:9"],
    emoji: "🎵"
},
{
    term: "Voyage",
    definition: "Metaphor for the Christian life as a journey with Christ as guide and destination.",
    category: "Spiritual Life",
    references: ["Acts 27:1-44", "Hebrews 11:8-10", "Philippians 3:20"],
    emoji: "⛵"
},
{
    term: "Vulnerary",
    definition: "Having healing properties, as God's Word is for spiritual wounds and brokenness.",
    category: "Spiritual Life",
    references: ["Psalm 107:20", "Psalm 147:3", "Isaiah 53:5"],
    emoji: "🩹"
},
    {
term: "Word of God",
definition: "The self-revelation of God through Scripture, Jesus Christ, and prophetic utterance.",
category: "Theology",
references: ["John 1:1", "Hebrews 4:12", "2 Timothy 3:16-17"],
emoji: "📖"
},
{
term: "Worship",
definition: "The act of ascribing worth to God through praise, thanksgiving, obedience, and service.",
category: "Spiritual Life",
references: ["John 4:23-24", "Psalm 95:6", "Romans 12:1"],
emoji: "🙌"
},
{
term: "Wisdom",
definition: "The practical application of knowledge and understanding, rooted in the fear of the Lord.",
category: "Virtues",
references: ["Proverbs 9:10", "James 1:5", "Proverbs 3:13-18"],
emoji: "🦉"
},
{
term: "Witness",
definition: "One who testifies to the truth of Christ, either through personal testimony or martyrdom.",
category: "Ministry",
references: ["Acts 1:8", "Matthew 24:14", "Revelation 2:13"],
emoji: "🗣️"
},
{
term: "Walk",
definition: "Biblical metaphor for one's manner of life, conduct, or spiritual journey with God.",
category: "Spiritual Life",
references: ["Colossians 2:6", "Micah 6:8", "1 John 1:7"],
emoji: "🚶"
},
{
term: "Warfare",
definition: "Spiritual conflict between God's kingdom and the forces of evil, requiring divine armor.",
category: "Spiritual Life",
references: ["Ephesians 6:12", "2 Corinthians 10:4", "1 Timothy 1:18"],
emoji: "⚔️"
},
{
term: "Wait",
definition: "The spiritual discipline of patient expectation for God's timing and intervention.",
category: "Spiritual Life",
references: ["Isaiah 40:31", "Psalm 27:14", "Lamentations 3:25"],
emoji: "⏳"
},
{
term: "Washed",
definition: "Spiritual cleansing from sin through the blood of Christ and regeneration by the Spirit.",
category: "Salvation",
references: ["1 Corinthians 6:11", "Titus 3:5", "Revelation 1:5"],
emoji: "💧"
},
{
term: "Watch",
definition: "Spiritual alertness and vigilance in prayer and preparation for Christ's return.",
category: "Spiritual Life",
references: ["Matthew 24:42", "Mark 13:35", "1 Peter 4:7"],
emoji: "👀"
},
{
term: "Way",
definition: "Jesus as the exclusive path to God and eternal life.",
category: "Theology",
references: ["John 14:6", "Acts 9:2", "Hebrews 10:20"],
emoji: "🛣️"
},
{
term: "Wealth",
definition: "Material possessions, which are temporary and to be stewarded for God's glory.",
category: "Ethics",
references: ["Matthew 6:19-21", "1 Timothy 6:17-19", "Proverbs 11:28"],
emoji: "💰"
},
{
term: "Wedding",
definition: "Marriage ceremony used as metaphor for Christ's relationship with the Church.",
category: "Biblical Imagery",
references: ["Matthew 22:1-14", "Revelation 19:7", "John 2:1-11"],
emoji: "💒"
},
{
term: "Weeping",
definition: "Expression of grief, repentance, or compassion that God notices and will ultimately wipe away.",
category: "Spiritual Life",
references: ["Psalm 126:5", "Revelation 21:4", "Romans 12:15"],
emoji: "😢"
},
{
term: "Wheat",
definition: "Metaphor for true believers who will be gathered into God's barn at harvest time.",
category: "Biblical Imagery",
references: ["Matthew 13:24-30", "John 12:24", "Jeremiah 23:28"],
emoji: "🌾"
},
{
term: "Whirlwind",
definition: "Symbol of God's powerful presence, sometimes used in divine judgment or transport.",
category: "Biblical Imagery",
references: ["Job 38:1", "2 Kings 2:11", "Nahum 1:3"],
emoji: "🌪️"
},
{
term: "White",
definition: "Color symbolizing purity, righteousness, victory, and resurrection glory.",
category: "Biblical Imagery",
references: ["Revelation 3:4-5", "Isaiah 1:18", "Matthew 17:2"],
emoji: "⚪"
},
{
term: "Wholehearted",
definition: "Complete devotion and undivided loyalty to God in obedience and love.",
category: "Spiritual Life",
references: ["Deuteronomy 6:5", "Psalm 119:2", "Jeremiah 29:13"],
emoji: "❤️"
},
{
term: "Whoredom",
definition: "Biblical term for spiritual adultery through idolatry and unfaithfulness to God.",
category: "Sin",
references: ["Ezekiel 16:15-34", "Hosea 1:2", "James 4:4"],
emoji: "💔"
},
{
term: "Wicked",
definition: "Those who reject God's ways and actively oppose righteousness.",
category: "Theology",
references: ["Psalm 1:1", "Proverbs 4:19", "Matthew 13:49"],
emoji: "👿"
},
{
term: "Widow",
definition: "A woman whose husband has died, representing vulnerable people God specially protects.",
category: "Biblical Groups",
references: ["James 1:27", "1 Timothy 5:3-16", "Luke 21:1-4"],
emoji: "👵"
},
{
term: "Wilderness",
definition: "Place of testing, purification, and divine provision in the spiritual journey.",
category: "Biblical Places",
references: ["Matthew 4:1", "Deuteronomy 8:2", "Hosea 2:14"],
emoji: "🏜️"
},
{
term: "Will",
definition: "Human capacity for choice and God's sovereign purpose that works all things according to his plan.",
category: "Theology",
references: ["Ephesians 1:11", "Matthew 26:39", "Philippians 2:13"],
emoji: "🎯"
},
{
term: "Wind",
definition: "Symbol of the Holy Spirit's invisible but powerful work and presence.",
category: "Biblical Imagery",
references: ["John 3:8", "Acts 2:2", "Ezekiel 37:9"],
emoji: "💨"
},
{
term: "Wine",
definition: "Symbol of joy, celebration, and the new covenant in Christ's blood.",
category: "Biblical Imagery",
references: ["Psalm 104:15", "Matthew 26:27-29", "John 2:1-10"],
emoji: "🍷"
},
{
term: "Winepress",
definition: "Symbol of divine judgment, particularly of God's wrath against sin.",
category: "Biblical Imagery",
references: ["Revelation 14:19-20", "Isaiah 63:3", "Lamentations 1:15"],
emoji: "⚖️"
},
{
term: "Wisdom Literature",
definition: "Biblical books focused on practical living: Job, Psalms, Proverbs, Ecclesiastes, Song of Solomon.",
category: "Biblical Studies",
references: ["Proverbs 1:1-7", "Ecclesiastes 1:1", "Job 1:1"],
emoji: "📚"
},
{
term: "Witchcraft",
definition: "The practice of sorcery or divination, strictly forbidden in Scripture.",
category: "Sin",
references: ["Deuteronomy 18:10-12", "Galatians 5:19-21", "1 Samuel 15:23"],
emoji: "🔮"
},
{
term: "Witness of the Spirit",
definition: "The Holy Spirit's inner confirmation of our adoption as God's children.",
category: "Theology",
references: ["Romans 8:16", "1 John 5:10", "Galatians 4:6"],
emoji: "🕊️"
},
{
term: "Woe",
definition: "A declaration of judgment, calamity, or deep distress pronounced by prophets and Jesus.",
category: "Biblical Language",
references: ["Isaiah 5:8", "Matthew 23:13", "Revelation 8:13"],
emoji: "⚠️"
},
{
term: "Woman",
definition: "Female human created in God's image, with equal value and distinct roles from man.",
category: "Theology",
references: ["Genesis 1:27", "Genesis 2:18", "Galatians 3:28"],
emoji: "👩"
},
{
term: "Wonder",
definition: "A miraculous sign that evokes awe and points to God's power and glory.",
category: "Biblical Miracles",
references: ["Acts 2:19", "Psalm 77:11", "Isaiah 29:14"],
emoji: "🌟"
},
{
term: "Word",
definition: "Jesus Christ as the eternal Logos, the ultimate self-expression of God.",
category: "Theology",
references: ["John 1:1-14", "1 John 1:1", "Revelation 19:13"],
emoji: "🗣️"
},
{
term: "Works",
definition: "Actions and deeds, which cannot save but should evidence genuine faith.",
category: "Theology",
references: ["Ephesians 2:8-10", "James 2:14-26", "Matthew 5:16"],
emoji: "🛠️"
},
{
term: "World",
definition: "The created universe, human society in rebellion against God, or the arena of God's redemptive work.",
category: "Theology",
references: ["John 3:16", "1 John 2:15-17", "John 17:14-18"],
emoji: "🌎"
},
{
term: "Worldliness",
definition: "Adopting the values, priorities, and behaviors of fallen human society opposed to God.",
category: "Sin",
references: ["1 John 2:15-16", "Romans 12:2", "James 4:4"],
emoji: "🎭"
},
{
term: "Worm",
definition: "Metaphor for human insignificance, mortality, or the suffering of Christ.",
category: "Biblical Imagery",
references: ["Job 25:6", "Psalm 22:6", "Isaiah 41:14"],
emoji: "🐛"
},
{
term: "Worry",
definition: "Anxious care about circumstances, which Jesus forbids due to God's faithful provision.",
category: "Spiritual Life",
references: ["Matthew 6:25-34", "Philippians 4:6", "1 Peter 5:7"],
emoji: "😟"
},
{
term: "Worship in Spirit",
definition: "Genuine worship that engages the human spirit empowered by the Holy Spirit.",
category: "Worship",
references: ["John 4:23-24", "Philippians 3:3", "Romans 8:26"],
emoji: "🔥"
},
{
term: "Worthiness",
definition: "The state of being qualified for God's kingdom through Christ's righteousness, not our own.",
category: "Theology",
references: ["Colossians 1:12", "Revelation 5:2", "2 Thessalonians 1:5"],
emoji: "⭐"
},
{
term: "Wound",
definition: "Physical or emotional injury, which God promises to heal for the repentant.",
category: "Spiritual Life",
references: ["Psalm 147:3", "Proverbs 27:6", "Isaiah 53:5"],
emoji: "🩹"
},
{
term: "Wrath",
definition: "God's holy, righteous anger against sin and his judicial response to evil.",
category: "Theology",
references: ["Romans 1:18", "Ephesians 5:6", "Revelation 6:16-17"],
emoji: "⚡"
},
{
term: "Wrestle",
definition: "Metaphor for spiritual struggle against demonic forces and internal sin.",
category: "Spiritual Life",
references: ["Ephesians 6:12", "Genesis 32:24-28", "Colossians 1:29"],
emoji: "🤼"
},
{
term: "Writing",
definition: "God's communication through Scripture, inscribed on tablets, scrolls, and human hearts.",
category: "Biblical Practices",
references: ["Exodus 31:18", "2 Timothy 3:16", "2 Corinthians 3:3"],
emoji: "✍️"
},
{
term: "Wrong",
definition: "Actions, attitudes, or systems contrary to God's moral character and commands.",
category: "Ethics",
references: ["1 Corinthians 6:7-8", "Colossians 3:25", "James 4:17"],
emoji: "❌"
},  
    {
term: "Xerxes",
definition: "King of Persia, commonly identified with Ahasuerus in the book of Esther, who ruled over 127 provinces.",
category: "Biblical Figures",
references: ["Esther 1:1", "Esther 2:16-17"],
emoji: "👑"
},
{
term: "Xerxes I",
definition: "Historical name for the Persian king known as Ahasuerus in Esther, son of Darius I.",
category: "Biblical Figures",
references: ["Esther 1:1-2"],
emoji: "🏺"
},
{
term: "Xystus",
definition: "A covered portico or colonnade in ancient Greek cities where athletic exercises were performed.",
category: "Biblical Places",
references: ["Historical context of Hellenistic cities"],
emoji: "🏛️"
},
{
term: "Xenophobia",
definition: "Fear or hatred of strangers; contrary to biblical commands to show hospitality to foreigners.",
category: "Ethics",
references: ["Leviticus 19:34", "Hebrews 13:2"],
emoji: "🚫"
},
{
term: "Xenia",
definition: "Greek concept of hospitality and generosity to strangers, practiced as a spiritual virtue.",
category: "Virtues",
references: ["Romans 12:13", "1 Peter 4:9"],
emoji: "🏠"
},
{
term: "Xenodochium",
definition: "A house for receiving and caring for strangers, pilgrims, or the sick in early Christian practice.",
category: "Church History",
references: ["Matthew 25:35"],
emoji: "🏥"
},
{
term: "Xylon",
definition: "Greek word for wood or tree, used in reference to the cross of Christ.",
category: "Theology",
references: ["Acts 5:30", "1 Peter 2:24"],
emoji: "✝️"
},
{
term: "Xerophagy",
definition: "A form of fasting involving consumption of dry food, practiced in early Christian asceticism.",
category: "Spiritual Disciplines",
references: ["Matthew 6:16-18"],
emoji: "🍞"
},
{
term: "Xystus II",
definition: "Pope and martyr of the 3rd century, mentioned in early church records.",
category: "Church History",
references: ["Historical church documents"],
emoji: "⛪"
},
{
term: "Xerophthalmia",
definition: "Spiritual metaphor for dryness of spiritual vision or lack of tears of repentance.",
category: "Spiritual Life",
references: ["Psalm 119:136", "Jeremiah 9:1"],
emoji: "👁️"
},
{
term: "Xenium",
definition: "A gift given to guests or strangers, representing Christian generosity.",
category: "Virtues",
references: ["2 Corinthians 9:7", "1 Timothy 6:18"],
emoji: "🎁"
},
{
term: "Xerophyte",
definition: "Botanical metaphor for believers who thrive in spiritually dry circumstances through deep roots in God.",
category: "Spiritual Life",
references: ["Jeremiah 17:7-8", "Psalm 1:3"],
emoji: "🌵"
},
{
term: "Xenolalia",
definition: "The supernatural ability to speak in unlearned human languages, as at Pentecost.",
category: "Spiritual Gifts",
references: ["Acts 2:4-11"],
emoji: "🗣️"
},
{
term: "Xystarch",
definition: "An official in charge of athletic games in Greek cities, metaphor for spiritual discipline.",
category: "Biblical Imagery",
references: ["1 Corinthians 9:24-27"],
emoji: "🎯"
},
{
term: "Xeron",
definition: "Greek word for dry or withered, used in healing miracles and spiritual metaphors.",
category: "Biblical Language",
references: ["Mark 3:1", "John 5:3"],
emoji: "🍂"
},
{
term: "Xeniteia",
definition: "The spiritual state of being a stranger or exile in the world for Christ's sake.",
category: "Spiritual Life",
references: ["Hebrews 11:13", "1 Peter 2:11"],
emoji: "🧳"
},
{
term: "Xylography",
definition: "The art of wood engraving, metaphor for God's law written on human hearts.",
category: "Biblical Imagery",
references: ["2 Corinthians 3:3"],
emoji: "📝"
},
{
term: "Xenium Giving",
definition: "The practice of giving gifts to strangers as an expression of Christian love.",
category: "Virtues",
references: ["Matthew 25:35-40"],
emoji: "🤝"
},
{
term: "Xerothermic",
definition: "Metaphor for spiritual testing through dry and hot circumstances that purify faith.",
category: "Spiritual Life",
references: ["1 Peter 1:6-7", "James 1:2-4"],
emoji: "🔥"
},
{
term: "Xenodochy",
definition: "The Christian practice of hospitality toward strangers and travelers.",
category: "Virtues",
references: ["Romans 12:13", "3 John 1:5-8"],
emoji: "❤️"
},
{
term: "Xyster",
definition: "A surgical instrument for scraping bones, metaphor for God's purifying discipline.",
category: "Biblical Imagery",
references: ["Hebrews 12:11", "Proverbs 3:11-12"],
emoji: "⚒️"
},
{
term: "Xenoglossy",
definition: "Alternative term for speaking in unlearned languages through supernatural means.",
category: "Spiritual Gifts",
references: ["Acts 2:4", "1 Corinthians 14:2"],
emoji: "🌍"
},
{
term: "Xoanon",
definition: "A primitive wooden cult image, contrasted with the living God of Scripture.",
category: "Theology",
references: ["Isaiah 44:9-20", "Acts 17:29"],
emoji: "🗿"
},
{
term: "Xeroxesis",
definition: "A drying up or withering, used as metaphor for spiritual barrenness without God.",
category: "Spiritual Life",
references: ["John 15:5-6", "Jeremiah 17:5-6"],
emoji: "🥀"
},
{
term: "Xenocracy",
definition: "Rule by foreigners, representing worldly powers contrasted with God's kingdom.",
category: "Theology",
references: ["Philippians 3:20", "John 18:36"],
emoji: "🌐"
},
{
term: "Xylophilous",
definition: "Literally 'wood-loving,' metaphor for devotion to the cross of Christ.",
category: "Spiritual Life",
references: ["Galatians 6:14", "1 Corinthians 1:18"],
emoji: "❤️"
},
{
term: "Xenogenesis",
definition: "Spiritual rebirth into a new creation through faith in Christ.",
category: "Theology",
references: ["2 Corinthians 5:17", "John 3:3"],
emoji: "🦋"
},
{
term: "Xeromorph",
definition: "A plant adapted to dry conditions, metaphor for believers thriving in spiritual drought.",
category: "Spiritual Life",
references: ["Psalm 63:1", "Isaiah 58:11"],
emoji: "🌵"
},
{
term: "Xenomania",
definition: "Excessive attraction to foreign customs, warned against in maintaining biblical distinctiveness.",
category: "Ethics",
references: ["Romans 12:2", "1 John 2:15-17"],
emoji: "⚠️"
},
{
term: "Xylology",
definition: "The study of wood, metaphor for understanding the significance of the cross.",
category: "Theology",
references: ["1 Corinthians 1:23-24", "Colossians 2:14-15"],
emoji: "📖"
},
{
term: "Xenophony",
definition: "The sound of foreign languages, representing the diversity of tongues praising God.",
category: "Worship",
references: ["Revelation 7:9-10", "Acts 2:11"],
emoji: "🎵"
},
  {
term: "Yahweh",
definition: "The personal name of God in the Old Testament, often translated as LORD in English Bibles.",
category: "Theology",
references: ["Exodus 3:14-15", "Psalm 68:4", "Isaiah 42:8"],
emoji: "🔯"
},
{
term: "Yahweh Jireh",
definition: "The Lord Will Provide - name Abraham gave to the place where God provided a ram for sacrifice.",
category: "Theology",
references: ["Genesis 22:14"],
emoji: "🐑"
},
{
term: "Yahweh Nissi",
definition: "The Lord Is My Banner - name Moses gave to the altar after victory over Amalek.",
category: "Theology",
references: ["Exodus 17:15"],
emoji: "🚩"
},
{
term: "Yahweh Rapha",
definition: "The Lord Who Heals - God's name revealed after healing bitter waters at Marah.",
category: "Theology",
references: ["Exodus 15:26"],
emoji: "❤️‍🩹"
},
{
term: "Yahweh Shalom",
definition: "The Lord Is Peace - name Gideon gave to the altar at Ophrah.",
category: "Theology",
references: ["Judges 6:24"],
emoji: "✌️"
},
{
term: "Yahweh Tsidkenu",
definition: "The Lord Our Righteousness - prophetic name for the coming Messiah.",
category: "Theology",
references: ["Jeremiah 23:6"],
emoji: "⚖️"
},
{
term: "Yahweh Shammah",
definition: "The Lord Is There - name given to the restored Jerusalem in Ezekiel's vision.",
category: "Theology",
references: ["Ezekiel 48:35"],
emoji: "🏙️"
},
{
term: "Yahweh Sabaoth",
definition: "The Lord of Hosts - emphasizing God's command over heavenly armies and all creation.",
category: "Theology",
references: ["1 Samuel 1:3", "Isaiah 6:3"],
emoji: "👑"
},
{
term: "Year of Jubilee",
definition: "The fiftieth year in Israel's calendar when slaves were freed, land returned, and debts canceled.",
category: "Biblical Practices",
references: ["Leviticus 25:8-17"],
emoji: "🕊️"
},
{
term: "Yoke",
definition: "A wooden frame joining two animals; metaphorically, submission to authority or teaching.",
category: "Biblical Imagery",
references: ["Matthew 11:29-30", "Galatians 5:1"],
emoji: "🐂"
},
{
term: "Yom Kippur",
definition: "The Day of Atonement, the holiest day in Jewish calendar for repentance and purification.",
category: "Biblical Practices",
references: ["Leviticus 16:1-34", "Leviticus 23:26-32"],
emoji: "🕍"
},
{
term: "Yoke of Bondage",
definition: "Paul's term for slavery to the Mosaic law or any system of works-based righteousness.",
category: "Theology",
references: ["Galatians 5:1", "Acts 15:10"],
emoji: "⛓️"
},
{
term: "Yoke of Christ",
definition: "Jesus' description of discipleship as a light burden that brings rest.",
category: "Theology",
references: ["Matthew 11:29-30"],
emoji: "🙏"
},
{
term: "Young Men",
definition: "A specific group addressed in John's epistles, noted for their spiritual strength.",
category: "Biblical Groups",
references: ["1 John 2:13-14"],
emoji: "👨"
},
{
term: "Youth",
definition: "The early period of life often warned against vanity and encouraged toward godliness.",
category: "Biblical Themes",
references: ["Ecclesiastes 11:9", "1 Timothy 4:12"],
emoji: "👦"
},
{
term: "Yielding",
definition: "The spiritual discipline of submitting to God's will and authority.",
category: "Spiritual Life",
references: ["Romans 6:13", "James 4:7"],
emoji: "🙇"
},
{
term: "Yoke-fellow",
definition: "Paul's term for a close companion in ministry labor.",
category: "Ministry",
references: ["Philippians 4:3"],
emoji: "🤝"
},
{
term: "Yearning",
definition: "Deep spiritual longing for God, his presence, or his kingdom.",
category: "Spiritual Life",
references: ["Psalm 42:1", "Romans 8:23"],
emoji: "💓"
},
{
term: "Yesternight",
definition: "Biblical term for the previous night, often used in divine communications.",
category: "Biblical Language",
references: ["Genesis 19:34", "Genesis 31:29"],
emoji: "🌙"
},
{
term: "Yieldedness",
definition: "The state of being fully surrendered and obedient to God's will.",
category: "Spiritual Life",
references: ["Romans 6:16", "Romans 12:1"],
emoji: "🕊️"
},
{
term: "Yokefellow",
definition: "Alternative spelling for yoke-fellow, meaning companion in labor.",
category: "Ministry",
references: ["Philippians 4:3"],
emoji: "👥"
},
{
term: "Young Woman",
definition: "Often referring to virgins or unmarried women in biblical contexts.",
category: "Biblical Groups",
references: ["Isaiah 7:14", "Joel 1:8"],
emoji: "👩"
},
{
term: "Year of the Lord's Favor",
definition: "Messianic prophecy fulfilled by Jesus, declaring liberation and salvation.",
category: "Prophecy",
references: ["Isaiah 61:1-2", "Luke 4:18-19"],
emoji: "🎉"
},
{
term: "Yielding Fruit",
definition: "Biblical imagery for producing spiritual results or character through abiding in Christ.",
category: "Spiritual Life",
references: ["Matthew 13:23", "John 15:5"],
emoji: "🌱"
},
{
term: "Yoke of Iron",
definition: "Metaphor for severe oppression or bondage imposed by enemies.",
category: "Biblical Imagery",
references: ["Deuteronomy 28:48"],
emoji: "🔗"
},
{
term: "Younger",
definition: "The junior or less prominent position, often elevated by God's grace.",
category: "Biblical Themes",
references: ["Genesis 25:23", "1 Timothy 5:1"],
emoji: "⬇️"
},
{
term: "Yielding to the Spirit",
definition: "The practice of allowing the Holy Spirit to guide and control one's life.",
category: "Spiritual Life",
references: ["Galatians 5:16", "Ephesians 5:18"],
emoji: "🕊️"
},
{
term: "Year of Release",
definition: "The sabbatical year when Hebrew slaves were freed and debts canceled.",
category: "Biblical Practices",
references: ["Deuteronomy 15:1-18"],
emoji: "📜"
},
{
term: "Yielding Lips",
definition: "Speech that is surrendered to God's control and purposes.",
category: "Spiritual Life",
references: ["Psalm 17:1", "Proverbs 16:1"],
emoji: "👄"
},
{
term: "Youthful Lusts",
definition: "The sinful desires and passions particularly associated with young adulthood.",
category: "Spiritual Life",
references: ["2 Timothy 2:22"],
emoji: "🚫"
},
{
term: "Yielding Members",
definition: "Paul's term for presenting one's body parts as instruments for righteousness.",
category: "Spiritual Life",
references: ["Romans 6:13"],
emoji: "💪"
},
    {
term: "Zacchaeus",
definition: "A chief tax collector who climbed a tree to see Jesus and was transformed by his encounter, leading to repentance and restitution.",
category: "Biblical Figures",
references: ["Luke 19:1-10"],
emoji: "🌳"
},
{
term: "Zadok",
definition: "A priest during David's reign who remained loyal and whose descendants served in the Temple.",
category: "Biblical Figures",
references: ["2 Samuel 15:24-29", "Ezekiel 44:15"],
emoji: "⛪"
},
{
term: "Zarephath",
definition: "The location where Elijah stayed with a widow during a famine, and God miraculously provided flour and oil.",
category: "Biblical Places",
references: ["1 Kings 17:8-16", "Luke 4:26"],
emoji: "🏠"
},
{
term: "Zeal",
definition: "Fervent devotion and enthusiasm for God's purposes, which should be guided by knowledge and love.",
category: "Virtues",
references: ["Romans 10:2", "2 Corinthians 7:11", "John 2:17"],
emoji: "🔥"
},
{
term: "Zeal of the Lord",
definition: "God's passionate commitment to his glory, his people, and his purposes.",
category: "Theology",
references: ["Isaiah 9:7", "Ezekiel 5:13"],
emoji: "⚡"
},
{
term: "Zealot",
definition: "A member of a first-century Jewish political movement advocating violent overthrow of Roman rule.",
category: "Biblical Groups",
references: ["Luke 6:15", "Acts 1:13"],
emoji: "⚔️"
},
{
term: "Zebulun",
definition: "One of the twelve tribes of Israel, descended from Jacob's tenth son, given territory in Galilee.",
category: "Biblical Tribes",
references: ["Genesis 30:20", "Joshua 19:10-16"],
emoji: "🗺️"
},
{
term: "Zechariah",
definition: "A post-exilic prophet who encouraged the rebuilding of the Temple and foretold the coming Messiah.",
category: "Biblical Figures",
references: ["Ezra 5:1", "Zechariah 1:1"],
emoji: "📖"
},
{
term: "Zedekiah",
definition: "The last king of Judah before the Babylonian exile, who reigned during Jerusalem's destruction.",
category: "Biblical Figures",
references: ["2 Kings 24:17-20", "Jeremiah 52:1-11"],
emoji: "👑"
},
{
term: "Zephaniah",
definition: "A prophet who preached during Josiah's reign, warning of the Day of the Lord and calling for repentance.",
category: "Biblical Figures",
references: ["Zephaniah 1:1"],
emoji: "📜"
},
{
term: "Zerubbabel",
definition: "A Jewish leader who oversaw the initial return from exile and rebuilding of the Temple.",
category: "Biblical Figures",
references: ["Ezra 3:2", "Haggai 1:1"],
emoji: "🏗️"
},
{
term: "Zion",
definition: "Originally the Jebusite fortress captured by David, later referring to Jerusalem and God's dwelling place.",
category: "Biblical Places",
references: ["2 Samuel 5:7", "Psalm 48:2", "Isaiah 2:3"],
emoji: "⛰️"
},
{
term: "Zion Theology",
definition: "The belief in God's special presence and protection of Jerusalem/Zion as his chosen city.",
category: "Theology",
references: ["Psalm 132:13-14", "Isaiah 8:18"],
emoji: "🏛️"
},
{
term: "Zipporah",
definition: "Moses' Midianite wife who saved his life by circumcising their son.",
category: "Biblical Figures",
references: ["Exodus 2:21", "Exodus 4:24-26"],
emoji: "💍"
},
{
term: "Ziz",
definition: "A cliff or pass where Jehoshaphat's army witnessed God's victory over invading armies.",
category: "Biblical Places",
references: ["2 Chronicles 20:16"],
emoji: "🏞️"
},
{
term: "Zoar",
definition: "The small city Lot fled to for safety during the destruction of Sodom and Gomorrah.",
category: "Biblical Places",
references: ["Genesis 19:20-23"],
emoji: "🏘️"
},
{
term: "Zoe",
definition: "Greek word for life, particularly eternal life given by God through Christ.",
category: "Theology",
references: ["John 10:10", "1 John 5:11"],
emoji: "🌱"
},
{
term: "Zophar",
definition: "One of Job's three friends who accused Job of hidden sin and defended God's justice.",
category: "Biblical Figures",
references: ["Job 2:11", "Job 11:1"],
emoji: "👥"
},
{
term: "Zuzim",
definition: "An ancient people group defeated by Chedorlaomer and his allies in Abraham's time.",
category: "Biblical Groups",
references: ["Genesis 14:5"],
emoji: "⚔️"
},
 
    {
        term: "Angel",
        definition: "A spiritual being created by God to serve as His messengers and agents.",
        category: "Beings",
        references: ["Hebrews 1:14", "Luke 1:26", "Psalm 91:11"],
        emoji: "👼"
    },
    {
        term: "Church",
        definition: "The community of all believers in Jesus Christ, both locally and worldwide.",
        category: "Theology",
        references: ["Matthew 16:18", "Ephesians 5:25", "Acts 2:42"],
        emoji: "⛪"
    },
    {
        term: "Discernment",
        definition: "The ability to judge well and distinguish between truth and error, right and wrong.",
        category: "Spiritual Gifts",
        references: ["Hebrews 5:14", "1 Kings 3:9", "Philippians 1:9"],
        emoji: "🔍"
    },
    {
        term: "Eternal Life",
        definition: "The gift of never-ending life with God that begins when we trust in Jesus.",
        category: "Theology",
        references: ["John 3:16", "1 John 5:11", "Romans 6:23"],
        emoji: "∞"
    },
    {
        term: "Fellowship",
        definition: "Sharing life together as believers - encouraging, supporting, and growing in faith together.",
        category: "Practices",
        references: ["Acts 2:42", "1 John 1:7", "Hebrews 10:24"],
        emoji: "🤝"
    },
    {
        term: "Gentile",
        definition: "Anyone who is not Jewish. In the New Testament, refers to non-Jewish people who believe in Jesus.",
        category: "People",
        references: ["Romans 3:29", "Acts 10:45", "Ephesians 3:6"],
        emoji: "🌍"
    },
    {
        term: "Holiness",
        definition: "Being set apart for God's purposes - moral purity and dedication to God.",
        category: "Theology",
        references: ["1 Peter 1:16", "Hebrews 12:14", "2 Corinthians 7:1"],
        emoji: "✨"
    },
    {
        term: "Incarnation",
        definition: "God becoming human in the person of Jesus Christ.",
        category: "Theology",
        references: ["John 1:14", "Philippians 2:6-7", "1 Timothy 3:16"],
        emoji: "👤"
    },
    {
        term: "Justification",
        definition: "God declaring us righteous and forgiven because of Jesus' sacrifice, not our own works.",
        category: "Theology",
        references: ["Romans 3:24", "Galatians 2:16", "Romans 5:1"],
        emoji: "✅"
    },
    {
        term: "Kingdom of Heaven",
        definition: "Same as Kingdom of God - Matthew's preferred term for God's reign and rule.",
        category: "Theology",
        references: ["Matthew 3:2", "Matthew 13:31", "Matthew 25:1"],
        emoji: "👑"
    },
    {
    term: "Kingdom of Heaven",
    definition: "Another way of saying 'Kingdom of God' — where God's rule, order, and glory dominate everything.",
    category: "Theology",
    references: ["Matthew 5:3", "Matthew 13:24", "Matthew 19:23"],
    emoji: "🌤️"
},
{
    term: "Knowledge of God",
    definition: "Deep understanding of who God is — not just info, but relationship and revelation.",
    category: "Theology",
    references: ["Proverbs 2:5", "Hosea 6:6", "2 Peter 1:2"],
    emoji: "📖"
},
{
    term: "Kindness",
    definition: "A fruit of the Spirit — showing God’s heart through compassion and gentleness even when people don’t deserve it.",
    category: "Christian Living",
    references: ["Galatians 5:22", "Ephesians 4:32", "Colossians 3:12"],
    emoji: "💛"
},
{
    term: "King of Kings",
    definition: "A title for Jesus showing His supreme authority over all earthly rulers and powers.",
    category: "Christology",
    references: ["1 Timothy 6:15", "Revelation 19:16"],
    emoji: "👑"
},
{
    term: "Koinonia",
    definition: "Greek for ‘fellowship’ — the deep spiritual connection believers share through Christ.",
    category: "Theology",
    references: ["Acts 2:42", "1 John 1:7", "Philippians 2:1"],
    emoji: "🤝"
},
{
    term: "Keys of the Kingdom",
    definition: "Symbol of authority given by Christ to His church — power to bind and loose according to Heaven’s will.",
    category: "Theology",
    references: ["Matthew 16:19"],
    emoji: "🗝️"
},
{
    term: "Kneel",
    definition: "A posture of humility and surrender before God in prayer or worship.",
    category: "Spiritual Practices",
    references: ["Ephesians 3:14", "Philippians 2:10"],
    emoji: "🧎‍♂️"
},
{
    term: "Keeping the Faith",
    definition: "Staying loyal to Christ through trials — holding the line even when it costs you.",
    category: "Christian Living",
    references: ["2 Timothy 4:7", "Hebrews 10:23"],
    emoji: "🛡️"
},
{
    term: "Knowledge of Good and Evil",
    definition: "The awareness gained after Adam and Eve’s disobedience — symbol of human moral independence and downfall.",
    category: "Theology",
    references: ["Genesis 2:17", "Genesis 3:22"],
    emoji: "🍎"
},
{
    term: "Abide",
    definition: "To stay connected and rooted in Christ — like a branch drawing life from the vine.",
    category: "Christian Living",
    references: ["John 15:4-5", "1 John 2:28"],
    emoji: "🌿"
},
{
    term: "Abomination",
    definition: "Something deeply detestable to God — usually referring to sin or rebellion against His holiness.",
    category: "Theology",
    references: ["Proverbs 6:16-19", "Leviticus 18:22"],
    emoji: "🚫"
},
{
    term: "Abrahamic Covenant",
    definition: "The promise God made to Abraham — land, descendants, and blessing for all nations through him.",
    category: "Covenants",
    references: ["Genesis 12:2-3", "Genesis 17:4-8"],
    emoji: "🌍"
},
{
    term: "Adoration",
    definition: "The pure act of loving and praising God simply for who He is — no requests, just worship.",
    category: "Worship",
    references: ["Psalm 95:6", "John 4:24"],
    emoji: "🙌"
},
{
    term: "Adversary",
    definition: "An enemy or opponent — often used to describe Satan, the one who opposes God’s people.",
    category: "Spiritual Warfare",
    references: ["1 Peter 5:8", "Zechariah 3:1"],
    emoji: "😈"
},
{
    term: "Agape",
    definition: "The highest form of love — selfless, unconditional, God-type love that sacrifices for others.",
    category: "Theology",
    references: ["1 Corinthians 13:4-8", "1 John 4:8"],
    emoji: "❤️"
},
{
    term: "Almighty",
    definition: "A title for God meaning all-powerful — nothing is too hard for Him.",
    category: "Attributes of God",
    references: ["Genesis 17:1", "Revelation 1:8"],
    emoji: "⚡"
},
{
    term: "Altar",
    definition: "A sacred place where offerings and sacrifices are made to God — symbolic of surrender and worship.",
    category: "Worship",
    references: ["Genesis 8:20", "Hebrews 13:10"],
    emoji: "🔥"
},
{
    term: "Amen",
    definition: "Means ‘so be it’ or ‘truly’ — used to affirm truth or agreement in prayer and worship.",
    category: "Worship",
    references: ["2 Corinthians 1:20", "Revelation 22:21"],
    emoji: "🗣️"
},
{
    term: "Anointing",
    definition: "God’s empowerment through His Spirit for a specific task, mission, or calling.",
    category: "Spiritual Growth",
    references: ["1 Samuel 16:13", "1 John 2:20"],
    emoji: "🪔"
},
{
    term: "Apostle",
    definition: "A messenger or one sent out by Christ to spread the gospel and build His Church.",
    category: "Ministry",
    references: ["Luke 6:13", "Ephesians 4:11"],
    emoji: "🕊️"
},
{
    term: "Armor of God",
    definition: "Spiritual gear for believers to stand strong against evil — truth, righteousness, faith, salvation, and more.",
    category: "Spiritual Warfare",
    references: ["Ephesians 6:11-17"],
    emoji: "🛡️"
},
{
    term: "Ascension",
    definition: "When Jesus rose into heaven after His resurrection, showing His divine authority and victory.",
    category: "Christology",
    references: ["Acts 1:9-11", "Luke 24:51"],
    emoji: "☁️"
},
{
    term: "Atonement",
    definition: "Jesus taking our place on the cross to restore our relationship with God — the great exchange.",
    category: "Theology",
    references: ["Romans 5:11", "1 John 2:2"],
    emoji: "🩸"
},
{
    term: "Antichrist",
    definition: "Anyone or anything that opposes or denies Christ — ultimately a final deceiver will rise before Jesus returns.",
    category: "Eschatology",
    references: ["1 John 2:18", "2 Thessalonians 2:3-4"],
    emoji: "👹"
},
{
    term: "Ark of the Covenant",
    definition: "A sacred chest that represented God’s presence and held the Ten Commandments.",
    category: "Old Testament",
    references: ["Exodus 25:10-22", "Hebrews 9:4"],
    emoji: "📦"
},
{
    term: "Armageddon",
    definition: "The final battle between good and evil before Christ’s victory and reign.",
    category: "Eschatology",
    references: ["Revelation 16:16"],
    emoji: "⚔️"
},
{
    term: "Sanctification",
    definition: "The process of being made holy, set apart for God, and conformed to Christ's image.",
    category: "Theology",
    references: ["1 Thessalonians 4:3", "Hebrews 12:14", "2 Corinthians 3:18"],
    emoji: "✨"
},
{
    term: "Scripture",
    definition: "The inspired, authoritative Word of God contained in the Old and New Testaments.",
    category: "Theology",
    references: ["2 Timothy 3:16-17", "2 Peter 1:20-21", "Psalm 119:105"],
    emoji: "📖"
},
{
    term: "Spirit",
    definition: "The Holy Spirit, the third person of the Trinity who indwells, guides, and empowers believers.",
    category: "Theology",
    references: ["John 14:26", "Romans 8:9", "Galatians 5:22-23"],
    emoji: "🕊️"
},
{
    term: "Sovereignty",
    definition: "God's supreme authority and control over all creation, events, and human history.",
    category: "Theology",
    references: ["Psalm 115:3", "Daniel 4:35", "Ephesians 1:11"],
    emoji: "👑"
},
{
    term: "Sacrifice",
    definition: "An offering to God, ultimately fulfilled in Christ's death on the cross for sins.",
    category: "Theology",
    references: ["Hebrews 9:26", "Romans 12:1", "1 Peter 2:5"],
    emoji: "✝️"
},
{
    term: "Sabbath",
    definition: "The seventh day of rest established by God, pointing to eternal rest in Christ.",
    category: "Biblical Practices",
    references: ["Genesis 2:2-3", "Exodus 20:8-11", "Mark 2:27-28"],
    emoji: "🕯️"
},
{
    term: "Sermon on the Mount",
    definition: "Jesus' foundational teaching on kingdom values and discipleship in Matthew 5-7.",
    category: "Biblical Events",
    references: ["Matthew 5:1-7:29", "Luke 6:20-49"],
    emoji: "⛰️"
},
{
    term: "Second Coming",
    definition: "The future return of Jesus Christ in glory to judge the world and establish his kingdom.",
    category: "Eschatology",
    references: ["Acts 1:11", "1 Thessalonians 4:16-17", "Revelation 19:11-16"],
    emoji: "☁️"
},
{
    term: "Satan",
    definition: "The adversary, the devil, a fallen angel who opposes God and tempts humanity.",
    category: "Theology",
    references: ["1 Peter 5:8", "Revelation 12:9", "Matthew 4:1-11"],
    emoji: "😈"
},
{
    term: "Savior",
    definition: "Title for Jesus Christ as the one who rescues people from sin and death.",
    category: "Theology",
    references: ["Luke 2:11", "1 Timothy 4:10", "Titus 2:13"],
    emoji: "🛟"
},
{
    term: "Saints",
    definition: "All believers in Christ, set apart as holy and belonging to God.",
    category: "Theology",
    references: ["1 Corinthians 1:2", "Ephesians 1:1", "Romans 1:7"],
    emoji: "🙏"
},
{
    term: "Sacraments",
    definition: "Outward signs of inward grace instituted by Christ, typically baptism and communion.",
    category: "Theology",
    references: ["Matthew 28:19", "1 Corinthians 11:23-26", "Acts 2:38"],
    emoji: "💧"
},
{
    term: "Suffering",
    definition: "Pain and hardship that God uses to refine faith, develop character, and display his glory.",
    category: "Spiritual Life",
    references: ["Romans 5:3-5", "1 Peter 4:12-13", "2 Corinthians 1:5"],
    emoji: "💔"
},
{
    term: "Stewardship",
    definition: "The management of God-given resources for his glory and others' good.",
    category: "Spiritual Life",
    references: ["1 Peter 4:10", "Luke 12:42-48", "1 Corinthians 4:2"],
    emoji: "💼"
},
{
    term: "Shepherd",
    definition: "Metaphor for leadership and care, with Jesus as the Good Shepherd of his people.",
    category: "Biblical Imagery",
    references: ["Psalm 23:1", "John 10:11", "1 Peter 5:2-4"],
    emoji: "🐑"
},
{
    term: "Soul",
    definition: "The immaterial part of a human being that continues after physical death.",
    category: "Theology",
    references: ["Matthew 10:28", "1 Thessalonians 5:23", "Psalm 23:3"],
    emoji: "💫"
},
{
    term: "Spiritual Gifts",
    definition: "Supernatural abilities given by the Holy Spirit for building up the church.",
    category: "Spiritual Life",
    references: ["1 Corinthians 12:4-11", "Romans 12:6-8", "1 Peter 4:10-11"],
    emoji: "🎁"
},
{
    term: "Submission",
    definition: "Willingly yielding to proper authority as an expression of trust in God's order.",
    category: "Spiritual Life",
    references: ["Ephesians 5:21", "Hebrews 13:17", "James 4:7"],
    emoji: "🙇"
},
{
    term: "Sovereign Grace",
    definition: "God's unmerited favor exercised according to his sovereign will and purpose.",
    category: "Theology",
    references: ["Ephesians 1:5-6", "Romans 9:15-16", "2 Timothy 1:9"],
    emoji: "👑"
},
{
    term: "Son of God",
    definition: "Title emphasizing Jesus' divine nature and unique relationship with the Father.",
    category: "Theology",
    references: ["Matthew 16:16", "John 3:16", "Romans 1:4"],
    emoji: "👑"
},
{
    term: "Son of Man",
    definition: "Jesus' favorite self-designation, emphasizing his humanity and messianic role.",
    category: "Theology",
    references: ["Daniel 7:13", "Matthew 8:20", "Mark 14:62"],
    emoji: "👨"
},
{
    term: "Sovereign Lord",
    definition: "Title acknowledging God's complete authority and control over all things.",
    category: "Theology",
    references: ["Psalm 86:5", "Luke 2:29", "Revelation 6:10"],
    emoji: "👑"
},
{
    term: "Spiritual Warfare",
    definition: "The ongoing battle against demonic forces and spiritual opposition to God's kingdom.",
    category: "Spiritual Life",
    references: ["Ephesians 6:12", "2 Corinthians 10:4", "1 Timothy 1:18"],
    emoji: "⚔️"
},
{
    term: "Sovereign Will",
    definition: "God's predetermined plan that cannot be thwarted by human or demonic opposition.",
    category: "Theology",
    references: ["Proverbs 19:21", "Isaiah 46:10", "Romans 9:19"],
    emoji: "🎯"
},
{
    term: "Suffering Servant",
    definition: "Prophetic description of the Messiah who would bear the sins of his people.",
    category: "Theology",
    references: ["Isaiah 53:3-12", "Matthew 8:17", "1 Peter 2:24"],
    emoji: "😔"
},
{
    term: "Sanctuary",
    definition: "A holy place set apart for worship and God's presence.",
    category: "Biblical Places",
    references: ["Exodus 25:8", "Hebrews 8:2", "Psalm 96:6"],
    emoji: "⛪"
},
{
    term: "Sovereign King",
    definition: "God as the supreme ruler over all creation and human authorities.",
    category: "Theology",
    references: ["Psalm 47:7", "1 Timothy 6:15", "Revelation 19:16"],
    emoji: "👑"
},
{
    term: "Spiritual Discernment",
    definition: "The God-given ability to distinguish between truth and error in spiritual matters.",
    category: "Spiritual Life",
    references: ["1 Corinthians 2:14", "Hebrews 5:14", "1 John 4:1"],
    emoji: "👁️"
},
{
    term: "Sovereign Purpose",
    definition: "God's eternal plan that he accomplishes through all circumstances and events.",
    category: "Theology",
    references: ["Ephesians 1:11", "Romans 8:28", "Isaiah 14:27"],
    emoji: "🎯"
},
{
    term: "Saving Faith",
    definition: "Trust in Christ alone for salvation, evidenced by repentance and obedience.",
    category: "Theology",
    references: ["Ephesians 2:8-9", "James 2:17", "Romans 10:9"],
    emoji: "✝️"
},
{
    term: "Spiritual Maturity",
    definition: "The process of growing toward Christlike character and understanding.",
    category: "Spiritual Life",
    references: ["Ephesians 4:13", "Colossians 1:28", "Hebrews 5:14"],
    emoji: "🌳"
},
{
    term: "Sovereign Love",
    definition: "God's electing, unconditional love that pursues and saves his people.",
    category: "Theology",
    references: ["Deuteronomy 7:7-8", "1 John 4:19", "Romans 5:8"],
    emoji: "❤️"
},
{
    term: "Suffering for Christ",
    definition: "Persecution and hardship endured because of faithfulness to Jesus.",
    category: "Spiritual Life",
    references: ["Matthew 5:10-12", "2 Timothy 3:12", "1 Peter 4:12-14"],
    emoji: "🎯"
},
{
    term: "Spiritual Fruit",
    definition: "The Christlike character qualities produced in believers by the Holy Spirit.",
    category: "Spiritual Life",
    references: ["Galatians 5:22-23", "John 15:5", "Ephesians 5:9"],
    emoji: "🍎"
},
{
    term: "Sovereign Mercy",
    definition: "God's compassion shown according to his will rather than human merit.",
    category: "Theology",
    references: ["Romans 9:15-16", "Exodus 33:19", "1 Peter 2:10"],
    emoji: "🕊️"
},
{
    term: "Saving Knowledge",
    definition: "Understanding of the gospel that leads to genuine conversion and eternal life.",
    category: "Theology",
    references: ["John 17:3", "2 Timothy 3:15", "1 John 5:20"],
    emoji: "💡"
},
{
    term: "Spiritual Authority",
    definition: "God-given leadership and influence exercised in submission to Christ.",
    category: "Ministry",
    references: ["Matthew 28:18-20", "Hebrews 13:17", "1 Peter 5:2-3"],
    emoji: "⚖️"
},
{
    term: "Sovereign Reign",
    definition: "God's eternal kingship over all creation, currently contested but ultimately victorious.",
    category: "Theology",
    references: ["Psalm 93:1", "1 Corinthians 15:25", "Revelation 11:15"],
    emoji: "👑"
},
{
    term: "Sacrificial Love",
    definition: "Self-giving love modeled by Christ and commanded for his followers.",
    category: "Virtues",
    references: ["John 15:13", "1 John 3:16", "Ephesians 5:2"],
    emoji: "💝"
},
{
    term: "Spiritual Blessings",
    definition: "The heavenly benefits and privileges granted to believers in Christ.",
    category: "Theology",
    references: ["Ephesians 1:3", "Romans 8:32", "2 Peter 1:3-4"],
    emoji: "🎁"
},
{
    term: "Sovereign Judge",
    definition: "God as the ultimate arbiter of justice who will render perfect judgment.",
    category: "Theology",
    references: ["Genesis 18:25", "2 Timothy 4:8", "Revelation 20:12"],
    emoji: "⚖️"
},
{
    term: "Saving Grace",
    definition: "God's unmerited favor that brings salvation and eternal life.",
    category: "Theology",
    references: ["Titus 2:11", "Ephesians 2:8", "Romans 3:24"],
    emoji: "💝"
},
{
    term: "Spiritual Hunger",
    definition: "Deep desire for God and his Word that drives pursuit of spiritual growth.",
    category: "Spiritual Life",
    references: ["Matthew 5:6", "Psalm 42:1", "1 Peter 2:2"],
    emoji: "🍽️"
},
{
    term: "Sovereign Plan",
    definition: "God's eternal purpose that governs all events and ensures his glory.",
    category: "Theology",
    references: ["Isaiah 46:10", "Acts 2:23", "Ephesians 1:11"],
    emoji: "🗺️"
},
{
    term: "Sanctifying Grace",
    definition: "The Holy Spirit's work of making believers holy throughout their Christian life.",
    category: "Theology",
    references: ["2 Thessalonians 2:13", "1 Peter 1:2", "1 Corinthians 6:11"],
    emoji: "✨"
},
{
    term: "Spiritual Warfare",
    definition: "The Christian's battle against spiritual forces of evil using God's armor.",
    category: "Spiritual Life",
    references: ["Ephesians 6:10-18", "2 Corinthians 10:3-5", "1 Peter 5:8-9"],
    emoji: "🛡️"
},
{
    term: "Sovereign Goodness",
    definition: "God's perfect benevolence exercised according to his wise and holy will.",
    category: "Theology",
    references: ["Psalm 145:9", "Romans 8:28", "James 1:17"],
    emoji: "🌟"
},
{
    term: "Saving Work",
    definition: "Christ's atoning death and resurrection that accomplishes redemption.",
    category: "Theology",
    references: ["John 19:30", "Hebrews 1:3", "Romans 5:10"],
    emoji: "✝️"
},
{
    term: "Spiritual Discernment",
    definition: "Ability to distinguish between truth and error through the Holy Spirit.",
    category: "Spiritual Life",
    references: ["1 Corinthians 2:14-15", "Hebrews 5:14", "1 John 4:1"],
    emoji: "🔍"
},
{
    term: "Sovereign Power",
    definition: "God's unlimited ability to accomplish all his purposes.",
    category: "Theology",
    references: ["Jeremiah 32:17", "Ephesians 1:19-20", "Matthew 28:18"],
    emoji: "💪"
},
{
    term: "Sacramental Union",
    definition: "The spiritual connection between the physical elements and spiritual reality in sacraments.",
    category: "Theology",
    references: ["1 Corinthians 10:16", "Matthew 26:26-28", "Romans 6:3-4"],
    emoji: "🔗"
},
{
    term: "Spiritual Formation",
    definition: "The process of being shaped into Christ's image through spiritual disciplines.",
    category: "Spiritual Life",
    references: ["Romans 8:29", "2 Corinthians 3:18", "Colossians 3:10"],
    emoji: "🔄"
},
{
    term: "Sovereign Wisdom",
    definition: "God's perfect knowledge and understanding that directs all his works.",
    category: "Theology",
    references: ["Romans 11:33", "Isaiah 55:8-9", "1 Corinthians 1:25"],
    emoji: "🧠"
},
{
    term: "Saving Righteousness",
    definition: "The perfect righteousness of Christ imputed to believers through faith.",
    category: "Theology",
    references: ["Romans 3:21-22", "2 Corinthians 5:21", "Philippians 3:9"],
    emoji: "⚖️"
},
{
    term: "Spiritual Renewal",
    definition: "The ongoing work of the Holy Spirit in revitalizing believers and churches.",
    category: "Spiritual Life",
    references: ["Titus 3:5", "Romans 12:2", "2 Corinthians 4:16"],
    emoji: "🔄"
},
{
    term: "Sovereign Election",
    definition: "God's gracious choice of individuals for salvation before the foundation of the world.",
    category: "Theology",
    references: ["Ephesians 1:4-5", "Romans 8:29-30", "2 Thessalonians 2:13"],
    emoji: "✅"
},
{
    term: "Sacrificial System",
    definition: "The Old Testament practices pointing to Christ's ultimate sacrifice for sin.",
    category: "Biblical Studies",
    references: ["Hebrews 10:1-14", "Leviticus 1:1-17", "John 1:29"],
    emoji: "🐑"
},
{
    term: "Spiritual Awakening",
    definition: "A period of unusual spiritual interest and conversion in a community or nation.",
    category: "Spiritual Life",
    references: ["Acts 2:41", "Habakkuk 3:2", "Psalm 85:6"],
    emoji: "🔥"
},
{
    term: "Sovereign Providence",
    definition: "God's continual involvement with and control over his creation.",
    category: "Theology",
    references: ["Matthew 10:29-30", "Acts 17:28", "Romans 8:28"],
    emoji: "🌍"
},
{
    term: "Saving Faith",
    definition: "Trust in Christ that results in regeneration and justification.",
    category: "Theology",
    references: ["Acts 16:31", "Romans 10:9", "Ephesians 2:8"],
    emoji: "🙏"
},
{
    term: "Spiritual Leadership",
    definition: "Guiding God's people through biblical wisdom and Christlike example.",
    category: "Ministry",
    references: ["1 Timothy 3:1-7", "1 Peter 5:2-3", "Hebrews 13:7"],
    emoji: "👑"
},
{
    term: "Sovereign Lord",
    definition: "Title emphasizing God's absolute authority over all creation.",
    category: "Theology",
    references: ["Psalm 135:6", "Isaiah 45:7", "Revelation 4:11"],
    emoji: "👑"
},
{
    term: "Sanctifying Work",
    definition: "The Holy Spirit's process of making believers holy in practice.",
    category: "Theology",
    references: ["1 Thessalonians 5:23", "John 17:17", "2 Corinthians 7:1"],
    emoji: "✨"
},
{
    term: "Spiritual Gifts",
    definition: "Supernatural abilities given to believers for serving the body of Christ.",
    category: "Spiritual Life",
    references: ["1 Corinthians 12:7", "Romans 12:6", "1 Peter 4:10"],
    emoji: "🎁"
},
{
    term: "Sovereign King",
    definition: "Christ as the ruler over all creation and the coming eternal kingdom.",
    category: "Theology",
    references: ["Revelation 19:16", "1 Timothy 6:15", "Psalm 2:6"],
    emoji: "👑"
},
{
    term: "Saving Blood",
    definition: "The blood of Christ that cleanses from sin and secures redemption.",
    category: "Theology",
    references: ["1 Peter 1:18-19", "Hebrews 9:14", "Revelation 1:5"],
    emoji: "💉"
},
{
    term: "Spiritual Warfare",
    definition: "The believer's conflict with demonic forces and spiritual opposition.",
    category: "Spiritual Life",
    references: ["Ephesians 6:12", "2 Corinthians 10:4", "1 Timothy 6:12"],
    emoji: "⚔️"
},
{
    term: "Sovereign Grace",
    definition: "God's unmerited favor exercised according to his sovereign purpose.",
    category: "Theology",
    references: ["Romans 9:15-16", "Ephesians 1:5-6", "2 Timothy 1:9"],
    emoji: "💝"
},
{
    term: "Sanctuary",
    definition: "A holy place where God meets with his people.",
    category: "Biblical Places",
    references: ["Exodus 25:8", "Psalm 150:1", "Hebrews 8:2"],
    emoji: "⛪"
},
{
    term: "Spiritual Discernment",
    definition: "Ability to distinguish between truth and error through the Holy Spirit.",
    category: "Spiritual Life",
    references: ["1 Corinthians 2:14", "Hebrews 5:14", "1 John 4:1"],
    emoji: "👁️"
},
{
    term: "Sovereign Will",
    definition: "God's predetermined plan that governs all events.",
    category: "Theology",
    references: ["Ephesians 1:11", "Proverbs 19:21", "Daniel 4:35"],
    emoji: "🎯"
},
{
    term: "Saving Knowledge",
    definition: "Understanding of gospel truth that leads to eternal life.",
    category: "Theology",
    references: ["John 17:3", "2 Timothy 3:15", "1 John 5:20"],
    emoji: "💡"
},
{
    term: "Spiritual Maturity",
    definition: "Growth toward Christlike character and biblical understanding.",
    category: "Spiritual Life",
    references: ["Ephesians 4:13", "Colossians 1:28", "Hebrews 5:14"],
    emoji: "🌳"
},
{
    term: "Sovereign Love",
    definition: "God's electing, unconditional love for his people.",
    category: "Theology",
    references: ["Deuteronomy 7:7-8", "1 John 4:19", "Romans 5:8"],
    emoji: "❤️"
},
{
    term: "Sacrificial Giving",
    definition: "Generosity that costs the giver, following Christ's example.",
    category: "Stewardship",
    references: ["2 Corinthians 8:2-3", "Mark 12:41-44", "Philippians 4:18"],
    emoji: "💰"
},
{
    term: "Spiritual Fruitfulness",
    definition: "Evidence of the Holy Spirit's work in a believer's life.",
    category: "Spiritual Life",
    references: ["John 15:8", "Galatians 5:22-23", "Colossians 1:10"],
    emoji: "🍎"
},
{
    term: "Sovereign Mercy",
    definition: "God's compassion shown according to his will.",
    category: "Theology",
    references: ["Romans 9:15-16", "Exodus 33:19", "1 Peter 2:10"],
    emoji: "🕊️"
},
{
    term: "Saving Work of Christ",
    definition: "Jesus' atoning death and resurrection that accomplishes redemption.",
    category: "Theology",
    references: ["John 19:30", "Hebrews 1:3", "Romans 5:10"],
    emoji: "✝️"
},
{
    term: "Spiritual Authority",
    definition: "God-given leadership exercised under Christ's lordship.",
    category: "Ministry",
    references: ["Matthew 28:18-20", "Hebrews 13:17", "1 Peter 5:2-3"],
    emoji: "⚖️"
},
{
    term: "Sovereign Reign",
    definition: "God's eternal kingship over all creation.",
    category: "Theology",
    references: ["Psalm 93:1", "1 Corinthians 15:25", "Revelation 11:15"],
    emoji: "👑"
},
{
    term: "Sanctifying Grace",
    definition: "The Holy Spirit's work of making believers holy.",
    category: "Theology",
    references: ["2 Thessalonians 2:13", "1 Peter 1:2", "1 Corinthians 6:11"],
    emoji: "✨"
},
{
    term: "Spiritual Blessings",
    definition: "Heavenly benefits granted to believers in Christ.",
    category: "Theology",
    references: ["Ephesians 1:3", "Romans 8:32", "2 Peter 1:3-4"],
    emoji: "🎁"
},
{
    term: "Sovereign Judge",
    definition: "God as the ultimate arbiter of justice.",
    category: "Theology",
    references: ["Genesis 18:25", "2 Timothy 4:8", "Revelation 20:12"],
    emoji: "⚖️"
},
{
    term: "Saving Grace",
    definition: "God's unmerited favor that brings salvation.",
    category: "Theology",
    references: ["Titus 2:11", "Ephesians 2:8", "Romans 3:24"],
    emoji: "💝"
},
{
    term: "Spiritual Hunger",
    definition: "Deep desire for God and spiritual growth.",
    category: "Spiritual Life",
    references: ["Matthew 5:6", "Psalm 42:1", "1 Peter 2:2"],
    emoji: "🍽️"
},
{
    term: "Sovereign Plan",
    definition: "God's eternal purpose that governs history.",
    category: "Theology",
    references: ["Isaiah 46:10", "Acts 2:23", "Ephesians 1:11"],
    emoji: "🗺️"
},
{
    term: "Sanctification Process",
    definition: "The ongoing work of becoming holy in practice.",
    category: "Spiritual Life",
    references: ["1 Thessalonians 4:3", "2 Corinthians 3:18", "Philippians 1:6"],
    emoji: "🔄"
},
{
    term: "Spiritual Warfare",
    definition: "Battle against spiritual forces of evil.",
    category: "Spiritual Life",
    references: ["Ephesians 6:10-18", "2 Corinthians 10:3-5", "1 Peter 5:8-9"],
    emoji: "🛡️"
},
{
    term: "Sovereign Goodness",
    definition: "God's perfect benevolence in all his works.",
    category: "Theology",
    references: ["Psalm 145:9", "Romans 8:28", "James 1:17"],
    emoji: "🌟"
},
{
    term: "Saving Work",
    definition: "Christ's atoning sacrifice for sin.",
    category: "Theology",
    references: ["John 19:30", "Hebrews 1:3", "Romans 5:10"],
    emoji: "✝️"
},
{
    term: "Spiritual Discernment",
    definition: "Ability to distinguish spiritual truth from error.",
    category: "Spiritual Life",
    references: ["1 Corinthians 2:14-15", "Hebrews 5:14", "1 John 4:1"],
    emoji: "🔍"
},
{
    term: "Sovereign Power",
    definition: "God's unlimited ability to accomplish his will.",
    category: "Theology",
    references: ["Jeremiah 32:17", "Ephesians 1:19-20", "Matthew 28:18"],
    emoji: "💪"
},
{
    term: "Sacramental Life",
    definition: "Living in light of baptism and communion's spiritual realities.",
    category: "Spiritual Life",
    references: ["Romans 6:3-4", "1 Corinthians 11:26", "Galatians 2:20"],
    emoji: "💒"
},
{
    term: "Spiritual Formation",
    definition: "Process of being shaped into Christ's image.",
    category: "Spiritual Life",
    references: ["Romans 8:29", "2 Corinthians 3:18", "Colossians 3:10"],
    emoji: "🔄"
},
{
    term: "Sovereign Wisdom",
    definition: "God's perfect knowledge directing all things.",
    category: "Theology",
    references: ["Romans 11:33", "Isaiah 55:8-9", "1 Corinthians 1:25"],
    emoji: "🧠"
},
{
    term: "Saving Righteousness",
    definition: "Christ's righteousness credited to believers.",
    category: "Theology",
    references: ["Romans 3:21-22", "2 Corinthians 5:21", "Philippians 3:9"],
    emoji: "⚖️"
},
{
    term: "Spiritual Renewal",
    definition: "Revitalization by the Holy Spirit.",
    category: "Spiritual Life",
    references: ["Titus 3:5", "Romans 12:2", "2 Corinthians 4:16"],
    emoji: "🔄"
},
{
    term: "Sovereign Election",
    definition: "God's gracious choice of sinners for salvation.",
    category: "Theology",
    references: ["Ephesians 1:4-5", "Romans 8:29-30", "2 Thessalonians 2:13"],
    emoji: "✅"
},
{
    term: "Sacrificial Living",
    definition: "Daily dying to self and living for Christ.",
    category: "Spiritual Life",
    references: ["Romans 12:1", "Galatians 2:20", "Luke 9:23"],
    emoji: "💝"
},
{
    term: "Spiritual Awakening",
    definition: "Period of unusual spiritual interest and conversion.",
    category: "Spiritual Life",
    references: ["Acts 2:41", "Habakkuk 3:2", "Psalm 85:6"],
    emoji: "🔥"
},
{
    term: "Sovereign Providence",
    definition: "God's control and involvement in creation.",
    category: "Theology",
    references: ["Matthew 10:29-30", "Acts 17:28", "Romans 8:28"],
    emoji: "🌍"
},
{
    term: "Righteousness",
    definition: "The state of moral perfection required by God's law, fulfilled in Christ and imputed to believers.",
    category: "Theology",
    references: ["Romans 3:21-22", "2 Corinthians 5:21", "Philippians 3:9"],
    emoji: "⚖️"
},
{
    term: "Reconciliation",
    definition: "The restoration of relationship between God and humanity through Christ's atoning work.",
    category: "Theology",
    references: ["2 Corinthians 5:18-19", "Romans 5:10-11", "Colossians 1:20"],
    emoji: "🤝"
},
{
    term: "Repentance",
    definition: "A change of mind and heart that involves turning from sin and turning to God in faith.",
    category: "Spiritual Life",
    references: ["Acts 3:19", "2 Corinthians 7:10", "Luke 13:3"],
    emoji: "🔄"
},
{
    term: "Regeneration",
    definition: "The supernatural work of the Holy Spirit that imparts new spiritual life to believers.",
    category: "Theology",
    references: ["Titus 3:5", "John 3:3", "2 Corinthians 5:17"],
    emoji: "🔄"
},
{
    term: "Revelation",
    definition: "God's self-disclosure to humanity through creation, Scripture, and ultimately Jesus Christ.",
    category: "Theology",
    references: ["Hebrews 1:1-2", "2 Timothy 3:16", "John 1:18"],
    emoji: "📖"
},
{
    term: "Rapture",
    definition: "The future event when living believers will be caught up to meet Christ in the air.",
    category: "Eschatology",
    references: ["1 Thessalonians 4:16-17", "1 Corinthians 15:51-52"],
    emoji: "☁️"
},
{
    term: "Rebirth",
    definition: "The spiritual new birth that occurs when a person trusts in Christ for salvation.",
    category: "Theology",
    references: ["John 3:3", "1 Peter 1:3", "James 1:18"],
    emoji: "👶"
},
{
    term: "Right Hand of God",
    definition: "The position of honor, authority, and power that Christ occupies after his ascension.",
    category: "Theology",
    references: ["Hebrews 1:3", "Romans 8:34", "Ephesians 1:20"],
    emoji: "🖐️"
},
{
    term: "Rock",
    definition: "A metaphor for God's strength, stability, and reliability as our foundation.",
    category: "Biblical Imagery",
    references: ["Psalm 18:2", "1 Corinthians 10:4", "Matthew 7:24-25"],
    emoji: "🪨"
},
{
    term: "Refuge",
    definition: "God as a safe shelter and protection for those who trust in him.",
    category: "Biblical Imagery",
    references: ["Psalm 46:1", "Psalm 91:2", "Proverbs 14:26"],
    emoji: "🏰"
},
{
    term: "Rest",
    definition: "Spiritual peace and cessation from self-effort, found in Christ's finished work.",
    category: "Spiritual Life",
    references: ["Matthew 11:28-30", "Hebrews 4:9-10", "Psalm 62:1"],
    emoji: "😴"
},
{
    term: "Reward",
    definition: "Heavenly compensation for faithful service and perseverance in the Christian life.",
    category: "Eschatology",
    references: ["Matthew 5:12", "1 Corinthians 3:14", "Revelation 22:12"],
    emoji: "🏆"
},
{
    term: "Ransom",
    definition: "The price Christ paid to free sinners from bondage to sin and death.",
    category: "Theology",
    references: ["Mark 10:45", "1 Timothy 2:6", "Matthew 20:28"],
    emoji: "💰"
},
{
    term: "Reign",
    definition: "Christ's sovereign rule over creation and believers' future reign with him.",
    category: "Theology",
    references: ["1 Corinthians 15:25", "Revelation 20:6", "2 Timothy 2:12"],
    emoji: "👑"
},
{
    term: "Remnant",
    definition: "The faithful minority God preserves for himself throughout biblical history.",
    category: "Biblical Themes",
    references: ["Romans 11:5", "Isaiah 10:20-21", "Micah 2:12"],
    emoji: "👥"
},
{
    term: "Reproach",
    definition: "Shame or disgrace borne for Christ's sake, which believers are called to endure.",
    category: "Spiritual Life",
    references: ["Hebrews 13:13", "1 Peter 4:14", "Psalm 69:7"],
    emoji: "🎯"
},
{
    term: "Restoration",
    definition: "God's work of renewing and returning what was lost or broken to its intended state.",
    category: "Theology",
    references: ["Acts 3:21", "Joel 2:25", "1 Peter 5:10"],
    emoji: "🔄"
},
{
    term: "Revival",
    definition: "A spiritual awakening and renewed interest in God among his people.",
    category: "Spiritual Life",
    references: ["Psalm 85:6", "Habakkuk 3:2", "2 Chronicles 7:14"],
    emoji: "🔥"
},
{
    term: "Righteous Judge",
    definition: "God's role as the perfectly just and fair arbiter of all humanity.",
    category: "Theology",
    references: ["2 Timothy 4:8", "Psalm 7:11", "Genesis 18:25"],
    emoji: "⚖️"
},
{
    term: "Robe of Righteousness",
    definition: "Metaphor for the perfect righteousness of Christ credited to believers.",
    category: "Biblical Imagery",
    references: ["Isaiah 61:10", "Revelation 19:8", "Zechariah 3:4"],
    emoji: "👘"
},
{
    term: "Rock of Ages",
    definition: "Descriptive title for God as the eternal, unchanging source of salvation.",
    category: "Theology",
    references: ["Isaiah 26:4", "Deuteronomy 32:4", "Psalm 18:2"],
    emoji: "🪨"
},
{
    term: "Royal Priesthood",
    definition: "The privileged position of all believers as both kings and priests before God.",
    category: "Theology",
    references: ["1 Peter 2:9", "Revelation 1:6", "Exodus 19:6"],
    emoji: "👑"
},
{
    term: "Ruth",
    definition: "A Moabite woman who demonstrated remarkable loyalty and became an ancestor of David and Jesus.",
    category: "Biblical Figures",
    references: ["Ruth 1:16-17", "Matthew 1:5"],
    emoji: "👩"
},
{
    term: "Rehoboam",
    definition: "Solomon's son whose foolish leadership caused the kingdom of Israel to divide.",
    category: "Biblical Figures",
    references: ["1 Kings 12:1-24", "2 Chronicles 10:1-19"],
    emoji: "👑"
},
{
    term: "Rachel",
    definition: "Jacob's beloved wife and mother of Joseph and Benjamin.",
    category: "Biblical Figures",
    references: ["Genesis 29:18-30", "Jeremiah 31:15"],
    emoji: "💕"
},
{
    term: "Rebekah",
    definition: "Isaac's wife who played a crucial role in the transmission of the covenant blessing.",
    category: "Biblical Figures",
    references: ["Genesis 24:1-67", "Genesis 27:5-17"],
    emoji: "💍"
},
{
    term: "Rome",
    definition: "The capital of the Roman Empire where Paul was imprisoned and wrote several epistles.",
    category: "Biblical Places",
    references: ["Acts 28:16", "Romans 1:7", "2 Timothy 1:17"],
    emoji: "🏛️"
},
{
    term: "Red Sea",
    definition: "The body of water God miraculously parted for Israel's escape from Egypt.",
    category: "Biblical Places",
    references: ["Exodus 14:21-31", "Hebrews 11:29"],
    emoji: "🌊"
},
{
    term: "River of Life",
    definition: "The flowing water from God's throne that brings healing and restoration.",
    category: "Biblical Imagery",
    references: ["Revelation 22:1-2", "Ezekiel 47:1-12", "Psalm 46:4"],
    emoji: "🌊"
},
{
    term: "Rainbow",
    definition: "God's sign of his covenant promise to never again flood the entire earth.",
    category: "Biblical Imagery",
    references: ["Genesis 9:13-16", "Revelation 4:3", "Ezekiel 1:28"],
    emoji: "🌈"
},
{
    term: "Ruthlessness",
    definition: "The quality of being without pity or compassion, condemned in Scripture.",
    category: "Sin",
    references: ["Proverbs 12:10", "James 2:13", "Matthew 18:33-35"],
    emoji: "💔"
},
{
    term: "Reputation",
    definition: "One's character as perceived by others, which should reflect Christ.",
    category: "Spiritual Life",
    references: ["Proverbs 22:1", "1 Timothy 3:7", "Acts 6:3"],
    emoji: "📝"
},
{
    term: "Reverence",
    definition: "Awe and respect toward God, recognizing his holiness and majesty.",
    category: "Worship",
    references: ["Hebrews 12:28", "Psalm 89:7", "Psalm 111:9"],
    emoji: "🙇"
},
{
    term: "Riches",
    definition: "Material wealth, which is temporary and should be used for eternal purposes.",
    category: "Stewardship",
    references: ["Matthew 6:19-21", "1 Timothy 6:17-19", "Proverbs 23:5"],
    emoji: "💰"
},
{
    term: "Rulers",
    definition: "Civil authorities established by God and to be respected by Christians.",
    category: "Ethics",
    references: ["Romans 13:1-7", "1 Peter 2:13-17", "Titus 3:1"],
    emoji: "⚖️"
},
{
    term: "Running the Race",
    definition: "Metaphor for the Christian life as a disciplined pursuit of spiritual goals.",
    category: "Spiritual Life",
    references: ["Hebrews 12:1", "1 Corinthians 9:24", "Philippians 3:14"],
    emoji: "🏃"
},
{
    term: "Root of Jesse",
    definition: "Messianic title for Jesus as the descendant of David who would rule the nations.",
    category: "Theology",
    references: ["Isaiah 11:10", "Romans 15:12", "Revelation 5:5"],
    emoji: "🌳"
},
{
    term: "Refiner's Fire",
    definition: "Metaphor for God's purifying work that burns away impurities from believers' lives.",
    category: "Spiritual Life",
    references: ["Malachi 3:2-3", "1 Peter 1:7", "Zechariah 13:9"],
    emoji: "🔥"
},
{
    term: "Redeemer",
    definition: "Title for God as the one who buys back and delivers his people from bondage.",
    category: "Theology",
    references: ["Job 19:25", "Isaiah 47:4", "Psalm 19:14"],
    emoji: "🛡️"
},
{
    term: "Resurrection Life",
    definition: "The new quality of existence believers experience through union with the risen Christ.",
    category: "Spiritual Life",
    references: ["Romans 6:4", "Galatians 2:20", "Colossians 3:1"],
    emoji: "🌱"
},
{
    term: "Righteous Anger",
    definition: "Appropriate indignation against sin and injustice that reflects God's character.",
    category: "Virtues",
    references: ["Ephesians 4:26", "Mark 3:5", "John 2:13-17"],
    emoji: "😠"
},
{
    term: "Ruthless",
    definition: "Characterized by harshness and lack of mercy, contrary to God's nature.",
    category: "Sin",
    references: ["Proverbs 11:17", "James 2:13", "Matthew 18:23-35"],
    emoji: "⚔️"
},
{
    term: "Rejoicing",
    definition: "Expressing joy in the Lord regardless of circumstances.",
    category: "Spiritual Life",
    references: ["Philippians 4:4", "1 Thessalonians 5:16", "Psalm 5:11"],
    emoji: "🎉"
},
{
    term: "Reliance",
    definition: "Dependent trust on God rather than on human strength or wisdom.",
    category: "Faith",
    references: ["2 Corinthians 1:9", "Proverbs 3:5-6", "Jeremiah 17:5-8"],
    emoji: "🤝"
},
{
    term: "Renewal",
    definition: "The ongoing work of the Holy Spirit in revitalizing believers and creation.",
    category: "Spiritual Life",
    references: ["Titus 3:5", "Romans 12:2", "2 Corinthians 4:16"],
    emoji: "🔄"
},
{
    term: "Reputation of God",
    definition: "God's character and fame as known among the nations.",
    category: "Theology",
    references: ["Ezekiel 36:22-23", "Psalm 102:15", "Malachi 1:11"],
    emoji: "🌟"
},
{
    term: "Respect",
    definition: "Showing honor to others as image-bearers of God.",
    category: "Virtues",
    references: ["1 Peter 2:17", "Romans 12:10", "Philippians 2:3"],
    emoji: "🙏"
},
{
    term: "Responsibility",
    definition: "The obligation to faithfully steward what God has entrusted to us.",
    category: "Stewardship",
    references: ["1 Corinthians 4:2", "Luke 12:48", "Galatians 6:5"],
    emoji: "💼"
},
{
    term: "Restitution",
    definition: "Making amends for wrongs committed, as evidence of genuine repentance.",
    category: "Ethics",
    references: ["Luke 19:8", "Exodus 22:1-15", "Numbers 5:6-7"],
    emoji: "⚖️"
},
{
    term: "Restraint",
    definition: "Self-control and moderation in behavior, a fruit of the Spirit.",
    category: "Virtues",
    references: ["Galatians 5:23", "Proverbs 25:28", "1 Corinthians 9:25"],
    emoji: "🛑"
},
{
    term: "Resurrection Body",
    definition: "The glorified, imperishable body believers will receive at Christ's return.",
    category: "Eschatology",
    references: ["1 Corinthians 15:42-44", "Philippians 3:21", "1 John 3:2"],
    emoji: "💫"
},
{
    term: "Retribution",
    definition: "God's just punishment of evil, which belongs to him alone.",
    category: "Theology",
    references: ["Romans 12:19", "2 Thessalonians 1:6", "Revelation 6:10"],
    emoji: "⚡"
},
{
    term: "Revelation of God",
    definition: "God's self-disclosure through creation, Scripture, and Christ.",
    category: "Theology",
    references: ["Romans 1:20", "Hebrews 1:1-2", "John 1:18"],
    emoji: "📖"
},
{
    term: "Reverent Fear",
    definition: "Awe and respect for God that is the beginning of wisdom.",
    category: "Spiritual Life",
    references: ["Proverbs 9:10", "Hebrews 12:28", "Psalm 33:8"],
    emoji: "🙇"
},
{
    term: "Reviling",
    definition: "Verbal abuse and slander, which Christians should not return.",
    category: "Sin",
    references: ["1 Peter 2:23", "1 Corinthians 4:12", "Matthew 5:11"],
    emoji: "🗣️"
},
{
    term: "Riches in Christ",
    definition: "The spiritual wealth and blessings available to believers through union with Jesus.",
    category: "Theology",
    references: ["Ephesians 1:3", "Ephesians 3:8", "Colossians 2:2-3"],
    emoji: "💎"
},
{
    term: "Righteous Requirements",
    definition: "The demands of God's law that Christ fulfilled on behalf of believers.",
    category: "Theology",
    references: ["Romans 8:4", "Matthew 5:17", "Romans 10:4"],
    emoji: "📜"
},
{
    term: "Rising with Christ",
    definition: "The believer's spiritual participation in Christ's resurrection power.",
    category: "Spiritual Life",
    references: ["Colossians 3:1", "Ephesians 2:6", "Romans 6:4"],
    emoji: "🌅"
},
{
    term: "Ritual",
    definition: "Formal religious ceremonies that must reflect genuine heart worship.",
    category: "Worship",
    references: ["Matthew 15:8-9", "John 4:23-24", "Isaiah 1:11-17"],
    emoji: "🎭"
},
{
    term: "Rod of Correction",
    definition: "Metaphor for discipline that leads to wisdom and righteousness.",
    category: "Biblical Imagery",
    references: ["Proverbs 22:15", "Proverbs 13:24", "Hebrews 12:6"],
    emoji: "📏"
},
{
    term: "Role Models",
    definition: "Mature believers whose Christlike example others should follow.",
    category: "Spiritual Life",
    references: ["1 Corinthians 11:1", "Philippians 3:17", "1 Timothy 4:12"],
    emoji: "👥"
},
{
    term: "Rooted in Love",
    definition: "Being firmly established in God's love as the foundation of Christian life.",
    category: "Spiritual Life",
    references: ["Ephesians 3:17", "Colossians 2:7", "Romans 8:39"],
    emoji: "🌳"
},
{
    term: "Royal Law",
    definition: "The command to love one's neighbor as oneself.",
    category: "Ethics",
    references: ["James 2:8", "Matthew 22:39", "Leviticus 19:18"],
    emoji: "👑"
},
{
    term: "Rudiments",
    definition: "Basic principles or elementary teachings, both of the world and of Christ.",
    category: "Theology",
    references: ["Colossians 2:8", "Hebrews 5:12", "Galatians 4:3"],
    emoji: "🔰"
},
{
    term: "Rule of Faith",
    definition: "The core Christian beliefs that guided the early church's interpretation of Scripture.",
    category: "Theology",
    references: ["2 Timothy 1:13", "Titus 1:9", "Jude 1:3"],
    emoji: "📜"
},
{
    term: "Rulers of Darkness",
    definition: "Demonic powers that oppose God and his people.",
    category: "Spiritual Life",
    references: ["Ephesians 6:12", "Colossians 1:13", "Luke 22:53"],
    emoji: "👿"
},
{
    term: "Running from God",
    definition: "The futile attempt to escape God's presence and calling, as Jonah did.",
    category: "Spiritual Life",
    references: ["Jonah 1:3", "Psalm 139:7-10", "Jeremiah 23:24"],
    emoji: "🏃"
},
{
    term: "Ruth's Vow",
    definition: "Ruth's famous commitment to Naomi and Naomi's God.",
    category: "Biblical Events",
    references: ["Ruth 1:16-17"],
    emoji: "🤝"
},
{
    term: "Rachel's Tomb",
    definition: "The burial place of Jacob's wife Rachel, remembered with sorrow.",
    category: "Biblical Places",
    references: ["Genesis 35:19-20", "Jeremiah 31:15"],
    emoji: "⚰️"
},
{
    term: "Ram in the Thicket",
    definition: "The substitute God provided for Isaac during Abraham's test of faith.",
    category: "Biblical Events",
    references: ["Genesis 22:13", "Genesis 22:8"],
    emoji: "🐑"
},
{
    term: "Rapture of the Church",
    definition: "The catching up of believers to meet Christ in the air at his return.",
    category: "Eschatology",
    references: ["1 Thessalonians 4:17", "1 Corinthians 15:51-52"],
    emoji: "☁️"
},
{
    term: "Rechabites",
    definition: "A faithful family who obeyed their ancestor's commands as an example to Israel.",
    category: "Biblical Groups",
    references: ["Jeremiah 35:1-19"],
    emoji: "👨‍👩‍👧‍👦"
},
{
    term: "Reconciliation Ministry",
    definition: "The Christian calling to restore broken relationships between people and groups.",
    category: "Ministry",
    references: ["2 Corinthians 5:18", "Matthew 5:23-24", "Ephesians 2:14-16"],
    emoji: "🤝"
},
{
    term: "Red Heifer",
    definition: "The sacrifice whose ashes were used for purification from contact with death.",
    category: "Biblical Practices",
    references: ["Numbers 19:1-10", "Hebrews 9:13-14"],
    emoji: "🐄"
},
{
    term: "Reed Sea",
    definition: "Alternative translation for Red Sea, possibly referring to a marshy area.",
    category: "Biblical Places",
    references: ["Exodus 13:18", "Isaiah 51:10"],
    emoji: "🌾"
},
{
    term: "Refuge Cities",
    definition: "Six cities designated as places of protection for unintentional killers.",
    category: "Biblical Places",
    references: ["Numbers 35:9-15", "Joshua 20:1-9"],
    emoji: "🏙️"
},
{
    term: "Regeneration by the Spirit",
    definition: "The new birth accomplished by the Holy Spirit's power.",
    category: "Theology",
    references: ["John 3:5-8", "Titus 3:5", "1 Peter 1:3"],
    emoji: "🕊️"
},
{
    term: "Rehoboth",
    definition: "The well Isaac named 'Room' after conflict over previous wells ceased.",
    category: "Biblical Places",
    references: ["Genesis 26:22"],
    emoji: "💧"
},
{
    term: "Rejoice Always",
    definition: "Paul's command to maintain joy in all circumstances through Christ.",
    category: "Spiritual Life",
    references: ["Philippians 4:4", "1 Thessalonians 5:16", "Habakkuk 3:17-18"],
    emoji: "😊"
},
{
    term: "Remission of Sins",
    definition: "The forgiveness and pardon of sins through Christ's atoning work.",
    category: "Theology",
    references: ["Matthew 26:28", "Acts 2:38", "Hebrews 9:22"],
    emoji: "📜"
},
{
    term: "Renewing the Mind",
    definition: "The transformation of thought patterns through God's Word and Spirit.",
    category: "Spiritual Life",
    references: ["Romans 12:2", "Ephesians 4:23", "Colossians 3:10"],
    emoji: "🧠"
},
{
    term: "Repent and Believe",
    definition: "The twofold response required for salvation in the gospel.",
    category: "Theology",
    references: ["Mark 1:15", "Acts 20:21", "Luke 24:47"],
    emoji: "🙏"
},
{
    term: "Rest in God",
    definition: "Ceasing from self-effort and trusting in God's provision and timing.",
    category: "Spiritual Life",
    references: ["Psalm 37:7", "Isaiah 30:15", "Matthew 11:28-30"],
    emoji: "😌"
},
{
    term: "Resurrection Morning",
    definition: "The first Easter when Jesus rose from the dead, changing history forever.",
    category: "Biblical Events",
    references: ["Matthew 28:1-10", "Mark 16:1-8", "John 20:1-18"],
    emoji: "🌅"
},
{
    term: "Return of Christ",
    definition: "The second coming of Jesus in glory to judge and reign.",
    category: "Eschatology",
    references: ["Acts 1:11", "Revelation 1:7", "Matthew 24:30"],
    emoji: "👑"
},
{
    term: "Revelation of Jesus Christ",
    definition: "The final book of the Bible that unveils Christ's glory and end-time events.",
    category: "Biblical Books",
    references: ["Revelation 1:1", "Revelation 22:20"],
    emoji: "📖"
},
{
    term: "Reverent Submission",
    definition: "Jesus' attitude in prayer, especially in Gethsemane.",
    category: "Spiritual Life",
    references: ["Hebrews 5:7", "Matthew 26:39", "Philippians 2:8"],
    emoji: "🙇"
},
{
    term: "Revival Fire",
    definition: "Metaphor for spiritual awakening that spreads rapidly among God's people.",
    category: "Spiritual Life",
    references: ["Luke 3:16", "Acts 2:3", "Hebrews 12:29"],
    emoji: "🔥"
},
{
    term: "Rich Young Ruler",
    definition: "The wealthy man who asked Jesus about eternal life but went away sorrowful.",
    category: "Biblical Figures",
    references: ["Matthew 19:16-22", "Mark 10:17-22", "Luke 18:18-23"],
    emoji: "👨‍💼"
},
{
    term: "Righteous Branch",
    definition: "Messianic title prophesying a descendant of David who would reign justly.",
    category: "Theology",
    references: ["Jeremiah 23:5", "Jeremiah 33:15", "Zechariah 3:8"],
    emoji: "🌿"
},
{
    term: "Rivers of Living Water",
    definition: "Jesus' metaphor for the Holy Spirit's work flowing through believers.",
    category: "Biblical Imagery",
    references: ["John 7:38-39", "Isaiah 58:11", "Ezekiel 47:1-12"],
    emoji: "💧"
},
{
    term: "Rock of Offense",
    definition: "Christ as a stumbling block to those who reject him in unbelief.",
    category: "Theology",
    references: ["Romans 9:33", "1 Peter 2:8", "Isaiah 8:14"],
    emoji: "🪨"
},
{
    term: "Role of Women",
    definition: "The biblical teaching about women's value, dignity, and service in God's kingdom.",
    category: "Ethics",
    references: ["Galatians 3:28", "Proverbs 31:10-31", "1 Timothy 2:9-15"],
    emoji: "👩"
},
{
    term: "Roman Citizenship",
    definition: "Paul's legal status that protected him and advanced his missionary work.",
    category: "Biblical Terms",
    references: ["Acts 16:37-38", "Acts 22:25-29", "Acts 25:10-12"],
    emoji: "📜"
},
{
    term: "Root of Bitterness",
    definition: "Deep-seated resentment that defiles many and hinders spiritual growth.",
    category: "Spiritual Life",
    references: ["Hebrews 12:15", "Deuteronomy 29:18", "Ephesians 4:31"],
    emoji: "🌱"
},
{
    term: "Royal Diadem",
    definition: "A crown, metaphor for God's people as his beautiful possession.",
    category: "Biblical Imagery",
    references: ["Isaiah 62:3", "Zechariah 9:16", "1 Peter 2:9"],
    emoji: "👑"
},
{
    term: "Ruth the Moabitess",
    definition: "The foreign woman who became part of Israel and Jesus' lineage through faith.",
    category: "Biblical Figures",
    references: ["Ruth 1:4", "Ruth 4:13-22", "Matthew 1:5"],
    emoji: "👩"
},
{
    term: "Ruth's Redemption",
    definition: "Boaz's act of redeeming Ruth and her inheritance according to levirate law.",
    category: "Biblical Events",
    references: ["Ruth 4:1-12", "Deuteronomy 25:5-10"],
    emoji: "💍"
},
{
    term: "Quietness",
    definition: "A spirit of calm trust and stillness before God, allowing space to hear his voice.",
    category: "Spiritual Life",
    references: ["Isaiah 30:15", "1 Thessalonians 4:11", "1 Timothy 2:2"],
    emoji: "🤫"
},
{
    term: "Quenching the Spirit",
    definition: "Suppressing or hindering the Holy Spirit's work through disobedience or unbelief.",
    category: "Spiritual Life",
    references: ["1 Thessalonians 5:19", "Ephesians 4:30", "Acts 7:51"],
    emoji: "💧"
},
{
    term: "Quickening",
    definition: "The Holy Spirit's work of making spiritually dead people alive in Christ.",
    category: "Theology",
    references: ["Ephesians 2:5", "1 Corinthians 15:45", "Romans 8:11"],
    emoji: "⚡"
},
{
    term: "Quiver",
    definition: "Metaphor for children as blessings from God, like arrows in a warrior's quiver.",
    category: "Biblical Imagery",
    references: ["Psalm 127:3-5", "Genesis 33:5", "Job 29:5"],
    emoji: "🏹"
},
{
    term: "Queen of Heaven",
    definition: "A pagan goddess worshiped by Israelites in Jeremiah's time, provoking God's judgment.",
    category: "Biblical Idolatry",
    references: ["Jeremiah 7:18", "Jeremiah 44:17-25"],
    emoji: "👑"
},
{
    term: "Queen of Sheba",
    definition: "A foreign ruler who visited Solomon to test his wisdom and praised Israel's God.",
    category: "Biblical Figures",
    references: ["1 Kings 10:1-13", "Matthew 12:42", "Luke 11:31"],
    emoji: "👑"
},
{
    term: "Queen Esther",
    definition: "Jewish queen of Persia who risked her life to save her people from destruction.",
    category: "Biblical Figures",
    references: ["Esther 2:17", "Esther 4:14", "Esther 7:3-4"],
    emoji: "👑"
},
{
    term: "Queen Vashti",
    definition: "Persian queen who refused the king's command and was deposed.",
    category: "Biblical Figures",
    references: ["Esther 1:9-12", "Esther 1:19"],
    emoji: "👑"
},
{
    term: "Quail",
    definition: "The birds God provided miraculously for Israel to eat in the wilderness.",
    category: "Biblical Miracles",
    references: ["Exodus 16:13", "Numbers 11:31-32", "Psalm 105:40"],
    emoji: "🐦"
},
{
    term: "Quartus",
    definition: "A Christian in Corinth who joined Paul in sending greetings to Rome.",
    category: "Biblical Figures",
    references: ["Romans 16:23"],
    emoji: "👋"
},
{
    term: "Quaternion",
    definition: "A group of four soldiers, such as those guarding Peter in prison.",
    category: "Biblical Terms",
    references: ["Acts 12:4"],
    emoji: "👮"
},
{
    term: "Questioning",
    definition: "The practice of seeking understanding and truth, which Jesus often encouraged.",
    category: "Spiritual Life",
    references: ["Matthew 7:7", "John 16:23", "James 1:5"],
    emoji: "❓"
},
{
    term: "Quick-tempered",
    definition: "Easily angered, a character trait warned against in Proverbs.",
    category: "Sin",
    references: ["Proverbs 14:17", "Proverbs 15:18", "Titus 1:7"],
    emoji: "💢"
},
{
    term: "Quiet Spirit",
    definition: "A gentle and peaceful inner disposition highly valued by God.",
    category: "Virtues",
    references: ["1 Peter 3:4", "Proverbs 17:1", "1 Thessalonians 4:11"],
    emoji: "🕊️"
},
{
    term: "Quiet Time",
    definition: "The spiritual discipline of regular personal devotion and prayer.",
    category: "Spiritual Disciplines",
    references: ["Mark 1:35", "Psalm 5:3", "Psalm 119:147"],
    emoji: "⏰"
},
{
    term: "Qualification",
    definition: "The standards for church leadership outlined in pastoral epistles.",
    category: "Ministry",
    references: ["1 Timothy 3:1-13", "Titus 1:5-9", "1 Peter 5:1-4"],
    emoji: "✅"
},
{
    term: "Quality",
    definition: "The excellence of character and work that reflects God's nature.",
    category: "Virtues",
    references: ["Colossians 3:23", "Philippians 1:10", "2 Peter 1:5-8"],
    emoji: "⭐"
},
{
    term: "Quarrel",
    definition: "A contentious dispute that believers are instructed to avoid.",
    category: "Sin",
    references: ["2 Timothy 2:24", "Proverbs 17:14", "Titus 3:9"],
    emoji: "⚔️"
},
{
    term: "Quarantine",
    definition: "Biblical practice of isolating those with infectious diseases for community health.",
    category: "Biblical Practices",
    references: ["Leviticus 13:4-5", "Leviticus 13:21", "Numbers 5:2-3"],
    emoji: "🚧"
},
{
    term: "Quarry",
    definition: "A pit where stone was dug for building, like Solomon's temple.",
    category: "Biblical Places",
    references: ["1 Kings 6:7", "1 Chronicles 22:2"],
    emoji: "⛏️"
},
{
    term: "Quarter",
    definition: "A section or district of a city, like the Jewish quarter in Jerusalem.",
    category: "Biblical Terms",
    references: ["2 Kings 22:14", "Nehemiah 11:9", "Acts 18:7"],
    emoji: "🏘️"
},
{
    term: "Quart",
    definition: "A unit of liquid measure used in biblical times.",
    category: "Biblical Terms",
    references: ["Revelation 6:6", "John 2:6"],
    emoji: "⚖️"
},
{
    term: "Quash",
    definition: "To suppress or reject, as in quenching the Spirit's work.",
    category: "Spiritual Life",
    references: ["1 Thessalonians 5:19", "Ephesians 4:30"],
    emoji: "🚫"
},
{
    term: "Quaver",
    definition: "To tremble or shake, as in fear before God's majesty.",
    category: "Worship",
    references: ["Isaiah 64:2", "Hebrews 12:21", "Psalm 99:1"],
    emoji: "🌋"
},
{
    term: "Queasy",
    definition: "Spiritual discomfort or conviction over sin.",
    category: "Spiritual Life",
    references: ["Acts 2:37", "2 Corinthians 7:10", "Psalm 38:4"],
    emoji: "😣"
},
{
    term: "Queen Mother",
    definition: "An influential position in ancient Judah, sometimes for good and sometimes for evil.",
    category: "Biblical Roles",
    references: ["1 Kings 15:13", "2 Kings 24:15", "Jeremiah 13:18"],
    emoji: "👑"
},
{
    term: "Quell",
    definition: "To suppress or calm, as the Spirit quells our fears.",
    category: "Spiritual Life",
    references: ["John 14:27", "Philippians 4:7", "2 Timothy 1:7"],
    emoji: "🌊"
},
{
    term: "Quenchless",
    definition: "Unable to be extinguished, like hell's fire or God's love.",
    category: "Theology",
    references: ["Mark 9:43", "Song of Solomon 8:7", "Romans 8:35-39"],
    emoji: "🔥"
},
{
    term: "Query",
    definition: "A question or inquiry, like those the disciples asked Jesus.",
    category: "Spiritual Life",
    references: ["Matthew 13:10", "Luke 11:1", "John 9:2"],
    emoji: "🤔"
},
{
    term: "Quest",
    definition: "A search or journey, like the spiritual quest for God and truth.",
    category: "Spiritual Life",
    references: ["Jeremiah 29:13", "Matthew 7:7", "Acts 17:27"],
    emoji: "🧭"
},
{
    term: "Questionable",
    definition: "Doubtful or disputable matters addressed in Romans 14.",
    category: "Ethics",
    references: ["Romans 14:1", "1 Corinthians 8:1-13", "1 Corinthians 10:23-33"],
    emoji: "❓"
},
{
    term: "Queue",
    definition: "A line or sequence, like the order in spiritual gifts or church ministry.",
    category: "Ministry",
    references: ["1 Corinthians 14:27", "1 Corinthians 14:40", "Romans 12:6-8"],
    emoji: "📋"
},
{
    term: "Quibble",
    definition: "A trivial objection or evasion, warned against in theological disputes.",
    category: "Sin",
    references: ["1 Timothy 6:4", "2 Timothy 2:14", "Titus 3:9"],
    emoji: "💬"
},
{
    term: "Quick",
    definition: "Living or alive, referring to both physical and spiritual life.",
    category: "Biblical Language",
    references: ["Hebrews 4:12", "1 Peter 4:5", "Acts 10:42"],
    emoji: "💓"
},
{
    term: "Quicksand",
    definition: "Metaphor for sinful habits or false teachings that trap people.",
    category: "Biblical Imagery",
    references: ["Psalm 69:14", "2 Timothy 2:26", "Hebrews 12:1"],
    emoji: "🏖️"
},
{
    term: "Quietism",
    definition: "A spiritual approach emphasizing passive surrender to God's will.",
    category: "Spiritual Life",
    references: ["Psalm 46:10", "Isaiah 30:15", "Romans 8:28"],
    emoji: "🤲"
},
{
    term: "Quill",
    definition: "A writing instrument used to record Scripture.",
    category: "Biblical Terms",
    references: ["2 Timothy 3:16", "2 Peter 1:21", "Jeremiah 36:18"],
    emoji: "✍️"
},
{
    term: "Quilt",
    definition: "Metaphor for the diverse church united in Christ.",
    category: "Biblical Imagery",
    references: ["Ephesians 2:14-16", "Galatians 3:28", "1 Corinthians 12:12-13"],
    emoji: "🧵"
},
{
    term: "Quintessence",
    definition: "The purest essence or perfect example, as Christ is of God's nature.",
    category: "Theology",
    references: ["Hebrews 1:3", "Colossians 1:15", "John 14:9"],
    emoji: "💎"
},
{
    term: "Quip",
    definition: "A clever remark, like some of Jesus' responses to critics.",
    category: "Biblical Language",
    references: ["Matthew 22:21", "Luke 20:25", "John 8:7"],
    emoji: "💡"
},
{
    term: "Quirk",
    definition: "An idiosyncrasy, reflecting God's creative diversity in humanity.",
    category: "Theology",
    references: ["Psalm 139:14", "1 Corinthians 12:4-6", "Romans 12:6"],
    emoji: "🎭"
},
{
    term: "Quit",
    definition: "To cease or give up, as in not quitting in doing good.",
    category: "Spiritual Life",
    references: ["Galatians 6:9", "2 Thessalonians 3:13", "Hebrews 12:1-3"],
    emoji: "🏃"
},
{
    term: "Quiver",
    definition: "To tremble or shake, as in reverent fear before God.",
    category: "Worship",
    references: ["Philippians 2:12", "Hebrews 12:28-29", "Psalm 2:11"],
    emoji: "🌋"
},
{
    term: "Quixotic",
    definition: "Idealistic in a way that seems impractical, like faith in God's impossible promises.",
    category: "Faith",
    references: ["Hebrews 11:1", "Matthew 19:26", "Luke 1:37"],
    emoji: "🌠"
},
{
    term: "Quiz",
    definition: "To question or examine, as God searches our hearts.",
    category: "Spiritual Life",
    references: ["Psalm 139:23-24", "Lamentations 3:40", "2 Corinthians 13:5"],
    emoji: "🔍"
},
{
    term: "Quorum",
    definition: "The minimum number required, as when two or three gather in Jesus' name.",
    category: "Ecclesiology",
    references: ["Matthew 18:20", "Matthew 18:16", "1 Corinthians 5:4"],
    emoji: "👥"
},
{
    term: "Quota",
    definition: "A share or portion, as in the collection for Jerusalem saints.",
    category: "Stewardship",
    references: ["1 Corinthians 16:2", "2 Corinthians 8:12-14", "Acts 11:29"],
    emoji: "📊"
},
{
    term: "Quote",
    definition: "To cite authority, as Jesus and apostles quoted Scripture.",
    category: "Biblical Practices",
    references: ["Matthew 4:4", "Acts 2:25-28", "Romans 3:10-18"],
    emoji: "📖"
},
{
    term: "Quotidian",
    definition: "Daily or everyday, referring to constant dependence on God.",
    category: "Spiritual Life",
    references: ["Matthew 6:11", "Luke 9:23", "1 Corinthians 15:31"],
    emoji: "📅"
},
{
    term: "Quotient",
    definition: "A degree or amount, as in measuring spiritual growth.",
    category: "Spiritual Life",
    references: ["2 Peter 3:18", "Ephesians 4:15", "Colossians 1:10"],
    emoji: "📈"
},
{
    term: "Prayer",
    definition: "Communication with God, involving adoration, confession, thanksgiving, and supplication.",
    category: "Spiritual Life",
    references: ["Philippians 4:6", "1 Thessalonians 5:17", "Matthew 6:9-13"],
    emoji: "🙏"
},
{
    term: "Prophecy",
    definition: "Speaking forth God's message, whether forthtelling his truth or foretelling future events.",
    category: "Spiritual Gifts",
    references: ["1 Corinthians 14:1", "2 Peter 1:20-21", "Revelation 19:10"],
    emoji: "📢"
},
{
    term: "Providence",
    definition: "God's continuous activity in his creation, governing all things according to his will.",
    category: "Theology",
    references: ["Romans 8:28", "Ephesians 1:11", "Matthew 10:29-31"],
    emoji: "🌍"
},
{
    term: "Peace",
    definition: "The state of wholeness and well-being that comes from being reconciled to God through Christ.",
    category: "Spiritual Life",
    references: ["Philippians 4:7", "John 14:27", "Romans 5:1"],
    emoji: "🕊️"
},
{
    term: "Patience",
    definition: "Enduring hardship and waiting on God's timing without complaint or anger.",
    category: "Virtues",
    references: ["Romans 12:12", "James 5:7-8", "Galatians 5:22"],
    emoji: "⏳"
},
{
    term: "Praise",
    definition: "The act of expressing admiration and gratitude to God for who he is and what he has done.",
    category: "Worship",
    references: ["Psalm 150:6", "Hebrews 13:15", "Psalm 100:4"],
    emoji: "🎉"
},
{
    term: "Purification",
    definition: "The process of being made clean from sin's defilement through Christ's sacrifice.",
    category: "Theology",
    references: ["1 John 1:7", "Hebrews 9:14", "Titus 2:14"],
    emoji: "✨"
},
{
    term: "Perseverance",
    definition: "Steadfast continuance in faith and obedience despite obstacles and suffering.",
    category: "Spiritual Life",
    references: ["Hebrews 12:1", "James 1:12", "Matthew 24:13"],
    emoji: "🏃"
},
{
    term: "Propitiation",
    definition: "Christ's sacrificial death that turns away God's wrath and satisfies his justice.",
    category: "Theology",
    references: ["1 John 2:2", "Romans 3:25", "1 John 4:10"],
    emoji: "✝️"
},
{
    term: "Paraclete",
    definition: "Greek term for the Holy Spirit as Comforter, Helper, and Advocate.",
    category: "Theology",
    references: ["John 14:16", "John 14:26", "John 15:26"],
    emoji: "🕊️"
},
{
    term: "Paradise",
    definition: "The place of blessedness where believers go after death, to be with Christ.",
    category: "Eschatology",
    references: ["Luke 23:43", "2 Corinthians 12:4", "Revelation 2:7"],
    emoji: "🌴"
},
{
    term: "Passover",
    definition: "The Jewish feast commemorating deliverance from Egypt, fulfilled in Christ's sacrifice.",
    category: "Biblical Events",
    references: ["Exodus 12:1-28", "1 Corinthians 5:7", "John 1:29"],
    emoji: "🐑"
},
{
    term: "Pentecost",
    definition: "The day the Holy Spirit was poured out on the church, empowering believers for witness.",
    category: "Biblical Events",
    references: ["Acts 2:1-4", "Acts 2:38-39", "Joel 2:28-29"],
    emoji: "🔥"
},
{
    term: "Perfection",
    definition: "The state of completeness and maturity toward which believers grow in Christ.",
    category: "Spiritual Life",
    references: ["Matthew 5:48", "Colossians 1:28", "Hebrews 6:1"],
    emoji: "🎯"
},
{
    term: "Persecution",
    definition: "Suffering inflicted on believers because of their faith in Christ.",
    category: "Spiritual Life",
    references: ["Matthew 5:10-12", "2 Timothy 3:12", "John 15:20"],
    emoji: "🎯"
},
{
    term: "Pharisees",
    definition: "A Jewish religious sect known for strict adherence to law and tradition, often opposed to Jesus.",
    category: "Biblical Groups",
    references: ["Matthew 23:1-36", "Luke 18:9-14", "Acts 23:6-8"],
    emoji: "📜"
},
{
    term: "Pilgrimage",
    definition: "The Christian life as a journey toward our eternal home with God.",
    category: "Spiritual Life",
    references: ["Hebrews 11:13", "1 Peter 2:11", "Psalm 84:5"],
    emoji: "🧭"
},
{
    term: "Praise",
    definition: "The joyful response to God's character and works, central to worship.",
    category: "Worship",
    references: ["Psalm 150:6", "Hebrews 13:15", "Psalm 100:4"],
    emoji: "🎵"
},
{
    term: "Preaching",
    definition: "Proclaiming the gospel and explaining Scripture with authority and clarity.",
    category: "Ministry",
    references: ["2 Timothy 4:2", "Romans 10:14", "1 Corinthians 1:21"],
    emoji: "📢"
},
{
    term: "Predestination",
    definition: "God's eternal decree choosing some for salvation according to his sovereign will.",
    category: "Theology",
    references: ["Ephesians 1:5", "Romans 8:29-30", "Acts 13:48"],
    emoji: "🎯"
},
{
    term: "Presence of God",
    definition: "The manifest reality of God's nearness, both personally and corporately.",
    category: "Spiritual Life",
    references: ["Psalm 16:11", "Matthew 18:20", "James 4:8"],
    emoji: "✨"
},
{
    term: "Priesthood of Believers",
    definition: "The privilege of all Christians to approach God directly and offer spiritual sacrifices.",
    category: "Theology",
    references: ["1 Peter 2:9", "Revelation 1:6", "Hebrews 4:16"],
    emoji: "👑"
},
{
    term: "Proclamation",
    definition: "The public declaration of the gospel message to unbelievers.",
    category: "Evangelism",
    references: ["Mark 16:15", "Romans 10:14-15", "1 Corinthians 1:23"],
    emoji: "🗣️"
},
{
    term: "Promise",
    definition: "God's faithful commitment to fulfill what he has declared, grounded in his character.",
    category: "Theology",
    references: ["2 Corinthians 1:20", "Hebrews 10:23", "2 Peter 1:4"],
    emoji: "🤝"
},
{
    term: "Prophet",
    definition: "One who speaks God's message to people, calling them to covenant faithfulness.",
    category: "Ministry",
    references: ["Deuteronomy 18:18", "Amos 3:7", "Ephesians 4:11"],
    emoji: "📢"
},
{
    term: "Propitiation",
    definition: "The atoning work of Christ that satisfies God's wrath against sin.",
    category: "Theology",
    references: ["Romans 3:25", "1 John 2:2", "1 John 4:10"],
    emoji: "✝️"
},
{
    term: "Providence",
    definition: "God's sovereign control and guidance over all creation and history.",
    category: "Theology",
    references: ["Romans 8:28", "Ephesians 1:11", "Psalm 103:19"],
    emoji: "🌐"
},
{
    term: "Purification",
    definition: "The process of being cleansed from sin and made holy.",
    category: "Spiritual Life",
    references: ["1 John 1:9", "Titus 2:14", "Hebrews 1:3"],
    emoji: "💧"
},
{
    term: "Purity",
    definition: "Moral cleanliness and freedom from sin's contamination.",
    category: "Virtues",
    references: ["Matthew 5:8", "1 Timothy 4:12", "1 John 3:3"],
    emoji: "⚪"
},
{
    term: "Paul",
    definition: "Apostle to the Gentiles, author of much of the New Testament, formerly persecutor of the church.",
    category: "Biblical Figures",
    references: ["Acts 9:1-19", "Galatians 1:11-24", "2 Timothy 4:7"],
    emoji: "📖"
},
{
    term: "Peter",
    definition: "Apostle who confessed Christ, denied him, was restored, and became a church leader.",
    category: "Biblical Figures",
    references: ["Matthew 16:16-19", "John 21:15-19", "Acts 2:14-41"],
    emoji: "⛪"
},
{
    term: "Pharaoh",
    definition: "Title for Egyptian rulers, particularly the one who oppressed Israel and confronted Moses.",
    category: "Biblical Figures",
    references: ["Exodus 5:1-2", "Exodus 14:4-8", "Romans 9:17"],
    emoji: "👑"
},
{
    term: "Pilate",
    definition: "Roman governor who authorized Jesus' crucifixion while declaring his innocence.",
    category: "Biblical Figures",
    references: ["Matthew 27:11-26", "John 18:28-19:22", "Acts 4:27"],
    emoji: "⚖️"
},
{
    term: "Patriarchs",
    definition: "The founding fathers of Israel: Abraham, Isaac, Jacob, and Jacob's twelve sons.",
    category: "Biblical Figures",
    references: ["Acts 7:8-9", "Hebrews 11:8-22", "Romans 9:5"],
    emoji: "👨‍👦‍👦"
},
{
    term: "Pentateuch",
    definition: "The first five books of the Bible, also called the Torah or Books of Moses.",
    category: "Biblical Studies",
    references: ["Luke 24:44", "John 1:17", "2 Corinthians 3:14-15"],
    emoji: "📚"
},
{
    term: "Perseverance of the Saints",
    definition: "The doctrine that true believers will persevere in faith to the end and be saved.",
    category: "Theology",
    references: ["John 10:28-29", "Philippians 1:6", "1 Peter 1:5"],
    emoji: "🛡️"
},
{
    term: "Plagues of Egypt",
    definition: "Ten miraculous judgments God sent to convince Pharaoh to free the Israelites.",
    category: "Biblical Events",
    references: ["Exodus 7:14-12:30", "Psalm 78:43-51", "Psalm 105:28-36"],
    emoji: "🐸"
},
{
    term: "Poor in Spirit",
    definition: "Those who recognize their spiritual poverty and complete dependence on God.",
    category: "Spiritual Life",
    references: ["Matthew 5:3", "Luke 6:20", "Isaiah 66:2"],
    emoji: "🙏"
},
{
    term: "Power of God",
    definition: "God's omnipotence displayed in creation, salvation, and resurrection.",
    category: "Theology",
    references: ["Romans 1:16", "Ephesians 1:19-20", "Matthew 28:18"],
    emoji: "💪"
},
{
    term: "Praise and Worship",
    definition: "The corporate expression of honor and adoration to God.",
    category: "Worship",
    references: ["Psalm 95:6", "John 4:23-24", "Revelation 4:11"],
    emoji: "🎵"
},
{
    term: "Prayer of Faith",
    definition: "Confident prayer offered in alignment with God's will and character.",
    category: "Spiritual Life",
    references: ["James 5:15", "Mark 11:24", "1 John 5:14"],
    emoji: "🙏"
},
{
    term: "Preaching the Cross",
    definition: "Proclaiming Christ crucified as the center of the gospel message.",
    category: "Ministry",
    references: ["1 Corinthians 1:18", "1 Corinthians 2:2", "Galatians 6:14"],
    emoji: "✝️"
},
{
    term: "Predestination",
    definition: "God's eternal purpose according to which he graciously regenerates, sanctifies, and glorifies sinners.",
    category: "Theology",
    references: ["Ephesians 1:5", "Romans 8:29-30", "Acts 13:48"],
    emoji: "🎯"
},
{
    term: "Preservation of the Saints",
    definition: "God's work of keeping true believers secure in salvation until the end.",
    category: "Theology",
    references: ["John 10:28-29", "Philippians 1:6", "Jude 1:24"],
    emoji: "🛡️"
},
{
    term: "Pride",
    definition: "Exalting oneself above God and others, the root of all sin.",
    category: "Sin",
    references: ["Proverbs 16:18", "James 4:6", "1 John 2:16"],
    emoji: "👑"
},
{
    term: "Priest",
    definition: "One who mediates between God and people, fulfilled ultimately in Christ.",
    category: "Theology",
    references: ["Hebrews 4:14-16", "1 Timothy 2:5", "Hebrews 7:23-28"],
    emoji: "⛪"
},
{
    term: "Prodigal Son",
    definition: "Jesus' parable about God's gracious welcome of repentant sinners.",
    category: "Biblical Parables",
    references: ["Luke 15:11-32"],
    emoji: "👦"
},
{
    term: "Promised Land",
    definition: "Canaan, the territory God promised to give Abraham's descendants.",
    category: "Biblical Places",
    references: ["Genesis 12:7", "Deuteronomy 1:8", "Joshua 1:2-4"],
    emoji: "🗺️"
},
{
    term: "Prophetic Books",
    definition: "Old Testament books containing messages from God through his prophets.",
    category: "Biblical Studies",
    references: ["Isaiah 1:1", "Jeremiah 1:2", "Ezekiel 1:3"],
    emoji: "📖"
},
{
    term: "Proverbs",
    definition: "Wisdom literature containing practical guidance for godly living.",
    category: "Biblical Studies",
    references: ["Proverbs 1:1-7", "Proverbs 9:10", "Proverbs 30:5"],
    emoji: "🧠"
},
{
    term: "Psalms",
    definition: "The hymnbook of Israel, expressing the full range of human emotion before God.",
    category: "Biblical Studies",
    references: ["Psalm 1:1-6", "Psalm 23:1-6", "Psalm 150:1-6"],
    emoji: "🎵"
},
{
    term: "Purim",
    definition: "Jewish feast celebrating deliverance from Haman's plot, recorded in Esther.",
    category: "Biblical Events",
    references: ["Esther 9:20-28", "Esther 9:26-27"],
    emoji: "🎭"
},
{
    term: "Purity of Heart",
    definition: "Inner moral cleanliness and single-minded devotion to God.",
    category: "Spiritual Life",
    references: ["Matthew 5:8", "Psalm 24:3-4", "2 Timothy 2:22"],
    emoji: "💖"
},
{
    term: "Paul's Conversion",
    definition: "The dramatic encounter with Christ that transformed Saul the persecutor into Paul the apostle.",
    category: "Biblical Events",
    references: ["Acts 9:1-19", "Acts 22:6-16", "Acts 26:12-18"],
    emoji: "🌟"
},
{
    term: "Peace of God",
    definition: "The supernatural tranquility that guards believers' hearts in Christ.",
    category: "Spiritual Life",
    references: ["Philippians 4:7", "John 14:27", "Colossians 3:15"],
    emoji: "🕊️"
},
{
    term: "Pentecostal Power",
    definition: "The Holy Spirit's empowerment for witness and ministry.",
    category: "Spiritual Life",
    references: ["Acts 1:8", "Acts 2:1-4", "Luke 24:49"],
    emoji: "🔥"
},
{
    term: "Perseverance in Prayer",
    definition: "Continuing faithfully in prayer without giving up.",
    category: "Spiritual Life",
    references: ["Luke 18:1", "Ephesians 6:18", "Colossians 4:2"],
    emoji: "⏳"
},
{
    term: "Peter's Denial",
    definition: "Peter's threefold denial of Jesus, followed by restoration.",
    category: "Biblical Events",
    references: ["Matthew 26:69-75", "John 21:15-19", "Luke 22:54-62"],
    emoji: "🐓"
},
{
    term: "Pharisaical Hypocrisy",
    definition: "Outward righteousness without inward transformation, condemned by Jesus.",
    category: "Sin",
    references: ["Matthew 23:25-28", "Luke 11:39-44", "Matthew 6:2"],
    emoji: "🎭"
},
{
    term: "Pilgrim Mentality",
    definition: "Living as temporary residents on earth while awaiting our eternal home.",
    category: "Spiritual Life",
    references: ["Hebrews 11:13", "1 Peter 2:11", "Philippians 3:20"],
    emoji: "🧳"
},
{
    term: "Plumb Line",
    definition: "God's standard of righteousness by which he measures his people.",
    category: "Biblical Imagery",
    references: ["Amos 7:7-8", "2 Kings 21:13", "Isaiah 28:17"],
    emoji: "📏"
},
{
    term: "Poor",
    definition: "Those with limited resources, whom God specially cares for and defends.",
    category: "Biblical Themes",
    references: ["Psalm 140:12", "James 2:5", "Luke 4:18"],
    emoji: "🤲"
},
{
    term: "Power of the Holy Spirit",
    definition: "The Spirit's enabling for Christian living, service, and witness.",
    category: "Spiritual Life",
    references: ["Acts 1:8", "Romans 15:13", "Ephesians 3:16"],
    emoji: "💪"
},
{
    term: "Praise as Sacrifice",
    definition: "Offering verbal worship to God as a spiritual sacrifice.",
    category: "Worship",
    references: ["Hebrews 13:15", "Psalm 50:23", "Psalm 107:22"],
    emoji: "🎁"
},
{
    term: "Prayer of Jabez",
    definition: "A brief prayer for blessing and protection that God answered.",
    category: "Biblical Prayers",
    references: ["1 Chronicles 4:10"],
    emoji: "🙏"
},
{
    term: "Preaching the Kingdom",
    definition: "Proclaiming the reign and rule of God through Jesus Christ.",
    category: "Ministry",
    references: ["Matthew 4:17", "Matthew 10:7", "Acts 28:31"],
    emoji: "👑"
},
{
    term: "Predestination to Glory",
    definition: "God's eternal purpose to conform believers to Christ's image.",
    category: "Theology",
    references: ["Romans 8:29-30", "Ephesians 1:11-12", "2 Thessalonians 2:13"],
    emoji: "🌟"
},
{
    term: "Presence in Worship",
    definition: "Experiencing God's manifest presence during corporate worship.",
    category: "Worship",
    references: ["Psalm 22:3", "Matthew 18:20", "2 Chronicles 5:13-14"],
    emoji: "✨"
},
{
    term: "Pride vs Humility",
    definition: "The contrast between self-exaltation and humble dependence on God.",
    category: "Spiritual Life",
    references: ["Proverbs 29:23", "James 4:6", "1 Peter 5:5-6"],
    emoji: "⚖️"
},
{
    term: "Priestly Blessing",
    definition: "The Aaronic benediction invoking God's favor and peace.",
    category: "Biblical Practices",
    references: ["Numbers 6:24-26", "Psalm 67:1", "2 Corinthians 13:14"],
    emoji: "🙌"
},
{
    term: "Proclamation of the Gospel",
    definition: "Announcing the good news of salvation through Jesus Christ.",
    category: "Evangelism",
    references: ["Mark 16:15", "Romans 1:16", "1 Corinthians 15:1-4"],
    emoji: "📢"
},
{
    term: "Promise of the Spirit",
    definition: "Jesus' pledge to send the Holy Spirit to indwell and empower believers.",
    category: "Theology",
    references: ["John 14:16-17", "Acts 1:4-5", "Galatians 3:14"],
    emoji: "🕊️"
},
{
    term: "Prophetic Fulfillment",
    definition: "The accomplishment of what God foretold through his prophets, especially in Christ.",
    category: "Biblical Studies",
    references: ["Matthew 1:22", "Luke 24:44", "Acts 3:18"],
    emoji: "✅"
},
{
    term: "Propitiation through Faith",
    definition: "Receiving the benefits of Christ's atoning sacrifice by faith.",
    category: "Theology",
    references: ["Romans 3:25", "1 John 2:2", "1 John 4:10"],
    emoji: "✝️"
},
{
    term: "Providential Care",
    definition: "God's faithful provision and protection of his people.",
    category: "Theology",
    references: ["Matthew 6:25-34", "Psalm 121:1-8", "1 Peter 5:7"],
    emoji: "🤲"
},
{
    term: "Purification through the Word",
    definition: "The cleansing effect of Scripture on believers' lives.",
    category: "Spiritual Life",
    references: ["John 15:3", "Ephesians 5:26", "Psalm 119:9"],
    emoji: "💧"
},
{
    term: "Purity in Heart",
    definition: "Moral integrity and single-minded devotion to God.",
    category: "Spiritual Life",
    references: ["Matthew 5:8", "Psalm 51:10", "2 Timothy 2:22"],
    emoji: "💖"
},
{
    term: "Paul's Missionary Journeys",
    definition: "Three extensive trips Paul took to spread the gospel throughout the Roman Empire.",
    category: "Biblical Events",
    references: ["Acts 13-14", "Acts 15:36-18:22", "Acts 18:23-21:16"],
    emoji: "🧭"
},
{
    term: "Peace with God",
    definition: "The reconciled relationship with God accomplished through Christ's work.",
    category: "Theology",
    references: ["Romans 5:1", "Colossians 1:20", "Ephesians 2:14-16"],
    emoji: "🤝"
},
{
    term: "Pentecostal Experience",
    definition: "The initial outpouring and ongoing work of the Holy Spirit in the church.",
    category: "Spiritual Life",
    references: ["Acts 2:1-4", "Acts 4:31", "Ephesians 5:18"],
    emoji: "🔥"
},
{
    term: "Perseverance through Trials",
    definition: "Remaining faithful to God during difficult circumstances.",
    category: "Spiritual Life",
    references: ["James 1:2-4", "Romans 5:3-5", "1 Peter 1:6-7"],
    emoji: "🔥"
},
{
    term: "Peter's Confession",
    definition: "Peter's declaration that Jesus is the Christ, the Son of the living God.",
    category: "Biblical Events",
    references: ["Matthew 16:16", "Mark 8:29", "Luke 9:20"],
    emoji: "🗣️"
},
{
    term: "Pharisee and Tax Collector",
    definition: "Jesus' parable contrasting self-righteousness with humble repentance.",
    category: "Biblical Parables",
    references: ["Luke 18:9-14"],
    emoji: "🙏"
},
{
    term: "Pilgrim's Progress",
    definition: "The Christian life as a journey toward the celestial city.",
    category: "Spiritual Life",
    references: ["Hebrews 11:13-16", "Philippians 3:20", "1 Peter 2:11"],
    emoji: "🚶"
},
{
    term: "Planted in the House of the Lord",
    definition: "Metaphor for believers flourishing through regular worship and fellowship.",
    category: "Spiritual Life",
    references: ["Psalm 92:13", "Jeremiah 17:8", "Psalm 1:3"],
    emoji: "🌳"
},
{
    term: "Poor in Spirit",
    definition: "Recognizing one's spiritual bankruptcy and need for God's grace.",
    category: "Spiritual Life",
    references: ["Matthew 5:3", "Isaiah 66:2", "Luke 18:13"],
    emoji: "🙏"
},
{
    term: "Power of the Gospel",
    definition: "The inherent ability of the gospel message to transform lives.",
    category: "Theology",
    references: ["Romans 1:16", "1 Corinthians 1:18", "Hebrews 4:12"],
    emoji: "💥"
},
{
    term: "Praise from the Heart",
    definition: "Genuine worship that flows from a transformed inner life.",
    category: "Worship",
    references: ["Psalm 9:1", "Ephesians 5:19", "Colossians 3:16"],
    emoji: "❤️"
},
{
    term: "Prayer of Confession",
    definition: "Admitting sins to God and receiving his forgiveness.",
    category: "Spiritual Life",
    references: ["1 John 1:9", "Psalm 32:5", "Psalm 51:1-4"],
    emoji: "😔"
},
{
    term: "Preaching Christ Crucified",
    definition: "Proclaiming Jesus' death as the central message of Christianity.",
    category: "Ministry",
    references: ["1 Corinthians 1:23", "1 Corinthians 2:2", "Galatians 3:1"],
    emoji: "✝️"
},
{
    term: "Predestined for Adoption",
    definition: "God's eternal purpose to make believers his children through Christ.",
    category: "Theology",
    references: ["Ephesians 1:5", "Romans 8:15", "Galatians 4:5"],
    emoji: "👨‍👦"
},
{
    term: "Presence of the Lord",
    definition: "The manifest reality of God's nearness to his people.",
    category: "Spiritual Life",
    references: ["Psalm 16:11", "James 4:8", "2 Chronicles 5:14"],
    emoji: "✨"
},
{
    term: "Pride Goes Before Destruction",
    definition: "The biblical principle that arrogance leads to downfall.",
    category: "Spiritual Life",
    references: ["Proverbs 16:18", "Proverbs 29:23", "Daniel 4:37"],
    emoji: "⚠️"
},
{
    term: "Priestly Ministry of Christ",
    definition: "Jesus' ongoing intercession for believers at the Father's right hand.",
    category: "Theology",
    references: ["Hebrews 7:25", "Romans 8:34", "1 John 2:1"],
    emoji: "🙏"
},
{
    term: "Proclaiming Liberty",
    definition: "Announcing the freedom from sin and condemnation found in Christ.",
    category: "Evangelism",
    references: ["Isaiah 61:1", "Luke 4:18", "John 8:36"],
    emoji: "🔓"
},
{
    term: "Promise Keeper",
    definition: "God as the one who faithfully fulfills all his commitments.",
    category: "Theology",
    references: ["2 Corinthians 1:20", "Hebrews 10:23", "Numbers 23:19"],
    emoji: "🤝"
},
{
    term: "Prophetic Ministry",
    definition: "The Spirit-empowered declaration of God's message to his people.",
    category: "Ministry",
    references: ["1 Corinthians 14:3", "Ephesians 4:11-12", "Acts 21:9"],
    emoji: "📢"
},
{
    term: "Propitiation for Our Sins",
    definition: "Christ's death as the satisfaction of God's wrath against human sin.",
    category: "Theology",
    references: ["1 John 2:2", "Romans 3:25", "1 John 4:10"],
    emoji: "✝️"
},
{
    term: "Providential Guidance",
    definition: "God's direction of circumstances to accomplish his purposes.",
    category: "Theology",
    references: ["Proverbs 16:9", "Psalm 37:23", "Isaiah 48:17"],
    emoji: "🧭"
},
{
    term: "Purification of the Soul",
    definition: "The Holy Spirit's work of cleansing believers from inner corruption.",
    category: "Spiritual Life",
    references: ["1 Peter 1:22", "2 Corinthians 7:1", "James 4:8"],
    emoji: "✨"
},
{
    term: "Purity of Doctrine",
    definition: "Adherence to sound biblical teaching without corruption.",
    category: "Theology",
    references: ["Titus 2:1", "1 Timothy 6:3", "2 Timothy 1:13"],
    emoji: "📖"
},
{
    term: "Obedience",
    definition: "Willing submission to God's commands and will, flowing from love and faith.",
    category: "Spiritual Life",
    references: ["John 14:15", "1 Samuel 15:22", "Romans 6:16"],
    emoji: "✅"
},
{
    term: "Omnipotence",
    definition: "God's attribute of being all-powerful, able to do anything consistent with his nature.",
    category: "Theology",
    references: ["Genesis 17:1", "Revelation 19:6", "Matthew 19:26"],
    emoji: "💪"
},
{
    term: "Omniscience",
    definition: "God's attribute of knowing all things - past, present, and future.",
    category: "Theology",
    references: ["Psalm 147:5", "1 John 3:20", "Hebrews 4:13"],
    emoji: "🧠"
},
{
    term: "Omnipresence",
    definition: "God's attribute of being present everywhere at all times.",
    category: "Theology",
    references: ["Psalm 139:7-10", "Jeremiah 23:23-24", "Acts 17:27-28"],
    emoji: "🌍"
},
{
    term: "Offering",
    definition: "Something presented to God as an act of worship, thanksgiving, or atonement.",
    category: "Worship",
    references: ["Leviticus 1:1-3", "Hebrews 13:15-16", "2 Corinthians 9:7"],
    emoji: "🎁"
},
{
    term: "Ordination",
    definition: "The formal setting apart of individuals for ministry leadership.",
    category: "Ministry",
    references: ["Acts 13:2-3", "1 Timothy 4:14", "2 Timothy 1:6"],
    emoji: "🙌"
},
{
    term: "Outpouring",
    definition: "A abundant manifestation of the Holy Spirit's presence and power.",
    category: "Spiritual Life",
    references: ["Joel 2:28-29", "Acts 2:17-18", "Titus 3:5-6"],
    emoji: "🔥"
},
{
    term: "Overcomer",
    definition: "A believer who remains faithful to Christ and triumphs through trials.",
    category: "Spiritual Life",
    references: ["1 John 5:4-5", "Revelation 2:7", "Romans 8:37"],
    emoji: "🏆"
},
{
    term: "Oath",
    definition: "A solemn promise or vow made before God.",
    category: "Biblical Practices",
    references: ["Hebrews 6:16-17", "Numbers 30:2", "Matthew 5:33-37"],
    emoji: "🤝"
},
{
    term: "Obedience of Christ",
    definition: "Jesus' perfect submission to the Father's will, even to death on the cross.",
    category: "Theology",
    references: ["Philippians 2:8", "Romans 5:19", "Hebrews 5:8"],
    emoji: "✝️"
},
{
    term: "Offense",
    definition: "A stumbling block that causes others to sin or hinders their faith.",
    category: "Ethics",
    references: ["Matthew 18:6-7", "Romans 14:13", "1 Corinthians 8:9"],
    emoji: "🚫"
},
{
    term: "Oil",
    definition: "Symbol of the Holy Spirit, used for anointing, healing, and consecration.",
    category: "Biblical Imagery",
    references: ["1 Samuel 16:13", "James 5:14", "Matthew 25:1-13"],
    emoji: "🫒"
},
{
    term: "Old Covenant",
    definition: "The agreement God made with Israel through Moses, fulfilled in Christ.",
    category: "Theology",
    references: ["Exodus 19:5-6", "Jeremiah 31:31-32", "Hebrews 8:6-13"],
    emoji: "📜"
},
{
    term: "Old Testament",
    definition: "The first 39 books of the Bible, recording God's dealings with humanity before Christ.",
    category: "Biblical Studies",
    references: ["2 Timothy 3:15", "Luke 24:27", "Romans 15:4"],
    emoji: "📖"
},
{
    term: "Olivet Discourse",
    definition: "Jesus' teaching about the end times given on the Mount of Olives.",
    category: "Biblical Teaching",
    references: ["Matthew 24:1-25:46", "Mark 13:1-37", "Luke 21:5-36"],
    emoji: "⛰️"
},
{
    term: "Omega",
    definition: "The last letter of the Greek alphabet, symbolizing God's eternality and completion.",
    category: "Theology",
    references: ["Revelation 1:8", "Revelation 21:6", "Revelation 22:13"],
    emoji: "Ω"
},
{
    term: "One Another",
    definition: "The mutual responsibilities and care Christians are to show each other.",
    category: "Ecclesiology",
    references: ["John 13:34-35", "Romans 12:10", "Galatians 6:2"],
    emoji: "👥"
},
{
    term: "Only Begotten",
    definition: "Description of Jesus as the unique, one-of-a-kind Son of God.",
    category: "Theology",
    references: ["John 1:14", "John 3:16", "1 John 4:9"],
    emoji: "👑"
},
{
    term: "Oppression",
    definition: "Unjust treatment or exercise of power over others, which God condemns.",
    category: "Sin",
    references: ["Isaiah 1:17", "Psalm 103:6", "Ecclesiastes 4:1"],
    emoji: "⚖️"
},
{
    term: "Oracle",
    definition: "A divine message or utterance from God through a prophet.",
    category: "Biblical Terms",
    references: ["Romans 3:2", "1 Peter 4:11", "Acts 7:38"],
    emoji: "🗣️"
},
{
    term: "Ordain",
    definition: "To appoint or establish by divine authority.",
    category: "Theology",
    references: ["Jeremiah 1:5", "Acts 10:42", "1 Corinthians 2:7"],
    emoji: "🎯"
},
{
    term: "Ordinance",
    definition: "A religious rite or ceremony instituted by Christ for the church.",
    category: "Theology",
    references: ["Matthew 28:19", "1 Corinthians 11:23-26", "Romans 6:3-4"],
    emoji: "💧"
},
{
    term: "Original Sin",
    definition: "The inherited corruption and guilt from Adam's first transgression.",
    category: "Theology",
    references: ["Romans 5:12", "Psalm 51:5", "1 Corinthians 15:22"],
    emoji: "🍎"
},
{
    term: "Orphan",
    definition: "A fatherless child, representing those God especially cares for and adopts.",
    category: "Biblical Themes",
    references: ["Psalm 68:5", "James 1:27", "John 14:18"],
    emoji: "👦"
},
{
    term: "Orthodoxy",
    definition: "Correct belief and teaching according to biblical truth.",
    category: "Theology",
    references: ["1 Timothy 6:3", "Titus 2:1", "Jude 1:3"],
    emoji: "🎯"
},
{
    term: "Ostracize",
    definition: "To exclude or banish, as in church discipline for unrepentant sin.",
    category: "Ecclesiology",
    references: ["1 Corinthians 5:11-13", "Matthew 18:17", "2 Thessalonians 3:14"],
    emoji: "🚫"
},
{
    term: "Outcast",
    definition: "One rejected by society, whom Jesus welcomed and ministered to.",
    category: "Biblical Themes",
    references: ["Psalm 147:3", "Luke 15:1-2", "Matthew 9:10-13"],
    emoji: "🤗"
},
{
    term: "Outpouring of the Spirit",
    definition: "The abundant giving of the Holy Spirit, especially at Pentecost.",
    category: "Spiritual Life",
    references: ["Acts 2:17", "Joel 2:28", "Zechariah 12:10"],
    emoji: "💧"
},
{
    term: "Outreach",
    definition: "Efforts to share the gospel with those outside the church.",
    category: "Evangelism",
    references: ["Matthew 28:19", "Acts 1:8", "Luke 14:23"],
    emoji: "🌍"
},
{
    term: "Oven",
    definition: "Metaphor for testing and purification through difficult circumstances.",
    category: "Biblical Imagery",
    references: ["Isaiah 31:9", "Malachi 4:1", "Matthew 6:30"],
    emoji: "🔥"
},
{
    term: "Overflow",
    definition: "Abundant blessing that exceeds capacity and spills over to others.",
    category: "Spiritual Life",
    references: ["Psalm 23:5", "2 Corinthians 4:15", "Romans 15:13"],
    emoji: "💧"
},
{
    term: "Overcome",
    definition: "To gain victory over sin, temptation, and the world through Christ.",
    category: "Spiritual Life",
    references: ["1 John 5:4", "Revelation 12:11", "Romans 12:21"],
    emoji: "🛡️"
},
{
    term: "Overlord",
    definition: "A supreme ruler, ultimately describing God's sovereignty.",
    category: "Theology",
    references: ["Psalm 47:2", "1 Timothy 6:15", "Revelation 19:16"],
    emoji: "👑"
},
{
    term: "Overseer",
    definition: "Another term for elder or bishop in church leadership.",
    category: "Ministry",
    references: ["1 Timothy 3:1", "Acts 20:28", "1 Peter 5:2"],
    emoji: "👨‍💼"
},
{
    term: "Overwhelm",
    definition: "To be overcome by God's presence, power, or blessings.",
    category: "Spiritual Life",
    references: ["Psalm 61:2", "Psalm 65:3", "2 Corinthians 2:14"],
    emoji: "🌊"
},
{
    term: "Owe",
    definition: "To be indebted, particularly the debt of love to others.",
    category: "Ethics",
    references: ["Romans 13:8", "Philemon 1:18-19", "Matthew 18:24-27"],
    emoji: "💰"
},
{
    term: "Ownership",
    definition: "God's rightful claim over creation and believers as his possession.",
    category: "Theology",
    references: ["Psalm 24:1", "1 Corinthians 6:19-20", "1 Peter 2:9"],
    emoji: "🏷️"
},
{
    term: "Ox",
    definition: "A work animal used in agriculture and as a symbol of strength and service.",
    category: "Biblical Imagery",
    references: ["Deuteronomy 25:4", "1 Corinthians 9:9", "Proverbs 14:4"],
    emoji: "🐂"
},
{
    term: "Oath to Abraham",
    definition: "God's solemn promise to bless Abraham and his descendants.",
    category: "Biblical Events",
    references: ["Genesis 22:16-18", "Hebrews 6:13-14", "Luke 1:73"],
    emoji: "🤝"
},
{
    term: "Obedience of Faith",
    definition: "The response to the gospel that includes both trust and submission.",
    category: "Theology",
    references: ["Romans 1:5", "Romans 16:26", "Acts 6:7"],
    emoji: "🙏"
},
{
    term: "Offering of Isaac",
    definition: "Abraham's test of faith when God asked him to sacrifice his son.",
    category: "Biblical Events",
    references: ["Genesis 22:1-19", "Hebrews 11:17-19", "James 2:21"],
    emoji: "🐑"
},
{
    term: "Oil of Gladness",
    definition: "Symbol of divine joy and blessing, especially associated with the Messiah.",
    category: "Biblical Imagery",
    references: ["Psalm 45:7", "Hebrews 1:9", "Isaiah 61:3"],
    emoji: "😊"
},
{
    term: "Old and New",
    definition: "The contrast between the old covenant and the new covenant in Christ.",
    category: "Theology",
    references: ["Matthew 13:52", "2 Corinthians 5:17", "Hebrews 8:13"],
    emoji: "🔄"
},
{
    term: "Olive Tree",
    definition: "Metaphor for God's people, both natural and grafted-in branches.",
    category: "Biblical Imagery",
    references: ["Romans 11:17-24", "Jeremiah 11:16", "Psalm 52:8"],
    emoji: "🌳"
},
{
    term: "Omega Point",
    definition: "Christ as the culmination and goal of all history.",
    category: "Theology",
    references: ["Revelation 22:13", "Colossians 1:17", "Ephesians 1:10"],
    emoji: "🎯"
},
{
    term: "One Body",
    definition: "The church as the unified spiritual body of Christ with many members.",
    category: "Ecclesiology",
    references: ["1 Corinthians 12:12", "Romans 12:4-5", "Ephesians 4:4"],
    emoji: "👥"
},
{
    term: "Only Wise God",
    definition: "Title emphasizing God's unique and perfect wisdom.",
    category: "Theology",
    references: ["Jude 1:25", "Romans 16:27", "1 Timothy 1:17"],
    emoji: "🧠"
},
{
    term: "Open Door",
    definition: "An opportunity for ministry or evangelism provided by God.",
    category: "Ministry",
    references: ["1 Corinthians 16:9", "2 Corinthians 2:12", "Colossians 4:3"],
    emoji: "🚪"
},
{
    term: "Opposition",
    definition: "Resistance or hostility faced for following Christ.",
    category: "Spiritual Life",
    references: ["2 Timothy 3:12", "Matthew 5:10-12", "Acts 14:22"],
    emoji: "⚔️"
},
{
    term: "Oracle of God",
    definition: "The Scriptures as the very words of God.",
    category: "Theology",
    references: ["1 Peter 4:11", "Romans 3:2", "Hebrews 5:12"],
    emoji: "📖"
},
{
    term: "Order",
    definition: "Proper arrangement and decorum in worship and church life.",
    category: "Ecclesiology",
    references: ["1 Corinthians 14:40", "Colossians 2:5", "1 Timothy 3:15"],
    emoji: "📋"
},
{
    term: "Ordinances of Heaven",
    definition: "The established laws and patterns of creation set by God.",
    category: "Theology",
    references: ["Jeremiah 31:35", "Job 38:33", "Psalm 148:6"],
    emoji: "🌌"
},
{
    term: "Original Righteousness",
    definition: "The state of moral perfection in which Adam and Eve were created.",
    category: "Theology",
    references: ["Genesis 1:31", "Ecclesiastes 7:29", "Ephesians 4:24"],
    emoji: "⚪"
},
{
    term: "Ornament",
    definition: "Metaphor for godly character and wisdom as beautiful adornments.",
    category: "Biblical Imagery",
    references: ["Proverbs 1:9", "Proverbs 4:9", "1 Peter 3:3-4"],
    emoji: "💎"
},
{
    term: "Orthopraxy",
    definition: "Correct practice and living out of biblical truth.",
    category: "Spiritual Life",
    references: ["James 1:22", "Matthew 7:21", "1 John 3:18"],
    emoji: "👣"
},
{
    term: "Ostentation",
    definition: "Showy display, especially in religious practices, condemned by Jesus.",
    category: "Sin",
    references: ["Matthew 6:1-2", "Matthew 23:5", "Luke 18:9-14"],
    emoji: "🎭"
},
{
    term: "Outer Darkness",
    definition: "A place of exclusion and punishment for the unfaithful.",
    category: "Eschatology",
    references: ["Matthew 8:12", "Matthew 22:13", "Matthew 25:30"],
    emoji: "🌑"
},
{
    term: "Outrage",
    definition: "Righteous anger against sin and injustice.",
    category: "Virtues",
    references: ["2 Corinthians 7:11", "Mark 3:5", "John 2:15-17"],
    emoji: "😠"
},
{
    term: "Oval",
    definition: "Circular shape, representing eternity and God's endless nature.",
    category: "Biblical Imagery",
    references: ["Psalm 90:2", "Revelation 1:8", "Hebrews 13:8"],
    emoji: "⭕"
},
{
    term: "Oven of Affliction",
    definition: "Metaphor for intense suffering that purifies and tests faith.",
    category: "Spiritual Life",
    references: ["Isaiah 48:10", "1 Peter 1:6-7", "Malachi 3:2-3"],
    emoji: "🔥"
},
{
    term: "Overabundance",
    definition: "God's generous provision that exceeds what is needed.",
    category: "Theology",
    references: ["Ephesians 3:20", "2 Corinthians 9:8", "John 10:10"],
    emoji: "📦"
},
{
    term: "Overflowing Joy",
    definition: "The abundant happiness that comes from relationship with God.",
    category: "Spiritual Life",
    references: ["Psalm 16:11", "Romans 15:13", "1 Peter 1:8"],
    emoji: "😄"
},
{
    term: "Overlord of All",
    definition: "God's supreme authority over every power and authority.",
    category: "Theology",
    references: ["Ephesians 1:21", "Colossians 2:10", "1 Peter 3:22"],
    emoji: "👑"
},
{
    term: "Overshadow",
    definition: "The Holy Spirit's powerful presence that conceives and empowers.",
    category: "Spiritual Life",
    references: ["Luke 1:35", "Matthew 17:5", "Acts 5:15"],
    emoji: "☁️"
},
{
    term: "Overwhelming Victory",
    definition: "The complete triumph God gives through Christ.",
    category: "Spiritual Life",
    references: ["Romans 8:37", "1 Corinthians 15:57", "2 Corinthians 2:14"],
    emoji: "🏆"
},
{
    term: "Own People",
    definition: "Those who belong to God through faith in Christ.",
    category: "Theology",
    references: ["Titus 2:14", "1 Peter 2:9", "Acts 15:14"],
    emoji: "👨‍👩‍👧‍👦"
},
{
    term: "Ox Goad",
    definition: "A sharp stick for prodding oxen, metaphor for God's prompting.",
    category: "Biblical Imagery",
    references: ["Judges 3:31", "1 Samuel 13:21", "Ecclesiastes 12:11"],
    emoji: "🦯"
},
{
    term: "Oath of God",
    definition: "God's solemn promise that guarantees his commitments.",
    category: "Theology",
    references: ["Hebrews 6:17", "Psalm 110:4", "Luke 1:73"],
    emoji: "🤝"
},
{
    term: "Obedience from the Heart",
    definition: "Sincere submission to God that flows from inner transformation.",
    category: "Spiritual Life",
    references: ["Romans 6:17", "Ephesians 6:6", "2 Corinthians 9:7"],
    emoji: "💖"
},
{
    term: "Offering of Praise",
    definition: "Worship and thanksgiving presented to God as a spiritual sacrifice.",
    category: "Worship",
    references: ["Hebrews 13:15", "Psalm 50:14", "Psalm 107:22"],
    emoji: "🎵"
},
{
    term: "Oil of the Spirit",
    definition: "The Holy Spirit's anointing for service and ministry.",
    category: "Spiritual Life",
    references: ["1 John 2:20", "2 Corinthians 1:21", "Acts 10:38"],
    emoji: "🕊️"
},
{
    term: "Old Creation",
    definition: "The fallen human nature inherited from Adam.",
    category: "Theology",
    references: ["2 Corinthians 5:17", "Galatians 6:15", "Ephesians 4:22"],
    emoji: "👤"
},
{
    term: "Olive Press",
    definition: "The place where olives were crushed to produce oil, symbolizing suffering.",
    category: "Biblical Imagery",
    references: ["Matthew 26:36", "Luke 22:44", "Hebrews 5:7"],
    emoji: "🫒"
},
{
    term: "Omnibenevolence",
    definition: "God's attribute of being perfectly and infinitely good.",
    category: "Theology",
    references: ["Psalm 145:9", "Matthew 19:17", "1 John 4:8"],
    emoji: "❤️"
},
{
    term: "One Faith",
    definition: "The unified body of Christian doctrine believed by the church.",
    category: "Theology",
    references: ["Ephesians 4:5", "Jude 1:3", "1 Timothy 4:1"],
    emoji: "✝️"
},
{
    term: "Only Mediator",
    definition: "Jesus Christ as the sole bridge between God and humanity.",
    category: "Theology",
    references: ["1 Timothy 2:5", "Hebrews 8:6", "Hebrews 9:15"],
    emoji: "🤝"
},
{
    term: "Open Heaven",
    definition: "A state of unhindered access to God's presence and blessing.",
    category: "Spiritual Life",
    references: ["John 1:51", "Acts 7:56", "Revelation 19:11"],
    emoji: "🌌"
},
{
    term: "Opportune Time",
    definition: "The right moment for action, especially in spiritual warfare.",
    category: "Spiritual Life",
    references: ["Luke 4:13", "2 Corinthians 6:2", "Galatians 6:10"],
    emoji: "⏰"
},
{
    term: "Oracle against Nations",
    definition: "Prophetic messages of judgment directed at foreign powers.",
    category: "Biblical Studies",
    references: ["Isaiah 13-23", "Jeremiah 46-51", "Ezekiel 25-32"],
    emoji: "🌍"
},
{
    term: "Order of Melchizedek",
    definition: "The eternal priesthood of Christ, superior to the Levitical priesthood.",
    category: "Theology",
    references: ["Psalm 110:4", "Hebrews 5:6", "Hebrews 7:17"],
    emoji: "👑"
},
{
    term: "Ordinances of the Church",
    definition: "The practices instituted by Christ for observance by believers.",
    category: "Ecclesiology",
    references: ["Matthew 28:19", "1 Corinthians 11:23-26", "Acts 2:42"],
    emoji: "⛪"
},
{
    term: "Original Blessing",
    definition: "The state of goodness in which God created the world.",
    category: "Theology",
    references: ["Genesis 1:31", "Genesis 2:3", "Ephesians 1:3"],
    emoji: "🌟"
},
{
    term: "Ornament of Salvation",
    definition: "The beautiful transformation God works in believers.",
    category: "Spiritual Life",
    references: ["Isaiah 61:10", "Psalm 149:4", "1 Peter 3:4"],
    emoji: "💎"
},
{
    term: "Orthodox Faith",
    definition: "The historic Christian beliefs affirmed by the church throughout ages.",
    category: "Theology",
    references: ["Jude 1:3", "1 Timothy 4:6", "2 Timothy 1:13"],
    emoji: "⛪"
},
{
    term: "Ostracism",
    definition: "Deliberate exclusion, sometimes used as church discipline.",
    category: "Ecclesiology",
    references: ["1 Corinthians 5:5", "2 Thessalonians 3:6", "Matthew 18:17"],
    emoji: "🚪"
},
{
    term: "Outpouring of Blessing",
    definition: "Abundant spiritual and material provision from God.",
    category: "Spiritual Life",
    references: ["Malachi 3:10", "Ezekiel 34:26", "Psalm 133:3"],
    emoji: "💧"
},
{
    term: "Outstretched Arm",
    definition: "Symbol of God's power in delivering and saving his people.",
    category: "Biblical Imagery",
    references: ["Exodus 6:6", "Deuteronomy 4:34", "Psalm 136:12"],
    emoji: "💪"
},
{
    term: "Oval of Protection",
    definition: "Metaphor for God's surrounding care and defense of his people.",
    category: "Spiritual Life",
    references: ["Psalm 125:2", "Zechariah 2:5", "Psalm 34:7"],
    emoji: "🛡️"
},
{
    term: "Overcomer's Reward",
    definition: "The eternal inheritance promised to those who remain faithful.",
    category: "Eschatology",
    references: ["Revelation 2:7", "Revelation 3:21", "James 1:12"],
    emoji: "🎁"
},
{
    term: "Overflowing Cup",
    definition: "Symbol of abundant blessing and provision from God.",
    category: "Biblical Imagery",
    references: ["Psalm 23:5", "Psalm 116:13", "Jeremiah 31:14"],
    emoji: "🍷"
},
{
    term: "Overwhelming Love",
    definition: "God's incredible affection that surpasses human understanding.",
    category: "Theology",
    references: ["Ephesians 3:18-19", "Romans 8:35-39", "1 John 3:1"],
    emoji: "💝"
},
{
    term: "Ownership by God",
    definition: "The truth that believers belong completely to God.",
    category: "Theology",
    references: ["1 Corinthians 6:19-20", "1 Peter 2:9", "Titus 2:14"],
    emoji: "🏷️"
},
{
    term: "New Covenant",
    definition: "The agreement established by Christ's blood, offering forgiveness and the indwelling Holy Spirit.",
    category: "Theology",
    references: ["Jeremiah 31:31-34", "Luke 22:20", "Hebrews 8:6-13"],
    emoji: "📜"
},
{
    term: "New Creation",
    definition: "The radical transformation of a believer into a new person in Christ.",
    category: "Theology",
    references: ["2 Corinthians 5:17", "Galatians 6:15", "Ephesians 4:24"],
    emoji: "🦋"
},
{
    term: "New Jerusalem",
    definition: "The glorious city of God that will descend from heaven in the new creation.",
    category: "Eschatology",
    references: ["Revelation 21:2", "Revelation 21:10-27", "Hebrews 12:22"],
    emoji: "🏙️"
},
{
    term: "New Birth",
    definition: "The spiritual regeneration by the Holy Spirit that makes one a child of God.",
    category: "Theology",
    references: ["John 3:3", "1 Peter 1:3", "Titus 3:5"],
    emoji: "👶"
},
{
    term: "New Commandment",
    definition: "Jesus' instruction to love one another as he has loved us.",
    category: "Ethics",
    references: ["John 13:34-35", "1 John 2:7-8", "1 John 3:23"],
    emoji: "💝"
},
{
    term: "New Heavens and New Earth",
    definition: "The future renewal of all creation, free from sin and curse.",
    category: "Eschatology",
    references: ["2 Peter 3:13", "Revelation 21:1", "Isaiah 65:17"],
    emoji: "🌍"
},
{
    term: "New Life",
    definition: "The transformed existence believers experience through union with Christ.",
    category: "Spiritual Life",
    references: ["Romans 6:4", "Colossians 3:1-4", "2 Corinthians 5:15"],
    emoji: "🌱"
},
{
    term: "New Testament",
    definition: "The collection of 27 books recording Christ's life and the early church.",
    category: "Biblical Studies",
    references: ["2 Corinthians 3:6", "Hebrews 9:15", "Luke 22:20"],
    emoji: "📖"
},
{
    term: "Noah",
    definition: "The righteous man who built the ark and preserved life during the flood.",
    category: "Biblical Figures",
    references: ["Genesis 6:9", "Hebrews 11:7", "2 Peter 2:5"],
    emoji: "🚢"
},
{
    term: "Name of Jesus",
    definition: "The authority and power associated with Jesus, through which we pray and are saved.",
    category: "Theology",
    references: ["Acts 4:12", "Philippians 2:9-10", "John 14:13-14"],
    emoji: "🙏"
},
{
    term: "Nations",
    definition: "All people groups of the earth, whom God loves and includes in his salvation plan.",
    category: "Biblical Themes",
    references: ["Matthew 28:19", "Genesis 12:3", "Revelation 7:9"],
    emoji: "🌍"
},
{
    term: "Nativity",
    definition: "The birth of Jesus Christ in Bethlehem.",
    category: "Biblical Events",
    references: ["Luke 2:1-20", "Matthew 1:18-25", "Matthew 2:1-12"],
    emoji: "👶"
},
{
    term: "Nazirite",
    definition: "A person consecrated to God through a special vow of separation.",
    category: "Biblical Practices",
    references: ["Numbers 6:1-21", "Judges 13:5", "Acts 21:23-26"],
    emoji: "🙏"
},
{
    term: "Nazareth",
    definition: "The town where Jesus grew up, often viewed with contempt.",
    category: "Biblical Places",
    references: ["Matthew 2:23", "Luke 4:16", "John 1:46"],
    emoji: "🏘️"
},
{
    term: "Nehemiah",
    definition: "The cupbearer who became governor and led the rebuilding of Jerusalem's walls.",
    category: "Biblical Figures",
    references: ["Nehemiah 1:1-11", "Nehemiah 6:15-16", "Nehemiah 8:1-10"],
    emoji: "🏗️"
},
{
    term: "New Moon",
    definition: "A monthly festival in Israel's religious calendar.",
    category: "Biblical Practices",
    references: ["Numbers 28:11-15", "Colossians 2:16", "1 Samuel 20:5"],
    emoji: "🌙"
},
{
    term: "Nicodemus",
    definition: "A Pharisee who came to Jesus at night and later helped bury him.",
    category: "Biblical Figures",
    references: ["John 3:1-21", "John 7:50-52", "John 19:39-42"],
    emoji: "🌙"
},
{
    term: "Nineveh",
    definition: "The capital of Assyria that repented at Jonah's preaching.",
    category: "Biblical Places",
    references: ["Jonah 3:1-10", "Matthew 12:41", "Nahum 1:1"],
    emoji: "🏙️"
},
{
    term: "No Other Gods",
    definition: "The first commandment prohibiting idolatry and affirming God's exclusivity.",
    category: "Ethics",
    references: ["Exodus 20:3", "Deuteronomy 5:7", "Isaiah 45:5"],
    emoji: "👑"
},
{
    term: "Nurture",
    definition: "The spiritual care and training provided within the church community.",
    category: "Ecclesiology",
    references: ["Ephesians 6:4", "1 Thessalonians 2:7", "Titus 2:3-4"],
    emoji: "🌱"
},
{
    term: "Nakedness",
    definition: "Symbol of shame, vulnerability, or spiritual exposure before God.",
    category: "Biblical Imagery",
    references: ["Genesis 3:7", "Revelation 3:17", "2 Corinthians 5:3"],
    emoji: "👕"
},
{
    term: "Name",
    definition: "In biblical thought, representing a person's character, reputation, and authority.",
    category: "Biblical Themes",
    references: ["Proverbs 22:1", "Psalm 8:1", "Acts 4:12"],
    emoji: "🏷️"
},
{
    term: "Nard",
    definition: "An expensive perfume used to anoint Jesus before his death.",
    category: "Biblical Terms",
    references: ["John 12:3", "Mark 14:3", "Song of Solomon 1:12"],
    emoji: "💐"
},
{
    term: "Narrow Gate",
    definition: "Jesus' metaphor for the difficult path that leads to life.",
    category: "Biblical Imagery",
    references: ["Matthew 7:13-14", "Luke 13:24"],
    emoji: "🚪"
},
{
    term: "Nation",
    definition: "A people group with common identity, all under God's sovereignty.",
    category: "Biblical Themes",
    references: ["Acts 17:26", "Genesis 10:5", "Revelation 21:24"],
    emoji: "🏛️"
},
{
    term: "Natural Man",
    definition: "The unregenerate person without the Holy Spirit.",
    category: "Theology",
    references: ["1 Corinthians 2:14", "Romans 8:7-8", "Ephesians 2:3"],
    emoji: "👤"
},
{
    term: "Nave",
    definition: "The main part of a church building where the congregation gathers.",
    category: "Church Architecture",
    references: ["1 Kings 6:17", "Ezekiel 41:1"],
    emoji: "⛪"
},
{
    term: "Nazarene",
    definition: "A person from Nazareth, specifically Jesus and his followers.",
    category: "Biblical Terms",
    references: ["Matthew 2:23", "Acts 24:5"],
    emoji: "👨"
},
{
    term: "Necessity",
    definition: "Something required by God's will or moral law.",
    category: "Theology",
    references: ["Luke 24:26", "Acts 17:3", "1 Corinthians 9:16"],
    emoji: "🎯"
},
{
    term: "Needle's Eye",
    definition: "Jesus' hyperbole for the difficulty of the rich entering God's kingdom.",
    category: "Biblical Imagery",
    references: ["Matthew 19:24", "Mark 10:25", "Luke 18:25"],
    emoji: "🪡"
},
{
    term: "Neighbor",
    definition: "Anyone we encounter, whom we are commanded to love as ourselves.",
    category: "Ethics",
    references: ["Luke 10:29-37", "Romans 13:9-10", "Galatians 5:14"],
    emoji: "👥"
},
{
    term: "Nest",
    definition: "Metaphor for security, comfort, or a dwelling place.",
    category: "Biblical Imagery",
    references: ["Numbers 24:21", "Psalm 84:3", "Matthew 8:20"],
    emoji: "🐦"
},
{
    term: "Net",
    definition: "Fishing equipment used as metaphor for evangelism or judgment.",
    category: "Biblical Imagery",
    references: ["Matthew 4:19", "Matthew 13:47-50", "Luke 5:4-6"],
    emoji: "🕸️"
},
{
    term: "New Wine",
    definition: "Symbol of the fresh work of the Holy Spirit in the new covenant.",
    category: "Biblical Imagery",
    references: ["Matthew 9:17", "Mark 2:22", "Acts 2:13"],
    emoji: "🍷"
},
{
    term: "Night",
    definition: "Symbol of spiritual darkness, ignorance, or the time before Christ's return.",
    category: "Biblical Imagery",
    references: ["John 9:4", "Romans 13:12", "1 Thessalonians 5:2"],
    emoji: "🌙"
},
{
    term: "Nisan",
    definition: "The first month of the Jewish religious calendar when Passover occurred.",
    category: "Biblical Terms",
    references: ["Nehemiah 2:1", "Esther 3:7"],
    emoji: "📅"
},
{
    term: "Noahic Covenant",
    definition: "God's promise to never again destroy the earth with a flood.",
    category: "Theology",
    references: ["Genesis 9:8-17", "Isaiah 54:9"],
    emoji: "🌈"
},
{
    term: "Noble",
    definition: "A person of high character who receives God's word with readiness.",
    category: "Biblical Terms",
    references: ["Acts 17:11", "1 Corinthians 1:26", "Luke 19:12"],
    emoji: "👑"
},
{
    term: "Noise",
    definition: "Loud sound, sometimes associated with God's powerful presence.",
    category: "Biblical Imagery",
    references: ["Psalm 98:4", "1 Thessalonians 4:16", "Revelation 6:1"],
    emoji: "📢"
},
{
    term: "North",
    definition: "A direction often associated with God's dwelling or enemy invasion.",
    category: "Biblical Imagery",
    references: ["Psalm 48:2", "Jeremiah 1:14", "Ezekiel 1:4"],
    emoji: "🧭"
},
{
    term: "Nostrils",
    definition: "Metaphor for God's anger or the breath of life.",
    category: "Biblical Imagery",
    references: ["Genesis 2:7", "Exodus 15:8", "2 Samuel 22:16"],
    emoji: "👃"
},
{
    term: "Notebook",
    definition: "A written record, as of prophecies or God's remembrance.",
    category: "Biblical Terms",
    references: ["Malachi 3:16", "Revelation 20:12"],
    emoji: "📓"
},
{
    term: "Nothing",
    definition: "The state of having no value apart from God's grace.",
    category: "Spiritual Life",
    references: ["John 15:5", "2 Corinthians 12:11", "Philippians 3:8"],
    emoji: "🚫"
},
{
    term: "Nourishment",
    definition: "Spiritual food and growth provided through God's Word and fellowship.",
    category: "Spiritual Life",
    references: ["1 Timothy 4:6", "Acts 20:32", "1 Peter 2:2"],
    emoji: "🍞"
},
{
    term: "Novice",
    definition: "A new convert who should not be placed in leadership.",
    category: "Ministry",
    references: ["1 Timothy 3:6", "Titus 1:6-9"],
    emoji: "🌱"
},
{
    term: "Numbering",
    definition: "Counting people, sometimes done in pride and incurring God's judgment.",
    category: "Biblical Practices",
    references: ["2 Samuel 24:1", "1 Chronicles 21:1", "Revelation 7:4"],
    emoji: "🔢"
},
{
    term: "Nurse",
    definition: "Metaphor for gentle care and nurturing, as Paul did for new believers.",
    category: "Biblical Imagery",
    references: ["1 Thessalonians 2:7", "Numbers 11:12", "Ruth 4:16"],
    emoji: "👩‍🍼"
},
{
    term: "Nurturing",
    definition: "The process of caring for and encouraging spiritual growth.",
    category: "Ministry",
    references: ["Ephesians 4:12-13", "Colossians 1:28", "1 Thessalonians 2:11-12"],
    emoji: "💝"
},
{
    term: "Nut",
    definition: "Symbol of something valuable or delightful, as in the garden metaphor.",
    category: "Biblical Imagery",
    references: ["Song of Solomon 6:11", "Genesis 43:11"],
    emoji: "🌰"
},
{
    term: "New Adam",
    definition: "Jesus as the second Adam who succeeds where the first Adam failed.",
    category: "Theology",
    references: ["Romans 5:12-19", "1 Corinthians 15:45", "1 Corinthians 15:22"],
    emoji: "👨"
},
{
    term: "New Exodus",
    definition: "The spiritual deliverance from sin through Christ, paralleling Israel's exodus.",
    category: "Theology",
    references: ["Luke 9:31", "1 Corinthians 10:1-4", "Revelation 15:2-3"],
    emoji: "🚶"
},
{
    term: "New Israel",
    definition: "The church as the true people of God in the new covenant.",
    category: "Theology",
    references: ["Galatians 6:16", "Romans 9:6-8", "1 Peter 2:9-10"],
    emoji: "⛪"
},
{
    term: "New Moses",
    definition: "Jesus as the prophet like Moses who delivers God's people.",
    category: "Theology",
    references: ["Deuteronomy 18:15", "Acts 3:22", "John 6:14"],
    emoji: "📜"
},
{
    term: "New Song",
    definition: "A fresh expression of praise for God's saving acts.",
    category: "Worship",
    references: ["Psalm 96:1", "Revelation 5:9", "Psalm 40:3"],
    emoji: "🎵"
},
{
    term: "Nicanor",
    definition: "One of the seven deacons chosen to serve the early church.",
    category: "Biblical Figures",
    references: ["Acts 6:5"],
    emoji: "👨‍💼"
},
{
    term: "Nicene Creed",
    definition: "The historic statement of Christian belief formulated in AD 325.",
    category: "Church History",
    references: ["Matthew 28:19", "John 1:1-14", "1 Corinthians 15:3-4"],
    emoji: "📜"
},
{
    term: "Nicolaitans",
    definition: "A heretical group in the early church condemned in Revelation.",
    category: "Biblical Groups",
    references: ["Revelation 2:6", "Revelation 2:15"],
    emoji: "⚠️"
},
{
    term: "Night Watches",
    definition: "The divisions of the night for prayer and vigilance.",
    category: "Spiritual Disciplines",
    references: ["Psalm 63:6", "Psalm 119:148", "Luke 12:38"],
    emoji: "⏰"
},
{
    term: "Nimrod",
    definition: "A mighty hunter and kingdom builder who opposed God.",
    category: "Biblical Figures",
    references: ["Genesis 10:8-12", "1 Chronicles 1:10"],
    emoji: "🏹"
},
{
    term: "Nine Gifts",
    definition: "The spiritual gifts listed in 1 Corinthians 12:8-10.",
    category: "Spiritual Gifts",
    references: ["1 Corinthians 12:8-10", "1 Corinthians 12:28-30"],
    emoji: "🎁"
},
{
    term: "Nine Fruits",
    definition: "The fruit of the Spirit listed in Galatians 5:22-23.",
    category: "Spiritual Life",
    references: ["Galatians 5:22-23", "Ephesians 5:9"],
    emoji: "🍎"
},
{
    term: "No Condemnation",
    definition: "The believer's freedom from guilt and punishment because of Christ.",
    category: "Theology",
    references: ["Romans 8:1", "John 3:18", "John 5:24"],
    emoji: "⚖️"
},
{
    term: "No Other Name",
    definition: "The exclusivity of Jesus as the only way to salvation.",
    category: "Theology",
    references: ["Acts 4:12", "John 14:6", "1 Timothy 2:5"],
    emoji: "🙏"
},
{
    term: "Noah's Ark",
    definition: "The vessel God commanded Noah to build for salvation from the flood.",
    category: "Biblical Events",
    references: ["Genesis 6:14-22", "Hebrews 11:7", "1 Peter 3:20"],
    emoji: "🚢"
},
{
    term: "Noble Bereans",
    definition: "The believers who examined Scripture daily to test apostolic teaching.",
    category: "Biblical Figures",
    references: ["Acts 17:11"],
    emoji: "📖"
},
{
    term: "Nonconformity",
    definition: "Resisting the world's values and patterns to follow God's will.",
    category: "Spiritual Life",
    references: ["Romans 12:2", "1 Peter 1:14", "James 4:4"],
    emoji: "🚫"
},
{
    term: "North Country",
    definition: "A region often representing the source of judgment or blessing.",
    category: "Biblical Places",
    references: ["Jeremiah 3:18", "Zechariah 6:6", "Ezekiel 38:6"],
    emoji: "🏔️"
},
{
    term: "Not Ashamed",
    definition: "The bold confession of Christ despite potential rejection.",
    category: "Spiritual Life",
    references: ["Romans 1:16", "2 Timothy 1:8", "Mark 8:38"],
    emoji: "🗣️"
},
{
    term: "Not of This World",
    definition: "The spiritual nature and heavenly citizenship of believers.",
    category: "Spiritual Life",
    references: ["John 17:14", "John 18:36", "Philippians 3:20"],
    emoji: "🌍"
},
{
    term: "Not I But Christ",
    definition: "The exchanged life where Christ lives through the believer.",
    category: "Spiritual Life",
    references: ["Galatians 2:20", "Philippians 1:21", "Colossians 3:3-4"],
    emoji: "✝️"
},
{
    term: "Nothing Impossible",
    definition: "God's unlimited power to accomplish his purposes.",
    category: "Theology",
    references: ["Luke 1:37", "Matthew 19:26", "Jeremiah 32:17"],
    emoji: "💪"
},
{
    term: "Nourishing Words",
    definition: "Speech that builds up and strengthens others spiritually.",
    category: "Spiritual Life",
    references: ["Ephesians 4:29", "Colossians 4:6", "Proverbs 10:21"],
    emoji: "💬"
},
{
    term: "Novice Christian",
    definition: "A new believer who needs spiritual milk before solid food.",
    category: "Spiritual Life",
    references: ["1 Peter 2:2", "Hebrews 5:12-14", "1 Corinthians 3:1-2"],
    emoji: "🍼"
},
{
    term: "Number of the Beast",
    definition: "666, the number associated with the antichrist in Revelation.",
    category: "Eschatology",
    references: ["Revelation 13:18", "Revelation 15:2"],
    emoji: "6️⃣6️⃣6️⃣"
},
{
    term: "Nurture of the Church",
    definition: "The spiritual care and development provided within the body of Christ.",
    category: "Ecclesiology",
    references: ["Ephesians 4:11-16", "Colossians 2:19", "1 Thessalonians 2:7-8"],
    emoji: "⛪"
},
{
    term: "Nutrition",
    definition: "Spiritual feeding through God's Word and communion.",
    category: "Spiritual Life",
    references: ["Matthew 4:4", "John 6:35", "1 Corinthians 10:3-4"],
    emoji: "🍽️"
},
{
    term: "New Covenant Promise",
    definition: "God's commitment to write his law on hearts and forgive sins.",
    category: "Theology",
    references: ["Jeremiah 31:33-34", "Hebrews 10:16-17", "Ezekiel 36:26-27"],
    emoji: "💝"
},
{
    term: "New Creation Reality",
    definition: "The present experience of transformed life in Christ.",
    category: "Spiritual Life",
    references: ["2 Corinthians 5:17", "Galatians 2:20", "Romans 6:4"],
    emoji: "✨"
},
{
    term: "New Heaven and Earth",
    definition: "The future perfected creation where righteousness dwells.",
    category: "Eschatology",
    references: ["2 Peter 3:13", "Revelation 21:1", "Isaiah 65:17"],
    emoji: "🌟"
},
{
    term: "New Life in Christ",
    definition: "The regenerated existence believers enjoy through faith.",
    category: "Spiritual Life",
    references: ["Romans 6:4", "Colossians 3:1-4", "Ephesians 2:4-5"],
    emoji: "🌅"
},
{
    term: "New Living Way",
    definition: "The access to God opened through Christ's flesh.",
    category: "Theology",
    references: ["Hebrews 10:20", "John 14:6", "Ephesians 2:18"],
    emoji: "🛣️"
},
{
    term: "New Man",
    definition: "The renewed self created in God's likeness.",
    category: "Spiritual Life",
    references: ["Ephesians 4:24", "Colossians 3:10", "2 Corinthians 5:17"],
    emoji: "🆕"
},
{
    term: "New Nature",
    definition: "The divine nature imparted to believers at regeneration.",
    category: "Theology",
    references: ["2 Peter 1:4", "2 Corinthians 5:17", "Ephesians 4:24"],
    emoji: "💫"
},
{
    term: "New Spirit",
    definition: "The transformed inner being given by God in the new covenant.",
    category: "Theology",
    references: ["Ezekiel 36:26", "Romans 7:6", "2 Corinthians 3:6"],
    emoji: "🕊️"
},
{
    term: "New Wine Skins",
    definition: "Receptacles able to contain the fresh work of the Spirit.",
    category: "Biblical Imagery",
    references: ["Matthew 9:17", "Mark 2:22", "Luke 5:37-38"],
    emoji: "🍷"
},
{
    term: "Night of Betrayal",
    definition: "The evening when Jesus was arrested and Peter denied him.",
    category: "Biblical Events",
    references: ["Matthew 26:20-75", "John 13:21", "Luke 22:47-62"],
    emoji: "🌙"
},
{
    term: "Nisan Passover",
    definition: "The celebration of deliverance from Egypt, fulfilled in Christ.",
    category: "Biblical Events",
    references: ["Exodus 12:1-28", "Luke 22:7-20", "1 Corinthians 5:7"],
    emoji: "🐑"
},
{
    term: "No Graven Image",
    definition: "The prohibition against making idols to worship.",
    category: "Ethics",
    references: ["Exodus 20:4", "Deuteronomy 5:8", "Acts 17:29"],
    emoji: "🚫"
},
{
    term: "Noah's Descendants",
    definition: "The repopulation of the earth through Noah's three sons.",
    category: "Biblical Events",
    references: ["Genesis 9:18-19", "Genesis 10:1-32", "1 Chronicles 1:4-27"],
    emoji: "👨‍👩‍👧‍👦"
},
{
    term: "Noble Task",
    definition: "The high calling of church leadership and ministry.",
    category: "Ministry",
    references: ["1 Timothy 3:1", "1 Peter 5:2-4", "Acts 20:28"],
    emoji: "🎯"
},
{
    term: "Non-retaliation",
    definition: "The Christian principle of not repaying evil for evil.",
    category: "Ethics",
    references: ["Matthew 5:38-42", "Romans 12:17-21", "1 Peter 3:9"],
    emoji: "✌️"
},
{
    term: "North Wind",
    definition: "A cooling wind that can represent refreshment or adversity.",
    category: "Biblical Imagery",
    references: ["Song of Solomon 4:16", "Job 37:22", "Proverbs 25:23"],
    emoji: "💨"
},
{
    term: "Not My Will",
    definition: "Jesus' submission to the Father's plan in Gethsemane.",
    category: "Spiritual Life",
    references: ["Matthew 26:39", "Luke 22:42", "John 6:38"],
    emoji: "🙏"
},
{
    term: "Not Under Law",
    definition: "The believer's freedom from the law's condemnation.",
    category: "Theology",
    references: ["Romans 6:14", "Galatians 5:18", "Romans 7:6"],
    emoji: "⚖️"
},
{
    term: "Nothing Too Hard",
    definition: "God's unlimited ability to fulfill his promises.",
    category: "Theology",
    references: ["Jeremiah 32:17", "Genesis 18:14", "Luke 1:37"],
    emoji: "💪"
},
{
    term: "Nourishment of Faith",
    definition: "The means God uses to strengthen and grow believers' trust.",
    category: "Spiritual Life",
    references: ["Romans 10:17", "Jude 1:20", "Acts 20:32"],
    emoji: "🌱"
},
{
    term: "Numbering Our Days",
    definition: "Living with awareness of life's brevity and eternity's reality.",
    category: "Spiritual Life",
    references: ["Psalm 90:12", "James 4:14", "Ephesians 5:15-16"],
    emoji: "📅"
},
{
    term: "Nurturing Faith",
    definition: "Cultivating and developing trust in God through spiritual practices.",
    category: "Spiritual Life",
    references: ["Jude 1:20-21", "2 Peter 1:5-8", "Colossians 2:6-7"],
    emoji: "💝"
},
{
    term: "Mercy",
    definition: "God's compassionate treatment of those in distress, withholding the punishment they deserve.",
    category: "Theology",
    references: ["Ephesians 2:4-5", "Titus 3:5", "Psalm 103:8-14"],
    emoji: "💝"
},
{
    term: "Messiah",
    definition: "The anointed one promised in the Old Testament, fulfilled in Jesus Christ.",
    category: "Theology",
    references: ["John 1:41", "Matthew 16:16", "Acts 2:36"],
    emoji: "👑"
},
{
    term: "Ministry",
    definition: "Service to God and others, empowered by spiritual gifts for building up the church.",
    category: "Ministry",
    references: ["Ephesians 4:12", "2 Corinthians 5:18", "1 Peter 4:10"],
    emoji: "🤝"
},
{
    term: "Miracles",
    definition: "Supernatural acts that demonstrate God's power and authenticate his message.",
    category: "Spiritual Gifts",
    references: ["Acts 2:22", "1 Corinthians 12:10", "John 20:30-31"],
    emoji: "✨"
},
{
    term: "Mission",
    definition: "The God-given purpose of spreading the gospel and making disciples worldwide.",
    category: "Evangelism",
    references: ["Matthew 28:19-20", "Acts 1:8", "Matthew 24:14"],
    emoji: "🌍"
},
{
    term: "Mediator",
    definition: "One who reconciles opposing parties, specifically Christ between God and humanity.",
    category: "Theology",
    references: ["1 Timothy 2:5", "Hebrews 9:15", "Hebrews 12:24"],
    emoji: "🤝"
},
{
    term: "Meditation",
    definition: "Focused reflection on God's Word and character for spiritual growth.",
    category: "Spiritual Disciplines",
    references: ["Psalm 1:2", "Joshua 1:8", "Psalm 119:15"],
    emoji: "🧠"
},
{
    term: "Meekness",
    definition: "Strength under control, humility and gentleness empowered by the Spirit.",
    category: "Virtues",
    references: ["Matthew 5:5", "Galatians 5:23", "Numbers 12:3"],
    emoji: "🕊️"
},
{
    term: "Millennium",
    definition: "The thousand-year reign of Christ mentioned in Revelation 20.",
    category: "Eschatology",
    references: ["Revelation 20:2-7", "Revelation 20:4-6"],
    emoji: "⏳"
},
{
    term: "Manna",
    definition: "The bread from heaven God provided for Israel in the wilderness, pointing to Christ.",
    category: "Biblical Miracles",
    references: ["Exodus 16:4", "John 6:31-35", "Revelation 2:17"],
    emoji: "🍞"
},
{
    term: "Marriage",
    definition: "The covenant union between one man and one woman, reflecting Christ and the Church.",
    category: "Ethics",
    references: ["Genesis 2:24", "Ephesians 5:31-32", "Matthew 19:4-6"],
    emoji: "💍"
},
{
    term: "Martyr",
    definition: "One who witnesses to Christ through suffering and death for their faith.",
    category: "Spiritual Life",
    references: ["Acts 22:20", "Revelation 2:13", "Revelation 6:9"],
    emoji: "🎯"
},
{
    term: "Master",
    definition: "Title for Jesus as Lord and ruler over believers' lives.",
    category: "Theology",
    references: ["Matthew 23:8", "John 13:13", "Colossians 4:1"],
    emoji: "👑"
},
{
    term: "Maturity",
    definition: "Spiritual growth and development into Christlike character.",
    category: "Spiritual Life",
    references: ["Ephesians 4:13", "Colossians 1:28", "Hebrews 5:14"],
    emoji: "🌳"
},
{
    term: "Meditation on Scripture",
    definition: "The practice of deeply reflecting on and internalizing God's Word.",
    category: "Spiritual Disciplines",
    references: ["Psalm 1:2", "Psalm 119:97", "Joshua 1:8"],
    emoji: "📖"
},
{
    term: "Meekness of Moses",
    definition: "The humility and gentleness that characterized Moses' leadership.",
    category: "Virtues",
    references: ["Numbers 12:3", "Hebrews 11:24-27"],
    emoji: "🙏"
},
{
    term: "Melchizedek",
    definition: "The mysterious priest-king who prefigured Christ's eternal priesthood.",
    category: "Biblical Figures",
    references: ["Genesis 14:18-20", "Psalm 110:4", "Hebrews 7:1-17"],
    emoji: "👑"
},
{
    term: "Memorial",
    definition: "Something that serves to remember God's acts and promises.",
    category: "Biblical Practices",
    references: ["Exodus 12:14", "Joshua 4:7", "Luke 22:19"],
    emoji: "🪦"
},
{
    term: "Mercy Seat",
    definition: "The golden cover of the ark where God's presence dwelt and atonement was made.",
    category: "Biblical Terms",
    references: ["Exodus 25:17-22", "Leviticus 16:14-15", "Hebrews 9:5"],
    emoji: "🪑"
},
{
    term: "Messianic Prophecy",
    definition: "Old Testament predictions fulfilled in Jesus Christ.",
    category: "Biblical Studies",
    references: ["Isaiah 53:1-12", "Micah 5:2", "Psalm 22:1-18"],
    emoji: "🔮"
},
{
    term: "Metanoia",
    definition: "Greek word for repentance, meaning a change of mind and direction.",
    category: "Theology",
    references: ["Matthew 3:8", "Acts 26:20", "2 Corinthians 7:10"],
    emoji: "🔄"
},
{
    term: "Michael",
    definition: "The archangel who contends with Satan and defends God's people.",
    category: "Biblical Figures",
    references: ["Daniel 12:1", "Jude 1:9", "Revelation 12:7"],
    emoji: "⚔️"
},
{
    term: "Midian",
    definition: "A desert region and people group, from which Moses' wife came.",
    category: "Biblical Places",
    references: ["Exodus 2:15", "Judges 6:1", "Exodus 3:1"],
    emoji: "🏜️"
},
{
    term: "Mighty God",
    definition: "A title for the Messiah emphasizing his divine power.",
    category: "Theology",
    references: ["Isaiah 9:6", "Isaiah 10:21", "Jeremiah 32:18"],
    emoji: "💪"
},
{
    term: "Milk of the Word",
    definition: "Basic spiritual teaching for new believers.",
    category: "Spiritual Life",
    references: ["1 Peter 2:2", "1 Corinthians 3:2", "Hebrews 5:12-13"],
    emoji: "🍼"
},
{
    term: "Millstone",
    definition: "A heavy stone used for grinding grain, metaphor for causing others to sin.",
    category: "Biblical Imagery",
    references: ["Matthew 18:6", "Mark 9:42", "Luke 17:2"],
    emoji: "⚫"
},
{
    term: "Mind of Christ",
    definition: "Having the same attitudes, thoughts, and perspectives as Jesus.",
    category: "Spiritual Life",
    references: ["1 Corinthians 2:16", "Philippians 2:5", "Romans 12:2"],
    emoji: "🧠"
},
{
    term: "Minister",
    definition: "One who serves God and others in various capacities.",
    category: "Ministry",
    references: ["Romans 15:16", "2 Corinthians 3:6", "Ephesians 3:7"],
    emoji: "🙏"
},
{
    term: "Ministry of Reconciliation",
    definition: "The calling to help restore people to relationship with God.",
    category: "Ministry",
    references: ["2 Corinthians 5:18", "2 Corinthians 5:20", "Ephesians 2:16"],
    emoji: "🤝"
},
{
    term: "Miracle Worker",
    definition: "One through whom God performs supernatural acts.",
    category: "Ministry",
    references: ["Acts 2:22", "Acts 6:8", "2 Corinthians 12:12"],
    emoji: "✨"
},
{
    term: "Mirror",
    definition: "Metaphor for Scripture that reveals our true spiritual condition.",
    category: "Biblical Imagery",
    references: ["James 1:23-25", "1 Corinthians 13:12", "2 Corinthians 3:18"],
    emoji: "🪞"
},
{
    term: "Missions",
    definition: "The organized effort to spread the gospel across cultural boundaries.",
    category: "Evangelism",
    references: ["Matthew 28:19", "Romans 10:14-15", "Acts 13:2-3"],
    emoji: "✈️"
},
{
    term: "Mite",
    definition: "A small coin, representing the widow's sacrificial giving.",
    category: "Biblical Terms",
    references: ["Mark 12:42", "Luke 21:2"],
    emoji: "🪙"
},
{
    term: "Moab",
    definition: "A nation east of the Dead Sea, often in conflict with Israel.",
    category: "Biblical Places",
    references: ["Numbers 22:1", "Ruth 1:1", "2 Kings 3:4"],
    emoji: "🏞️"
},
{
    term: "Mocking",
    definition: "Ridiculing or scornful treatment, often directed at God's messengers.",
    category: "Sin",
    references: ["2 Chronicles 36:16", "Matthew 27:29", "Galatians 6:7"],
    emoji: "😏"
},
{
    term: "Moderation",
    definition: "Self-control and balance in all things, a fruit of the Spirit.",
    category: "Virtues",
    references: ["Philippians 4:5", "Titus 2:2", "1 Timothy 3:2"],
    emoji: "⚖️"
},
{
    term: "Molten Sea",
    definition: "The large bronze basin in Solomon's temple for priestly cleansing.",
    category: "Biblical Terms",
    references: ["1 Kings 7:23-26", "2 Chronicles 4:2-5"],
    emoji: "🌊"
},
{
    term: "Monotheism",
    definition: "The belief in one God, foundational to biblical faith.",
    category: "Theology",
    references: ["Deuteronomy 6:4", "Isaiah 44:6", "1 Corinthians 8:4"],
    emoji: "1️⃣"
},
{
    term: "Month",
    definition: "A unit of time marked by new moons in the biblical calendar.",
    category: "Biblical Terms",
    references: ["Numbers 10:10", "1 Chronicles 23:31", "Colossians 2:16"],
    emoji: "📅"
},
{
    term: "Monument",
    definition: "A stone or structure set up to remember God's faithfulness.",
    category: "Biblical Practices",
    references: ["Genesis 28:18", "Joshua 4:1-9", "1 Samuel 7:12"],
    emoji: "🗿"
},
{
    term: "Moral Law",
    definition: "God's eternal standards of right and wrong.",
    category: "Theology",
    references: ["Romans 2:14-15", "Psalm 19:7-9", "Matthew 5:17-20"],
    emoji: "⚖️"
},
{
    term: "Moreh",
    definition: "A place where God appeared to Abraham and where Gideon encountered God.",
    category: "Biblical Places",
    references: ["Genesis 12:6", "Judges 7:1"],
    emoji: "🌳"
},
{
    term: "Moriah",
    definition: "The mountain where Abraham offered Isaac and Solomon built the temple.",
    category: "Biblical Places",
    references: ["Genesis 22:2", "2 Chronicles 3:1"],
    emoji: "⛰️"
},
{
    term: "Morning Star",
    definition: "A title for Christ, symbolizing hope and coming glory.",
    category: "Theology",
    references: ["Revelation 22:16", "2 Peter 1:19", "Numbers 24:17"],
    emoji: "⭐"
},
{
    term: "Mortal",
    definition: "Subject to physical death because of sin.",
    category: "Theology",
    references: ["Romans 6:12", "1 Corinthians 15:53", "2 Corinthians 4:11"],
    emoji: "💀"
},
{
    term: "Mortification",
    definition: "The putting to death of sinful desires and habits.",
    category: "Spiritual Life",
    references: ["Romans 8:13", "Colossians 3:5", "Galatians 5:24"],
    emoji: "⚰️"
},
{
    term: "Mosaic Law",
    definition: "The system of commandments given through Moses to Israel.",
    category: "Theology",
    references: ["John 1:17", "Romans 10:5", "2 Corinthians 3:7"],
    emoji: "📜"
},
{
    term: "Moses",
    definition: "The prophet who led Israel out of Egypt and received the law from God.",
    category: "Biblical Figures",
    references: ["Exodus 3:1-10", "Deuteronomy 34:10-12", "Hebrews 11:23-29"],
    emoji: "📜"
},
{
    term: "Most High",
    definition: "A title for God emphasizing his supreme authority.",
    category: "Theology",
    references: ["Genesis 14:18", "Psalm 91:1", "Luke 1:32"],
    emoji: "👑"
},
{
    term: "Motives",
    definition: "The inner reasons and intentions behind actions, which God examines.",
    category: "Spiritual Life",
    references: ["1 Corinthians 4:5", "Proverbs 16:2", "Jeremiah 17:10"],
    emoji: "💭"
},
{
    term: "Mount of Olives",
    definition: "The ridge east of Jerusalem where Jesus prayed and ascended to heaven.",
    category: "Biblical Places",
    references: ["Matthew 24:3", "Luke 22:39", "Acts 1:12"],
    emoji: "⛰️"
},
{
    term: "Mountain of God",
    definition: "A place of divine encounter and revelation.",
    category: "Biblical Places",
    references: ["Exodus 3:1", "1 Kings 19:8", "Ezekiel 28:14"],
    emoji: "🏔️"
},
{
    term: "Mourning",
    definition: "Expression of grief over sin, loss, or suffering.",
    category: "Spiritual Life",
    references: ["Matthew 5:4", "James 4:9", "Psalm 30:5"],
    emoji: "😢"
},
{
    term: "Mouth",
    definition: "The organ of speech, which should be used to bless and not curse.",
    category: "Spiritual Life",
    references: ["Psalm 19:14", "Matthew 15:11", "Romans 10:9"],
    emoji: "👄"
},
{
    term: "Multiply",
    definition: "God's command and blessing to be fruitful and increase.",
    category: "Biblical Themes",
    references: ["Genesis 1:28", "Genesis 9:1", "Acts 6:7"],
    emoji: "📈"
},
{
    term: "Murmur",
    definition: "Complaining against God or his leaders, a serious sin in Scripture.",
    category: "Sin",
    references: ["1 Corinthians 10:10", "Philippians 2:14", "Exodus 16:2"],
    emoji: "🗣️"
},
{
    term: "Musician",
    definition: "One who leads in worship through instrumental or vocal music.",
    category: "Worship",
    references: ["1 Chronicles 15:16", "Psalm 150:3-5", "2 Chronicles 5:13"],
    emoji: "🎵"
},
{
    term: "Mustard Seed",
    definition: "Jesus' metaphor for the small beginnings of God's kingdom.",
    category: "Biblical Imagery",
    references: ["Matthew 13:31-32", "Matthew 17:20", "Luke 13:19"],
    emoji: "🌱"
},
{
    term: "Mutual Edification",
    definition: "The building up of one another in the body of Christ.",
    category: "Ecclesiology",
    references: ["Romans 14:19", "1 Thessalonians 5:11", "Ephesians 4:16"],
    emoji: "👥"
},
{
    term: "Myrrh",
    definition: "A fragrant resin used for anointing, burial, and as a gift to Jesus.",
    category: "Biblical Terms",
    references: ["Matthew 2:11", "John 19:39", "Psalm 45:8"],
    emoji: "🌿"
},
{
    term: "Mystery",
    definition: "A truth previously hidden but now revealed by God, especially in Christ.",
    category: "Theology",
    references: ["Ephesians 3:3-6", "Colossians 1:26-27", "Romans 16:25"],
    emoji: "🔮"
},
{
    term: "Myth",
    definition: "Humanly devised stories contrasted with God's true revelation.",
    category: "Theology",
    references: ["1 Timothy 1:4", "2 Peter 1:16", "1 Timothy 4:7"],
    emoji: "📖"
},
{
    term: "Maccabees",
    definition: "Jewish freedom fighters who revolted against Syrian oppression.",
    category: "Biblical History",
    references: ["Historical period between Old and New Testaments"],
    emoji: "⚔️"
},
{
    term: "Magistrate",
    definition: "A civil official or ruler with governing authority.",
    category: "Biblical Terms",
    references: ["Luke 12:11", "Acts 16:20", "Romans 13:3"],
    emoji: "⚖️"
},
{
    term: "Magnificat",
    definition: "Mary's song of praise when she learned she would bear the Messiah.",
    category: "Biblical Prayers",
    references: ["Luke 1:46-55"],
    emoji: "🎵"
},
{
    term: "Majesty",
    definition: "The greatness and splendor of God's royal dignity.",
    category: "Theology",
    references: ["Hebrews 1:3", "Jude 1:25", "Psalm 93:1"],
    emoji: "👑"
},
{
    term: "Malachi",
    definition: "The last Old Testament prophet who called for covenant faithfulness.",
    category: "Biblical Figures",
    references: ["Malachi 1:1", "Malachi 4:5-6", "Matthew 11:10"],
    emoji: "📢"
},
{
    term: "Malice",
    definition: "Ill will and desire to harm others, which believers must put away.",
    category: "Sin",
    references: ["1 Peter 2:1", "Ephesians 4:31", "Colossians 3:8"],
    emoji: "😈"
},
{
    term: "Mammon",
    definition: "Aramaic term for wealth or material possessions that can rival God.",
    category: "Biblical Terms",
    references: ["Matthew 6:24", "Luke 16:9", "Luke 16:13"],
    emoji: "💰"
},
{
    term: "Man of God",
    definition: "A person devoted to serving and representing God.",
    category: "Biblical Terms",
    references: ["1 Timothy 6:11", "2 Timothy 3:17", "Deuteronomy 33:1"],
    emoji: "🙏"
},
{
    term: "Man of Sorrows",
    definition: "Prophetic description of the suffering Messiah.",
    category: "Theology",
    references: ["Isaiah 53:3", "Matthew 26:38", "Hebrews 4:15"],
    emoji: "😔"
},
{
    term: "Manger",
    definition: "The feeding trough where Mary laid the newborn Jesus.",
    category: "Biblical Terms",
    references: ["Luke 2:7", "Luke 2:12", "Luke 2:16"],
    emoji: "🐎"
},
{
    term: "Manna from Heaven",
    definition: "The supernatural food God provided Israel in the wilderness.",
    category: "Biblical Miracles",
    references: ["Exodus 16:4", "Psalm 78:24", "John 6:31"],
    emoji: "🍞"
},
{
    term: "Maranatha",
    definition: "An Aramaic expression meaning 'Our Lord, come!'",
    category: "Worship",
    references: ["1 Corinthians 16:22", "Revelation 22:20"],
    emoji: "🙏"
},
{
    term: "Mark of the Beast",
    definition: "The symbol of allegiance to the antichrist in the end times.",
    category: "Eschatology",
    references: ["Revelation 13:16-17", "Revelation 14:9-11"],
    emoji: "🐾"
},
{
    term: "Marketplace",
    definition: "The public square where business and social interaction occurred.",
    category: "Biblical Terms",
    references: ["Matthew 20:3", "Acts 17:17", "1 Corinthians 10:25"],
    emoji: "🏪"
},
{
    term: "Martha",
    definition: "The sister of Mary and Lazarus, known for her service and worry.",
    category: "Biblical Figures",
    references: ["Luke 10:38-42", "John 11:1-44", "John 12:2"],
    emoji: "👩‍🍳"
},
{
    term: "Martyrdom",
    definition: "The ultimate witness of dying for faith in Christ.",
    category: "Spiritual Life",
    references: ["Acts 7:54-60", "Revelation 2:13", "Matthew 10:39"],
    emoji: "🎯"
},
{
    term: "Mary Magdalene",
    definition: "A follower of Jesus delivered from demons, first witness of his resurrection.",
    category: "Biblical Figures",
    references: ["Luke 8:2", "John 20:1-18", "Mark 16:9"],
    emoji: "👩"
},
{
    term: "Mary of Bethany",
    definition: "The sister of Martha and Lazarus who anointed Jesus with perfume.",
    category: "Biblical Figures",
    references: ["Luke 10:39", "John 11:1", "John 12:3"],
    emoji: "💐"
},
{
    term: "Master Builder",
    definition: "Metaphor for God as the architect of his church and kingdom.",
    category: "Biblical Imagery",
    references: ["1 Corinthians 3:10", "Hebrews 11:10", "Psalm 127:1"],
    emoji: "🏗️"
},
{
    term: "Materialism",
    definition: "The love of possessions that can choke spiritual life.",
    category: "Sin",
    references: ["1 Timothy 6:10", "Matthew 6:19-21", "Luke 12:15"],
    emoji: "💰"
},
{
    term: "Matthias",
    definition: "The apostle chosen to replace Judas Iscariot.",
    category: "Biblical Figures",
    references: ["Acts 1:23-26"],
    emoji: "👨‍💼"
},
{
    term: "Maturity in Christ",
    definition: "The goal of spiritual growth into full Christlikeness.",
    category: "Spiritual Life",
    references: ["Ephesians 4:13", "Colossians 1:28", "Hebrews 6:1"],
    emoji: "🎯"
},
{
    term: "Mediator of New Covenant",
    definition: "Jesus as the one who established the better covenant in his blood.",
    category: "Theology",
    references: ["Hebrews 9:15", "Hebrews 12:24", "1 Timothy 2:5"],
    emoji: "🤝"
},
{
    term: "Mediterranean Sea",
    definition: "The Great Sea that formed the western boundary of biblical lands.",
    category: "Biblical Places",
    references: ["Numbers 34:6", "Joshua 15:12", "Acts 10:6"],
    emoji: "🌊"
},
{
    term: "Megiddo",
    definition: "An ancient city where many battles occurred, giving name to Armageddon.",
    category: "Biblical Places",
    references: ["Judges 5:19", "2 Kings 23:29", "Revelation 16:16"],
    emoji: "⚔️"
},
{
    term: "Melchizedek Priesthood",
    definition: "The eternal priesthood of Christ, superior to Aaron's.",
    category: "Theology",
    references: ["Hebrews 7:1-28", "Psalm 110:4"],
    emoji: "👑"
},
{
    term: "Memphis",
    definition: "An ancient capital of Egypt mentioned in prophecy.",
    category: "Biblical Places",
    references: ["Hosea 9:6", "Isaiah 19:13", "Jeremiah 2:16"],
    emoji: "🏛️"
},
{
    term: "Mene Mene Tekel Upharsin",
    definition: "The mysterious writing that announced Babylon's fall.",
    category: "Biblical Events",
    references: ["Daniel 5:25-28"],
    emoji: "✍️"
},
{
    term: "Mercy and Truth",
    definition: "Two key attributes of God that meet in Christ.",
    category: "Theology",
    references: ["Psalm 85:10", "John 1:14", "Psalm 25:10"],
    emoji: "⚖️"
},
{
    term: "Mesopotamia",
    definition: "The region between the Tigris and Euphrates rivers, including Babylon.",
    category: "Biblical Places",
    references: ["Genesis 24:10", "Acts 2:9", "Acts 7:2"],
    emoji: "🏞️"
},
{
    term: "Messianic Age",
    definition: "The era of salvation and blessing brought by the Messiah.",
    category: "Theology",
    references: ["Isaiah 11:1-9", "Isaiah 65:17-25", "Luke 4:18-21"],
    emoji: "👑"
},
{
    term: "Metaphor",
    definition: "A figure of speech Jesus used extensively in his teaching.",
    category: "Biblical Teaching",
    references: ["John 10:7", "John 15:1", "Matthew 5:13"],
    emoji: "🖼️"
},
{
    term: "Michael the Archangel",
    definition: "The chief angel who contends with Satan for God's people.",
    category: "Biblical Figures",
    references: ["Daniel 10:13", "Jude 1:9", "Revelation 12:7"],
    emoji: "🛡️"
},
{
    term: "Middle Wall of Partition",
    definition: "The barrier between Jews and Gentiles broken down in Christ.",
    category: "Biblical Imagery",
    references: ["Ephesians 2:14", "Acts 10:28", "Galatians 3:28"],
    emoji: "🧱"
},
{
    term: "Midianites",
    definition: "A nomadic people from whom Moses' wife came, often opposed to Israel.",
    category: "Biblical Groups",
    references: ["Exodus 2:15", "Judges 6:1", "Genesis 37:28"],
    emoji: "🐪"
},
{
    term: "Mightily",
    definition: "The powerful way God works through his servants.",
    category: "Ministry",
    references: ["Acts 19:20", "Colossians 1:29", "Ephesians 1:19"],
    emoji: "💪"
},
{
    term: "Milk vs Meat",
    definition: "The distinction between basic and advanced spiritual teaching.",
    category: "Spiritual Life",
    references: ["1 Corinthians 3:2", "Hebrews 5:12-14", "1 Peter 2:2"],
    emoji: "🍖"
},
{
    term: "Millstone Around Neck",
    definition: "Jesus' vivid warning against causing spiritual harm to others.",
    category: "Biblical Imagery",
    references: ["Matthew 18:6", "Mark 9:42", "Luke 17:2"],
    emoji: "⛓️"
},
{
    term: "Mind Renewal",
    definition: "The transformation of thinking patterns by God's Word and Spirit.",
    category: "Spiritual Life",
    references: ["Romans 12:2", "Ephesians 4:23", "Colossians 3:10"],
    emoji: "🔄"
},
{
    term: "Minister of the Gospel",
    definition: "One commissioned to preach the good news of Christ.",
    category: "Ministry",
    references: ["Ephesians 3:7", "Colossians 1:23", "1 Timothy 4:6"],
    emoji: "📢"
},
{
    term: "Ministry Gifts",
    definition: "The leadership roles Christ gave to build up his church.",
    category: "Ministry",
    references: ["Ephesians 4:11-12", "Romans 12:6-8", "1 Corinthians 12:28"],
    emoji: "🎁"
},
{
    term: "Miracle of Healing",
    definition: "Supernatural restoration of health as a sign of God's kingdom.",
    category: "Spiritual Gifts",
    references: ["Matthew 4:23", "Acts 3:1-10", "James 5:14-15"],
    emoji: "❤️‍🩹"
},
{
    term: "Mirror of God's Word",
    definition: "Scripture as revealing our true spiritual condition.",
    category: "Biblical Imagery",
    references: ["James 1:23-25", "2 Corinthians 3:18", "Psalm 119:105"],
    emoji: "🪞"
},
{
    term: "Mission Field",
    definition: "Any context where the gospel needs to be proclaimed.",
    category: "Evangelism",
    references: ["Matthew 9:37-38", "John 4:35", "Acts 1:8"],
    emoji: "🌾"
},
{
    term: "Mite Offering",
    definition: "The widow's small but sacrificial gift that Jesus commended.",
    category: "Biblical Events",
    references: ["Mark 12:41-44", "Luke 21:1-4"],
    emoji: "💝"
},
{
    term: "Moabite Stone",
    definition: "An archaeological artifact confirming biblical history.",
    category: "Biblical Archaeology",
    references: ["2 Kings 3:4-27"],
    emoji: "🗿"
},
{
    term: "Mocking of Christ",
    definition: "The cruel ridicule Jesus endured during his trial and crucifixion.",
    category: "Biblical Events",
    references: ["Matthew 27:27-31", "Luke 23:11", "Mark 15:16-20"],
    emoji: "😔"
},
{
    term: "Model Prayer",
    definition: "The Lord's Prayer as a pattern for all prayer.",
    category: "Spiritual Disciplines",
    references: ["Matthew 6:9-13", "Luke 11:2-4"],
    emoji: "🙏"
},
{
    term: "Modernism",
    definition: "A theological movement that often compromises biblical authority.",
    category: "Theology",
    references: ["2 Timothy 4:3-4", "1 Timothy 6:20", "Jude 1:3"],
    emoji: "⚠️"
},
{
    term: "Moloch",
    definition: "A pagan god to whom children were sacrificed, strictly forbidden.",
    category: "Biblical Idolatry",
    references: ["Leviticus 18:21", "2 Kings 23:10", "Jeremiah 32:35"],
    emoji: "🔥"
},
{
    term: "Monastery",
    definition: "A community dedicated to prayer, study, and spiritual discipline.",
    category: "Church History",
    references: ["Historical development after biblical period"],
    emoji: "⛪"
},
{
    term: "Money Changers",
    definition: "Those Jesus drove from the temple for corrupting worship.",
    category: "Biblical Events",
    references: ["Matthew 21:12", "John 2:14-16", "Mark 11:15"],
    emoji: "💱"
},
{
    term: "Month of Abib",
    definition: "The first month of the Jewish religious calendar when Passover occurred.",
    category: "Biblical Terms",
    references: ["Exodus 13:4", "Exodus 23:15", "Deuteronomy 16:1"],
    emoji: "📅"
},
{
    term: "Monument Stones",
    definition: "Stones set up to commemorate God's mighty acts.",
    category: "Biblical Practices",
    references: ["Joshua 4:1-9", "1 Samuel 7:12", "Genesis 28:18"],
    emoji: "🗿"
},
{
    term: "Moral Absolutes",
    definition: "God's unchanging standards of right and wrong.",
    category: "Ethics",
    references: ["Psalm 119:160", "Malachi 3:6", "James 1:17"],
    emoji: "🎯"
},
{
    term: "More Than Conquerors",
    definition: "Believers' position of overwhelming victory in Christ.",
    category: "Spiritual Life",
    references: ["Romans 8:37", "1 Corinthians 15:57", "2 Corinthians 2:14"],
    emoji: "🏆"
},
{
    term: "Moriah's Sacrifice",
    definition: "Abraham's offering of Isaac that prefigured Christ's sacrifice.",
    category: "Biblical Events",
    references: ["Genesis 22:1-19", "Hebrews 11:17-19"],
    emoji: "🐑"
},
{
    term: "Morning Sacrifice",
    definition: "The daily offering in the temple, pointing to Christ.",
    category: "Biblical Practices",
    references: ["Exodus 29:38-42", "Numbers 28:3-8", "Hebrews 10:11-12"],
    emoji: "🌅"
},
{
    term: "Mortal Body",
    definition: "Our physical bodies subject to death because of sin.",
    category: "Theology",
    references: ["Romans 8:11", "1 Corinthians 15:53", "2 Corinthians 5:1"],
    emoji: "💀"
},
{
    term: "Mortify the Flesh",
    definition: "The spiritual discipline of putting sinful desires to death.",
    category: "Spiritual Life",
    references: ["Romans 8:13", "Colossians 3:5", "Galatians 5:24"],
    emoji: "⚰️"
},
{
    term: "Mosaic Covenant",
    definition: "The agreement God made with Israel through Moses at Sinai.",
    category: "Theology",
    references: ["Exodus 19:5-8", "Exodus 24:3-8", "Deuteronomy 5:2-3"],
    emoji: "📜"
},
{
    term: "Moses' Intercession",
    definition: "Moses pleading with God to spare rebellious Israel.",
    category: "Biblical Events",
    references: ["Exodus 32:11-14", "Numbers 14:13-20", "Psalm 106:23"],
    emoji: "🙏"
},
{
    term: "Most Holy Place",
    definition: "The innermost sanctuary of the tabernacle and temple.",
    category: "Biblical Terms",
    references: ["Exodus 26:33", "Hebrews 9:3", "1 Kings 6:16"],
    emoji: "⛪"
},
{
    term: "Motivation",
    definition: "The inner drives that should be purified for God's glory.",
    category: "Spiritual Life",
    references: ["1 Corinthians 10:31", "Colossians 3:17", "1 Peter 4:11"],
    emoji: "💡"
},
{
    term: "Mount Carmel",
    definition: "Where Elijah confronted the prophets of Baal with fire from heaven.",
    category: "Biblical Places",
    references: ["1 Kings 18:19-40", "2 Kings 2:25", "2 Kings 4:25"],
    emoji: "⛰️"
},
{
    term: "Mount Sinai",
    definition: "The mountain where God gave the law to Moses.",
    category: "Biblical Places",
    references: ["Exodus 19:1-25", "Exodus 31:18", "Galatians 4:24-25"],
    emoji: "🏔️"
},
{
    term: "Mountain Moving Faith",
    definition: "The kind of trust that can overcome impossible obstacles.",
    category: "Faith",
    references: ["Matthew 17:20", "Matthew 21:21", "Mark 11:23"],
    emoji: "⛰️"
},
{
    term: "Mourning for Sin",
    definition: "Genuine sorrow over disobedience that leads to repentance.",
    category: "Spiritual Life",
    references: ["2 Corinthians 7:10", "James 4:9", "Psalm 51:17"],
    emoji: "😔"
},
{
    term: "Mouth of Babes",
    definition: "God using the simple and weak to confound the wise.",
    category: "Biblical Imagery",
    references: ["Matthew 21:16", "Psalm 8:2", "1 Corinthians 1:27"],
    emoji: "👶"
},
{
    term: "Multiplication of Loaves",
    definition: "Jesus' miracle of feeding thousands with limited resources.",
    category: "Biblical Miracles",
    references: ["Matthew 14:13-21", "Matthew 15:32-39", "John 6:1-14"],
    emoji: "🍞"
},
{
    term: "Murmuring in the Wilderness",
    definition: "Israel's complaining that demonstrated lack of faith in God.",
    category: "Biblical Events",
    references: ["Exodus 16:2", "Numbers 14:27", "1 Corinthians 10:10"],
    emoji: "🗣️"
},
{
    term: "Music in Worship",
    definition: "The use of instruments and singing to praise God.",
    category: "Worship",
    references: ["Psalm 150:1-6", "Ephesians 5:19", "Colossians 3:16"],
    emoji: "🎵"
},
{
    term: "Mustard Seed Faith",
    definition: "Even small genuine faith can accomplish great things.",
    category: "Faith",
    references: ["Matthew 17:20", "Luke 17:6"],
    emoji: "🌱"
},
{
    term: "Mutual Submission",
    definition: "The voluntary yielding to one another in the fear of Christ.",
    category: "Ethics",
    references: ["Ephesians 5:21", "1 Peter 5:5", "Philippians 2:3"],
    emoji: "🤝"
},
{
    term: "Myrrh-bearing Women",
    definition: "The women who came to anoint Jesus' body after his death.",
    category: "Biblical Figures",
    references: ["Mark 16:1", "Luke 24:1", "John 20:1"],
    emoji: "👩"
},
{
    term: "Mystery of Godliness",
    definition: "The profound truth of Christ's incarnation and work.",
    category: "Theology",
    references: ["1 Timothy 3:16", "Colossians 1:27", "Ephesians 3:4-6"],
    emoji: "🔮"
},
{
    term: "Myths and Genealogies",
    definition: "Speculative stories Paul warned Timothy to avoid.",
    category: "Theology",
    references: ["1 Timothy 1:4", "Titus 1:14", "2 Timothy 4:4"],
    emoji: "🚫"
}







];

