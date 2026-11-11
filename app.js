// ATM Travels (atm-travels.org) Complete Clone Application Data & Logic

const LOGO_URL = 'https://atm-travels.org/wp-content/uploads/2026/11/ATM-main-Logo-color.png';

const UPCOMING_EVENTS = [
  {
    id: 'italy-croatia-medjugorje',
    tag: 'Upcoming pilgrimage',
    title: 'Children and Family Pilgrimage to Italy, Croatia and Medjugorje',
    image: 'https://atm-travels.org/wp-content/uploads/2026/11/WhatsApp-Image-2026-08-28-at-9.58.14-PM-768x960.jpeg',
    subtitle: 'A Journey of Faith, Saints & Sacred Places — "Walk with the Saints. Grow in Faith. Be Transformed."',
    tiers: [
      { label: 'Registration Deposit (Nonrefundable, due by Dec 30, 2026 — Total Fee $1,910)', price: 500 },
      { label: 'Second Installment — Double Room (Due by May 17, 2027)', price: 1410 },
      { label: 'Second Installment — Single Room (Due by May 17, 2027)', price: 1910 }
    ]
  },
  {
    id: 'medjugorje-family',
    tag: 'Upcoming pilgrimage',
    title: 'Children and Family Pilgrimage to Medjugorje',
    image: 'https://atm-travels.org/wp-content/uploads/2026/11/Gemini_Generated_Image_kia46pkia46pkia4-768x1095.jpg',
    subtitle: 'Double room: $1,350 + $39.45 fees · Single room: $1,475 + $43.08 fees',
    tiers: [
      { label: 'Registration Deposit (Due by Jan 31, 2027)', price: 500 },
      { label: 'Double Room Second Installment (Due by May 17, 2027)', price: 850 },
      { label: 'Single Room Second Installment (Due by May 17, 2027)', price: 975 }
    ]
  },
  {
    id: 'mothers-retreat-2027',
    tag: 'Upcoming Retreat',
    title: 'Mother’s Retreat 2027',
    image: 'https://atm-travels.org/wp-content/uploads/2026/11/WhatsApp-Image-2026-10-05-at-2.42.40-AM-768x994.jpeg',
    subtitle: 'A dedicated spiritual retreat for mothers seeking prayerful renewal, fellowship, and peace.',
    tiers: [
      { label: 'Registration Deposit (Due by March 30, 2027)', price: 500 },
      { label: 'Second Installment (Due by July 25, 2027)', price: 1500 },
      { label: 'Third Installment / Balance', price: 1550 }
    ]
  },
  {
    id: 'youth-retreat-2027',
    tag: 'Upcoming Youth & Family Retreat',
    title: 'Youth & Family Spiritual Retreat 2027',
    image: 'https://atm-travels.org/wp-content/uploads/2026/11/element_0-6-819x1024.webp',
    subtitle: 'Intentional time for spiritual rejuvenation and cultivating a disciplined life of prayer.',
    tiers: [
      { label: 'Registration Deposit (Due by March 30, 2027)', price: 100 },
      { label: 'Second Installment (Due by July 25, 2027)', price: 490 },
      { label: 'Full Payment Option', price: 500 }
    ]
  }
];

const PRODUCTS = [
  {
    slug: 'a-mothers-heart',
    name: "A MOTHER'S HEART",
    category: 'Soaps',
    subtitle: 'Calendula & Pine Needle Soap · 5 oz',
    price: 5.99,
    stock: 'In Stock',
    image: 'https://atm-travels.org/wp-content/uploads/2026/11/WhatsApp-Image-2026-10-30-at-10.42.58-PM.jpeg',
    description: 'Nourish and cleanse your skin with this gentle, naturally inspired soap, thoughtfully made with natural and organic ingredients including Calendula & Pine Needle extract. Hand-molded with a Marian relief emblem to bring warmth, intention, and natural beauty to your daily routine.'
  },
  {
    slug: 'balm-of-good-samaritan-1oz',
    name: 'Balm of Good Samaritan 1oz',
    category: 'Balms & Salves',
    subtitle: 'Handcrafted Botanical Balm · 1 oz',
    price: 14.99,
    stock: 'In Stock',
    image: 'https://atm-travels.org/wp-content/uploads/2026/11/WhatsApp-Image-2026-10-29-at-3.29.03-PM.jpeg',
    description: 'Traditional aromatic botanical balm crafted with essential oils, beeswax, and soothing herbal infusions to comfort and protect skin naturally.'
  },
  {
    slug: 'balm-of-saint-michael-2oz',
    name: 'Balm of Saint Michael 2oz',
    category: 'Balms & Salves',
    subtitle: 'Nourishing Herbal Balm · 2 oz',
    price: 13.99,
    stock: 'In Stock',
    image: 'https://atm-travels.org/wp-content/uploads/2026/11/WhatsApp-Image-2026-10-29-at-3.29.04-PM.jpeg',
    description: 'Restorative herbal balm formulated in small batches with pure botanical extracts to soothe dry skin and support daily wellness.'
  },
  {
    slug: 'calendula-body-butter-8oz',
    name: 'Calendula Body Butter – 8 oz',
    category: 'Oils & Body Care',
    subtitle: 'Whipped Botanical Moisture · 8 oz',
    price: 24.99,
    stock: 'In Stock',
    image: 'https://atm-travels.org/wp-content/uploads/2026/11/WhatsApp-Image-2026-10-30-at-12.35.08-AM.jpeg',
    description: 'Rich, velvety body butter infused with golden calendula blossoms to deeply hydrate and soften skin all day.'
  },
  {
    slug: 'calendula-lip-repair',
    name: 'Calendula Lip Repair',
    category: 'Balms & Salves',
    subtitle: 'Soothing Botanical Lip Balm',
    price: 2.00,
    stock: 'In Stock',
    image: 'https://atm-travels.org/wp-content/uploads/2026/11/g1.jpeg',
    description: 'Gentle everyday lip repair balm made with calendula-infused oil and natural beeswax for soft, protected lips.'
  },
  {
    slug: 'calendula-oil-7oz',
    name: 'CALENDULA OIL 7oz',
    category: 'Oils & Body Care',
    subtitle: 'Pure Infused Botanical Oil · 7 oz',
    price: 19.99,
    stock: 'In Stock',
    image: 'https://atm-travels.org/wp-content/uploads/2026/11/a1.jpeg',
    description: 'Slow-infused golden calendula oil crafted for skin nourishment, gentle massage, and daily holistic care.'
  },
  {
    slug: 'calendula-salve-2oz',
    name: 'CALENDULA SALVE 2oz',
    category: 'Balms & Salves',
    subtitle: 'Concentrated Soothing Salve · 2 oz',
    price: 14.99,
    stock: 'In Stock',
    image: 'https://atm-travels.org/wp-content/uploads/2026/11/WhatsApp-Image-2026-10-29-at-3.37.08-PM.jpeg',
    description: 'All-purpose calendula salve designed to calm dry, chapped, or sensitive skin with pure botanical care.'
  },
  {
    slug: 'calendula-geranium-massage-oil-1oz',
    name: 'Calendula/Geranium massage oil 1oz',
    category: 'Oils & Body Care',
    subtitle: 'Aromatic Botanical Blend · 1 oz',
    price: 14.99,
    stock: 'In Stock',
    image: 'https://atm-travels.org/wp-content/uploads/2026/11/p3.jpeg',
    description: 'Delicate blend of calendula infusion and uplifting geranium essential oil for calming therapeutic massage.'
  },
  {
    slug: 'calendula-geranium-massage-oil-travel',
    name: 'Calendula/Geranium massage oil 1oz (Travel)',
    category: 'Oils & Body Care',
    subtitle: 'Pilgrimage Travel Edition · 1 oz',
    price: 9.99,
    stock: 'In Stock',
    image: 'https://atm-travels.org/wp-content/uploads/2026/11/WhatsApp-Image-2026-10-30-at-11.41.20-PM-683x1024.jpeg',
    description: 'Compact travel-ready bottle of our signature Calendula & Geranium soothing oil, ideal for pilgrimages and retreats.'
  },
  {
    slug: 'guadalupe-colored-necklace',
    name: 'Guadalupe colored necklace',
    category: 'Devotional Keepsakes',
    subtitle: 'Devotional Keepsake Jewelry',
    price: 33.00,
    stock: 'In Stock',
    image: 'https://atm-travels.org/wp-content/uploads/2026/11/WhatsApp-Image-2026-10-31-at-7.08.42-PM-1.jpeg',
    description: 'Artisan Our Lady of Guadalupe devotional pendant necklace with vibrant enamel detailing and gold-tone chain.'
  }
];

const INITIAL_REVIEWS = [
  {
    id: 101,
    title: 'MOTHER’S RETREAT 2026',
    date: 'September 2026',
    rating: 5,
    text: 'Saying this retreat was amazing feels like such an understatement. Weks puts her whole heart into everything she does! This past September was my first trip to Rosa Mystica in New York, and it was so beautifully planned, featuring truly inspiring spiritual leaders. This retreat gave us mothers permission to forgive ourselves for everything we’ve been carrying and beating ourselves up over. Every mother, stepmother, and mother-to-be needs to experience one of these retreats at Rosa Mystica—the location is simply perfect. Thank you, Weks, for your incredible faithfulness. God bless you!',
    initials: 'AM',
    author: 'Anke Mbapeh',
    email: 'bebesenait@gmail.com',
    avatarClass: 'avatar-gold'
  },
  {
    id: 102,
    title: 'Children’s Prayers',
    date: 'October 2026',
    rating: 5,
    text: 'Being a part of ATM KIDS for over five years has completely transformed our family’s faith life. From nightly Rosary calls on Zoom and weekly Adoration to saint studies, Bible study, and Marian consecrations, my children’s spiritual growth has been incredible. They now take full ownership of their faith and look forward to 8:00 PM Zoom every night. Weks, thank you for building this incredible village for our children and for leading by example alongside your own wonderful kids. ATM KIDS is a true blessing to parents everywhere!',
    initials: 'AM',
    author: 'Anke Mbapeh',
    email: 'bebesenait@gmail.com',
    avatarClass: 'avatar-peach'
  },
  {
    id: 103,
    title: 'An Unforgettable, Spiritually Renewing Retreat for Mothers!',
    date: 'September 2026',
    rating: 5,
    text: 'My experience at the Rosa Mystica mother’s retreat in September with April-Marie Traveling Mary pilgrimages was deeply moving. Anchored in the beautiful theme “She is Our Mother,” the schedule was masterfully planned with Holy Mass, Adoration, Confession, learning sessions, and invaluable 1-on-1 spiritual guidance. Getting up close with sacred relics and experiencing the healing session touched my heart, while closing our time sharing experiences around a bonfire was incredibly enriching. Top it off with amazing food and a warm reception—I couldn’t have asked for more. I am so grateful and already looking forward to next year!',
    initials: 'AJ',
    author: 'Ayangyangka Jumbam',
    email: 'ayang.jumbam@gmail.com',
    avatarClass: 'avatar-pink'
  },
  {
    id: 104,
    title: 'The Gold Standard for Pilgrimages',
    date: 'October 2026',
    rating: 5,
    text: 'ATM Travels is absolutely wonderful. I’ve taken my children on pilgrimage to Medjugorje twice with them, and everything was completely seamless from start to finish. She focuses so much on the spiritual growth of the kids, tailoring activities so children of all ages feel included. Her local team on the ground in Medjugorje is top-notch, taking care of everything from airport pickups and meals to daily excursions. Every detail is thoughtfully planned, and her prices are among the best you’ll find anywhere. I’m already looking forward to our next pilgrimage with them. Thank you, ATM Travels—may our Lord continue to bless your ministry!',
    initials: 'AM',
    author: 'Anke Mbapeh',
    email: 'bebesenait@gmail.com',
    avatarClass: 'avatar-gold'
  },
  {
    id: 1,
    title: 'Amazing',
    date: 'September 14, 2026',
    rating: 5,
    text: 'Weks is ever so kind, patient and thoughtful. We got little packages to help us during the pilgrimage. I would never have thought of buying a book to write down when I had those intimate moments with God. Vickie Smith was such an added blessing. Will do it again God willing.',
    initials: 'RR',
    author: 'Ramy RA',
    avatarClass: 'avatar-peach'
  },
  {
    id: 2,
    title: 'Medjugorje July 2026 continued',
    date: 'August 23, 2026',
    rating: 5,
    text: 'God blessed our pilgrimage with many miracles. Wex and Vickie were encouraging prayer angels throughout this spiritual retreat. The trip was well planned and organized for adults, teens, and children. This pilgrimage was truly welcoming for everyone. I would recommend ATM for pilgrimages. Once you receive graces during a pilgrimage regular vacation will seem boring',
    initials: 'JJ',
    author: 'Jacqueline JA',
    avatarClass: 'avatar-pink'
  },
  {
    id: 3,
    title: 'Medjugorje July 2026',
    date: 'August 22, 2026',
    rating: 5,
    text: 'This pilgrimage to Medjugorje was full of love and presence of Jesus and Our Lady. Lodging began home with cheerful greetings and homemade meals served family style. Apporition Hill, Blue Cross, and Oasis of Peace are a short walk from our lodging. Our guide, Julie, provided historical context, recommendations, arranged side retreats to Surmanci, Zadar',
    initials: 'JJ',
    author: 'Jacqueline JA',
    avatarClass: 'avatar-pink'
  }
];

const GALLERY_ARCHIVE = [
  {
    title: 'Apparition Hill & Blue Cross Walk',
    location: 'Medjugorje Pilgrimage',
    image: 'https://atm-travels.org/wp-content/uploads/2026/11/WhatsApp-Image-2026-11-04-at-9.45.19-AM-1.jpeg'
  },
  {
    title: 'Sacred Chapel & Morning Rosary',
    location: 'Croatia & Medjugorje',
    image: 'https://atm-travels.org/wp-content/uploads/2026/11/element_0-6-819x1024.webp'
  },
  {
    title: 'Children & Family Prayer Gathering',
    location: 'Italy & Medjugorje',
    image: 'https://atm-travels.org/wp-content/uploads/2026/11/WhatsApp-Image-2026-08-28-at-9.58.14-PM-768x960.jpeg'
  },
  {
    title: 'Marian Shrine Procession',
    location: 'Medjugorje Summer Journey',
    image: 'https://atm-travels.org/wp-content/uploads/2026/11/Gemini_Generated_Image_kia46pkia46pkia4-768x1095.jpg'
  },
  {
    title: 'Mother’s Spiritual Fellowship',
    location: 'Retreat Archive',
    image: 'https://atm-travels.org/wp-content/uploads/2026/11/WhatsApp-Image-2026-10-05-at-2.42.40-AM-768x994.jpeg'
  },
  {
    title: 'Handcrafted Pilgrimage Care Packages',
    location: 'Dacula, Georgia',
    image: 'https://atm-travels.org/wp-content/uploads/2026/11/WhatsApp-Image-2026-10-30-at-11.41.20-PM-683x1024.jpeg'
  }
];

