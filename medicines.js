// 50+ Popular Indian Medicines Database
const medicinesData = [
  // --- PAIN & FEVER ---
  {
    brand: "Dolo 650",
    category: "pain",
    salt: "Paracetamol (650mg)",
    type: "OTC",
    uses: "Tez bukhaar, sar dard, sharir dard",
    genericName: "Paracetamol 650mg Generic",
    brandPrice: "₹34 / 15 tab",
    genericPrice: "₹12 (~65% Bachat)",
    warning: "24 ghante mein 4 se zyada na lein (liver safety)."
  },
  {
    brand: "Crocin Advance",
    category: "pain",
    salt: "Paracetamol Fast Release (500mg)",
    type: "OTC",
    uses: "Bukhaar aur aam sharirik thakan/dard",
    genericName: "Paracetamol 500mg Generic",
    brandPrice: "₹25 / 15 tab",
    genericPrice: "₹8 (~68% Bachat)",
    warning: "Khali pet li ja sakti hai, par overdose se bachein."
  },
  {
    brand: "Combiflam",
    category: "pain",
    salt: "Ibuprofen (400mg) + Paracetamol (325mg)",
    type: "OTC",
    uses: "Dant dard, gathiya, swelling ke sath dard",
    genericName: "Ibuprofen + Paracetamol Generic",
    brandPrice: "₹45 / 20 tab",
    genericPrice: "₹14 (~69% Bachat)",
    warning: "Khali pet na lein, acidity/ulcer ka risk hota hai."
  },
  {
    brand: "Zerodol-P",
    category: "pain",
    salt: "Aceclofenac (100mg) + Paracetamol (325mg)",
    type: "Prescription",
    uses: "Gardan/kamar dard, bone/joint swelling",
    genericName: "Aceclofenac + Paracetamol Generic",
    brandPrice: "₹72 / 10 tab",
    genericPrice: "₹18 (~75% Bachat)",
    warning: "Kidney ya heart patients doctor se puch kar lein."
  },
  {
    brand: "Meftal-Spas",
    category: "pain",
    salt: "Mefenamic Acid (250mg) + Dicyclomine (10mg)",
    type: "Prescription",
    uses: "Pet marod, menstrual periods ka dard",
    genericName: "Mefenamic + Dicyclomine Generic",
    brandPrice: "₹52 / 10 tab",
    genericPrice: "₹16 (~70% Bachat)",
    warning: "Regular use na karein, sirf tezz cramp mein doctor ki slah se."
  },
  {
    brand: "Cyclopam",
    category: "pain",
    salt: "Dicyclomine (20mg) + Paracetamol (500mg)",
    type: "Prescription",
    uses: "Pet ke aenthan aur intestinal colic pain",
    genericName: "Dicyclomine + Paracetamol Generic",
    brandPrice: "₹60 / 10 tab",
    genericPrice: "₹15 (~75% Bachat)",
    warning: "Dry mouth ya halka chakkar aa sakta hai."
  },
  {
    brand: "Voveran 50",
    category: "pain",
    salt: "Diclofenac Sodium (50mg)",
    type: "Prescription",
    uses: "Arthritis, injury ka dard, chot ki sujan",
    genericName: "Diclofenac 50mg Generic",
    brandPrice: "₹95 / 15 tab",
    genericPrice: "₹12 (~87% Bachat)",
    warning: "Gastric ulcer wale marizon ke liye hanikarak hai."
  },

  // --- ACIDITY, GAS & STOMACH ---
  {
    brand: "Pan-D",
    category: "stomach",
    salt: "Pantoprazole (40mg) + Domperidone (30mg)",
    type: "Prescription",
    uses: "Ghabrahat ke sath gas, acidity, ulti aana",
    genericName: "Pantoprazole + Domperidone Generic",
    brandPrice: "₹190 / 15 tab",
    genericPrice: "₹45 (~76% Bachat)",
    warning: "Subah subah bina kuch khaye (khali pet) lein."
  },
  {
    brand: "Pantocid 40",
    category: "stomach",
    salt: "Pantoprazole (40mg)",
    type: "Prescription",
    uses: "Seene ki jalan, stomach acid, ulcer",
    genericName: "Pantoprazole 40mg Generic",
    brandPrice: "₹160 / 15 tab",
    genericPrice: "₹28 (~82% Bachat)",
    warning: "Khane se aadha ghanta pehle lein."
  },
  {
    brand: "Omez 20",
    category: "stomach",
    salt: "Omeprazole (20mg)",
    type: "Prescription",
    uses: "Hyper-acidity, reflux, pet ki jalan",
    genericName: "Omeprazole 20mg Generic",
    brandPrice: "₹65 / 15 cap",
    genericPrice: "₹14 (~78% Bachat)",
    warning: "Capsule ko chabayein nahi, paani se nigal lein."
  },
  {
    brand: "Rantac 150",
    category: "stomach",
    salt: "Ranitidine (150mg)",
    type: "Prescription",
    uses: "Halki acidity aur gas ka pressure",
    genericName: "Ranitidine 150mg Generic",
    brandPrice: "₹42 / 30 tab",
    genericPrice: "₹12 (~71% Bachat)",
    warning: "Pregnancy ya liver problem mein doctor ki salah zaroori."
  },
  {
    brand: "Digene Gel",
    category: "stomach",
    salt: "Magnesium + Aluminium Hydroxide",
    type: "OTC",
    uses: "Instant heartburn relief, pet ka phoolna",
    genericName: "Antacid Oral Suspension Generic",
    brandPrice: "₹140 / 200ml",
    genericPrice: "₹45 (~68% Bachat)",
    warning: "Peene se pehle bottle ache se shake karein."
  },
  {
    brand: "Gelusil MPS",
    category: "stomach",
    salt: "Aluminium Hydroxide + Dimethicone",
    type: "OTC",
    uses: "Gas ke bul-bule, khatte dakar, jalan",
    genericName: "Antacid Dimethicone Generic",
    brandPrice: "₹130 / 200ml",
    genericPrice: "₹40 (~69% Bachat)",
    warning: "Zyada lene par kabz (constipation) ho sakta hai."
  },
  {
    brand: "Eldoper",
    category: "stomach",
    salt: "Loperamide (2mg)",
    type: "Prescription",
    uses: "Achanak loose motions (dast) ko rokna",
    genericName: "Loperamide 2mg Generic",
    brandPrice: "₹25 / 10 cap",
    genericPrice: "₹6 (~76% Bachat)",
    warning: "Agar dast mein khoon ya bukhar ho toh bilkul na lein."
  },
  {
    brand: "Sporlac-DS",
    category: "stomach",
    salt: "Lactic Acid Bacillus (Probiotic)",
    type: "OTC",
    uses: "Dast ke baad pet ke ache bacteria lautana",
    genericName: "Probiotic Spores Generic",
    brandPrice: "₹135 / 20 tab",
    genericPrice: "₹40 (~70% Bachat)",
    warning: "Antibiotic dawaiyon ke sath lena faydemand hota hai."
  },
  {
    brand: "Ondem 4",
    category: "stomach",
    salt: "Ondansetron (4mg)",
    type: "Prescription",
    uses: "Ulti (vomiting) aur matli ko turant rokna",
    genericName: "Ondansetron 4mg Generic",
    brandPrice: "₹55 / 10 tab",
    genericPrice: "₹11 (~80% Bachat)",
    warning: "Muh mein rakhte hi ghulne wali MD tablet hoti hai."
  },
  {
    brand: "Electral ORS",
    category: "stomach",
    salt: "WHO Rehydration Salts",
    type: "OTC",
    uses: "Dehydration, dast-ulti se kamzori",
    genericName: "ORS Generic Jan Aushadhi",
    brandPrice: "₹23 / packet",
    genericPrice: "₹8 (~65% Bachat)",
    warning: "1 packet pure 1 litre saaf paani mein hi gholein."
  },
  {
    brand: "Dulcoflex 5mg",
    category: "stomach",
    salt: "Bisacodyl (5mg)",
    type: "OTC",
    uses: "Kabz (constipation) se raahat",
    genericName: "Bisacodyl 5mg Generic",
    brandPrice: "₹15 / 10 tab",
    genericPrice: "₹5 (~66% Bachat)",
    warning: "Raat ko sone se pehle lein; aadat na banayein."
  },
  {
    brand: "Cremaffin Syrup",
    category: "stomach",
    salt: "Liquid Paraffin + Milk of Magnesia",
    type: "OTC",
    uses: "Purani kabz, hard stool ko soft karna",
    genericName: "Laxative Emulsion Generic",
    brandPrice: "₹280 / 225ml",
    genericPrice: "₹85 (~70% Bachat)",
    warning: "Raat ko paani ke sath lein, continuous use avoid karein."
  },

  // --- ALLERGY, COLD & COUGH ---
  {
    brand: "Cetirizine 10",
    category: "allergy",
    salt: "Cetirizine HCl (10mg)",
    type: "OTC",
    uses: "Chheenk, behti naak, skin khujli",
    genericName: "Cetirizine 10mg Generic",
    brandPrice: "₹22 / 10 tab",
    genericPrice: "₹5 (~77% Bachat)",
    warning: "Ise lene ke baad gaadi ya heavy machinery na chalayein."
  },
  {
    brand: "Allegra 120",
    category: "allergy",
    salt: "Fexofenadine (120mg)",
    type: "OTC",
    uses: "Non-drowsy allergy relief, skin hives",
    genericName: "Fexofenadine 120mg Generic",
    brandPrice: "₹218 / 10 tab",
    genericPrice: "₹48 (~78% Bachat)",
    warning: "Neend nahi aati, par citrus juice ke sath na lein."
  },
  {
    brand: "Montair-LC",
    category: "allergy",
    salt: "Montelukast (10mg) + Levocetirizine (5mg)",
    type: "Prescription",
    uses: "Dama (asthma) allergy, seasonal allergy, band naak",
    genericName: "Montelukast + Levocetirizine Generic",
    brandPrice: "₹240 / 10 tab",
    genericPrice: "₹50 (~79% Bachat)",
    warning: "Raat ko sone se pehle lena behtar hota hai."
  },
  {
    brand: "Cheston Cold",
    category: "allergy",
    salt: "Cetirizine + Paracetamol + Phenylephrine",
    type: "Prescription",
    uses: "Zukham ke sath sar dard aur band naak",
    genericName: "Cold & Congestion Generic",
    brandPrice: "₹55 / 10 tab",
    genericPrice: "₹18 (~67% Bachat)",
    warning: "High BP aur heart patients doctor se bina puche na lein."
  },
  {
    brand: "Sinarest",
    category: "allergy",
    salt: "Chlorpheniramine + Paracetamol + Phenylephrine",
    type: "OTC",
    uses: "Common cold, halka bukhaar aur band naak",
    genericName: "Paracetamol Phenylephrine Generic",
    brandPrice: "₹65 / 10 tab",
    genericPrice: "₹20 (~69% Bachat)",
    warning: "Neend aane ka asar rehta hai."
  },
  {
    brand: "Ascoril-D Plus",
    category: "allergy",
    salt: "Dextromethorphan + Phenylephrine + CPM",
    type: "Prescription",
    uses: "Sookhi khansi (dry cough), gale mein kharash",
    genericName: "Dry Cough Syrup Generic",
    brandPrice: "₹140 / 100ml",
    genericPrice: "₹45 (~68% Bachat)",
    warning: "Balgum wali khansi mein iska use na karein."
  },
  {
    brand: "Grilinctus-BM",
    category: "allergy",
    salt: "Terbutaline + Bromhexine",
    type: "Prescription",
    uses: "Balgum wali geeli khansi (wet cough)",
    genericName: "Cough Expectorant Generic",
    brandPrice: "₹120 / 100ml",
    genericPrice: "₹38 (~68% Bachat)",
    warning: "Dil ki dhadkan tez (palpitation) ho sakti hai."
  },
  {
    brand: "Otrivin Nasal Spray",
    category: "allergy",
    salt: "Xylometazoline (0.1%)",
    type: "OTC",
    uses: "2 minute mein band naak kholna",
    genericName: "Xylometazoline Nasal Drops Generic",
    brandPrice: "₹110 / bottle",
    genericPrice: "₹35 (~68% Bachat)",
    warning: "Lagataar 5 din se zyada use na karein (dependence risk)."
  },
  {
    brand: "Avil 25",
    category: "allergy",
    salt: "Pheniramine Maleate (25mg)",
    type: "Prescription",
    uses: "Tezz khujli, keeray ke kaatne par allergy",
    genericName: "Pheniramine 25mg Generic",
    brandPrice: "₹12 / 15 tab",
    genericPrice: "₹4 (~66% Bachat)",
    warning: "Kaafi zyada neend aur susti laati hai."
  },

  // --- ANTIBIOTICS & INFECTIONS (Prescription Only) ---
  {
    brand: "Augmentin 625 Duo",
    category: "infection",
    salt: "Amoxicillin (500mg) + Clavulanic Acid (125mg)",
    type: "Prescription",
    uses: "Chest infection, daant ka infection, foda-funsi",
    genericName: "Amoxy-Clav 625 Jan Aushadhi",
    brandPrice: "₹205 / 10 tab",
    genericPrice: "₹65 (~68% Bachat)",
    warning: "Antibiotic course 5 din poora karein, beech mein na rokein."
  },
  {
    brand: "Azithral 500",
    category: "infection",
    salt: "Azithromycin (500mg)",
    type: "Prescription",
    uses: "Gale ka infection, tonsils, chest infection",
    genericName: "Azithromycin 500mg Generic",
    brandPrice: "₹130 / 5 tab",
    genericPrice: "₹42 (~67% Bachat)",
    warning: "Din mein sirf 1 baar, roz fixed samay par lein."
  },
  {
    brand: "Taxim-O 200",
    category: "infection",
    salt: "Cefixime (200mg)",
    type: "Prescription",
    uses: "Typhoid, UTI (urine infection), respiratory infection",
    genericName: "Cefixime 200mg Generic",
    brandPrice: "₹115 / 10 tab",
    genericPrice: "₹35 (~70% Bachat)",
    warning: "Khane ke sath lein, pet kharab hone se bachta hai."
  },
  {
    brand: "Cifran 500",
    category: "infection",
    salt: "Ciprofloxacin (500mg)",
    type: "Prescription",
    uses: "Pet ka infection, severe loose motion with infection",
    genericName: "Ciprofloxacin 500mg Generic",
    brandPrice: "₹48 / 10 tab",
    genericPrice: "₹16 (~67% Bachat)",
    warning: "Doodh ya calcium supplements ke sath na lein."
  },
  {
    brand: "Zifi 200",
    category: "infection",
    salt: "Cefixime (200mg)",
    type: "Prescription",
    uses: "Bacterial fevers, gale ki soojan, ear infection",
    genericName: "Cefixime 200mg Generic",
    brandPrice: "₹110 / 10 tab",
    genericPrice: "₹35 (~68% Bachat)",
    warning: "Doctor ke bataye dino tak poora karein."
  },
  {
    brand: "Norflox-TZ",
    category: "infection",
    salt: "Norfloxacin (400mg) + Tinidazole (600mg)",
    type: "Prescription",
    uses: "Pet kharab, infectious dast, amoebiasis",
    genericName: "Norfloxacin + Tinidazole Generic",
    brandPrice: "₹115 / 10 tab",
    genericPrice: "₹28 (~75% Bachat)",
    warning: "Metallic taste muh mein aa sakta hai, paani khoob piyein."
  },
  {
    brand: "Itraconazole 200",
    category: "infection",
    salt: "Itraconazole (200mg)",
    type: "Prescription",
    uses: "Fungal infection, purana daad-khaj-khujli",
    genericName: "Itraconazole 200mg Generic",
    brandPrice: "₹280 / 10 cap",
    genericPrice: "₹75 (~73% Bachat)",
    warning: "Heavy khane ke turant baad lein, absorption acha hota hai."
  },

  // --- VITAMINS, MINERALS & SUPPLEMENTS ---
  {
    brand: "Becosules Z",
    category: "vitamins",
    salt: "B-Complex + Vitamin C + Zinc",
    type: "OTC",
    uses: "Muh ke chhale (mouth ulcers), thakan, immunity",
    genericName: "B-Complex with Zinc Generic",
    brandPrice: "₹58 / 20 cap",
    genericPrice: "₹18 (~69% Bachat)",
    warning: "Urine ka color halka peela hona normal hai."
  },
  {
    brand: "Shelcal 500",
    category: "vitamins",
    salt: "Calcium (500mg) + Vitamin D3 (250 IU)",
    type: "OTC",
    uses: "Haddiyon ki kamzori, joint pain, osteoporosis",
    genericName: "Calcium + Vit D3 Generic",
    brandPrice: "₹135 / 15 tab",
    genericPrice: "₹38 (~72% Bachat)",
    warning: "Dopehar ya raat ke khane ke baad paani se lein."
  },
  {
    brand: "Evion 400",
    category: "vitamins",
    salt: "Vitamin E (400mg)",
    type: "OTC",
    uses: "Muscle cramps, skin health, antioxidant",
    genericName: "Vitamin E 400mg Generic",
    brandPrice: "₹38 / 10 cap",
    genericPrice: "₹14 (~63% Bachat)",
    warning: "Overdose na karein, zaroorat se zyada na lein."
  },
  {
    brand: "Neurobion Forte",
    category: "vitamins",
    salt: "Vitamin B1 + B6 + B12",
    type: "OTC",
    uses: "Nerve pain, haath-pair sunn hona, jhanjhanahat",
    genericName: "Vitamin B12 Complex Generic",
    brandPrice: "₹42 / 30 tab",
    genericPrice: "₹15 (~64% Bachat)",
    warning: "Rozana 1 tablet khane ke baad lein."
  },
  {
    brand: "Limcee 500",
    category: "vitamins",
    salt: "Vitamin C (Ascorbic Acid 500mg)",
    type: "OTC",
    uses: "Skin glow, immunity badhana, cold se recovery",
    genericName: "Chewable Vitamin C Generic",
    brandPrice: "₹25 / 15 tab",
    genericPrice: "₹8 (~68% Bachat)",
    warning: "Ise chabakar khayein, nigle nahi."
  },
  {
    brand: "Supradyn Daily",
    category: "vitamins",
    salt: "Multivitamin + Multi-minerals + Trace Elements",
    type: "OTC",
    uses: "Daily energetic rehna, nutritional deficiency",
    genericName: "Daily Multivitamin Generic",
    brandPrice: "₹60 / 15 tab",
    genericPrice: "₹20 (~66% Bachat)",
    warning: "Khali pet na lein, halki matli ho sakti hai."
  },

  // --- FIRST AID, OINTMENTS & DROPS ---
  {
    brand: "Betadine 10% Ointment",
    category: "firstaid",
    salt: "Povidone Iodine (10% w/w)",
    type: "OTC",
    uses: "Chot, cut, ghaav par antiseptic lagana",
    genericName: "Povidone Iodine Ointment Generic",
    brandPrice: "₹130 / 20g",
    genericPrice: "₹35 (~73% Bachat)",
    warning: "Aankhon ke aas-paas na lagayein; iodine allergy wale bachein."
  },
  {
    brand: "Burnol Cream",
    category: "firstaid",
    salt: "Aminacrine HCl + Cetrimide",
    type: "OTC",
    uses: "Halka jalna (minor burn), skin chhilna",
    genericName: "Burn Antiseptic Cream Generic",
    brandPrice: "₹85 / 20g",
    genericPrice: "₹25 (~70% Bachat)",
    warning: "Pehle jali jagah par thanda paani daalein, fir lagayein."
  },
  {
    brand: "Soframycin Skin Cream",
    category: "firstaid",
    salt: "Framycetin Skin Cream (1%)",
    type: "OTC",
    uses: "Bacterial ghaav, fode-funsi, chot",
    genericName: "Framycetin Cream Generic",
    brandPrice: "₹62 / 30g",
    genericPrice: "₹20 (~68% Bachat)",
    warning: "Khati hui ya khuli skin par safai ke baad lagayein."
  },
  {
    brand: "Volini Gel",
    category: "firstaid",
    salt: "Diclofenac + Linseed Oil + Menthol",
    type: "OTC",
    uses: "Moch (sprain), kamar dard, joint stiffness",
    genericName: "Pain Relief Gel Generic Jan Aushadhi",
    brandPrice: "₹165 / 50g",
    genericPrice: "₹45 (~72% Bachat)",
    warning: "Malis tezz na karein, halke haath se lagayein."
  },
  {
    brand: "Ciplox Eye/Ear Drops",
    category: "firstaid",
    salt: "Ciprofloxacin (0.3%)",
    type: "Prescription",
    uses: "Aankh laal hona, infection, kaan mein dard",
    genericName: "Ciprofloxacin Eye Drops Generic",
    brandPrice: "₹20 / bottle",
    genericPrice: "₹7 (~65% Bachat)",
    warning: "Khulne ke 1 mahine baad bachi dawai phenk dein."
  },
  {
    brand: "Refresh Tears",
    category: "firstaid",
    salt: "Carboxymethylcellulose (0.5%)",
    type: "OTC",
    uses: "Computer screen se aankh sookhna (dry eyes)",
    genericName: "Lubricant Eye Drops Generic",
    brandPrice: "₹160 / 10ml",
    genericPrice: "₹50 (~68% Bachat)",
    warning: "Dropper ki tip ko haath se na chhuyein."
  },
  {
    brand: "Candid Dusting Powder",
    category: "firstaid",
    salt: "Clotrimazole (1%)",
    type: "OTC",
    uses: "Paseene se ghamori, jaanghon mein khujli/fungal",
    genericName: "Clotrimazole Powder Generic",
    brandPrice: "₹155 / 100g",
    genericPrice: "₹45 (~71% Bachat)",
    warning: "Nahane ke baad skin sukhakar lagayein."
  }
];