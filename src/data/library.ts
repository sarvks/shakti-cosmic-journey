export type SacredText = {
  title: string;
  deva: string;
  period: string;
  language: string;
  tradition: string;
  themes: string[];
  ideas: string;
  significance: string;
  scholarly: string;
};

export const texts: SacredText[] = [
  {
    title: "Devī Māhātmya",
    deva: "देवीमाहात्म्य",
    period: "c. 5th–6th century CE (dating debated)",
    language: "Sanskrit",
    tradition: "Purāṇic Śāktism (embedded in the Mārkaṇḍeya Purāṇa)",
    themes: ["Supreme Goddess", "Cosmic order", "Māyā", "Battle allegory"],
    ideas:
      "Seven hundred verses in three narrative cycles establish the Goddess as the ultimate reality from whom the gods derive their power. Its philosophical hymns (Brahmastuti, Aparājita Stuti) are as important as its narratives.",
    significance:
      "The foundational scriptural charter of Goddess supremacy; recited as Durgā Saptaśatī across South Asia.",
    scholarly:
      "Scholars debate whether it synthesises pre-existing Goddess hymnody or marks a decisive Brahminical incorporation of regional goddess cults. The three-cycle structure suggests composite authorship.",
  },
  {
    title: "Devī Bhāgavata Purāṇa",
    deva: "देवीभागवतपुराण",
    period: "c. 9th–12th century CE (range contested)",
    language: "Sanskrit",
    tradition: "Purāṇic Śāktism",
    themes: ["Mahādevī theology", "Devī Gītā", "Cosmology"],
    ideas:
      "Presents the Goddess as the supreme Brahman; the embedded Devī Gītā offers a systematic Śākta Vedānta in the voice of the Goddess.",
    significance: "The most complete Purāṇic articulation of Goddess-centred metaphysics.",
    scholarly:
      "Its relation to the Bhāgavata Purāṇa is one of deliberate theological reply. Dates remain unsettled.",
  },
  {
    title: "Lalitā Sahasranāma",
    deva: "ललितासहस्रनाम",
    period: "Uncertain; commonly placed in the later first / early second millennium CE",
    language: "Sanskrit",
    tradition: "Śrīvidyā (Brahmāṇḍa Purāṇa context)",
    themes: ["Thousand names", "Śrī Chakra", "Kuṇḍalinī", "Non-dual theology"],
    ideas:
      "A thousand epithets ordered to trace her form, her chakra, her mantra and her identity with consciousness. Bhāskararāya's commentary (18th c.) is the classical interpretive key.",
    significance: "The most widely recited Śrīvidyā text in South India.",
    scholarly:
      "The text's internal order encodes ritual and yogic sequences; commentaries differ substantially in how they decode them.",
  },
  {
    title: "Saundarya Laharī",
    deva: "सौन्दर्यलहरी",
    period: "Traditionally ascribed to Śaṅkara (8th c.); authorship widely questioned",
    language: "Sanskrit",
    tradition: "Śrīvidyā",
    themes: ["Beauty", "Kuṇḍalinī", "Poetics", "Mantra-śāstra"],
    ideas:
      "A hundred verses moving from metaphysics and yogic ascent to sheer poetic description of the Goddess's body — beauty treated as a means of knowledge.",
    significance: "Among the most beloved Sanskrit devotional poems.",
    scholarly:
      "The ascription to Śaṅkara is traditional rather than established; verse groupings may be of different periods.",
  },
  {
    title: "Tripurā Rahasya",
    deva: "त्रिपुरारहस्य",
    period: "Uncertain, likely second millennium CE",
    language: "Sanskrit",
    tradition: "Śrīvidyā / Advaitic Śāktism",
    themes: ["Jñāna", "Narrative philosophy", "Liberation"],
    ideas:
      "In its Jñāna Khaṇḍa, a sustained non-dual philosophy taught through story, with the Goddess as self-luminous awareness.",
    significance: "Bridges Śākta theology and Advaitic soteriology; admired by modern teachers.",
    scholarly: "Sections survive unevenly; the Māhātmya Khaṇḍa and Jñāna Khaṇḍa differ in tone and probably in date.",
  },
  {
    title: "Vāmakeśvara / Nityāṣoḍaśikārṇava & Yoginī Hṛdaya",
    deva: "वामकेश्वरतन्त्र",
    period: "c. 10th–11th century CE",
    language: "Sanskrit",
    tradition: "Śrīvidyā Tantra",
    themes: ["Śrī Chakra", "Mantra", "Ritual", "Cosmogony"],
    ideas:
      "The principal scriptural basis for Śrī Chakra worship, with the Yoginī Hṛdaya supplying its interior, contemplative reading.",
    significance: "Where Śrīvidyā's geometry and its metaphysics are formally joined.",
    scholarly: "Amṛtānanda's and Bhāskararāya's commentaries shape all later reception.",
  },
  {
    title: "Kālikā Purāṇa",
    deva: "कालिकापुराण",
    period: "c. 10th–11th century CE",
    language: "Sanskrit",
    tradition: "Eastern Śāktism (Assam / Kāmarūpa)",
    themes: ["Kāmākhyā", "Sacred geography", "Ritual"],
    ideas: "A key source for the Kāmākhyā complex and for the myth-geography of the Goddess's body.",
    significance: "Anchors Assam's Śākta prominence textually.",
    scholarly: "Its ritual prescriptions, including animal sacrifice, are historically important and contested in modern practice.",
  },
  {
    title: "Śiva Sūtras & Spanda Kārikās",
    deva: "शिवसूत्र",
    period: "Śiva Sūtras attributed to Vasugupta, 9th century CE",
    language: "Sanskrit",
    tradition: "Kashmir Śaivism (Trika), foundational for Śākta philosophy",
    themes: ["Prakāśa-Vimarśa", "Spanda", "Recognition"],
    ideas:
      "Consciousness as self-luminous (prakāśa) and self-aware (vimarśa); reality as vibration (spanda). Utpaladeva and Abhinavagupta build the mature system.",
    significance: "Supplies much of the conceptual vocabulary later Śākta theology uses.",
    scholarly:
      "Kashmir Śaivism is not the same tradition as Śāktism; its concepts were adopted selectively by Śrīvidyā and other schools.",
  },
  {
    title: "Mahānirvāṇa Tantra",
    deva: "महानिर्वाणतन्त्र",
    period: "c. 18th century CE",
    language: "Sanskrit",
    tradition: "Later Bengali Tantra",
    themes: ["Ritual law", "Reform", "Ādyā Kālī"],
    ideas: "Systematises Tantric worship in a notably reformist, socially conservative register.",
    significance: "Hugely influential on colonial-era Western perceptions of Tantra through translation.",
    scholarly:
      "Its late date and reformist agenda mean it should not be read as representative of earlier Tantric traditions — a common error.",
  },
  {
    title: "Śākta Padāvalī (Rāmprasād, Kamalākānta and others)",
    deva: "শাক্ত পদাবলী",
    period: "18th–19th century CE",
    language: "Bengali",
    tradition: "Bengali Śākta devotion",
    themes: ["Intimacy", "Complaint", "Mother-child bhāva"],
    ideas:
      "Vernacular songs that argue with the Goddess, tease her, refuse her — the theology carried in tone rather than doctrine.",
    significance: "Shaped modern Bengali religious sensibility and its Kālī.",
    scholarly: "A vernacular corpus that reframes Tantric ideas for householder devotion.",
  },
];