const BLOG_POSTS = [
  {
    id: 'preparing-your-heart-for-medjugorje',
    category: 'SPIRITUAL PREPARATION',
    date: 'November 2026',
    title: 'Preparing Mind, Spirit, and Luggage for a Family Pilgrimage',
    excerpt: 'Why a pilgrimage with children and family is unlike an ordinary vacation — and practical ways to cultivate intentional prayer before departure.',
    image: 'https://atm-travels.org/wp-content/uploads/2026/11/WhatsApp-Image-2026-11-04-at-9.45.19-AM-1.jpeg',
    content: [
      'A Catholic pilgrimage with your children and family is far more than a vacation — it is a sacred invitation to step away from everyday distractions and walk together toward Christ through the Blessed Mother.',
      'Before departure, we encourage families to establish a simple daily rhythm of prayer: praying the Flame of Love Rosary together at 8:00 PM, keeping a small prayer intention journal for each child, and going to Confession as a family.',
      'Practically, pack comfortable walking shoes for Apparition Hill and Cross Mountain, modest attire for Holy Mass and Adoration, a refillable water bottle, and a rosary in every child’s pocket.'
    ]
  },
  {
    id: 'landmarks-of-medjugorje',
    category: 'SACRED DESTINATIONS',
    date: 'October 2026',
    title: 'A Guide to Apparition Hill, Cross Mountain, and Oasis of Peace',
    excerpt: 'Historical context and walking reflections on the sacred landmarks a short walk from our family-style lodging in Medjugorje.',
    image: 'https://atm-travels.org/wp-content/uploads/2026/11/element_0-6-819x1024.webp',
    content: [
      'In Medjugorje, our family-style lodging is intentionally situated within walking distance of St. James Church, Apparition Hill (Podbrdo), the Blue Cross, and the Oasis of Peace.',
      'As families climb Apparition Hill praying the Rosary along the bronze reliefs of the Mysteries, children experience firsthand that faith is an active, joyful journey shared across generations.',
      'Each day combines Holy Mass, Adoration of the Blessed Sacrament, historical guidance from our trusted local team, and home-cooked meals shared at one family table.'
    ]
  },
  {
    id: 'botanical-care-on-the-journey',
    category: 'WELLNESS & CARE',
    date: 'October 2026',
    title: 'The Story Behind Our Handcrafted Calendula & Good Samaritan Balms',
    excerpt: 'How traditional botanical oils, soaps, and salves support daily self-care and comfort travelers along the way.',
    image: 'https://atm-travels.org/wp-content/uploads/2026/11/WhatsApp-Image-2026-10-30-at-11.41.20-PM-683x1024.jpeg',
    content: [
      'Every balm, salve, and soap in the ATM Travels store is handcrafted in small batches in Dacula, Georgia using slow-infused golden calendula blossoms, pure beeswax, and traditional aromatic essential oils.',
      'Inspired by Catholic herbal traditions such as the Balm of the Good Samaritan and Balm of Saint Michael, our 1 oz travel oils and soothing salves are designed to accompany pilgrims on long flights and mountain walks while supporting the mission of April-Marie’s Traveling Mary.'
    ]
  }
];

const PILGRIMAGE_FAQS = [
  {
    q: 'Are ATM Travels pilgrimages suitable for young children and families?',
    a: 'Yes! Children and families are at the very heart of April-Marie’s Traveling Mary. Every itinerary in Medjugorje, Italy, and Croatia is paced so children of all ages feel included, with dedicated youth prayer moments, family-style lodging, and ground transportation.'
  },
  {
    q: 'How do the registration deposits and installment deadlines work?',
    a: 'You can secure your spot with the initial registration deposit ($500 for international pilgrimages; $100 for Mother’s Retreat 2027) via Stripe, then complete your second or third installment by the published 2027 deadline. Make sure to also complete the Google Registration Form for your trip so our team has your rooming and travel details.'
  },
  {
    q: 'How can our family host a Traveling Statue of Our Lady of Grace?',
    a: 'Our Traveling Statues currently visit homes across Georgia, Maryland, Delaware, North Carolina, Texas, Canada, Arizona, Oklahoma, Cameroon, and Nigeria. Click any location badge on the About Us page (or use the Prayer & Pilgrimage Hub button) to connect with your regional ambassador.'
  },
  {
    q: 'How do we join the nightly 8:00 PM Children’s Flame of Love Rosary on Zoom?',
    a: 'All families and children are warmly welcome! Click the "Prayer & Pilgrimage Hub" button in the bottom-left corner and select "Join 8:00 PM Zoom Rosary" to request the nightly Zoom details.'
  }
];

const SACRED_DESTINATIONS = {
  medjugorje: {
    name: 'Medjugorje (Bosnia & Herzegovina)',
    tagline: 'Walking Distance from Our Family-Style Lodging',
    summary: 'In Medjugorje, families experience deep peace, daily Holy Mass, Confession, Adoration, and home-cooked family-style meals just a short walk from the sacred landmarks.',
    landmarks: [
      { title: 'Apparition Hill (Podbrdo)', desc: 'Climb the hill where Our Lady Queen of Peace first appeared, praying the Holy Rosary together beside the bronze reliefs of the Mysteries.' },
      { title: 'St. James Parish Church', desc: 'The spiritual heart of Medjugorje — gather each evening for the Rosary, International Holy Mass, and Eucharistic Adoration.' },
      { title: 'Cross Mountain (Križevac)', desc: 'Pray the Stations of the Cross with children and teens as you ascend to the 1933 jubilee cross overlooking the valley.' },
      { title: 'Blue Cross & Oasis of Peace', desc: 'Quiet places of Marian devotion, group reflection, and side retreats to Surmanci (Merciful Jesus icon) guided by our local team.' }
    ]
  },
  italy: {
    name: 'Italy (Rome, Assisi & San Giovanni Rotondo)',
    tagline: 'Walk with the Saints · Grow in Faith · Be Transformed',
    summary: 'Journey through the heart of the Church in Italy — encountering Eucharistic miracles, the incorrupt saints who inspire our children, and the major basilicas of Rome.',
    landmarks: [
      { title: 'Assisi — Tomb of St. Carlo Acutis', desc: 'Pray with your children before the resting place of Saint Carlo Acutis, patron of youth and model for our Seven Children Adoration ministry, plus St. Francis & St. Clare.' },
      { title: 'Rome & Vatican City', desc: 'Visit St. Peter’s Basilica, St. Mary Major, St. John Lateran, and walk in the footsteps of the Apostles and early martyrs.' },
      { title: 'San Giovanni Rotondo — St. Padre Pio', desc: 'Venerate the sanctuary and relics of Saint Pio of Pietrelcina and pray for healing and family conversion.' },
      { title: 'Lanciano & Loreto', desc: 'Experience the ancient Eucharistic Miracle of Lanciano and the Holy House of Loreto.' }
    ]
  },
  croatia: {
    name: 'Croatia & Adriatic Shrines',
    tagline: 'Catholic Heritage & Family Fellowship Along the Adriatic',
    summary: 'Our combined family pilgrimages include memorable excursions through Croatia’s historic coastal churches and shrines.',
    landmarks: [
      { title: 'Zadar & Split Historic Churches', desc: 'Guided visits to centuries-old cathedrals, saint relics, and vibrant Catholic communities along the Dalmatian coast.' },
      { title: 'Vepric (Croatian Lourdes Sanctuary)', desc: 'A peaceful Marian grotto nestled in the coastal hills where families pause for Rosary and thanksgiving.' },
      { title: 'Family Fellowship & Rest', desc: 'Shared meals and refreshing coastal stops tailored so children, teens, and parents bond as one pilgrimage village.' },
      { title: 'Seamless Ground Transfers', desc: 'Full airport pickup, private coach transport, and attentive local guides from arrival to departure.' }
    ]
  },
  rosamystica: {
    name: 'Rosa Mystica (Edmeston, New York)',
    tagline: '“She is Our Mother” — Annual Mother’s Spiritual Retreat',
    summary: 'A sanctuary of renewal in upstate New York where mothers, stepmothers, and mothers-to-be lay down their burdens and experience healing.',
    landmarks: [
      { title: 'Holy Mass, Adoration & Confession', desc: 'Daily sacraments, inspiring spiritual leaders, and quiet hours before the Blessed Sacrament.' },
      { title: '1-on-1 Spiritual Direction & Healing', desc: 'Personal spiritual guidance and prayer sessions that give mothers permission to heal, forgive, and be renewed.' },
      { title: 'Veneration of Sacred Relics', desc: 'Intimate prayer time with first-class relics of the Saints in Rosa Mystica’s chapels.' },
      { title: 'Evening Bonfire & Sisterhood', desc: 'Warm reception, delicious meals, and heartfelt testimony sharing around the evening bonfire.' }
    ]
  }
};

const PILGRIMAGE_CHECKLIST_ITEMS = [
  'Valid Passport (at least 6 months validity beyond return date)',
  'Complete the Google Registration Form for your selected pilgrimage',
  'Submit Initial Deposit on Stripe ($500 Pilgrimages / $100 Retreat)',
  'Family Sacrament of Confession prior to departure',
  'Join the 8:00 PM Nightly Flame of Love Zoom Rosary to prepare spiritually',
  'Small Prayer Intention Journal & pen for each child and adult',
  'Rosaries & Flame of Love prayer booklet in carry-on bag',
  'Comfortable broken-in walking shoes (for Apparition Hill & Cross Mountain)',
  'Modest attire for Holy Mass & Basilicas (shoulders & knees covered)',
  'Travel-size ATM Calendula / Good Samaritan Balm & refillable water bottle'
];

const FLAME_OF_LOVE_STEPS = [
  {
    step: '1. Sign of the Cross',
    title: 'In Honor of the Five Sacred Wounds',
    prayer: 'Make the Sign of the Cross five times in honor of the Five Sacred Wounds of Our Lord Jesus Christ, asking for purity of heart as we begin.'
  },
  {
    step: '2. The Unity Prayer',
    title: 'Jesus’ Prayer of Oneness',
    prayer: '“May our feet journey together, may our hands gather in unity, may our hearts beat in unison, may our souls be in harmony, may our thoughts be as one, may our ears listen to the silence together, may our glances profoundly penetrate each other, may our lips pray together to gain mercy from the Eternal Father. Amen.”'
  },
  {
    step: '3. Flame of Love Hail Mary',
    title: 'Prayed on Every Hail Mary Bead',
    prayer: '“Hail Mary, full of grace, the Lord is with Thee; blessed art Thou among women, and blessed is the fruit of Thy womb, Jesus. Holy Mary, Mother of God, pray for us sinners, spread the effect of grace of Thy Flame of Love over all of humanity, now and at the hour of our death. Amen.”'
  },
  {
    step: '4. Decade Aspiration',
    title: 'After Each Glory Be',
    prayer: '“O my Jesus, forgive us our sins, save us from the fires of hell, lead all souls to Heaven, especially those most in need of Thy mercy. Come, Holy Spirit! Come by means of the powerful intercession of the Immaculate Heart of Mary, Thy well-beloved Spouse.”'
  },
  {
    step: '5. Prayer for Priests & Children',
    title: 'ATM Kids & Seven Children Closing',
    prayer: '“Blessed Mother, Queen of Peace and Our Lady of Grace, bless all priests, bishops, and religious, guard the innocence of our children, and make our homes little domestic churches that lead all souls to Jesus. Amen.”'
  }
];

const INITIAL_PRAYER_INTENTIONS = [
  {
    id: 501,
    family: 'The Mbapeh Family (Georgia)',
    tag: 'Children & Youth Faith',
    text: 'In thanksgiving for 5 years of ATM KIDS nightly Rosary calls and for all children preparing for their next pilgrimage to Medjugorje.',
    prayers: 42
  },
  {
    id: 502,
    family: 'Mothers of Rosa Mystica Retreat',
    tag: 'Mothers & Families',
    text: 'For every mother carrying heavy burdens — that through Our Lady’s intercession they may find peace, healing, and spiritual renewal.',
    prayers: 38
  },
  {
    id: 503,
    family: 'Seven Children Adoration Apostolate',
    tag: 'Priests & Vocations',
    text: 'For our parish priests, Fr. Henry, Fr. Maurice, Fr. Pontianus, and for holy vocations to blossom among our children.',
    prayers: 51
  }
];

