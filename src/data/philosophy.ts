export type PhilNode = {
  id: string;
  label: string;
  deva: string;
  x: number;
  y: number;
  gloss: string;
  detail: string;
  links: string[];
};

export const philNodes: PhilNode[] = [
  {
    id: "cit",
    label: "Consciousness",
    deva: "चित्",
    x: 50,
    y: 8,
    gloss: "Self-luminous awareness (cit / prakāśa).",
    detail:
      "In Trika and in Śrīvidyā's non-dual reading, consciousness is not a property of things but the light in which anything is anything at all. It does not become the world by changing; it manifests the world without loss.",
    links: ["shakti", "maya"],
  },
  {
    id: "shakti",
    label: "Śakti",
    deva: "शक्ति",
    x: 50,
    y: 28,
    gloss: "The power by which consciousness is self-aware and self-expressive.",
    detail:
      "Vimarśa — reflective self-awareness — is Śakti's philosophical name. Strong Śākta theology inverts the usual hierarchy: Śakti is not a faculty possessed by Śiva but the reality of which Śiva is the still aspect.",
    links: ["iccha", "jnana", "kriya", "manifest"],
  },
  {
    id: "iccha",
    label: "Desire",
    deva: "इच्छा",
    x: 22,
    y: 46,
    gloss: "Icchā-śakti: the leaning toward manifestation.",
    detail:
      "Not psychological craving but the first inclination within awareness that anything at all be. In Śrīvidyā it corresponds to a limb of the vidyā and a zone of the Śrī Chakra.",
    links: ["manifest"],
  },
  {
    id: "jnana",
    label: "Knowledge",
    deva: "ज्ञान",
    x: 50,
    y: 48,
    gloss: "Jñāna-śakti: the clarity in which what is willed becomes definite.",
    detail: "The differentiating power — the moment a formless leaning becomes a determinate 'this'.",
    links: ["manifest"],
  },
  {
    id: "kriya",
    label: "Action",
    deva: "क्रिया",
    x: 78,
    y: 46,
    gloss: "Kriyā-śakti: the enactment of what is known.",
    detail: "Ritual, mantra and yantra are treated as kriyā deliberately: practice is metaphysics performed.",
    links: ["manifest"],
  },
  {
    id: "maya",
    label: "Māyā",
    deva: "माया",
    x: 78,
    y: 26,
    gloss: "The power of measuring, limiting and appearing.",
    detail:
      "Śākta and Trika readings differ sharply from some Advaitin readings: māyā here is generally a real creative power of the Goddess, not sheer illusion. What is illusory is the sense of separation, not the world.",
    links: ["jiva"],
  },
  {
    id: "manifest",
    label: "Manifestation",
    deva: "अभिव्यक्ति",
    x: 50,
    y: 66,
    gloss: "Ābhāsa / sṛṣṭi: the shining-forth of the world.",
    detail:
      "Manifestation is described as expansion rather than fabrication: nothing is added to reality when a universe appears.",
    links: ["jiva"],
  },
  {
    id: "jiva",
    label: "Individual Experience",
    deva: "जीव",
    x: 26,
    y: 80,
    gloss: "The contracted knower — awareness taking itself to be one thing among many.",
    detail:
      "Bondage is described as forgetting, āṇava-mala: not a substance to be removed but a misrecognition to be undone.",
    links: ["moksha"],
  },
  {
    id: "moksha",
    label: "Liberation",
    deva: "मोक्ष",
    x: 68,
    y: 88,
    gloss: "Recognition (pratyabhijñā) rather than escape.",
    detail:
      "Many Śākta traditions describe liberation as living recognition, jīvanmukti, in which the world is not abandoned but read correctly — as Śakti. Others retain more dualist and devotional soteriologies. The disagreement is real.",
    links: [],
  },
];

export const tattvas: { name: string; deva: string; band: string; note: string }[] = [
  { name: "Śiva", deva: "शिव", band: "Pure", note: "Undivided light of awareness." },
  { name: "Śakti", deva: "शक्ति", band: "Pure", note: "Awareness aware of itself; bliss." },
  { name: "Sadāśiva", deva: "सदाशिव", band: "Pure", note: "'I am this' with 'this' still faint." },
  { name: "Īśvara", deva: "ईश्वर", band: "Pure", note: "'This am I' — the object side clarifies." },
  { name: "Śuddhavidyā", deva: "शुद्धविद्या", band: "Pure", note: "Balanced knowledge of unity-in-diversity." },
  { name: "Māyā", deva: "माया", band: "Limiting", note: "The power of measure and separation." },
  { name: "Kalā, Vidyā, Rāga, Kāla, Niyati", deva: "कञ्चुक", band: "Limiting", note: "The five sheaths: limited agency, knowledge, desire, time, order." },
  { name: "Puruṣa & Prakṛti", deva: "पुरुष प्रकृति", band: "Impure", note: "Experiencer and experienced as a pair." },
  { name: "Buddhi, Ahaṃkāra, Manas", deva: "अन्तःकरण", band: "Impure", note: "Intellect, I-sense, mind." },
  { name: "Jñānendriya & Karmendriya", deva: "इन्द्रिय", band: "Impure", note: "Five senses of knowing, five of acting." },
  { name: "Tanmātra", deva: "तन्मात्र", band: "Impure", note: "Subtle sound, touch, form, taste, smell." },
  { name: "Pañca Mahābhūta", deva: "महाभूत", band: "Impure", note: "Space, air, fire, water, earth." },
];

export const tattvaNote =
  "The thirty-six tattva scheme belongs to Trika Śaiva and allied Śākta systems. Sāṃkhya counts twenty-five; other Tantric schools order the categories differently. It is a map used by particular traditions, not a pan-Hindu consensus.";

export const chakras: {
  name: string;
  deva: string;
  place: string;
  petals: string;
  element: string;
  note: string;
}[] = [
  { name: "Mūlādhāra", deva: "मूलाधार", place: "Base", petals: "4", element: "Earth (pṛthvī)", note: "Support; in Śākta yoga the resting place described for kuṇḍalinī." },
  { name: "Svādhiṣṭhāna", deva: "स्वाधिष्ठान", place: "Pelvic", petals: "6", element: "Water (ap)", note: "Fluidity, generation." },
  { name: "Maṇipūra", deva: "मणिपूर", place: "Navel", petals: "10", element: "Fire (agni)", note: "Heat, digestion, assimilation." },
  { name: "Anāhata", deva: "अनाहत", place: "Heart", petals: "12", element: "Air (vāyu)", note: "The 'unstruck' sound; in many texts the seat of the interior guru." },
  { name: "Viśuddha", deva: "विशुद्ध", place: "Throat", petals: "16", element: "Space (ākāśa)", note: "Purification; speech." },
  { name: "Ājñā", deva: "आज्ञा", place: "Brow", petals: "2", element: "Mind (manas)", note: "Command; the meeting of currents." },
  { name: "Sahasrāra", deva: "सहस्रार", place: "Crown", petals: "1000", element: "Beyond element", note: "Often placed outside the chakra series proper; union." },
];

export const chakraNote =
  "The familiar seven-chakra model reached global circulation largely through the Ṣaṭ-cakra-nirūpaṇa (16th c.) and its 1918 English translation by John Woodroffe. Earlier Tantric texts describe systems of four, five, nine, twelve and more centres, with different names, elements and functions. Descriptions of the subtle body are religious and yogic models. They are not descriptions of anatomical structures, and nothing here is medical advice.";