export type SacredPlace = {
  name: string;
  deva?: string;
  region: string;
  x: number;
  y: number;
  kind: "pitha" | "temple" | "philosophy" | "festival";
  note: string;
  source: string;
};

/** x/y are percentages on a stylised (non-cartographic) map plate of South Asia. */
export const places: SacredPlace[] = [
  {
    name: "Kāmākhyā",
    deva: "कामाख्या",
    region: "Assam",
    x: 78,
    y: 38,
    kind: "pitha",
    note: "Hilltop temple on Nīlācala, a centre of Śākta-Tantric practice; the Ambubachi Melā marks the Goddess's annual retreat.",
    source: "Kālikā Purāṇa; Yoginī Tantra",
  },
  {
    name: "Kālīghāṭ",
    region: "Bengal (Kolkata)",
    x: 70,
    y: 47,
    kind: "temple",
    note: "Present structure early 19th century, on an older site; among the most visited Kālī temples.",
    source: "Regional Bengali tradition; Pīṭhamālā lists",
  },
  {
    name: "Tārāpīṭh",
    region: "Bengal (Birbhum)",
    x: 68,
    y: 44,
    kind: "temple",
    note: "Cremation-ground shrine of Tārā, associated with the ascetic Bāmākhepā (19th c.).",
    source: "Local tradition; Tantric hagiography",
  },
  {
    name: "Vindhyavāsinī",
    region: "Uttar Pradesh (Mirzapur)",
    x: 55,
    y: 42,
    kind: "pitha",
    note: "Vindhya-dwelling Goddess named already in early Purāṇic sources.",
    source: "Devī Māhātmya context; Purāṇas",
  },
  {
    name: "Vārāṇasī",
    region: "Uttar Pradesh",
    x: 56,
    y: 41,
    kind: "temple",
    note: "Annapūrṇā, Dhūmāvatī and the nine Durgās of the city's ritual circuit.",
    source: "Kāśī Khaṇḍa",
  },
  {
    name: "Jvālāmukhī / Kāṅgrā",
    region: "Himachal Pradesh",
    x: 38,
    y: 24,
    kind: "pitha",
    note: "Natural flames worshipped as the Goddess; part of the Himachal Śakti Pīṭha circuit.",
    source: "Regional Pīṭha lists (variable)",
  },
  {
    name: "Vaiṣṇo Devī",
    region: "Jammu",
    x: 33,
    y: 18,
    kind: "temple",
    note: "Cave shrine of three piṇḍīs; a mass pilgrimage site largely of the modern period in scale.",
    source: "Regional tradition",
  },
  {
    name: "Kashmir Valley",
    region: "Kashmir",
    x: 34,
    y: 13,
    kind: "philosophy",
    note: "Home of Trika Śaiva philosophy and of Śārikā and Kṣīr Bhavānī goddess traditions.",
    source: "Śiva Sūtras; Tantrāloka",
  },
  {
    name: "Vimalā / Purī",
    region: "Odisha",
    x: 66,
    y: 53,
    kind: "pitha",
    note: "Goddess shrine within the Jagannātha complex; a striking Śākta-Vaiṣṇava interlocking.",
    source: "Pīṭha lists; temple record",
  },
  {
    name: "Kāñcīpuram — Kāmākṣī",
    region: "Tamil Nadu",
    x: 52,
    y: 76,
    kind: "temple",
    note: "A principal Śrīvidyā centre; Kāmākṣī identified with Lalitā Tripurasundarī.",
    source: "Śrīvidyā tradition; Lalitopākhyāna",
  },
  {
    name: "Madurai — Mīnākṣī",
    region: "Tamil Nadu",
    x: 47,
    y: 84,
    kind: "temple",
    note: "Goddess-primary temple city where the Goddess, not her consort, holds sovereignty.",
    source: "Tiruviḷaiyāṭal Purāṇam",
  },
  {
    name: "Kollur — Mūkāmbikā",
    region: "Karnataka / Kerala border",
    x: 42,
    y: 74,
    kind: "temple",
    note: "Śākta-Śaiva shrine drawing pilgrims from Kerala; associated with learning and music.",
    source: "Regional tradition",
  },
  {
    name: "Kolhāpur — Mahālakṣmī",
    region: "Maharashtra",
    x: 40,
    y: 62,
    kind: "pitha",
    note: "Named in several Pīṭha lists; a major western Goddess centre.",
    source: "Pīṭha lists (variable)",
  },
  {
    name: "Guhyeśvarī / Kathmandu",
    region: "Nepal",
    x: 62,
    y: 30,
    kind: "pitha",
    note: "Kathmandu Valley Śākta traditions with deep Hindu–Buddhist interweaving.",
    source: "Nepalese Tantric tradition",
  },
];