// Load persisted state from localStorage safely
function loadPersistedCart() {
  try {
    const raw = localStorage.getItem('atm_cart_v1');
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function savePersistedCart(cart) {
  try {
    localStorage.setItem('atm_cart_v1', JSON.stringify(cart));
  } catch (e) {}
}

function loadPersistedReviews() {
  try {
    const raw = localStorage.getItem('atm_reviews_v1');
    if (!raw) return [...INITIAL_REVIEWS];
    const custom = JSON.parse(raw);
    return [...custom, ...INITIAL_REVIEWS];
  } catch (e) {
    return [...INITIAL_REVIEWS];
  }
}

function loadPersistedChecklist() {
  try {
    const raw = localStorage.getItem('atm_checklist_v1');
    return raw ? JSON.parse(raw) : [0, 4];
  } catch (e) {
    return [0, 4];
  }
}

function loadPersistedIntentions() {
  try {
    const raw = localStorage.getItem('atm_intentions_v1');
    return raw ? JSON.parse(raw) : [...INITIAL_PRAYER_INTENTIONS];
  } catch (e) {
    return [...INITIAL_PRAYER_INTENTIONS];
  }
}

// Application State
const state = {
  route: '/',
  cart: loadPersistedCart(),
  reviews: loadPersistedReviews(),
  checklistDone: loadPersistedChecklist(),
  intentions: loadPersistedIntentions(),
  prayedIds: [],
  activeDestTab: 'medjugorje',
  activeRosaryStep: 0,
  shopView: 'grid', // 'grid' | 'list'
  shopCategory: 'All',
  shopSearch: '',
  eventsFilter: 'all', // 'all' | 'family' | 'retreat'
  calcTrip: 'italy', // 'italy' | 'medjugorje' | 'combined' | 'mothers'
  calcRoom: 'double',
  calcTravelers: 1,
  selectedRating: 5,
  singleProductQty: 1
};

// Fallback SVG generator for images if network fails
function handleImgError(imgEl, label = 'ATM Travels') {
  imgEl.onerror = null;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600 600">
    <rect width="100%" height="100%" fill="#0b1b3d"/>
    <circle cx="300" cy="250" r="80" fill="none" stroke="#d4af37" stroke-width="3"/>
    <text x="300" y="258" text-anchor="middle" fill="#ead8a0" font-family="Manrope, sans-serif" font-size="22" font-weight="600">ATM TRAVELS</text>
    <text x="300" y="380" text-anchor="middle" fill="#ffffff" font-family="Manrope, sans-serif" font-size="18">${label.replace(/[<>&"']/g, '')}</text>
  </svg>`;
  imgEl.src = 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
}
window.handleImgError = handleImgError;

// Toast Helper
function showToast(message) {
  const toast = document.getElementById('toast-notification');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 3400);
}

// Navigation / Router
function navigate(path) {
  window.location.hash = path;
}
window.navigate = navigate;

function parseRoute() {
  const hash = window.location.hash.replace(/^#/, '') || '/';
  state.route = hash;
  const nav = document.getElementById('main-nav');
  if (nav) nav.classList.remove('mobile-open');
  renderApp();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Cart Management
function addToCart(productSlug, qty = 1, openInstantCheckout = false) {
  const product = PRODUCTS.find(p => p.slug === productSlug);
  if (!product) return;
  const existing = state.cart.find(item => item.slug === productSlug);
  if (existing) {
    existing.qty += qty;
  } else {
    state.cart.push({ ...product, qty });
  }
  savePersistedCart(state.cart);
  updateCartUI();
  if (openInstantCheckout) {
    toggleCartDrawer(true);
  } else {
    showToast(`Added "${product.name}" to your cart.`);
  }
}
window.addToCart = addToCart;

function removeFromCart(slug) {
  state.cart = state.cart.filter(item => item.slug !== slug);
  savePersistedCart(state.cart);
  updateCartUI();
}
window.removeFromCart = removeFromCart;

function updateCartUI() {
  const badge = document.getElementById('cart-count-badge');
  const totalCount = state.cart.reduce((sum, i) => sum + i.qty, 0);
  if (badge) badge.textContent = totalCount;

  const body = document.getElementById('cart-drawer-body');
  const totalEl = document.getElementById('cart-subtotal-amount');
  if (!body || !totalEl) return;

  if (state.cart.length === 0) {
    body.innerHTML = `<p style="text-align:center; padding: 40px 0; color: var(--slate-text);">Your cart is currently empty.</p>`;
    totalEl.textContent = '$0.00';
    return;
  }

  let subtotal = 0;
  body.innerHTML = state.cart.map(item => {
    const lineTotal = item.price * item.qty;
    subtotal += lineTotal;
    return `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}" onerror="handleImgError(this, '${item.name}')">
        <div style="flex-grow:1;">
          <div style="font-weight:600; font-size:15px; color:var(--navy-dark);">${item.name}</div>
          <div style="font-size:13px; color:var(--slate-text);">${item.qty} × $${item.price.toFixed(2)}</div>
        </div>
        <div style="text-align:right;">
          <div style="font-weight:700; font-size:15px;">$${lineTotal.toFixed(2)}</div>
          <button onclick="removeFromCart('${item.slug}')" style="background:none; border:none; color:#b91c1c; font-size:12px; cursor:pointer; margin-top:4px;">Remove</button>
        </div>
      </div>
    `;
  }).join('');

  totalEl.textContent = `$${subtotal.toFixed(2)}`;
}

function toggleCartDrawer(open) {
  const drawer = document.getElementById('cart-drawer');
  const backdrop = document.getElementById('drawer-backdrop');
  if (!drawer || !backdrop) return;
  if (open) {
    drawer.classList.add('open');
    backdrop.classList.add('open');
    updateCartUI();
  } else {
    drawer.classList.remove('open');
    backdrop.classList.remove('open');
    closeModal();
  }
}
window.toggleCartDrawer = toggleCartDrawer;

function handleCheckoutSubmit() {
  if (state.cart.length === 0) {
    showToast('Your cart is empty. Add a product first!');
    return;
  }
  const drawer = document.getElementById('cart-drawer');
  if (drawer) drawer.classList.remove('open');

  const modal = document.getElementById('registration-modal');
  const backdrop = document.getElementById('drawer-backdrop');
  if (!modal || !backdrop) return;

  const subtotal = state.cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  const itemsListHtml = state.cart.map(i => `
    <div style="display:flex; justify-content:space-between; font-size:13.5px; padding:4px 0; border-bottom:1px dashed var(--border-gray);">
      <span>${i.qty} × ${i.name}</span>
      <strong>$${(i.price * i.qty).toFixed(2)}</strong>
    </div>
  `).join('');

  modal.innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:start; gap:16px; margin-bottom:14px;">
      <div>
        <span class="section-tag" style="margin-bottom:4px;">ATM TRAVELS HANDCRAFTED STORE</span>
        <h3 style="font-size:22px;">Shipping &amp; Instant Order Checkout</h3>
      </div>
      <button onclick="closeModal()" style="background:none; border:none; font-size:24px; cursor:pointer; color:var(--slate-text);">&times;</button>
    </div>
    <div style="background:var(--cream-bg); border:1px solid var(--border-gray); border-radius:10px; padding:12px 16px; margin-bottom:16px;">
      ${itemsListHtml}
      <div style="display:flex; justify-content:space-between; font-size:15px; font-weight:700; color:var(--navy-dark); padding-top:8px;">
        <span>Order Total</span>
        <span>$${subtotal.toFixed(2)}</span>
      </div>
    </div>
    <form onsubmit="completeStoreCheckout(event)">
      <div class="form-group">
        <label class="form-label">Customer Full Name *</label>
        <input id="checkout-name" type="text" class="form-control" placeholder="Full name" required>
      </div>
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
        <div class="form-group">
          <label class="form-label">Email Address *</label>
          <input id="checkout-email" type="email" class="form-control" placeholder="you@example.com" required>
        </div>
        <div class="form-group">
          <label class="form-label">Phone Number *</label>
          <input id="checkout-phone" type="tel" class="form-control" placeholder="+1 (404) 000-0000" required>
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">Shipping Street Address, City, State &amp; ZIP *</label>
        <textarea id="checkout-address" class="form-control" style="min-height:68px;" placeholder="Enter full shipping address..." required></textarea>
      </div>
      <button type="submit" class="btn btn-navy btn-block">Place Order ($${subtotal.toFixed(2)})</button>
    </form>
  `;
  modal.classList.add('open');
  backdrop.classList.add('open');
}
window.handleCheckoutSubmit = handleCheckoutSubmit;

function completeStoreCheckout(e) {
  e.preventDefault();
  const name = document.getElementById('checkout-name').value.trim();
  const email = document.getElementById('checkout-email').value.trim();
  const phone = document.getElementById('checkout-phone').value.trim();
  const address = document.getElementById('checkout-address').value.trim();
  const subtotal = state.cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  const itemsText = state.cart.map(i => `${i.qty}x ${i.name} ($${(i.price * i.qty).toFixed(2)})`).join(', ');

  const summaryText = `Hello ATM Travels! New Store Order ($${subtotal.toFixed(2)}):\nItems: ${itemsText}\nCustomer: ${name} (${email}, ${phone})\nShip To: ${address}`;
  const waUrl = `https://wa.me/14045907020?text=${encodeURIComponent(summaryText)}`;
  const mailUrl = `mailto:info@atm-travels.org?subject=${encodeURIComponent('New ATM Store Order - ' + name)}&body=${encodeURIComponent(summaryText)}`;

  state.cart = [];
  savePersistedCart(state.cart);
  updateCartUI();

  const modal = document.getElementById('registration-modal');
  if (modal) {
    modal.innerHTML = `
      <div style="text-align:center; padding: 12px 6px;">
        <div style="width:52px; height:52px; border-radius:50%; background:#dcfce7; color:#15803d; display:inline-flex; align-items:center; justify-content:center; font-size:26px; font-weight:700; margin-bottom:14px;">✓</div>
        <span class="section-tag" style="margin-bottom:4px;">ORDER CONFIRMED</span>
        <h3 style="font-size:22px; margin-bottom:10px;">Thank You for Your Order, ${name}!</h3>
        <p style="font-size:14.5px; color:var(--slate-text); margin-bottom:18px;">Your handcrafted botanical order (<strong>$${subtotal.toFixed(2)}</strong>) is ready. Send your itemized order invoice to our Dacula, GA fulfillment team via WhatsApp or Email below:</p>
        <div style="display:flex; flex-direction:column; gap:10px;">
          <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-navy btn-block" onclick="closeModal()">Send Order Invoice via WhatsApp (+1-404-590-7020)</a>
          <a href="${mailUrl}" class="btn btn-outline-navy btn-block" onclick="closeModal()">Send Order Invoice via Email (info@atm-travels.org)</a>
          <button type="button" class="btn btn-sm" style="background:none; color:var(--slate-text);" onclick="closeModal()">Done</button>
        </div>
      </div>
    `;
  }
  showToast('Thank you! Your order has been recorded by ATM Travels.');
}
window.completeStoreCheckout = completeStoreCheckout;

// Lightbox Viewer for Flyers & Past Event Photos
function openLightbox(src, caption) {
  const overlay = document.getElementById('lightbox-overlay');
  const img = document.getElementById('lightbox-img');
  const cap = document.getElementById('lightbox-caption');
  if (!overlay || !img || !cap) return;
  img.src = src;
  img.alt = caption || 'ATM Travels Photo';
  cap.textContent = caption || '';
  overlay.classList.add('open');
}
window.openLightbox = openLightbox;

function closeLightbox(e) {
  if (e && e.target && e.target.id === 'lightbox-img') return;
  const overlay = document.getElementById('lightbox-overlay');
  if (overlay) overlay.classList.remove('open');
}
window.closeLightbox = closeLightbox;

// Floating Prayer & Pilgrimage Helper
function toggleFloatingHelper(forceState) {
  const panel = document.getElementById('floating-panel');
  if (!panel) return;
  if (typeof forceState === 'boolean') {
    panel.classList.toggle('open', forceState);
  } else {
    panel.classList.toggle('open');
  }
}
window.toggleFloatingHelper = toggleFloatingHelper;

// Interactive Host a Traveling Statue Modal
function openStatueModal(region = 'Georgia') {
  const modal = document.getElementById('registration-modal');
  const backdrop = document.getElementById('drawer-backdrop');
  if (!modal || !backdrop) return;

  const regions = ['Georgia', 'Maryland', 'Delaware', 'North Carolina', 'Texas', 'Canada', 'Arizona', 'Oklahoma', 'Cameroon', 'Nigeria', 'Other / Become an Ambassador'];
  modal.innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:start; gap:16px; margin-bottom:16px;">
      <div>
        <span class="section-tag" style="margin-bottom:4px;">THE TRAVELING STATUES</span>
        <h3 style="font-size:22px;">Host Our Lady of Grace in Your Home</h3>
      </div>
      <button onclick="closeModal()" style="background:none; border:none; font-size:24px; cursor:pointer; color:var(--slate-text);">&times;</button>
    </div>
    <p style="font-size:14.5px; margin-bottom:18px;">Welcome a Traveling Statue of Our Lady into your home for daily family prayer and the Holy Rosary, or inquire about becoming a Regional Ambassador.</p>
    <form onsubmit="submitRegistrationForm(event, 'Traveling Statue Hosting (' + document.getElementById('statue-region-select').value + ')')">
      <div class="form-group">
        <label class="form-label">Select Your State / Country *</label>
        <select id="statue-region-select" class="form-control" required>
          ${regions.map(r => `<option value="${r}" ${r === region ? 'selected' : ''}>${r}</option>`).join('')}
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">Family / Contact Full Name *</label>
        <input type="text" class="form-control" placeholder="Enter your full name" required>
      </div>
      <div class="form-group">
        <label class="form-label">Email Address *</label>
        <input type="email" class="form-control" placeholder="you@example.com" required>
      </div>
      <div class="form-group">
        <label class="form-label">Phone / WhatsApp Number *</label>
        <input type="tel" class="form-control" placeholder="+1 (404) 000-0000" required>
      </div>
      <div class="form-group">
        <label class="form-label">Preferred Dates or Ambassador Inquiry</label>
        <textarea class="form-control" style="min-height:76px;" placeholder="Share your city/parish and whether you wish to host Our Lady or serve as an Ambassador..."></textarea>
      </div>
      <button type="submit" class="btn btn-navy btn-block">Request Traveling Statue Visit</button>
    </form>
  `;
  modal.classList.add('open');
  backdrop.classList.add('open');
}
window.openStatueModal = openStatueModal;

// Interactive Ministry Signup Modal (Home Chapel, Daily 8PM Zoom Rosary, Seven Children)
function openMinistryModal(ministryName = 'Daily Rosary — 8:00 PM Zoom') {
  const modal = document.getElementById('registration-modal');
  const backdrop = document.getElementById('drawer-backdrop');
  if (!modal || !backdrop) return;

  modal.innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:start; gap:16px; margin-bottom:16px;">
      <div>
        <span class="section-tag" style="margin-bottom:4px;">ATM FAMILY &amp; CHILDREN'S MINISTRY</span>
        <h3 style="font-size:22px;">${ministryName}</h3>
      </div>
      <button onclick="closeModal()" style="background:none; border:none; font-size:24px; cursor:pointer; color:var(--slate-text);">&times;</button>
    </div>
    <p style="font-size:14.5px; margin-bottom:18px;">Connect with our team in Dacula, Georgia to receive the Zoom link, weekly Adoration schedule, or guidance on setting up your family's Home Chapel.</p>
    <form onsubmit="submitRegistrationForm(event, '${ministryName.replace(/'/g, "\\'")}')">
      <div class="form-group">
        <label class="form-label">Parent / Guardian Name *</label>
        <input type="text" class="form-control" placeholder="Full name" required>
      </div>
      <div class="form-group">
        <label class="form-label">Email Address *</label>
        <input type="email" class="form-control" placeholder="you@example.com" required>
      </div>
      <div class="form-group">
        <label class="form-label">Phone / WhatsApp Number *</label>
        <input type="tel" class="form-control" placeholder="+1 (404) 000-0000" required>
      </div>
      <div class="form-group">
        <label class="form-label">Children's Names &amp; Ages / Prayer Intentions</label>
        <textarea class="form-control" style="min-height:76px;" placeholder="Tell us about your family or how we can pray with you..."></textarea>
      </div>
      <button type="submit" class="btn btn-navy btn-block">Join ${ministryName}</button>
    </form>
  `;
  modal.classList.add('open');
  backdrop.classList.add('open');
}
window.openMinistryModal = openMinistryModal;

// Blog Article Reader Modal
function openBlogModal(postId) {
  const post = BLOG_POSTS.find(p => p.id === postId) || BLOG_POSTS[0];
  const modal = document.getElementById('registration-modal');
  const backdrop = document.getElementById('drawer-backdrop');
  if (!modal || !backdrop) return;

  modal.innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:start; gap:16px; margin-bottom:14px;">
      <div>
        <span class="section-tag" style="margin-bottom:4px;">${post.category} · ${post.date}</span>
        <h3 style="font-size:22px;">${post.title}</h3>
      </div>
      <button onclick="closeModal()" style="background:none; border:none; font-size:24px; cursor:pointer; color:var(--slate-text);">&times;</button>
    </div>
    <img src="${post.image}" alt="${post.title}" style="width:100%; max-height:220px; object-fit:cover; border-radius:10px; margin-bottom:16px;" onerror="handleImgError(this, '${post.title}')">
    <div style="display:flex; flex-direction:column; gap:12px; margin-bottom:22px;">
      ${post.content.map(para => `<p style="font-size:15px; line-height:1.7; color:var(--slate-text); margin:0;">${para}</p>`).join('')}
    </div>
    <div style="display:flex; gap:12px; justify-content:flex-end;">
      <button class="btn btn-outline-navy btn-sm" onclick="closeModal()">Close Article</button>
      <a href="#/events-and-pilgrimages" class="btn btn-navy btn-sm" onclick="closeModal()">Explore 2027 Pilgrimages</a>
    </div>
  `;
  modal.classList.add('open');
  backdrop.classList.add('open');
}
window.openBlogModal = openBlogModal;

// Pilgrimage Registration Modal
function openRegistrationModal(eventId) {
  const ev = UPCOMING_EVENTS.find(e => e.id === eventId) || UPCOMING_EVENTS[0];
  const modal = document.getElementById('registration-modal');
  const backdrop = document.getElementById('drawer-backdrop');
  if (!modal || !backdrop) return;

  modal.innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:start; gap:16px; margin-bottom:18px;">
      <div>
        <span class="section-tag" style="margin-bottom:4px;">PILGRIMAGE REGISTRATION</span>
        <h3 style="font-size:22px;">${ev.title}</h3>
      </div>
      <button onclick="closeModal()" style="background:none; border:none; font-size:24px; cursor:pointer; color:var(--slate-text);">&times;</button>
    </div>
    <p style="font-size:14.5px; margin-bottom:20px;">${ev.subtitle}</p>
    <form onsubmit="submitRegistrationForm(event, '${ev.title.replace(/'/g, "\\'")}')">
      <div class="form-group">
        <label class="form-label">Select Payment / Installment Option *</label>
        <select class="form-control" required>
          ${ev.tiers.map(t => `<option value="${t.price}">${t.label} — $${t.price.toLocaleString()}</option>`).join('')}
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">Pilgrim Full Name *</label>
        <input type="text" class="form-control" placeholder="Enter full name as on passport" required>
      </div>
      <div class="form-group">
        <label class="form-label">Email Address *</label>
        <input type="email" class="form-control" placeholder="you@example.com" required>
      </div>
      <div class="form-group">
        <label class="form-label">Phone Number *</label>
        <input type="tel" class="form-control" placeholder="+1 (404) 000-0000" required>
      </div>
      <div class="form-group">
        <label class="form-label">Family Members / Room Preference & Notes</label>
        <textarea class="form-control" style="min-height:80px;" placeholder="List accompanying children/family members or rooming requests..."></textarea>
      </div>
      <button type="submit" class="btn btn-navy btn-block">Complete Registration Request</button>
    </form>
  `;
  modal.classList.add('open');
  backdrop.classList.add('open');
}
window.openRegistrationModal = openRegistrationModal;

function closeModal() {
  const modal = document.getElementById('registration-modal');
  const backdrop = document.getElementById('drawer-backdrop');
  const drawer = document.getElementById('cart-drawer');
  if (modal) modal.classList.remove('open');
  if (backdrop && (!drawer || !drawer.classList.contains('open'))) {
    backdrop.classList.remove('open');
  }
}
window.closeModal = closeModal;

function submitRegistrationForm(e, title) {
  e.preventDefault();
  const form = e.target;
  const inputs = Array.from(form.querySelectorAll('input, select, textarea')).map(el => el.value.trim()).filter(Boolean);
  const summaryText = `Hello ATM Travels! I just submitted a request for: ${title}.\nDetails: ${inputs.join(' | ')}`;
  const waUrl = `https://wa.me/14045907020?text=${encodeURIComponent(summaryText)}`;
  const mailUrl = `mailto:info@atm-travels.org?subject=${encodeURIComponent('ATM Travels Request: ' + title)}&body=${encodeURIComponent(summaryText)}`;

  const modal = document.getElementById('registration-modal');
  if (modal) {
    modal.innerHTML = `
      <div style="text-align:center; padding: 12px 6px;">
        <div style="width:52px; height:52px; border-radius:50%; background:#dcfce7; color:#15803d; display:inline-flex; align-items:center; justify-content:center; font-size:26px; font-weight:700; margin-bottom:14px;">✓</div>
        <span class="section-tag" style="margin-bottom:4px;">REQUEST RECORDED</span>
        <h3 style="font-size:22px; margin-bottom:10px;">Thank You! God Bless Your Journey</h3>
        <p style="font-size:14.5px; color:var(--slate-text); margin-bottom:20px;">Your request for <strong>${title}</strong> has been logged. For an immediate response from our coordinator in Dacula, Georgia, you can also send your details directly via WhatsApp or Email below:</p>
        <div style="display:flex; flex-direction:column; gap:10px;">
          <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-navy btn-block" onclick="closeModal()">Send Instant WhatsApp (+1-404-590-7020)</a>
          <a href="${mailUrl}" class="btn btn-outline-navy btn-block" onclick="closeModal()">Send via Email (info@atm-travels.org)</a>
          <button type="button" class="btn btn-sm" style="background:none; color:var(--slate-text);" onclick="closeModal()">Done</button>
        </div>
      </div>
    `;
  } else {
    closeModal();
  }
  showToast(`Request submitted for ${title}!`);
}
window.submitRegistrationForm = submitRegistrationForm;

// Interactive Prayer Intention Wall & Flame of Love Rosary Guide
function setRosaryStep(idx) {
  state.activeRosaryStep = idx;
  const box = document.getElementById('rosary-interactive-container');
  if (box) {
    box.outerHTML = renderRosaryGuideHTML();
  } else {
    renderApp();
  }
}
window.setRosaryStep = setRosaryStep;

function prayForIntention(id) {
  if (state.prayedIds.includes(id)) {
    showToast('Thank you for uniting your prayers with this family!');
    return;
  }
  state.prayedIds.push(id);
  const item = state.intentions.find(i => i.id === id);
  if (item) {
    item.prayers += 1;
    try {
      localStorage.setItem('atm_intentions_v1', JSON.stringify(state.intentions));
    } catch (e) {}
  }
  const wallEl = document.getElementById('prayer-wall-cards');
  if (wallEl) {
    wallEl.innerHTML = renderIntentionCardsHTML();
  }
  showToast('🙏 Amen! Your prayer has been added to this family intention.');
}
window.prayForIntention = prayForIntention;

function openIntentionModal() {
  const modal = document.getElementById('registration-modal');
  const backdrop = document.getElementById('drawer-backdrop');
  if (!modal || !backdrop) return;

  modal.innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:start; gap:16px; margin-bottom:16px;">
      <div>
        <span class="section-tag" style="margin-bottom:4px;">COMMUNITY PRAYER WALL</span>
        <h3 style="font-size:22px;">Submit a Family Prayer Intention</h3>
      </div>
      <button onclick="closeModal()" style="background:none; border:none; font-size:24px; cursor:pointer; color:var(--slate-text);">&times;</button>
    </div>
    <p style="font-size:14.5px; margin-bottom:18px;">Share your prayer petition so our ATM KIDS nightly Rosary group and pilgrims traveling to Medjugorje, Italy, and Rosa Mystica can lift your family up in prayer.</p>
    <form onsubmit="submitIntentionForm(event)">
      <div class="form-group">
        <label class="form-label">Family or First Name &amp; State/Country *</label>
        <input id="intention-family-input" type="text" class="form-control" placeholder="e.g., The Nfor Family (Georgia)" required>
      </div>
      <div class="form-group">
        <label class="form-label">Intention Category *</label>
        <select id="intention-tag-input" class="form-control" required>
          <option value="Family & Children">Family &amp; Children</option>
          <option value="Healing & Peace">Healing &amp; Peace</option>
          <option value="Thanksgiving">Thanksgiving to Our Lady</option>
          <option value="Priests & Vocations">Priests &amp; Vocations</option>
          <option value="Pilgrimage Graces">Pilgrimage Graces</option>
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">Your Prayer Intention *</label>
        <textarea id="intention-text-input" class="form-control" style="min-height:86px;" placeholder="Write your prayer petition here..." required></textarea>
      </div>
      <button type="submit" class="btn btn-navy btn-block">Post Prayer Intention</button>
    </form>
  `;
  modal.classList.add('open');
  backdrop.classList.add('open');
}
window.openIntentionModal = openIntentionModal;

function submitIntentionForm(e) {
  e.preventDefault();
  const family = document.getElementById('intention-family-input').value.trim();
  const tag = document.getElementById('intention-tag-input').value;
  const text = document.getElementById('intention-text-input').value.trim();
  if (!family || !text) return;

  state.intentions.unshift({
    id: Date.now(),
    family,
    tag,
    text,
    prayers: 1
  });
  try {
    localStorage.setItem('atm_intentions_v1', JSON.stringify(state.intentions));
  } catch (err) {}

  closeModal();
  renderApp();
  showToast('🙏 Your prayer intention has been added to the ATM Prayer Wall.');
}
window.submitIntentionForm = submitIntentionForm;

function renderIntentionCardsHTML() {
  return state.intentions.slice(0, 6).map(item => {
    const hasPrayed = state.prayedIds.includes(item.id);
    return `
      <div class="intention-card">
        <div>
          <div style="font-size:11.5px; text-transform:uppercase; letter-spacing:0.08em; color:var(--gold-accent); font-weight:700; margin-bottom:6px;">${item.tag}</div>
          <p style="font-size:14.5px; color:var(--navy-dark); line-height:1.65; margin-bottom:16px;">“${item.text}”</p>
        </div>
        <div style="display:flex; justify-content:space-between; align-items:center; gap:10px; padding-top:12px; border-top:1px solid var(--border-gray);">
          <span style="font-size:13px; font-weight:600; color:var(--slate-text);">— ${item.family}</span>
          <button type="button" class="pray-btn ${hasPrayed ? 'prayed' : ''}" onclick="prayForIntention(${item.id})">
            <span>🙏</span>
            <span>${hasPrayed ? 'Prayed' : 'Pray'} (${item.prayers})</span>
          </button>
        </div>
      </div>
    `;
  }).join('');
}

function renderRosaryGuideHTML() {
  const stepObj = FLAME_OF_LOVE_STEPS[state.activeRosaryStep] || FLAME_OF_LOVE_STEPS[0];
  return `
    <div id="rosary-interactive-container" class="rosary-guide-box">
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px;">
        <div>
          <span class="section-tag light" style="margin-bottom:4px;">INTERACTIVE CHILDREN &amp; FAMILY PRAYER GUIDE</span>
          <h3 style="color:var(--white); font-size:22px; margin:0;">How to Pray the Flame of Love Rosary (8:00 PM Nightly Zoom)</h3>
        </div>
        <button type="button" class="btn btn-white btn-sm" onclick="openMinistryModal('Daily Rosary — 8:00 PM Zoom')">Get 8:00 PM Zoom Link</button>
      </div>
      <div class="rosary-steps-bar">
        ${FLAME_OF_LOVE_STEPS.map((s, idx) => `
          <button type="button" class="rosary-step-pill ${state.activeRosaryStep === idx ? 'active' : ''}" onclick="setRosaryStep(${idx})">${s.step}</button>
        `).join('')}
      </div>
      <div style="background:rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,0.18); border-radius:12px; padding:20px 24px;">
        <div style="font-size:13px; text-transform:uppercase; letter-spacing:0.08em; color:var(--gold-soft); font-weight:700; margin-bottom:6px;">${stepObj.title}</div>
        <p style="color:var(--white); font-size:16px; line-height:1.75; margin:0;">${stepObj.prayer}</p>
      </div>
    </div>
  `;
}

function renderPrayerWallSection() {
  return `
    <section class="section" style="padding-top:20px;">
      <div class="container">
        <div style="display:flex; justify-content:space-between; align-items:flex-end; flex-wrap:wrap; gap:16px; margin-bottom:12px;">
          <div>
            <span class="section-tag">UNITED IN PRAYER</span>
            <h2 style="margin-bottom:6px;">Pilgrimage Prayer Intention Wall</h2>
            <p style="margin:0; max-width:640px;">Lift up fellow families in prayer or submit your own intention to be carried by ATM Travels to Medjugorje, Italy, and Rosa Mystica.</p>
          </div>
          <button type="button" class="btn btn-navy btn-sm" onclick="openIntentionModal()">+ Submit Prayer Intention</button>
        </div>
        <div id="prayer-wall-cards" class="intention-grid">
          ${renderIntentionCardsHTML()}
        </div>
        ${renderRosaryGuideHTML()}
      </div>
    </section>
  `;
}

// Page Renderers
function renderReviewsCards() {
  return state.reviews.map(r => `
    <div class="review-card">
      <div>
        <div class="review-meta-top">
          <div class="stars-row" aria-label="${r.rating} out of 5 stars">${'★'.repeat(r.rating)}${'☆'.repeat(5 - r.rating)}</div>
          <span class="review-date">${r.date}</span>
        </div>
        <div class="review-title">${r.title}</div>
        <p class="review-text">${r.text}</p>
      </div>
      <div class="review-author">
        <span class="avatar-circle ${r.avatarClass}">${r.initials}</span>
        <div>
          <div class="author-name">${r.author}</div>
          ${r.email ? `<div style="font-size:12.5px; color:var(--slate-text);">(${r.email})</div>` : ''}
        </div>
      </div>
    </div>
  `).join('');
}

function renderHomePage() {
  const topThreeEvents = UPCOMING_EVENTS.slice(0, 3);
  return `
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content">
        <span class="section-tag light">WELCOME</span>
        <h1>April-Marie’s Traveling Mary</h1>
        <p class="hero-subtitle">a family-owned Catholic organization dedicated to fostering spiritual growth through pilgrimages.</p>
        <div class="hero-cta-group">
          <a href="#/events-and-pilgrimages" class="btn btn-white">Explore Pilgrimages</a>
          <a href="#/events-and-pilgrimages" class="btn btn-outline-white">View Events</a>
        </div>
      </div>
    </section>

    <!-- Who We Are Section -->
    <section class="section">
      <div class="container">
        <div class="mission-box">
          <span class="section-tag">WHO WE ARE</span>
          <h2>Our Mission and What We Believe</h2>
          <p>Our mission is simple yet profound: to lead all to Christ through the Blessed Mother, with the aid of the prayers of pure children, as we journey together to sacred places..</p>
          <p>We believe that pilgrimage is more than travel. It is an opportunity to step away from the noise and distractions of everyday life, encounter God in a deeper way, renew our faith, and draw closer to Christ. Through our pilgrimages, we hope to encourage individuals and families to make intentional time for spiritual rejuvenation while cultivating a disciplined life of prayer between journeys</p>
          <a href="#/about" class="btn btn-outline-navy">Read About Us</a>
        </div>
      </div>
    </section>

    <!-- Upcoming Pilgrimages and Events -->
    <section class="section" style="padding-top: 20px;">
      <div class="container">
        <div class="section-header centered">
          <span class="section-tag">UPCOMING</span>
          <h2>Upcoming pilgrimages and events</h2>
          <p>Explore all our upcoming event and register.</p>
        </div>
        <div class="cards-grid-3">
          ${topThreeEvents.map(ev => `
            <article class="event-card">
              <div class="event-card-img-wrap">
                <img src="${ev.image}" alt="${ev.title}" onerror="handleImgError(this, '${ev.title}')">
              </div>
              <div class="event-card-body">
                <div class="event-card-tag">${ev.tag}</div>
                <h3>${ev.title}</h3>
                <a href="#/events-and-pilgrimages" class="btn btn-outline-navy btn-block">View All Events</a>
              </div>
            </article>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Store and Reviews / Featured Store Products -->
    <section class="section">
      <div class="container">
        <div class="section-header centered">
          <span class="section-tag">STORE AND REVIEWS</span>
          <h2>Featured store products and visitor reviews</h2>
        </div>
        <div class="featured-store-split">
          <div class="featured-store-image">
            <img src="https://atm-travels.org/wp-content/uploads/2026/11/WhatsApp-Image-2026-10-30-at-11.41.20-PM-683x1024.jpeg" alt="Featured Handcrafted Store Products" onerror="handleImgError(this, 'Featured Products')">
          </div>
          <div class="featured-store-text">
            <span class="section-tag">FEATURED PRODUCTS</span>
            <h3>Explore Our Featured Products</h3>
            <p>Discover our handcrafted collection of botanical oils, nourishing balms, soothing soaps, and wellness products made with thoughtfully selected ingredients. Each product is created to support your daily self-care routine with warmth, intention, and natural beauty.</p>
            <a href="#/product" class="btn btn-outline-navy">Shop All Products</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Reviews From Pilgrimages -->
    <section class="section section-sky">
      <div class="container">
        <div class="section-header centered">
          <h2>Reviews From Pilgrimages</h2>
        </div>
        <div class="reviews-grid">
          ${renderReviewsCards()}
        </div>
      </div>
    </section>

    ${renderPrayerWallSection()}

    <!-- Share Your Experience -->
    <section class="section">
      <div class="container">
        <div class="share-cta-box">
          <h3>Share your experience</h3>
          <p>Submit your name, rating, and review.</p>
          <a href="#/reviews" class="btn btn-outline-navy">Write a Review</a>
        </div>
      </div>
    </section>
  `;
}

function renderAboutPage() {
  return `
    <!-- About Us Hero & Welcome -->
    <section class="subpage-hero">
      <div class="container">
        <div class="about-split">
          <div>
            <span class="section-tag">ABOUT US</span>
            <h1 style="font-size:clamp(32px, 4vw, 48px); margin-bottom:12px;">Welcome to ATM Travels &amp; Pilgrimages (April-Marie’s Traveling Mary)</h1>
            <h3 style="color:var(--gold-accent); font-weight:600; font-size:20px; margin-bottom:22px;">Leading All to Christ Through the Blessed Mother</h3>
            <p style="margin-bottom:16px;">ATM Travels &amp; Pilgrimages is a family-owned Catholic organization dedicated to fostering spiritual growth and renewal through pilgrimages, retreats, prayer, and family faith formation.</p>
            <p style="margin-bottom:16px;">Our mission is simple yet profound: to lead all to Christ through the Blessed Mother, with the aid of the prayers of pure children, as we journey together to sacred places.</p>
            <p>We believe that pilgrimage is more than travel. It is an opportunity to step away from the noise and distractions of everyday life, encounter God in a deeper way, renew our faith, and draw closer to Christ. Through our pilgrimages, we hope to encourage individuals and families to make intentional time for spiritual rejuvenation while cultivating a disciplined life of prayer between journeys.</p>
          </div>
          <div>
            <img src="https://atm-travels.org/wp-content/uploads/2026/11/element_0-6-819x1024.webp" alt="Sacred Chapel" style="max-height:560px; width:100%; object-fit:cover; box-shadow:var(--shadow-soft);" onerror="handleImgError(this, 'ATM Travels Chapel')">
          </div>
        </div>
      </div>
    </section>

    <!-- Our Love for Children & the Family + Background + More Than a Vacation -->
    <section class="section" style="padding-top:40px;">
      <div class="container">
        <div class="about-sections-stack">

          <!-- Our Love for Children & the Family -->
          <div class="about-content-card">
            <span class="section-tag">FAMILY FAITH FORMATION</span>
            <h2>Our Love for Children &amp; the Family</h2>
            <p>At ATM Travels &amp; Pilgrimages, we believe children have a beautiful and powerful role in the life of the Church. Their innocent and sincere prayers are precious.</p>
            <p>Through April-Marie’s Traveling Mary, we encourage children and families to rediscover the beauty of prayer—both together as a family and individually with God.</p>
            <p>Our desire is to help families pass the Catholic faith from one generation to the next, teaching children not only about their faith, but to live it, love it, and share it.</p>
            <p>A special part of our mission is April-Marie’s Traveling Mary, through which we seek to pass on our rich Catholic faith to the next generation. We encourage families to pray together, children to develop a personal relationship with God, and communities to rediscover the beauty of family and personal prayer. Through the Traveling Mary Mission, we hope to nurture young hearts in the faith and help children understand that they, too, have an important role in bringing others closer to Christ. We pray that through the Blessed Mother, families will grow closer to Christ and that children will discover that they, too, are called to be little missionaries of faith.</p>
          </div>

          <!-- Background -->
          <div class="about-content-card">
            <span class="section-tag">FOUNDATION</span>
            <h2>Background</h2>
            <p>ATM Travels &amp; Pilgrimages was born from our founder’s own transformative experiences of faith, particularly through pilgrimage to Medjugorje and participation in local retreats.</p>
            <p>Originally from Cameroon, West Africa, our founder felt a deep calling from Our Lady to share with others the spiritual graces and experiences that had touched her own life. She recognized that many within her community had limited exposure to Catholic pilgrimage opportunities and wanted to help make these experiences more accessible.</p>
            <p>With this desire in her heart, she began partnering directly with local communities and trusted individuals at pilgrimage destinations to create meaningful, faith-centered, and affordable pilgrimage experiences. What began as a personal experience of God's Grace grew into a mission to bring others on the journey.</p>
          </div>

          <!-- More Than a Vacation -->
          <div class="about-content-card">
            <span class="section-tag">SPIRITUAL ENCOUNTER</span>
            <h2>More Than a Vacation</h2>
            <p>At ATM Travels &amp; Pilgrimages, we believe a pilgrimage is not simply a vacation or a journey to see beautiful places. It is a spiritual encounter.</p>
            <p>It is a time to pray, to listen, to surrender, to heal, to grow, and to allow God to transform our hearts.</p>
            <p>We journey as pilgrims and disciples, seeking to encounter Christ more deeply and to return home renewed and better equipped to live out our call to evangelize.</p>
            <p>We invite you to prayerfully consider joining us on one of our upcoming pilgrimages, retreats, and faith-filled journeys. Whether traveling as an individual, with your family, or with our pilgrimage community, our desire is that every journey leads you closer to Christ.</p>
            <p>May God bless you abundantly, and may Our Lady guide your path, draw you ever closer to her Son, and lead you always to Christ.</p>
            <div class="about-poem-callout">
              <div>Come with an open heart.</div>
              <div>Come ready to pray.</div>
              <div>Come ready to encounter God.</div>
              <div>Your pilgrimage awaits.</div>
            </div>
            <p style="font-weight:500; color:var(--navy-dark);">May God bless you abundantly, and may Our Lady guide your path and always lead you to her Son, Jesus.</p>
            <div style="margin-top:22px;">
              <a href="#/events-and-pilgrimages" class="btn btn-navy">View Upcoming Pilgrimages</a>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- COMMUNITY OUTREACH -->
    <section class="section section-sky">
      <div class="container">
        <div class="section-header centered">
          <span class="section-tag">MINISTRY &amp; MISSION</span>
          <h2>COMMUNITY OUTREACH</h2>
        </div>

        <div class="about-ministry-grid">
          <!-- Home Based Chapels -->
          <div class="about-ministry-card reveal-on-scroll">
            <div class="ministry-bullet-badge">• Home Based Chapels</div>
            <h3>Home Based Chapels</h3>
            <p>Our faith is not meant to be lived only within the walls of a church. We encourage families to create a dedicated sacred space within their homes—a place set apart for daily prayer, reflection, and gathering as a family.</p>
            <p>This space does not need to be large or extravagant. What matters most is that it is intentionally set aside for the Lord and reflects a sincere commitment to meeting with Him each day. We offer guidance and assistance to families who desire to establish a home prayer space or home chapel, with care for Catholic tradition and reverence for the sacred.</p>
            <p>At its heart, a home chapel requires two things: a designated place for prayer and, most importantly, a willing heart that desires to spend time with the Lord each day.</p>
            <p>We believe that when families intentionally make room for God in their homes, they create an environment where prayer can flourish, faith can be nurtured, and children can learn to recognize God's presence in their everyday lives.</p>
            <p style="font-weight:600; color:var(--navy-dark);">Your home can become a place of prayer. Your family can become a little domestic church.</p>
            <p>If you desire assistance in creating your own sacred space, we are here to serve you.</p>
            <div style="margin-top:18px;">
              <button type="button" class="btn btn-outline-navy btn-sm" onclick="openMinistryModal('Home Based Chapels Guidance')">Request Home Chapel Guidance</button>
            </div>
          </div>

          <!-- THE TRAVELING STATUES -->
          <div class="about-ministry-card reveal-on-scroll">
            <div class="ministry-bullet-badge">• THE TRAVELING STATUES</div>
            <h3>THE TRAVELING STATUES</h3>
            <div style="font-weight:600; color:var(--gold-accent); margin-bottom:14px;">Bringing Our Lady Into the Home, Bringing Families Closer to Christ</div>
            <p>April-Marie’s Traveling Mary (ATM) is a Marian outreach ministry dedicated to promoting devotion to the Blessed Virgin Mary and, through Her, drawing souls closer to her Son, Jesus Christ.</p>
            <p>Through our Traveling Statues, statues of Our Lady visit families and remain in their homes for a designated period of time. During this special time, families are encouraged to intentionally set aside time each day for family prayer, the Holy Rosary, and other Marian devotions.</p>
            <p>The purpose is simple: to create a home where the family pauses, prays, and draws closer to God together. We hope that each visit of Our Lady will inspire families to make prayer a more consistent part of their daily lives and to continue these practices even after the statue moves on to its next home.</p>

            <div class="locations-box">
              <h4>Would You Like to Host Our Lady?</h4>
              <p style="font-size:14.5px; margin-bottom:10px;">Click your state or country below to request a Traveling Statue visit in your home:</p>
              <div class="locations-pills">
                ${['Georgia', 'Maryland', 'Delaware', 'North Carolina', 'Texas', 'Canada', 'Arizona', 'Oklahoma', 'Cameroon', 'Nigeria'].map(loc => `
                  <button type="button" class="location-chip" onclick="openStatueModal('${loc}')">✦ ${loc}</button>
                `).join('')}
              </div>
            </div>

            <p>If you would like to welcome a Traveling Statue into your home, please contact the State or Regional Ambassador serving your area.</p>
            <p>If your location is not currently represented and you feel called to help bring this ministry to families in your area, we invite you to prayerfully consider becoming a Traveling Mary Ambassador.</p>
            <p>Our desire is to see families united in prayer, children growing in love for Our Lady and Jesus, and homes becoming places where faith is lived every day. We pray that through the intercession of the Blessed Mother, countless families will rediscover the beauty of the Holy Rosary, grow in devotion, and be drawn ever closer to Christ.</p>

            <div class="about-poem-callout" style="margin-top:16px;">
              <div>Our Lady goes from home to home.</div>
              <div>Families gather.</div>
              <div>Children pray.</div>
              <div>Hearts are transformed.</div>
              <div>And all are led to Christ.</div>
            </div>
            <div style="margin-top:18px; display:flex; flex-wrap:wrap; gap:10px;">
              <button type="button" class="btn btn-navy btn-sm" onclick="openStatueModal('Georgia')">Host a Traveling Statue</button>
              <button type="button" class="btn btn-outline-navy btn-sm" onclick="openStatueModal('Other / Become an Ambassador')">Become an Ambassador</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CHILDREN'S MINISTRY -->
    <section class="section">
      <div class="container">
        <div class="section-header centered">
          <span class="section-tag">YOUNG DISCIPLES</span>
          <h2>CHILDREN'S MINISTRY</h2>
        </div>

        <div class="about-ministry-grid">
          <!-- DAILY ROSARY -->
          <div class="about-ministry-card reveal-on-scroll">
            <div class="ministry-bullet-badge">• DAILY ROSARY</div>
            <h3>DAILY ROSARY</h3>
            <p>As a Marian group, we gather daily to pray the Flame of Love Rosary, a devotion that our children have grown to cherish and embrace.</p>
            <p>It is especially beautiful to see our children take an active role in leading the Rosary. Through prayer, they are learning that they, too, have a mission—to know Christ, love Him, and help lead others to Him through the intercession of His Blessed Mother. At times, our prayer gatherings also incorporate Scripture readings and reflection, allowing the children to encounter God's Word alongside their Marian devotion.</p>
            <p>Throughout the year, our ministry calendar provides opportunities for the children to grow beyond the Rosary through teachings on the lives of the Saints, Confession, Eucharistic Adoration, consecrations and other aspects of our Catholic faith that help them grow in holiness and deepen their relationship with Christ.</p>
            <p>Our desire is to nurture children who not only know their faith, but love it, live it, and confidently share it with others. We warmly welcome families and anyone who feels called to join us in prayer. Come pray the Rosary with us. Bring your children.</p>
            <p>We believe that when we teach children to pray, we are helping build a foundation of faith that can last a lifetime.</p>

            <blockquote class="scripture-quote">
              “Let the little children come to me, and do not hinder them, for the kingdom of heaven belongs to such as these.”
              <cite>— Matthew 19:14</cite>
            </blockquote>

            <p style="font-weight:500; color:var(--navy-dark);">Through the prayers of our children, may many souls be drawn closer to Christ through the heart of His Blessed Mother.</p>
            <div style="margin-top:18px;">
              <button type="button" class="btn btn-navy btn-sm" onclick="openMinistryModal('Daily Rosary — 8:00 PM Zoom')">Join Nightly 8:00 PM Zoom Rosary</button>
            </div>
          </div>

          <!-- SEVEN CHILDREN -->
          <div class="about-ministry-card reveal-on-scroll">
            <div class="ministry-bullet-badge">• SEVEN CHILDREN</div>
            <h3>SEVEN CHILDREN</h3>
            <p>Seven Children is an initiative within the ATM family, inspired by two pivotal events. During adoration, the founder experienced a profound call to encourage more people—especially children—to adore the Lord in the Blessed Sacrament. This call was reinforced by the Lord’s expressed longing for companionship: “because I am lonely.” In response, she established an adoration group specifically for children, recognizing that their pure prayers touch the Lord’s heart in a profound way.</p>
            <p>Additionally, drawing on her experience with the Seven Sisters Apostolate, she adapted its model for this new initiative. The program invites mothers to bring a child to adoration for 30 minutes on an assigned day each week. During this time, the child prays for priests, while the mother prays for the child’s vocation. The concept quickly resonated with many mothers, leading to the establishment of Seven Children. With the guidance of the founder’s spiritual director and the approval of the parish priest, Fr. Henry, the initiative was launched.</p>
            <p>Inspired by the life of Saint Carlo Acutis, who possessed a deep love for the Eucharist and serves as an exemplary role model for children, we hope to plant the beautiful seed of Eucharistic adoration in the hearts of our young people while praying for an increase in vocations among them.</p>
            <p style="font-weight:500; color:var(--navy-dark);">Please contact us if you feel called to join this inspiring mission. We look forward to welcoming you.</p>
            <div style="margin-top:18px;">
              <button type="button" class="btn btn-outline-navy btn-sm" onclick="openMinistryModal('Seven Children Weekly Adoration')">Join Seven Children Ministry</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Story -->
    <section class="section" style="padding-top:10px;">
      <div class="container">
        <div class="about-story-banner reveal-on-scroll">
          <span class="section-tag light">THE ORIGIN OF TRAVELING MARY</span>
          <h2 style="color:var(--white); margin-bottom:22px;">Our Story</h2>
          <p>Sometime in late 2019, I repeatedly heard the words “Traveling Mary.” On February 27, 2020 I felt strongly that Our Lady was calling us to begin a Traveling Mary Mission so she could visit homes, be known, and inspire greater devotion. I also felt called to begin it in my daughter, April-Marie’s name. I took this request to prayer and shared it with a friend, who prayed about it as well.</p>
          <p>On February 29th, 2020, while in adoration, I felt Our Lady asking us to begin a ministry called “April Marie’s Traveling Mary” and to complete it by the feast of the Annunciation, on April-Marie’s seventh birthday. I asked Our Lady to lead me to a suitable traveling statue and sensed she wanted to travel under the title “Our Lady of Grace,” after our home chapel.</p>
          <p>My brother, Father Pontianus, was visiting from Italy, so I shared this with him. He encouraged me to obey. On March 6, 2020, I found a broken statue of Our Lady of Grace in the most unlikely place.</p>
          <p>On March 8, 2020 the statue was blessed by Fr Maurice and Fr Pontianus and began to travel from home to home. Less than two weeks later, the COVID-19 pandemic hit. Despite social distancing and fear, many families welcomed the Blessed Mother, and she continues to travel today.</p>
          <p style="margin-bottom:0;">With God’s and the Blessed Mother’s help, this ministry quickly spread to several states and countries, including Texas, Delaware, Oklahoma, Maryland, Arizona, North Carolina, Canada, Cameroon, and Nigeria. Many families have shared testimonials. ATM Travels and Pilgrimages grew from a desire to visit Medjugorje, to simple traveling statues and pilgrimages, all inspired by the Blessed Mother.</p>
        </div>
      </div>
    </section>

    ${renderPrayerWallSection()}
  `;
}

// Interactive Sacred Destinations Explorer & Checklist Helpers
function setDestTab(key) {
  state.activeDestTab = key;
  const explorerEl = document.getElementById('dest-explorer-box');
  if (explorerEl) {
    explorerEl.outerHTML = renderDestinationsExplorer();
  } else {
    renderApp();
  }
}
window.setDestTab = setDestTab;

function renderDestinationsExplorer() {
  const dest = SACRED_DESTINATIONS[state.activeDestTab] || SACRED_DESTINATIONS.medjugorje;
  const keys = [
    { id: 'medjugorje', label: '✦ Medjugorje' },
    { id: 'italy', label: '✦ Italy (Rome, Assisi & Padre Pio)' },
    { id: 'croatia', label: '✦ Croatia & Adriatic' },
    { id: 'rosamystica', label: '✦ Rosa Mystica, NY' }
  ];
  return `
    <div id="dest-explorer-box" class="dest-explorer-card">
      <span class="section-tag" style="margin-bottom:4px;">SACRED DESTINATIONS EXPLORER</span>
      <h2 style="font-size:28px; margin-bottom:14px;">Where We Walk &amp; Pray Together</h2>
      <div class="dest-tabs" role="tablist" aria-label="Sacred Destinations">
        ${keys.map(k => `
          <button type="button" class="dest-tab-btn ${state.activeDestTab === k.id ? 'active' : ''}" onclick="setDestTab('${k.id}')">${k.label}</button>
        `).join('')}
      </div>
      <div>
        <div style="font-size:13px; text-transform:uppercase; letter-spacing:0.08em; color:var(--gold-accent); font-weight:700; margin-bottom:4px;">${dest.tagline}</div>
        <h3 style="font-size:22px; margin-bottom:8px;">${dest.name}</h3>
        <p style="font-size:15px; color:var(--slate-text); max-width:820px; margin-bottom:18px;">${dest.summary}</p>
        <div class="dest-landmarks-grid">
          ${dest.landmarks.map(lm => `
            <div class="dest-landmark-item">
              <h4>${lm.title}</h4>
              <p>${lm.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

function toggleChecklistItem(idx) {
  const pos = state.checklistDone.indexOf(idx);
  if (pos >= 0) {
    state.checklistDone.splice(pos, 1);
  } else {
    state.checklistDone.push(idx);
  }
  try {
    localStorage.setItem('atm_checklist_v1', JSON.stringify(state.checklistDone));
  } catch (e) {}
  const box = document.getElementById('checklist-interactive-box');
  if (box) {
    box.outerHTML = renderChecklistSection();
  }
}
window.toggleChecklistItem = toggleChecklistItem;

function renderChecklistSection() {
  const total = PILGRIMAGE_CHECKLIST_ITEMS.length;
  const doneCount = state.checklistDone.length;
  const pct = Math.round((doneCount / total) * 100);
  return `
    <div id="checklist-interactive-box" class="checklist-card">
      <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:16px;">
        <div>
          <span class="section-tag" style="margin-bottom:4px;">SPIRITUAL &amp; PRACTICAL PREPARATION</span>
          <h2 style="font-size:26px; margin-bottom:6px;">Interactive Family Pilgrimage Checklist</h2>
          <p style="font-size:14.5px; color:var(--slate-text); margin:0;">Check off each step as your family prepares heart, mind, and luggage. Your progress is automatically saved on your device.</p>
        </div>
        <div style="display:flex; gap:10px; align-items:center;">
          <span style="font-weight:700; color:var(--navy-dark); font-size:15px;">${doneCount} / ${total} Ready (${pct}%)</span>
          <button type="button" class="btn btn-outline-navy btn-sm" onclick="window.print()">Print / Save PDF</button>
        </div>
      </div>
      <div class="progress-bar-track" aria-label="Checklist completion ${pct}%">
        <div class="progress-bar-fill" style="width:${pct}%;"></div>
      </div>
      <div class="checklist-grid">
        ${PILGRIMAGE_CHECKLIST_ITEMS.map((text, idx) => {
          const isChecked = state.checklistDone.includes(idx);
          return `
            <label class="checklist-item ${isChecked ? 'checked' : ''}" onclick="event.preventDefault(); toggleChecklistItem(${idx})">
              <input type="checkbox" ${isChecked ? 'checked' : ''} readonly />
              <span style="font-size:14.5px;">${text}</span>
            </label>
          `;
        }).join('')}
      </div>
    </div>
  `;
}

// Interactive Pilgrimage Calculator & Filter Helpers
const CALCULATOR_PLANS = {
  italy: {
    name: 'Pilgrimage to Italy (Walk with the Saints)',
    deposit: 500,
    depositDue: 'Dec 30, 2026',
    doubleBalance: 1410,
    singleBalance: 1910,
    balanceDue: 'May 17, 2027',
    stripeDepositUrl: 'https://buy.stripe.com/9B64gz2Ro3CV6Z00KwfAc0g'
  },
  medjugorje: {
    name: 'Children & Family Pilgrimage to Italy, Croatia & Medjugorje',
    deposit: 500,
    depositDue: 'Jan 31, 2027',
    doubleBalance: 850,
    singleBalance: 975,
    balanceDue: 'May 17, 2027',
    stripeDepositUrl: 'https://buy.stripe.com/fZubJ1fEaehzbfgdxifAc0j'
  },
  combined: {
    name: 'Combined Pilgrimage 2027',
    deposit: 500,
    depositDue: 'Mar 30, 2027',
    doubleBalance: 1500,
    singleBalance: 1550,
    balanceDue: 'Jul 25, 2027',
    stripeDepositUrl: 'https://buy.stripe.com/dRm14neA68Xfcjk78UfAc0m'
  },
  mothers: {
    name: 'Mother’s Retreat 2027',
    deposit: 100,
    depositDue: 'Mar 30, 2027',
    doubleBalance: 400,
    singleBalance: 490,
    balanceDue: 'Jul 25, 2027',
    stripeDepositUrl: 'https://buy.stripe.com/cNi3cv3Vsb5n4QS1OAfAc0t'
  }
};

function updateCalcState() {
  const tripSel = document.getElementById('calc-trip-select');
  const roomSel = document.getElementById('calc-room-select');
  const travInput = document.getElementById('calc-travelers-input');
  if (tripSel) state.calcTrip = tripSel.value;
  if (roomSel) state.calcRoom = roomSel.value;
  if (travInput) state.calcTravelers = Math.max(1, Math.min(12, parseInt(travInput.value, 10) || 1));

  const plan = CALCULATOR_PLANS[state.calcTrip] || CALCULATOR_PLANS.italy;
  const count = state.calcTravelers;
  const perPersonDeposit = plan.deposit;
  const perPersonBalance = state.calcRoom === 'single' ? plan.singleBalance : plan.doubleBalance;
  const totalDeposit = perPersonDeposit * count;
  const totalBalance = perPersonBalance * count;
  const grandTotal = totalDeposit + totalBalance;

  const summaryEl = document.getElementById('calc-Dynamic-Summary');
  if (summaryEl) {
    summaryEl.innerHTML = `
      <div style="font-size:12px; text-transform:uppercase; letter-spacing:0.08em; color:var(--slate-text); margin-bottom:4px;">ESTIMATE FOR ${count} PILGRIM${count > 1 ? 'S' : ''} (${state.calcRoom.toUpperCase()})</div>
      <div style="font-size:22px; font-weight:800; color:var(--navy-dark); margin-bottom:4px;">$${grandTotal.toLocaleString()} Total</div>
      <div style="font-size:13px; color:var(--slate-text); margin-bottom:10px;">
        Deposit Due (${plan.depositDue}): <strong>$${totalDeposit.toLocaleString()}</strong> · Balance (${plan.balanceDue}): <strong>$${totalBalance.toLocaleString()}</strong>
      </div>
      <a href="${plan.stripeDepositUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-navy btn-sm btn-block">Pay $${perPersonDeposit} Deposit on Stripe &rarr;</a>
    `;
  }
}
window.updateCalcState = updateCalcState;

function setEventsFilter(filter) {
  state.eventsFilter = filter;
  renderApp();
}
window.setEventsFilter = setEventsFilter;

function toggleFaqItem(idx) {
  const item = document.getElementById(`faq-item-${idx}`);
  if (item) item.classList.toggle('open');
}
window.toggleFaqItem = toggleFaqItem;

function renderFaqSection() {
  return `
    <div style="margin-top:64px;">
      <div class="section-header centered">
        <span class="section-tag">FREQUENTLY ASKED QUESTIONS</span>
        <h2>Pilgrimage &amp; Ministry FAQ</h2>
        <p>Click any question below for details on traveling with children, payment installments, and hosting Our Lady.</p>
      </div>
      <div style="max-width:860px; margin:0 auto;">
        ${PILGRIMAGE_FAQS.map((item, idx) => `
          <div id="faq-item-${idx}" class="faq-item ${idx === 0 ? 'open' : ''}">
            <button type="button" class="faq-question" onclick="toggleFaqItem(${idx})">
              <span>${item.q}</span>
              <span style="color:var(--gold-accent); font-size:20px; font-weight:700;">+</span>
            </button>
            <div class="faq-answer">${item.a}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderEventsPage() {
  const showFamily = state.eventsFilter === 'all' || state.eventsFilter === 'family';
  const showRetreat = state.eventsFilter === 'all' || state.eventsFilter === 'retreat';
  const plan = CALCULATOR_PLANS[state.calcTrip] || CALCULATOR_PLANS.italy;
  const count = state.calcTravelers;
  const perPersonDeposit = plan.deposit;
  const perPersonBalance = state.calcRoom === 'single' ? plan.singleBalance : plan.doubleBalance;
  const totalDeposit = perPersonDeposit * count;
  const totalBalance = perPersonBalance * count;
  const grandTotal = totalDeposit + totalBalance;

  return `
    <!-- Events & Pilgrimages Hero Banner (.elementor-element-85c350e) -->
    <section class="events-hero-banner">
      <div class="container">
        <h1>Events &amp; Pilgrimages</h1>
      </div>
    </section>

    <section class="section" style="padding-top: 44px;">
      <div class="container">

        <!-- Live Countdown Banner -->
        <div class="countdown-banner">
          <div>
            <span class="section-tag light" style="margin-bottom:4px;">UPCOMING REGISTRATION DEADLINE</span>
            <h3 style="color:var(--white); font-size:22px; margin-bottom:4px;">2027 Italy, Croatia &amp; Medjugorje Pilgrimages</h3>
            <p style="color:rgba(255,255,255,0.82); font-size:14px; margin:0;">Reserve your family's spot before the initial deposit window closes. Click any flyer below to enlarge.</p>
          </div>
          <div class="countdown-timers" id="live-countdown-box">
            <div class="countdown-unit"><span class="countdown-num" id="cd-days">49</span><span class="countdown-label">Days</span></div>
            <div class="countdown-unit"><span class="countdown-num" id="cd-hours">08</span><span class="countdown-label">Hours</span></div>
            <div class="countdown-unit"><span class="countdown-num" id="cd-mins">45</span><span class="countdown-label">Mins</span></div>
            <div class="countdown-unit"><span class="countdown-num" id="cd-secs">12</span><span class="countdown-label">Secs</span></div>
          </div>
        </div>

        <!-- Interactive Pilgrimage Cost & Installment Calculator -->
        <div class="calc-card">
          <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px; margin-bottom:18px;">
            <div>
              <span class="section-tag" style="margin-bottom:4px;">INTERACTIVE PLANNER</span>
              <h3 style="font-size:22px; margin:0;">Pilgrimage Installment &amp; Family Cost Calculator</h3>
            </div>
            <span style="font-size:13.5px; color:var(--slate-text);">Estimate your deposit &amp; 2027 balance in seconds</span>
          </div>
          <div class="calc-grid">
            <div>
              <label class="form-label" for="calc-trip-select">1. Choose Pilgrimage or Retreat</label>
              <select id="calc-trip-select" class="form-control" onchange="updateCalcState()">
                <option value="italy" ${state.calcTrip === 'italy' ? 'selected' : ''}>Pilgrimage to Italy ($1,910)</option>
                <option value="medjugorje" ${state.calcTrip === 'medjugorje' ? 'selected' : ''}>Italy, Croatia &amp; Medjugorje ($1,350–$1,475)</option>
                <option value="combined" ${state.calcTrip === 'combined' ? 'selected' : ''}>Combined Pilgrimage ($2,000–$2,050)</option>
                <option value="mothers" ${state.calcTrip === 'mothers' ? 'selected' : ''}>Mother's Retreat 2027 ($500–$590)</option>
              </select>
            </div>
            <div>
              <label class="form-label" for="calc-room-select">2. Room Preference</label>
              <select id="calc-room-select" class="form-control" onchange="updateCalcState()">
                <option value="double" ${state.calcRoom === 'double' ? 'selected' : ''}>Double Occupancy Room</option>
                <option value="single" ${state.calcRoom === 'single' ? 'selected' : ''}>Single Room Option</option>
              </select>
            </div>
            <div>
              <label class="form-label" for="calc-travelers-input">3. Pilgrims</label>
              <input id="calc-travelers-input" type="number" min="1" max="12" value="${state.calcTravelers}" class="form-control" oninput="updateCalcState()" />
            </div>
            <div id="calc-Dynamic-Summary" class="calc-summary-box">
              <div style="font-size:12px; text-transform:uppercase; letter-spacing:0.08em; color:var(--slate-text); margin-bottom:4px;">ESTIMATE FOR ${count} PILGRIM${count > 1 ? 'S' : ''} (${state.calcRoom.toUpperCase()})</div>
              <div style="font-size:22px; font-weight:800; color:var(--navy-dark); margin-bottom:4px;">$${grandTotal.toLocaleString()} Total</div>
              <div style="font-size:13px; color:var(--slate-text); margin-bottom:10px;">
                Deposit Due (${plan.depositDue}): <strong>$${totalDeposit.toLocaleString()}</strong> · Balance (${plan.balanceDue}): <strong>$${totalBalance.toLocaleString()}</strong>
              </div>
              <a href="${plan.stripeDepositUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-navy btn-sm btn-block">Pay $${perPersonDeposit} Deposit on Stripe &rarr;</a>
            </div>
          </div>
        </div>

        <!-- Category Filter Bar -->
        <div class="filter-bar">
          <div class="filter-pills" role="tablist" aria-label="Filter Pilgrimages">
            <button type="button" class="filter-pill ${state.eventsFilter === 'all' ? 'active' : ''}" onclick="setEventsFilter('all')">All Journeys (4)</button>
            <button type="button" class="filter-pill ${state.eventsFilter === 'family' ? 'active' : ''}" onclick="setEventsFilter('family')">Family &amp; International Pilgrimages (3)</button>
            <button type="button" class="filter-pill ${state.eventsFilter === 'retreat' ? 'active' : ''}" onclick="setEventsFilter('retreat')">Mother’s &amp; Spiritual Retreats (1)</button>
          </div>
          <div style="font-size:13.5px; color:var(--slate-text);">🔍 Tip: Click any pilgrimage flyer image to view fullscreen</div>
        </div>

        ${showFamily ? `
        <!-- Section 1: Pilgrimage to Italy (17eb8491) -->
        <div class="trip-section-header">
          <div>
            <span class="trip-badge-num">Journey 01 · Family &amp; Saints Pilgrimage</span>
            <h2 style="font-size:24px; margin:0;">Pilgrimage to Italy — “Walk with the Saints”</h2>
          </div>
          <div class="trip-meta-pills">
            <span class="trip-meta-pill">📍 Rome · Assisi · San Giovanni Rotondo</span>
            <span class="trip-meta-pill">💳 Deposit Due: Dec 30, 2026</span>
          </div>
        </div>
        <div class="events-split-row">
          <div class="events-flyer-col">
            <img
              src="https://atm-travels.org/wp-content/uploads/2026/11/Gemini_Generated_Image_kia46pkia46pkia4-768x1095.jpg"
              alt="Pilgrimage ATM travels"
              loading="lazy"
              decoding="async"
              style="cursor:zoom-in;"
              onclick="openLightbox(this.src, 'Pilgrimage to Italy — Walk with the Saints')"
              onerror="handleImgError(this, 'Pilgrimage to Italy')"
            />
          </div>
          <div class="events-installment-stack">
            <div class="events-installment-card">
              <h2>Registration $500</h2>
              <p>A nonrefundable deposit of $500 is required on or before December 30, 2026, to secure your spot on the pilgrimage. This payment will be credited as part of the total fee of $1,910.</p>
              <a class="btn-amber" href="https://buy.stripe.com/9B64gz2Ro3CV6Z00KwfAc0g" target="_blank" rel="noopener noreferrer">Registration</a>
            </div>

            <div class="events-installment-card">
              <h2>Second Installment($1410)</h2>
              <p>The remaining balance of $1,410 must be paid by May 17th, 2027.</p>
              <a class="btn-sky-blue" href="https://buy.stripe.com/8x2aEXajQ4GZ5UW78UfAc0i" target="_blank" rel="noopener noreferrer">Second installment</a>
            </div>

            <div class="events-installment-card">
              <h2>Single Room second installment ($1910)</h2>
              <p>The remaining balance for single room occupancy must be paid on or before May 17th, 2027.</p>
              <a class="btn-sky-blue" href="https://buy.stripe.com/cNi3cveA6c9r6Z0fFqfAc0h" target="_blank" rel="noopener noreferrer">Full Installment</a>
            </div>

            <div class="events-installment-card">
              <p>To help us better prepare for our upcoming pilgrimage, Please click on the link below to complete the form. The information you provide will help us plan more effectively and ensure that we are prepared to meet everyone’s needs .”</p>
              <a class="btn-amber" href="https://docs.google.com/forms/d/e/1FAIpQLSet2Spg7BXRoAyNu9uKfYPFUfCqUXcZKKc1BPCLHRRM_VgT9A/viewform?usp=sharing&ouid=113846059753696108974" target="_blank" rel="noopener noreferrer">Registration Form</a>
            </div>
          </div>
        </div>

        <!-- Section 2: Children and Family Pilgrimage to Italy, Croatia & Medjugorje (76c84df1) -->
        <div class="trip-section-header">
          <div>
            <span class="trip-badge-num">Journey 02 · Marian &amp; Family Pilgrimage</span>
            <h2 style="font-size:24px; margin:0;">Children &amp; Family Pilgrimage to Medjugorje</h2>
          </div>
          <div class="trip-meta-pills">
            <span class="trip-meta-pill">📍 Medjugorje · Apparition Hill · St. James</span>
            <span class="trip-meta-pill">💳 Deposit Due: Jan 31, 2027</span>
          </div>
        </div>
        <div class="events-split-row">
          <div class="events-flyer-col">
            <img
              src="https://atm-travels.org/wp-content/uploads/2026/11/WhatsApp-Image-2026-08-28-at-9.58.14-PM-768x960.jpeg"
              alt="Children and Family Pilgrimage to Italy, Croatia and Medjugorje"
              loading="lazy"
              decoding="async"
              style="cursor:zoom-in;"
              onclick="openLightbox(this.src, 'Children and Family Pilgrimage to Italy, Croatia and Medjugorje')"
              onerror="handleImgError(this, 'Italy, Croatia & Medjugorje')"
            />
          </div>
          <div class="events-installment-stack">
            <div class="events-installment-card">
              <h2>Registration $500</h2>
              <p>A nonrefundable deposit of $500 is required on or before January 31, 2027, to secure your spot on the pilgrimage. This payment will be credited as part of the total fee of $1350 + $39.45 fees for Double room and $1475 + $43.08 fees.</p>
              <a class="btn-amber" href="https://buy.stripe.com/fZubJ1fEaehzbfgdxifAc0j" target="_blank" rel="noopener noreferrer">Registration</a>
            </div>

            <div class="events-installment-card">
              <h2>Double Room Second Installment($850)</h2>
              <p>The remaining balance of $850 for double room must be paid on or before May 17th, 2027.</p>
              <a class="btn-sky-blue" href="https://buy.stripe.com/eVq4gzajQddv8341OAfAc0r" target="_blank" rel="noopener noreferrer">Second installment</a>
            </div>

            <div class="events-installment-card">
              <h2>Single Room second installment ($975)</h2>
              <p>The remaining balance of $975 for single room must be paid on or before May 17th, 2027.</p>
              <a class="btn-sky-blue" href="https://buy.stripe.com/5kQ4gz63AflDgzActefAc0q" target="_blank" rel="noopener noreferrer">Single Room second installment</a>
            </div>

            <div class="events-installment-card">
              <p>To help us better prepare for our upcoming pilgrimage, Please click on the link below to complete the form. The information you provide will help us plan more effectively and ensure that we are prepared to meet everyone’s needs .”</p>
              <a class="btn-amber" href="https://docs.google.com/forms/d/e/1FAIpQLSdLBO75DbFl0sI2LKsL_jZlua3TywtCiUieTofkY5o5VDM35A/viewform?usp=sharing&ouid=113846059753696108974" target="_blank" rel="noopener noreferrer">Registration Form</a>
            </div>
          </div>
        </div>

        <!-- Section 3: Combined Pilgrimage (32a55dcc) -->
        <div class="trip-section-header">
          <div>
            <span class="trip-badge-num">Journey 03 · Combined European Pilgrimage</span>
            <h2 style="font-size:24px; margin:0;">Combined Pilgrimage (Italy, Croatia &amp; Medjugorje)</h2>
          </div>
          <div class="trip-meta-pills">
            <span class="trip-meta-pill">📍 Italy · Croatia · Medjugorje</span>
            <span class="trip-meta-pill">💳 Deposit Due: Mar 30, 2027</span>
          </div>
        </div>
        <div class="events-split-row">
          <div class="events-flyer-col">
            <img
              src="https://atm-travels.org/wp-content/uploads/2026/11/combine-pilgaimage-2-copy-2-768x1086.jpg"
              alt="Combined Pilgrimage"
              loading="lazy"
              decoding="async"
              style="cursor:zoom-in;"
              onclick="openLightbox(this.src, 'Combined Pilgrimage 2027')"
              onerror="handleImgError(this, 'Combined Pilgrimage')"
            />
          </div>
          <div class="events-installment-stack">
            <div class="events-installment-card">
              <h2>Registration $500</h2>
              <p>$500 registration required by March 30th, 2027</p>
              <a class="btn-amber" href="https://buy.stripe.com/dRm14neA68Xfcjk78UfAc0m" target="_blank" rel="noopener noreferrer">Registration</a>
            </div>

            <div class="events-installment-card">
              <h2>Second installment ($1500)</h2>
              <p>Second installment of $1500 must be completed by July 25th, 2027 (refundable until July 1st, 2027 (Less $50 administrative fee).</p>
              <a class="btn-sky-blue" href="https://buy.stripe.com/28EbJ12Ro0qJers1OAfAc0n" target="_blank" rel="noopener noreferrer">Second installment</a>
            </div>

            <div class="events-installment-card">
              <h2>Third Installment ($1550)</h2>
              <p>There is also the option to pay in full (refundable until July 1st, 2027 (Less $50 administrative fee.)</p>
              <a class="btn-sky-blue" href="https://buy.stripe.com/28E28r9fMflDabcctefAc0s" target="_blank" rel="noopener noreferrer">Third Installment</a>
            </div>

            <div class="events-installment-card">
              <p>To help us better prepare for our upcoming pilgrimage, Please click on the link below to complete the form. The information you provide will help us plan more effectively and ensure that we are prepared to meet everyone’s needs .”</p>
              <a class="btn-amber" href="https://docs.google.com/forms/d/e/1FAIpQLSdLBO75DbFl0sI2LKsL_jZlua3TywtCiUieTofkY5o5VDM35A/viewform?usp=sharing&ouid=113846059753696108974" target="_blank" rel="noopener noreferrer">Registration Form</a>
            </div>
          </div>
        </div>
        ` : ''}

        ${showRetreat ? `
        <!-- Section 4: Mother's Retreat 2027 (83ae382) -->
        <div class="trip-section-header">
          <div>
            <span class="trip-badge-num">Journey 04 · Annual Mothers Spiritual Retreat</span>
            <h2 style="font-size:24px; margin:0;">Mother’s Retreat 2027 — “She is Our Mother”</h2>
          </div>
          <div class="trip-meta-pills">
            <span class="trip-meta-pill">📍 Rosa Mystica House of Prayer, NY</span>
            <span class="trip-meta-pill">💳 Deposit Due: Mar 30, 2027</span>
          </div>
        </div>
        <div class="events-split-row" style="margin-bottom: 0;">
          <div class="events-flyer-col">
            <img
              src="https://atm-travels.org/wp-content/uploads/2026/11/WhatsApp-Image-2026-10-05-at-2.42.40-AM-768x994.jpeg"
              alt="Mother's Retreat 2027"
              loading="lazy"
              decoding="async"
              style="cursor:zoom-in;"
              onclick="openLightbox(this.src, 'Mother’s Retreat 2027')"
              onerror="handleImgError(this, 'Mothers Retreat 2027')"
            />
          </div>
          <div class="events-installment-stack">
            <div class="events-installment-card">
              <h2>Registration $100</h2>
              <p>$100 registration required by March 30th, 2027</p>
              <a class="btn-amber" href="https://buy.stripe.com/cNi3cv3Vsb5n4QS1OAfAc0t" target="_blank" rel="noopener noreferrer">Registration</a>
            </div>

            <div class="events-installment-card">
              <h2>Second installment ($490)</h2>
              <p>Second installment of $490 must be completed by July 25th, 2027 (refundable until July 1st, 2027 (Less $50 administrative fee).</p>
              <a class="btn-sky-blue" href="https://buy.stripe.com/6oUbJ1fEa1uN4QS50MfAc0u" target="_blank" rel="noopener noreferrer">Second installment</a>
            </div>

            <div class="events-installment-card">
              <h2>Full Payment ($500)</h2>
              <p>There is also the option to pay in full (refundable until July 1st, 2027 (Less $50 administrative fee.)</p>
              <a class="btn-sky-blue" href="https://buy.stripe.com/cNi14n77E1uNfvw8cYfAc0v" target="_blank" rel="noopener noreferrer">Full Installment</a>
            </div>

            <div class="events-installment-card">
              <p>To help us better prepare for our upcoming pilgrimage, Please click on the link below to complete the form. The information you provide will help us plan more effectively and ensure that we are prepared to meet everyone’s needs .”</p>
              <a class="btn-amber" href="https://docs.google.com/forms/d/e/1FAIpQLScxSrYZeccpLGgPar1Yo3-VuD-K0eQDTdecQxhM6z8SCzfymg/viewform?usp=sharing&ouid=113846059753696108974" target="_blank" rel="noopener noreferrer">Registration Form</a>
            </div>
          </div>
        </div>
        ` : ''}

        ${renderDestinationsExplorer()}
        ${renderChecklistSection()}
        ${renderFaqSection()}

      </div>
    </section>
  `;
}

function renderGalleryPage() {
  return `
    <section class="subpage-hero">
      <div class="container">
        <span class="section-tag">PHOTOGRAPHIC ARCHIVE</span>
        <h1 style="margin-bottom:16px;">Past Events</h1>
        <p style="max-width:720px; margin-bottom:44px;">A look back at completed pilgrimages and group retreats, with photographs of landmarks, shared meals, and the landscapes travelers saw along the way. Click any photo to view fullscreen.</p>

        <div class="gallery-grid">
          ${GALLERY_ARCHIVE.map(item => `
            <div class="gallery-card" onclick="openLightbox('${item.image}', '${item.title.replace(/'/g, "\\'")} — ${item.location}')">
              <img src="${item.image}" alt="${item.title}" onerror="handleImgError(this, '${item.title}')">
              <div class="gallery-card-caption">
                <div style="font-size:12px; text-transform:uppercase; letter-spacing:0.08em; color:var(--slate-text); margin-bottom:4px;">${item.location}</div>
                <h3 style="font-size:18px;">${item.title}</h3>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

function setShopView(view) {
  state.shopView = view;
  renderApp();
}
window.setShopView = setShopView;

function setShopCategory(cat) {
  state.shopCategory = cat;
  renderApp();
}
window.setShopCategory = setShopCategory;

function setShopSearch(val) {
  state.shopSearch = val;
  const gridEl = document.getElementById('shop-products-grid');
  const countEl = document.getElementById('shop-products-count');
  if (!gridEl) return;
  const filtered = getFilteredProducts();
  if (countEl) countEl.textContent = `Showing ${filtered.length} of ${PRODUCTS.length} products`;
  gridEl.innerHTML = renderProductCardsHTML(filtered);
}
window.setShopSearch = setShopSearch;

function getFilteredProducts() {
  return PRODUCTS.filter(p => {
    const matchCat = state.shopCategory === 'All' || p.category === state.shopCategory;
    const q = (state.shopSearch || '').trim().toLowerCase();
    const matchSearch = !q || p.name.toLowerCase().includes(q) || p.subtitle.toLowerCase().includes(q) || p.description.toLowerCase().includes(q);
    return matchCat && matchSearch;
  });
}

function renderProductCardsHTML(list) {
  if (list.length === 0) {
    return `<div style="grid-column:1/-1; text-align:center; padding:48px 20px; color:var(--slate-text);">No products matched your filter. <button class="btn btn-outline-navy btn-sm" style="margin-left:10px;" onclick="state.shopCategory='All'; state.shopSearch=''; renderApp();">Reset Filters</button></div>`;
  }
  return list.map(p => `
    <article class="product-card">
      <div class="product-img-wrap" onclick="navigate('/item/${p.slug}')">
        <img src="${p.image}" alt="${p.name}" onerror="handleImgError(this, '${p.name}')">
      </div>
      <div class="product-card-body">
        <div style="font-size:11px; text-transform:uppercase; letter-spacing:0.08em; color:var(--gold-accent); font-weight:700; margin-bottom:4px;">${p.category}</div>
        <div class="product-title" onclick="navigate('/item/${p.slug}')">${p.name}</div>
        <div class="product-sub">${p.subtitle}</div>
        <div class="product-price">$${p.price.toFixed(2)}</div>
        <div class="product-actions">
          <button class="btn btn-navy btn-sm" style="flex:1;" onclick="addToCart('${p.slug}', 1, true)">Buy Now</button>
          <button class="btn btn-outline-navy btn-sm" style="flex:1;" onclick="addToCart('${p.slug}', 1, false)">Add To Cart</button>
        </div>
      </div>
    </article>
  `).join('');
}

function renderProductPage() {
  const categories = ['All', 'Soaps', 'Balms & Salves', 'Oils & Body Care', 'Devotional Keepsakes'];
  const filtered = getFilteredProducts();
  return `
    <section class="subpage-hero">
      <div class="container">
        <div class="featured-store-split" style="margin-bottom:56px;">
          <div class="featured-store-image">
            <img src="https://atm-travels.org/wp-content/uploads/2026/11/WhatsApp-Image-2026-10-30-at-11.41.20-PM-683x1024.jpeg" alt="Natural Care for a Better You" onerror="handleImgError(this, 'ATM Travels Store')">
          </div>
          <div class="featured-store-text">
            <span class="section-tag">HANDCRAFTED WELLNESS &amp; DEVOTIONAL STORE</span>
            <h1 style="font-size:clamp(32px, 4vw, 48px); margin-bottom:18px;">Explore Our Featured Products</h1>
            <p>Discover our handcrafted collection of botanical oils, nourishing balms, soothing soaps, and wellness products made with thoughtfully selected ingredients. Each product is created to support your daily self-care routine with warmth, intention, and natural beauty.</p>
          </div>
        </div>

        <div class="filter-bar">
          <div class="filter-pills">
            ${categories.map(cat => `
              <button type="button" class="filter-pill ${state.shopCategory === cat ? 'active' : ''}" onclick="setShopCategory('${cat}')">${cat}</button>
            `).join('')}
          </div>
          <div class="search-input-wrap">
            <input type="search" placeholder="Search balms, oils, soaps..." value="${state.shopSearch}" oninput="setShopSearch(this.value)" aria-label="Search store products" />
          </div>
        </div>

        <div class="shop-toolbar">
          <div id="shop-products-count" style="font-weight:500; color:var(--navy-dark);">Showing ${filtered.length} of ${PRODUCTS.length} products</div>
          <div class="view-toggle-group">
            <button class="icon-btn ${state.shopView === 'grid' ? 'active' : ''}" onclick="setShopView('grid')">Grid View</button>
            <button class="icon-btn ${state.shopView === 'list' ? 'active' : ''}" onclick="setShopView('list')">List View</button>
          </div>
        </div>

        <div id="shop-products-grid" class="products-grid ${state.shopView === 'list' ? 'list-view' : ''}">
          ${renderProductCardsHTML(filtered)}
        </div>
      </div>
    </section>
  `;
}

function changeSingleQty(delta) {
  state.singleProductQty = Math.max(1, state.singleProductQty + delta);
  const input = document.getElementById('single-qty-input');
  if (input) input.value = state.singleProductQty;
}
window.changeSingleQty = changeSingleQty;

function renderSingleProductPage(slug) {
  const product = PRODUCTS.find(p => p.slug === slug) || PRODUCTS[0];
  state.singleProductQty = 1;
  return `
    <section class="subpage-hero">
      <div class="container">
        <div style="margin-bottom:24px;">
          <a href="#/product" style="color:var(--slate-text); font-weight:500;">&larr; Back to Product Catalog</a>
        </div>
        <div class="single-product-layout">
          <div>
            <img src="${product.image}" alt="${product.name}" style="width:100%; max-height:520px; object-fit:cover; border-radius:12px; cursor:zoom-in;" onclick="openLightbox(this.src, '${product.name.replace(/'/g, "\\'")}')" onerror="handleImgError(this, '${product.name}')">
          </div>
          <div>
            <span class="stock-badge">${product.stock}</span>
            <h1 style="font-size:36px; margin-bottom:8px;">${product.name}</h1>
            <div style="color:var(--slate-text); margin-bottom:16px;">${product.subtitle}</div>
            <div style="font-size:28px; font-weight:700; color:var(--navy-dark); margin-bottom:24px;">$${product.price.toFixed(2)}</div>
            <p style="margin-bottom:28px;">${product.description}</p>

            <div style="display:flex; align-items:center; flex-wrap:wrap; gap:14px; margin-bottom:32px;">
              <div class="qty-selector">
                <button type="button" class="qty-btn" onclick="changeSingleQty(-1)">−</button>
                <input id="single-qty-input" type="text" class="qty-input" value="1" readonly>
                <button type="button" class="qty-btn" onclick="changeSingleQty(1)">+</button>
              </div>
              <button class="btn btn-navy" onclick="addToCart('${product.slug}', state.singleProductQty, true)">Buy Now</button>
              <button class="btn btn-outline-navy" onclick="addToCart('${product.slug}', state.singleProductQty, false)">Add To Cart</button>
            </div>

            <div style="padding-top:24px; border-top:1px solid var(--border-gray);">
              <h3 style="font-size:18px; margin-bottom:12px;">Customer Reviews</h3>
              <div style="display:flex; gap:8px; flex-wrap:wrap; margin-bottom:16px;">
                <span class="icon-btn active">All (5★)</span>
                <span class="icon-btn">Newest</span>
                <span class="icon-btn">Highest Rating</span>
              </div>
              <p style="font-size:14.5px;">Handcrafted with care by ATM Travels in Dacula, Georgia. Have you tried ${product.name}? <a href="#/reviews" style="color:var(--navy-dark); font-weight:600; text-decoration:underline;">Write a review</a>.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderBlogPage() {
  return `
    <section class="subpage-hero">
      <div class="container">
        <span class="section-tag">ATM TRAVELS JOURNAL</span>
        <h1 style="margin-bottom:16px;">Notes for the Journey</h1>
        <p style="max-width:700px; margin-bottom:44px;">Practical preparation for mind, spirit, and luggage, historical background on sacred destinations, and updates from our coordinators.</p>

        <div class="cards-grid-3">
          ${BLOG_POSTS.map(post => `
            <article class="event-card">
              <div class="event-card-img-wrap" style="aspect-ratio:16/10; cursor:pointer;" onclick="openBlogModal('${post.id}')">
                <img src="${post.image}" alt="${post.title}" onerror="handleImgError(this, '${post.title}')">
              </div>
              <div class="event-card-body">
                <div class="event-card-tag">${post.category} · ${post.date}</div>
                <h3 style="font-size:20px; margin-bottom:12px; cursor:pointer;" onclick="openBlogModal('${post.id}')">${post.title}</h3>
                <p style="font-size:14.5px; margin-bottom:20px; flex-grow:1;">${post.excerpt}</p>
                <div style="display:flex; gap:10px; flex-wrap:wrap;">
                  <button type="button" class="btn btn-navy btn-sm" onclick="openBlogModal('${post.id}')">Read Full Article</button>
                  <a href="#/events-and-pilgrimages" class="btn btn-outline-navy btn-sm">Explore Pilgrimages</a>
                </div>
              </div>
            </article>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

function handleContactSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const inputs = Array.from(form.querySelectorAll('input, textarea')).map(el => el.value.trim()).filter(Boolean);
  const summaryText = `Hello ATM Travels! New Contact Inquiry:\n${inputs.join(' | ')}`;
  const waUrl = `https://wa.me/14045907020?text=${encodeURIComponent(summaryText)}`;
  const mailUrl = `mailto:info@atm-travels.org?subject=${encodeURIComponent('ATM Travels Website Inquiry')}&body=${encodeURIComponent(summaryText)}`;

  form.reset();
  const modal = document.getElementById('registration-modal');
  const backdrop = document.getElementById('drawer-backdrop');
  if (modal && backdrop) {
    modal.innerHTML = `
      <div style="text-align:center; padding: 12px 6px;">
        <div style="width:52px; height:52px; border-radius:50%; background:#dcfce7; color:#15803d; display:inline-flex; align-items:center; justify-content:center; font-size:26px; font-weight:700; margin-bottom:14px;">✓</div>
        <span class="section-tag" style="margin-bottom:4px;">MESSAGE READY</span>
        <h3 style="font-size:22px; margin-bottom:10px;">Message Recorded!</h3>
        <p style="font-size:14.5px; color:var(--slate-text); margin-bottom:20px;">To reach our team in Dacula, Georgia immediately, choose how you would like to deliver your message:</p>
        <div style="display:flex; flex-direction:column; gap:10px;">
          <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-navy btn-block" onclick="closeModal()">Send via WhatsApp (+1-404-590-7020)</a>
          <a href="${mailUrl}" class="btn btn-outline-navy btn-block" onclick="closeModal()">Open in Email (info@atm-travels.org)</a>
          <button type="button" class="btn btn-sm" style="background:none; color:var(--slate-text);" onclick="closeModal()">Close</button>
        </div>
      </div>
    `;
    modal.classList.add('open');
    backdrop.classList.add('open');
  }
  showToast('Message recorded! Choose WhatsApp or Email for instant delivery.');
}
window.handleContactSubmit = handleContactSubmit;

function renderContactPage() {
  return `
    <section class="subpage-hero">
      <div class="container">
        <div class="about-split" style="align-items:start;">
          <div>
            <span class="section-tag">CONTACT ATM TRAVELS</span>
            <h1 style="font-size:clamp(34px, 4.5vw, 52px); margin-bottom:20px;">Send us your questions</h1>
            <p style="margin-bottom:28px;">Ask about upcoming pilgrimages, event schedules, registration requirements, or store orders. Our team in Dacula, Georgia will reply with the details as they are confirmed.</p>

            <div class="contact-info-list">
              <div class="contact-info-item">
                <div class="contact-icon-box">
                  <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </div>
                <div>
                  <div style="font-size:12px; text-transform:uppercase; letter-spacing:0.08em; color:var(--slate-text);">EMAIL</div>
                  <a href="mailto:info@atm-travels.org" style="font-size:17px; font-weight:500; color:var(--navy-dark);">info@atm-travels.org</a>
                </div>
              </div>

              <div class="contact-info-item">
                <div class="contact-icon-box">
                  <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </div>
                <div>
                  <div style="font-size:12px; text-transform:uppercase; letter-spacing:0.08em; color:var(--slate-text);">TEL:</div>
                  <a href="tel:+14045907020" style="font-size:17px; font-weight:500; color:var(--navy-dark);">+1-(404) 590-7020</a>
                </div>
              </div>
            </div>
          </div>

          <div class="form-card">
            <h3 style="margin-bottom:20px;">Direct Inquiry Form</h3>
            <form onsubmit="handleContactSubmit(event)">
              <div class="form-group">
                <label class="form-label">Your Name *</label>
                <input type="text" class="form-control" placeholder="Full name" required>
              </div>
              <div class="form-group">
                <label class="form-label">Your Email *</label>
                <input type="email" class="form-control" placeholder="you@example.com" required>
              </div>
              <div class="form-group">
                <label class="form-label">Subject</label>
                <input type="text" class="form-control" placeholder="Pilgrimage registration, schedule, or store inquiry">
              </div>
              <div class="form-group">
                <label class="form-label">Message *</label>
                <textarea class="form-control" placeholder="How can our team in Dacula, Georgia assist you?" required></textarea>
              </div>
              <button type="submit" class="btn btn-navy btn-block">Send Message</button>
            </form>
          </div>
        </div>
        ${renderFaqSection()}
      </div>
    </section>
  `;
}

function setStarRating(stars) {
  state.selectedRating = stars;
  const buttons = document.querySelectorAll('.star-picker-btn');
  buttons.forEach((btn, idx) => {
    if (idx < stars) {
      btn.classList.add('active');
      btn.textContent = '★';
    } else {
      btn.classList.remove('active');
      btn.textContent = '☆';
    }
  });
}
window.setStarRating = setStarRating;

function handleReviewSubmit(e) {
  e.preventDefault();
  const title = document.getElementById('review-title-input').value.trim();
  const text = document.getElementById('review-body-input').value.trim();
  const name = document.getElementById('review-name-input').value.trim();
  const email = document.getElementById('review-email-input').value.trim();
  if (!title || !text || !name) return;

  const parts = name.split(/\s+/);
  const initials = (parts[0]?.[0] || 'A') + (parts[1]?.[0] || parts[0]?.[1] || 'T');

  const newReview = {
    id: Date.now(),
    title,
    date: 'November 2026',
    rating: state.selectedRating,
    text,
    initials: initials.toUpperCase(),
    author: name,
    email,
    avatarClass: 'avatar-gold'
  };

  state.reviews.unshift(newReview);
  try {
    const existingCustom = JSON.parse(localStorage.getItem('atm_reviews_v1') || '[]');
    existingCustom.unshift(newReview);
    localStorage.setItem('atm_reviews_v1', JSON.stringify(existingCustom));
  } catch (err) {}

  renderApp();
  showToast('Thank you! Your review has been published.');
}
window.handleReviewSubmit = handleReviewSubmit;

function renderReviewsPage() {
  return `
    <section class="subpage-hero">
      <div class="container">
        <div class="section-header centered">
          <span class="section-tag">TESTIMONIALS &amp; EXPERIENCES</span>
          <h1>Reviews From Pilgrimages &amp; Retreats</h1>
          <p style="margin-top:10px;">Read 5-star reflections from mothers, families, and pilgrims who have journeyed with ATM Travels.</p>
        </div>

        <div class="reviews-grid" style="margin-bottom:72px;">
          ${renderReviewsCards()}
        </div>

        <div class="section-header centered" style="margin-bottom:28px;">
          <span class="section-tag">SHARE YOUR EXPERIENCE</span>
          <h2>Write a Review</h2>
        </div>

        <div class="form-card" style="margin: 0 auto 24px;">
          <form onsubmit="handleReviewSubmit(event)">
            <div class="form-group">
              <label class="form-label">Your overall rating</label>
              <div class="star-rating-picker" role="radiogroup" aria-label="Your overall rating">
                ${[1, 2, 3, 4, 5].map(num => `
                  <button type="button" class="star-picker-btn ${num <= state.selectedRating ? 'active' : ''}" onclick="setStarRating(${num})">
                    ${num <= state.selectedRating ? '★' : '☆'}
                  </button>
                `).join('')}
              </div>
            </div>

            <div class="form-group">
              <label class="form-label" for="review-title-input">Title of your review</label>
              <input id="review-title-input" type="text" class="form-control" placeholder="Summarize your review or highlight an interesting detail" required>
            </div>

            <div class="form-group">
              <label class="form-label" for="review-body-input">Your review</label>
              <textarea id="review-body-input" class="form-control" placeholder="Tell people your review" required></textarea>
            </div>

            <div class="form-group">
              <label class="form-label" for="review-name-input">Your name</label>
              <input id="review-name-input" type="text" class="form-control" placeholder="Tell us your name" required>
            </div>

            <div class="form-group">
              <label class="form-label" for="review-email-input">Your email</label>
              <input id="review-email-input" type="email" class="form-control" placeholder="Tell us your email" required>
            </div>

            <div class="form-group">
              <label class="toggle-row">
                <input type="checkbox" class="toggle-input" style="display:none;" required>
                <span class="toggle-switch"></span>
                <span style="font-size:15px; color:var(--navy-dark);">This review is based on my own experience and is my genuine opinion.</span>
              </label>
            </div>

            <button type="submit" class="btn btn-navy">Submit Review</button>
          </form>
        </div>
      </div>
    </section>
  `;
}

function handleNewsletterSubmit(e) {
  e.preventDefault();
  e.target.reset();
  showToast('Subscribed! Thank you for joining the ATM Travels newsletter.');
}
window.handleNewsletterSubmit = handleNewsletterSubmit;

function updateActiveNavLinks() {
  const links = document.querySelectorAll('.nav-link[data-route]');
  links.forEach(link => {
    const r = link.getAttribute('data-route');
    if (r === state.route || (r === '/product' && state.route.startsWith('/item/'))) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

function initScrollReveal() {
  const els = document.querySelectorAll('.reveal-on-scroll, .event-card, .review-card, .product-card, .about-content-card, .events-split-row');
  if (!('IntersectionObserver' in window)) {
    els.forEach(el => el.classList.add('revealed'));
    return;
  }
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  els.forEach(el => {
    el.classList.add('reveal-on-scroll');
    obs.observe(el);
  });
}

function updateCountdownTimer() {
  const dEl = document.getElementById('cd-days');
  const hEl = document.getElementById('cd-hours');
  const mEl = document.getElementById('cd-mins');
  const sEl = document.getElementById('cd-secs');
  if (!dEl || !hEl || !mEl || !sEl) return;

  // Next milestone deadline (Dec 30, 2026 or May 17, 2027 if past Dec 30, 2026)
  const now = new Date();
  let target = new Date('2026-12-30T23:59:59');
  if (now >= target) {
    target = new Date('2027-05-17T23:59:59');
  }
  const diff = Math.max(0, target - now);
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((diff / (1000 * 60)) % 60);
  const secs = Math.floor((diff / 1000) % 60);

  dEl.textContent = String(days).padStart(2, '0');
  hEl.textContent = String(hours).padStart(2, '0');
  mEl.textContent = String(mins).padStart(2, '0');
  sEl.textContent = String(secs).padStart(2, '0');
}

function renderApp() {
  const mainEl = document.getElementById('app-main');
  if (!mainEl) return;

  const r = state.route;
  if (r === '/' || r === '') {
    mainEl.innerHTML = renderHomePage();
  } else if (r === '/about') {
    mainEl.innerHTML = renderAboutPage();
  } else if (r === '/events-and-pilgrimages') {
    mainEl.innerHTML = renderEventsPage();
  } else if (r === '/gallery') {
    mainEl.innerHTML = renderGalleryPage();
  } else if (r === '/product') {
    mainEl.innerHTML = renderProductPage();
  } else if (r.startsWith('/item/')) {
    const slug = r.replace('/item/', '');
    mainEl.innerHTML = renderSingleProductPage(slug);
  } else if (r === '/blog') {
    mainEl.innerHTML = renderBlogPage();
  } else if (r === '/contact') {
    mainEl.innerHTML = renderContactPage();
  } else if (r === '/reviews') {
    mainEl.innerHTML = renderReviewsPage();
  } else {
    mainEl.innerHTML = renderHomePage();
  }

  updateActiveNavLinks();
  updateCountdownTimer();
  requestAnimationFrame(initScrollReveal);
}

window.addEventListener('hashchange', parseRoute);
window.addEventListener('DOMContentLoaded', () => {
  parseRoute();
  updateCartUI();
  setInterval(updateCountdownTimer, 1000);
});
