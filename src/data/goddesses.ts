export type Goddess = {
  slug: string;
  name: string;
  deva: string;
  epithet: string;
  etymology: string;
  gradient: string;
  accent: string;
  iconography: string;
  mythology: string;
  philosophy: string;
  history: string;
  devotional: string;
  texts: string[];
  traditions: string[];
  places: string[];
  symbols: string[];
  related: string[];
  mantraNote: string;
};

/**
 * Editorial note: entries summarise widely attested traditions and mainstream
 * scholarship. Śākta schools differ; disagreements are stated rather than hidden.
 */
export const goddesses: Goddess[] = [
  {
    slug: "mahadevi",
    name: "Devī / Mahādevī",
    deva: "महादेवी",
    epithet: "The Great Goddess",
    etymology:
      "devī, 'goddess', from the root div, 'to shine'; mahā, 'great'. Mahādevī names the Goddess understood as supreme rather than as a consort figure.",
    gradient: "var(--grad-void)",
    accent: "var(--color-gold)",
    iconography:
      "Rarely fixed. Mahādevī is depicted through her particular forms, or aniconically through yantra, lamp, pot (ghaṭa), or the syllable of a mantra.",
    mythology:
      "The Devī Māhātmya presents the Goddess as prior to and greater than the gods, who emit their energies into her at moments of cosmic crisis. Later Purāṇic material, especially the Devī Bhāgavata, makes her the ground of all deities.",
    philosophy:
      "In strongly Śākta theologies, Mahādevī is both the material and efficient cause of the cosmos: reality is her self-manifestation, not a product distinct from her. Other traditions read her as the dynamic aspect (śakti) of a consciousness-principle named Śiva or Brahman.",
    history:
      "The consolidation of many regional goddesses into a single Great Goddess is visible by the mid first millennium CE, with the Devī Māhātmya (c. 5th–6th century CE, dating debated) a decisive text. Scholars disagree about how far this reflects the absorption of local and non-Brahminical goddess cults.",
    devotional:
      "She is addressed simply as Mā — Mother. Devotional literature holds that every goddess a worshipper loves is her, turned toward that worshipper in a particular face.",
    texts: ["Devī Māhātmya", "Devī Bhāgavata Purāṇa", "Devī Upaniṣad"],
    traditions: ["Pan-Śākta", "Purāṇic Śāktism", "Regional goddess traditions"],
    places: ["Vindhyācala", "Kāmākhyā", "Kolhāpur"],
    symbols: ["Lion", "Lotus", "Lamp", "Pūrṇa-kumbha"],
    related: ["durga", "kali", "tripurasundari"],
    mantraNote:
      "Purāṇic hymns such as the Devī Māhātmya are publicly recited; many Tantric mantras of the same Goddess are transmitted only through initiation.",
  },
  {
    slug: "durga",
    name: "Durgā",
    deva: "दुर्गा",
    epithet: "The Invincible; She Who Is Hard to Approach",
    etymology:
      "From durga, 'difficult of access, a fortress'. The name suggests both the unassailable one and the one who carries devotees across difficulty (durgati).",
    gradient: "var(--grad-durga)",
    accent: "var(--color-saffron)",
    iconography:
      "Many-armed, seated on a lion or tiger, each hand bearing a weapon given by a god. As Mahiṣāsuramardinī she stands over the buffalo-demon at the instant of victory — sculpturally, her face remains serene.",
    mythology:
      "In the Devī Māhātmya the gods, defeated by Mahiṣa, release their combined tejas, from which the Goddess arises fully formed. She is not created by them so much as revealed through them.",
    philosophy:
      "Durgā figures sovereignty (aiśvarya) and the maintenance of ṛta / dharma — cosmic order as something actively held, not automatic. The demon is often read allegorically as ego or as the inertia (tamas) that resists awakening.",
    history:
      "Buffalo-slaying goddess images appear from the Kuṣāṇa period onward. The autumn Durgā Pūjā of Bengal took its recognisable public form in the early modern period under zamindari patronage, becoming a mass civic festival in the 19th–20th centuries.",
    devotional:
      "In Bengal she is the daughter come home for four days of autumn; her departure on Vijayā Daśamī is mourned as a daughter's return to her husband's house.",
    texts: ["Devī Māhātmya", "Kālikā Purāṇa", "Durgā Saptaśatī commentaries"],
    traditions: ["Bengali Śāktism", "Purāṇic Śāktism", "Nepalese Durgā traditions"],
    places: ["Kolkata", "Guwahati", "Kathmandu", "Mysuru"],
    symbols: ["Lion", "Trident", "Ten arms", "Autumn kāśa grass"],
    related: ["mahadevi", "kali", "bhairavi"],
    mantraNote:
      "Recitation of the Durgā Saptaśatī is widespread and public; specific Tantric prayogas attached to it are not.",
  },
  {
    slug: "kali",
    name: "Kālī",
    deva: "काली",
    epithet: "She Who Confronts Time",
    etymology:
      "Feminine of kāla — time, and also black. Both senses are exploited deliberately in Sanskrit hymnody: she is time, and she is the darkness that remains when forms end.",
    gradient: "var(--grad-kali)",
    accent: "var(--color-crimson)",
    iconography:
      "Dark-bodied, dishevelled hair, garland of severed heads (often fifty — the Sanskrit phonemes), skirt of arms, standing upon a supine Śiva. Her hands show both destruction and the gesture of fearlessness.",
    mythology:
      "She emerges from the brow of Ambikā in the Devī Māhātmya to destroy Caṇḍa and Muṇḍa. Later Bengali material reframes her wildness through the maternal: the fierce one is the tender one.",
    philosophy:
      "Kālī is read as the devouring movement of time and as that which is not consumed by it. Confronting her image is a contemplative technique: what remains when every form the mind clings to has been withdrawn?",
    history:
      "Early references are marginal and battlefield-associated. From roughly the 12th century, and decisively in early modern Bengal, Kālī moves to the theological centre, shaped by Tantric texts and by poets such as Rāmprasād Sen (18th c.) and later Ramakrishna (19th c.).",
    devotional:
      "Bengali Śākta padāvalī poetry addresses her with startling intimacy — complaint, teasing, longing. The cremation ground becomes the lap of the mother.",
    texts: ["Devī Māhātmya", "Mahānirvāṇa Tantra", "Karpūrādi Stotra", "Śyāmā Saṅgīt"],
    traditions: ["Bengali Śāktism", "Kaula Tantra", "Kālīkula"],
    places: ["Kālīghāṭ", "Dakṣiṇeśvar", "Tārāpīṭh", "Kāmākhyā"],
    symbols: ["Cremation ground", "Garland of heads", "Night sky", "Extended tongue"],
    related: ["tara", "chinnamasta", "dhumavati"],
    mantraNote:
      "Kālī's principal bīja mantras belong to initiatory Tantric transmission; devotional songs and stotras circulate freely.",
  },
  {
    slug: "tripurasundari",
    name: "Tripurasundarī / Lalitā",
    deva: "त्रिपुरसुन्दरी",
    epithet: "Beauty of the Three Worlds",
    etymology:
      "tri-pura, 'three cities/worlds' (also read as the three states of waking, dream and deep sleep), with sundarī, 'the beautiful'. Lalitā: 'she who plays'.",
    gradient: "var(--grad-tripura)",
    accent: "var(--color-lotus)",
    iconography:
      "Rose-red, seated on a throne whose legs are the great gods, holding sugarcane bow, flower arrows, noose and goad — desire, the senses, attachment and aversion held as instruments rather than afflictions.",
    mythology:
      "The Lalitopākhyāna of the Brahmāṇḍa Purāṇa narrates her destruction of Bhaṇḍāsura, a demon born of ash, accompanied by her armies arrayed like the enclosures of the Śrī Chakra.",
    philosophy:
      "In Śrīvidyā she is identical with the Śrī Chakra and with the fifteen- or sixteen-syllable vidyā: goddess, geometry and sound are three registers of one reality. Beauty here is a metaphysical category — the self-delight (camatkāra) of consciousness aware of itself.",
    history:
      "Śrīvidyā crystallises from around the 10th–11th centuries, with major theological work in Kashmir and a lasting South Indian institutional home, including its Smārta-Advaitin reception associated with Śṛṅgeri and Kāñcī.",
    devotional:
      "The Lalitā Sahasranāma is chanted daily in countless households — a thousand names offered like a thousand flowers.",
    texts: [
      "Lalitā Sahasranāma",
      "Saundarya Laharī",
      "Tripurā Rahasya",
      "Yoginī Hṛdaya",
      "Vāmakeśvara Tantra",
    ],
    traditions: ["Śrīvidyā", "Kaula", "Samaya interpretations"],
    places: ["Kāñcīpuram", "Madurai", "Śṛṅgeri", "Thiruvanaikaval"],
    symbols: ["Śrī Chakra", "Sugarcane bow", "Bindu", "Rose-gold light"],
    related: ["bhuvaneshvari", "kamala", "matangi"],
    mantraNote:
      "The Śrīvidyā mantra is classically imparted only at initiation (dīkṣā); this site describes its role without reproducing it.",
  },
  {
    slug: "parvati",
    name: "Pārvatī",
    deva: "पार्वती",
    epithet: "Daughter of the Mountain",
    etymology:
      "From parvata, 'mountain' — child of Himavat. Also Umā, Gaurī, Haimavatī.",
    gradient: "var(--grad-mist)",
    accent: "var(--color-moss)",
    iconography:
      "Serene, two- or four-armed, often with lotus and mirror, shown in domestic and mountain settings rather than battle.",
    mythology:
      "The Kumārasaṃbhava and Śiva Purāṇa narrate her tapas to win Śiva — asceticism performed by the Goddess herself, a reversal worth noticing.",
    philosophy:
      "In Śaiva readings she is Śiva's inseparable śakti; in strong Śākta readings the relation inverts, and Śiva is intelligible only through her. The Kena Upaniṣad's Umā Haimavatī, who instructs the gods, is an early scriptural anchor for the Goddess as teacher.",
    history:
      "Pārvatī's literary figure consolidates in classical Sanskrit poetry and Purāṇa; her regional forms (Mīnākṣī, Annapūrṇā, Kāmākṣī) often carry older independent goddess histories.",
    devotional:
      "She is the household Goddess — of marriage, of the mountain home, of the everyday sacredness of relation.",
    texts: ["Kena Upaniṣad", "Kumārasaṃbhava", "Śiva Purāṇa"],
    traditions: ["Śaiva-Śākta", "Purāṇic"],
    places: ["Kailāsa (mythic)", "Vārāṇasī", "Madurai"],
    symbols: ["Mountain", "Mirror", "Lotus"],
    related: ["mahadevi", "annapurna", "durga"],
    mantraNote: "Widely recited Purāṇic stotras; no restricted material presented.",
  },
  {
    slug: "bhuvaneshvari",
    name: "Bhuvaneśvarī",
    deva: "भुवनेश्वरी",
    epithet: "Sovereign of the Worlds",
    etymology: "bhuvana, 'world, space of becoming', with īśvarī, 'sovereign lady'.",
    gradient: "var(--grad-void)",
    accent: "var(--color-gold)",
    iconography:
      "Golden, luminous, with noose and goad and gestures of boon and fearlessness; her body is described as space itself made radiant.",
    mythology:
      "Less narrative than most; her hymns describe her as the extended field within which every world occurs.",
    philosophy:
      "She figures ākāśa — space as the condition of manifestation. Where Kālī is time, Bhuvaneśvarī is extension: the Goddess as the room reality has to happen in.",
    history:
      "A core Mahāvidyā across Tantric compendia, with a strong presence in eastern and Himalayan traditions.",
    devotional: "Meditation on her is described as dwelling in unbounded openness.",
    texts: ["Tantric compendia", "Śākta Upaniṣads"],
    traditions: ["Daśa Mahāvidyā", "Śrīkula affinities"],
    places: ["Bhubaneswar (name-association)", "Himalayan shrines"],
    symbols: ["Space", "Golden light", "Noose and goad"],
    related: ["tripurasundari", "mahadevi"],
    mantraNote: "Bīja practice belongs to initiatory transmission.",
  },
  {
    slug: "tara",
    name: "Tārā",
    deva: "तारा",
    epithet: "She Who Carries Across",
    etymology:
      "From tṛ, 'to cross over' — the ferrying one; also 'star'. The Hindu Tārā and the Buddhist Tārā share a name and considerable history, and are not simply identical.",
    gradient: "var(--grad-tara)",
    accent: "var(--color-tara)",
    iconography:
      "Blue-black, standing on a corpse, fierce and short-statured in many descriptions, with a tiger-skin garment — Ugratārā, Nīlasarasvatī.",
    mythology:
      "Associated at Tārāpīṭh with the sage Vasiṣṭha's accomplishment and with the churning of the ocean in some accounts.",
    philosophy:
      "The crossing metaphor is central: Tārā names the capacity of consciousness to traverse what it cannot survive intact.",
    history:
      "One of the clearest sites of Hindu–Buddhist Tantric exchange in eastern India and Nepal; scholars debate direction and degree of influence rather than a single origin.",
    devotional: "At Tārāpīṭh she is the fierce mother of the cremation ground and of poets.",
    texts: ["Tārā Tantra materials", "Nīlasarasvatī stotras"],
    traditions: ["Kālīkula", "Eastern Tantra", "Nepalese traditions"],
    places: ["Tārāpīṭh", "Maithil region", "Nepal"],
    symbols: ["Blue ocean", "Boat / crossing", "Star"],
    related: ["kali", "matangi"],
    mantraNote: "Initiatory; described only in context.",
  },
  {
    slug: "chinnamasta",
    name: "Chinnamastā",
    deva: "छिन्नमस्ता",
    epithet: "She of the Severed Head",
    etymology: "chinna, 'severed', mastā, 'head'.",
    gradient:
      "radial-gradient(ellipse at 50% 45%, oklch(0.62 0.16 95) 0%, oklch(0.24 0.08 300) 55%, oklch(0.09 0.02 285) 100%)",
    accent: "var(--color-saffron)",
    iconography:
      "The iconography is deliberately shocking: self-decapitation feeding attendants and herself. It is presented here descriptively, as a symbolic diagram rather than a scene.",
    mythology:
      "Told as an act of feeding companions from her own life — a radical figure of self-giving.",
    philosophy:
      "Read as the simultaneity of life, death and nourishment; of the collapse of the self-image that consumes and is consumed in one circuit. Some traditions read it as the instantaneous ascent of energy through the central channel.",
    history: "Attested in Tantric iconographic manuals; parallels with the Buddhist Vajrayoginī.",
    devotional: "Practised within restricted lineages more than in public devotion.",
    texts: ["Tantric iconographic manuals", "Śākta Pramoda"],
    traditions: ["Daśa Mahāvidyā", "Kaula"],
    places: ["Rajrappa", "Chintpurni (associated)"],
    symbols: ["Lightning", "Lotus seat", "Three streams"],
    related: ["kali", "bhairavi"],
    mantraNote: "Restricted; not reproduced.",
  },
  {
    slug: "bhairavi",
    name: "Bhairavī",
    deva: "भैरवी",
    epithet: "The Terrifying, the Ardent",
    etymology: "Feminine of Bhairava, 'the frightful' — a name also read as 'that which fills'.",
    gradient:
      "radial-gradient(ellipse at 50% 70%, oklch(0.62 0.19 45) 0%, oklch(0.3 0.11 30) 45%, oklch(0.1 0.02 300) 95%)",
    accent: "var(--color-vermilion)",
    iconography: "Red, garlanded with skulls, radiant like a thousand rising suns.",
    mythology: "Appears across Tantric texts as the consort-interlocutor of Bhairava in dialogue form.",
    philosophy:
      "Associated with tapas — heat as transformation. Bhairavī is the ascetic fire that dissolves what it purifies.",
    history: "A pervasive figure in Śaiva-Śākta dialogue literature.",
    devotional: "Invoked for courage and for the burning away of obstruction.",
    texts: ["Vijñāna Bhairava (dialogue frame)", "Tantric compendia"],
    traditions: ["Daśa Mahāvidyā", "Kaula", "Kashmiri traditions"],
    places: ["Vārāṇasī", "Himalayan shrines"],
    symbols: ["Fire", "Skull garland", "Rising sun"],
    related: ["durga", "chinnamasta"],
    mantraNote: "Initiatory.",
  },
  {
    slug: "dhumavati",
    name: "Dhūmāvatī",
    deva: "धूमावती",
    epithet: "She of Smoke",
    etymology: "From dhūma, 'smoke'.",
    gradient: "var(--grad-mist)",
    accent: "var(--color-mist)",
    iconography:
      "Old, widowed, riding a crow in a cart without horses — an image built entirely from what society treats as inauspicious.",
    mythology: "Said to arise when the Goddess consumes Śiva and remains alone.",
    philosophy:
      "A meditation on absence, hunger, impermanence and the dignity of what has been discarded. Dhūmāvatī refuses the equation of the sacred with the pleasant.",
    history: "Consistently included among the Mahāvidyās; her temple at Vārāṇasī is notable.",
    devotional: "Approached with caution in most lineages; deeply loved in a few.",
    texts: ["Tantric compendia"],
    traditions: ["Daśa Mahāvidyā"],
    places: ["Vārāṇasī", "Datia"],
    symbols: ["Smoke", "Crow", "Winnowing basket"],
    related: ["kali", "bagalamukhi"],
    mantraNote: "Restricted.",
  },
  {
    slug: "bagalamukhi",
    name: "Bagalāmukhī",
    deva: "बगलामुखी",
    epithet: "She Who Stills",
    etymology:
      "Etymology contested; often derived from valgā, 'bridle', giving 'she whose face bridles'.",
    gradient:
      "radial-gradient(ellipse at 50% 50%, oklch(0.72 0.14 96) 0%, oklch(0.3 0.07 90) 50%, oklch(0.1 0.02 280) 100%)",
    accent: "var(--color-gold)",
    iconography: "Golden-yellow, seizing the tongue of an adversary — motion arrested mid-gesture.",
    mythology: "Associated with the stilling of a destructive storm.",
    philosophy:
      "Stambhana — paralysis, suspension. Philosophically, the pause in which reaction stops and choice becomes possible.",
    history: "Prominent in western and Himalayan Tantric practice.",
    devotional: "Invoked in contexts of conflict and litigation; also read inwardly.",
    texts: ["Tantric compendia"],
    traditions: ["Daśa Mahāvidyā"],
    places: ["Datia", "Kangra", "Nalkheda"],
    symbols: ["Yellow", "Bridle", "Suspended motion"],
    related: ["dhumavati", "bhairavi"],
    mantraNote: "Restricted.",
  },
  {
    slug: "matangi",
    name: "Mātaṅgī",
    deva: "मातङ्गी",
    epithet: "Goddess of Speech Outside the Sanctioned",
    etymology: "From mātaṅga; associated with communities placed outside caste orthodoxy.",
    gradient:
      "radial-gradient(ellipse at 50% 60%, oklch(0.55 0.14 155) 0%, oklch(0.24 0.07 200) 55%, oklch(0.09 0.02 280) 100%)",
    accent: "var(--color-moss)",
    iconography: "Dark green, with vīṇā, parrot and the marks of speech and music.",
    mythology: "Associated with offerings considered impure — deliberately transgressive.",
    philosophy:
      "The Goddess of language, music and knowledge that arrives from the margins. A Tantric counter-Sarasvatī, unsettling purity boundaries.",
    history:
      "Her iconography raises real questions about caste that scholarship treats seriously rather than romanticising.",
    devotional: "Patron of musicians, poets and speech.",
    texts: ["Tantric compendia"],
    traditions: ["Daśa Mahāvidyā", "Śrīkula affinities"],
    places: ["South Indian shrines", "Vārāṇasī"],
    symbols: ["Vīṇā", "Parrot", "Sound"],
    related: ["tripurasundari", "tara"],
    mantraNote: "Initiatory.",
  },
  {
    slug: "kamala",
    name: "Kamalā",
    deva: "कमला",
    epithet: "The Lotus Goddess",
    etymology: "kamala, 'lotus' — an epithet of Śrī / Lakṣmī, here as a Mahāvidyā.",
    gradient: "var(--grad-lotus)",
    accent: "var(--color-lotus)",
    iconography: "Seated on a lotus, bathed by elephants, showering gold.",
    mythology: "Carries the whole Śrī / Lakṣmī cycle into the Mahāvidyā set.",
    philosophy:
      "Abundance as a face of the Goddess: manifestation is not only austerity and dissolution but flourishing, beauty and sustenance.",
    history:
      "Her presence completes the Mahāvidyā list at its most benign pole; the set deliberately spans terror to grace.",
    devotional: "Householder worship, prosperity, well-being, Dīpāvalī.",
    texts: ["Śrī Sūkta", "Tantric compendia"],
    traditions: ["Daśa Mahāvidyā", "Vaiṣṇava-Śākta overlap"],
    places: ["Kolhāpur", "Pan-Indian"],
    symbols: ["Lotus", "Elephants", "Gold"],
    related: ["tripurasundari", "annapurna"],
    mantraNote: "Śrī Sūkta is public Vedic material; Tantric prayogas are not.",
  },
  {
    slug: "annapurna",
    name: "Annapūrṇā",
    deva: "अन्नपूर्णा",
    epithet: "She Who Is Full of Food",
    etymology: "anna, 'food', pūrṇā, 'full, complete'.",
    gradient:
      "radial-gradient(ellipse at 50% 70%, oklch(0.68 0.12 75) 0%, oklch(0.28 0.06 60) 50%, oklch(0.1 0.02 285) 100%)",
    accent: "var(--color-saffron)",
    iconography: "Holding a ladle and a vessel of rice, offering food to Śiva as mendicant.",
    mythology:
      "Kāśī's account has Śiva beg from her, conceding that renunciation itself depends on the Goddess who feeds.",
    philosophy:
      "Matter as gift. In Śākta terms, the material world is not an obstacle to be escaped but the Goddess sustaining beings.",
    history: "Central to Vārāṇasī's religious economy and its annadāna institutions.",
    devotional: "Kitchens, feeding, Annakūṭa.",
    texts: ["Annapūrṇā stotras", "Kāśī Khaṇḍa"],
    traditions: ["Purāṇic Śāktism", "Kāśī traditions"],
    places: ["Vārāṇasī", "Horanadu"],
    symbols: ["Ladle", "Rice vessel", "Hearth"],
    related: ["kamala", "parvati"],
    mantraNote: "Public stotras only.",
  },
];