export const pithaNote =
  "Lists of Śakti Pīṭhas differ: the Devī Bhāgavata, the Kālikā Purāṇa, Tantric Pīṭhamālā texts and regional traditions give counts of 51, 52, 108 and more, and they do not agree on which sites belong. No single list is historically authoritative; each entry above names the tradition that claims it.";

export type Festival = {
  name: string;
  season: string;
  region: string;
  note: string;
  gradient: string;
};

export const festivals: Festival[] = [
  {
    name: "Vasanta Navarātri",
    season: "Spring (Caitra)",
    region: "North & West India",
    note: "The spring nine nights, closing near Rāma Navamī; in many regions the Goddess's 'original' Navarātri.",
    gradient: "var(--grad-lotus)",
  },
  {
    name: "Ambubachi Melā",
    season: "Monsoon (Āṣāḍha)",
    region: "Kāmākhyā, Assam",
    note: "The temple closes for the Goddess's annual retreat, then reopens — fertility and the monsoon earth held together.",
    gradient: "var(--grad-mist)",
  },
  {
    name: "Durgā Pūjā / Śāradīya Navarātri",
    season: "Autumn (Āśvina)",
    region: "Bengal, Assam, Odisha, pan-India",
    note: "Clay images, pandals, dhāk drums; the Goddess as daughter visiting home, then given to the river.",
    gradient: "var(--grad-durga)",
  },
  {
    name: "Kālī Pūjā",
    season: "Autumn new moon (Kārtika)",
    region: "Bengal, Assam, Odisha",
    note: "Night worship on the darkest night of Dīpāvalī season — lamps against the new moon.",
    gradient: "var(--grad-kali)",
  },
  {
    name: "Lalitā Pañcamī & Navarātri Śrīvidyā rites",
    season: "Autumn",
    region: "South India, Maharashtra",
    note: "Śrī Chakra pūjā and Lalitā Sahasranāma recitation intensify through the nine nights.",
    gradient: "var(--grad-tripura)",
  },
  {
    name: "Dīpāvalī — Kamalā / Lakṣmī",
    season: "Late autumn",
    region: "Pan-India",
    note: "Abundance as a face of the Goddess; lamp-rows as the domestication of cosmic light.",
    gradient: "var(--grad-lotus)",
  },
];
