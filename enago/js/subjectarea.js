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
selbox1.options[selbox1.options.length] = new Option('Acupuncture (鍼灸療法)','Acupuncture');	
selbox1.options[selbox1.options.length] = new Option('Alternative Medicine (代替医療)','Alternative Medicine');	
selbox1.options[selbox1.options.length] = new Option('Ayurveda (アーユルヴェーダ)','Ayurveda');	
selbox1.options[selbox1.options.length] = new Option('Biofeedback  (バイオフィードバック)','Biofeedback ');	
selbox1.options[selbox1.options.length] = new Option('Chiropractic medicine  (カイロプラクティック医学)','Chiropractic medicine ');	
selbox1.options[selbox1.options.length] = new Option('Herbalism  (本草学)','Herbalism ');	
selbox1.options[selbox1.options.length] = new Option('Homeopathy  (ホメオパシー)','Homeopathy ');	
selbox1.options[selbox1.options.length] = new Option('Hypnosis  (催眠)','Hypnosis ');	
selbox1.options[selbox1.options.length] = new Option('Meditation  (瞑想)','Meditation ');	
selbox1.options[selbox1.options.length] = new Option('Naturopathy (自然療法)','Naturopathy');	
selbox1.options[selbox1.options.length] = new Option('Nutritional-based therapies (栄養価ベースの治療法)','Nutritional-based therapies');	
selbox1.options[selbox1.options.length] = new Option('Traditional Chinese medicine  (伝統中国医学)','Traditional Chinese medicine ');	
selbox1.options[selbox1.options.length] = new Option('Yoga  (ヨガ)','Yoga ');	selbox1.options[selbox1.options.length] = new Option('Other (その他)','Other');
} if (chosen == "Med-Dentistry") {	
selbox1.options[selbox1.options.length] = new Option('Endodontics (歯内療法学)','Endodontics');	
selbox1.options[selbox1.options.length] = new Option('General Dentistry (一般歯学)','General Dentistry');	
selbox1.options[selbox1.options.length] = new Option('Oral & Maxillofacial Pathology (口腔顎顔面生理学)','Oral & Maxillofacial Pathology');	
selbox1.options[selbox1.options.length] = new Option('Oral & Maxillofacial Surgery (口腔顎顔面外科)','Oral & Maxillofacial Surgery');	
selbox1.options[selbox1.options.length] = new Option('Orthodontics (歯科矯正学)','Orthodontics');	
selbox1.options[selbox1.options.length] = new Option('Pediatric Dentistry (小児歯学)','Pediatric Dentistry');	
selbox1.options[selbox1.options.length] = new Option('Periodontics (歯周療法学)','Periodontics');	
selbox1.options[selbox1.options.length] = new Option('Prosthodontics (歯科補綴学)','Prosthodontics');	selbox1.options[selbox1.options.length] = new Option('Other (その他)','Other');
} if (chosen == "Med-Forensic Sciences") {	
selbox1.options[selbox1.options.length] = new Option('Forensic dentistry (法歯学)','Forensic dentistry');	
selbox1.options[selbox1.options.length] = new Option('Forensic psychiatry  (法精神医学)','Forensic psychiatry ');	selbox1.options[selbox1.options.length] = new Option('Other (その他)','Other');
} if (chosen == "Med-Health management") {	
selbox1.options[selbox1.options.length] = new Option('Health information management (医療情報管理学)','Health information management');	
selbox1.options[selbox1.options.length] = new Option('Healthcare policies/economics (健康管理政策/経済学)','Healthcare policies/economics');	
selbox1.options[selbox1.options.length] = new Option('Hospital management/administration (病院管理学)','Hospital management/administration');	
selbox1.options[selbox1.options.length] = new Option('Public health management/administration (公衆衛生管理学)','Public health management/administration');	selbox1.options[selbox1.options.length] = new Option('Other (その他)','Other');
} if (chosen == "Med-Medicine") {	
selbox1.options[selbox1.options.length] = new Option('Allergology (アレルギー学)','Allergology');	
selbox1.options[selbox1.options.length] = new Option('Anatomy (解剖学)','Anatomy');	
selbox1.options[selbox1.options.length] = new Option('Andrology (男性病学)','Andrology');	
selbox1.options[selbox1.options.length] = new Option('Anesthesiology (麻酔学)','Anesthesiology');	
selbox1.options[selbox1.options.length] = new Option('Biomechanics (バイオメカニクス)','Biomechanics');	
selbox1.options[selbox1.options.length] = new Option('Biomedical Research (Experimental medicine) (生物医学研究（実験医学）)','Biomedical Research (Experimental medicine)');	
selbox1.options[selbox1.options.length] = new Option('Cardiac/Cardiovascular Surgery (心臓血管外科)','Cardiac/Cardiovascular Surgery');	
selbox1.options[selbox1.options.length] = new Option('Cardiology (心臓病学)','Cardiology');	
selbox1.options[selbox1.options.length] = new Option('Chest Medicine (胸部医学)','Chest Medicine');	
selbox1.options[selbox1.options.length] = new Option('Clinical Microbiology (臨床微生物学)','Clinical Microbiology');	
selbox1.options[selbox1.options.length] = new Option('Clinical/Anatomical Pathology (臨床・解剖病理学)','Clinical/Anatomical Pathology');	
selbox1.options[selbox1.options.length] = new Option('Colorectal/Intestinal Surgery (結腸直腸手術)','Colorectal/Intestinal Surgery');	
selbox1.options[selbox1.options.length] = new Option('Critical/Intensive Medicine (救命・救急医療)','Critical/Intensive Medicine');	
selbox1.options[selbox1.options.length] = new Option('Dermatology (皮膚科学)','Dermatology');	
selbox1.options[selbox1.options.length] = new Option('Emergency Medicine (緊急医療)','Emergency Medicine');	
selbox1.options[selbox1.options.length] = new Option('Emergency Surgery (緊急手術)','Emergency Surgery');	
selbox1.options[selbox1.options.length] = new Option('Endocrinology (内分泌学)','Endocrinology');	
selbox1.options[selbox1.options.length] = new Option('Epidemiology (疫学)','Epidemiology');	
selbox1.options[selbox1.options.length] = new Option('Exercise Physiology (運動生理学)','Exercise Physiology');	
selbox1.options[selbox1.options.length] = new Option('Gastroenterology (胃腸病学)','Gastroenterology');	
selbox1.options[selbox1.options.length] = new Option('General Medicine (一般医療)','General Medicine');	
selbox1.options[selbox1.options.length] = new Option('General Orthopedics (一般整形外科)','General Orthopedics');	
selbox1.options[selbox1.options.length] = new Option('General Surgery (一般外科)','General Surgery');	
selbox1.options[selbox1.options.length] = new Option('Geriatrics & Gerontology (老年・老化医学)','Geriatrics & Gerontology');	
selbox1.options[selbox1.options.length] = new Option('Hematology (血液学)','Hematology');	
selbox1.options[selbox1.options.length] = new Option('Hepatology (肝臓病学)','Hepatology');	
selbox1.options[selbox1.options.length] = new Option('Immunology (免疫学)','Immunology');	
selbox1.options[selbox1.options.length] = new Option('Infectious disease (感染症)','Infectious disease');	
selbox1.options[selbox1.options.length] = new Option('Infectious Diseases (感染症)','Infectious Diseases');	
selbox1.options[selbox1.options.length] = new Option('Intensive/Critical Medicine (集中治療医学)','Intensive/Critical Medicine');	
selbox1.options[selbox1.options.length] = new Option('Internal Medicine (内科医学)','Internal Medicine');	
selbox1.options[selbox1.options.length] = new Option('Kinematics/Kinesiology (運動学)','Kinematics/Kinesiology');	
selbox1.options[selbox1.options.length] = new Option('Medical Education (医療教育)','Medical Education');	
selbox1.options[selbox1.options.length] = new Option('Medical Physics (医療物理学)','Medical Physics');	
selbox1.options[selbox1.options.length] = new Option('Medical Statistics (医療統計)','Medical Statistics');	
selbox1.options[selbox1.options.length] = new Option('Medical Technology (医療技術)','Medical Technology');	
selbox1.options[selbox1.options.length] = new Option('Molecular Medicine (分子医療)','Molecular Medicine');	
selbox1.options[selbox1.options.length] = new Option('Nephrology (腎臓)','Nephrology');	
selbox1.options[selbox1.options.length] = new Option('Neurology (神経学)','Neurology');	
selbox1.options[selbox1.options.length] = new Option('Nutrition (栄養学)','Nutrition');	
selbox1.options[selbox1.options.length] = new Option('Oncology (腫瘍学)','Oncology');	
selbox1.options[selbox1.options.length] = new Option('Ophthalmology (眼科学)','Ophthalmology');	
selbox1.options[selbox1.options.length] = new Option('Organ Transplantation (臓器移植)','Organ Transplantation');	
selbox1.options[selbox1.options.length] = new Option('Orthopedics (整形外科学)','Orthopedics');	
selbox1.options[selbox1.options.length] = new Option('Osteopathic Medicine (オステオパシー医学)','Osteopathic Medicine');	
selbox1.options[selbox1.options.length] = new Option('Otolaryngology (耳鼻咽喉学)','Otolaryngology');	
selbox1.options[selbox1.options.length] = new Option('Pain Medicine (疼痛医学)','Pain Medicine');	
selbox1.options[selbox1.options.length] = new Option('Palliative Medicine (緩和医療学)','Palliative Medicine');	
selbox1.options[selbox1.options.length] = new Option('Pediatrics (小児科学)','Pediatrics');	
selbox1.options[selbox1.options.length] = new Option('Physiology (生理学)','Physiology');	
selbox1.options[selbox1.options.length] = new Option('Psychiatry (精神医学)','Psychiatry');	
selbox1.options[selbox1.options.length] = new Option('Pulmonology/Respiratory Medicine (肺臓学・呼吸器内科)','Pulmonology/Respiratory Medicine');	
selbox1.options[selbox1.options.length] = new Option('Radiology/Imaging (放射線・イメージング)','Radiology/Imaging');	
selbox1.options[selbox1.options.length] = new Option('Rheumatology (リウマチ学)','Rheumatology');	
selbox1.options[selbox1.options.length] = new Option('Sleep Medicine (睡眠医学)','Sleep Medicine');	
selbox1.options[selbox1.options.length] = new Option('Social Medicine (社会医学)','Social Medicine');	
selbox1.options[selbox1.options.length] = new Option('Sports Medicine & Technology (スポーツ医療・テクノロジー)','Sports Medicine & Technology');	
selbox1.options[selbox1.options.length] = new Option('Transplant Surgery (移植手術)','Transplant Surgery');	
selbox1.options[selbox1.options.length] = new Option('Trauma Surgery (外傷外科)','Trauma Surgery');	
selbox1.options[selbox1.options.length] = new Option('Urology (泌尿器学)','Urology');	
selbox1.options[selbox1.options.length] = new Option('Vascular Medicine (血管学)','Vascular Medicine');	
selbox1.options[selbox1.options.length] = new Option('Vascular Surgery (血管手術)','Vascular Surgery');	
selbox1.options[selbox1.options.length] = new Option('Veterinary Medicine (獣医学)','Veterinary Medicine');	selbox1.options[selbox1.options.length] = new Option('Other (その他)','Other');
} if (chosen == "Med-Nursing") {	
selbox1.options[selbox1.options.length] = new Option('Family nursing (家族看護学)','Family nursing');	
selbox1.options[selbox1.options.length] = new Option('Geriatric nursing (高齢者看護)','Geriatric nursing');	
selbox1.options[selbox1.options.length] = new Option('Home health nursing (在宅看護)','Home health nursing');	
selbox1.options[selbox1.options.length] = new Option('Nursing (看護)','Nursing');	
selbox1.options[selbox1.options.length] = new Option('Palliative nursing (緩和ケア看護学)','Palliative nursing');	
selbox1.options[selbox1.options.length] = new Option('Pediatric nursing (小児看護学)','Pediatric nursing');	
selbox1.options[selbox1.options.length] = new Option('Perioperative nursing (周術期看護)','Perioperative nursing');	
selbox1.options[selbox1.options.length] = new Option('Psychiatric and mental health nursing (精神科・メンタルヘルス看護)','Psychiatric and mental health nursing');	selbox1.options[selbox1.options.length] = new Option('Other (その他)','Other');
} if (chosen == "Med-Obstetrics and Gynecology") {	
selbox1.options[selbox1.options.length] = new Option('Family planning (家族計画)','Family planning');	
selbox1.options[selbox1.options.length] = new Option('Gynecology (婦人科学)','Gynecology');	
selbox1.options[selbox1.options.length] = new Option('Incontinence (失禁)','Incontinence');	
selbox1.options[selbox1.options.length] = new Option('Infertility (不妊)','Infertility');	
selbox1.options[selbox1.options.length] = new Option('Laparoscopy (腹腔鏡検査法)','Laparoscopy');	
selbox1.options[selbox1.options.length] = new Option('Menstruation/Menopause (月経・更年期)','Menstruation/Menopause');	
selbox1.options[selbox1.options.length] = new Option('Obstetric/Gynecological Surgery (産婦人科手術)','Obstetric/Gynecological Surgery');	
selbox1.options[selbox1.options.length] = new Option('Obstetrics  (産科学)','Obstetrics ');	
selbox1.options[selbox1.options.length] = new Option('Perinatology (周産期学)','Perinatology');	selbox1.options[selbox1.options.length] = new Option('Other (その他)','Other');
} if (chosen == "Med-Rehabilitation Sciences") {	
selbox1.options[selbox1.options.length] = new Option('Ergonomics (人間工学)','Ergonomics');	
selbox1.options[selbox1.options.length] = new Option('Occupational therapy (作業療法)','Occupational therapy');	
selbox1.options[selbox1.options.length] = new Option('Physical Therapy (理学療法)','Physical Therapy');	
selbox1.options[selbox1.options.length] = new Option('Rehabilitation Sciences (リハビリテーション科学)','Rehabilitation Sciences');	
selbox1.options[selbox1.options.length] = new Option('Speech/Audio Therapy (言語・聴覚療法)','Speech/Audio Therapy');	selbox1.options[selbox1.options.length] = new Option('Other (その他)','Other');
} if (chosen == "Lif-Agriculture") {	
selbox1.options[selbox1.options.length] = new Option('Agricultural economics (農業経済学)','Agricultural economics');	
selbox1.options[selbox1.options.length] = new Option('Agriculture (農学)','Agriculture');	
selbox1.options[selbox1.options.length] = new Option('Agroecology (農業生態学)','Agroecology');	
selbox1.options[selbox1.options.length] = new Option('Agrology (農業科学 )','Agrology');	
selbox1.options[selbox1.options.length] = new Option('Agronomy (作物栽培学)','Agronomy');	
selbox1.options[selbox1.options.length] = new Option('Animal Husbandry (畜産)','Animal Husbandry');	
selbox1.options[selbox1.options.length] = new Option('Dairy Science (酪農科学)','Dairy Science');	
selbox1.options[selbox1.options.length] = new Option('Enology (ワイン醸造学)','Enology');	
selbox1.options[selbox1.options.length] = new Option('Farming (農業)','Farming');	
selbox1.options[selbox1.options.length] = new Option('Fisheries/Aquaculture (水産・養殖業)','Fisheries/Aquaculture');	
selbox1.options[selbox1.options.length] = new Option('Forestry (林学)','Forestry');	
selbox1.options[selbox1.options.length] = new Option('Horticulture (園芸学)','Horticulture');	
selbox1.options[selbox1.options.length] = new Option('Sustainable Agriculture (持続可能な農業)','Sustainable Agriculture');	
selbox1.options[selbox1.options.length] = new Option('Urban and Industrial Agriculture (都市・産業農業)','Urban and Industrial Agriculture');	selbox1.options[selbox1.options.length] = new Option('Other (その他)','Other');
} if (chosen == "Lif-Biochemistry") {	
selbox1.options[selbox1.options.length] = new Option('Animal Biochemistry (動物生化学)','Animal Biochemistry');	
selbox1.options[selbox1.options.length] = new Option('General Biochemistry (一般生物化学)','General Biochemistry');	
selbox1.options[selbox1.options.length] = new Option('Metabolism (代謝学)','Metabolism');	
selbox1.options[selbox1.options.length] = new Option('Plant Biochemistry (植物生化学)','Plant Biochemistry');	selbox1.options[selbox1.options.length] = new Option('Other (その他)','Other');
} if (chosen == "Lif-Bioengineering") {	
selbox1.options[selbox1.options.length] = new Option('Biomedical Engineering (医用生体工学)','Biomedical Engineering');	
selbox1.options[selbox1.options.length] = new Option('Biomimetics (バイオミメティクス)','Biomimetics');	
selbox1.options[selbox1.options.length] = new Option('Biomolecular engineering (生物分子工学)','Biomolecular engineering');	
selbox1.options[selbox1.options.length] = new Option('Bioprocess Engineering (バイオプロセス工学)','Bioprocess Engineering');	
selbox1.options[selbox1.options.length] = new Option('Biotechnology (バイオテクノロジー)','Biotechnology');	
selbox1.options[selbox1.options.length] = new Option('Cellular Engineering (細胞工学)','Cellular Engineering');	
selbox1.options[selbox1.options.length] = new Option('Tissue engineering  (再生医工学)','Tissue engineering ');	selbox1.options[selbox1.options.length] = new Option('Other (その他)','Other');
} if (chosen == "Lif-Biosciences") {	
selbox1.options[selbox1.options.length] = new Option('Bioinformatics (生物情報学)','Bioinformatics');	
selbox1.options[selbox1.options.length] = new Option('Biomaterial Science (生体材料科学)','Biomaterial Science');	
selbox1.options[selbox1.options.length] = new Option('Biomodeling (生物モデリング)','Biomodeling');	
selbox1.options[selbox1.options.length] = new Option('Biophysics (生物物理学)','Biophysics');	
selbox1.options[selbox1.options.length] = new Option('Biostatistics (生物統計学)','Biostatistics');	
selbox1.options[selbox1.options.length] = new Option('Cancer Research (がん研究)','Cancer Research');	
selbox1.options[selbox1.options.length] = new Option('Cell Biology (細胞生物学)','Cell Biology');	
selbox1.options[selbox1.options.length] = new Option('Cognitive science (認知科学)','Cognitive science');	
selbox1.options[selbox1.options.length] = new Option('Computational Biology (計算生物学)','Computational Biology');	
selbox1.options[selbox1.options.length] = new Option('Dental Research (歯科研究)','Dental Research');	
selbox1.options[selbox1.options.length] = new Option('Embryology (胎生学)','Embryology');	
selbox1.options[selbox1.options.length] = new Option('Entomology (昆虫学)','Entomology');	
selbox1.options[selbox1.options.length] = new Option('Enzymology (酵素学)','Enzymology');	
selbox1.options[selbox1.options.length] = new Option('Evolutionary biology (進化生物学)','Evolutionary biology');	
selbox1.options[selbox1.options.length] = new Option('Food Sciences (食品科学)','Food Sciences');	
selbox1.options[selbox1.options.length] = new Option('Game Theory (ゲーム理論)','Game Theory');	
selbox1.options[selbox1.options.length] = new Option('General/Molecular Pathology (一般・分子病理学)','General/Molecular Pathology');	
selbox1.options[selbox1.options.length] = new Option('Marine Sciences (海洋科学)','Marine Sciences');	
selbox1.options[selbox1.options.length] = new Option('Molecular Biology (分子生物学)','Molecular Biology');	
selbox1.options[selbox1.options.length] = new Option('Proteomics/Protein Studies (プロテオミクス・蛋白質研究)','Proteomics/Protein Studies');	
selbox1.options[selbox1.options.length] = new Option('Structural Biology (構造生物学)','Structural Biology');	
selbox1.options[selbox1.options.length] = new Option('Veterinary Sciences (獣医学)','Veterinary Sciences');	selbox1.options[selbox1.options.length] = new Option('Other (その他)','Other');
} if (chosen == "Lif-Botany") {	
selbox1.options[selbox1.options.length] = new Option('Botany (植物学)','Botany');	
selbox1.options[selbox1.options.length] = new Option('Phycology (藻類学)','Phycology');	
selbox1.options[selbox1.options.length] = new Option('Plant anatomy/Phytoanatomy (植物解剖学)','Plant anatomy/Phytoanatomy');	
selbox1.options[selbox1.options.length] = new Option('Plant chemistry/Phytochemistry (植物化学)','Plant chemistry/Phytochemistry');	
selbox1.options[selbox1.options.length] = new Option('Plant genetics/Phytogenetics (植物遺伝学)','Plant genetics/Phytogenetics');	
selbox1.options[selbox1.options.length] = new Option('Plant pathology/Phytopathology (植物病理学)','Plant pathology/Phytopathology');	
selbox1.options[selbox1.options.length] = new Option('Plant physiology/Phytophysiology (植物生理学)','Plant physiology/Phytophysiology');	selbox1.options[selbox1.options.length] = new Option('Other (その他)','Other');
} if (chosen == "Lif-Environmental Biosciences") {	
selbox1.options[selbox1.options.length] = new Option('Biosphere Sciences (生物圏学)','Biosphere Sciences');	
selbox1.options[selbox1.options.length] = new Option('Conservation (Habitat, Wildlife, Species, Water) (保全（生息地、野生動物、種、水）)','Conservation (Habitat, Wildlife, Species, Water)');	
selbox1.options[selbox1.options.length] = new Option('Ecology (生態学)','Ecology');	
selbox1.options[selbox1.options.length] = new Option('Environmental chemistry (環境化学)','Environmental chemistry');	
selbox1.options[selbox1.options.length] = new Option('Environmental Engineering (環境工学)','Environmental Engineering');	
selbox1.options[selbox1.options.length] = new Option('Environmental Material Sciences (環境物質学)','Environmental Material Sciences');	
selbox1.options[selbox1.options.length] = new Option('Environmental Resources (環境資源)','Environmental Resources');	
selbox1.options[selbox1.options.length] = new Option('Paleontology (古生物学)','Paleontology');	
selbox1.options[selbox1.options.length] = new Option('Soil Sciences (土壌科学)','Soil Sciences');	
selbox1.options[selbox1.options.length] = new Option('Waste management (廃棄物管理)','Waste management');	selbox1.options[selbox1.options.length] = new Option('Other (その他)','Other');
} if (chosen == "Lif-Forensic Sciences") {	
selbox1.options[selbox1.options.length] = new Option('Forensic criminalistics  (法犯罪捜査学)','Forensic criminalistics ');	
selbox1.options[selbox1.options.length] = new Option('Forensic entomology (法医昆虫学)','Forensic entomology');	
selbox1.options[selbox1.options.length] = new Option('Forensic pathology  (法医解剖学)','Forensic pathology ');	
selbox1.options[selbox1.options.length] = new Option('Forensic toxicology (法医中毒学)','Forensic toxicology');	
selbox1.options[selbox1.options.length] = new Option('Other (その他)','Other');
} if (chosen == "Lif-Genetics") {	
selbox1.options[selbox1.options.length] = new Option('Applied Genetics (応用遺伝子学)','Applied Genetics');	
selbox1.options[selbox1.options.length] = new Option('Genetic engineering (遺伝子工学)','Genetic engineering');	
selbox1.options[selbox1.options.length] = new Option('Genetics (遺伝学)','Genetics');	
selbox1.options[selbox1.options.length] = new Option('Genomics (ゲノミクス)','Genomics');	
selbox1.options[selbox1.options.length] = new Option('Nucleic Acid Research (核酸研究)','Nucleic Acid Research');	selbox1.options[selbox1.options.length] = new Option('Other (その他)','Other');
} if (chosen == "Lif-Microbiology") {	
selbox1.options[selbox1.options.length] = new Option('Agricultural microbiology (農業微生物学)','Agricultural microbiology');	
selbox1.options[selbox1.options.length] = new Option('Bacteriology (細菌学)','Bacteriology');	
selbox1.options[selbox1.options.length] = new Option('Environmental microbiology (環境微生物学)','Environmental microbiology');	
selbox1.options[selbox1.options.length] = new Option('Food microbiology (食品微生物学)','Food microbiology');	
selbox1.options[selbox1.options.length] = new Option('Industrial microbiology (産業微生物学)','Industrial microbiology');	
selbox1.options[selbox1.options.length] = new Option('Medical microbiology (医学微生物学)','Medical microbiology');	
selbox1.options[selbox1.options.length] = new Option('Microbial physiology (微生物生理学)','Microbial physiology');	
selbox1.options[selbox1.options.length] = new Option('Microbiology (微生物学)','Microbiology');	
selbox1.options[selbox1.options.length] = new Option('Mycology (真菌学)','Mycology');	
selbox1.options[selbox1.options.length] = new Option('Parasitology (寄生虫学)','Parasitology');	
selbox1.options[selbox1.options.length] = new Option('Pharmaceutical microbiology (薬学微生物学)','Pharmaceutical microbiology');	
selbox1.options[selbox1.options.length] = new Option('Soil microbiology (土壌微生物学)','Soil microbiology');	
selbox1.options[selbox1.options.length] = new Option('Virology (ウイルス学)','Virology');	selbox1.options[selbox1.options.length] = new Option('Other (その他)','Other');
} if (chosen == "Lif-Neurosciences") {	
selbox1.options[selbox1.options.length] = new Option('Behavioral neuroscience (行動神経科学)','Behavioral neuroscience');	
selbox1.options[selbox1.options.length] = new Option('Cellular neuroscience (細胞神経科学)','Cellular neuroscience');	
selbox1.options[selbox1.options.length] = new Option('Cognitive neuroscience (認知神経科学)','Cognitive neuroscience');	
selbox1.options[selbox1.options.length] = new Option('Computational neuroscience (計算神経科学)','Computational neuroscience');	
selbox1.options[selbox1.options.length] = new Option('Developmental neuroscience (発生神経科学)','Developmental neuroscience');	
selbox1.options[selbox1.options.length] = new Option('Neurosciences (神経科学)','Neurosciences');	selbox1.options[selbox1.options.length] = new Option('Other (その他)','Other');
} if (chosen == "Lif-Pathology") {	
selbox1.options[selbox1.options.length] = new Option('Anatomical/Surgical pathology (解剖・外科病理学)','Anatomical/Surgical pathology');	
selbox1.options[selbox1.options.length] = new Option('Clinical pathology (臨床病理学)','Clinical pathology');	
selbox1.options[selbox1.options.length] = new Option('Cytopathology (細胞病理学)','Cytopathology');	
selbox1.options[selbox1.options.length] = new Option('Digital Pathology (デジタル病理学)','Digital Pathology');	
selbox1.options[selbox1.options.length] = new Option('General Pathology (一般生理学)','General Pathology');	
selbox1.options[selbox1.options.length] = new Option('Hematopathology (血液病理学)','Hematopathology');	
selbox1.options[selbox1.options.length] = new Option('Histopathology (組織病理学)','Histopathology');	
selbox1.options[selbox1.options.length] = new Option('Molecular Pathology (分子病理学)','Molecular Pathology');	
selbox1.options[selbox1.options.length] = new Option('Telepathology (遠隔病理診断)','Telepathology');	selbox1.options[selbox1.options.length] = new Option('Other (その他)','Other');
} if (chosen == "Lif-Pharmaceutical Sciences") {	
selbox1.options[selbox1.options.length] = new Option('Pharmaceutical chemistry (製薬化学)','Pharmaceutical chemistry');	
selbox1.options[selbox1.options.length] = new Option('Pharmaceutical Research (薬学研究)','Pharmaceutical Research');	
selbox1.options[selbox1.options.length] = new Option('Pharmaceutical toxicology (理学的中毒学)','Pharmaceutical toxicology');	
selbox1.options[selbox1.options.length] = new Option('Pharmaceutics (調剤学)','Pharmaceutics');	
selbox1.options[selbox1.options.length] = new Option('Pharmacodynamics (薬力学)','Pharmacodynamics');	
selbox1.options[selbox1.options.length] = new Option('Pharmacogenomics (薬理ゲノム学)','Pharmacogenomics');	
selbox1.options[selbox1.options.length] = new Option('Pharmacognosy (生薬学)','Pharmacognosy');	
selbox1.options[selbox1.options.length] = new Option('Pharmacokinetics (薬物動態学)','Pharmacokinetics');	
selbox1.options[selbox1.options.length] = new Option('Pharmacotherapy (薬物治療学)','Pharmacotherapy');	selbox1.options[selbox1.options.length] = new Option('Other (その他)','Other');
} if (chosen == "Lif-Social Biosciences") {	
selbox1.options[selbox1.options.length] = new Option('Anthropology (人類学)','Anthropology');	
selbox1.options[selbox1.options.length] = new Option('Archeology (考古学)','Archeology');	selbox1.options[selbox1.options.length] = new Option('Other (その他)','Other');
} if (chosen == "Lif-Zoology") {	
selbox1.options[selbox1.options.length] = new Option('Acarology (ダニ学)','Acarology');	
selbox1.options[selbox1.options.length] = new Option('Anthrozoology (ヒトと動物の関係学)','Anthrozoology');	
selbox1.options[selbox1.options.length] = new Option('Arachnology (クモ学 )','Arachnology');	
selbox1.options[selbox1.options.length] = new Option('Cetology (クジラ学 )','Cetology');	
selbox1.options[selbox1.options.length] = new Option('Ethology (動物行動学)','Ethology');	
selbox1.options[selbox1.options.length] = new Option('Helminthology (蠕虫学)','Helminthology');	
selbox1.options[selbox1.options.length] = new Option('Herpetology (爬虫類学)','Herpetology');	
selbox1.options[selbox1.options.length] = new Option('Ichthyology (魚類学)','Ichthyology');	
selbox1.options[selbox1.options.length] = new Option('Malacology (貝類学)','Malacology');	
selbox1.options[selbox1.options.length] = new Option('Mammalogy (哺乳類学)','Mammalogy');	
selbox1.options[selbox1.options.length] = new Option('Nematology (線虫学)','Nematology');	
selbox1.options[selbox1.options.length] = new Option('Ornithology (鳥類学)','Ornithology');	
selbox1.options[selbox1.options.length] = new Option('Protozoology (原生動物学)','Protozoology');	
selbox1.options[selbox1.options.length] = new Option('Zoography (動物誌学)','Zoography');	
selbox1.options[selbox1.options.length] = new Option('Zoology (動物学)','Zoology');	selbox1.options[selbox1.options.length] = new Option('Other (その他)','Other');
} if (chosen == "Phy-Astronomy/Astrophysics") {	
selbox1.options[selbox1.options.length] = new Option('Astrobiology (宇宙生物学)','Astrobiology');	
selbox1.options[selbox1.options.length] = new Option('Astrophysics (宇宙物理学)','Astrophysics');	
selbox1.options[selbox1.options.length] = new Option('Observational Astronomy (観測天文学)','Observational Astronomy');	
selbox1.options[selbox1.options.length] = new Option('Theoretical Astronomy  (理論天文学)','Theoretical Astronomy ');	selbox1.options[selbox1.options.length] = new Option('Other (その他)','Other');
} if (chosen == "Phy-Chemistry") {	
selbox1.options[selbox1.options.length] = new Option('Analytical Chemistry (分析化学)','Analytical Chemistry');	
selbox1.options[selbox1.options.length] = new Option('Applied Chemistry (応用化学)','Applied Chemistry');	
selbox1.options[selbox1.options.length] = new Option('Astrochemistry (宇宙化学)','Astrochemistry');	
	
selbox1.options[selbox1.options.length] = new Option('Cheminformatics (化学情報学)','Cheminformatics');	
selbox1.options[selbox1.options.length] = new Option('Computational Chemistry (計算化学)','Computational Chemistry');	
selbox1.options[selbox1.options.length] = new Option('Coordination Chemistry  (配位化学)','Coordination Chemistry ');	
selbox1.options[selbox1.options.length] = new Option('Electrochemistry (電気化学)','Electrochemistry');	
selbox1.options[selbox1.options.length] = new Option('Environmental chemistry (環境化学)','Environmental chemistry');	
selbox1.options[selbox1.options.length] = new Option('Geochemistry (地球化学)','Geochemistry');	
selbox1.options[selbox1.options.length] = new Option('Inorganic Chemistry (無機化学)','Inorganic Chemistry');	
selbox1.options[selbox1.options.length] = new Option('Interface and colloid science (界面とコロイド科学)','Interface and colloid science');	
selbox1.options[selbox1.options.length] = new Option('Marine chemistry (海洋化学)','Marine chemistry');	
selbox1.options[selbox1.options.length] = new Option('Mathematical chemistry (数理化学)','Mathematical chemistry');	
selbox1.options[selbox1.options.length] = new Option('Natural Products chemistry (天然物化学)','Natural Products chemistry');	
selbox1.options[selbox1.options.length] = new Option('Nuclear chemistry (核化学)','Nuclear chemistry');	
selbox1.options[selbox1.options.length] = new Option('Organic Chemistry  (有機化学)','Organic Chemistry ');	
selbox1.options[selbox1.options.length] = new Option('Organometallic Chemistry  (有機金属化学)','Organometallic Chemistry ');	
selbox1.options[selbox1.options.length] = new Option('Physical Chemistry  (物理化学)','Physical Chemistry ');	
selbox1.options[selbox1.options.length] = new Option('Quantum chemistry (量子化学)','Quantum chemistry');	
selbox1.options[selbox1.options.length] = new Option('Solid State Chemistry  (固体化学)','Solid State Chemistry ');	
selbox1.options[selbox1.options.length] = new Option('Spectroscopy  (分光学)','Spectroscopy ');	
selbox1.options[selbox1.options.length] = new Option('Structural Chemistry  (構造化学)','Structural Chemistry ');	
selbox1.options[selbox1.options.length] = new Option('Theoretical chemistry (理論化学)','Theoretical chemistry');
selbox1.options[selbox1.options.length] = new Option('Other (その他)','Other');
} if (chosen == "Phy-Computer/Information Sciences") {	
selbox1.options[selbox1.options.length] = new Option('Algebraic (symbolic) computation (代数的（記号的）計算 )','Algebraic (symbolic) computation');	
selbox1.options[selbox1.options.length] = new Option('Algorithms (アルゴリズム)','Algorithms');	
selbox1.options[selbox1.options.length] = new Option('Applied Information Sciences (応用情報サイエンス)','Applied Information Sciences');	
selbox1.options[selbox1.options.length] = new Option('Artificial Intelligence (人工知能)','Artificial Intelligence');	
selbox1.options[selbox1.options.length] = new Option('Bioinformatics (生物情報学)','Bioinformatics');	
selbox1.options[selbox1.options.length] = new Option('Biomodeling (生物モデリング)','Biomodeling');	
selbox1.options[selbox1.options.length] = new Option('Computational finance (計算金融学)','Computational finance');	
selbox1.options[selbox1.options.length] = new Option('Computational number theory (計算整数論)','Computational number theory');	
selbox1.options[selbox1.options.length] = new Option('Computer Aided Engineering (CAE) (コンピューター援用エンジニアリング)','Computer Aided Engineering (CAE)');	
selbox1.options[selbox1.options.length] = new Option('Computer and society (コンピュータと社会)','Computer and society');	
selbox1.options[selbox1.options.length] = new Option('Computer architecture (計算機アーキテクチャ)','Computer architecture');	
selbox1.options[selbox1.options.length] = new Option('Computer communications (networks) (コンピュータ・コミュニケーション（ネットワーク）)','Computer communications (networks)');	
selbox1.options[selbox1.options.length] = new Option('Computer Graphics (コンピューター・グラフィックス)','Computer Graphics');	
selbox1.options[selbox1.options.length] = new Option('Computer Hardware (コンピューター・ハードウェア)','Computer Hardware');	
selbox1.options[selbox1.options.length] = new Option('Computer Networking (コンピュータ・ネットワーキング)','Computer Networking');	
selbox1.options[selbox1.options.length] = new Option('Computer Science (コンピューター・サイエンス)','Computer Science');	
selbox1.options[selbox1.options.length] = new Option('Computer security and reliability (コンピュータセキュリティ・信頼性)','Computer security and reliability');	
selbox1.options[selbox1.options.length] = new Option('Computer Software (コンピューター・ソフトウェア)','Computer Software');	
selbox1.options[selbox1.options.length] = new Option('Data management (データ管理)','Data management');	
selbox1.options[selbox1.options.length] = new Option('Data mining (データマイニング)','Data mining');	
selbox1.options[selbox1.options.length] = new Option('Data structures (データ構造)','Data structures');	
selbox1.options[selbox1.options.length] = new Option('Database (データベース)','Database');	
selbox1.options[selbox1.options.length] = new Option('Distributed computing (分散コンピューティング)','Distributed computing');	
selbox1.options[selbox1.options.length] = new Option('Human-computer interaction (人間とコンピュータの相互作用)','Human-computer interaction');	
selbox1.options[selbox1.options.length] = new Option('Human-Machine interface (ヒューマン・マシン・インターフェース)','Human-Machine interface');	
selbox1.options[selbox1.options.length] = new Option('Informatics (情報科学)','Informatics');	
selbox1.options[selbox1.options.length] = new Option('Information management (情報管理学)','Information management');	
selbox1.options[selbox1.options.length] = new Option('Information retrieval (情報検索)','Information retrieval');	
selbox1.options[selbox1.options.length] = new Option('Information systems (Business informatics) (情報システム（ビジネス情報学）)','Information systems (Business informatics)');	
selbox1.options[selbox1.options.length] = new Option('Knowledge management (ナレッジマネジメント、知識管理)','Knowledge management');	
selbox1.options[selbox1.options.length] = new Option('Multimedia, hypermedia (マルチメディア、ハイパーメディア)','Multimedia, hypermedia');	
selbox1.options[selbox1.options.length] = new Option('Neural networks (神経回路網)','Neural networks');	
selbox1.options[selbox1.options.length] = new Option('Numerical Analysis (数値解析)','Numerical Analysis');	
selbox1.options[selbox1.options.length] = new Option('Operating systems (オペレーティングシステム)','Operating systems');	
selbox1.options[selbox1.options.length] = new Option('Parallel computing (並列コンピューティング)','Parallel computing');	
selbox1.options[selbox1.options.length] = new Option('Programming languages (プログラミング言語)','Programming languages');	
selbox1.options[selbox1.options.length] = new Option('Quantum computing (量子コンピューティング)','Quantum computing');	
selbox1.options[selbox1.options.length] = new Option('Scientific computing (Computational science) (科学技術計算（計算科学）)','Scientific computing (Computational science)');	
selbox1.options[selbox1.options.length] = new Option('The Digital Humanities (Humanities computing) (デジタル人文学（ヒューマニティーズ・コンピューティング）)','The Digital Humanities (Humanities computing)');	
selbox1.options[selbox1.options.length] = new Option('Theory of computation (計算理論)','Theory of computation');	
selbox1.options[selbox1.options.length] = new Option('Virtual Reality (バーチャル・リアリティ)','Virtual Reality');	selbox1.options[selbox1.options.length] = new Option('Other (その他)','Other');
} if (chosen == "Phy-Earth Sciences") {	
selbox1.options[selbox1.options.length] = new Option('Atmospheric sciences (大気科学)','Atmospheric sciences');	
selbox1.options[selbox1.options.length] = new Option('Edaphology (栽培土壌学)','Edaphology');	
selbox1.options[selbox1.options.length] = new Option('Environmental science (環境科学)','Environmental science');	
selbox1.options[selbox1.options.length] = new Option('Gemology (宝石学)','Gemology');	
selbox1.options[selbox1.options.length] = new Option('Geochemistry (地球化学)','Geochemistry');	
selbox1.options[selbox1.options.length] = new Option('Geography (地理学)','Geography');	
selbox1.options[selbox1.options.length] = new Option('Geology (地質学)','Geology');	
selbox1.options[selbox1.options.length] = new Option('Geophysics (地球物理学)','Geophysics');	
selbox1.options[selbox1.options.length] = new Option('Hydrogeology (水理地質学)','Hydrogeology');	
selbox1.options[selbox1.options.length] = new Option('Hydrology (水文学)','Hydrology');	
selbox1.options[selbox1.options.length] = new Option('Meteorology (気象学)','Meteorology');	
selbox1.options[selbox1.options.length] = new Option('Mineralogy  (鉱物学)','Mineralogy ');	
selbox1.options[selbox1.options.length] = new Option('Oceanography (海洋学)','Oceanography');	
selbox1.options[selbox1.options.length] = new Option('Paleobiology (古生物学)','Paleobiology');	
selbox1.options[selbox1.options.length] = new Option('Paleontology (古生物学)','Paleontology');	
selbox1.options[selbox1.options.length] = new Option('Pedology (土壌学)','Pedology');	
selbox1.options[selbox1.options.length] = new Option('Petrology (岩石学)','Petrology');	
selbox1.options[selbox1.options.length] = new Option('Sedimentology (堆積学)','Sedimentology');	
selbox1.options[selbox1.options.length] = new Option('Seismology (地震学)','Seismology');	
selbox1.options[selbox1.options.length] = new Option('Soil science (土壌科学)','Soil science');	
selbox1.options[selbox1.options.length] = new Option('Speleology (洞窟学)','Speleology');	
selbox1.options[selbox1.options.length] = new Option('Tectonics (構造地質学)','Tectonics');	
selbox1.options[selbox1.options.length] = new Option('Volcanology (火山学)','Volcanology');	selbox1.options[selbox1.options.length] = new Option('Other (その他)','Other');
} if (chosen == "Phy-Energy and power") {	
selbox1.options[selbox1.options.length] = new Option('Energy (general) (エネルギー（一般）)','Energy (general)');	
selbox1.options[selbox1.options.length] = new Option('Energy conservation (省エネルギー)','Energy conservation');	
selbox1.options[selbox1.options.length] = new Option('Power engineering (動力工学)','Power engineering');	
selbox1.options[selbox1.options.length] = new Option('Renewable energy/alternate sources (再生可能エネルギー・代替エネルギー源)','Renewable energy/alternate sources');	selbox1.options[selbox1.options.length] = new Option('Other (その他)','Other');
} if (chosen == "Phy-Engineering") {	
selbox1.options[selbox1.options.length] = new Option('Acoustical engineering (音響工学)','Acoustical engineering');	
selbox1.options[selbox1.options.length] = new Option('Aerospace/Aeronautical Engineering (航空宇宙工学)','Aerospace/Aeronautical Engineering');	
selbox1.options[selbox1.options.length] = new Option('Agricultural Engineering (農業工学)','Agricultural Engineering');	
selbox1.options[selbox1.options.length] = new Option('Architecture (建築)','Architecture');	
selbox1.options[selbox1.options.length] = new Option('Automotive Engineering (自動車工学)','Automotive Engineering');	
selbox1.options[selbox1.options.length] = new Option('Bioengineering (生物工学)','Bioengineering');	
selbox1.options[selbox1.options.length] = new Option('Biomolecular engineering (生物分子工学)','Biomolecular engineering');	
selbox1.options[selbox1.options.length] = new Option('Biosensing (バイオセンシング)','Biosensing');	
selbox1.options[selbox1.options.length] = new Option('Biotechnology (バイオテクノロジー)','Biotechnology');	
selbox1.options[selbox1.options.length] = new Option('Chemical Engineering   (化学工業)','Chemical Engineering  ');	
selbox1.options[selbox1.options.length] = new Option('Civil Engineering (土木工学)','Civil Engineering');	
selbox1.options[selbox1.options.length] = new Option('Computer engineering (計算機工学)','Computer engineering');	
selbox1.options[selbox1.options.length] = new Option('Control systems engineering (制御システム工学)','Control systems engineering');	
selbox1.options[selbox1.options.length] = new Option('Ecological engineering (生態工学)','Ecological engineering');	
selbox1.options[selbox1.options.length] = new Option('Electrical Engineering (電気工学)','Electrical Engineering');	
selbox1.options[selbox1.options.length] = new Option('Electronics Engineering (電子工学)','Electronics Engineering');	
selbox1.options[selbox1.options.length] = new Option('Engineering physics (工学物理学)','Engineering physics');	
selbox1.options[selbox1.options.length] = new Option('Ergonomics (人間工学)','Ergonomics');	
selbox1.options[selbox1.options.length] = new Option('Food engineering (食品工学)','Food engineering');	
selbox1.options[selbox1.options.length] = new Option('Industrial engineering (経営工学)','Industrial engineering');	
selbox1.options[selbox1.options.length] = new Option('Instrumentation Engineering (計装工学)','Instrumentation Engineering');	
selbox1.options[selbox1.options.length] = new Option('Manufacturing engineering (製造工学)','Manufacturing engineering');	
selbox1.options[selbox1.options.length] = new Option('Materials engineering (材料工学)','Materials engineering');	
selbox1.options[selbox1.options.length] = new Option('Mechanical Engineering (機械工学)','Mechanical Engineering');	
selbox1.options[selbox1.options.length] = new Option('Mechatronics (メカトロニクス)','Mechatronics');	
selbox1.options[selbox1.options.length] = new Option('Metrology (計測学)','Metrology');	
selbox1.options[selbox1.options.length] = new Option('Mining (鉱業)','Mining');	
selbox1.options[selbox1.options.length] = new Option('Nanoengineering (ナノ工学)','Nanoengineering');	
selbox1.options[selbox1.options.length] = new Option('Nanotechnology (ナノテクノロジー)','Nanotechnology');	
selbox1.options[selbox1.options.length] = new Option('Nuclear engineering (原子核工学)','Nuclear engineering');	
selbox1.options[selbox1.options.length] = new Option('Ocean engineering (海洋工学)','Ocean engineering');	
selbox1.options[selbox1.options.length] = new Option('Optical engineering (光工学)','Optical engineering');	
selbox1.options[selbox1.options.length] = new Option('Petroleum engineering (石油工学)','Petroleum engineering');	
selbox1.options[selbox1.options.length] = new Option('Process engineering (工程工学)','Process engineering');	
selbox1.options[selbox1.options.length] = new Option('Production/Manufacturing Engineering (生産・製造工学)','Production/Manufacturing Engineering');	
selbox1.options[selbox1.options.length] = new Option('Quality assurance engineering (質保証工学)','Quality assurance engineering');	
selbox1.options[selbox1.options.length] = new Option('Remote sensing (リモートセンシング)','Remote sensing');	
selbox1.options[selbox1.options.length] = new Option('Robotics (ロボット工学)','Robotics');	
selbox1.options[selbox1.options.length] = new Option('Safety engineering (安全工学)','Safety engineering');	
selbox1.options[selbox1.options.length] = new Option('Sensors (センサー)','Sensors');	
selbox1.options[selbox1.options.length] = new Option('Signal Processing (信号処理)','Signal Processing');	
selbox1.options[selbox1.options.length] = new Option('Software engineering (ソフトウェア工学)','Software engineering');	
selbox1.options[selbox1.options.length] = new Option('Sports Medicine & Technology (スポーツ医療・テクノロジー)','Sports Medicine & Technology');	
selbox1.options[selbox1.options.length] = new Option('Structural Engineering (構造工学)','Structural Engineering');	
selbox1.options[selbox1.options.length] = new Option('Telecommunication Engineering (テレコミュニケーション工学)','Telecommunication Engineering');	
selbox1.options[selbox1.options.length] = new Option('Textile engineering (繊維工学)','Textile engineering');	
selbox1.options[selbox1.options.length] = new Option('Thermal/refrigeration Engineering (熱・冷凍工学)','Thermal/refrigeration Engineering');	
selbox1.options[selbox1.options.length] = new Option('Urban and Industrial Agriculture (都市・産業農業)','Urban and Industrial Agriculture');	
selbox1.options[selbox1.options.length] = new Option('Urban Engineering (都市工学)','Urban Engineering');	
selbox1.options[selbox1.options.length] = new Option('Vehicle engineering (車両工学)','Vehicle engineering');	selbox1.options[selbox1.options.length] = new Option('Other (その他)','Other');
} if (chosen == "Phy-Environmental Sciences") {	
selbox1.options[selbox1.options.length] = new Option('Environmental Engineering (環境工学)','Environmental Engineering');	
selbox1.options[selbox1.options.length] = new Option('Environmental Material Sciences (環境物質学)','Environmental Material Sciences');	selbox1.options[selbox1.options.length] = new Option('Other (その他)','Other');
} if (chosen == "Phy-Forensic Sciences") {	
selbox1.options[selbox1.options.length] = new Option('Digital Forensics (デジタル・フォレンジック)','Digital Forensics');	selbox1.options[selbox1.options.length] = new Option('Other (その他)','Other');
} if (chosen == "Phy-Material Science & Engineering") {	
selbox1.options[selbox1.options.length] = new Option('Biomaterial Science (生体材料科学)','Biomaterial Science');	
selbox1.options[selbox1.options.length] = new Option('Catalysis (触媒作用)','Catalysis');	
selbox1.options[selbox1.options.length] = new Option('Ceramics (陶磁器)','Ceramics');	
selbox1.options[selbox1.options.length] = new Option('Colloid & Interface Science (コロイド・界面科学)','Colloid & Interface Science');	
selbox1.options[selbox1.options.length] = new Option('Composites (複合材料学)','Composites');	
selbox1.options[selbox1.options.length] = new Option('Electronic, optical and magnetic materials (電子・光・磁性材料)','Electronic, optical and magnetic materials');	
selbox1.options[selbox1.options.length] = new Option('Material characterization and instrumentation (材料特性・器械研究)','Material characterization and instrumentation');	
selbox1.options[selbox1.options.length] = new Option('MEMS (MEMS（メムス）)','MEMS');	
selbox1.options[selbox1.options.length] = new Option('Metallurgy (金属学)','Metallurgy');	
selbox1.options[selbox1.options.length] = new Option('Metals and Alloys (金属・合金)','Metals and Alloys');	
selbox1.options[selbox1.options.length] = new Option('Molecular Engineering  (分子工学)','Molecular Engineering ');	
selbox1.options[selbox1.options.length] = new Option('Nanomaterials (ナノテクノロジー材料)','Nanomaterials');	
selbox1.options[selbox1.options.length] = new Option('Polymer science and Engineering (高分子科学・工学)','Polymer science and Engineering');	
selbox1.options[selbox1.options.length] = new Option('Superconductors (超伝導体)','Superconductors');	selbox1.options[selbox1.options.length] = new Option('Other (その他)','Other');
} if (chosen == "Phy-Mathematics") {	
selbox1.options[selbox1.options.length] = new Option('Algebra (代数学)','Algebra');	
selbox1.options[selbox1.options.length] = new Option('Analysis (分析)','Analysis');	
selbox1.options[selbox1.options.length] = new Option('Applied Mathematics (応用数学)','Applied Mathematics');	
selbox1.options[selbox1.options.length] = new Option('Calculus (微積分学)','Calculus');	
selbox1.options[selbox1.options.length] = new Option('Computational Mathematics (計算数学)','Computational Mathematics');	
selbox1.options[selbox1.options.length] = new Option('Geometry and Topology (幾何学・位相幾何学)','Geometry and Topology');	
selbox1.options[selbox1.options.length] = new Option('Logic and Foundations of mathematics (数理論理学・数理基礎論)','Logic and Foundations of mathematics');	
selbox1.options[selbox1.options.length] = new Option('Number theory (数論)','Number theory');	
selbox1.options[selbox1.options.length] = new Option('Probability theory (確率論)','Probability theory');	
selbox1.options[selbox1.options.length] = new Option('Stochastic Processes (確率過程)','Stochastic Processes');	selbox1.options[selbox1.options.length] = new Option('Other (その他)','Other');
} if (chosen == "Phy-Physics") {	
selbox1.options[selbox1.options.length] = new Option('Accelerator physics (加速器物理学)','Accelerator physics');	
selbox1.options[selbox1.options.length] = new Option('Acoustics (音響学)','Acoustics');	
selbox1.options[selbox1.options.length] = new Option('Applied Physics (応用物理学)','Applied Physics');	
selbox1.options[selbox1.options.length] = new Option('Astrophysics (宇宙物理学)','Astrophysics');	
selbox1.options[selbox1.options.length] = new Option('Atomic, molecular, and optical physics (原子・分子・光物性物理学)','Atomic, molecular, and optical physics');	
selbox1.options[selbox1.options.length] = new Option('Biophysics (生物物理学)','Biophysics');	
selbox1.options[selbox1.options.length] = new Option('Computational physics (計算物理学)','Computational physics');	
selbox1.options[selbox1.options.length] = new Option('Condensed Matter Physics (凝縮系物理学)','Condensed Matter Physics');	
selbox1.options[selbox1.options.length] = new Option('Cryogenics (低温学)','Cryogenics');	
selbox1.options[selbox1.options.length] = new Option('Crystal Physics (結晶物理学)','Crystal Physics');	
selbox1.options[selbox1.options.length] = new Option('Fluid Physics (流体物理学)','Fluid Physics');	
selbox1.options[selbox1.options.length] = new Option('Low Temperature Physics (低温物理学)','Low Temperature Physics');	
selbox1.options[selbox1.options.length] = new Option('Magnetism & Electromagnetism (磁性・電磁気力)','Magnetism & Electromagnetism');	
selbox1.options[selbox1.options.length] = new Option('Mathematical Physics (数理物理学)','Mathematical Physics');	
selbox1.options[selbox1.options.length] = new Option('Mechanics (機械学)','Mechanics');	
selbox1.options[selbox1.options.length] = new Option('Medical Physics (医療物理学)','Medical Physics');	
selbox1.options[selbox1.options.length] = new Option('Molecular physics (分子物理学)','Molecular physics');	
selbox1.options[selbox1.options.length] = new Option('Newtonian dynamics (ニュートン力学)','Newtonian dynamics');	
selbox1.options[selbox1.options.length] = new Option('Nonlinear and Statistical physics (非線形・統計物理学)','Nonlinear and Statistical physics');	
selbox1.options[selbox1.options.length] = new Option('Nuclear and high-energy physics (核・高エネルギー物理学)','Nuclear and high-energy physics');	
selbox1.options[selbox1.options.length] = new Option('Optics (光学)','Optics');	
selbox1.options[selbox1.options.length] = new Option('Particle physics (素粒子物理学)','Particle physics');	
selbox1.options[selbox1.options.length] = new Option('Plasma Physics/Chemistry (プラズマ物理学・化学)','Plasma Physics/Chemistry');	
selbox1.options[selbox1.options.length] = new Option('Quantum Physics (量子物理学)','Quantum Physics');	
selbox1.options[selbox1.options.length] = new Option('Rheology (レオロジー)','Rheology');	
selbox1.options[selbox1.options.length] = new Option('Semiconductor Physics (半導体物理学)','Semiconductor Physics');	
selbox1.options[selbox1.options.length] = new Option('Solid mechanics (固体力学)','Solid mechanics');	
selbox1.options[selbox1.options.length] = new Option('Theoretical physics (理論物理学)','Theoretical physics');	
selbox1.options[selbox1.options.length] = new Option('Thermodynamics (熱力学)','Thermodynamics');	
selbox1.options[selbox1.options.length] = new Option('Tribology (トライボロジー)','Tribology');	
selbox1.options[selbox1.options.length] = new Option('Ultrafast Phenomenon (超高速現象)','Ultrafast Phenomenon');	
selbox1.options[selbox1.options.length] = new Option('Vehicle dynamics (車両運動性)','Vehicle dynamics');	selbox1.options[selbox1.options.length] = new Option('Other (その他)','Other');
} if (chosen == "Phy-Statistics") {	
selbox1.options[selbox1.options.length] = new Option('Computational statistics (コンピュータ統計学)','Computational statistics');	
selbox1.options[selbox1.options.length] = new Option('Design of experiments (実験計画法)','Design of experiments');	
selbox1.options[selbox1.options.length] = new Option('Sampling and Survey (サンプリング調査)','Sampling and Survey');	
selbox1.options[selbox1.options.length] = new Option('Statistical modelling (統計モデル)','Statistical modelling');	
selbox1.options[selbox1.options.length] = new Option('Statistical theory (統計理論)','Statistical theory');	selbox1.options[selbox1.options.length] = new Option('Other (その他)','Other');
} if (chosen == "Phy-Systems Science") {	
selbox1.options[selbox1.options.length] = new Option('Complex systems (複雑系)','Complex systems');	
selbox1.options[selbox1.options.length] = new Option('Control theory (制御理論)','Control theory');	
selbox1.options[selbox1.options.length] = new Option('Cybernetics (人工頭脳学)','Cybernetics');	
selbox1.options[selbox1.options.length] = new Option('Operations research (オペレーションズ・リサーチ)','Operations research');	
selbox1.options[selbox1.options.length] = new Option('Systems dynamics (システムダイナミクス)','Systems dynamics');	
selbox1.options[selbox1.options.length] = new Option('Systems engineering (システム工学)','Systems engineering');	
selbox1.options[selbox1.options.length] = new Option('Systems theory (システム論)','Systems theory');	selbox1.options[selbox1.options.length] = new Option('Other (その他)','Other');
} if (chosen == "Eco-Business management") {	
selbox1.options[selbox1.options.length] = new Option('Business (ビジネス)','Business');	
selbox1.options[selbox1.options.length] = new Option('Business Administration (経営管理)','Business Administration');	
selbox1.options[selbox1.options.length] = new Option('Entrepreneurship (起業論)','Entrepreneurship');	
selbox1.options[selbox1.options.length] = new Option('Hotel Administration (ホテル・マネージメント)','Hotel Administration');	
selbox1.options[selbox1.options.length] = new Option('Human Resources (人的資源)','Human Resources');	
selbox1.options[selbox1.options.length] = new Option('International Business (グローバル・マーケティング)','International Business');	
selbox1.options[selbox1.options.length] = new Option('Management (マネージメント)','Management');	
selbox1.options[selbox1.options.length] = new Option('Management Information Systems (情報管理システム)','Management Information Systems');	
selbox1.options[selbox1.options.length] = new Option('Marketing (マーケティング)','Marketing');	
selbox1.options[selbox1.options.length] = new Option('Operations management (オペレーション管理)','Operations management');	
selbox1.options[selbox1.options.length] = new Option('Project management (プロジェクト管理)','Project management');	
selbox1.options[selbox1.options.length] = new Option('Risk management (リスク管理)','Risk management');	
selbox1.options[selbox1.options.length] = new Option('Servicing (サービス)','Servicing');	
selbox1.options[selbox1.options.length] = new Option('Strategy (戦略論)','Strategy');	
selbox1.options[selbox1.options.length] = new Option('Supply chain management (サプライチェーン・マネジメント)','Supply chain management');	
selbox1.options[selbox1.options.length] = new Option('Technology management (テクノロジー・マネージメント)','Technology management');	selbox1.options[selbox1.options.length] = new Option('Other (その他)','Other');
} if (chosen == "Eco-Economics") {	
selbox1.options[selbox1.options.length] = new Option('Accounting (会計論)','Accounting');	
selbox1.options[selbox1.options.length] = new Option('Agricultural economics (農業経済学)','Agricultural economics');	
selbox1.options[selbox1.options.length] = new Option('Banking (バンキング（銀行業）)','Banking');	
selbox1.options[selbox1.options.length] = new Option('Behavioral economics (行動経済学)','Behavioral economics');	
selbox1.options[selbox1.options.length] = new Option('Bioeconomics (生物経済学)','Bioeconomics');	
selbox1.options[selbox1.options.length] = new Option('Computational economics (計算経済学)','Computational economics');	
selbox1.options[selbox1.options.length] = new Option('Consumer economics (消費経済学)','Consumer economics');	
selbox1.options[selbox1.options.length] = new Option('Corporate Finance (企業金融)','Corporate Finance');	
selbox1.options[selbox1.options.length] = new Option('Development economics (開発経済学)','Development economics');	
selbox1.options[selbox1.options.length] = new Option('Ecological economics (エコロジー経済学)','Ecological economics');	
selbox1.options[selbox1.options.length] = new Option('E-Commerce (電子商取引)','E-Commerce');	
selbox1.options[selbox1.options.length] = new Option('Econometrics (計量経済学)','Econometrics');	
selbox1.options[selbox1.options.length] = new Option('Economic geography (経済地理学)','Economic geography');	
selbox1.options[selbox1.options.length] = new Option('Economic history (経済史)','Economic history');	
selbox1.options[selbox1.options.length] = new Option('Economic sociology (経済社会学)','Economic sociology');	
selbox1.options[selbox1.options.length] = new Option('Economic systems (経済システム)','Economic systems');	
selbox1.options[selbox1.options.length] = new Option('Economics (経済学)','Economics');	
selbox1.options[selbox1.options.length] = new Option('Energy economics (エネルギー経済学)','Energy economics');	
selbox1.options[selbox1.options.length] = new Option('Entrepreneurial economics (起業経済学)','Entrepreneurial economics');	
selbox1.options[selbox1.options.length] = new Option('Environmental economics (環境経済学)','Environmental economics');	
selbox1.options[selbox1.options.length] = new Option('Evolutionary economics (進化経済学)','Evolutionary economics');	
selbox1.options[selbox1.options.length] = new Option('Experimental economics (実験経済学)','Experimental economics');	
selbox1.options[selbox1.options.length] = new Option('Feminist economics (フェミニスト経済学)','Feminist economics');	
selbox1.options[selbox1.options.length] = new Option('Finance (金融)','Finance');	
selbox1.options[selbox1.options.length] = new Option('Financial economics (金融経済学)','Financial economics');	
selbox1.options[selbox1.options.length] = new Option('Game Theory (ゲーム理論)','Game Theory');	
selbox1.options[selbox1.options.length] = new Option('Green economics (グリーン経済学)','Green economics');	
selbox1.options[selbox1.options.length] = new Option('Growth economics (成長経済学)','Growth economics');	
selbox1.options[selbox1.options.length] = new Option('Human development theory (人間発達論)','Human development theory');	
selbox1.options[selbox1.options.length] = new Option('Industrial organization (産業組織)','Industrial organization');	
selbox1.options[selbox1.options.length] = new Option('Information economics (情報経済学)','Information economics');	
selbox1.options[selbox1.options.length] = new Option('Institutional economics (制度派経済学)','Institutional economics');	
selbox1.options[selbox1.options.length] = new Option('International economics (国際経済学)','International economics');	
selbox1.options[selbox1.options.length] = new Option('International Trade (国際貿易)','International Trade');	
selbox1.options[selbox1.options.length] = new Option('Islamic economics (イスラム経済学)','Islamic economics');	
selbox1.options[selbox1.options.length] = new Option('Labor Economics (労働経済学)','Labor Economics');	
selbox1.options[selbox1.options.length] = new Option('Law and economics (法と経済学)','Law and economics');	
selbox1.options[selbox1.options.length] = new Option('Macroeconomics (マクロ経済学)','Macroeconomics');	
selbox1.options[selbox1.options.length] = new Option('Managerial economics (企業経済学)','Managerial economics');	
selbox1.options[selbox1.options.length] = new Option('Mathematical economics (数理経済学)','Mathematical economics');	
selbox1.options[selbox1.options.length] = new Option('Microeconomics (ミクロ経済学)','Microeconomics');	
selbox1.options[selbox1.options.length] = new Option('Monetary economics (貨幣経済学)','Monetary economics');	
selbox1.options[selbox1.options.length] = new Option('Neuroeconomics (神経経済学)','Neuroeconomics');	
selbox1.options[selbox1.options.length] = new Option('Political economy (政治経済学)','Political economy');	
selbox1.options[selbox1.options.length] = new Option('Public economics (公共経済学)','Public economics');	
selbox1.options[selbox1.options.length] = new Option('Public finance (財政学)','Public finance');	
selbox1.options[selbox1.options.length] = new Option('Real estate economics (不動産経済学)','Real estate economics');	
selbox1.options[selbox1.options.length] = new Option('Resource economics (資源経済学)','Resource economics');	
selbox1.options[selbox1.options.length] = new Option('Socialist economics (社会主義経済)','Socialist economics');	
selbox1.options[selbox1.options.length] = new Option('Socioeconomics (社会経済学)','Socioeconomics');	
selbox1.options[selbox1.options.length] = new Option('Tax (税金)','Tax');	
selbox1.options[selbox1.options.length] = new Option('Transport economics (交通経済学)','Transport economics');	
selbox1.options[selbox1.options.length] = new Option('Welfare economics (福祉経済学)','Welfare economics');	selbox1.options[selbox1.options.length] = new Option('Other (その他)','Other');
} if (chosen == "Eco-Forensic Sciences") {	
selbox1.options[selbox1.options.length] = new Option('Forensic accounting (法廷会計学)','Forensic accounting');	selbox1.options[selbox1.options.length] = new Option('Other (その他)','Other');
} if (chosen == "Art-Education") {	
selbox1.options[selbox1.options.length] = new Option('Consumer education (消費者教育)','Consumer education');	
selbox1.options[selbox1.options.length] = new Option('Critical pedagogy (批判的教育学)','Critical pedagogy');	
selbox1.options[selbox1.options.length] = new Option('Curriculum and instruction (カリキュラム・教授)','Curriculum and instruction');	
selbox1.options[selbox1.options.length] = new Option('Distance Education (遠隔教育)','Distance Education');	
selbox1.options[selbox1.options.length] = new Option('Educational leadership (教育的リーダーシップ)','Educational leadership');	
selbox1.options[selbox1.options.length] = new Option('Educational philosophy (教育哲学)','Educational philosophy');	
selbox1.options[selbox1.options.length] = new Option('Educational psychology (教育心理学)','Educational psychology');	
selbox1.options[selbox1.options.length] = new Option('Educational technology (教育テクノロジー)','Educational technology');	selbox1.options[selbox1.options.length] = new Option('Other (その他)','Other');
} if (chosen == "Art-Environmental Sciences") {	
selbox1.options[selbox1.options.length] = new Option('Disaster management (防災学)','Disaster management');	
selbox1.options[selbox1.options.length] = new Option('Environmental policy (環境政策)','Environmental policy');	
selbox1.options[selbox1.options.length] = new Option('Waste management (廃棄物管理)','Waste management');	selbox1.options[selbox1.options.length] = new Option('Other (その他)','Other');
} if (chosen == "Art-Forensic Sciences") {	
selbox1.options[selbox1.options.length] = new Option('Forensic anthropology (法医人類学)','Forensic anthropology');	
selbox1.options[selbox1.options.length] = new Option('Forensic Archeology (法医考古学)','Forensic Archeology');	
selbox1.options[selbox1.options.length] = new Option('Forensic arts (法廷美術)','Forensic arts');	
selbox1.options[selbox1.options.length] = new Option('Forensic psychology (司法心理学)','Forensic psychology');	selbox1.options[selbox1.options.length] = new Option('Other (その他)','Other');
} if (chosen == "Art-Humanities") {	
selbox1.options[selbox1.options.length] = new Option('History (歴史)','History');	
selbox1.options[selbox1.options.length] = new Option('Language and Linguistics (言語学)','Language and Linguistics');	
selbox1.options[selbox1.options.length] = new Option('Literature (文学)','Literature');	
selbox1.options[selbox1.options.length] = new Option('Performing Arts (舞台芸術)','Performing Arts');	
selbox1.options[selbox1.options.length] = new Option('Theology/Religion (神学・宗教)','Theology/Religion');	
selbox1.options[selbox1.options.length] = new Option('Visual Arts (視覚芸術)','Visual Arts');	selbox1.options[selbox1.options.length] = new Option('Other (その他)','Other');
} if (chosen == "Art-Law") {	
selbox1.options[selbox1.options.length] = new Option('Admiralty law (海事法)','Admiralty law');	
selbox1.options[selbox1.options.length] = new Option('Animal law/Animal rights (動物法・動物の権利)','Animal law/Animal rights');	
selbox1.options[selbox1.options.length] = new Option('Canon law (教会法)','Canon law');	
selbox1.options[selbox1.options.length] = new Option('Civil Law (民法)','Civil Law');	
selbox1.options[selbox1.options.length] = new Option('Civil procedure (民事訴訟手続)','Civil procedure');	
selbox1.options[selbox1.options.length] = new Option('Comparative Law (比較法)','Comparative Law');	
selbox1.options[selbox1.options.length] = new Option('Competition law (競争法)','Competition law');	
selbox1.options[selbox1.options.length] = new Option('Constitutional law (憲法学)','Constitutional law');	
selbox1.options[selbox1.options.length] = new Option('Contracts (契約)','Contracts');	
selbox1.options[selbox1.options.length] = new Option('Corporate Law (会社法)','Corporate Law');	
selbox1.options[selbox1.options.length] = new Option('Criminal Law (刑法)','Criminal Law');	
selbox1.options[selbox1.options.length] = new Option('Environmental Law (環境法)','Environmental Law');	
selbox1.options[selbox1.options.length] = new Option('General Law (一般法)','General Law');	
selbox1.options[selbox1.options.length] = new Option('Intellectual Property Law (知的所有権法)','Intellectual Property Law');	
selbox1.options[selbox1.options.length] = new Option('International Law (国際法)','International Law');	
selbox1.options[selbox1.options.length] = new Option('Jurisprudence (法理学)','Jurisprudence');	
selbox1.options[selbox1.options.length] = new Option('Labor Law (労働法)','Labor Law');	
selbox1.options[selbox1.options.length] = new Option('Paralegal studies (パラリーガル学)','Paralegal studies');	
selbox1.options[selbox1.options.length] = new Option('Property Law (所有権法)','Property Law');	
selbox1.options[selbox1.options.length] = new Option('Tax Law (税法)','Tax Law');	
selbox1.options[selbox1.options.length] = new Option('Torts (不法行為)','Torts');	selbox1.options[selbox1.options.length] = new Option('Other (その他)','Other');
} if (chosen == "Art-Library and Museum Studies") {	
selbox1.options[selbox1.options.length] = new Option('Archival Science (記録文書学)','Archival Science');	
selbox1.options[selbox1.options.length] = new Option('Bibliometrics (計量書誌学)','Bibliometrics');	
selbox1.options[selbox1.options.length] = new Option('Information Science (情報科学)','Information Science');	
selbox1.options[selbox1.options.length] = new Option('Museology (博物館学)','Museology');	selbox1.options[selbox1.options.length] = new Option('Other (その他)','Other');
} if (chosen == "Art-Media/Communication") {	
selbox1.options[selbox1.options.length] = new Option('Advertising (広告)','Advertising');	
selbox1.options[selbox1.options.length] = new Option('Journalism (ジャーナリズム)','Journalism');	
selbox1.options[selbox1.options.length] = new Option('Mass media (マスメディア)','Mass media');	
selbox1.options[selbox1.options.length] = new Option('Nonverbal communication (非言語コミュニケーション)','Nonverbal communication');	
selbox1.options[selbox1.options.length] = new Option('Public relations (広報・渉外)','Public relations');	
selbox1.options[selbox1.options.length] = new Option('Speech communication (スピーチコミュニケーション)','Speech communication');	
selbox1.options[selbox1.options.length] = new Option('Technical writing (技術ライテング)','Technical writing');	
selbox1.options[selbox1.options.length] = new Option('Translation (通訳・翻訳)','Translation');	
selbox1.options[selbox1.options.length] = new Option('Web content development (ウェブコンテンツ開発)','Web content development');	selbox1.options[selbox1.options.length] = new Option('Other (その他)','Other');
} if (chosen == "Art-Philosophy") {	
selbox1.options[selbox1.options.length] = new Option('Aesthetics (美学)','Aesthetics');	
selbox1.options[selbox1.options.length] = new Option('Applied philosophy (応用哲学)','Applied philosophy');	
selbox1.options[selbox1.options.length] = new Option('Epistemology (認識論)','Epistemology');	
selbox1.options[selbox1.options.length] = new Option('Ethics (倫理)','Ethics');	
selbox1.options[selbox1.options.length] = new Option('History of philosophy (哲学の歴史)','History of philosophy');	
selbox1.options[selbox1.options.length] = new Option('Logic (論理学)','Logic');	
selbox1.options[selbox1.options.length] = new Option('Metaphysics (形而上学)','Metaphysics');	
selbox1.options[selbox1.options.length] = new Option('Philosophical traditions  (哲学伝統)','Philosophical traditions ');	
selbox1.options[selbox1.options.length] = new Option('Political philosophy (政治哲学)','Political philosophy');	
selbox1.options[selbox1.options.length] = new Option('Social philosophy (社会哲学)','Social philosophy');	selbox1.options[selbox1.options.length] = new Option('Other (その他)','Other');
} if (chosen == "Art-Psychology") {	
selbox1.options[selbox1.options.length] = new Option('Abnormal psychology (異常心理学)','Abnormal psychology');	
selbox1.options[selbox1.options.length] = new Option('Applied psychology (応用心理学)','Applied psychology');	
selbox1.options[selbox1.options.length] = new Option('Biological psychology (生物的心理学)','Biological psychology');	
selbox1.options[selbox1.options.length] = new Option('Clinical Psychology (臨床心理学)','Clinical Psychology');	
selbox1.options[selbox1.options.length] = new Option('Cognitive psychology (認知心理学)','Cognitive psychology');	
selbox1.options[selbox1.options.length] = new Option('Community psychology (コミュニティ心理学)','Community psychology');	
selbox1.options[selbox1.options.length] = new Option('Comparative psychology (比較心理学)','Comparative psychology');	
selbox1.options[selbox1.options.length] = new Option('Conservation Psychology (自然保護心理学)','Conservation Psychology');	
selbox1.options[selbox1.options.length] = new Option('Consumer psychology (消費者心理学)','Consumer psychology');	
selbox1.options[selbox1.options.length] = new Option('Counseling psychology (カウンセリング心理学)','Counseling psychology');	
selbox1.options[selbox1.options.length] = new Option('Cultural psychology (文化心理学)','Cultural psychology');	
selbox1.options[selbox1.options.length] = new Option('Developmental psychology (発達心理学)','Developmental psychology');	
selbox1.options[selbox1.options.length] = new Option('Differential psychology (差異心理学)','Differential psychology');	
selbox1.options[selbox1.options.length] = new Option('Environmental psychology (環境心理学)','Environmental psychology');	
selbox1.options[selbox1.options.length] = new Option('Evolutionary psychology (進化心理学)','Evolutionary psychology');	
selbox1.options[selbox1.options.length] = new Option('Experimental psychology (実験心理学)','Experimental psychology');	
selbox1.options[selbox1.options.length] = new Option('General Psychology (一般心理学)','General Psychology');	
selbox1.options[selbox1.options.length] = new Option('Health psychology (健康心理学)','Health psychology');	
selbox1.options[selbox1.options.length] = new Option('Legal psychology (法心理学)','Legal psychology');	
selbox1.options[selbox1.options.length] = new Option('Media psychology (メディア心理学)','Media psychology');	
selbox1.options[selbox1.options.length] = new Option('Medical psychology (医学心理学)','Medical psychology');	
selbox1.options[selbox1.options.length] = new Option('Military psychology (軍事心理学)','Military psychology');	
selbox1.options[selbox1.options.length] = new Option('Neuropsychology (神経心理学)','Neuropsychology');	
selbox1.options[selbox1.options.length] = new Option('Occupational health psychology (産業保健心理学)','Occupational health psychology');	
selbox1.options[selbox1.options.length] = new Option('Organizational psychology (組織心理学)','Organizational psychology');	
selbox1.options[selbox1.options.length] = new Option('Parapsychology (超心理学)','Parapsychology');	
selbox1.options[selbox1.options.length] = new Option('Personality psychology (人格心理学)','Personality psychology');	
selbox1.options[selbox1.options.length] = new Option('Political psychology (政治心理学)','Political psychology');	
selbox1.options[selbox1.options.length] = new Option('Positive psychology (ポジティブ心理学)','Positive psychology');	
selbox1.options[selbox1.options.length] = new Option('Psychology of religion (宗教心理学)','Psychology of religion');	
selbox1.options[selbox1.options.length] = new Option('Psychometrics (心理測定学)','Psychometrics');	
selbox1.options[selbox1.options.length] = new Option('Psychophysics (精神物理学)','Psychophysics');	
selbox1.options[selbox1.options.length] = new Option('Quantitative psychology (定量的心理学)','Quantitative psychology');	
selbox1.options[selbox1.options.length] = new Option('School psychology (学校心理学)','School psychology');	
selbox1.options[selbox1.options.length] = new Option('Social psychology (社会心理学)','Social psychology');	
selbox1.options[selbox1.options.length] = new Option('Sport psychology (スポーツ心理学)','Sport psychology');	selbox1.options[selbox1.options.length] = new Option('Other (その他)','Other');
} if (chosen == "Art-Recreation and Sports") {	
selbox1.options[selbox1.options.length] = new Option('Game/Toy design (ゲーム・おもちゃデザイン)','Game/Toy design');	
selbox1.options[selbox1.options.length] = new Option('Physical education (体育教育)','Physical education');	
selbox1.options[selbox1.options.length] = new Option('Sport management/coaching (スポーツ管理・コーチング)','Sport management/coaching');	selbox1.options[selbox1.options.length] = new Option('Other (その他)','Other');
} if (chosen == "Art-Social Sciences") {	
selbox1.options[selbox1.options.length] = new Option('Anthropology (人類学)','Anthropology');	
selbox1.options[selbox1.options.length] = new Option('Archeology (考古学)','Archeology');	
selbox1.options[selbox1.options.length] = new Option('Area Studies (地域研究)','Area Studies');	
selbox1.options[selbox1.options.length] = new Option('Cognitive science (認知科学)','Cognitive science');	
selbox1.options[selbox1.options.length] = new Option('Conservation (保護管理)','Conservation');	
selbox1.options[selbox1.options.length] = new Option('Criminology (犯罪学)','Criminology');	
selbox1.options[selbox1.options.length] = new Option('Cultural and Ethnic Studies (文化・民族学)','Cultural and Ethnic Studies');	
selbox1.options[selbox1.options.length] = new Option('Ecology (生態学)','Ecology');	
selbox1.options[selbox1.options.length] = new Option('Emergency management (危機管理)','Emergency management');	
selbox1.options[selbox1.options.length] = new Option('Gender and Sexuality studies (性・ジェンダー学)','Gender and Sexuality studies');	
selbox1.options[selbox1.options.length] = new Option('Geography (地理学)','Geography');	
selbox1.options[selbox1.options.length] = new Option('Palliative Care (緩和ケア)','Palliative Care');	
selbox1.options[selbox1.options.length] = new Option('Parapsychology and occult sciences (超心理学・神秘学)','Parapsychology and occult sciences');	
selbox1.options[selbox1.options.length] = new Option('Political Science (政治学)','Political Science');	
selbox1.options[selbox1.options.length] = new Option('Population Studies (人口学)','Population Studies');	
selbox1.options[selbox1.options.length] = new Option('Public Administration (行政学)','Public Administration');	
selbox1.options[selbox1.options.length] = new Option('Public policy (公共政策学)','Public policy');	
selbox1.options[selbox1.options.length] = new Option('Social epidemiology and public health (社会疫学・公衆衛生学)','Social epidemiology and public health');	
selbox1.options[selbox1.options.length] = new Option('Social Work (ソーシャルワーク)','Social Work');	
selbox1.options[selbox1.options.length] = new Option('Sociology (社会学)','Sociology');	
selbox1.options[selbox1.options.length] = new Option('Transportation (輸送)','Transportation');	
selbox1.options[selbox1.options.length] = new Option('Other (その他)','Other');	

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