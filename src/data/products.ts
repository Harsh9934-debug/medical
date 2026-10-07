export interface Product {
  id: string;
  name: string;
  genericName: string;
  category: string;
  form: string;
  packaging: string;
  packingType: string;
  division: string;
  minQty: number;
  description: string;
  indications: string[];
  dosage: string;
  featured?: boolean;
}

export const PRODUCT_CATEGORIES = [
  "All Categories",
  "Pain Management & Orthopaedics",
  "Gastroenterology & Antacids",
  "Antibiotics & Antimicrobials",
  "Paediatrics",
  "Respiratory, Cough & Cold",
  "Neuro-Psychiatry",
  "Nutraceuticals & Haematinic"
];

export const PRODUCT_FORMS = [
  "All Forms",
  "Tablets",
  "Capsules",
  "Dry Syrup",
  "Syrup & Suspensions",
  "Ointment & Cream",
  "Drops & Nanoshot"
];

export const PRODUCTS: Product[] = [
  // 1. INAC-SP (Photo 1) & PEPS DSR (Photo 2)
  {
    id: "inac-sp",
    name: "INAC-SP",
    genericName: "Aceclofenac + Paracetamol + Serratiopeptidase",
    category: "Pain Management & Orthopaedics",
    form: "Tablets",
    packaging: "10 x 10 Tablets",
    packingType: "Alu-Alu Box",
    division: "Incredible Medicare Therapeutics",
    minQty: 1,
    description: "Triple-action anti-inflammatory formula with proteolytic enzyme Serratiopeptidase to accelerate tissue repair and eradicate deep-seated edema and inflammatory exudate.",
    indications: ["Severe Inflammation", "Dental Surgery Edema", "Bone Fracture Swelling", "Spondylitis"],
    dosage: "One tablet twice daily after meals",
    featured: true
  },
  {
    id: "peps-dsr",
    name: "PEPS DSR",
    genericName: "Pantoprazole + Domperidone",
    category: "Gastroenterology & Antacids",
    form: "Capsules",
    packaging: "10 x 10 Capsules",
    packingType: "Alu-Alu Box",
    division: "Incredible Medicare Therapeutics",
    minQty: 1,
    description: "Targeted gastro-resistant proton pump inhibitor with sustained-release prokinetic for persistent acid reflux, GERD, nausea, dyspepsia, and peptic ulceration.",
    indications: ["Gastroesophageal Reflux Disease (GERD)", "Erosive Esophagitis", "Non-ulcer Dyspepsia", "NSAID Gastropathy"],
    dosage: "One capsule daily before breakfast",
    featured: true
  },

  // 2. Antibiotics & Antimicrobials
  {
    id: "g-mox-625-cv",
    name: "G-MOX 625 CV",
    genericName: "Amoxicillin 500 mg + Clavulanic Acid 125 mg",
    category: "Antibiotics & Antimicrobials",
    form: "Tablets",
    packaging: "10 x 1 x 6 Tablets",
    packingType: "Alu-Alu Strip",
    division: "Incredible Medicare Therapeutics",
    minQty: 1,
    description: "Gold-standard broad-spectrum penicillin co-formulated with beta-lactamase inhibitor Clavulanic Acid to overcome bacterial resistance.",
    indications: ["Otitis Media", "Sinusitis", "Lower Respiratory Infections", "Surgical Prophylaxis"],
    dosage: "One tablet twice daily with meals",
    featured: true
  },
  {
    id: "c-fix-200",
    name: "C-FIX 200",
    genericName: "Cefixime 200 mg",
    category: "Antibiotics & Antimicrobials",
    form: "Tablets",
    packaging: "10 x 10 Tablets",
    packingType: "Alu-Alu Box",
    division: "Incredible Medicare Therapeutics",
    minQty: 1,
    description: "Third-generation cephalosporin providing potent beta-lactamase stability for treatment of uncomplicated urinary tract infections, otitis media, and typhoid fever.",
    indications: ["Urinary Tract Infections", "Typhoid Fever", "Pharyngitis & Tonsillitis", "Acute Bronchitis"],
    dosage: "One tablet every 12 hours",
    featured: true
  },
  {
    id: "c-pod-200",
    name: "C-POD 200",
    genericName: "Cefpodoxime 200 mg",
    category: "Antibiotics & Antimicrobials",
    form: "Tablets",
    packaging: "10 x 10 Tablets",
    packingType: "Alu-Alu Box",
    division: "Incredible Medicare Therapeutics",
    minQty: 1,
    description: "Advanced oral 3rd generation cephalosporin with broad antibacterial spectrum and excellent bioavailability across adult and adolescent populations.",
    indications: ["Severe Pharyngitis", "Acute Maxillary Sinusitis", "Skin Structure Infections", "UTI"],
    dosage: "One tablet every 12 hours",
    featured: true
  },
  {
    id: "cpod-o",
    name: "CPOD-O",
    genericName: "Cefpodoxime + Ofloxacin",
    category: "Antibiotics & Antimicrobials",
    form: "Tablets",
    packaging: "10 x 10 Tablets",
    packingType: "Alu-Alu Box",
    division: "Incredible Medicare Therapeutics",
    minQty: 1,
    description: "Synergistic broad-spectrum combination of 3rd generation cephalosporin and fluoroquinolone for empirical treatment of severe mixed bacterial infections.",
    indications: ["Enteric Fever / Typhoid", "Complicated RTIs", "Pelvic Infections", "Resistant UTIs"],
    dosage: "One tablet twice daily",
    featured: true
  },
  {
    id: "cefrux-250",
    name: "CEFRUX 250",
    genericName: "Cefuroxime 250 mg",
    category: "Antibiotics & Antimicrobials",
    form: "Tablets",
    packaging: "10 x 10 Tablets",
    packingType: "Alu-Alu Box",
    division: "Incredible Medicare Therapeutics",
    minQty: 1,
    description: "Second-generation cephalosporin with excellent bactericidal activity against penicillinase-producing staphylococci and gram-negative respiratory pathogens.",
    indications: ["Acute Bacterial Sinusitis", "Lyme Disease", "Tonsillitis", "Uncomplicated Skin Infections"],
    dosage: "One tablet twice daily after food",
    featured: false
  },
  {
    id: "cefrux-500",
    name: "CEFRUX 500",
    genericName: "Cefuroxime 500 mg",
    category: "Antibiotics & Antimicrobials",
    form: "Tablets",
    packaging: "10 x 10 Tablets",
    packingType: "Alu-Alu Box",
    division: "Incredible Medicare Therapeutics",
    minQty: 1,
    description: "High-potency second-generation cephalosporin for severe respiratory, genitourinary, and soft tissue bacterial infections with verified tissue penetration.",
    indications: ["Community-Acquired Pneumonia", "Exacerbations of Chronic Bronchitis", "Pyelonephritis", "Severe ENT Infections"],
    dosage: "One tablet twice daily after meals",
    featured: true
  },
  {
    id: "azithor-250",
    name: "AZITHOR 250",
    genericName: "Azithromycin 250 mg",
    category: "Antibiotics & Antimicrobials",
    form: "Tablets",
    packaging: "10 x 6 Tablets",
    packingType: "Blister Box",
    division: "Incredible Medicare Therapeutics",
    minQty: 1,
    description: "Broad-spectrum azalide macrolide for moderate bacterial infections, pediatric step-down therapy, and atypical pathogens.",
    indications: ["Streptococcal Pharyngitis", "Mild Bronchitis", "Genital Ulcer Disease", "Trachoma"],
    dosage: "One tablet once daily 1 hour before or 2 hours after food",
    featured: false
  },
  {
    id: "azithor-500",
    name: "AZITHOR 500",
    genericName: "Azithromycin 500 mg",
    category: "Antibiotics & Antimicrobials",
    form: "Tablets",
    packaging: "3 x 10 Tablets",
    packingType: "Blister Box",
    division: "Incredible Medicare Therapeutics",
    minQty: 1,
    description: "Macrolide antibiotic active against susceptible Gram-positive and atypical pathogens for upper and lower respiratory tract infections, skin infections, and genital tract diseases.",
    indications: ["Community Acquired Pneumonia", "Bronchitis", "Sinusitis", "Skin & Soft Tissue Infections"],
    dosage: "One tablet once daily 1 hour before or 2 hours after meals",
    featured: true
  },
  {
    id: "g-mox-500",
    name: "G-MOX 500",
    genericName: "Amoxicillin 500 mg",
    category: "Antibiotics & Antimicrobials",
    form: "Capsules",
    packaging: "10 x 10 Capsules",
    packingType: "Blister Box",
    division: "Incredible Medicare Therapeutics",
    minQty: 1,
    description: "Broad-spectrum bactericidal aminopenicillin effective against sensitive Gram-positive and Gram-negative organisms in systemic infections.",
    indications: ["Respiratory Tract Infections", "Skin & Soft Tissue Infections", "Dental Abscess", "ENT Infections"],
    dosage: "One capsule thrice daily or as directed",
    featured: false
  },
  {
    id: "g-mox-250",
    name: "G-MOX 250",
    genericName: "Amoxicillin 250 mg",
    category: "Antibiotics & Antimicrobials",
    form: "Capsules",
    packaging: "10 x 10 Capsules",
    packingType: "Blister Box",
    division: "Incredible Medicare Therapeutics",
    minQty: 1,
    description: "Standard aminopenicillin capsule for mild to moderate bacterial infections and step-down oral antimicrobial therapy.",
    indications: ["Mild RTIs", "Bacterial Pharyngitis", "Uncomplicated UTI", "Dental Infections"],
    dosage: "One capsule every 8 hours",
    featured: false
  },

  // 3. Pain Management & Orthopaedics
  {
    id: "orthox-th-4",
    name: "ORTHOX TH 4",
    genericName: "Aceclofenac + Thiocolchicoside 4 mg",
    category: "Pain Management & Orthopaedics",
    form: "Tablets",
    packaging: "10 x 10 Tablets",
    packingType: "Alu-Alu Box",
    division: "Incredible Medicare Therapeutics",
    minQty: 1,
    description: "Targeted GABA-mimetic muscle relaxant with non-sedating profile combined with Aceclofenac for persistent muscular contraction and vertebral disorders.",
    indications: ["Acute Back Pain", "Vertebral Contractures", "Sciatica", "Torticollis"],
    dosage: "One tablet morning and evening",
    featured: true
  },
  {
    id: "orthox-th-8",
    name: "ORTHOX TH 8",
    genericName: "Aceclofenac + Thiocolchicoside 8 mg",
    category: "Pain Management & Orthopaedics",
    form: "Tablets",
    packaging: "10 x 10 Tablets",
    packingType: "Alu-Alu Box",
    division: "Incredible Medicare Therapeutics",
    minQty: 1,
    description: "Higher potency muscle relaxant and analgesic combination for severe acute muscle spasms, lumbosacral pain, and post-traumatic spasm.",
    indications: ["Severe Muscle Spasm", "Lumbago", "Ankylosing Spondylitis", "Acute Myalgia"],
    dosage: "One tablet once or twice daily",
    featured: false
  },
  {
    id: "orthox-gel",
    name: "ORTHOX GEL",
    genericName: "Aceclofenac + Thiocolchicoside-based gel",
    category: "Pain Management & Orthopaedics",
    form: "Ointment & Cream",
    packaging: "30 gm Tube",
    packingType: "Lami Tube in Monocarton",
    division: "Incredible Medicare Therapeutics",
    minQty: 1,
    description: "Deep penetrating topical gel delivering rapid localized relief from muscle spasms, sprains, tendinitis, and joint stiffness.",
    indications: ["Muscular Sprains", "Stiff Neck", "Joint Inflammation", "Sports Injuries"],
    dosage: "Apply gently to affected area 3-4 times daily",
    featured: true
  },
  {
    id: "rextone-mr",
    name: "REXTONE MR",
    genericName: "Aceclofenac + Chlorzoxazone",
    category: "Pain Management & Orthopaedics",
    form: "Tablets",
    packaging: "10 x 10 Tablets",
    packingType: "Alu-Alu Box",
    division: "Incredible Medicare Therapeutics",
    minQty: 1,
    description: "Muscle relaxant and analgesic formulation relieving muscle spasm, tension headaches, cervical spondylosis, and traumatic muscular strain.",
    indications: ["Muscle Spasms", "Lumbago", "Cervical Spondylosis", "Stiff Neck"],
    dosage: "One tablet twice daily or as directed",
    featured: false
  },

  // 4. Paediatrics & Dry Syrups
  {
    id: "c-fix-ds-50-dry",
    name: "C-FIX DS 50 DRY SYRUP",
    genericName: "Cefixime 50 mg",
    category: "Paediatrics",
    form: "Dry Syrup",
    packaging: "30 ml with Sterile Water",
    packingType: "HDPE Bottle with Sterile Ampoule",
    division: "Incredible Medicare Therapeutics",
    minQty: 1,
    description: "Delicious strawberry-flavored pediatric dry suspension with high stability reconstitution for middle ear infections, tonsillitis, and childhood pneumonia.",
    indications: ["Pediatric Otitis Media", "Childhood Typhoid", "Streptococcal Pharyngitis", "Pediatric UTI"],
    dosage: "8mg/kg/day in two divided doses",
    featured: false
  },
  {
    id: "c-fix-ds-100-dry",
    name: "C-FIX DS 100 DRY SYRUP",
    genericName: "Cefixime 100 mg",
    category: "Paediatrics",
    form: "Dry Syrup",
    packaging: "30 ml with Sterile Water",
    packingType: "HDPE Bottle with Sterile Ampoule",
    division: "Incredible Medicare Therapeutics",
    minQty: 1,
    description: "Double strength third-generation cephalosporin dry suspension for older pediatric patients and resistant childhood infections.",
    indications: ["Pediatric Enteric Fever", "Acute Otitis Media", "Bacterial Pneumonia", "Lower RTIs"],
    dosage: "As directed by pediatrician",
    featured: false
  },
  {
    id: "c-pod-ds-50-dry",
    name: "C-POD DS 50 DRY SYRUP",
    genericName: "Cefpodoxime 50 mg",
    category: "Paediatrics",
    form: "Dry Syrup",
    packaging: "30 ml with Sterile Water",
    packingType: "HDPE Bottle with Sterile Ampoule",
    division: "Incredible Medicare Therapeutics",
    minQty: 1,
    description: "Pleasantly flavored pediatric Cefpodoxime suspension offering high bioavailability for childhood ear, nose, throat, and chest infections.",
    indications: ["Pediatric Tonsillopharyngitis", "Acute Sinusitis", "Skin Structure Infections", "UTIs"],
    dosage: "10mg/kg/day in two divided doses",
    featured: false
  },
  {
    id: "c-pod-ds-100-dry",
    name: "C-POD DS 100 DRY SYRUP",
    genericName: "Cefpodoxime 100 mg",
    category: "Paediatrics",
    form: "Dry Syrup",
    packaging: "30 ml with Sterile Water",
    packingType: "HDPE Bottle with Sterile Ampoule",
    division: "Incredible Medicare Therapeutics",
    minQty: 1,
    description: "Concentrated pediatric cephalosporin suspension for older children ensuring small dosing volume and high child compliance.",
    indications: ["Severe Pediatric RTIs", "Bronchopneumonia", "Acute Otitis Media", "Complicated Infections"],
    dosage: "As directed by pediatrician",
    featured: false
  },
  {
    id: "g-mox-ds-dry",
    name: "G-MOX DS DRY SYRUP",
    genericName: "Amoxicillin Double Strength",
    category: "Paediatrics",
    form: "Dry Syrup",
    packaging: "30 ml with Sterile Water",
    packingType: "HDPE Bottle with Sterile Ampoule",
    division: "Incredible Medicare Therapeutics",
    minQty: 1,
    description: "Double-strength amoxicillin pediatric suspension formulated for superior palatability and rapid eradication of susceptible childhood bacteria.",
    indications: ["Pediatric Chest Infections", "Tonsillitis", "Ear Infections", "Dental Abscess"],
    dosage: "20-40 mg/kg/day in divided doses",
    featured: false
  },
  {
    id: "g-mox-cv-dry",
    name: "G-MOX CV DRY SYRUP",
    genericName: "Amoxicillin + Clavulanic Acid",
    category: "Paediatrics",
    form: "Dry Syrup",
    packaging: "30 ml with Sterile Water",
    packingType: "HDPE Bottle with Sterile Ampoule",
    division: "Incredible Medicare Therapeutics",
    minQty: 1,
    description: "Co-amoxiclav pediatric dry syrup for beta-lactamase producing strains causing recurrent or non-responsive childhood infections.",
    indications: ["Recurrent Otitis Media", "Childhood Sinusitis", "Bacterial Bronchitis", "Soft Tissue Infections"],
    dosage: "25-45 mg/kg/day based on amoxicillin component",
    featured: true
  },

  // 5. Respiratory, Cough & Cold
  {
    id: "cold-max-syrup",
    name: "COLD MAX SYRUP",
    genericName: "Cold & Cough formulation",
    category: "Respiratory, Cough & Cold",
    form: "Syrup & Suspensions",
    packaging: "100 ml Bottle",
    packingType: "Amber Bottle with Dose Cap",
    division: "Incredible Medicare Therapeutics",
    minQty: 1,
    description: "Comprehensive cold and cough formulation combining nasal decongestant, antihistamine, and antipyretic for fast relief from common cold symptoms.",
    indications: ["Common Cold", "Nasal Congestion", "Sneezing & Runny Nose", "Fever & Bodyache"],
    dosage: "5-10 ml thrice daily or as directed by physician",
    featured: true
  },
  {
    id: "coldex-tablet",
    name: "COLDEX TABLET",
    genericName: "Dextromethorphan + Phenylephrine + Caffeine",
    category: "Respiratory, Cough & Cold",
    form: "Tablets",
    packaging: "10 x 10 Tablets",
    packingType: "Blister Box",
    division: "Incredible Medicare Therapeutics",
    minQty: 1,
    description: "Non-drowsy multi-action tablet tackling persistent dry cough, nasal passage blockage, and cold-induced lethargy and headache.",
    indications: ["Dry Irritating Cough", "Stuffy Nose", "Sinus Headache", "Cold Fatigue"],
    dosage: "One tablet two to three times daily",
    featured: false
  },
  {
    id: "chestthor-syrup",
    name: "CHESTTHOR SYRUP",
    genericName: "phenylephrine hcl +paracetamol aceclofenac+ cetirizine + caffeine",
    category: "Respiratory, Cough & Cold",
    form: "Syrup & Suspensions",
    packaging: "100 ml Bottle",
    packingType: "Amber Bottle with Dose Cap",
    division: "Incredible Medicare Therapeutics",
    minQty: 1,
    description: "Advanced multi-action cough and cold syrup formulated to relieve severe chest congestion, sore throat inflammation, pyrexia, and mucosal swelling.",
    indications: ["Severe Chest Cold", "Inflammatory Sore Throat", "Sinus Congestion with Pyrexia", "Allergic Cough"],
    dosage: "10 ml twice daily or as directed",
    featured: true
  },

  // 6. Neuro-Psychiatry
  {
    id: "neromin",
    name: "NEROMIN",
    genericName: "pregabalin +methylcobalamin",
    category: "Neuro-Psychiatry",
    form: "Capsules",
    packaging: "10 x 10 Capsules",
    packingType: "Alu-Alu Box",
    division: "Incredible Neuro & Psychiatric Care",
    minQty: 1,
    description: "Dual neurotrophic and neuromodulator combination supporting myelin restoration and calming hyperexcited nerves in peripheral neuropathies.",
    indications: ["Diabetic Peripheral Neuropathy", "Sciatica", "Post-herpetic Neuralgia", "Neuropathic Paresthesia"],
    dosage: "One capsule once or twice daily after food",
    featured: false
  },
  {
    id: "neromin-plus",
    name: "NEROMIN PLUS",
    genericName: "pregabalin +methylcobalamin+ nortriptyline",
    category: "Neuro-Psychiatry",
    form: "Tablets",
    packaging: "10 x 10 Tablets",
    packingType: "Alu-Alu Box",
    division: "Incredible Neuro & Psychiatric Care",
    minQty: 1,
    description: "Comprehensive neuropathic pain relief formula combining voltage-gated calcium channel modulator, bioactive B12, and tricyclic agent for refractory chronic nerve pain.",
    indications: ["Refractory Diabetic Neuropathy", "Chronic Radiculopathy", "Fibromyalgia", "Spinal Nerve Pain"],
    dosage: "One tablet once daily at bedtime",
    featured: true
  },

  // 7. Nutraceuticals & Haematinic
  {
    id: "v-d3-nano-shot",
    name: "V-D3 NANO SHOT",
    genericName: "cholecalciferol 60000 iu",
    category: "Nutraceuticals & Haematinic",
    form: "Drops & Nanoshot",
    packaging: "4 x 5 ml Sugar-Free Shots",
    packingType: "Ready-to-Drink Mono Carton",
    division: "Incredible Nutraceuticals & Wellness",
    minQty: 1,
    description: "Nano-emulsion liquid Vitamin D3 formulation offering up to 3x higher bioabsorption compared to conventional oil softgels, specifically designed for rapid restoration of Vitamin D levels.",
    indications: ["Severe Hypovitaminosis D", "Osteomalacia", "Immune Depletion", "Musculoskeletal Weakness"],
    dosage: "One bottle (5ml) weekly for 8 weeks or as directed",
    featured: true
  }
];
