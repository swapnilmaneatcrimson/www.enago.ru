//subjectarea 1
function setOptions1(chosen)
{
var selbox1 = document.frmSubmit.specialization;

selbox1.options.length = 1;

if(document.frmSubmit.subsubject.value == "Other")
{
	document.frmSubmit.otherspecialization.disabled = false;
}
else
{
	document.frmSubmit.otherspecialization.disabled = true;
}
if (chosen == " ") {
selbox1.options[selbox1.options.length] = new Option('Please select the level',' ');
}

if (chosen == "Med-Alternative Medicine") {	
selbox1.options[selbox1.options.length] = new Option('Acupuncture','Acupuncture');	
selbox1.options[selbox1.options.length] = new Option('Alternative Medicine','Alternative Medicine');	
selbox1.options[selbox1.options.length] = new Option('Ayurveda','Ayurveda');	
selbox1.options[selbox1.options.length] = new Option('Biofeedback ','Biofeedback ');	
selbox1.options[selbox1.options.length] = new Option('Chiropractic medicine ','Chiropractic medicine ');	
selbox1.options[selbox1.options.length] = new Option('Herbalism ','Herbalism ');	
selbox1.options[selbox1.options.length] = new Option('Homeopathy ','Homeopathy ');	
selbox1.options[selbox1.options.length] = new Option('Hypnosis ','Hypnosis ');	
selbox1.options[selbox1.options.length] = new Option('Meditation ','Meditation ');	
selbox1.options[selbox1.options.length] = new Option('Naturopathy','Naturopathy');	
selbox1.options[selbox1.options.length] = new Option('Nutritional-based therapies','Nutritional-based therapies');	
selbox1.options[selbox1.options.length] = new Option('Traditional Chinese medicine ','Traditional Chinese medicine ');	
selbox1.options[selbox1.options.length] = new Option('Yoga ','Yoga ');	
selbox1.options[selbox1.options.length] = new Option('Other','Other');
} if (chosen == "Med-Dentistry") {	
selbox1.options[selbox1.options.length] = new Option('Endodontics','Endodontics');	
selbox1.options[selbox1.options.length] = new Option('General Dentistry','General Dentistry');	
selbox1.options[selbox1.options.length] = new Option('Oral & Maxillofacial Pathology','Oral & Maxillofacial Pathology');	
selbox1.options[selbox1.options.length] = new Option('Oral & Maxillofacial Surgery','Oral & Maxillofacial Surgery');	
selbox1.options[selbox1.options.length] = new Option('Orthodontics','Orthodontics');	
selbox1.options[selbox1.options.length] = new Option('Pediatric Dentistry','Pediatric Dentistry');	
selbox1.options[selbox1.options.length] = new Option('Periodontics','Periodontics');	
selbox1.options[selbox1.options.length] = new Option('Prosthodontics','Prosthodontics');	selbox1.options[selbox1.options.length] = new Option('Other','Other');
} if (chosen == "Med-Forensic Sciences") {	
selbox1.options[selbox1.options.length] = new Option('Forensic dentistry','Forensic dentistry');	
selbox1.options[selbox1.options.length] = new Option('Forensic psychiatry ','Forensic psychiatry ');	selbox1.options[selbox1.options.length] = new Option('Other','Other');
} if (chosen == "Med-Health management") {	
selbox1.options[selbox1.options.length] = new Option('Health information management','Health information management');	
selbox1.options[selbox1.options.length] = new Option('Healthcare policies/economics','Healthcare policies/economics');	
selbox1.options[selbox1.options.length] = new Option('Hospital management/administration','Hospital management/administration');	
selbox1.options[selbox1.options.length] = new Option('Public health management/administration','Public health management/administration');	selbox1.options[selbox1.options.length] = new Option('Other','Other');
} if (chosen == "Med-Medicine") {	
selbox1.options[selbox1.options.length] = new Option('Allergology','Allergology');	
selbox1.options[selbox1.options.length] = new Option('Anatomy','Anatomy');	
selbox1.options[selbox1.options.length] = new Option('Andrology','Andrology');	
selbox1.options[selbox1.options.length] = new Option('Anesthesiology','Anesthesiology');	
selbox1.options[selbox1.options.length] = new Option('Biomechanics','Biomechanics');	
selbox1.options[selbox1.options.length] = new Option('Biomedical Research (Experimental medicine)','Biomedical Research (Experimental medicine)');	
selbox1.options[selbox1.options.length] = new Option('Cardiac/Cardiovascular Surgery','Cardiac/Cardiovascular Surgery');	
selbox1.options[selbox1.options.length] = new Option('Cardiology','Cardiology');	
selbox1.options[selbox1.options.length] = new Option('Chest Medicine','Chest Medicine');	
selbox1.options[selbox1.options.length] = new Option('Clinical Microbiology','Clinical Microbiology');	
selbox1.options[selbox1.options.length] = new Option('Clinical/Anatomical Pathology','Clinical/Anatomical Pathology');	
selbox1.options[selbox1.options.length] = new Option('Colorectal/Intestinal Surgery','Colorectal/Intestinal Surgery');	
selbox1.options[selbox1.options.length] = new Option('Critical/Intensive Medicine','Critical/Intensive Medicine');	
selbox1.options[selbox1.options.length] = new Option('Dermatology','Dermatology');	
selbox1.options[selbox1.options.length] = new Option('Emergency Medicine','Emergency Medicine');	
selbox1.options[selbox1.options.length] = new Option('Emergency Surgery','Emergency Surgery');	
selbox1.options[selbox1.options.length] = new Option('Endocrinology','Endocrinology');	
selbox1.options[selbox1.options.length] = new Option('Epidemiology','Epidemiology');	
selbox1.options[selbox1.options.length] = new Option('Exercise Physiology','Exercise Physiology');	
selbox1.options[selbox1.options.length] = new Option('Gastroenterology','Gastroenterology');	
selbox1.options[selbox1.options.length] = new Option('General Medicine','General Medicine');	
selbox1.options[selbox1.options.length] = new Option('General Orthopedics','General Orthopedics');	
selbox1.options[selbox1.options.length] = new Option('General Surgery','General Surgery');	
selbox1.options[selbox1.options.length] = new Option('Geriatrics & Gerontology','Geriatrics & Gerontology');	
selbox1.options[selbox1.options.length] = new Option('Hematology','Hematology');	
selbox1.options[selbox1.options.length] = new Option('Hepatology','Hepatology');	
selbox1.options[selbox1.options.length] = new Option('Immunology','Immunology');	
selbox1.options[selbox1.options.length] = new Option('Infectious disease','Infectious disease');	
selbox1.options[selbox1.options.length] = new Option('Infectious Diseases','Infectious Diseases');	
selbox1.options[selbox1.options.length] = new Option('Intensive/Critical Medicine','Intensive/Critical Medicine');	
selbox1.options[selbox1.options.length] = new Option('Internal Medicine','Internal Medicine');	
selbox1.options[selbox1.options.length] = new Option('Kinematics/Kinesiology','Kinematics/Kinesiology');	
selbox1.options[selbox1.options.length] = new Option('Medical Education','Medical Education');	
selbox1.options[selbox1.options.length] = new Option('Medical Physics','Medical Physics');	
selbox1.options[selbox1.options.length] = new Option('Medical Statistics','Medical Statistics');	
selbox1.options[selbox1.options.length] = new Option('Medical Technology','Medical Technology');	
selbox1.options[selbox1.options.length] = new Option('Molecular Medicine','Molecular Medicine');	
selbox1.options[selbox1.options.length] = new Option('Nephrology','Nephrology');	
selbox1.options[selbox1.options.length] = new Option('Neurology','Neurology');	
selbox1.options[selbox1.options.length] = new Option('Nutrition','Nutrition');	
selbox1.options[selbox1.options.length] = new Option('Oncology','Oncology');	
selbox1.options[selbox1.options.length] = new Option('Ophthalmology','Ophthalmology');	
selbox1.options[selbox1.options.length] = new Option('Organ Transplantation','Organ Transplantation');	
selbox1.options[selbox1.options.length] = new Option('Orthopedics','Orthopedics');	
selbox1.options[selbox1.options.length] = new Option('Osteopathic Medicine','Osteopathic Medicine');	
selbox1.options[selbox1.options.length] = new Option('Otolaryngology','Otolaryngology');	
selbox1.options[selbox1.options.length] = new Option('Pain Medicine','Pain Medicine');	
selbox1.options[selbox1.options.length] = new Option('Palliative Medicine','Palliative Medicine');	
selbox1.options[selbox1.options.length] = new Option('Pediatrics','Pediatrics');	
selbox1.options[selbox1.options.length] = new Option('Physiology','Physiology');	
selbox1.options[selbox1.options.length] = new Option('Psychiatry','Psychiatry');	
selbox1.options[selbox1.options.length] = new Option('Pulmonology/Respiratory Medicine','Pulmonology/Respiratory Medicine');	
selbox1.options[selbox1.options.length] = new Option('Radiology/Imaging','Radiology/Imaging');	
selbox1.options[selbox1.options.length] = new Option('Rheumatology','Rheumatology');	
selbox1.options[selbox1.options.length] = new Option('Sleep Medicine','Sleep Medicine');	
selbox1.options[selbox1.options.length] = new Option('Social Medicine','Social Medicine');	
selbox1.options[selbox1.options.length] = new Option('Sports Medicine & Technology','Sports Medicine & Technology');	
selbox1.options[selbox1.options.length] = new Option('Transplant Surgery','Transplant Surgery');	
selbox1.options[selbox1.options.length] = new Option('Trauma Surgery','Trauma Surgery');	
selbox1.options[selbox1.options.length] = new Option('Urology','Urology');	
selbox1.options[selbox1.options.length] = new Option('Vascular Medicine','Vascular Medicine');	
selbox1.options[selbox1.options.length] = new Option('Vascular Surgery','Vascular Surgery');	
selbox1.options[selbox1.options.length] = new Option('Veterinary Medicine','Veterinary Medicine');	selbox1.options[selbox1.options.length] = new Option('Other','Other');
} if (chosen == "Med-Nursing") {	
selbox1.options[selbox1.options.length] = new Option('Family nursing','Family nursing');	
selbox1.options[selbox1.options.length] = new Option('Geriatric nursing','Geriatric nursing');	
selbox1.options[selbox1.options.length] = new Option('Home health nursing','Home health nursing');	
selbox1.options[selbox1.options.length] = new Option('Nursing','Nursing');	
selbox1.options[selbox1.options.length] = new Option('Palliative nursing','Palliative nursing');	
selbox1.options[selbox1.options.length] = new Option('Pediatric nursing','Pediatric nursing');	
selbox1.options[selbox1.options.length] = new Option('Perioperative nursing','Perioperative nursing');	
selbox1.options[selbox1.options.length] = new Option('Psychiatric and mental health nursing','Psychiatric and mental health nursing');	selbox1.options[selbox1.options.length] = new Option('Other','Other');
} if (chosen == "Med-Obstetrics and Gynecology") {	
selbox1.options[selbox1.options.length] = new Option('Family planning','Family planning');	
selbox1.options[selbox1.options.length] = new Option('Gynecology','Gynecology');	
selbox1.options[selbox1.options.length] = new Option('Incontinence','Incontinence');	
selbox1.options[selbox1.options.length] = new Option('Infertility','Infertility');	
selbox1.options[selbox1.options.length] = new Option('Laparoscopy','Laparoscopy');	
selbox1.options[selbox1.options.length] = new Option('Menstruation/Menopause','Menstruation/Menopause');	
selbox1.options[selbox1.options.length] = new Option('Obstetric/Gynecological Surgery','Obstetric/Gynecological Surgery');	
selbox1.options[selbox1.options.length] = new Option('Obstetrics ','Obstetrics ');	
selbox1.options[selbox1.options.length] = new Option('Perinatology','Perinatology');	selbox1.options[selbox1.options.length] = new Option('Other','Other');
} if (chosen == "Med-Rehabilitation Sciences") {	
selbox1.options[selbox1.options.length] = new Option('Ergonomics','Ergonomics');	
selbox1.options[selbox1.options.length] = new Option('Occupational therapy','Occupational therapy');	
selbox1.options[selbox1.options.length] = new Option('Physical Therapy','Physical Therapy');	
selbox1.options[selbox1.options.length] = new Option('Rehabilitation Sciences','Rehabilitation Sciences');	
selbox1.options[selbox1.options.length] = new Option('Speech/Audio Therapy','Speech/Audio Therapy');	selbox1.options[selbox1.options.length] = new Option('Other','Other');
} if (chosen == "Lif-Agriculture") {	
selbox1.options[selbox1.options.length] = new Option('Agricultural economics','Agricultural economics');	
selbox1.options[selbox1.options.length] = new Option('Agriculture','Agriculture');	
selbox1.options[selbox1.options.length] = new Option('Agroecology','Agroecology');	
selbox1.options[selbox1.options.length] = new Option('Agrology','Agrology');	
selbox1.options[selbox1.options.length] = new Option('Agronomy','Agronomy');	
selbox1.options[selbox1.options.length] = new Option('Animal Husbandry','Animal Husbandry');	
selbox1.options[selbox1.options.length] = new Option('Dairy Science','Dairy Science');	
selbox1.options[selbox1.options.length] = new Option('Enology','Enology');	
selbox1.options[selbox1.options.length] = new Option('Farming','Farming');	
selbox1.options[selbox1.options.length] = new Option('Fisheries/Aquaculture','Fisheries/Aquaculture');	
selbox1.options[selbox1.options.length] = new Option('Forestry','Forestry');	
selbox1.options[selbox1.options.length] = new Option('Horticulture','Horticulture');	
selbox1.options[selbox1.options.length] = new Option('Sustainable Agriculture','Sustainable Agriculture');	
selbox1.options[selbox1.options.length] = new Option('Urban and Industrial Agriculture','Urban and Industrial Agriculture');	selbox1.options[selbox1.options.length] = new Option('Other','Other');
} if (chosen == "Lif-Biochemistry") {	
selbox1.options[selbox1.options.length] = new Option('Animal Biochemistry','Animal Biochemistry');	
selbox1.options[selbox1.options.length] = new Option('General Biochemistry','General Biochemistry');	
selbox1.options[selbox1.options.length] = new Option('Metabolism','Metabolism');	
selbox1.options[selbox1.options.length] = new Option('Plant Biochemistry','Plant Biochemistry');	selbox1.options[selbox1.options.length] = new Option('Other','Other');
} if (chosen == "Lif-Bioengineering") {	
selbox1.options[selbox1.options.length] = new Option('Biomedical Engineering','Biomedical Engineering');	
selbox1.options[selbox1.options.length] = new Option('Biomimetics','Biomimetics');	
selbox1.options[selbox1.options.length] = new Option('Biomolecular engineering','Biomolecular engineering');	
selbox1.options[selbox1.options.length] = new Option('Bioprocess Engineering','Bioprocess Engineering');	
selbox1.options[selbox1.options.length] = new Option('Biotechnology','Biotechnology');	
selbox1.options[selbox1.options.length] = new Option('Cellular Engineering','Cellular Engineering');	
selbox1.options[selbox1.options.length] = new Option('Tissue engineering ','Tissue engineering ');	selbox1.options[selbox1.options.length] = new Option('Other','Other');
} if (chosen == "Lif-Biosciences") {	
selbox1.options[selbox1.options.length] = new Option('Bioinformatics','Bioinformatics');	
selbox1.options[selbox1.options.length] = new Option('Biomaterial Science','Biomaterial Science');	
selbox1.options[selbox1.options.length] = new Option('Biomodeling','Biomodeling');	
selbox1.options[selbox1.options.length] = new Option('Biophysics','Biophysics');	
selbox1.options[selbox1.options.length] = new Option('Biostatistics','Biostatistics');	
selbox1.options[selbox1.options.length] = new Option('Cancer Research','Cancer Research');	
selbox1.options[selbox1.options.length] = new Option('Cell Biology','Cell Biology');	
selbox1.options[selbox1.options.length] = new Option('Cognitive science','Cognitive science');	
selbox1.options[selbox1.options.length] = new Option('Computational Biology','Computational Biology');	
selbox1.options[selbox1.options.length] = new Option('Dental Research','Dental Research');	
selbox1.options[selbox1.options.length] = new Option('Embryology','Embryology');	
selbox1.options[selbox1.options.length] = new Option('Entomology','Entomology');	
selbox1.options[selbox1.options.length] = new Option('Enzymology','Enzymology');	
selbox1.options[selbox1.options.length] = new Option('Evolutionary biology','Evolutionary biology');	
selbox1.options[selbox1.options.length] = new Option('Food Sciences','Food Sciences');	
selbox1.options[selbox1.options.length] = new Option('Game Theory','Game Theory');	
selbox1.options[selbox1.options.length] = new Option('General/Molecular Pathology','General/Molecular Pathology');	
selbox1.options[selbox1.options.length] = new Option('Marine Sciences','Marine Sciences');	
selbox1.options[selbox1.options.length] = new Option('Molecular Biology','Molecular Biology');	
selbox1.options[selbox1.options.length] = new Option('Proteomics/Protein Studies','Proteomics/Protein Studies');	
selbox1.options[selbox1.options.length] = new Option('Structural Biology','Structural Biology');	
selbox1.options[selbox1.options.length] = new Option('Veterinary Sciences','Veterinary Sciences');	selbox1.options[selbox1.options.length] = new Option('Other','Other');
} if (chosen == "Lif-Botany") {	
selbox1.options[selbox1.options.length] = new Option('Botany','Botany');	
selbox1.options[selbox1.options.length] = new Option('Phycology','Phycology');	
selbox1.options[selbox1.options.length] = new Option('Plant anatomy/Phytoanatomy','Plant anatomy/Phytoanatomy');	
selbox1.options[selbox1.options.length] = new Option('Plant chemistry/Phytochemistry','Plant chemistry/Phytochemistry');	
selbox1.options[selbox1.options.length] = new Option('Plant genetics/Phytogenetics','Plant genetics/Phytogenetics');	
selbox1.options[selbox1.options.length] = new Option('Plant pathology/Phytopathology','Plant pathology/Phytopathology');	
selbox1.options[selbox1.options.length] = new Option('Plant physiology/Phytophysiology','Plant physiology/Phytophysiology');	selbox1.options[selbox1.options.length] = new Option('Other','Other');
} if (chosen == "Lif-Environmental Biosciences") {	
selbox1.options[selbox1.options.length] = new Option('Biosphere Sciences','Biosphere Sciences');	
selbox1.options[selbox1.options.length] = new Option('Conservation (Habitat, Wildlife, Species, Water)','Conservation (Habitat, Wildlife, Species, Water)');	
selbox1.options[selbox1.options.length] = new Option('Ecology','Ecology');	
selbox1.options[selbox1.options.length] = new Option('Environmental chemistry','Environmental chemistry');	
selbox1.options[selbox1.options.length] = new Option('Environmental Engineering','Environmental Engineering');	
selbox1.options[selbox1.options.length] = new Option('Environmental Material Sciences','Environmental Material Sciences');	
selbox1.options[selbox1.options.length] = new Option('Environmental Resources','Environmental Resources');	
selbox1.options[selbox1.options.length] = new Option('Paleontology','Paleontology');	
selbox1.options[selbox1.options.length] = new Option('Soil Sciences','Soil Sciences');	
selbox1.options[selbox1.options.length] = new Option('Waste management','Waste management');	selbox1.options[selbox1.options.length] = new Option('Other','Other');
} if (chosen == "Lif-Forensic Sciences") {	
selbox1.options[selbox1.options.length] = new Option('Forensic criminalistics ','Forensic criminalistics ');	
selbox1.options[selbox1.options.length] = new Option('Forensic entomology','Forensic entomology');	
selbox1.options[selbox1.options.length] = new Option('Forensic pathology ','Forensic pathology ');	
selbox1.options[selbox1.options.length] = new Option('Forensic toxicology','Forensic toxicology');	selbox1.options[selbox1.options.length] = new Option('Other','Other');
} if (chosen == "Lif-Genetics") {	
selbox1.options[selbox1.options.length] = new Option('Applied Genetics','Applied Genetics');	
selbox1.options[selbox1.options.length] = new Option('Genetic engineering','Genetic engineering');	
selbox1.options[selbox1.options.length] = new Option('Genetics','Genetics');	
selbox1.options[selbox1.options.length] = new Option('Genomics','Genomics');	
selbox1.options[selbox1.options.length] = new Option('Nucleic Acid Research','Nucleic Acid Research');	selbox1.options[selbox1.options.length] = new Option('Other','Other');
} if (chosen == "Lif-Microbiology") {	
selbox1.options[selbox1.options.length] = new Option('Agricultural microbiology','Agricultural microbiology');	
selbox1.options[selbox1.options.length] = new Option('Bacteriology','Bacteriology');	
selbox1.options[selbox1.options.length] = new Option('Environmental microbiology','Environmental microbiology');	
selbox1.options[selbox1.options.length] = new Option('Food microbiology','Food microbiology');	
selbox1.options[selbox1.options.length] = new Option('Industrial microbiology','Industrial microbiology');	
selbox1.options[selbox1.options.length] = new Option('Medical microbiology','Medical microbiology');	
selbox1.options[selbox1.options.length] = new Option('Microbial physiology','Microbial physiology');	
selbox1.options[selbox1.options.length] = new Option('Microbiology','Microbiology');	
selbox1.options[selbox1.options.length] = new Option('Mycology','Mycology');	
selbox1.options[selbox1.options.length] = new Option('Parasitology','Parasitology');	
selbox1.options[selbox1.options.length] = new Option('Pharmaceutical microbiology','Pharmaceutical microbiology');	
selbox1.options[selbox1.options.length] = new Option('Soil microbiology','Soil microbiology');	
selbox1.options[selbox1.options.length] = new Option('Virology','Virology');	selbox1.options[selbox1.options.length] = new Option('Other','Other');
} if (chosen == "Lif-Neurosciences") {	
selbox1.options[selbox1.options.length] = new Option('Behavioral neuroscience','Behavioral neuroscience');	
selbox1.options[selbox1.options.length] = new Option('Cellular neuroscience','Cellular neuroscience');	
selbox1.options[selbox1.options.length] = new Option('Cognitive neuroscience','Cognitive neuroscience');	
selbox1.options[selbox1.options.length] = new Option('Computational neuroscience','Computational neuroscience');	
selbox1.options[selbox1.options.length] = new Option('Developmental neuroscience','Developmental neuroscience');	
selbox1.options[selbox1.options.length] = new Option('Neurosciences','Neurosciences');	selbox1.options[selbox1.options.length] = new Option('Other','Other');
} if (chosen == "Lif-Pathology") {	
selbox1.options[selbox1.options.length] = new Option('Anatomical/Surgical pathology','Anatomical/Surgical pathology');	
selbox1.options[selbox1.options.length] = new Option('Clinical pathology','Clinical pathology');	
selbox1.options[selbox1.options.length] = new Option('Cytopathology','Cytopathology');	
selbox1.options[selbox1.options.length] = new Option('Digital Pathology','Digital Pathology');	
selbox1.options[selbox1.options.length] = new Option('General Pathology','General Pathology');	
selbox1.options[selbox1.options.length] = new Option('Hematopathology','Hematopathology');	
selbox1.options[selbox1.options.length] = new Option('Histopathology','Histopathology');	
selbox1.options[selbox1.options.length] = new Option('Molecular Pathology','Molecular Pathology');	
selbox1.options[selbox1.options.length] = new Option('Telepathology','Telepathology');	selbox1.options[selbox1.options.length] = new Option('Other','Other');
} if (chosen == "Lif-Pharmaceutical Sciences") {	
selbox1.options[selbox1.options.length] = new Option('Pharmaceutical chemistry','Pharmaceutical chemistry');	
selbox1.options[selbox1.options.length] = new Option('Pharmaceutical Research','Pharmaceutical Research');	
selbox1.options[selbox1.options.length] = new Option('Pharmaceutical toxicology','Pharmaceutical toxicology');	
selbox1.options[selbox1.options.length] = new Option('Pharmaceutics','Pharmaceutics');	
selbox1.options[selbox1.options.length] = new Option('Pharmacodynamics','Pharmacodynamics');	
selbox1.options[selbox1.options.length] = new Option('Pharmacogenomics','Pharmacogenomics');	
selbox1.options[selbox1.options.length] = new Option('Pharmacognosy','Pharmacognosy');	
selbox1.options[selbox1.options.length] = new Option('Pharmacokinetics','Pharmacokinetics');	
selbox1.options[selbox1.options.length] = new Option('Pharmacotherapy','Pharmacotherapy');	selbox1.options[selbox1.options.length] = new Option('Other','Other');
} if (chosen == "Lif-Social Biosciences") {	
selbox1.options[selbox1.options.length] = new Option('Anthropology','Anthropology');	
selbox1.options[selbox1.options.length] = new Option('Archeology','Archeology');	selbox1.options[selbox1.options.length] = new Option('Other','Other');
} if (chosen == "Lif-Zoology") {	
selbox1.options[selbox1.options.length] = new Option('Acarology','Acarology');	
selbox1.options[selbox1.options.length] = new Option('Anthrozoology','Anthrozoology');	
selbox1.options[selbox1.options.length] = new Option('Arachnology','Arachnology');	
selbox1.options[selbox1.options.length] = new Option('Cetology','Cetology');	
selbox1.options[selbox1.options.length] = new Option('Ethology','Ethology');	
selbox1.options[selbox1.options.length] = new Option('Helminthology','Helminthology');	
selbox1.options[selbox1.options.length] = new Option('Herpetology','Herpetology');	
selbox1.options[selbox1.options.length] = new Option('Ichthyology','Ichthyology');	
selbox1.options[selbox1.options.length] = new Option('Malacology','Malacology');	
selbox1.options[selbox1.options.length] = new Option('Mammalogy','Mammalogy');	
selbox1.options[selbox1.options.length] = new Option('Nematology','Nematology');	
selbox1.options[selbox1.options.length] = new Option('Ornithology','Ornithology');	
selbox1.options[selbox1.options.length] = new Option('Protozoology','Protozoology');	
selbox1.options[selbox1.options.length] = new Option('Zoography','Zoography');	
selbox1.options[selbox1.options.length] = new Option('Zoology','Zoology');	selbox1.options[selbox1.options.length] = new Option('Other','Other');
} if (chosen == "Phy-Astronomy/Astrophysics") {	
selbox1.options[selbox1.options.length] = new Option('Astrobiology','Astrobiology');	
selbox1.options[selbox1.options.length] = new Option('Astrophysics','Astrophysics');	
selbox1.options[selbox1.options.length] = new Option('Observational Astronomy','Observational Astronomy');	
selbox1.options[selbox1.options.length] = new Option('Theoretical Astronomy ','Theoretical Astronomy ');	selbox1.options[selbox1.options.length] = new Option('Other','Other');
} if (chosen == "Phy-Chemistry") {	
selbox1.options[selbox1.options.length] = new Option('Analytical Chemistry','Analytical Chemistry');	
selbox1.options[selbox1.options.length] = new Option('Applied Chemistry','Applied Chemistry');	
selbox1.options[selbox1.options.length] = new Option('Astrochemistry','Astrochemistry');	
//selbox1.options[selbox1.options.length] = new Option('Biochemistry','Biochemistry');	
selbox1.options[selbox1.options.length] = new Option('Cheminformatics','Cheminformatics');	
selbox1.options[selbox1.options.length] = new Option('Computational Chemistry','Computational Chemistry');	
selbox1.options[selbox1.options.length] = new Option('Coordination Chemistry ','Coordination Chemistry ');	
selbox1.options[selbox1.options.length] = new Option('Electrochemistry','Electrochemistry');	
selbox1.options[selbox1.options.length] = new Option('Environmental chemistry','Environmental chemistry');	
selbox1.options[selbox1.options.length] = new Option('Geochemistry','Geochemistry');	
selbox1.options[selbox1.options.length] = new Option('Inorganic Chemistry','Inorganic Chemistry');	
selbox1.options[selbox1.options.length] = new Option('Interface and colloid science','Interface and colloid science');	
selbox1.options[selbox1.options.length] = new Option('Marine chemistry','Marine chemistry');	
selbox1.options[selbox1.options.length] = new Option('Mathematical chemistry','Mathematical chemistry');	
selbox1.options[selbox1.options.length] = new Option('Natural Products chemistry','Natural Products chemistry');	
selbox1.options[selbox1.options.length] = new Option('Nuclear chemistry','Nuclear chemistry');	
selbox1.options[selbox1.options.length] = new Option('Organic Chemistry ','Organic Chemistry ');	
selbox1.options[selbox1.options.length] = new Option('Organometallic Chemistry ','Organometallic Chemistry ');	
selbox1.options[selbox1.options.length] = new Option('Physical Chemistry ','Physical Chemistry ');	
selbox1.options[selbox1.options.length] = new Option('Quantum chemistry','Quantum chemistry');	
selbox1.options[selbox1.options.length] = new Option('Solid State Chemistry ','Solid State Chemistry ');	
selbox1.options[selbox1.options.length] = new Option('Spectroscopy ','Spectroscopy ');	
selbox1.options[selbox1.options.length] = new Option('Structural Chemistry ','Structural Chemistry ');	
selbox1.options[selbox1.options.length] = new Option('Theoretical chemistry','Theoretical chemistry');	selbox1.options[selbox1.options.length] = new Option('Other','Other');
} if (chosen == "Phy-Computer/Information Sciences") {	
selbox1.options[selbox1.options.length] = new Option('Algebraic (symbolic) computation','Algebraic (symbolic) computation');	
selbox1.options[selbox1.options.length] = new Option('Algorithms','Algorithms');	
selbox1.options[selbox1.options.length] = new Option('Applied Information Sciences','Applied Information Sciences');	
selbox1.options[selbox1.options.length] = new Option('Artificial Intelligence','Artificial Intelligence');	
selbox1.options[selbox1.options.length] = new Option('Bioinformatics','Bioinformatics');	
selbox1.options[selbox1.options.length] = new Option('Biomodeling','Biomodeling');	
selbox1.options[selbox1.options.length] = new Option('Computational finance','Computational finance');	
selbox1.options[selbox1.options.length] = new Option('Computational number theory','Computational number theory');	
selbox1.options[selbox1.options.length] = new Option('Computer Aided Engineering (CAE)','Computer Aided Engineering (CAE)');	
selbox1.options[selbox1.options.length] = new Option('Computer and society','Computer and society');	
selbox1.options[selbox1.options.length] = new Option('Computer architecture','Computer architecture');	
selbox1.options[selbox1.options.length] = new Option('Computer communications (networks)','Computer communications (networks)');	
selbox1.options[selbox1.options.length] = new Option('Computer Graphics','Computer Graphics');	
selbox1.options[selbox1.options.length] = new Option('Computer Hardware','Computer Hardware');	
selbox1.options[selbox1.options.length] = new Option('Computer Networking','Computer Networking');	
selbox1.options[selbox1.options.length] = new Option('Computer Science','Computer Science');	
selbox1.options[selbox1.options.length] = new Option('Computer security and reliability','Computer security and reliability');	
selbox1.options[selbox1.options.length] = new Option('Computer Software','Computer Software');	
selbox1.options[selbox1.options.length] = new Option('Data management','Data management');	
selbox1.options[selbox1.options.length] = new Option('Data mining','Data mining');	
selbox1.options[selbox1.options.length] = new Option('Data structures','Data structures');	
selbox1.options[selbox1.options.length] = new Option('Database','Database');	
selbox1.options[selbox1.options.length] = new Option('Distributed computing','Distributed computing');	
selbox1.options[selbox1.options.length] = new Option('Human-computer interaction','Human-computer interaction');	
selbox1.options[selbox1.options.length] = new Option('Human-Machine interface','Human-Machine interface');	
selbox1.options[selbox1.options.length] = new Option('Informatics','Informatics');	
selbox1.options[selbox1.options.length] = new Option('Information management','Information management');	
selbox1.options[selbox1.options.length] = new Option('Information retrieval','Information retrieval');	
selbox1.options[selbox1.options.length] = new Option('Information systems (Business informatics)','Information systems (Business informatics)');	
selbox1.options[selbox1.options.length] = new Option('Knowledge management','Knowledge management');	
selbox1.options[selbox1.options.length] = new Option('Multimedia, hypermedia','Multimedia, hypermedia');	
selbox1.options[selbox1.options.length] = new Option('Neural networks','Neural networks');	
selbox1.options[selbox1.options.length] = new Option('Numerical Analysis','Numerical Analysis');	
selbox1.options[selbox1.options.length] = new Option('Operating systems','Operating systems');	
selbox1.options[selbox1.options.length] = new Option('Parallel computing','Parallel computing');	
selbox1.options[selbox1.options.length] = new Option('Programming languages','Programming languages');	
selbox1.options[selbox1.options.length] = new Option('Quantum computing','Quantum computing');	
selbox1.options[selbox1.options.length] = new Option('Scientific computing (Computational science)','Scientific computing (Computational science)');	
selbox1.options[selbox1.options.length] = new Option('The Digital Humanities (Humanities computing)','The Digital Humanities (Humanities computing)');	
selbox1.options[selbox1.options.length] = new Option('Theory of computation','Theory of computation');	
selbox1.options[selbox1.options.length] = new Option('Virtual Reality','Virtual Reality');	selbox1.options[selbox1.options.length] = new Option('Other','Other');
} if (chosen == "Phy-Earth Sciences") {	
selbox1.options[selbox1.options.length] = new Option('Atmospheric sciences','Atmospheric sciences');	
selbox1.options[selbox1.options.length] = new Option('Edaphology','Edaphology');	
selbox1.options[selbox1.options.length] = new Option('Environmental science','Environmental science');	
selbox1.options[selbox1.options.length] = new Option('Gemology','Gemology');	
selbox1.options[selbox1.options.length] = new Option('Geochemistry','Geochemistry');	
selbox1.options[selbox1.options.length] = new Option('Geography','Geography');	
selbox1.options[selbox1.options.length] = new Option('Geology','Geology');	
selbox1.options[selbox1.options.length] = new Option('Geophysics','Geophysics');	
selbox1.options[selbox1.options.length] = new Option('Hydrogeology','Hydrogeology');	
selbox1.options[selbox1.options.length] = new Option('Hydrology','Hydrology');	
selbox1.options[selbox1.options.length] = new Option('Meteorology','Meteorology');	
selbox1.options[selbox1.options.length] = new Option('Mineralogy ','Mineralogy ');	
selbox1.options[selbox1.options.length] = new Option('Oceanography','Oceanography');	
selbox1.options[selbox1.options.length] = new Option('Paleobiology','Paleobiology');	
selbox1.options[selbox1.options.length] = new Option('Paleontology','Paleontology');	
selbox1.options[selbox1.options.length] = new Option('Pedology','Pedology');	
selbox1.options[selbox1.options.length] = new Option('Petrology','Petrology');	
selbox1.options[selbox1.options.length] = new Option('Sedimentology','Sedimentology');	
selbox1.options[selbox1.options.length] = new Option('Seismology','Seismology');	
selbox1.options[selbox1.options.length] = new Option('Soil science','Soil science');	
selbox1.options[selbox1.options.length] = new Option('Speleology','Speleology');	
selbox1.options[selbox1.options.length] = new Option('Tectonics','Tectonics');	
selbox1.options[selbox1.options.length] = new Option('Volcanology','Volcanology');	selbox1.options[selbox1.options.length] = new Option('Other','Other');
} if (chosen == "Phy-Energy and power") {	
selbox1.options[selbox1.options.length] = new Option('Energy (general)','Energy (general)');	
selbox1.options[selbox1.options.length] = new Option('Energy conservation','Energy conservation');	
selbox1.options[selbox1.options.length] = new Option('Power engineering','Power engineering');	
selbox1.options[selbox1.options.length] = new Option('Renewable energy/alternate sources','Renewable energy/alternate sources');	selbox1.options[selbox1.options.length] = new Option('Other','Other');
} if (chosen == "Phy-Engineering") {	
selbox1.options[selbox1.options.length] = new Option('Acoustical engineering','Acoustical engineering');	
selbox1.options[selbox1.options.length] = new Option('Aerospace/Aeronautical Engineering','Aerospace/Aeronautical Engineering');	
selbox1.options[selbox1.options.length] = new Option('Agricultural Engineering','Agricultural Engineering');	
selbox1.options[selbox1.options.length] = new Option('Architecture','Architecture');	
selbox1.options[selbox1.options.length] = new Option('Automotive Engineering','Automotive Engineering');	
selbox1.options[selbox1.options.length] = new Option('Bioengineering','Bioengineering');	
selbox1.options[selbox1.options.length] = new Option('Biomolecular engineering','Biomolecular engineering');	
selbox1.options[selbox1.options.length] = new Option('Biosensing','Biosensing');	
selbox1.options[selbox1.options.length] = new Option('Biotechnology','Biotechnology');	
selbox1.options[selbox1.options.length] = new Option('Chemical Engineering  ','Chemical Engineering  ');	
selbox1.options[selbox1.options.length] = new Option('Civil Engineering','Civil Engineering');	
selbox1.options[selbox1.options.length] = new Option('Computer engineering','Computer engineering');	
selbox1.options[selbox1.options.length] = new Option('Control systems engineering','Control systems engineering');	
selbox1.options[selbox1.options.length] = new Option('Ecological engineering','Ecological engineering');	
selbox1.options[selbox1.options.length] = new Option('Electrical Engineering','Electrical Engineering');	
selbox1.options[selbox1.options.length] = new Option('Electronics Engineering','Electronics Engineering');	
selbox1.options[selbox1.options.length] = new Option('Engineering physics','Engineering physics');	
selbox1.options[selbox1.options.length] = new Option('Ergonomics','Ergonomics');	
selbox1.options[selbox1.options.length] = new Option('Food engineering','Food engineering');	
selbox1.options[selbox1.options.length] = new Option('Industrial engineering','Industrial engineering');	
selbox1.options[selbox1.options.length] = new Option('Instrumentation Engineering','Instrumentation Engineering');	
selbox1.options[selbox1.options.length] = new Option('Manufacturing engineering','Manufacturing engineering');	
selbox1.options[selbox1.options.length] = new Option('Materials engineering','Materials engineering');	
selbox1.options[selbox1.options.length] = new Option('Mechanical Engineering','Mechanical Engineering');	
selbox1.options[selbox1.options.length] = new Option('Mechatronics','Mechatronics');	
selbox1.options[selbox1.options.length] = new Option('Metrology','Metrology');	
selbox1.options[selbox1.options.length] = new Option('Mining','Mining');	
selbox1.options[selbox1.options.length] = new Option('Nanoengineering','Nanoengineering');	
selbox1.options[selbox1.options.length] = new Option('Nanotechnology','Nanotechnology');	
selbox1.options[selbox1.options.length] = new Option('Nuclear engineering','Nuclear engineering');	
selbox1.options[selbox1.options.length] = new Option('Ocean engineering','Ocean engineering');	
selbox1.options[selbox1.options.length] = new Option('Optical engineering','Optical engineering');	
selbox1.options[selbox1.options.length] = new Option('Petroleum engineering','Petroleum engineering');	
selbox1.options[selbox1.options.length] = new Option('Process engineering','Process engineering');	
selbox1.options[selbox1.options.length] = new Option('Production/Manufacturing Engineering','Production/Manufacturing Engineering');	
selbox1.options[selbox1.options.length] = new Option('Quality assurance engineering','Quality assurance engineering');	
selbox1.options[selbox1.options.length] = new Option('Remote sensing','Remote sensing');	
selbox1.options[selbox1.options.length] = new Option('Robotics','Robotics');	
selbox1.options[selbox1.options.length] = new Option('Safety engineering','Safety engineering');	
selbox1.options[selbox1.options.length] = new Option('Sensors','Sensors');	
selbox1.options[selbox1.options.length] = new Option('Signal Processing','Signal Processing');	
selbox1.options[selbox1.options.length] = new Option('Software engineering','Software engineering');	
selbox1.options[selbox1.options.length] = new Option('Sports Medicine & Technology','Sports Medicine & Technology');	
selbox1.options[selbox1.options.length] = new Option('Structural Engineering','Structural Engineering');	
selbox1.options[selbox1.options.length] = new Option('Telecommunication Engineering','Telecommunication Engineering');	
selbox1.options[selbox1.options.length] = new Option('Textile engineering','Textile engineering');	
selbox1.options[selbox1.options.length] = new Option('Thermal/refrigeration Engineering','Thermal/refrigeration Engineering');	
selbox1.options[selbox1.options.length] = new Option('Urban and Industrial Agriculture','Urban and Industrial Agriculture');	
selbox1.options[selbox1.options.length] = new Option('Urban Engineering','Urban Engineering');	
selbox1.options[selbox1.options.length] = new Option('Vehicle engineering','Vehicle engineering');	selbox1.options[selbox1.options.length] = new Option('Other','Other');
} if (chosen == "Phy-Environmental Sciences") {	
selbox1.options[selbox1.options.length] = new Option('Environmental Engineering','Environmental Engineering');	
selbox1.options[selbox1.options.length] = new Option('Environmental Material Sciences','Environmental Material Sciences');	selbox1.options[selbox1.options.length] = new Option('Other','Other');
} if (chosen == "Phy-Forensic Sciences") {	
selbox1.options[selbox1.options.length] = new Option('Digital Forensics','Digital Forensics');	selbox1.options[selbox1.options.length] = new Option('Other','Other');
} if (chosen == "Phy-Material Science & Engineering") {	
selbox1.options[selbox1.options.length] = new Option('Biomaterial Science','Biomaterial Science');	
selbox1.options[selbox1.options.length] = new Option('Catalysis','Catalysis');	
selbox1.options[selbox1.options.length] = new Option('Ceramics','Ceramics');	
selbox1.options[selbox1.options.length] = new Option('Colloid & Interface Science','Colloid & Interface Science');	
selbox1.options[selbox1.options.length] = new Option('Composites','Composites');	
selbox1.options[selbox1.options.length] = new Option('Electronic, optical and magnetic materials','Electronic, optical and magnetic materials');	
selbox1.options[selbox1.options.length] = new Option('Material characterization and instrumentation','Material characterization and instrumentation');	
selbox1.options[selbox1.options.length] = new Option('MEMS','MEMS');	
selbox1.options[selbox1.options.length] = new Option('Metallurgy','Metallurgy');	
selbox1.options[selbox1.options.length] = new Option('Metals and Alloys','Metals and Alloys');	
selbox1.options[selbox1.options.length] = new Option('Molecular Engineering ','Molecular Engineering ');	
selbox1.options[selbox1.options.length] = new Option('Nanomaterials','Nanomaterials');	
selbox1.options[selbox1.options.length] = new Option('Polymer science and Engineering','Polymer science and Engineering');	
selbox1.options[selbox1.options.length] = new Option('Superconductors','Superconductors');	selbox1.options[selbox1.options.length] = new Option('Other','Other');
} if (chosen == "Phy-Mathematics") {	
selbox1.options[selbox1.options.length] = new Option('Algebra','Algebra');	
selbox1.options[selbox1.options.length] = new Option('Analysis','Analysis');	
selbox1.options[selbox1.options.length] = new Option('Applied Mathematics','Applied Mathematics');	
selbox1.options[selbox1.options.length] = new Option('Calculus','Calculus');	
selbox1.options[selbox1.options.length] = new Option('Computational Mathematics','Computational Mathematics');	
selbox1.options[selbox1.options.length] = new Option('Geometry and Topology','Geometry and Topology');	
selbox1.options[selbox1.options.length] = new Option('Logic and Foundations of mathematics','Logic and Foundations of mathematics');	
selbox1.options[selbox1.options.length] = new Option('Number theory','Number theory');	
selbox1.options[selbox1.options.length] = new Option('Probability theory','Probability theory');	
selbox1.options[selbox1.options.length] = new Option('Stochastic Processes','Stochastic Processes');	selbox1.options[selbox1.options.length] = new Option('Other','Other');
} if (chosen == "Phy-Physics") {	
selbox1.options[selbox1.options.length] = new Option('Accelerator physics','Accelerator physics');	
selbox1.options[selbox1.options.length] = new Option('Acoustics','Acoustics');	
selbox1.options[selbox1.options.length] = new Option('Applied Physics','Applied Physics');	
selbox1.options[selbox1.options.length] = new Option('Astrophysics','Astrophysics');	
selbox1.options[selbox1.options.length] = new Option('Atomic, molecular, and optical physics','Atomic, molecular, and optical physics');	
selbox1.options[selbox1.options.length] = new Option('Biophysics','Biophysics');	
selbox1.options[selbox1.options.length] = new Option('Computational physics','Computational physics');	
selbox1.options[selbox1.options.length] = new Option('Condensed Matter Physics','Condensed Matter Physics');	
selbox1.options[selbox1.options.length] = new Option('Cryogenics','Cryogenics');	
selbox1.options[selbox1.options.length] = new Option('Crystal Physics','Crystal Physics');	
selbox1.options[selbox1.options.length] = new Option('Fluid Physics','Fluid Physics');	
selbox1.options[selbox1.options.length] = new Option('Low Temperature Physics','Low Temperature Physics');	
selbox1.options[selbox1.options.length] = new Option('Magnetism & Electromagnetism','Magnetism & Electromagnetism');	
selbox1.options[selbox1.options.length] = new Option('Mathematical Physics','Mathematical Physics');	
selbox1.options[selbox1.options.length] = new Option('Mechanics','Mechanics');	
selbox1.options[selbox1.options.length] = new Option('Medical Physics','Medical Physics');	
selbox1.options[selbox1.options.length] = new Option('Molecular physics','Molecular physics');	
selbox1.options[selbox1.options.length] = new Option('Newtonian dynamics','Newtonian dynamics');	
selbox1.options[selbox1.options.length] = new Option('Nonlinear and Statistical physics','Nonlinear and Statistical physics');	
selbox1.options[selbox1.options.length] = new Option('Nuclear and high-energy physics','Nuclear and high-energy physics');	
selbox1.options[selbox1.options.length] = new Option('Optics','Optics');	
selbox1.options[selbox1.options.length] = new Option('Particle physics','Particle physics');	
selbox1.options[selbox1.options.length] = new Option('Plasma Physics/Chemistry','Plasma Physics/Chemistry');	
selbox1.options[selbox1.options.length] = new Option('Quantum Physics','Quantum Physics');	
selbox1.options[selbox1.options.length] = new Option('Rheology','Rheology');	
selbox1.options[selbox1.options.length] = new Option('Semiconductor Physics','Semiconductor Physics');	
selbox1.options[selbox1.options.length] = new Option('Solid mechanics','Solid mechanics');	
selbox1.options[selbox1.options.length] = new Option('Theoretical physics','Theoretical physics');	
selbox1.options[selbox1.options.length] = new Option('Thermodynamics','Thermodynamics');	
selbox1.options[selbox1.options.length] = new Option('Tribology','Tribology');	
selbox1.options[selbox1.options.length] = new Option('Ultrafast Phenomenon','Ultrafast Phenomenon');	
selbox1.options[selbox1.options.length] = new Option('Vehicle dynamics','Vehicle dynamics');	selbox1.options[selbox1.options.length] = new Option('Other','Other');
} if (chosen == "Phy-Statistics") {	
selbox1.options[selbox1.options.length] = new Option('Computational statistics','Computational statistics');	
selbox1.options[selbox1.options.length] = new Option('Design of experiments','Design of experiments');	
selbox1.options[selbox1.options.length] = new Option('Sampling and Survey','Sampling and Survey');	
selbox1.options[selbox1.options.length] = new Option('Statistical modelling','Statistical modelling');	
selbox1.options[selbox1.options.length] = new Option('Statistical theory','Statistical theory');	selbox1.options[selbox1.options.length] = new Option('Other','Other');
} if (chosen == "Phy-Systems Science") {	
selbox1.options[selbox1.options.length] = new Option('Complex systems','Complex systems');	
selbox1.options[selbox1.options.length] = new Option('Control theory','Control theory');	
selbox1.options[selbox1.options.length] = new Option('Cybernetics','Cybernetics');	
selbox1.options[selbox1.options.length] = new Option('Operations research','Operations research');	
selbox1.options[selbox1.options.length] = new Option('Systems dynamics','Systems dynamics');	
selbox1.options[selbox1.options.length] = new Option('Systems engineering','Systems engineering');	
selbox1.options[selbox1.options.length] = new Option('Systems theory','Systems theory');	selbox1.options[selbox1.options.length] = new Option('Other','Other');
} if (chosen == "Eco-Business management") {	
selbox1.options[selbox1.options.length] = new Option('Business','Business');	
selbox1.options[selbox1.options.length] = new Option('Business Administration','Business Administration');	
selbox1.options[selbox1.options.length] = new Option('Entrepreneurship','Entrepreneurship');	
selbox1.options[selbox1.options.length] = new Option('Hotel Administration','Hotel Administration');	
selbox1.options[selbox1.options.length] = new Option('Human Resources','Human Resources');	
selbox1.options[selbox1.options.length] = new Option('International Business','International Business');	
selbox1.options[selbox1.options.length] = new Option('Management','Management');	
selbox1.options[selbox1.options.length] = new Option('Management Information Systems','Management Information Systems');	
selbox1.options[selbox1.options.length] = new Option('Marketing','Marketing');	
selbox1.options[selbox1.options.length] = new Option('Operations management','Operations management');	
selbox1.options[selbox1.options.length] = new Option('Project management','Project management');	
selbox1.options[selbox1.options.length] = new Option('Risk management','Risk management');	
selbox1.options[selbox1.options.length] = new Option('Servicing','Servicing');	
selbox1.options[selbox1.options.length] = new Option('Strategy','Strategy');	
selbox1.options[selbox1.options.length] = new Option('Supply chain management','Supply chain management');	
selbox1.options[selbox1.options.length] = new Option('Technology management','Technology management');	selbox1.options[selbox1.options.length] = new Option('Other','Other');
} if (chosen == "Eco-Economics") {	
selbox1.options[selbox1.options.length] = new Option('Accounting','Accounting');	
selbox1.options[selbox1.options.length] = new Option('Agricultural economics','Agricultural economics');	
selbox1.options[selbox1.options.length] = new Option('Banking','Banking');	
selbox1.options[selbox1.options.length] = new Option('Behavioral economics','Behavioral economics');	
selbox1.options[selbox1.options.length] = new Option('Bioeconomics','Bioeconomics');	
selbox1.options[selbox1.options.length] = new Option('Computational economics','Computational economics');	
selbox1.options[selbox1.options.length] = new Option('Consumer economics','Consumer economics');	
selbox1.options[selbox1.options.length] = new Option('Corporate Finance','Corporate Finance');	
selbox1.options[selbox1.options.length] = new Option('Development economics','Development economics');	
selbox1.options[selbox1.options.length] = new Option('Ecological economics','Ecological economics');	
selbox1.options[selbox1.options.length] = new Option('E-Commerce','E-Commerce');	
selbox1.options[selbox1.options.length] = new Option('Econometrics','Econometrics');	
selbox1.options[selbox1.options.length] = new Option('Economic geography','Economic geography');	
selbox1.options[selbox1.options.length] = new Option('Economic history','Economic history');	
selbox1.options[selbox1.options.length] = new Option('Economic sociology','Economic sociology');	
selbox1.options[selbox1.options.length] = new Option('Economic systems','Economic systems');	
selbox1.options[selbox1.options.length] = new Option('Economics','Economics');	
selbox1.options[selbox1.options.length] = new Option('Energy economics','Energy economics');	
selbox1.options[selbox1.options.length] = new Option('Entrepreneurial economics','Entrepreneurial economics');	
selbox1.options[selbox1.options.length] = new Option('Environmental economics','Environmental economics');	
selbox1.options[selbox1.options.length] = new Option('Evolutionary economics','Evolutionary economics');	
selbox1.options[selbox1.options.length] = new Option('Experimental economics','Experimental economics');	
selbox1.options[selbox1.options.length] = new Option('Feminist economics','Feminist economics');	
selbox1.options[selbox1.options.length] = new Option('Finance','Finance');	
selbox1.options[selbox1.options.length] = new Option('Financial economics','Financial economics');	
selbox1.options[selbox1.options.length] = new Option('Game Theory','Game Theory');	
selbox1.options[selbox1.options.length] = new Option('Green economics','Green economics');	
selbox1.options[selbox1.options.length] = new Option('Growth economics','Growth economics');	
selbox1.options[selbox1.options.length] = new Option('Human development theory','Human development theory');	
selbox1.options[selbox1.options.length] = new Option('Industrial organization','Industrial organization');	
selbox1.options[selbox1.options.length] = new Option('Information economics','Information economics');	
selbox1.options[selbox1.options.length] = new Option('Institutional economics','Institutional economics');	
selbox1.options[selbox1.options.length] = new Option('International economics','International economics');	
selbox1.options[selbox1.options.length] = new Option('International Trade','International Trade');	
selbox1.options[selbox1.options.length] = new Option('Islamic economics','Islamic economics');	
selbox1.options[selbox1.options.length] = new Option('Labor Economics','Labor Economics');	
selbox1.options[selbox1.options.length] = new Option('Law and economics','Law and economics');	
selbox1.options[selbox1.options.length] = new Option('Macroeconomics','Macroeconomics');	
selbox1.options[selbox1.options.length] = new Option('Managerial economics','Managerial economics');	
selbox1.options[selbox1.options.length] = new Option('Mathematical economics','Mathematical economics');	
selbox1.options[selbox1.options.length] = new Option('Microeconomics','Microeconomics');	
selbox1.options[selbox1.options.length] = new Option('Monetary economics','Monetary economics');	
selbox1.options[selbox1.options.length] = new Option('Neuroeconomics','Neuroeconomics');	
selbox1.options[selbox1.options.length] = new Option('Political economy','Political economy');	
selbox1.options[selbox1.options.length] = new Option('Public economics','Public economics');	
selbox1.options[selbox1.options.length] = new Option('Public finance','Public finance');	
selbox1.options[selbox1.options.length] = new Option('Real estate economics','Real estate economics');	
selbox1.options[selbox1.options.length] = new Option('Resource economics','Resource economics');	
selbox1.options[selbox1.options.length] = new Option('Socialist economics','Socialist economics');	
selbox1.options[selbox1.options.length] = new Option('Socioeconomics','Socioeconomics');	
selbox1.options[selbox1.options.length] = new Option('Tax','Tax');	
selbox1.options[selbox1.options.length] = new Option('Transport economics','Transport economics');	
selbox1.options[selbox1.options.length] = new Option('Welfare economics','Welfare economics');	selbox1.options[selbox1.options.length] = new Option('Other','Other');
} if (chosen == "Eco-Forensic Sciences") {	
selbox1.options[selbox1.options.length] = new Option('Forensic accounting','Forensic accounting');	selbox1.options[selbox1.options.length] = new Option('Other','Other');
} if (chosen == "Art-Education") {	
selbox1.options[selbox1.options.length] = new Option('Consumer education','Consumer education');	
selbox1.options[selbox1.options.length] = new Option('Critical pedagogy','Critical pedagogy');	
selbox1.options[selbox1.options.length] = new Option('Curriculum and instruction','Curriculum and instruction');	
selbox1.options[selbox1.options.length] = new Option('Distance Education','Distance Education');	
selbox1.options[selbox1.options.length] = new Option('Educational leadership','Educational leadership');	
selbox1.options[selbox1.options.length] = new Option('Educational philosophy','Educational philosophy');	
selbox1.options[selbox1.options.length] = new Option('Educational psychology','Educational psychology');	
selbox1.options[selbox1.options.length] = new Option('Educational technology','Educational technology');	selbox1.options[selbox1.options.length] = new Option('Other','Other');
} if (chosen == "Art-Environmental Sciences") {	
selbox1.options[selbox1.options.length] = new Option('Disaster management','Disaster management');	
selbox1.options[selbox1.options.length] = new Option('Environmental policy','Environmental policy');	
selbox1.options[selbox1.options.length] = new Option('Waste management','Waste management');	selbox1.options[selbox1.options.length] = new Option('Other','Other');
} if (chosen == "Art-Forensic Sciences") {	
selbox1.options[selbox1.options.length] = new Option('Forensic anthropology','Forensic anthropology');	
selbox1.options[selbox1.options.length] = new Option('Forensic Archeology','Forensic Archeology');	
selbox1.options[selbox1.options.length] = new Option('Forensic arts','Forensic arts');	
selbox1.options[selbox1.options.length] = new Option('Forensic psychology','Forensic psychology');	selbox1.options[selbox1.options.length] = new Option('Other','Other');
} if (chosen == "Art-Humanities") {	
selbox1.options[selbox1.options.length] = new Option('History','History');	
selbox1.options[selbox1.options.length] = new Option('Language and Linguistics','Language and Linguistics');	
selbox1.options[selbox1.options.length] = new Option('Literature','Literature');	
selbox1.options[selbox1.options.length] = new Option('Performing Arts','Performing Arts');	
selbox1.options[selbox1.options.length] = new Option('Theology/Religion','Theology/Religion');	
selbox1.options[selbox1.options.length] = new Option('Visual Arts','Visual Arts');	selbox1.options[selbox1.options.length] = new Option('Other','Other');
} if (chosen == "Art-Law") {	
selbox1.options[selbox1.options.length] = new Option('Admiralty law','Admiralty law');	
selbox1.options[selbox1.options.length] = new Option('Animal law/Animal rights','Animal law/Animal rights');	
selbox1.options[selbox1.options.length] = new Option('Canon law','Canon law');	
selbox1.options[selbox1.options.length] = new Option('Civil Law','Civil Law');	
selbox1.options[selbox1.options.length] = new Option('Civil procedure','Civil procedure');	
selbox1.options[selbox1.options.length] = new Option('Comparative Law','Comparative Law');	
selbox1.options[selbox1.options.length] = new Option('Competition law','Competition law');	
selbox1.options[selbox1.options.length] = new Option('Constitutional law','Constitutional law');	
selbox1.options[selbox1.options.length] = new Option('Contracts','Contracts');	
selbox1.options[selbox1.options.length] = new Option('Corporate Law','Corporate Law');	
selbox1.options[selbox1.options.length] = new Option('Criminal Law','Criminal Law');	
selbox1.options[selbox1.options.length] = new Option('Environmental Law','Environmental Law');	
selbox1.options[selbox1.options.length] = new Option('General Law','General Law');	
selbox1.options[selbox1.options.length] = new Option('Intellectual Property Law','Intellectual Property Law');	
selbox1.options[selbox1.options.length] = new Option('International Law','International Law');	
selbox1.options[selbox1.options.length] = new Option('Jurisprudence','Jurisprudence');	
selbox1.options[selbox1.options.length] = new Option('Labor Law','Labor Law');	
selbox1.options[selbox1.options.length] = new Option('Paralegal studies','Paralegal studies');	
selbox1.options[selbox1.options.length] = new Option('Property Law','Property Law');	
selbox1.options[selbox1.options.length] = new Option('Tax Law','Tax Law');	
selbox1.options[selbox1.options.length] = new Option('Torts','Torts');	selbox1.options[selbox1.options.length] = new Option('Other','Other');
} if (chosen == "Art-Library and Museum Studies") {	
selbox1.options[selbox1.options.length] = new Option('Archival Science','Archival Science');	
selbox1.options[selbox1.options.length] = new Option('Bibliometrics','Bibliometrics');	
selbox1.options[selbox1.options.length] = new Option('Information Science','Information Science');	
selbox1.options[selbox1.options.length] = new Option('Museology','Museology');	selbox1.options[selbox1.options.length] = new Option('Other','Other');
} if (chosen == "Art-Media/Communication") {	
selbox1.options[selbox1.options.length] = new Option('Advertising','Advertising');	
selbox1.options[selbox1.options.length] = new Option('Journalism','Journalism');	
selbox1.options[selbox1.options.length] = new Option('Mass media','Mass media');	
selbox1.options[selbox1.options.length] = new Option('Nonverbal communication','Nonverbal communication');	
selbox1.options[selbox1.options.length] = new Option('Public relations','Public relations');	
selbox1.options[selbox1.options.length] = new Option('Speech communication','Speech communication');	
selbox1.options[selbox1.options.length] = new Option('Technical writing','Technical writing');	
selbox1.options[selbox1.options.length] = new Option('Translation','Translation');	
selbox1.options[selbox1.options.length] = new Option('Web content development','Web content development');	selbox1.options[selbox1.options.length] = new Option('Other','Other');
} if (chosen == "Art-Philosophy") {	
selbox1.options[selbox1.options.length] = new Option('Aesthetics','Aesthetics');	
selbox1.options[selbox1.options.length] = new Option('Applied philosophy','Applied philosophy');	
selbox1.options[selbox1.options.length] = new Option('Epistemology','Epistemology');	
selbox1.options[selbox1.options.length] = new Option('Ethics','Ethics');	
selbox1.options[selbox1.options.length] = new Option('History of philosophy','History of philosophy');	
selbox1.options[selbox1.options.length] = new Option('Logic','Logic');	
selbox1.options[selbox1.options.length] = new Option('Metaphysics','Metaphysics');	
selbox1.options[selbox1.options.length] = new Option('Philosophical traditions ','Philosophical traditions ');	
selbox1.options[selbox1.options.length] = new Option('Political philosophy','Political philosophy');	
selbox1.options[selbox1.options.length] = new Option('Social philosophy','Social philosophy');	selbox1.options[selbox1.options.length] = new Option('Other','Other');
} if (chosen == "Art-Psychology") {	
selbox1.options[selbox1.options.length] = new Option('Abnormal psychology','Abnormal psychology');	
selbox1.options[selbox1.options.length] = new Option('Applied psychology','Applied psychology');	
selbox1.options[selbox1.options.length] = new Option('Biological psychology','Biological psychology');	
selbox1.options[selbox1.options.length] = new Option('Clinical Psychology','Clinical Psychology');	
selbox1.options[selbox1.options.length] = new Option('Cognitive psychology','Cognitive psychology');	
selbox1.options[selbox1.options.length] = new Option('Community psychology','Community psychology');	
selbox1.options[selbox1.options.length] = new Option('Comparative psychology','Comparative psychology');	
selbox1.options[selbox1.options.length] = new Option('Conservation Psychology','Conservation Psychology');	
selbox1.options[selbox1.options.length] = new Option('Consumer psychology','Consumer psychology');	
selbox1.options[selbox1.options.length] = new Option('Counseling psychology','Counseling psychology');	
selbox1.options[selbox1.options.length] = new Option('Cultural psychology','Cultural psychology');	
selbox1.options[selbox1.options.length] = new Option('Developmental psychology','Developmental psychology');	
selbox1.options[selbox1.options.length] = new Option('Differential psychology','Differential psychology');	
selbox1.options[selbox1.options.length] = new Option('Environmental psychology','Environmental psychology');	
selbox1.options[selbox1.options.length] = new Option('Evolutionary psychology','Evolutionary psychology');	
selbox1.options[selbox1.options.length] = new Option('Experimental psychology','Experimental psychology');	
selbox1.options[selbox1.options.length] = new Option('General Psychology','General Psychology');	
selbox1.options[selbox1.options.length] = new Option('Health psychology','Health psychology');	
selbox1.options[selbox1.options.length] = new Option('Legal psychology','Legal psychology');	
selbox1.options[selbox1.options.length] = new Option('Media psychology','Media psychology');	
selbox1.options[selbox1.options.length] = new Option('Medical psychology','Medical psychology');	
selbox1.options[selbox1.options.length] = new Option('Military psychology','Military psychology');	
selbox1.options[selbox1.options.length] = new Option('Neuropsychology','Neuropsychology');	
selbox1.options[selbox1.options.length] = new Option('Occupational health psychology','Occupational health psychology');	
selbox1.options[selbox1.options.length] = new Option('Organizational psychology','Organizational psychology');	
selbox1.options[selbox1.options.length] = new Option('Parapsychology','Parapsychology');	
selbox1.options[selbox1.options.length] = new Option('Personality psychology','Personality psychology');	
selbox1.options[selbox1.options.length] = new Option('Political psychology','Political psychology');	
selbox1.options[selbox1.options.length] = new Option('Positive psychology','Positive psychology');	
selbox1.options[selbox1.options.length] = new Option('Psychology of religion','Psychology of religion');	
selbox1.options[selbox1.options.length] = new Option('Psychometrics','Psychometrics');	
selbox1.options[selbox1.options.length] = new Option('Psychophysics','Psychophysics');	
selbox1.options[selbox1.options.length] = new Option('Quantitative psychology','Quantitative psychology');	
selbox1.options[selbox1.options.length] = new Option('School psychology','School psychology');	
selbox1.options[selbox1.options.length] = new Option('Social psychology','Social psychology');	
selbox1.options[selbox1.options.length] = new Option('Sport psychology','Sport psychology');	selbox1.options[selbox1.options.length] = new Option('Other','Other');
} if (chosen == "Art-Recreation and Sports") {	
selbox1.options[selbox1.options.length] = new Option('Game/Toy design','Game/Toy design');	
selbox1.options[selbox1.options.length] = new Option('Physical education','Physical education');	
selbox1.options[selbox1.options.length] = new Option('Sport management/coaching','Sport management/coaching');	selbox1.options[selbox1.options.length] = new Option('Other','Other');
} if (chosen == "Art-Social Sciences") {	
selbox1.options[selbox1.options.length] = new Option('Anthropology','Anthropology');	
selbox1.options[selbox1.options.length] = new Option('Archeology','Archeology');	
selbox1.options[selbox1.options.length] = new Option('Area Studies','Area Studies');	
selbox1.options[selbox1.options.length] = new Option('Cognitive science','Cognitive science');	
selbox1.options[selbox1.options.length] = new Option('Conservation','Conservation');	
selbox1.options[selbox1.options.length] = new Option('Criminology','Criminology');	
selbox1.options[selbox1.options.length] = new Option('Cultural and Ethnic Studies','Cultural and Ethnic Studies');	
selbox1.options[selbox1.options.length] = new Option('Ecology','Ecology');	
selbox1.options[selbox1.options.length] = new Option('Emergency management','Emergency management');	
selbox1.options[selbox1.options.length] = new Option('Gender and Sexuality studies','Gender and Sexuality studies');	
selbox1.options[selbox1.options.length] = new Option('Geography','Geography');	
selbox1.options[selbox1.options.length] = new Option('Palliative Care','Palliative Care');	
selbox1.options[selbox1.options.length] = new Option('Parapsychology and occult sciences','Parapsychology and occult sciences');	
selbox1.options[selbox1.options.length] = new Option('Political Science','Political Science');	
selbox1.options[selbox1.options.length] = new Option('Population Studies','Population Studies');	
selbox1.options[selbox1.options.length] = new Option('Public Administration','Public Administration');	
selbox1.options[selbox1.options.length] = new Option('Public policy','Public policy');	
selbox1.options[selbox1.options.length] = new Option('Social epidemiology and public health','Social epidemiology and public health');	
selbox1.options[selbox1.options.length] = new Option('Social Work','Social Work');	
selbox1.options[selbox1.options.length] = new Option('Sociology','Sociology');	
selbox1.options[selbox1.options.length] = new Option('Transportation','Transportation');	
selbox1.options[selbox1.options.length] = new Option('Other','Other');
}
}
function showother()
{
	if(document.frmSubmit.specialization.value == "Other")
	{
	document.frmSubmit.otherspecialization.disabled = false;
	}
	else
	{
	document.frmSubmit.otherspecialization.disabled = true;
	}
}
function MM_openBrWindow(theURL,winName,features) { //v2.0
  window.open(theURL,winName,features);
}