export const goddessBySlug = (slug: string) => goddesses.find((g) => g.slug === slug);

export const mahavidyaOrder = [
  "kali",
  "tara",
  "tripurasundari",
  "bhuvaneshvari",
  "bhairavi",
  "chinnamasta",
  "dhumavati",
  "bagalamukhi",
  "matangi",
  "kamala",
];

export const mahavidyaWorlds: Record<string, { world: string; caption: string }> = {
  kali: { world: "Infinite darkness and stars", caption: "Time as the field in which forms appear and end." },
  tara: { world: "Deep blue cosmic ocean", caption: "The crossing — what carries when nothing holds." },
  tripurasundari: { world: "Rose-gold sacred geometry", caption: "Beauty as consciousness delighting in itself." },
  bhuvaneshvari: { world: "Expansive cosmic space", caption: "Space as the sovereignty that lets worlds occur." },
  bhairavi: { world: "Fire and transformation", caption: "Heat that refines by consuming." },
  chinnamasta: { world: "Lightning and radical reversal", caption: "Giving and receiving as a single circuit." },
  dhumavati: { world: "Mist, emptiness, impermanence", caption: "The sacred that refuses to be pleasant." },
  bagalamukhi: { world: "Suspended motion, stillness", caption: "The pause before reaction becomes fate." },
  matangi: { world: "Sound, language, unconventional knowledge", caption: "Speech from outside the sanctioned centre." },
  kamala: { world: "Lotus fields and abundance", caption: "Flourishing as a face of the Goddess." },
};
