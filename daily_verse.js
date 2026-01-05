 const verseOfTheDayList = [
  
  {
    "reference": "Luke 2:11",
    "text": "For unto you is born this day in the city of David a Saviour, which is Christ the Lord.",
    "genZ": "Today’s the drop—Christ the Savior just landed in David’s city. That’s the real gift."
  },
  {
    "reference": "John 1:14",
    "text": "And the Word was made flesh, and dwelt among us, (and we beheld his glory, the glory as of the only begotten of the Father,) full of grace and truth.",
    "genZ": "God’s Word put on skin and moved into the neighborhood—glory glowing, grace overflowing, truth locked in."
  },
  {
    "reference": "Isaiah 9:6",
    "text": "For unto us a child is born, unto us a son is given: and the government shall be upon his shoulder: and his name shall be called Wonderful, Counsellor, The mighty God, The everlasting Father, The Prince of Peace.",
    "genZ": "A child’s born, a Son’s given—he’s carrying the whole system. Call him Wonderful, Counselor, God-level, Eternal Father, Peace Prince."
  },
  {
    "reference": "Matthew 6:33",
    "text": "But seek ye first the kingdom of God, and his righteousness; and all these things shall be added unto you.",
    "genZ": "Chase God's kingdom first, and stay right with Him—everything else? It'll pull up on time."
  },
  {
    "reference": "Proverbs 3:5",
    "text": "Trust in the Lord with all thine heart; and lean not unto thine own understanding.",
    "genZ": "Put your full trust in God—don’t vibe off your own logic."
  },
  {
    "reference": "Philippians 3:13-14",
    "text": "Brethren, I count not myself to have apprehended: but this one thing I do, forgetting those things which are behind, and reaching forth unto those things which are before, I press toward the mark for the prize of the high calling of God in Christ Jesus.",
    "genZ": "I’m not acting like I’ve made it—but I’m done looking back. Eyes forward, chasing the prize God’s called me to in Christ."
  },
  {
    "reference": "2 Corinthians 5:17",
    "text": "Therefore if any man be in Christ, he is a new creature: old things are passed away; behold, all things are become new.",
    "genZ": "In Christ? You’re not the same. Old you? Gone. New you? Activated."
  },
  {
    "reference": "Revelation 21:5",
    "text": "And he that sat upon the throne said, Behold, I make all things new. And he said unto me, Write: for these words are true and faithful.",
    "genZ": "The One on the throne said, 'Watch this—I’m making everything new.' And trust, He meant every word."
  },
   { "reference": "Matthew 6:33", "text": "But seek ye first the kingdom of God, and his righteousness; and all these things shall be added unto you.", "genZ": "Chase God's kingdom first, and stay right with Him—everything else? It'll pull up on time." },
            { "reference": "Proverbs 3:5", "text": "Trust in the Lord with all thine heart; and lean not unto thine own understanding.", "genZ": "Put your full trust in God—don't vibe off your own logic." },
            { "reference": "Isaiah 40:31", "text": "But they that wait upon the Lord shall renew their strength; they shall mount up with wings as eagles; they shall run, and not be weary; and they shall walk, and not faint.", "genZ": "Those who stay locked on God get recharged—they'll rise like eagles, run with no burnout, walk with no flop." },
            { "reference": "Romans 12:2", "text": "And be not conformed to this world: but be ye transformed by the renewing of your mind, that ye may prove what is that good, and acceptable, and perfect, will of God.", "genZ": "Don't copy the world's vibe—let God reset your mindset so you can flex His perfect plan." },
            { "reference": "Psalm 23:1", "text": "The Lord is my shepherd; I shall not want.", "genZ": "God's my guide—I'm set, no lacking." },
            { "reference": "Philippians 4:13", "text": "I can do all things through Christ which strengtheneth me.", "genZ": "I can handle anything—Christ powers me up." },
            { "reference": "James 1:5", "text": "If any of you lack wisdom, let him ask of God, that giveth to all men liberally, and upbraideth not; and it shall be given him.", "genZ": "If you're low on wisdom, ask God—He drops it freely, no shade, no gatekeeping." },
            { "reference": "2 Timothy 1:7", "text": "For God hath not given us the spirit of fear; but of power, and of love, and of a sound mind.", "genZ": "God didn't hand us fear—He gave us power, love, and clear-headed focus." },
            { "reference": "Psalm 119:105", "text": "Thy word is a lamp unto my feet, and a light unto my path.", "genZ": "Your word's my flashlight—it keeps my steps lit and my path clear." },
            { "reference": "Galatians 6:9", "text": "And let us not be weary in well doing: for in due season we shall reap, if we faint not.", "genZ": "Don't tap out while doing good—harvest hits in God's time if you don't quit." },
            { "reference": "John 14:6", "text": "Jesus saith unto him, I am the way, the truth, and the life: no man cometh unto the Father, but by me.", "genZ": "Jesus said, I'm the route, the real, and the life—no one gets to God without Me." },
            { "reference": "1 Peter 5:7", "text": "Casting all your care upon him; for he careth for you.", "genZ": "Drop all your stress on Him—He actually cares, fr." },
            { "reference": "Hebrews 11:1", "text": "Now faith is the substance of things hoped for, the evidence of things not seen.", "genZ": "Faith is the real grip on what you're hoping for—it's proof of what you can't see yet." },
            { "reference": "Psalm 46:1", "text": "God is our refuge and strength, a very present help in trouble.", "genZ": "God's our safe zone and power-up—always right there when life hits hard." },
            { "reference": "Matthew 11:28", "text": "Come unto me, all ye that labour and are heavy laden, and I will give you rest.", "genZ": "If you're tired and carrying too much, pull up on Me—I'll give you real rest." },
            { "reference": "Joshua 1:9", "text": "Have not I commanded thee? Be strong and of a good courage; be not afraid, neither be thou dismayed: for the Lord thy God is with thee whithersoever thou goest.", "genZ": "Didn't I tell you? Stay bold, stay brave—no fear, no panic. God's rolling with you everywhere." },
            { "reference": "Colossians 3:23", "text": "And whatsoever ye do, do it heartily, as to the Lord, and not unto men;", "genZ": "Whatever you're on, go all in—do it for God, not for clout." },
            { "reference": "Psalm 34:18", "text": "The Lord is nigh unto them that are of a broken heart; and saveth such as be of a contrite spirit.", "genZ": "God's close to the ones with shattered hearts—He saves those who stay humble and real." },
            { "reference": "Ephesians 6:11", "text": "Put on the whole armour of God, that ye may be able to stand against the wiles of the devil.", "genZ": "Suit up in God's full armor—so you can stand firm when the enemy tries to play you." },
            { "reference": "Proverbs 18:10", "text": "The name of the Lord is a strong tower: the righteous runneth into it, and is safe.", "genZ": "God's name is a safe tower—real ones run to it and stay protected." },
            { "reference": "Romans 8:28", "text": "And we know that all things work together for good to them that love God, to them who are the called according to his purpose.", "genZ": "We know everything syncs for good—for those who love God and are locked into His purpose." },
            { "reference": "Micah 6:8", "text": "He hath shewed thee, O man, what is good; and what doth the Lord require of thee, but to do justly, and to love mercy, and to walk humbly with thy God?", "genZ": "God already showed you what's good—do right, show mercy, and walk lowkey with Him." },
            { "reference": "Matthew 5:16", "text": "Let your light so shine before men, that they may see your good works, and glorify your Father which is in heaven.", "genZ": "Let your light hit different—so people catch your good moves and shout out God for it." },
            { "reference": "1 Corinthians 10:13", "text": "There hath no temptation taken you but such as is common to man: but God is faithful, who will not suffer you to be tempted above that ye are able; but will with the temptation also make a way to escape, that ye may be able to bear it.", "genZ": "No temptation hits you that ain't human-level—but God's loyal. He won't let it go past your limit, and He always drops an exit route so you can handle it." },
            { "reference": "Psalm 37:4", "text": "Delight thyself also in the Lord: and he shall give thee the desires of thine heart.", "genZ": "Lock in with God and vibe with Him—He'll drop the real desires of your heart." },
            { "reference": "Jeremiah 29:11", "text": "For I know the thoughts that I think toward you, saith the Lord, thoughts of peace, and not of evil, to give you an expected end.", "genZ": "God says, I know the plans I've got for you—peace-filled, not toxic. I'm setting you up for a solid future." },
            { "reference": "1 John 4:4", "text": "Ye are of God, little children, and have overcome them: because greater is he that is in you, than he that is in the world.", "genZ": "You're God's crew, and you've already beat the noise—'cause the One in you is way bigger than the world's hype." },
            { "reference": "Psalm 121:1-2", "text": "I will lift up mine eyes unto the hills, from whence cometh my help. My help cometh from the Lord, which made heaven and earth.", "genZ": "I look up to the hills—where my help drops from. My help's from God, the Creator of everything." },
            { "reference": "Isaiah 41:10", "text": "Fear thou not; for I am with thee: be not dismayed; for I am thy God: I will strengthen thee; yea, I will help thee; yea, I will uphold thee with the right hand of my righteousness.", "genZ": "Don't stress—I'm with you. Don't freak—I'm your God. I'll boost you, help you, and hold you steady with My righteous grip." },
            { "reference": "John 10:10", "text": "The thief cometh not, but for to steal, and to kill, and to destroy: I am come that they might have life, and that they might have it more abundantly.", "genZ": "The enemy only pulls up to steal, wreck, and delete—but I came so you can live full, and live loud." },
            { "reference": "Genesis 50:20", "text": "But as for you, ye thought evil against me; but God meant it unto good, to bring to pass, as it is this day, to save much people alive.", "genZ": "You tried to play me, but God flipped it for good—to save lives, just like now." },
            { "reference": "Psalm 27:1", "text": "The Lord is my light and my salvation; whom shall I fear? the Lord is the strength of my life; of whom shall I be afraid?", "genZ": "God's my light and rescue—who am I supposed to fear? He's my strength, I'm not scared of anyone." },
            { "reference": "Romans 5:8", "text": "But God commendeth his love toward us, in that, while we were yet sinners, Christ died for us.", "genZ": "God showed love heavy—Christ died for us while we were still wildin'." },
            { "reference": "1 Thessalonians 5:16-18", "text": "Rejoice evermore. Pray without ceasing. In every thing give thanks: for this is the will of God in Christ Jesus concerning you.", "genZ": "Keep the joy on. Stay praying nonstop. Be thankful in everything—this is God's vibe for you in Christ." },
            { "reference": "Isaiah 26:3", "text": "Thou wilt keep him in perfect peace, whose mind is stayed on thee: because he trusteth in thee.", "genZ": "You'll keep in full peace the one who stays locked on You—'cause they trust You." },
            { "reference": "James 4:7", "text": "Submit yourselves therefore to God. Resist the devil, and he will flee from you.", "genZ": "Lock in with God. Push back on the enemy—and he'll dip fast." },
            { "reference": "Psalm 19:14", "text": "Let the words of my mouth, and the meditation of my heart, be acceptable in thy sight, O Lord, my strength, and my redeemer.", "genZ": "Let my words and heart vibes be cool with You, Lord—my strength and my rescue." },
            { "reference": "Luke 1:37", "text": "For with God nothing shall be impossible.", "genZ": "With God, impossible doesn't exist." },
            { "reference": "1 Corinthians 16:13", "text": "Watch ye, stand fast in the faith, quit you like men, be strong.", "genZ": "Stay woke, stand firm in faith, move bold, stay strong." },
            { "reference": "Psalm 91:1", "text": "He that dwelleth in the secret place of the most High shall abide under the shadow of the Almighty.", "genZ": "Whoever chills in God's secret zone stays covered under His power." },
            { "reference": "Psalm 121:7-8", "text": "The Lord shall preserve thee from all evil: he shall preserve thy soul. The Lord shall preserve thy going out and thy coming in from this time forth, and even for evermore.", "genZ": "God's got you covered from all evil—He's guarding your soul. He's watching your moves in and out, now and forever." },
            { "reference": "Romans 12:21", "text": "Be not overcome of evil, but overcome evil with good.", "genZ": "Don't let evil win—beat it with good." },
            { "reference": "Proverbs 3:6", "text": "In all thy ways acknowledge him, and he shall direct thy paths.", "genZ": "In everything you do, shout Him out—He'll guide your steps." },
            { "reference": "Isaiah 43:2", "text": "When thou passest through the waters, I will be with thee; and through the rivers, they shall not overflow thee: when thou walkest through the fire, thou shalt not be burned; neither shall the flame kindle upon thee.", "genZ": "When you're deep in it, I'm with you. Floods won't drown you. Fire won't burn you. Flames won't touch you." },
            { "reference": "Matthew 6:34", "text": "Take therefore no thought for the morrow: for the morrow shall take thought for the things of itself. Sufficient unto the day is the evil thereof.", "genZ": "Don't stress tomorrow—tomorrow's got its own stuff. Today's got enough to handle." },
            { "reference": "Psalm 37:5", "text": "Commit thy way unto the Lord; trust also in him; and he shall bring it to pass.", "genZ": "Drop your plans on God, trust Him—He'll make it happen." },
            { "reference": "John 15:5", "text": "I am the vine, ye are the branches: He that abideth in me, and I in him, the same bringeth forth much fruit: for without me ye can do nothing.", "genZ": "I'm the vine, you're the branches. Stay connected—you'll bear fruit. Without Me, you're offline." },
            { "reference": "Proverbs 16:3", "text": "Commit thy works unto the Lord, and thy thoughts shall be established.", "genZ": "Hand your grind to God—He'll lock in your mindset." },
            { "reference": "1 John 1:9", "text": "If we confess our sins, he is faithful and just to forgive us our sins, and to cleanse us from all unrighteousness.", "genZ": "If we own our sins, He's loyal and fair to forgive and clean us up." },
            { "reference": "Psalm 56:3", "text": "What time I am afraid, I will trust in thee.", "genZ": "Whenever fear hits, I'm trusting You." },
            { "reference": "Galatians 5:22-23", "text": "But the fruit of the Spirit is love, joy, peace, longsuffering, gentleness, goodness, faith, Meekness, temperance: against such there is no law.", "genZ": "The Spirit's fruit? Love, joy, peace, patience, kindness, goodness, faith, Humility, self-control—no rules block these." },
            { "reference": "Psalm 46:10", "text": "Be still, and know that I am God: I will be exalted among the heathen, I will be exalted in the earth.", "genZ": "Pause and know I'm God—I'll be lifted up everywhere." },
            { "reference": "Ephesians 2:10", "text": "For we are his workmanship, created in Christ Jesus unto good works, which God hath before ordained that we should walk in them.", "genZ": "We're God's craft—made in Christ to do good. He set it up before we even stepped in." },
            { "reference": "Colossians 2:6-7", "text": "As ye have therefore received Christ Jesus the Lord, so walk ye in him: Rooted and built up in him, and stablished in the faith, as ye have been taught, abounding therein with thanksgiving.", "genZ": "Since you've received Christ, walk in Him. Stay rooted, built up, locked in faith, overflowing with thanks." },
            { "reference": "Psalm 119:11", "text": "Thy word have I hid in mine heart, that I might not sin against thee.", "genZ": "I've stashed Your word in my heart—so I don't mess up against You." },
            { "reference": "2 Corinthians 12:9", "text": "And he said unto me, My grace is sufficient for thee: for my strength is made perfect in weakness. Most gladly therefore will I rather glory in my infirmities, that the power of Christ may rest upon me.", "genZ": "He told me, My grace is enough—My power hits hardest when you're weak. So I'll flex in my flaws, so Christ's power can rest on me." },
            { "reference": "Matthew 5:9", "text": "Blessed are the peacemakers: for they shall be called the children of God.", "genZ": "Shoutout to the peacemakers—they're God's kids." },
            { "reference": "Psalm 84:11", "text": "For the Lord God is a sun and shield: the Lord will give grace and glory: no good thing will he withhold from them that walk uprightly.", "genZ": "God's our light and shield—He gives grace and glory. He won't hold back good from those who walk right." },
            { "reference": "1 Corinthians 1:25", "text": "Because the foolishness of God is wiser than men; and the weakness of God is stronger than men.", "genZ": "Even God's foolish moves are wiser than humans. His weak side? Stronger than all of us." },
            { "reference": "Deuteronomy 31:6", "text": "Be strong and of a good courage, fear not, nor be afraid of them: for the Lord thy God, he it is that doth go with thee; he will not fail thee, nor forsake thee.", "genZ": "Stay bold, don't fold—God's rolling with you. He won't dip or ditch you." },
            { "reference": "Psalm 34:4", "text": "I sought the Lord, and he heard me, and delivered me from all my fears.", "genZ": "I reached out to God—He heard me and cleared all my fear." },
            { "reference": "Romans 10:9", "text": "That if thou shalt confess with thy mouth the Lord Jesus, and shalt believe in thine heart that God hath raised him from the dead, thou shalt be saved.", "genZ": "Say it loud: Jesus is Lord. Believe deep that God raised Him—and you're saved." },
            { "reference": "Isaiah 40:29", "text": "He giveth power to the faint; and to them that have no might he increaseth strength.", "genZ": "He powers up the weak—boosts strength when you're running on empty." },
            { "reference": "John 3:16", "text": "For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.", "genZ": "God loved the world heavy—He gave His only Son. Believe in Him, and you get eternal life." },
            { "reference": "Proverbs 18:21", "text": "Death and life are in the power of the tongue: and they that love it shall eat the fruit thereof.", "genZ": "Your words carry life or death—speak wisely, you'll eat the outcome." },
            { "reference": "2 Chronicles 7:14", "text": "If my people, which are called by my name, shall humble themselves, and pray, and seek my face, and turn from their wicked ways; then will I hear from heaven, and will forgive their sin, and will heal their land.", "genZ": "If My crew humble up, pray, chase Me, and drop the wrong stuff—I'll hear, forgive, and heal the land." },
            { "reference": "Psalm 91:4", "text": "He shall cover thee with his feathers, and under his wings shalt thou trust: his truth shall be thy shield and buckler.", "genZ": "He'll cover you like wings—trust under His shelter. His truth is your shield and armor." },
            { "reference": "Hebrews 13:8", "text": "Jesus Christ the same yesterday, and to day, and for ever.", "genZ": "Jesus stays the same—yesterday, today, forever. No switch-ups." },
            { "reference": "Matthew 22:37", "text": "Jesus said unto him, Thou shalt love the Lord thy God with all thy heart, and with all thy soul, and with all thy mind.", "genZ": "Jesus said: Love God with all your heart, soul, and mind—full send." },
            { "reference": "Psalm 103:2", "text": "Bless the Lord, O my soul, and forget not all his benefits:", "genZ": "Shout praise to God, soul—don't sleep on His blessings." },
            { "reference": "1 John 4:18", "text": "There is no fear in love; but perfect love casteth out fear: because fear hath torment. He that feareth is not made perfect in love.", "genZ": "Real love cancels fear—perfect love kicks it out. Fear brings torment, not love." },
            { "reference": "James 1:12", "text": "Blessed is the man that endureth temptation: for when he is tried, he shall receive the crown of life, which the Lord hath promised to them that love him.", "genZ": "Blessed is the one who holds it down through temptation—God's got a crown of life waiting." },
            { "reference": "Psalm 145:18", "text": "The Lord is nigh unto all them that call upon him, to all that call upon him in truth.", "genZ": "God's close to everyone who calls Him—especially when it's real." },
            { "reference": "Ephesians 4:29", "text": "Let no corrupt communication proceed out of your mouth, but that which is good to the use of edifying, that it may minister grace unto the hearers.", "genZ": "Don't let trash talk fly—speak what builds up and drops grace on the listeners." },
            { "reference": "Psalm 62:6", "text": "He only is my rock and my salvation: he is my defence; I shall not be moved.", "genZ": "He's my rock, my rescue, my defense—I'm unshaken." },
            { "reference": "2 Peter 3:9", "text": "The Lord is not slack concerning his promise, as some men count slackness; but is longsuffering to us-ward, not willing that any should perish, but that all should come to repentance.", "genZ": "God's not slow with His promise—He's just patient, wanting everyone to turn and live." },
            { "reference": "Psalm 119:130", "text": "The entrance of thy words giveth light; it giveth understanding unto the simple.", "genZ": "Your Word brings light—it gives clarity even to the simple." },
            { "reference": "Matthew 28:20b", "text": "lo, I am with you alway, even unto the end of the world. Amen.", "genZ": "I'm with you always—till the world wraps. Amen." },
            { "reference": "Psalm 23:4", "text": "Yea, though I walk through the valley of the shadow of death, I will fear no evil: for thou art with me; thy rod and thy staff they comfort me.", "genZ": "Even when I'm deep in the dark zone, I'm not scared—You're with me. Your tools keep me calm." },
            { "reference": "Romans 6:23", "text": "For the wages of sin is death; but the gift of God is eternal life through Jesus Christ our Lord.", "genZ": "Sin pays in death—but God's gift is eternal life through Jesus." },
            { "reference": "Proverbs 1:7", "text": "The fear of the Lord is the beginning of knowledge: but fools despise wisdom and instruction.", "genZ": "Respecting God is where real knowledge starts—fools hate wisdom and guidance." },
            { "reference": "John 1:5", "text": "And the light shineth in darkness; and the darkness comprehended it not.", "genZ": "Light shines in the dark—and the dark can't decode it." },
            { "reference": "Isaiah 55:8-9", "text": "For my thoughts are not your thoughts, neither are your ways my ways, saith the Lord. For as the heavens are higher than the earth, so are my ways higher than your ways, and my thoughts than your thoughts.", "genZ": "God says, My thoughts ain't yours, My ways ain't yours. Mine are way higher—sky-level above yours." },
            { "reference": "Matthew 7:13-14", "text": "Enter ye in at the strait gate: for wide is the gate, and broad is the way, that leadeth to destruction, and many there be which go in thereat: Because strait is the gate, and narrow is the way, which leadeth unto life, and few there be that find it.", "genZ": "Go through the tight gate—'cause the wide one leads to destruction, and lots go that way. The narrow path leads to life—but few even find it." },
            { "reference": "Psalm 51:10", "text": "Create in me a clean heart, O God; and renew a right spirit within me.", "genZ": "God, give me a clean heart—reset my spirit to be right." },
            { "reference": "1 Corinthians 13:4-5", "text": "Charity suffereth long, and is kind; charity envieth not; charity vaunteth not itself, is not puffed up, Doth not behave itself unseemly, seeketh not her own, is not easily provoked, thinketh no evil;", "genZ": "Love stays patient and kind. No envy, no flexing, no ego. It's not messy, not selfish, not hot-headed, not shady." },
            { "reference": "Philippians 2:3", "text": "Let nothing be done through strife or vainglory; but in lowliness of mind let each esteem other better than themselves.", "genZ": "Don't do stuff for drama or clout—stay humble and lift others above yourself." },
            { "reference": "Psalm 27:14", "text": "Wait on the Lord: be of good courage, and he shall strengthen thine heart: wait, I say, on the Lord.", "genZ": "Wait on God. Stay brave—He'll boost your heart. Yeah, wait on Him." },
            { "reference": "Galatians 2:20", "text": "I am crucified with Christ: nevertheless I live; yet not I, but Christ liveth in me: and the life which I now live in the flesh I live by the faith of the Son of God, who loved me, and gave himself for me.", "genZ": "I died with Christ—but I'm alive. Not me, but Christ lives in me. This life? I live by faith in the One who loved me and gave Himself for me." },
            { "reference": "Proverbs 15:1", "text": "A soft answer turneth away wrath: but grievous words stir up anger.", "genZ": "A chill reply cools down heat—but harsh words spark rage." },
            { "reference": "John 14:27", "text": "Peace I leave with you, my peace I give unto you: not as the world giveth, give I unto you. Let not your heart be troubled, neither let it be afraid.", "genZ": "I'm leaving you peace—My kind, not the world's. Don't let your heart stress or fear." },
            { "reference": "Psalm 100:4", "text": "Enter into his gates with thanksgiving, and into his courts with praise: be thankful unto him, and bless his name.", "genZ": "Pull up to His space with thanks, step in with praise—stay grateful and bless His name." },
            { "reference": "1 Peter 2:9", "text": "But ye are a chosen generation, a royal priesthood, an holy nation, a peculiar people; that ye should shew forth the praises of him who hath called you out of darkness into his marvellous light:", "genZ": "You're chosen—royal squad, holy crew, set-apart people. You're here to rep the One who pulled you out of darkness into His wild light." },
            { "reference": "Ecclesiastes 3:1", "text": "To every thing there is a season, and a time to every purpose under the heaven:", "genZ": "Everything's got its season—every purpose has its time under heaven." },
            { "reference": "Matthew 5:14", "text": "Ye are the light of the world. A city that is set on an hill cannot be hid.", "genZ": "You're the world's light. A city on a hill? Can't be hidden." },
            { "reference": "Psalm 119:105", "text": "Thy word is a lamp unto my feet, and a light unto my path.", "genZ": "Your Word lights my steps and keeps my path glowing." },
            { "reference": "2 Timothy 2:15", "text": "Study to shew thyself approved unto God, a workman that needeth not to be ashamed, rightly dividing the word of truth.", "genZ": "Study up to show you're solid before God—a worker with no shame, slicing truth right." },
  { "reference": "Isaiah 41:10", "text": "Fear thou not; for I am with thee: be not dismayed; for I am thy God: I will strengthen thee; yea, I will help thee; yea, I will uphold thee with the right hand of my righteousness.", "genZ": "don’t flinch—i’m locked in. no panic, i’m yours. i’ll boost you, back you, hold you up solid." },
  { "reference": "Joshua 1:9", "text": "Have not I commanded thee? Be strong and of a good courage; be not afraid, neither be thou dismayed: for the Lord thy God is with thee whithersoever thou goest.", "genZ": "ain’t i told you? stand tall, no fear, no fold. i’m with you wherever you step." },
  { "reference": "Romans 8:28", "text": "And we know that all things work together for good to them that love God, to them who are the called according to his purpose.", "genZ": "we locked in—everything syncs for good if you love me and ride my plan." },
  { "reference": "Philippians 4:13", "text": "I can do all things through Christ which strengtheneth me.", "genZ": "i’m built diff—he powers me up, i don’t fold." },
  { "reference": "Psalm 23:4", "text": "Yea, though I walk through the valley of the shadow of death, I will fear no evil: for thou art with me; thy rod and thy staff they comfort me.", "genZ": "even in the dark, i don’t shake. you’re here. your grip keeps me steady." },
  { "reference": "John 14:27", "text": "Peace I leave with you, my peace I give unto you: not as the world giveth, give I unto you. Let not your heart be troubled, neither let it be afraid.", "genZ": "i drop peace, not that fake world type. no stress, no fear—heart stay cool." },
  { "reference": "2 Timothy 1:7", "text": "For God hath not given us the spirit of fear; but of power, and of love, and of a sound mind.", "genZ": "he ain’t send fear—he dropped power, love, and clear headspace." },
  { "reference": "Psalm 46:1", "text": "God is our refuge and strength, a very present help in trouble.", "genZ": "he’s our safe zone and boost—always on deck when it hits." },
  { "reference": "Proverbs 3:5", "text": "Trust in the Lord with all thine heart; and lean not unto thine own understanding.", "genZ": "trust him full chest—don’t lean on your own logic." },
  { "reference": "Matthew 11:28", "text": "Come unto me, all ye that labour and are heavy laden, and I will give you rest.", "genZ": "pull up if you’re tired—I got real rest for you." },
  { "reference": "Psalm 34:18", "text": "The Lord is nigh unto them that are of a broken heart; and saveth such as be of a contrite spirit.", "genZ": "he’s close to the crushed—he saves the ones who stay low and real." },
  { "reference": "James 1:5", "text": "If any of you lack wisdom, let him ask of God, that giveth to all men liberally, and upbraideth not; and it shall be given him.", "genZ": "if you’re low on sense, ask him—he drops it free, no shade." },
  { "reference": "1 Peter 5:7", "text": "Casting all your care upon him; for he careth for you.", "genZ": "drop all your stress on him—he actually cares." },
  { "reference": "John 16:33", "text": "These things I have spoken unto you, that in me ye might have peace. In the world ye shall have tribulation: but be of good cheer; I have overcome the world.", "genZ": "i told you this so you’d stay calm. the world’s wild—but i already beat it." },
  { "reference": "Psalm 121:1-2", "text": "I will lift up mine eyes unto the hills, from whence cometh my help. My help cometh from the Lord, which made heaven and earth.", "genZ": "i look up—my help comes from the one who built sky and dirt." },
  { "reference": "Romans 15:13", "text": "Now the God of hope fill you with all joy and peace in believing, that ye may abound in hope, through the power of the Holy Ghost.", "genZ": "hope plug fills you with joy and calm—so you overflow, powered by the spirit." },
  { "reference": "Deuteronomy 31:6", "text": "Be strong and of a good courage, fear not, nor be afraid of them: for the Lord thy God, he it is that doth go with thee; he will not fail thee, nor forsake thee.", "genZ": "stand strong, no fear—he’s with you. he won’t dip, won’t ghost." },
  { "reference": "Psalm 56:3", "text": "What time I am afraid, I will trust in thee.", "genZ": "when fear pulls up, i lock in on you." },
  { "reference": "Hebrews 13:6", "text": "So that we may boldly say, The Lord is my helper, and I will not fear what man shall do unto me.", "genZ": "i say it loud—he’s my help. i don’t fear what people try." },
  { "reference": "Nahum 1:7", "text": "The Lord is good, a strong hold in the day of trouble; and he knoweth them that trust in him.", "genZ": "he’s good—solid when it’s rough. he knows who’s locked in." },
    {
      "reference": "Habakkuk 3:17-18",
      "text": "Although the fig tree shall not blossom, neither shall fruit be in the vines; the labour of the olive shall fail, and the fields shall yield no meat; the flock shall be cut off from the fold, and there shall be no herd in the stalls: Yet I will rejoice in the LORD, I will joy in the God of my salvation.",
      "genZ": "Even if everything crashes—no harvest, no gains, total financial L—I'm still choosing joy in God. He's the ultimate W."
    },
    {
      "reference": "Zephaniah 3:17",
      "text": "The LORD thy God in the midst of thee is mighty; he will save, he will rejoice over thee with joy; he will rest in his love, he will joy over thee with singing.",
      "genZ": "God isn't just near you; He's a powerhouse. He saves you, then literally celebrates you with joy, chills in His love for you, and serenades you. You're His favorite track."
    },
    {
      "reference": "Isaiah 30:15",
      "text": "For thus saith the Lord GOD, the Holy One of Israel; In returning and rest shall ye be saved; in quietness and in confidence shall be your strength: and ye would not.",
      "genZ": "God's blueprint for winning is simple: come back to Him, log off, and rest. Your real strength is in the quiet confidence grind... but y'all weren't having it."
    },
    {
      "reference": "Psalm 131:1",
      "text": "LORD, my heart is not haughty, nor mine eyes lofty: neither do I exercise myself in great matters, or in things too high for me.",
      "genZ": "God, my vibe isn't arrogant, and I'm not side-eyeing everyone. I don't even try to front like I understand things that are way above my pay grade."
    },
    {
      "reference": "Ecclesiastes 7:14",
      "text": "In the day of prosperity be joyful, but in the day of adversity consider: God also hath set the one over against the other, to the end that man should find nothing after him.",
      "genZ": "When you're up, celebrate. When you're down, stop and think. God balances both seasons so we can't predict everything and have to rely on Him."
    },
    {
      "reference": "2 Corinthians 12:9",
      "text": "And he said unto me, My grace is sufficient for thee: for my strength is made perfect in weakness. Most gladly therefore will I rather glory in my infirmities, that the power of Christ may rest upon me.",
      "genZ": "God told me, 'My grace is enough for you. My power hits different when you're at your weakest.' So now I low-key flex about my struggles, because that's when Christ's power really shows up on me."
    },
    {
      "reference": "Micah 6:8",
      "text": "He hath shewed thee, O man, what is good; and what doth the LORD require of thee, but to do justly, and to love mercy, and to walk humbly with thy God?",
      "genZ": "God already laid out the whole assignment: do what's right, be obsessed with mercy, and walk through life with Him, staying humble. That's the main quest."
    },
    {
      "reference": "Psalm 90:12",
      "text": "So teach us to number our days, that we may apply our hearts unto wisdom.",
      "genZ": "God, teach us to check the countdown clock on our lives, so we can spend our time getting actual wisdom."
    },
    {
      "reference": "Proverbs 25:17",
      "text": "Withdraw thy foot from thy neighbour's house; lest he be weary of thee, and so hate thee.",
      "genZ": "Don't overstay your welcome at your friend's place. Too much of you, and they'll get the ick and start to resent you."
    },
    {
      "reference": "Isaiah 33:6",
      "text": "And wisdom and knowledge shall be the stability of thy times, and strength of salvation: the fear of the LORD is his treasure.",
      "genZ": "In these chaotic times, wisdom and knowledge are your stability hacks and salvation armor. And the ultimate treasure? A deep respect for God."
    },
    {
      "reference": "Hosea 6:6",
      "text": "For I desired mercy, and not sacrifice; and the knowledge of God more than burnt offerings.",
      "genZ": "God's not impressed by your big, flashy sacrifices. What He really wants is your mercy toward others and actually knowing Him. That's the priority."
    },
    {
      "reference": "Psalm 37:7",
      "text": "Rest in the LORD, and wait patiently for him: fret not thyself because of him who prospereth in his way, because of the man who bringeth wicked devices to pass.",
      "genZ": "Just rest in God and wait. Don't get pressed seeing toxic people winning for a minute. Their storyline doesn't define yours."
    },
    {
      "reference": "Job 12:22",
      "text": "He discovereth deep things out of darkness, and bringeth out to light the shadow of death.",
      "genZ": "God pulls deep secrets out of the dark and turns even the shadow of death into a spotlight. Nothing's hidden from His reveal."
    },
    {
      "reference": "1 Peter 5:7",
      "text": "Casting all your care upon him; for he careth for you.",
      "genZ": "Just hand over all your anxiety to Him. He can handle your load, because He's actually invested in you."
    },
    {
      "reference": "Colossians 3:23",
      "text": "And whatsoever ye do, do it heartily, as to the Lord, and not unto men;",
      "genZ": "Whatever you're doing—school, work, chores—go all in, like you're doing it for God's approval, not just for people's likes."
    },
    {
      "reference": "Proverbs 17:17",
      "text": "A friend loveth at all times, and a brother is born for adversity.",
      "genZ": "A real friend shows up on all your days—good and bad. A true ride-or-die is family you find for when life gets real."
    },
    {
      "reference": "Lamentations 5:21",
      "text": "Turn thou us unto thee, O LORD, and we shall be turned; renew our days as of old.",
      "genZ": "God, pull us back to You—that's the only way we'll turn around. Refresh our story to be like the good old days."
    },
    {
      "reference": "Isaiah 41:10",
      "text": "Fear thou not; for I am with thee: be not dismayed; for I am thy God: I will strengthen thee; yea, I will help thee; yea, I will uphold thee with the right hand of my righteousness.",
      "genZ": "Don't be scared, I'm right here. Don't freak out, I'm your God. I've got your strength, your backup, and I'm holding you up with my undefeated hand."
    },
    {
      "reference": "Psalm 34:18",
      "text": "The LORD is nigh unto them that are of a broken heart; and saveth such as be of a contrite spirit.",
      "genZ": "God is closest to the ones with shattered hearts. He personally saves the people whose spirits are completely humble and real."
    },
    {
      "reference": "Jeremiah 15:16",
      "text": "Thy words were found, and I did eat them; and thy word was unto me the joy and rejoicing of mine heart: for I am called by thy name, O LORD God of hosts.",
      "genZ": "When I found Your words, I devoured them. They became the main joy and hype of my life, because I carry Your name."
    },
    
        {
          "reference": "Proverbs 30:8-9",
          "text": "Remove far from me vanity and lies: give me neither poverty nor riches; feed me with food convenient for me: Lest I be full, and deny thee, and say, Who is the LORD? or lest I be poor, and steal, and take the name of my God in vain.",
          "genZ": "Keep me from fake stuff and lies. Don't make me broke, but don't make me rich either—just give me what I need. Because if I'm too full, I'll forget You. And if I'm too desperate, I might do something stupid and drag Your name through the mud."
        },
        {
          "reference": "Isaiah 42:3",
          "text": "A bruised reed shall he not break, and the smoking flax shall he not quench: he shall bring forth judgment unto truth.",
          "genZ": "He won't snap a bent reed that's already bruised. He won't put out a weak, smoldering flame. He gently handles fragile things and always leads to what's true."
        },
        {
          "reference": "Job 26:14",
          "text": "Lo, these are parts of his ways: but how little a portion is heard of him? but the thunder of his power who can understand?",
          "genZ": "Okay, so these are just the highlights of what He can do. We've barely heard the preview. The full force of His power? We can't even comprehend it."
        },
        {
          "reference": "Psalm 18:35",
          "text": "Thou hast also given me the shield of thy salvation: and thy right hand hath holden me up, and thy gentleness hath made me great.",
          "genZ": "You gave me salvation as my shield. Your strong hand holds me up, but honestly? It's Your *gentleness* that's my main character development."
        },
        {
          "reference": "Genesis 16:13",
          "text": "And she called the name of the LORD that spake unto her, Thou God seest me: for she said, Have I also here looked after him that seeth me?",
          "genZ": "So she named the God who spoke to her, 'The God Who Sees Me.' She was like, 'Wait, have I actually just encountered the One who truly sees my whole situation?'"
        },
        {
          "reference": "Haggai 2:9",
          "text": "The glory of this latter house shall be greater than of the former, saith the LORD of hosts: and in this place will I give peace, saith the LORD of hosts.",
          "genZ": "The final chapter's glory is going to outshine the first chapter's, for real. And right here, in this moment, I'm handing out My peace."
        },
        {
          "reference": "Psalm 73:26",
          "text": "My flesh and my heart faileth: but God is the strength of my heart, and my portion for ever.",
          "genZ": "My body and my emotions are giving out on me. But God is my heart's core strength and my permanent, forever portion."
        },
        {
          "reference": "Isaiah 64:8",
          "text": "But now, O LORD, thou art our father; we are the clay, and thou our potter; and we all are the work of thy hand.",
          "genZ": "But here's the thing, God—You're our Father. We're just the clay, and You're the artist. All of us are literally works of Your hands."
        },
        {
          "reference": "Nahum 1:7",
          "text": "The LORD is good, a strong hold in the day of trouble; and he knoweth them that trust in him.",
          "genZ": "God is good. He's your ultimate fortress when everything's falling apart. And He personally knows everyone who's putting their trust in Him."
        },
        {
          "reference": "Job 23:10",
          "text": "But he knoweth the way that I take: when he hath tried me, I shall come forth as gold.",
          "genZ": "But He knows the exact path I'm walking. And when this test is over, I'm coming out the other side like refined gold."
        },
          {
            "reference": "2 Samuel 22:33",
            "text": "God is my strength and power: and he maketh my way perfect.",
            "genZ": "God is my raw strength and power source. And He's the one who optimizes my path."
          },
          {
            "reference": "Ecclesiastes 3:11",
            "text": "He hath made every thing beautiful in his time: also he hath set the world in their heart, so that no man can find out the work that God maketh from the beginning to the end.",
            "genZ": "He makes everything hit right on time. He also put eternity in our hearts, so we're always searching but can never fully figure out His whole masterpiece from start to finish."
          },
          {
            "reference": "Psalm 29:4",
            "text": "The voice of the LORD is powerful; the voice of the LORD is full of majesty.",
            "genZ": "The sound of God's voice is pure power; it's packed with ultimate authority."
          },
          {
            "reference": "Isaiah 26:3",
            "text": "Thou wilt keep him in perfect peace, whose mind is stayed on thee: because he trusteth in thee.",
            "genZ": "You guard in perfect peace anyone whose mental focus is locked on You. Because their trust is fully in You."
          },
          {
            "reference": "Zechariah 4:6",
            "text": "Then he answered and spake unto me, saying, This is the word of the LORD unto Zerubbabel, saying, Not by might, nor by power, but by my spirit, saith the LORD of hosts.",
            "genZ": "Then he told me the message: 'This is God's word to you. It won't happen by your hustle, or by your force, but by My Spirit.'"
          },
          {
            "reference": "Psalm 139:9-10",
            "text": "If I take the wings of the morning, and dwell in the uttermost parts of the sea; Even there shall thy hand lead me, and thy right hand shall hold me.",
            "genZ": "If I could catch the first light of dawn and post up at the edge of the ocean, even there Your hand would guide me, Your right hand would have a firm grip on me."
          },
          {
            "reference": "Isaiah 58:11",
            "text": "And the LORD shall guide thee continually, and satisfy thy soul in drought, and make fat thy bones: and thou shalt be like a watered garden, and like a spring of water, whose waters fail not.",
            "genZ": "God will be your constant navigation. He'll hydrate your soul in a drought and strengthen your whole frame. You'll be like a lush garden, like a spring that never runs dry."
          },
          {
            "reference": "Proverbs 19:21",
            "text": "There are many devices in a man's heart; nevertheless the counsel of the LORD, that shall stand.",
            "genZ": "Your mind can come up with a thousand different plans. But at the end of the day, only God's plan is the one that's actually going to stand."
          },
          {
            "reference": "Psalm 27:13",
            "text": "I had fainted, unless I had believed to see the goodness of the LORD in the land of the living.",
            "genZ": "I would have given up completely if I didn't believe I would get to see God's goodness play out, right here in this lifetime."
          },
          {
            "reference": "Isaiah 55:8",
            "text": "For my thoughts are not your thoughts, neither are your ways my ways, saith the LORD.",
            "genZ": "Because my thought process is not your thought process, and your methods are not my methods. That's the official word."
          },



          
            {
              "reference": "Psalm 18:19",
              "text": "He brought me forth also into a large place; he delivered me, because he delighted in me.",
              "genZ": "He led me out into wide open spaces. He got me out of that tight spot simply because He likes me."
            },
            {
              "reference": "2 Samuel 22:20",
              "text": "He brought me forth into a large place: he delivered me, because he delighted in me.",
              "genZ": "He moved me to a place with room to breathe. He rescued me, no other reason than He was into me."
            },
            {
              "reference": "Psalm 31:7",
              "text": "I will be glad and rejoice in thy mercy: for thou hast considered my trouble; thou hast known my soul in adversities;",
              "genZ": "I'm gonna celebrate your mercy, because you saw my struggle. You really knew what my soul was going through."
            },
            {
              "reference": "Isaiah 30:18",
              "text": "And therefore will the LORD wait, that he may be gracious unto you, and therefore will he be exalted, that he may have mercy upon you: for the LORD is a God of judgment: blessed are all they that wait for him.",
              "genZ": "So God will actually wait to show up, just so He can be extra gracious to you. He holds back to show mercy. Good things come to those who wait for His timing."
            },
            {
              "reference": "Psalm 62:8",
              "text": "Trust in him at all times; ye people, pour out your heart before him: God is a refuge for us. Selah.",
              "genZ": "Trust Him, no matter the time. Just dump your whole emotional load out to Him. God's our safe space. Pause and think about that."
            },
            {
              "reference": "Isaiah 43:2",
              "text": "When thou passest through the waters, I will be with thee; and through the rivers, they shall not overflow thee: when thou walkest through the fire, thou shalt not be burned; neither shall the flame kindle upon thee.",
              "genZ": "When you go through deep waters, I'm with you—you won't drown. When you walk through fire, you won't get burned; the flames won't even touch you."
            },
            {
              "reference": "Psalm 16:11",
              "text": "Thou wilt shew me the path of life: in thy presence is fulness of joy; at thy right hand there are pleasures for evermore.",
              "genZ": "You'll show me the way to real life. Being with You is pure, full joy. Next to You is where the good stuff is, forever."
            },
            {
              "reference": "Isaiah 49:15",
              "text": "Can a woman forget her sucking child, that she should not have compassion on the son of her womb? yea, they may forget, yet will I not forget thee.",
              "genZ": "Could a mother forget her newborn? It's almost impossible. But even if that happened, I would never, ever forget you."
            },
            {
              "reference": "Psalm 46:10",
              "text": "Be still, and know that I am God: I will be exalted among the heathen, I will be exalted in the earth.",
              "genZ": "Stop. Log off. Breathe. And remember who I am. I will be recognized everywhere, by everyone."
            },
            {
              "reference": "Isaiah 41:13",
              "text": "For I the LORD thy God will hold thy right hand, saying unto thee, Fear not; I will help thee.",
              "genZ": "I, God, have got your right hand. I'm telling you, don't be scared. I'm here to help."
            },
            {
              "reference": "Psalm 139:17",
              "text": "How precious also are thy thoughts unto me, O God! how great is the sum of them!",
              "genZ": "God, your thoughts about me are priceless. There are way too many to even count."
            },
            {
              "reference": "Jeremiah 31:3",
              "text": "The LORD hath appeared of old unto me, saying, Yea, I have loved thee with an everlasting love: therefore with lovingkindness have I drawn thee.",
              "genZ": "God showed up a long time ago and said, 'I've loved you with a forever-kind of love. That's why I've been gently pulling you toward me this whole time.'"
            },
            {
              "reference": "Psalm 147:3",
              "text": "He healeth the broken in heart, and bindeth up their wounds.",
              "genZ": "He's the specialist for shattered hearts. He carefully bandages up their deep cuts."
            },
            {
              "reference": "Lamentations 5:19",
              "text": "Thou, O LORD, remainest for ever; thy throne from generation to generation.",
              "genZ": "But You, God, you're permanent. Your rule lasts from one generation's vibe to the next."
            },
            {
              "reference": "Psalm 145:18",
              "text": "The LORD is nigh unto all them that call upon him, to all that call upon him in truth.",
              "genZ": "God is close to everyone who genuinely hits Him up, who calls out to Him for real."
            },
            {
              "reference": "Nahum 1:15",
              "text": "Behold upon the mountains the feet of him that bringeth good tidings, that publisheth peace! O Judah, keep thy solemn feasts, perform thy vows: for the wicked shall no more pass through thee; he is utterly cut off.",
              "genZ": "Check it—on the mountains, there are the feet of the messenger bringing good news, announcing peace! So celebrate your festivals, keep your promises. The bad stuff is over; it's been completely canceled."
            },
            {
              "reference": "Psalm 37:4",
              "text": "Delight thyself also in the LORD; and he shall give thee the desires of thine heart.",
              "genZ": "Make God your main source of joy. When you do that, He'll align you with the desires He's placed in your heart."
            },
            {
              "reference": "Isaiah 26:12",
              "text": "LORD, thou wilt ordain peace for us: for thou also hast wrought all our works in us.",
              "genZ": "God, you're the one who establishes our peace. Because let's be real, you were the one working through us to accomplish everything anyway."
            },
            {
              "reference": "Psalm 34:8",
              "text": "O taste and see that the LORD is good: blessed is the man that trusteth in him.",
              "genZ": "Just try it. Sample and see for yourself that God is good. The person who trusts in Him is seriously winning."
            },
            {
              "reference": "Isaiah 54:10",
              "text": "For the mountains shall depart, and the hills be removed; but my kindness shall not depart from thee, neither shall the covenant of my peace be removed, saith the LORD that hath mercy on thee.",
              "genZ": "Even if mountains dip and hills bounce, my kindness for you won't. My promise of peace is non-negotiable."
            },


            
              {
                "reference": "Proverbs 14:10",
                "text": "The heart knoweth his own bitterness; and a stranger doth not intermeddle with his joy.",
                "genZ": "Your heart holds its own private pain, and no outsider can fully tap into your real joy."
              },
              {
                "reference": "Isaiah 33:2",
                "text": "O LORD, be gracious unto us; we have waited for thee: be thou their arm every morning, our salvation also in the time of trouble.",
                "genZ": "God, show us grace—we've been waiting on You. Be our strength every single morning, and our rescue when everything goes wrong."
              },
              {
                "reference": "Psalm 84:11",
                "text": "For the LORD God is a sun and shield: the LORD will give grace and glory: no good thing will he withhold from them that walk uprightly.",
                "genZ": "God is both your spotlight and your shield. He dishes out grace and glory, and won't hold back anything good from those who keep it real with Him."
              },
              {
                "reference": "Habakkuk 2:3",
                "text": "For the vision is yet for an appointed time, but at the end it shall speak, and not lie: though it tarry, wait for it; because it will surely come, it will not tarry.",
                "genZ": "The vision has a set release date. When it's time, it'll drop—no cap. Even if it feels delayed, wait for it. It's coming right on schedule."
              },
              {
                "reference": "Psalm 18:28",
                "text": "For thou wilt light my candle: the LORD my God will enlighten my darkness.",
                "genZ": "You're the one who lights up my life. My God turns my pitch-black moments into understanding."
              },
              {
                "reference": "Zechariah 2:8",
                "text": "For thus saith the LORD of hosts; After the glory hath he sent me unto the nations which spoiled you: for he that toucheth you toucheth the apple of his eye.",
                "genZ": "God says: 'Anyone who messes with you is poking Me in the eye.' You're that precious to Him."
              },
              {
                "reference": "Psalm 37:23",
                "text": "The steps of a good man are ordered by the LORD: and he delighteth in his way.",
                "genZ": "When you're living right, God personally directs your steps. And He actually enjoys watching your journey."
              },
              {
                "reference": "Isaiah 48:17",
                "text": "Thus saith the LORD, thy Redeemer, the Holy One of Israel; I am the LORD thy God which teacheth thee to profit, which leadeth thee by the way that thou shouldest go.",
                "genZ": "Your Redeemer says: 'I'm your God. I teach you how to actually win. I lead you down the path you're meant to take.'"
              },
              {
                "reference": "Psalm 32:8",
                "text": "I will instruct thee and teach thee in the way which thou shalt go: I will guide thee with mine eye.",
                "genZ": "I'll give you the game plan and teach you the route. I'll guide you with a single look."
              },
              {
                "reference": "Isaiah 58:8",
                "text": "Then shall thy light break forth as the morning, and thine health shall spring forth speedily: and thy righteousness shall go before thee; the glory of the LORD shall be thy rereward.",
                "genZ": "Then your light will burst through like dawn, your healing will pop off quickly, your integrity will lead the way, and God's glory will have your back."
              },
              {
                "reference": "Psalm 119:105",
                "text": "Thy word is a lamp unto my feet, and a light unto my path.",
                "genZ": "Your word is like my phone's flashlight for my next step, and a headlamp for the whole path ahead."
              },
              {
                "reference": "Isaiah 60:22",
                "text": "A little one shall become a thousand, and a small one a strong nation: I the LORD will hasten it in his time.",
                "genZ": "The smallest start can become a thousand. The weakest can build a strong nation. And I, God, will speed it up when the time is right."
              },
              {
                "reference": "Psalm 126:5",
                "text": "They that sow in tears shall reap in joy.",
                "genZ": "If you plant your seeds while crying, you'll harvest with pure joy."
              },
              {
                "reference": "Jeremiah 17:7",
                "text": "Blessed is the man that trusteth in the LORD, and whose hope the LORD is.",
                "genZ": "Truly blessed is the person whose trust and main hope is locked in on God."
              },
              {
                "reference": "Psalm 30:5",
                "text": "For his anger endureth but a moment; in his favour is life: weeping may endure for a night, but joy cometh in the morning.",
                "genZ": "His frustration lasts a second; His favor lasts a lifetime. You might cry through the night, but joy always shows up by morning."
              },
              {
                "reference": "Isaiah 40:29",
                "text": "He giveth power to the faint; and to them that have no might he increaseth strength.",
                "genZ": "He gives energy to the drained. To the ones with zero strength left, He supercharges them."
              },
              {
                "reference": "Psalm 91:4",
                "text": "He shall cover thee with his feathers, and under his wings shalt thou trust: his truth shall be thy shield and buckler.",
                "genZ": "He'll cover you like a bird with its wings, and you'll find safety there. His truth is your front and back armor."
              },
              {
                "reference": "Isaiah 43:19",
                "text": "Behold, I will do a new thing; now it shall spring forth; shall ye not know it? I will even make a way in the wilderness, and rivers in the desert.",
                "genZ": "Watch, I'm about to do something new—it's already starting. Don't you see it? I'll make a road through the wild and put rivers in the desert."
              },
              {
                "reference": "Psalm 138:8",
                "text": "The LORD will perfect that which concerneth me: thy mercy, O LORD, endureth for ever: forsake not the works of thine own hands.",
                "genZ": "God will finish what He started with me. Your mercy, God, lasts forever—don't abandon what You made."
              },
              {
                "reference": "Isaiah 65:24",
                "text": "And it shall come to pass, that before they call, I will answer; and while they are yet speaking, I will hear.",
                "genZ": "It'll get to the point where before you even finish your prayer, I'll answer. While you're still talking, I'm already listening."
              },


              
                {
                  "reference": "Psalm 31:15",
                  "text": "My times are in thy hand: deliver me from the hand of mine enemies, and from them that persecute me.",
                  "genZ": "My entire timeline is in Your hands. Get me out of the grip of my enemies and the people coming for me."
                },
                {
                  "reference": "Isaiah 50:4",
                  "text": "The Lord GOD hath given me the tongue of the learned, that I should know how to speak a word in season to him that is weary: he wakeneth morning by morning, he wakeneth mine ear to hear as the learned.",
                  "genZ": "God gave me the right words to know exactly what to say to someone who's exhausted. Every morning He resets my ears to listen like a pro."
                },
                {
                  "reference": "Psalm 40:2",
                  "text": "He brought me up also out of an horrible pit, out of the miry clay, and set my feet upon a rock, and established my goings.",
                  "genZ": "He pulled me out of a terrible, muddy pit, planted my feet on solid rock, and made sure my steps were stable."
                },
                {
                  "reference": "Isaiah 54:17",
                  "text": "No weapon that is formed against thee shall prosper; and every tongue that shall rise against thee in judgment thou shalt condemn. This is the heritage of the servants of the LORD, and their righteousness is of me, saith the LORD.",
                  "genZ": "No weapon crafted against you will ever succeed. Every accusation thrown your way will be canceled. This is your guaranteed inheritance as God's people—your right standing comes from Him."
                },
                {
                  "reference": "Psalm 37:5",
                  "text": "Commit thy way unto the LORD; trust also in him; and he shall bring it to pass.",
                  "genZ": "Hand over your whole life plan to God. Trust Him with it. He'll make it happen."
                },
                {
                  "reference": "Isaiah 58:14",
                  "text": "Then shalt thou delight thyself in the LORD; and I will cause thee to ride upon the high places of the earth, and feed thee with the heritage of Jacob thy father: for the mouth of the LORD hath spoken it.",
                  "genZ": "Then you'll find your real joy in God. I'll lift you to the highest places and nourish you with ancient blessings. You have God's word on it."
                },
                {
                  "reference": "Psalm 91:1",
                  "text": "He that dwelleth in the secret place of the most High shall abide under the shadow of the Almighty.",
                  "genZ": "Whoever lives in God's private VIP section gets to stay under His personal shadow of protection."
                },
                {
                  "reference": "Jeremiah 31:25",
                  "text": "For I have satiated the weary soul, and I have replenished every sorrowful soul.",
                  "genZ": "I fully satisfy the worn-out soul. I refill every single person weighed down by sorrow."
                },
                {
                  "reference": "Psalm 138:7",
                  "text": "Though I walk in the midst of trouble, thou wilt revive me: thou shalt stretch forth thine hand against the wrath of mine enemies, and thy right hand shall save me.",
                  "genZ": "Even when I'm walking through major drama, You'll bring me back to life. You'll reach out and block my haters, and Your strong hand will save me."
                },
                {
                  "reference": "Isaiah 61:3",
                  "text": "To appoint unto them that mourn in Zion, to give unto them beauty for ashes, the oil of joy for mourning, the garment of praise for the spirit of heaviness; that they might be called trees of righteousness, the planting of the LORD, that he might be glorified.",
                  "genZ": "For those grieving, I'm swapping ashes for beauty, mourning for joy, heavy spirits for outfits of praise. They'll be known as strong, righteous trees, planted by God Himself, to show His glory."
                },
                {
                  "reference": "Psalm 121:3",
                  "text": "He will not suffer thy foot to be moved: he that keepeth thee will not slumber.",
                  "genZ": "He won't let your foot slip. The one guarding you never sleeps."
                },
                {
                  "reference": "Isaiah 26:4",
                  "text": "Trust ye in the LORD for ever: for in the LORD JEHOVAH is everlasting strength.",
                  "genZ": "Trust in God forever. In Him is permanent, unbreakable strength."
                },
                {
                  "reference": "Psalm 34:7",
                  "text": "The angel of the LORD encampeth round about them that fear him, and delivereth them.",
                  "genZ": "God's angels set up a protective camp around those who respect Him, and they deliver them."
                },
                {
                  "reference": "Isaiah 40:31",
                  "text": "But they that wait upon the LORD shall renew their strength; they shall mount up with wings as eagles; they shall run, and not be weary; and they shall walk, and not faint.",
                  "genZ": "But those who wait for God will get a second wind. They'll soar like eagles, run without burning out, and walk without collapsing."
                },
                {
                  "reference": "Psalm 37:24",
                  "text": "Though he fall, he shall not be utterly cast down: for the LORD upholdeth him with his hand.",
                  "genZ": "Even if he trips and falls, he won't be totally wiped out—because God is holding him up by the hand."
                },
                {
                  "reference": "Isaiah 41:18",
                  "text": "I will open rivers in high places, and fountains in the midst of the valleys: I will make the wilderness a pool of water, and the dry land springs of water.",
                  "genZ": "I'll open rivers on mountains and springs in valleys. I'll turn the desert into a lake and dry land into water sources."
                },
                {
                  "reference": "Psalm 139:5",
                  "text": "Thou hast beset me behind and before, and laid thine hand upon me.",
                  "genZ": "You've got me surrounded—front and back. You've placed Your hand on me."
                },
                {
                  "reference": "Isaiah 43:1",
                  "text": "But now thus saith the LORD that created thee, O Jacob, and he that formed thee, O Israel, Fear not: for I have redeemed thee, I have called thee by thy name; thou art mine.",
                  "genZ": "But now, the God who created you says: Don't be afraid. I've paid your price, I've called you by name. You are Mine."
                },
                {
                  "reference": "Psalm 37:7",
                  "text": "Rest in the LORD, and wait patiently for him: fret not thyself because of him who prospereth in his way, because of the man who bringeth wicked devices to pass.",
                  "genZ": "Rest in God. Wait patiently for Him. Don't get pressed watching shady people succeed for a minute."
                },
                {
                  "reference": "Isaiah 44:3",
                  "text": "For I will pour water upon him that is thirsty, and floods upon the dry ground: I will pour my spirit upon thy seed, and my blessing upon thine offspring:",
                  "genZ": "I'll pour water on the thirsty and floods on the dry ground. I'll pour My Spirit on your family line and My blessing on your future generations."
                },  
                
                
                
                  {
                    "reference": "2 Chronicles 16:9",
                    "text": "For the eyes of the LORD run to and fro throughout the whole earth, to shew himself strong in the behalf of them whose heart is perfect toward him.",
                    "genZ": "God's eyes are scanning the entire planet, looking for people who are fully committed to Him, so He can show up strong for them."
                  },
                  {
                    "reference": "Psalm 17:8",
                    "text": "Keep me as the apple of the eye, hide me under the shadow of thy wings,",
                    "genZ": "Guard me like I'm the pupil of Your eye. Hide me under the shelter of Your wings."
                  },
                  {
                    "reference": "Isaiah 35:4",
                    "text": "Say to them that are of a fearful heart, Be strong, fear not: behold, your God will come with vengeance, even God with a recompence; he will come and save you.",
                    "genZ": "Tell the anxious-hearted: 'Be strong, don't fear. Your God is coming to handle things. He's coming to save you.'"
                  },
                  {
                    "reference": "Psalm 25:14",
                    "text": "The secret of the LORD is with them that fear him; and he will shew them his covenant.",
                    "genZ": "God shares His confidential thoughts with those who respect Him. He lets them in on His promises."
                  },
                  {
                    "reference": "Isaiah 52:12",
                    "text": "For ye shall not go out with haste, nor go by flight: for the LORD will go before you; and the God of Israel will be your rereward.",
                    "genZ": "You won't have to run out in a panic. God will lead the way out front, and He'll also have your back."
                  },
                  {
                    "reference": "Psalm 36:7",
                    "text": "How excellent is thy lovingkindness, O God! therefore the children of men put their trust under the shadow of thy wings.",
                    "genZ": "Your loyal love is next-level, God! No wonder people take shelter under Your wings."
                  },
                  {
                    "reference": "Isaiah 59:1",
                    "text": "Behold, the LORD's hand is not shortened, that it cannot save; neither his ear heavy, that it cannot hear:",
                    "genZ": "Look, God's arm isn't too short to save you. His ear isn't deaf—He can hear you."
                  },
                  {
                    "reference": "Psalm 57:1",
                    "text": "Be merciful unto me, O God, be merciful unto me: for my soul trusteth in thee: yea, in the shadow of thy wings will I make my refuge, until these calamities be overpast.",
                    "genZ": "God, show me mercy! I'm trusting in You. I'm taking shelter under Your wings until this storm passes."
                  },
                  {
                    "reference": "Isaiah 63:9",
                    "text": "In all their affliction he was afflicted, and the angel of his presence saved them: in his love and in his pity he redeemed them; and he bare them, and carried them all the days of old.",
                    "genZ": "When they suffered, He suffered too. The angel of His presence saved them. In His love and pity, He bought them back and carried them through the old days."
                  },
                  {
                    "reference": "Psalm 63:7",
                    "text": "Because thou hast been my help, therefore in the shadow of thy wings will I rejoice.",
                    "genZ": "Because You've helped me before, I'll celebrate safely in the shadow of Your wings."
                  },
                  {
                    "reference": "Jeremiah 29:13",
                    "text": "And ye shall seek me, and find me, when ye shall search for me with all your heart.",
                    "genZ": "You'll seek Me and find Me when you go all-in, searching for Me with your whole heart."
                  },
                  {
                    "reference": "Psalm 68:19",
                    "text": "Blessed be the Lord, who daily loadeth us with benefits, even the God of our salvation. Selah.",
                    "genZ": "Praise God, who loads us up with blessings every single day—the God who saves us. Think about that."
                  },
                  {
                    "reference": "Jeremiah 32:27",
                    "text": "Behold, I am the LORD, the God of all flesh: is there any thing too hard for me?",
                    "genZ": "Look, I am God, the God of all humanity. Is anything too difficult for Me?"
                  },
                  {
                    "reference": "Psalm 73:24",
                    "text": "Thou shalt guide me with thy counsel, and afterward receive me to glory.",
                    "genZ": "You'll guide me with Your advice and then welcome me into glory afterward."
                  },
                  {
                    "reference": "Lamentations 3:24",
                    "text": "The LORD is my portion, saith my soul; therefore will I hope in him.",
                    "genZ": "My soul says, 'God is my share, my everything.' That's why I'll put my hope in Him."
                  },
                  {
                    "reference": "Psalm 85:8",
                    "text": "I will hear what God the LORD will speak: for he will speak peace unto his people, and to his saints: but let them not turn again to folly.",
                    "genZ": "I'm listening for what God will say. He speaks peace to His people, but He also says, 'Don't go back to foolishness.'"
                  },
                  {
                    "reference": "Nahum 1:3",
                    "text": "The LORD is slow to anger, and great in power, and will not at all acquit the wicked: the LORD hath his way in the whirlwind and in the storm, and the clouds are the dust of his feet.",
                    "genZ": "God is slow to get angry and incredibly powerful. He won't let the wicked off the hook. He moves through hurricanes and storms; the clouds are just dust from His feet."
                  },
                  {
                    "reference": "Psalm 89:15",
                    "text": "Blessed is the people that know the joyful sound: they shall walk, O LORD, in the light of thy countenance.",
                    "genZ": "Blessed are the people who recognize the sound of joy. They walk in the light of Your smile, God."
                  },
                  {
                    "reference": "Zephaniah 3:5",
                    "text": "The just LORD is in the midst thereof; he will not do iniquity: every morning doth he bring his judgment to light, he faileth not; neither doth the corrupt person know shame.",
                    "genZ": "The righteous God is right there in the middle of it. He does no wrong. Every morning He brings His justice to light, never missing a day."
                  },
                  {
                    "reference": "Psalm 94:18",
                    "text": "When I said, My foot slippeth; thy mercy, O LORD, held me up.",
                    "genZ": "When I said, 'I'm about to slip!' Your mercy, God, caught me and held me up."
                  },
                


                  
                    {
                      "reference": "Haggai 2:5",
                      "text": "According to the word that I covenanted with you when ye came out of Egypt, so my spirit remaineth among you: fear ye not.",
                      "genZ": "Just like I promised when you left Egypt, My Spirit is still right here with you. Don't be afraid."
                    },
                    {
                      "reference": "Psalm 103:13",
                      "text": "Like as a father pitieth his children, so the LORD pitieth them that fear him.",
                      "genZ": "Just as a father has compassion on his kids, God has compassion on those who respect Him."
                    },
                    {
                      "reference": "Zechariah 9:12",
                      "text": "Turn you to the strong hold, ye prisoners of hope: even to day do I declare that I will render double unto thee;",
                      "genZ": "Prisoners of hope, return to your fortress! Today I declare I will give you double for what you've lost."
                    },
                    {
                      "reference": "Psalm 107:9",
                      "text": "For he satisfieth the longing soul, and filleth the hungry soul with goodness.",
                      "genZ": "He satisfies the soul that's craving and fills the hungry soul with good things."
                    },
                    {
                      "reference": "Malachi 3:6",
                      "text": "For I am the LORD, I change not; therefore ye sons of Jacob are not consumed.",
                      "genZ": "Because I am God, and I don't change, you descendants of Jacob aren't destroyed."
                    },
                    {
                      "reference": "Psalm 112:4",
                      "text": "Unto the upright there ariseth light in the darkness: he is gracious, and full of compassion, and righteous.",
                      "genZ": "For the person living right, light dawns even in darkness. God is gracious, full of compassion, and righteous."
                    },
                    {
                      "reference": "Matthew 5:8",
                      "text": "Blessed are the pure in heart: for they shall see God.",
                      "genZ": "Blessed are those whose hearts are pure—they'll get to see God."
                    },
                    {
                      "reference": "Psalm 119:32",
                      "text": "I will run the way of thy commandments, when thou shalt enlarge my heart.",
                      "genZ": "I'll run in the path of Your commands when You expand my capacity to understand them."
                    },
                    {
                      "reference": "Matthew 11:28",
                      "text": "Come unto me, all ye that labour and are heavy laden, and I will give you rest.",
                      "genZ": "Come to Me, all of you who are exhausted and carrying heavy loads. I'll give you rest."
                    },
                    {
                      "reference": "Psalm 121:5",
                      "text": "The LORD is thy keeper: the LORD is thy shade upon thy right hand.",
                      "genZ": "God is your guardian. He's your shade at your right hand."
                    },
                    {
                      "reference": "Luke 1:37",
                      "text": "For with God nothing shall be impossible.",
                      "genZ": "With God, nothing is impossible."
                    },
                    {
                      "reference": "Psalm 145:9",
                      "text": "The LORD is good to all: and his tender mercies are over all his works.",
                      "genZ": "God is good to everyone. His tender mercies are over everything He's made."
                    },
                    {
                      "reference": "John 14:27",
                      "text": "Peace I leave with you, my peace I give unto you: not as the world giveth, give I unto you. Let not your heart be troubled, neither let it be afraid.",
                      "genZ": "I'm leaving you My peace—a different kind of peace than the world gives. Don't let your heart be stressed or scared."
                    },
                    {
                      "reference": "Proverbs 3:24",
                      "text": "When thou liest down, thou shalt not be afraid: yea, thou shalt lie down, and thy sleep shall be sweet.",
                      "genZ": "When you lie down, you won't be afraid. You'll lie down, and your sleep will be sweet."
                    },
                    {
                      "reference": "John 16:33",
                      "text": "These things I have spoken unto you, that in me ye might have peace. In the world ye shall have tribulation: but be of good cheer; I have overcome the world.",
                      "genZ": "I've told you this so you can have peace in Me. In the world you'll have trouble, but take heart—I've beaten the world."
                    },
                    {
                      "reference": "Proverbs 4:18",
                      "text": "But the path of the just is as the shining light, that shineth more and more unto the perfect day.",
                      "genZ": "The path of the righteous is like the first light of dawn, getting brighter and brighter until full daylight."
                    },
                    {
                      "reference": "Acts 17:28",
                      "text": "For in him we live, and move, and have our being; as certain also of your own poets have said, For we are also his offspring.",
                      "genZ": "In Him we live, move, and exist. As your own poets have said, 'We are His children.'"
                    },
                    {
                      "reference": "Proverbs 16:9",
                      "text": "A man's heart deviseth his way: but the LORD directeth his steps.",
                      "genZ": "A person plans their route, but God actually directs their steps."
                    },
                    {
                      "reference": "Romans 8:28",
                      "text": "And we know that all things work together for good to them that love God, to them who are the called according to his purpose.",
                      "genZ": "We know that God works all things together for good for those who love Him and are called according to His purpose."
                    },
                    {
                      "reference": "Proverbs 18:10",
                      "text": "The name of the LORD is a strong tower: the righteous runneth into it, and is safe.",
                      "genZ": "The name of God is a strong fortress. The righteous run into it and are safe."
                    },


                    
                      {
                        "reference": "Romans 8:38",
                        "text": "For I am persuaded, that neither death, nor life, nor angels, nor principalities, nor powers, nor things present, nor things to come,",
                        "genZ": "I'm fully convinced that neither death nor life, angels nor demons, nothing now or in the future..."
                      },
                      {
                        "reference": "Proverbs 19:23",
                        "text": "The fear of the LORD tendeth to life: and he that hath it shall abide satisfied; he shall not be visited with evil.",
                        "genZ": "Respect for God leads to life. Whoever has it lives satisfied and untouched by evil."
                      },
                      {
                        "reference": "Romans 8:39",
                        "text": "Nor height, nor depth, nor any other creature, shall be able to separate us from the love of God, which is in Christ Jesus our Lord.",
                        "genZ": "...nor height nor depth, nor any other created thing, can separate us from God's love in Christ Jesus."
                      },
                      {
                        "reference": "Isaiah 12:2",
                        "text": "Behold, God is my salvation; I will trust, and not be afraid: for the LORD JEHOVAH is my strength and my song; he also is become my salvation.",
                        "genZ": "Look! God is my salvation. I will trust and not be afraid, because God is my strength and my song; He has become my salvation."
                      },
                      {
                        "reference": "1 Corinthians 10:13",
                        "text": "There hath no temptation taken you but such as is common to man: but God is faithful, who will not suffer you to be tempted above that ye are able; but will with the temptation also make a way to escape, that ye may be able to bear it.",
                        "genZ": "No temptation has hit you except what's common to everyone. But God is faithful; He won't let you be tempted beyond what you can handle, and will provide a way out so you can stand it."
                      },
                      {
                        "reference": "Isaiah 25:4",
                        "text": "For thou hast been a strength to the poor, a strength to the needy in his distress, a refuge from the storm, a shadow from the heat, when the blast of the terrible ones is as a storm against the wall.",
                        "genZ": "You've been strength for the poor and needy in distress, a refuge from the storm, shade from the heat when the fury of the ruthless is like a storm."
                      },
                      {
                        "reference": "2 Corinthians 1:4",
                        "text": "Who comforteth us in all our tribulation, that we may be able to comfort them which are in any trouble, by the comfort wherewith we ourselves are comforted of God.",
                        "genZ": "He comforts us in all our troubles so we can comfort others with the same comfort we've received from God."
                      },
                      {
                        "reference": "Isaiah 26:7",
                        "text": "The way of the just is uprightness: thou, most upright, dost weigh the path of the just.",
                        "genZ": "The path of the righteous is level. You, the perfectly upright One, make the way of the righteous smooth."
                      },
                      {
                        "reference": "2 Corinthians 4:17",
                        "text": "For our light affliction, which is but for a moment, worketh for us a far more exceeding and eternal weight of glory;",
                        "genZ": "Our light and momentary troubles are achieving for us an eternal glory that far outweighs them all."
                      },
                      {
                        "reference": "Isaiah 30:21",
                        "text": "And thine ears shall hear a word behind thee, saying, This is the way, walk ye in it, when ye turn to the right hand, and when ye turn to the left.",
                        "genZ": "Your ears will hear a voice behind you saying, 'This is the way, walk in it,' whether you turn right or left."
                      },
                      {
                        "reference": "Galatians 6:9",
                        "text": "And let us not be weary in well doing: for in due season we shall reap, if we faint not.",
                        "genZ": "Let's not get tired of doing good, because we'll harvest at the right time if we don't give up."
                      },
                      {
                        "reference": "Isaiah 32:2",
                        "text": "And a man shall be as an hiding place from the wind, and a covert from the tempest; as rivers of water in a dry place, as the shadow of a great rock in a weary land.",
                        "genZ": "A person will be like a shelter from the wind, a hiding place from the storm, like streams in the desert, like the shade of a massive rock in a parched land."
                      },
                      {
                        "reference": "Ephesians 2:10",
                        "text": "For we are his workmanship, created in Christ Jesus unto good works, which God hath before ordained that we should walk in them.",
                        "genZ": "We are God's masterpiece, created in Christ to do good things, which He prepared in advance for us to do."
                      },
                      {
                        "reference": "Isaiah 33:16",
                        "text": "He shall dwell on high: his place of defence shall be the munitions of rocks: bread shall be given him; his waters shall be sure.",
                        "genZ": "He'll live in the heights; his fortress will be rocky cliffs. His bread will be supplied, his water guaranteed."
                      },
                      {
                        "reference": "Philippians 1:6",
                        "text": "Being confident of this very thing, that he which hath begun a good work in you will perform it until the day of Jesus Christ:",
                        "genZ": "I'm confident of this: He who started a good work in you will carry it to completion until the day of Christ."
                      },
                      {
                        "reference": "Isaiah 40:11",
                        "text": "He shall feed his flock like a shepherd: he shall gather the lambs with his arm, and carry them in his bosom, and shall gently lead those that are with young.",
                        "genZ": "He tends His flock like a shepherd. He gathers the lambs in His arms and carries them close to His heart. He gently leads the mother sheep."
                      },
                      {
                        "reference": "Philippians 4:19",
                        "text": "But my God shall supply all your need according to his riches in glory by Christ Jesus.",
                        "genZ": "My God will meet all your needs according to His glorious riches in Christ Jesus."
                      },
                      {
                        "reference": "Isaiah 41:10",
                        "text": "Fear thou not; for I am with thee: be not dismayed; for I am thy God: I will strengthen thee; yea, I will help thee; yea, I will uphold thee with the right hand of my righteousness.",
                        "genZ": "Don't be afraid, I'm with you. Don't be discouraged, I am your God. I'll strengthen you, help you, and uphold you with My righteous right hand."
                      },
                      {
                        "reference": "Colossians 3:15",
                        "text": "And let the peace of God rule in your hearts, to the which also ye are called in one body; and be ye thankful.",
                        "genZ": "Let the peace of Christ rule in your hearts, since you were called to peace as one body. And be thankful."
                      },
                      {
                        "reference": "Isaiah 43:4",
                        "text": "Since thou wast precious in my sight, thou hast been honourable, and I have loved thee: therefore will I give men for thee, and people for thy life.",
                        "genZ": "Because you are precious and honored in My sight, and I love you, I will give people in exchange for you, nations for your life."
                      },


                      
                        {
                          "reference": "1 Thessalonians 5:23",
                          "text": "And the very God of peace sanctify you wholly; and I pray God your whole spirit and soul and body be preserved blameless unto the coming of our Lord Jesus Christ.",
                          "genZ": "May the God of peace make you holy in every way. May your whole spirit, soul, and body be kept blameless for the coming of Jesus."
                        },
                        {
                          "reference": "Isaiah 45:2",
                          "text": "I will go before thee, and make the crooked places straight: I will break in pieces the gates of brass, and cut in sunder the bars of iron:",
                          "genZ": "I'll go ahead of you and straighten the twisted roads. I'll break down bronze gates and cut through iron bars."
                        },
                        {
                          "reference": "2 Thessalonians 3:3",
                          "text": "But the Lord is faithful, who shall stablish you, and keep you from evil.",
                          "genZ": "But the Lord is faithful. He'll strengthen you and guard you from the evil one."
                        },
                        {
                          "reference": "Isaiah 48:17",
                          "text": "Thus saith the LORD, thy Redeemer, the Holy One of Israel; I am the LORD thy God which teacheth thee to profit, which leadeth thee by the way that thou shouldest go.",
                          "genZ": "This is what the Lord, your Redeemer, says: I am God, who teaches you what is best, who directs you in the way you should go."
                        },
                        {
                          "reference": "Hebrews 4:16",
                          "text": "Let us therefore come boldly unto the throne of grace, that we may obtain mercy, and find grace to help in time of need.",
                          "genZ": "So let's approach God's throne of grace with confidence, so we can receive mercy and find grace to help us when we need it."
                        },
                        {
                          "reference": "Isaiah 49:16",
                          "text": "Behold, I have graven thee upon the palms of my hands; thy walls are continually before me.",
                          "genZ": "Look, I have engraved you on the palms of My hands; your walls are ever before Me."
                        },
                        {
                          "reference": "Hebrews 10:23",
                          "text": "Let us hold fast the profession of our faith without wavering; (for he is faithful that promised;)",
                          "genZ": "Let's hold unswervingly to the hope we profess, for He who promised is faithful."
                        },
                        {
                          "reference": "Isaiah 51:12",
                          "text": "I, even I, am he that comforteth you: who art thou, that thou shouldest be afraid of a man that shall die, and of the son of man which shall be made as grass;",
                          "genZ": "I, I am He who comforts you. Who are you that you fear mere mortals, humans who are like grass?"
                        },
                        {
                          "reference": "Hebrews 11:1",
                          "text": "Now faith is the substance of things hoped for, the evidence of things not seen.",
                          "genZ": "Faith is the confidence in what we hope for, the proof of what we don't yet see."
                        },
                        {
                          "reference": "Isaiah 54:5",
                          "text": "For thy Maker is thine husband; the LORD of hosts is his name; and thy Redeemer the Holy One of Israel; The God of the whole earth shall he be called.",
                          "genZ": "Your Maker is your husband—the Lord Almighty is His name. Your Redeemer is the Holy One of Israel; He's called the God of all the earth."
                        },
                        {
                          "reference": "James 1:5",
                          "text": "If any of you lack wisdom, let him ask of God, that giveth to all men liberally, and upbraideth not; and it shall be given him.",
                          "genZ": "If any of you lacks wisdom, ask God, who gives generously to all without finding fault, and it will be given to you."
                        },
                        {
                          "reference": "Isaiah 55:12",
                          "text": "For ye shall go out with joy, and be led forth with peace: the mountains and the hills shall break forth before you into singing, and all the trees of the field shall clap their hands.",
                          "genZ": "You'll go out in joy and be led forth in peace. The mountains and hills will burst into song, and all the trees will clap their hands."
                        },
                        {
                          "reference": "James 4:8",
                          "text": "Draw nigh to God, and he will draw nigh to you. Cleanse your hands, ye sinners; and purify your hearts, ye double minded.",
                          "genZ": "Come close to God, and He'll come close to you. Clean up your act, you sinners. Purify your hearts, you waverers."
                        },
                        {
                          "reference": "Isaiah 58:11",
                          "text": "And the LORD shall guide thee continually, and satisfy thy soul in drought, and make fat thy bones: and thou shalt be like a watered garden, and like a spring of water, whose waters fail not.",
                          "genZ": "God will guide you always. He'll satisfy you in drought and strengthen your frame. You'll be like a well-watered garden, a spring whose waters never fail."
                        },
                        {
                          "reference": "1 Peter 2:9",
                          "text": "But ye are a chosen generation, a royal priesthood, an holy nation, a peculiar people; that ye should shew forth the praises of him who hath called you out of darkness into his marvellous light:",
                          "genZ": "You are a chosen people, a royal priesthood, a holy nation, God's special possession. So you can declare the praises of Him who called you out of darkness into His wonderful light."
                        },
                        {
                          "reference": "Isaiah 60:1",
                          "text": "Arise, shine; for thy light is come, and the glory of the LORD is risen upon thee.",
                          "genZ": "Arise, shine, for your light has come, and the glory of the Lord rises upon you."
                        },
                        {
                          "reference": "1 John 1:9",
                          "text": "If we confess our sins, he is faithful and just to forgive us our sins, and to cleanse us from all unrighteousness.",
                          "genZ": "If we confess our sins, He is faithful and just to forgive us and purify us from all unrighteousness."
                        },
                        {
                          "reference": "Jeremiah 1:5",
                          "text": "Before I formed thee in the belly I knew thee; and before thou camest forth out of the womb I sanctified thee, and I ordained thee a prophet unto the nations.",
                          "genZ": "Before I formed you in the womb I knew you. Before you were born I set you apart; I appointed you as a prophet to the nations."
                        },
                        {
                          "reference": "1 John 4:18",
                          "text": "There is no fear in love; but perfect love casteth out fear: because fear hath torment. He that feareth is not made perfect in love.",
                          "genZ": "There's no fear in love. Perfect love drives out fear, because fear involves punishment. The one who fears isn't made perfect in love."
                        },
                        {
                          "reference": "Jeremiah 15:16",
                          "text": "Thy words were found, and I did eat them; and thy word was unto me the joy and rejoicing of mine heart: for I am called by thy name, O LORD God of hosts.",
                          "genZ": "I found Your words and devoured them. They became my heart's joy and delight, for I bear Your name."
                        },


                        
                          {
                            "reference": "Revelation 3:20",
                            "text": "Behold, I stand at the door, and knock: if any man hear my voice, and open the door, I will come in to him, and will sup with him, and he with me.",
                            "genZ": "Look! I stand at the door and knock. If anyone hears My voice and opens, I'll come in and we'll have a meal together."
                          },
                          {
                            "reference": "Jeremiah 17:14",
                            "text": "Heal me, O LORD, and I shall be healed; save me, and I shall be saved: for thou art my praise.",
                            "genZ": "Heal me, Lord, and I'll be healed; save me, and I'll be saved, for You are the one I praise."
                          },
                          {
                            "reference": "Revelation 21:4",
                            "text": "And God shall wipe away all tears from their eyes; and there shall be no more death, neither sorrow, nor crying, neither shall there be any more pain: for the former things are passed away.",
                            "genZ": "God will wipe every tear from their eyes. There'll be no more death, mourning, crying, or pain, for the old order of things has passed away."
                          },
                          {
                            "reference": "Jeremiah 29:11",
                            "text": "For I know the thoughts that I think toward you, saith the LORD, thoughts of peace, and not of evil, to give you an expected end.",
                            "genZ": "I know the plans I have for you, plans to prosper you and not to harm you, plans to give you hope and a future."
                          },
                          {
                            "reference": "Genesis 28:15",
                            "text": "And, behold, I am with thee, and will keep thee in all places whither thou goest, and will bring thee again into this land; for I will not leave thee, until I have done that which I have spoken to thee of.",
                            "genZ": "I am with you and will watch over you wherever you go. I'll bring you back to this land. I won't leave you until I've done what I've promised you."
                          },
                          {
                            "reference": "Jeremiah 31:3",
                            "text": "The LORD hath appeared of old unto me, saying, Yea, I have loved thee with an everlasting love: therefore with lovingkindness have I drawn thee.",
                            "genZ": "The Lord appeared to us in the past, saying: 'I have loved you with an everlasting love; I have drawn you with unfailing kindness.'"
                          },
                          {
                            "reference": "Exodus 33:14",
                            "text": "And he said, My presence shall go with thee, and I will give thee rest.",
                            "genZ": "He said, 'My Presence will go with you, and I will give you rest.'"
                          },
                          {
                            "reference": "Jeremiah 33:3",
                            "text": "Call unto me, and I will answer thee, and shew thee great and mighty things, which thou knowest not.",
                            "genZ": "Call to Me and I will answer you and tell you great and unsearchable things you do not know."
                          },
                          {
                            "reference": "Deuteronomy 7:9",
                            "text": "Know therefore that the LORD thy God, he is God, the faithful God, which keepeth covenant and mercy with them that love him and keep his commandments to a thousand generations;",
                            "genZ": "Know therefore that the Lord your God is God; He is the faithful God, keeping His covenant of love to a thousand generations of those who love Him and keep His commands."
                          },
                          {
                            "reference": "Lamentations 3:25",
                            "text": "The LORD is good unto them that wait for him, to the soul that seeketh him.",
                            "genZ": "The Lord is good to those whose hope is in Him, to the one who seeks Him."
                          },
                          {
                            "reference": "Joshua 1:9",
                            "text": "Have not I commanded thee? Be strong and of a good courage; be not afraid, neither be thou dismayed: for the LORD thy God is with thee whithersoever thou goest.",
                            "genZ": "Haven't I commanded you? Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go."
                          },
                          {
                            "reference": "Ezekiel 34:26",
                            "text": "And I will make them and the places round about my hill a blessing; and I will cause the shower to come down in his season; there shall be showers of blessing.",
                            "genZ": "I'll bless them and the areas around My hill. I'll send rain in season; there will be showers of blessing."
                          },
                          {
                            "reference": "Judges 6:12",
                            "text": "And the angel of the LORD appeared unto him, and said unto him, The LORD is with thee, thou mighty man of valour.",
                            "genZ": "The angel of the Lord appeared to him and said, 'The Lord is with you, mighty warrior.'"
                          },
                          {
                            "reference": "Daniel 10:19",
                            "text": "And said, O man greatly beloved, fear not: peace be unto thee, be strong, yea, be strong. And when he had spoken unto me, I was strengthened, and said, Let my lord speak; for thou hast strengthened me.",
                            "genZ": "He said, 'You who are highly esteemed, do not be afraid. Peace! Be strong now; be strong.' When he spoke, I was strengthened and said, 'Speak, my lord, for you have strengthened me.'"
                          },
                          {
                            "reference": "Ruth 2:12",
                            "text": "The LORD recompense thy work, and a full reward be given thee of the LORD God of Israel, under whose wings thou art come to trust.",
                            "genZ": "May the Lord repay you for what you have done. May you be richly rewarded by the Lord, the God of Israel, under whose wings you have come to take refuge."
                          },
                          {
                            "reference": "Hosea 14:4",
                            "text": "I will heal their backsliding, I will love them freely: for mine anger is turned away from him.",
                            "genZ": "I will heal their waywardness and love them freely, for my anger has turned away from them."
                          },
                          {
                            "reference": "1 Samuel 2:2",
                            "text": "There is none holy as the LORD: for there is none beside thee: neither is there any rock like our God.",
                            "genZ": "There is no one holy like the Lord; there is no one besides you; there is no Rock like our God."
                          },
                          {
                            "reference": "Joel 2:25",
                            "text": "And I will restore to you the years that the locust hath eaten, the cankerworm, and the caterpiller, and the palmerworm, my great army which I sent among you.",
                            "genZ": "I will repay you for the years the locusts have eaten—the great locust and the young locust, the other locusts and the locust swarm—my great army that I sent among you."
                          },


                          
                            {
                              "reference": "Genesis 1:1",
                              "text": "In the beginning God created the heaven and the earth.",
                              "genZ": "In the beginning, God set up the whole universe—sky and earth. The original launch."
                            },
                            {
                              "reference": "Exodus 14:14",
                              "text": "The LORD shall fight for you, and ye shall hold your peace.",
                              "genZ": "God will handle the battle for you. Your only job is to stay calm and let Him work."
                            },
                            {
                              "reference": "Leviticus 26:12",
                              "text": "And I will walk among you, and will be your God, and ye shall be my people.",
                              "genZ": "I'll move through your space and be your God. You'll be My people—exclusive."
                            },
                            {
                              "reference": "Numbers 6:24",
                              "text": "The LORD bless thee, and keep thee:",
                              "genZ": "May God bless you and protect your energy."
                            },
                            {
                              "reference": "Deuteronomy 4:29",
                              "text": "But if from thence thou shalt seek the LORD thy God, thou shalt find him, if thou seek him with all thy heart and with all thy soul.",
                              "genZ": "But if you search for God with your whole heart and soul, you will 100% find Him."
                            },
                            {
                              "reference": "Joshua 24:15",
                              "text": "But as for me and my house, we will serve the LORD.",
                              "genZ": "But me and my family? We're choosing God's side. That's our vibe."
                            },
                            {
                              "reference": "Judges 5:31",
                              "text": "So let all thine enemies perish, O LORD: but let them that love him be as the sun when he goeth forth in his might.",
                              "genZ": "Let Your enemies fade out, God. But let everyone who loves You shine bright like the sun at peak power."
                            },
                            {
                              "reference": "Ruth 1:16",
                              "text": "And Ruth said, Intreat me not to leave thee, or to return from following after thee: for whither thou goest, I will go; and where thou lodgest, I will lodge: thy people shall be my people, and thy God my God:",
                              "genZ": "Ruth was like, 'Don't ask me to leave. Where you go, I go. Your people are my people. Your God is my God.' Ultimate loyalty."
                            },
                            {
                              "reference": "1 Samuel 16:7",
                              "text": "But the LORD said unto Samuel, Look not on his countenance, or on the height of his stature; because I have refused him: for the LORD seeth not as man seeth; for man looketh on the outward appearance, but the LORD looketh on the heart.",
                              "genZ": "God told Samuel, 'Don't judge by looks or height. I see differently—people see the surface, but I see the heart.'"
                            },
                            {
                              "reference": "2 Samuel 22:33",
                              "text": "God is my strength and power: and he maketh my way perfect.",
                              "genZ": "God is my raw strength and energy source. He optimizes my path."
                            },
                            {
                              "reference": "1 Kings 8:23",
                              "text": "And he said, LORD God of Israel, there is no God like thee, in heaven above, or on earth beneath, who keepest covenant and mercy with thy servants that walk before thee with all their heart:",
                              "genZ": "He prayed, 'God of Israel, no one is like You anywhere. You keep Your promises and show mercy to those who live wholeheartedly for You.'"
                            },
                            {
                              "reference": "2 Kings 6:16",
                              "text": "And he answered, Fear not: for they that be with us are more than they that be with them.",
                              "genZ": "He said, 'Don't be scared. The ones on our side outnumber the ones on theirs.'"
                            },
                            {
                              "reference": "1 Chronicles 16:34",
                              "text": "O give thanks unto the LORD; for he is good; for his mercy endureth for ever.",
                              "genZ": "Thank God! He's good, and His mercy has no expiration date."
                            },
                            {
                              "reference": "2 Chronicles 7:14",
                              "text": "If my people, which are called by my name, shall humble themselves, and pray, and seek my face, and turn from their wicked ways; then will I hear from heaven, and will forgive their sin, and will heal their land.",
                              "genZ": "If My people—the ones with My name—stay humble, pray, seek Me, and turn from their toxic ways, I'll listen, forgive, and fix their situation."
                            },
                            {
                              "reference": "Ezra 8:22",
                              "text": "For I was ashamed to require of the king a band of soldiers and horsemen to help us against the enemy in the way: because we had spoken unto the king, saying, The hand of our God is upon all them for good that seek him; but his power and his wrath is against all them that forsake him.",
                              "genZ": "I was too embarrassed to ask the king for troops because we'd told him, 'God's hand is on everyone who seeks Him for good, but His power is against those who ditch Him.'"
                            },
                            {
                              "reference": "Nehemiah 8:10",
                              "text": "Then he said unto them, Go your way, eat the fat, and drink the sweet, and send portions unto them for whom nothing is prepared: for this day is holy unto our LORD: neither be ye sorry; for the joy of the LORD is your strength.",
                              "genZ": "He told them, 'Go feast, enjoy the good stuff, and share with those who have nothing. Today is sacred. Don't be sad—God's joy is your power source.'"
                            },
                            {
                              "reference": "Esther 4:14",
                              "text": "For if thou altogether holdest thy peace at this time, then shall there enlargement and deliverance arise to the Jews from another place; but thou and thy father's house shall be destroyed: and who knoweth whether thou art come to the kingdom for such a time as this?",
                              "genZ": "If you stay silent now, help will come from somewhere else, but you and your family will be canceled. What if you were made for this exact moment?"
                            },
                            {
                              "reference": "Job 42:2",
                              "text": "I know that thou canst do every thing, and that no thought can be withholden from thee.",
                              "genZ": "I know You can do anything. No plan of Yours can be blocked."
                            },
                            {
                              "reference": "Psalm 1:3",
                              "text": "And he shall be like a tree planted by the rivers of water, that bringeth forth his fruit in his season; his leaf also shall not wither; and whatsoever he doeth shall prosper.",
                              "genZ": "They'll be like a tree planted by a river—always producing fruit on time, never wilting, and everything they do will thrive."
                            },
                            {
                              "reference": "Proverbs 1:7",
                              "text": "The fear of the LORD is the beginning of knowledge: but fools despise wisdom and instruction.",
                              "genZ": "Respecting God is the first step to real knowledge. Fools hate wisdom and any kind of correction."
                            },
                            
                            

                          
                              {
                                "reference": "Ecclesiastes 3:1",
                                "text": "To every thing there is a season, and a time to every purpose under the heaven:",
                                "genZ": "There's a right time for everything—every moment has a purpose under heaven."
                              },
                              {
                                "reference": "Song of Solomon 8:7",
                                "text": "Many waters cannot quench love, neither can the floods drown it: if a man would give all the substance of his house for love, it would utterly be contemned.",
                                "genZ": "No amount of chaos can put out real love; floods can't drown it. You can't even buy it with everything you own—it's priceless."
                              },
                              {
                                "reference": "Isaiah 7:14",
                                "text": "Therefore the Lord himself shall give you a sign; Behold, a virgin shall conceive, and bear a son, and shall call his name Immanuel.",
                                "genZ": "So God Himself will give you a sign: A virgin will have a son and name him Immanuel (God with us)."
                              },
                              {
                                "reference": "Jeremiah 1:7",
                                "text": "But the LORD said unto me, Say not, I am a child: for thou shalt go to all that I shall send thee, and whatsoever I command thee thou shalt speak.",
                                "genZ": "But God told me, 'Don't say you're too young. You'll go where I send you and say what I tell you to say.'"
                              },
                              {
                                "reference": "Lamentations 5:21",
                                "text": "Turn thou us unto thee, O LORD, and we shall be turned; renew our days as of old.",
                                "genZ": "Turn us back to You, God—then we'll actually turn. Refresh our story like the old days."
                              },
                              {
                                "reference": "Ezekiel 36:26",
                                "text": "A new heart also will I give you, and a new spirit will I put within you: and I will take away the stony heart out of your flesh, and I will give you an heart of flesh.",
                                "genZ": "I'll give you a new heart and put a new spirit in you. I'll swap your stone-cold heart for a living, feeling one."
                              },
                              {
                                "reference": "Daniel 2:22",
                                "text": "He revealeth the deep and secret things: he knoweth what is in the darkness, and the light dwelleth with him.",
                                "genZ": "He reveals deep, hidden things. He knows what's in the dark, and light lives with Him."
                              },
                              {
                                "reference": "Hosea 2:19",
                                "text": "And I will betroth thee unto me for ever; yea, I will betroth thee unto me in righteousness, and in judgment, and in lovingkindness, and in mercies.",
                                "genZ": "I'll commit to you forever—in righteousness, justice, loyal love, and mercy."
                              },
                              {
                                "reference": "Joel 2:13",
                                "text": "And rend your heart, and not your garments, and turn unto the LORD your God: for he is gracious and merciful, slow to anger, and of great kindness, and repenteth him of the evil.",
                                "genZ": "Tear your heart, not your clothes. Turn back to God—He's gracious, merciful, slow to anger, full of kindness, and relents from sending disaster."
                              },
                              {
                                "reference": "Amos 5:24",
                                "text": "But let judgment run down as waters, and righteousness as a mighty stream.",
                                "genZ": "Let justice flow like a river, righteousness like a never-ending stream."
                              },
                              {
                                "reference": "Obadiah 1:17",
                                "text": "But upon mount Zion shall be deliverance, and there shall be holiness; and the house of Jacob shall possess their possessions.",
                                "genZ": "But on Mount Zion there will be deliverance and holiness. God's people will reclaim what's theirs."
                              },
                              {
                                "reference": "Jonah 2:2",
                                "text": "And said, I cried by reason of mine affliction unto the LORD, and he heard me; out of the belly of hell cried I, and thou heardest my voice.",
                                "genZ": "He said, 'In my trouble I cried to God, and He heard me. From deep in the pit I shouted, and You listened.'"
                              },
                              {
                                "reference": "Micah 7:7",
                                "text": "Therefore I will look unto the LORD; I will wait for the God of my salvation: my God will hear me.",
                                "genZ": "So I'll look to God; I'll wait for the God of my salvation. My God will hear me."
                              },
                              {
                                "reference": "Nahum 1:7",
                                "text": "The LORD is good, a strong hold in the day of trouble; and he knoweth them that trust in him.",
                                "genZ": "God is good—a fortress when trouble hits. And He personally knows everyone who trusts in Him."
                              },
                              {
                                "reference": "Habakkuk 2:4",
                                "text": "Behold, his soul which is lifted up is not upright in him: but the just shall live by his faith.",
                                "genZ": "Look, the proud person isn't right within, but the righteous person will live by their faith."
                              },
                              {
                                "reference": "Zephaniah 2:3",
                                "text": "Seek ye the LORD, all ye meek of the earth, which have wrought his judgment; seek righteousness, seek meekness: it may be ye shall be hid in the day of the LORD's anger.",
                                "genZ": "Seek God, all you humble people who live His ways. Seek righteousness, seek humility. You might be hidden when God's anger comes."
                              },
                              {
                                "reference": "Haggai 1:7",
                                "text": "Thus saith the LORD of hosts; Consider your ways.",
                                "genZ": "This is what God says: 'Think about your life choices.'"
                              },
                              {
                                "reference": "Zechariah 4:10",
                                "text": "For who hath despised the day of small things? for they shall rejoice, and shall see the plummet in the hand of Zerubbabel with those seven; they are the eyes of the LORD, which run to and fro through the whole earth.",
                                "genZ": "Who looks down on small beginnings? They'll celebrate when they see the progress. God's eyes are scanning the whole earth."
                              },
                              {
                                "reference": "Malachi 4:2",
                                "text": "But unto you that fear my name shall the Sun of righteousness arise with healing in his wings; and ye shall go forth, and grow up as calves of the stall.",
                                "genZ": "But for you who respect My name, the Sun of Righteousness will rise with healing in His rays. You'll go out and leap like calves released from the stall."
                              },
                              {
                                "reference": "Matthew 5:4",
                                "text": "Blessed are they that mourn: for they shall be comforted.",
                                "genZ": "Blessed are those who grieve—they'll be comforted."
                              },


                              
                                {
                                  "reference": "Mark 10:27",
                                  "text": "And Jesus looking upon them saith, With men it is impossible, but not with God: for with God all things are possible.",
                                  "genZ": "Jesus looked at them and said, 'With people it's impossible, but not with God. With God, everything is possible.'"
                                },
                                {
                                  "reference": "Luke 6:38",
                                  "text": "Give, and it shall be given unto you; good measure, pressed down, and shaken together, and running over, shall men give into your bosom. For with the same measure that ye mete withal it shall be measured to you again.",
                                  "genZ": "Give, and it'll be given to you—a generous amount, packed down, shaken together, and overflowing. The measure you use will be measured back to you."
                                },
                                {
                                  "reference": "John 1:5",
                                  "text": "And the light shineth in darkness; and the darkness comprehended it not.",
                                  "genZ": "The light shines in the darkness, and the darkness can't overcome it."
                                },
                                {
                                  "reference": "Acts 1:8",
                                  "text": "But ye shall receive power, after that the Holy Ghost is come upon you: and ye shall be witnesses unto me both in Jerusalem, and in all Judaea, and in Samaria, and unto the uttermost part of the earth.",
                                  "genZ": "You'll receive power when the Holy Spirit comes on you, and you'll be My witnesses locally and globally."
                                },
                                {
                                  "reference": "Romans 5:8",
                                  "text": "But God commendeth his love toward us, in that, while we were yet sinners, Christ died for us.",
                                  "genZ": "But God showed His love for us in this: While we were still sinners, Christ died for us."
                                },
                                {
                                  "reference": "1 Corinthians 15:58",
                                  "text": "Therefore, my beloved brethren, be ye stedfast, unmoveable, always abounding in the work of the Lord, forasmuch as ye know that your labour is not in vain in the Lord.",
                                  "genZ": "So, my people, stand firm. Don't be moved. Always give your all in God's work, knowing your effort isn't wasted."
                                },
                                {
                                  "reference": "2 Corinthians 5:17",
                                  "text": "Therefore if any man be in Christ, he is a new creature: old things are passed away; behold, all things are become new.",
                                  "genZ": "If anyone is in Christ, they're a whole new creation. The old is gone; everything is fresh."
                                },
                                {
                                  "reference": "Galatians 5:22",
                                  "text": "But the fruit of the Spirit is love, joy, peace, longsuffering, gentleness, goodness, faith,",
                                  "genZ": "But the fruit of the Spirit is love, joy, peace, patience, kindness, goodness, faithfulness..."
                                },
                                {
                                  "reference": "Ephesians 3:20",
                                  "text": "Now unto him that is able to do exceeding abundantly above all that we ask or think, according to the power that worketh in us,",
                                  "genZ": "Now to Him who can do far more than we could ever ask or imagine, according to His power working in us..."
                                },
                                {
                                  "reference": "Philippians 2:13",
                                  "text": "For it is God which worketh in you both to will and to do of his good pleasure.",
                                  "genZ": "Because God is the one working in you, giving you the desire and the ability to do what pleases Him."
                                },
                                {
                                  "reference": "Colossians 1:17",
                                  "text": "And he is before all things, and by him all things consist.",
                                  "genZ": "He existed before anything, and everything holds together because of Him."
                                },
                                {
                                  "reference": "1 Thessalonians 4:11",
                                  "text": "And that ye study to be quiet, and to do your own business, and to work with your own hands, as we commanded you;",
                                  "genZ": "Make it your goal to live quietly, mind your own business, and work with your hands, as we told you."
                                },
                                {
                                  "reference": "2 Thessalonians 2:16",
                                  "text": "Now our Lord Jesus Christ himself, and God, even our Father, which hath loved us, and hath given us everlasting consolation and good hope through grace,",
                                  "genZ": "Now may our Lord Jesus Christ Himself and God our Father, who loved us and gave us eternal comfort and good hope by grace..."
                                },
                                {
                                  "reference": "1 Timothy 6:12",
                                  "text": "Fight the good fight of faith, lay hold on eternal life, whereunto thou art also called, and hast professed a good profession before many witnesses.",
                                  "genZ": "Fight the good fight of faith. Grab hold of eternal life, which you were called to and confessed before many witnesses."
                                },
                                {
                                  "reference": "2 Timothy 1:7",
                                  "text": "For God hath not given us the spirit of fear; but of power, and of love, and of a sound mind.",
                                  "genZ": "God didn't give us a spirit of fear, but of power, love, and self-discipline."
                                },
                                {
                                  "reference": "Titus 3:5",
                                  "text": "Not by works of righteousness which we have done, but according to his mercy he saved us, by the washing of regeneration, and renewing of the Holy Ghost;",
                                  "genZ": "He saved us, not because of righteous things we did, but because of His mercy, through the washing of rebirth and renewal by the Holy Spirit."
                                },
                                {
                                  "reference": "Philemon 1:6",
                                  "text": "That the communication of thy faith may become effectual by the acknowledging of every good thing which is in you in Christ Jesus.",
                                  "genZ": "I pray that your partnership in the faith may become effective as you recognize every good thing we have in Christ."
                                },
                                {
                                  "reference": "Hebrews 6:19",
                                  "text": "Which hope we have as an anchor of the soul, both sure and stedfast, and which entereth into that within the veil;",
                                  "genZ": "We have this hope as an anchor for the soul, firm and secure, reaching behind the curtain."
                                },
                                {
                                  "reference": "James 1:17",
                                  "text": "Every good gift and every perfect gift is from above, and cometh down from the Father of lights, with whom is no variableness, neither shadow of turning.",
                                  "genZ": "Every good and perfect gift is from above, coming down from the Father of lights, who doesn't change like shifting shadows."
                                },
                                {
                                  "reference": "1 Peter 1:3",
                                  "text": "Blessed be the God and Father of our Lord Jesus Christ, which according to his abundant mercy hath begotten us again unto a lively hope by the resurrection of Jesus Christ from the dead,",
                                  "genZ": "Praise God, who in His great mercy has given us new birth into a living hope through the resurrection of Jesus."
                                },



                                
                                  {
                                    "reference": "2 Peter 1:4",
                                    "text": "Whereby are given unto us exceeding great and precious promises: that by these ye might be partakers of the divine nature, having escaped the corruption that is in the world through lust.",
                                    "genZ": "Through these He has given us His great and precious promises, so that through them you may share in His nature, escaping the world's corruption caused by desire."
                                  },
                                  {
                                    "reference": "1 John 3:1",
                                    "text": "Behold, what manner of love the Father hath bestowed upon us, that we should be called the sons of God: therefore the world knoweth us not, because it knew him not.",
                                    "genZ": "Look at the kind of love the Father has given us: we're called children of God. That's why the world doesn't get us—it didn't get Him either."
                                  },
                                  {
                                    "reference": "2 John 1:6",
                                    "text": "And this is love, that we walk after his commandments. This is the commandment, That, as ye have heard from the beginning, ye should walk in it.",
                                    "genZ": "This is love: that we live according to His commands. This is the command, just as you've heard from the beginning: live in it."
                                  },
                                  {
                                    "reference": "3 John 1:4",
                                    "text": "I have no greater joy than to hear that my children walk in truth.",
                                    "genZ": "Nothing makes me happier than hearing that my spiritual children are living in truth."
                                  },
                                  {
                                    "reference": "Jude 1:24",
                                    "text": "Now unto him that is able to keep you from falling, and to present you faultless before the presence of his glory with exceeding joy,",
                                    "genZ": "To Him who is able to keep you from stumbling and present you before His glorious presence without fault and with great joy..."
                                  },
                                  {
                                    "reference": "Revelation 1:8",
                                    "text": "I am Alpha and Omega, the beginning and the ending, saith the Lord, which is, and which was, and which is to come, the Almighty.",
                                    "genZ": "I am the Alpha and Omega, the beginning and the end, says the Lord God, who is, who was, and who is to come, the Almighty."
                                  },
                                  {
                                    "reference": "Revelation 2:10",
                                    "text": "Fear none of those things which thou shalt suffer: behold, the devil shall cast some of you into prison, that ye may be tried; and ye shall have tribulation ten days: be thou faithful unto death, and I will give thee a crown of life.",
                                    "genZ": "Don't be afraid of what you'll suffer. The devil will test some of you, but be faithful even to death, and I'll give you the crown of life."
                                  },
                                  {
                                    "reference": "Revelation 3:5",
                                    "text": "He that overcometh, the same shall be clothed in white raiment; and I will not blot out his name out of the book of life, but I will confess his name before my Father, and before his angels.",
                                    "genZ": "The one who overcomes will be dressed in white. I won't erase their name from the book of life but will acknowledge them before My Father and His angels."
                                  },
                                  {
                                    "reference": "Revelation 4:8",
                                    "text": "And the four beasts had each of them six wings about him; and they were full of eyes within: and they rest not day and night, saying, Holy, holy, holy, Lord God Almighty, which was, and is, and is to come.",
                                    "genZ": "The four living creatures each had six wings and were covered with eyes. Day and night they never stop saying, 'Holy, holy, holy is the Lord God Almighty, who was, and is, and is to come.'"
                                  },
                                  {
                                    "reference": "Revelation 5:5",
                                    "text": "And one of the elders saith unto me, Weep not: behold, the Lion of the tribe of Juda, the Root of David, hath prevailed to open the book, and to loose the seven seals thereof.",
                                    "genZ": "One of the elders said to me, 'Stop crying. Look, the Lion of Judah, the Root of David, has triumphed to open the scroll and its seven seals.'"
                                  },
                                  {
                                    "reference": "Revelation 7:17",
                                    "text": "For the Lamb which is in the midst of the throne shall feed them, and shall lead them unto living fountains of waters: and God shall wipe away all tears from their eyes.",
                                    "genZ": "The Lamb at the center of the throne will shepherd them and lead them to springs of living water. God will wipe every tear from their eyes."
                                  },
                                  {
                                    "reference": "Revelation 12:11",
                                    "text": "And they overcame him by the blood of the Lamb, and by the word of their testimony; and they loved not their lives unto the death.",
                                    "genZ": "They triumphed over him by the blood of the Lamb and by the word of their testimony; they didn't love their lives even in the face of death."
                                  },
                                  {
                                    "reference": "Revelation 19:6",
                                    "text": "And I heard as it were the voice of a great multitude, and as the voice of many waters, and as the voice of mighty thunderings, saying, Alleluia: for the Lord God omnipotent reigneth.",
                                    "genZ": "Then I heard what sounded like a great multitude, like the roar of rushing waters and loud peals of thunder, shouting: 'Hallelujah! For our Lord God Almighty reigns.'"
                                  },
                                  {
                                    "reference": "Revelation 21:6",
                                    "text": "And he said unto me, It is done. I am Alpha and Omega, the beginning and the end. I will give unto him that is athirst of the fountain of the water of life freely.",
                                    "genZ": "He said to me, 'It is done. I am the Alpha and Omega, the Beginning and the End. To the thirsty I will give water from the spring of life freely.'"
                                  },
                                  {
                                    "reference": "Revelation 22:13",
                                    "text": "I am Alpha and Omega, the beginning and the end, the first and the last.",
                                    "genZ": "I am the Alpha and Omega, the First and the Last, the Beginning and the End."
                                  },
                                  {
                                    "reference": "Psalm 19:1",
                                    "text": "The heavens declare the glory of God; and the firmament sheweth his handywork.",
                                    "genZ": "The skies are telling the glory of God; the universe shows off His craftsmanship."
                                  },
                                  {
                                    "reference": "Proverbs 8:17",
                                    "text": "I love them that love me; and those that seek me early shall find me.",
                                    "genZ": "I love those who love Me, and those who seek Me diligently will find Me."
                                  },
                                  {
                                    "reference": "Isaiah 9:6",
                                    "text": "For unto us a child is born, unto us a son is given: and the government shall be upon his shoulder: and his name shall be called Wonderful, Counseller, The mighty God, The everlasting Father, The Prince of Peace.",
                                    "genZ": "A child is born to us, a son is given. The government will be on His shoulders. He'll be called Wonderful Counselor, Mighty God, Everlasting Father, Prince of Peace."
                                  },
                                  {
                                    "reference": "Jeremiah 10:10",
                                    "text": "But the LORD is the true God, he is the living God, and an everlasting king: at his wrath the earth shall tremble, and the nations shall not be able to abide his indignation.",
                                    "genZ": "But God is the real God; He's the living God, the eternal King. The earth trembles at His anger; nations can't endure His wrath."
                                  },
                                  {
                                    "reference": "Ezekiel 34:11",
                                    "text": "For thus saith the Lord GOD; Behold, I, even I, will both search my sheep, and seek them out.",
                                    "genZ": "This is what God says: 'I Myself will search for My sheep and look after them.'"
                                  },


                                  
                                    {
                                      "reference": "Daniel 6:26",
                                      "text": "I make a decree, That in every dominion of my kingdom men tremble and fear before the God of Daniel: for he is the living God, and stedfast for ever, and his kingdom that which shall not be destroyed, and his dominion shall be even unto the end.",
                                      "genZ": "I issue a decree that in every part of my kingdom people must fear the God of Daniel. For He is the living God, enduring forever; His kingdom will not be destroyed, His dominion never ends."
                                    },
                                    {
                                      "reference": "Hosea 6:3",
                                      "text": "Then shall we know, if we follow on to know the LORD: his going forth is prepared as the morning; and he shall come unto us as the rain, as the latter and former rain unto the earth.",
                                      "genZ": "Let's press on to know God. His coming is as certain as the dawn; He'll come to us like the rain, like spring rains watering the earth."
                                    },
                                    {
                                      "reference": "Joel 3:16",
                                      "text": "The LORD also shall roar out of Zion, and utter his voice from Jerusalem; and the heavens and the earth shall shake: but the LORD will be the hope of his people, and the strength of the children of Israel.",
                                      "genZ": "God will roar from Zion, thunder from Jerusalem; heaven and earth will shake. But God will be a refuge for His people, a stronghold for Israel."
                                    },
                                    {
                                      "reference": "Amos 3:7",
                                      "text": "Surely the Lord GOD will do nothing, but he revealeth his secret unto his servants the prophets.",
                                      "genZ": "Surely God does nothing without revealing His plan to His servants the prophets."
                                    },
                                    {
                                      "reference": "Obadiah 1:21",
                                      "text": "And saviours shall come up on mount Zion to judge the mount of Esau; and the kingdom shall be the LORD's.",
                                      "genZ": "Deliverers will go up to Zion to govern the mountains of Esau. And the kingdom will be God's."
                                    },
                                    {
                                      "reference": "Jonah 4:2",
                                      "text": "And he prayed unto the LORD, and said, I pray thee, O LORD, was not this my saying, when I was yet in my country? Therefore I fled before unto Tarshish: for I knew that thou art a gracious God, and merciful, slow to anger, and of great kindness, and repentest thee of the evil.",
                                      "genZ": "He prayed, 'God, isn't this what I said back home? That's why I ran—because I knew You're a gracious and compassionate God, slow to anger and abounding in love, who relents from sending calamity.'"
                                    },
                                    {
                                      "reference": "Micah 5:2",
                                      "text": "But thou, Bethlehem Ephratah, though thou be little among the thousands of Judah, yet out of thee shall he come forth unto me that is to be ruler in Israel; whose goings forth have been from of old, from everlasting.",
                                      "genZ": "But you, Bethlehem, though you are small among Judah's clans, out of you will come for Me one who will be ruler over Israel, whose origins are from of old, from ancient times."
                                    },
                                    {
                                      "reference": "Nahum 2:1",
                                      "text": "He that dasheth in pieces is come up before thy face: keep the munition, watch the way, make thy loins strong, fortify thy power mightily.",
                                      "genZ": "An attacker advances against you. Guard the fortress, watch the road, brace yourselves, marshal all your strength!"
                                    },
                                    {
                                      "reference": "Habakkuk 1:5",
                                      "text": "Behold ye among the heathen, and regard, and wonder marvellously: for I will work a work in your days, which ye will not believe, though it be told you.",
                                      "genZ": "Look at the nations and watch—be utterly amazed. For I am going to do something in your days that you would not believe, even if you were told."
                                    },
                                    {
                                      "reference": "Zephaniah 1:7",
                                      "text": "Hold thy peace at the presence of the Lord GOD: for the day of the LORD is at hand: for the LORD hath prepared a sacrifice, he hath bid his guests.",
                                      "genZ": "Be silent before the Sovereign God, for the day of the Lord is near. God has prepared a sacrifice; He has consecrated His guests."
                                    },
                                    {
                                      "reference": "Haggai 2:6",
                                      "text": "For thus saith the LORD of hosts; Yet once, it is a little while, and I will shake the heavens, and the earth, and the sea, and the dry land;",
                                      "genZ": "This is what God says: 'In a little while I will once more shake the heavens and the earth, the sea and the dry land.'"
                                    },
                                    {
                                      "reference": "Zechariah 9:9",
                                      "text": "Rejoice greatly, O daughter of Zion; shout, O daughter of Jerusalem: behold, thy King cometh unto thee: he is just, and having salvation; lowly, and riding upon an ass, and upon a colt the foal of an ass.",
                                      "genZ": "Rejoice, people of Zion! Shout, Jerusalem! See, your king comes to you, righteous and victorious, lowly and riding on a donkey, on a colt, the foal of a donkey."
                                    },
                                      {
                                        "reference": "Genesis 28:15",
                                        "text": "And, behold, I am with thee, and will keep thee in all places whither thou goest, and will bring thee again into this land; for I will not leave thee, until I have done that which I have spoken to thee of.",
                                        "genZ": "Look, I'm with you. I've got you everywhere you go, and I'll bring you back to this land. I won't bail until I've done everything I promised."
                                      },
                                      {
                                        "reference": "Exodus 15:2",
                                        "text": "The LORD is my strength and song, and he is become my salvation: he is my God, and I will prepare him an habitation; my father's God, and I will exalt him.",
                                        "genZ": "God is my strength and my anthem—He became my salvation. He's my God, and I'm making space for Him; my family's God, and I'm lifting Him up."
                                      },
                                      {
                                        "reference": "Leviticus 20:26",
                                        "text": "And ye shall be holy unto me: for I the LORD am holy, and have severed you from other people, that ye should be mine.",
                                        "genZ": "You'll be set apart for Me because I, God, am set apart. I've separated you from everyone else so you can be Mine."
                                      },
                                      {
                                        "reference": "Numbers 14:18",
                                        "text": "The LORD is longsuffering, and of great mercy, forgiving iniquity and transgression, and by no means clearing the guilty, visiting the iniquity of the fathers upon the children unto the third and fourth generation.",
                                        "genZ": "God is super patient and massively merciful, forgiving wrongdoing and rebellion. But He doesn't ignore guilt—consequences can affect generations."
                                      },
                                      {
                                        "reference": "Deuteronomy 10:17",
                                        "text": "For the LORD your God is God of gods, and Lord of lords, a great God, a mighty, and a terrible, which regardeth not persons, nor taketh reward:",
                                        "genZ": "Because your God is the God of all gods, Lord of all lords—the great, mighty, and awesome God who doesn't play favorites or accept bribes."
                                      },
                                      {
                                        "reference": "Joshua 3:5",
                                        "text": "And Joshua said unto the people, Sanctify yourselves: for to morrow the LORD will do wonders among you.",
                                        "genZ": "Joshua told the people, 'Get yourselves ready because tomorrow God is going to do something amazing among you.'"
                                      },
                                      {
                                        "reference": "Judges 6:14",
                                        "text": "And the LORD looked upon him, and said, Go in this thy might, and thou shalt save Israel from the hand of the Midianites: have not I sent thee?",
                                        "genZ": "God looked at him and said, 'Go with the strength you have—I'm sending you to rescue Israel from the Midianites.'"
                                      },
                                      {
                                        "reference": "Ruth 2:12",
                                        "text": "The LORD recompense thy work, and a full reward be given thee of the LORD God of Israel, under whose wings thou art come to trust.",
                                        "genZ": "May God repay you for what you've done. May you get a full reward from the God of Israel, under whose wings you've taken shelter."
                                      },
                                      {
                                        "reference": "1 Samuel 2:2",
                                        "text": "There is none holy as the LORD: for there is none beside thee: neither is there any rock like our God.",
                                        "genZ": "No one is holy like God—there's no one else. There's no solid foundation like our God."
                                      },
                                      {
                                        "reference": "2 Samuel 7:22",
                                        "text": "Wherefore thou art great, O LORD God: for there is none like thee, neither is there any God beside thee, according to all that we have heard with our ears.",
                                        "genZ": "That's why You're so great, God—there's no one like You, no other God, based on everything we've ever heard."
                                      },
                                      {
                                        "reference": "1 Kings 3:9",
                                        "text": "Give therefore thy servant an understanding heart to judge thy people, that I may discern between good and bad: for who is able to judge this thy so great a people?",
                                        "genZ": "So give Your servant a wise and understanding heart to lead Your people and know right from wrong—because who can handle leading such a massive nation?"
                                      },
                                      {
                                        "reference": "2 Kings 17:39",
                                        "text": "But the LORD your God ye shall fear; and he shall deliver you out of the hand of all your enemies.",
                                        "genZ": "But you should have a healthy respect for your God—He'll rescue you from all your enemies."
                                      },
                                      {
                                        "reference": "1 Chronicles 29:11",
                                        "text": "Thine, O LORD, is the greatness, and the power, and the glory, and the victory, and the majesty: for all that is in the heaven and in the earth is thine; thine is the kingdom, O LORD, and thou art exalted as head above all.",
                                        "genZ": "Yours, God, is the greatness, power, glory, victory, and majesty. Everything in heaven and earth is Yours. The kingdom is Yours, and You're the ultimate authority over everything."
                                      },
                                      {
                                        "reference": "2 Chronicles 20:15",
                                        "text": "And he said, Hearken ye, all Judah, and ye inhabitants of Jerusalem, and thou king Jehoshaphat, Thus saith the LORD unto you, Be not afraid nor dismayed by reason of this great multitude; for the battle is not yours, but God's.",
                                        "genZ": "He said, 'Listen up, everyone! God says: Don't be scared or stressed about this huge army—this isn't your battle, it's God's.'"
                                      },
                                      {
                                        "reference": "Ezra 7:10",
                                        "text": "For Ezra had prepared his heart to seek the law of the LORD, and to do it, and to teach in Israel statutes and judgments.",
                                        "genZ": "Because Ezra had committed himself to studying God's law, living it out, and teaching Israel the rules and judgments."
                                      },
                                      {
                                        "reference": "Nehemiah 1:5",
                                        "text": "And said, I beseech thee, O LORD God of heaven, the great and terrible God, that keepeth covenant and mercy for them that love him and observe his commandments:",
                                        "genZ": "And said, 'I'm begging You, God of heaven—the great and awesome God who keeps His promises and shows mercy to those who love Him and follow His commands.'"
                                      },
                                      {
                                        "reference": "Esther 9:22",
                                        "text": "As the days wherein the Jews rested from their enemies, and the month which was turned unto them from sorrow to joy, and from mourning into a good day: that they should make them days of feasting and joy, and of sending portions one to another, and gifts to the poor.",
                                        "genZ": "These were the days when Jews got relief from their enemies, when their month turned from sadness to joy, from mourning to celebration. They made them days of feasting, joy, sharing food, and giving to the poor."
                                      },
                                      {
                                        "reference": "Job 5:9",
                                        "text": "Which doeth great things and unsearchable; marvellous things without number:",
                                        "genZ": "He does great and unfathomable things, wonders beyond counting."
                                      },
                                      {
                                        "reference": "Psalm 8:1",
                                        "text": "O LORD our Lord, how excellent is thy name in all the earth! who hast set thy glory above the heavens.",
                                        "genZ": "God, our Lord, how amazing is Your name everywhere! You've set Your glory higher than the heavens."
                                      },
                                      {
                                        "reference": "Proverbs 2:6",
                                        "text": "For the LORD giveth wisdom: out of his mouth cometh knowledge and understanding.",
                                        "genZ": "Because God gives wisdom—knowledge and understanding come straight from His mouth."
                                      },
                                        {
                                          "reference": "Ecclesiastes 7:12",
                                          "text": "For wisdom is a defence, and money is a defence: but the excellency of knowledge is, that wisdom giveth life to them that have it.",
                                          "genZ": "Wisdom is protection, money is protection—but the advantage of knowledge is that wisdom gives life to those who have it."
                                        },
                                        {
                                          "reference": "Song of Solomon 2:4",
                                          "text": "He brought me to the banqueting house, and his banner over me was love.",
                                          "genZ": "He brought me to the party room, and His flag over me said 'LOVE.'"
                                        },
                                        {
                                          "reference": "Isaiah 26:3",
                                          "text": "Thou wilt keep him in perfect peace, whose mind is stayed on thee: because he trusteth in thee.",
                                          "genZ": "You'll guard in perfect peace anyone whose mind is locked on You, because their trust is in You."
                                        },
                                        {
                                          "reference": "Jeremiah 9:24",
                                          "text": "But let him that glorieth glory in this, that he understandeth and knoweth me, that I am the LORD which exercise lovingkindness, judgment, and righteousness, in the earth: for in these things I delight, saith the LORD.",
                                          "genZ": "But if you're going to flex, flex in this: that you understand and know Me—that I'm God who shows love, justice, and righteousness on earth. That's what I'm about, says God."
                                        },
                                        {
                                          "reference": "Lamentations 3:22",
                                          "text": "It is of the LORD's mercies that we are not consumed, because his compassions fail not.",
                                          "genZ": "We're not totally wrecked only because of God's mercy—His compassion doesn't run out."
                                        },
                                        {
                                          "reference": "Ezekiel 11:19",
                                          "text": "And I will give them one heart, and I will put a new spirit within you; and I will take the stony heart out of their flesh, and will give them an heart of flesh:",
                                          "genZ": "I'll give them a united heart and put a new spirit in them. I'll remove their stone-cold heart and give them a living, feeling heart."
                                        },
                                        {
                                          "reference": "Daniel 3:17",
                                          "text": "If it be so, our God whom we serve is able to deliver us from the burning fiery furnace, and he will deliver us out of thine hand, O king.",
                                          "genZ": "If that's how it is, our God whom we serve can rescue us from the blazing furnace, and He will rescue us from you, king."
                                        },
                                        {
                                          "reference": "Hosea 14:2",
                                          "text": "Take with you words, and turn to the LORD: say unto him, Take away all iniquity, and receive us graciously: so will we render the calves of our lips.",
                                          "genZ": "Bring words with you and return to God. Say to Him, 'Forgive all our wrongdoing and accept us back—then we'll offer the praise of our lips.'"
                                        },
                                        {
                                          "reference": "Joel 2:28",
                                          "text": "And it shall come to pass afterward, that I will pour out my spirit upon all flesh; and your sons and your daughters shall prophesy, your old men shall dream dreams, your young men shall see visions:",
                                          "genZ": "Afterward, I'll pour out My Spirit on everyone: your sons and daughters will prophesy, your elders will dream dreams, your youth will see visions."
                                        },
                                        {
                                          "reference": "Amos 4:13",
                                          "text": "For, lo, he that formeth the mountains, and createth the wind, and declareth unto man what is his thought, that maketh the morning darkness, and treadeth upon the high places of the earth; The LORD, The God of hosts, is his name.",
                                          "genZ": "Look, He forms mountains, creates wind, tells people His thoughts, turns dawn to darkness, and walks on the highest places of earth—God Almighty is His name."
                                        },
                                        {
                                          "reference": "Obadiah 1:4",
                                          "text": "Though thou exalt thyself as the eagle, and though thou set thy nest among the stars, thence will I bring thee down, saith the LORD.",
                                          "genZ": "Even if you soar like an eagle and make your home among the stars, I'll bring you down from there, says God."
                                        },
                                        {
                                          "reference": "Jonah 3:10",
                                          "text": "And God saw their works, that they turned from their evil way; and God repented of the evil, that he had said that he would do unto them; and he did it not.",
                                          "genZ": "God saw what they did—how they turned from their evil ways. So God changed His mind about the disaster He had planned, and didn't do it."
                                        },
                                        {
                                          "reference": "Micah 4:2",
                                          "text": "And many nations shall come, and say, Come, and let us go up to the mountain of the LORD, and to the house of the God of Jacob; and he will teach us of his ways, and we will walk in his paths: for the law shall go forth of Zion, and the word of the LORD from Jerusalem.",
                                          "genZ": "Many nations will say, 'Come, let's go to God's mountain, to the house of Jacob's God. He'll teach us His ways so we can walk in His paths.' Instruction will come from Zion, God's word from Jerusalem."
                                        },
                                        {
                                          "reference": "Nahum 1:15",
                                          "text": "Behold upon the mountains the feet of him that bringeth good tidings, that publisheth peace! O Judah, keep thy solemn feasts, perform thy vows: for the wicked shall no more pass through thee; he is utterly cut off.",
                                          "genZ": "Look! On the mountains, the feet of the messenger bringing good news, announcing peace! Judah, celebrate your festivals, keep your promises. The wicked won't bother you anymore—they're completely finished."
                                        },
                                        {
                                          "reference": "Habakkuk 3:18",
                                          "text": "Yet I will rejoice in the LORD, I will joy in the God of my salvation.",
                                          "genZ": "But I'll still celebrate in God, I'll joy in the God who saves me."
                                        },
                                        {
                                          "reference": "Zephaniah 3:17",
                                          "text": "The LORD thy God in the midst of thee is mighty; he will save, he will rejoice over thee with joy; he will rest in his love, he will joy over thee with singing.",
                                          "genZ": "Your God among you is powerful; He saves, celebrates you with joy, chills in His love for you, and serenades you."
                                        },
                                        {
                                          "reference": "Haggai 2:4",
                                          "text": "Yet now be strong, O Zerubbabel, saith the LORD; and be strong, O Joshua, son of Josedech, the high priest; and be strong, all ye people of the land, saith the LORD, and work: for I am with you, saith the LORD of hosts:",
                                          "genZ": "But now be strong, Zerubbabel, says God. Be strong, Joshua the high priest. Be strong, all you people, and get to work—because I'm with you, says God Almighty."
                                        },
                                        {
                                          "reference": "Zechariah 2:5",
                                          "text": "For I, saith the LORD, will be unto her a wall of fire round about, and will be the glory in the midst of her.",
                                          "genZ": "Because I, says God, will be a wall of fire around her, and I'll be the glory inside her."
                                        },
                                        {
                                          "reference": "Malachi 1:11",
                                          "text": "For from the rising of the sun even unto the going down of the same my name shall be great among the Gentiles; and in every place incense shall be offered unto my name, and a pure offering: for my name shall be great among the heathen, saith the LORD of hosts.",
                                          "genZ": "From sunrise to sunset, My name will be honored among the nations. Everywhere incense and pure offerings will be given to My name, because My name will be great among all people, says God Almighty."
                                        },
                                        {
                                          "reference": "Matthew 7:7",
                                          "text": "Ask, and it shall be given you; seek, and ye shall find; knock, and it shall be opened unto you:",
                                          "genZ": "Ask, and you'll receive; search, and you'll find; knock, and the door will open for you."
                                        },
                                          {
                                            "reference": "Mark 9:23",
                                            "text": "Jesus said unto him, If thou canst believe, all things are possible to him that believeth.",
                                            "genZ": "Jesus told him, 'If you can believe, everything is possible for the one who believes.'"
                                          },
                                          {
                                            "reference": "Luke 1:45",
                                            "text": "And blessed is she that believed: for there shall be a performance of those things which were told her from the Lord.",
                                            "genZ": "And blessed is she who believed, because what the Lord told her will actually happen."
                                          },
                                          {
                                            "reference": "John 7:38",
                                            "text": "He that believeth on me, as the scripture hath said, out of his belly shall flow rivers of living water.",
                                            "genZ": "Whoever believes in Me, as Scripture says, rivers of living water will flow from within them."
                                          },
                                          {
                                            "reference": "Acts 4:12",
                                            "text": "Neither is there salvation in any other: for there is none other name under heaven given among men, whereby we must be saved.",
                                            "genZ": "Salvation isn't found in anyone else—there's no other name under heaven given to people by which we must be saved."
                                          },
                                          {
                                            "reference": "Romans 8:1",
                                            "text": "There is therefore now no condemnation to them which are in Christ Jesus, who walk not after the flesh, but after the Spirit.",
                                            "genZ": "So now there's no condemnation for those in Christ Jesus who don't live according to the flesh but according to the Spirit."
                                          },
                                          {
                                            "reference": "1 Corinthians 3:16",
                                            "text": "Know ye not that ye are the temple of God, and that the Spirit of God dwelleth in you?",
                                            "genZ": "Don't you know that you are God's temple and that God's Spirit lives in you?"
                                          },
                                          {
                                            "reference": "2 Corinthians 9:8",
                                            "text": "And God is able to make all grace abound toward you; that ye, always having all sufficiency in all things, may abound to every good work:",
                                            "genZ": "And God can pour out all kinds of grace on you, so that in every situation you'll have everything you need to do every good thing."
                                          },
                                          {
                                            "reference": "Galatians 2:20",
                                            "text": "I am crucified with Christ: nevertheless I live; yet not I, but Christ liveth in me: and the life which I now live in the flesh I live by the faith of the Son of God, who loved me, and gave himself for me.",
                                            "genZ": "I've been crucified with Christ—but I'm alive! Though it's not me living, but Christ living in me. The life I live now in my body, I live by faith in the Son of God who loved me and gave Himself for me."
                                          },
                                          {
                                            "reference": "Ephesians 1:3",
                                            "text": "Blessed be the God and Father of our Lord Jesus Christ, who hath blessed us with all spiritual blessings in heavenly places in Christ:",
                                            "genZ": "Praise God, the Father of our Lord Jesus Christ, who has blessed us with every spiritual blessing in the heavenly realms in Christ."
                                          },
                                          {
                                            "reference": "Philippians 3:20",
                                            "text": "For our conversation is in heaven; from whence also we look for the Saviour, the Lord Jesus Christ:",
                                            "genZ": "But our citizenship is in heaven, and from there we're waiting for our Savior, the Lord Jesus Christ."
                                          },
                                          {
                                            "reference": "Colossians 2:10",
                                            "text": "And ye are complete in him, which is the head of all principality and power:",
                                            "genZ": "And you are complete in Him, who is the head over every ruler and authority."
                                          },
                                          {
                                            "reference": "1 Thessalonians 2:13",
                                            "text": "For this cause also thank we God without ceasing, because, when ye received the word of God which ye heard of us, ye received it not as the word of men, but as it is in truth, the word of God, which effectually worketh also in you that believe.",
                                            "genZ": "This is also why we constantly thank God: when you received God's word from us, you accepted it not as human words but as what it truly is—God's word, which is actually working in you who believe."
                                          },
                                          {
                                            "reference": "2 Thessalonians 1:3",
                                            "text": "We are bound to thank God always for you, brethren, as it is meet, because that your faith groweth exceedingly, and the charity of every one of you all toward each other aboundeth;",
                                            "genZ": "We have to thank God for you always—it's only right—because your faith is growing massively, and everyone's love for each other is increasing."
                                          },
                                          {
                                            "reference": "1 Timothy 1:17",
                                            "text": "Now unto the King eternal, immortal, invisible, the only wise God, be honour and glory for ever and ever. Amen.",
                                            "genZ": "Now to the eternal King, immortal, invisible, the only wise God, be honor and glory forever. Amen."
                                          },
                                          {
                                            "reference": "2 Timothy 2:15",
                                            "text": "Study to shew thyself approved unto God, a workman that needeth not to be ashamed, rightly dividing the word of truth.",
                                            "genZ": "Do your best to present yourself to God as one approved, a worker who doesn't need to be embarrassed, correctly handling the word of truth."
                                          },
                                          {
                                            "reference": "Titus 2:11",
                                            "text": "For the grace of God that bringeth salvation hath appeared to all men,",
                                            "genZ": "Because the grace of God that brings salvation has appeared to everyone."
                                          },
                                          {
                                            "reference": "Philemon 1:3",
                                            "text": "Grace to you, and peace, from God our Father and the Lord Jesus Christ.",
                                            "genZ": "Grace and peace to you from God our Father and the Lord Jesus Christ."
                                          },
                                          {
                                            "reference": "Hebrews 4:12",
                                            "text": "For the word of God is quick, and powerful, and sharper than any twoedged sword, piercing even to the dividing asunder of soul and spirit, and of the joints and marrow, and is a discerner of the thoughts and intents of the heart.",
                                            "genZ": "Because God's word is alive and active, sharper than any double-edged sword, cutting between soul and spirit, joints and marrow, judging the thoughts and intentions of the heart."
                                          },
                                          {
                                            "reference": "James 1:22",
                                            "text": "But be ye doers of the word, and not hearers only, deceiving your own selves.",
                                            "genZ": "But be doers of the word, not just listeners—otherwise you're fooling yourselves."
                                          },
                                          {
                                            "reference": "1 Peter 5:10",
                                            "text": "But the God of all grace, who hath called us unto his eternal glory by Christ Jesus, after that ye have suffered a while, make you perfect, stablish, strengthen, settle you.",
                                            "genZ": "But the God of all grace, who called you to His eternal glory in Christ Jesus, will Himself restore, confirm, strengthen, and establish you after you've suffered a little while."
                                          },
                                            {
                                              "reference": "2 Peter 3:9",
                                              "text": "The Lord is not slack concerning his promise, as some men count slackness; but is longsuffering to us-ward, not willing that any should perish, but that all should come to repentance.",
                                              "genZ": "God isn't slow about keeping His promise like some think of slowness. He's patient with you, not wanting anyone to be destroyed but everyone to change their ways."
                                            },
                                            {
                                              "reference": "1 John 5:4",
                                              "text": "For whatsoever is born of God overcometh the world: and this is the victory that overcometh the world, even our faith.",
                                              "genZ": "Because everyone born of God overcomes the world. And this is the victory that overcomes the world—our faith."
                                            },
                                            {
                                              "reference": "2 John 1:3",
                                              "text": "Grace be with you, mercy, and peace, from God the Father, and from the Lord Jesus Christ, the Son of the Father, in truth and love.",
                                              "genZ": "Grace, mercy, and peace will be with you from God the Father and from Jesus Christ, the Father's Son, in truth and love."
                                            },
                                            {
                                              "reference": "3 John 1:2",
                                              "text": "Beloved, I wish above all things that thou mayest prosper and be in health, even as thy soul prospereth.",
                                              "genZ": "Dear friend, I pray that you may enjoy good health and that all may go well with you, even as your soul is getting along well."
                                            },
                                            {
                                              "reference": "Jude 1:21",
                                              "text": "Keep yourselves in the love of God, looking for the mercy of our Lord Jesus Christ unto eternal life.",
                                              "genZ": "Keep yourselves in God's love as you wait for the mercy of our Lord Jesus Christ to bring you to eternal life."
                                            },
                                            {
                                              "reference": "Revelation 2:7",
                                              "text": "He that hath an ear, let him hear what the Spirit saith unto the churches; To him that overcometh will I give to eat of the tree of life, which is in the midst of the paradise of God.",
                                              "genZ": "Whoever has ears, let them hear what the Spirit says to the churches. To the one who overcomes, I'll give the right to eat from the tree of life in God's paradise."
                                            },
                                            {
                                              "reference": "Revelation 3:21",
                                              "text": "To him that overcometh will I grant to sit with me in my throne, even as I also overcame, and am set down with my Father in his throne.",
                                              "genZ": "To the one who overcomes, I'll give the right to sit with Me on My throne, just as I overcame and sat down with My Father on His throne."
                                            },
                                            {
                                              "reference": "Revelation 4:11",
                                              "text": "Thou art worthy, O Lord, to receive glory and honour and power: for thou hast created all things, and for thy pleasure they are and were created.",
                                              "genZ": "You are worthy, our Lord and God, to receive glory and honor and power, for You created all things, and by Your will they were created and have their being."
                                            },
                                            {
                                              "reference": "Revelation 5:12",
                                              "text": "Saying with a loud voice, Worthy is the Lamb that was slain to receive power, and riches, and wisdom, and strength, and honour, and glory, and blessing.",
                                              "genZ": "In a loud voice they were saying: 'Worthy is the Lamb, who was slain, to receive power and wealth and wisdom and strength and honor and glory and praise!'"
                                            },
                                            {
                                              "reference": "Revelation 7:10",
                                              "text": "And cried with a loud voice, saying, Salvation to our God which sitteth upon the throne, and unto the Lamb.",
                                              "genZ": "And they cried out in a loud voice: 'Salvation belongs to our God, who sits on the throne, and to the Lamb.'"
                                            },
                                            {
                                              "reference": "Revelation 12:10",
                                              "text": "And I heard a loud voice saying in heaven, Now is come salvation, and strength, and the kingdom of our God, and the power of his Christ: for the accuser of our brethren is cast down, which accused them before our God day and night.",
                                              "genZ": "Then I heard a loud voice in heaven say: 'Now have come the salvation and the power and the kingdom of our God, and the authority of His Messiah. For the accuser of our brothers and sisters has been thrown down.'"
                                            },
                                            {
                                              "reference": "Revelation 19:1",
                                              "text": "And after these things I heard a great voice of much people in heaven, saying, Alleluia; Salvation, and glory, and honour, and power, unto the Lord our God:",
                                              "genZ": "After this I heard what sounded like the roar of a great multitude in heaven shouting: 'Hallelujah! Salvation and glory and power belong to our God.'"
                                            },
                                            {
                                              "reference": "Revelation 21:3",
                                              "text": "And I heard a great voice out of heaven saying, Behold, the tabernacle of God is with men, and he will dwell with them, and they shall be his people, and God himself shall be with them, and be their God.",
                                              "genZ": "And I heard a loud voice from the throne saying, 'Look! God's dwelling place is now among the people, and He will dwell with them. They will be His people, and God Himself will be with them and be their God.'"
                                            },
                                            {
                                              "reference": "Revelation 22:17",
                                              "text": "And the Spirit and the bride say, Come. And let him that heareth say, Come. And let him that is athirst come. And whosoever will, let him take the water of life freely.",
                                              "genZ": "The Spirit and the bride say, 'Come!' And let the one who hears say, 'Come!' Let the one who is thirsty come; and let the one who wishes take the free gift of the water of life."
                                            },
                                            {
                                              "reference": "Psalm 9:10",
                                              "text": "And they that know thy name will put their trust in thee: for thou, LORD, hast not forsaken them that seek thee.",
                                              "genZ": "Those who know Your name trust in You, for You, God, never abandon those who seek You."
                                            },
                                            {
                                              "reference": "Proverbs 3:5",
                                              "text": "Trust in the LORD with all thine heart; and lean not unto thine own understanding.",
                                              "genZ": "Trust in God with all your heart; don't depend on your own understanding."
                                            },
                                            {
                                              "reference": "Isaiah 40:8",
                                              "text": "The grass withereth, the flower fadeth: but the word of our God shall stand for ever.",
                                              "genZ": "The grass dries up, the flowers fade, but the word of our God stands forever."
                                            },
                                            {
                                              "reference": "Jeremiah 17:7",
                                              "text": "Blessed is the man that trusteth in the LORD, and whose hope the LORD is.",
                                              "genZ": "Blessed is the one who trusts in God, whose confidence is in Him."
                                            },
                                            {
                                              "reference": "Ezekiel 18:32",
                                              "text": "For I have no pleasure in the death of him that dieth, saith the Lord GOD: wherefore turn yourselves, and live ye.",
                                              "genZ": "For I take no pleasure in the death of anyone, declares God. So turn and live!"
                                            },
                                            {
                                              "reference": "Daniel 7:14",
                                              "text": "And there was given him dominion, and glory, and a kingdom, that all people, nations, and languages, should serve him: his dominion is an everlasting dominion, which shall not pass away, and his kingdom that which shall not be destroyed.",
                                              "genZ": "He was given authority, glory and sovereign power; all nations and peoples of every language worshiped Him. His dominion is an everlasting dominion that will not pass away, and His kingdom is one that will never be destroyed."
                                            },
                                              {
                                                "reference": "2 Peter 3:9",
                                                "text": "The Lord is not slack concerning his promise, as some men count slackness; but is longsuffering to us-ward, not willing that any should perish, but that all should come to repentance.",
                                                "genZ": "God isn't slow about keeping His promise like some think of slowness. He's patient with you, not wanting anyone to be destroyed but everyone to change their ways."
                                              },
                                              {
                                                "reference": "1 John 5:4",
                                                "text": "For whatsoever is born of God overcometh the world: and this is the victory that overcometh the world, even our faith.",
                                                "genZ": "Because everyone born of God overcomes the world. And this is the victory that overcomes the world—our faith."
                                              },
                                              {
                                                "reference": "2 John 1:3",
                                                "text": "Grace be with you, mercy, and peace, from God the Father, and from the Lord Jesus Christ, the Son of the Father, in truth and love.",
                                                "genZ": "Grace, mercy, and peace will be with you from God the Father and from Jesus Christ, the Father's Son, in truth and love."
                                              },
                                              {
                                                "reference": "3 John 1:2",
                                                "text": "Beloved, I wish above all things that thou mayest prosper and be in health, even as thy soul prospereth.",
                                                "genZ": "Dear friend, I pray that you may enjoy good health and that all may go well with you, even as your soul is getting along well."
                                              },
                                              {
                                                "reference": "Jude 1:21",
                                                "text": "Keep yourselves in the love of God, looking for the mercy of our Lord Jesus Christ unto eternal life.",
                                                "genZ": "Keep yourselves in God's love as you wait for the mercy of our Lord Jesus Christ to bring you to eternal life."
                                              },
                                              {
                                                "reference": "Revelation 2:7",
                                                "text": "He that hath an ear, let him hear what the Spirit saith unto the churches; To him that overcometh will I give to eat of the tree of life, which is in the midst of the paradise of God.",
                                                "genZ": "Whoever has ears, let them hear what the Spirit says to the churches. To the one who overcomes, I'll give the right to eat from the tree of life in God's paradise."
                                              },
                                              {
                                                "reference": "Revelation 3:21",
                                                "text": "To him that overcometh will I grant to sit with me in my throne, even as I also overcame, and am set down with my Father in his throne.",
                                                "genZ": "To the one who overcomes, I'll give the right to sit with Me on My throne, just as I overcame and sat down with My Father on His throne."
                                              },
                                              {
                                                "reference": "Revelation 4:11",
                                                "text": "Thou art worthy, O Lord, to receive glory and honour and power: for thou hast created all things, and for thy pleasure they are and were created.",
                                                "genZ": "You are worthy, our Lord and God, to receive glory and honor and power, for You created all things, and by Your will they were created and have their being."
                                              },
                                              {
                                                "reference": "Revelation 5:12",
                                                "text": "Saying with a loud voice, Worthy is the Lamb that was slain to receive power, and riches, and wisdom, and strength, and honour, and glory, and blessing.",
                                                "genZ": "In a loud voice they were saying: 'Worthy is the Lamb, who was slain, to receive power and wealth and wisdom and strength and honor and glory and praise!'"
                                              },
                                              {
                                                "reference": "Revelation 7:10",
                                                "text": "And cried with a loud voice, saying, Salvation to our God which sitteth upon the throne, and unto the Lamb.",
                                                "genZ": "And they cried out in a loud voice: 'Salvation belongs to our God, who sits on the throne, and to the Lamb.'"
                                              },
                                              {
                                                "reference": "Revelation 12:10",
                                                "text": "And I heard a loud voice saying in heaven, Now is come salvation, and strength, and the kingdom of our God, and the power of his Christ: for the accuser of our brethren is cast down, which accused them before our God day and night.",
                                                "genZ": "Then I heard a loud voice in heaven say: 'Now have come the salvation and the power and the kingdom of our God, and the authority of His Messiah. For the accuser of our brothers and sisters has been thrown down.'"
                                              },
                                              {
                                                "reference": "Revelation 19:1",
                                                "text": "And after these things I heard a great voice of much people in heaven, saying, Alleluia; Salvation, and glory, and honour, and power, unto the Lord our God:",
                                                "genZ": "After this I heard what sounded like the roar of a great multitude in heaven shouting: 'Hallelujah! Salvation and glory and power belong to our God.'"
                                              },
                                              {
                                                "reference": "Revelation 21:3",
                                                "text": "And I heard a great voice out of heaven saying, Behold, the tabernacle of God is with men, and he will dwell with them, and they shall be his people, and God himself shall be with them, and be their God.",
                                                "genZ": "And I heard a loud voice from the throne saying, 'Look! God's dwelling place is now among the people, and He will dwell with them. They will be His people, and God Himself will be with them and be their God.'"
                                              },
                                              {
                                                "reference": "Revelation 22:17",
                                                "text": "And the Spirit and the bride say, Come. And let him that heareth say, Come. And let him that is athirst come. And whosoever will, let him take the water of life freely.",
                                                "genZ": "The Spirit and the bride say, 'Come!' And let the one who hears say, 'Come!' Let the one who is thirsty come; and let the one who wishes take the free gift of the water of life."
                                              },
                                              {
                                                "reference": "Psalm 9:10",
                                                "text": "And they that know thy name will put their trust in thee: for thou, LORD, hast not forsaken them that seek thee.",
                                                "genZ": "Those who know Your name trust in You, for You, God, never abandon those who seek You."
                                              },
                                              {
                                                "reference": "Proverbs 3:5",
                                                "text": "Trust in the LORD with all thine heart; and lean not unto thine own understanding.",
                                                "genZ": "Trust in God with all your heart; don't depend on your own understanding."
                                              },
                                              {
                                                "reference": "Isaiah 40:8",
                                                "text": "The grass withereth, the flower fadeth: but the word of our God shall stand for ever.",
                                                "genZ": "The grass dries up, the flowers fade, but the word of our God stands forever."
                                              },
                                              {
                                                "reference": "Jeremiah 17:7",
                                                "text": "Blessed is the man that trusteth in the LORD, and whose hope the LORD is.",
                                                "genZ": "Blessed is the one who trusts in God, whose confidence is in Him."
                                              },
                                              {
                                                "reference": "Ezekiel 18:32",
                                                "text": "For I have no pleasure in the death of him that dieth, saith the Lord GOD: wherefore turn yourselves, and live ye.",
                                                "genZ": "For I take no pleasure in the death of anyone, declares God. So turn and live!"
                                              },
                                              {
                                                "reference": "Daniel 7:14",
                                                "text": "And there was given him dominion, and glory, and a kingdom, that all people, nations, and languages, should serve him: his dominion is an everlasting dominion, which shall not pass away, and his kingdom that which shall not be destroyed.",
                                                "genZ": "He was given authority, glory and sovereign power; all nations and peoples of every language worshiped Him. His dominion is an everlasting dominion that will not pass away, and His kingdom is one that will never be destroyed."
                                              }]