function setOptions2(chosen)
{
var selbox5 = document.frmSubmit.R2;

selbox5.options.length = 1;

if(document.frmSubmit.R2.value == "Others")
{
	document.frmSubmit.txtRef.disabled = false;
}
else
{
	document.frmSubmit.txtRef.disabled = true;
	document.frmSubmit.txtRef.value = "";
}
//
if (chosen == "") {
document.getElementById("span1").innerHTML  = "";
document.frmSubmit.R2.disabled = true;
document.frmSubmit.txtRef.disabled = true;
document.frmSubmit.txtRef.value = "";
document.getElementById("message").style.display			= "none";
document.getElementById("message").style.visibility		= "hidden";
document.getElementById("r2").style.display			= "none";
document.getElementById("r2").style.visibility		= "hidden";
document.getElementById("txtref").style.display			= "none";
document.getElementById("txtref").style.visibility		= "hidden";
}
if (chosen == "Search Engine") {
selbox5.options[selbox5.options.length] = new Option('Google','Google');
selbox5.options[selbox5.options.length] = new Option('Yahoo','Yahoo');
selbox5.options[selbox5.options.length] = new Option('Bing (MSN)','Bing (MSN)');
selbox5.options[selbox5.options.length] = new Option('Басқа','Others');
document.frmSubmit.R2.disabled = false;
document.getElementById("span1").innerHTML  = "Басты сөздерді іздеу";
document.frmSubmit.txtRef.disabled = false;
document.getElementById("message").style.display			= "block";
document.getElementById("message").style.visibility		= "visible";
document.getElementById("r2").style.display			= "block";
document.getElementById("r2").style.visibility		= "visible";
document.getElementById("txtref").style.display			= "block";
document.getElementById("txtref").style.visibility		= "visible";
}
if (chosen == "Personal Referral") {
selbox5.options[selbox5.options.length] = new Option('Достар, әріптес','Friend/Colleague');
selbox5.options[selbox5.options.length] = new Option('Институт/ Ұйым','University/Institute/Organization');
document.frmSubmit.R2.disabled = false;
document.getElementById("span1").innerHTML  = "Аталуы";
document.frmSubmit.txtRef.disabled = false;
document.getElementById("r2").style.display			= "block";
document.getElementById("r2").style.visibility		= "visible";
document.getElementById("message").style.display			= "block";
document.getElementById("message").style.visibility		= "visible";
document.getElementById("txtref").style.display			= "block";
document.getElementById("txtref").style.visibility		= "visible";
}
if (chosen == "Email Newsletters") {
document.frmSubmit.R2.disabled = true;
document.getElementById("span1").innerHTML  = "";
document.frmSubmit.txtRef.disabled = true;
document.frmSubmit.txtRef.value = "";
document.getElementById("message").style.display			= "none";
document.getElementById("message").style.visibility		= "hidden";
document.getElementById("r2").style.display			= "none";
document.getElementById("r2").style.visibility		= "hidden";
document.getElementById("txtref").style.display			= "none";
document.getElementById("txtref").style.visibility		= "hidden";
}
if (chosen == "Postal Mailings") {
document.frmSubmit.R2.disabled = true;
document.getElementById("span1").innerHTML  = "";
document.frmSubmit.txtRef.disabled = true;
document.frmSubmit.txtRef.value = "";
document.getElementById("message").style.display			= "none";
document.getElementById("message").style.visibility		= "hidden";
document.getElementById("r2").style.display			= "none";
document.getElementById("r2").style.visibility		= "hidden";
document.getElementById("txtref").style.display			= "none";
document.getElementById("txtref").style.visibility		= "hidden";
}
if (chosen == "Brochures") {
document.frmSubmit.R2.disabled = true;
document.getElementById("span1").innerHTML  = "";
document.frmSubmit.txtRef.disabled = true;
document.frmSubmit.txtRef.value = "";
document.getElementById("message").style.display			= "none";
document.getElementById("message").style.visibility		= "hidden";
document.getElementById("r2").style.display			= "none";
document.getElementById("r2").style.visibility		= "hidden";
document.getElementById("txtref").style.display			= "none";
document.getElementById("txtref").style.visibility		= "hidden";
}
if (chosen == "Advertisement Banner") {
document.frmSubmit.R2.disabled = true;
document.getElementById("span1").innerHTML  = "Жарнаманы сіз қалай тапқаныңызды көрсетіңіз";
document.frmSubmit.txtRef.disabled = false;
document.getElementById("message").style.display			= "block";
document.getElementById("message").style.visibility		= "visible";
document.getElementById("r2").style.display			= "none";
document.getElementById("r2").style.visibility		= "hidden";
document.getElementById("txtref").style.display			= "block";
document.getElementById("txtref").style.visibility		= "visible";
}
if (chosen == "Website Link") {
document.frmSubmit.R2.disabled = true;
document.getElementById("span1").innerHTML  = "линк /URL-ды қалай тапқаныңызды көрсетіңіз.";
document.frmSubmit.txtRef.disabled = false;
document.getElementById("message").style.display			= "block";
document.getElementById("message").style.visibility		= "visible";
document.getElementById("r2").style.display			= "none";
document.getElementById("r2").style.visibility		= "hidden";
document.getElementById("txtref").style.display			= "block";
document.getElementById("txtref").style.visibility		= "visible";
}
if (chosen == "Journal Recommendation") {
document.frmSubmit.R2.disabled = true;
document.getElementById("span1").innerHTML  = "URL журналының атауы";
document.frmSubmit.txtRef.disabled = false;
document.getElementById("message").style.display			= "block";
document.getElementById("message").style.visibility		= "visible";
document.getElementById("r2").style.display			= "none";
document.getElementById("r2").style.visibility		= "hidden";
document.getElementById("txtref").style.display			= "block";
document.getElementById("txtref").style.visibility		= "visible";
}
if (chosen == "Magazine Ads") {
document.frmSubmit.R2.disabled = true;
document.getElementById("span1").innerHTML  = "Журналдыңң аталуы";
document.frmSubmit.txtRef.disabled = false;
document.getElementById("message").style.display			= "block";
document.getElementById("message").style.visibility		= "visible";
document.getElementById("r2").style.display			= "none";
document.getElementById("r2").style.visibility		= "hidden";
document.getElementById("txtref").style.display			= "block";
document.getElementById("txtref").style.visibility		= "visible";
}
if (chosen == "Others") {
document.frmSubmit.R2.disabled = true;
document.getElementById("span1").innerHTML  = "URL атауы";
document.frmSubmit.txtRef.disabled = false;
document.getElementById("message").style.display			= "block";
document.getElementById("message").style.visibility		= "visible";
document.getElementById("r2").style.display			= "none";
document.getElementById("r2").style.visibility		= "hidden";
document.getElementById("txtref").style.display			= "block";
document.getElementById("txtref").style.visibility		= "visible";
}
}