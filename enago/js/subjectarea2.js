//subjectarea 2 New services forms
function setOptions(chosen)
{
var selbox = document.frmSubmit.subsubject;
var selbox1 = document.frmSubmit.specialization;

selbox.options.length = 1;
selbox1.options.length = 1;

if(document.frmSubmit.mainsubject.selectedIndex == 0)
{
	document.frmSubmit.specialization.disabled = false;
}
if (chosen == "") {
selbox.options[selbox.options.length] = new Option('Please select the level',' ');
selbox1.options[selbox1.options.length] = new Option('Please select the level',' ');
}
if (chosen == "Biosciences and Medicine") {
selbox.options[selbox.options.length] = new Option('Agriculture (農学)','Agriculture');
selbox.options[selbox.options.length] = new Option('Biosciences (生物学)','Biosciences');
selbox.options[selbox.options.length] = new Option('Dentistry (歯学)','Dentistry');
selbox.options[selbox.options.length] = new Option('Environmental Sciences (環境科学)','Environmental Sciences');
selbox.options[selbox.options.length] = new Option('Medicine (医学)','Medicine');
selbox.options[selbox.options.length] = new Option('Pharmaceutical Sciences (薬学)','Pharmaceutical Sciences');
document.frmSubmit.specialization.disabled = false;
}
if (chosen == "Physical Sciences and Engineering") {
selbox.options[selbox.options.length] = new Option('Chemistry (化学)','Chemistry');
selbox.options[selbox.options.length] = new Option('Computer/Information Sciences (コンピューター/情報科学)','Computer/Information Sciences');
selbox.options[selbox.options.length] = new Option('Earth and Planetary Sciences/Geophysics (地球･惑星科学/地球物理学)','Earth and Planetary Sciences/Geophysics');
selbox.options[selbox.options.length] = new Option('Engineering (工学技術)','Engineering');
selbox.options[selbox.options.length] = new Option('Mathematics (数学)','Mathematics');
selbox.options[selbox.options.length] = new Option('Physics and Astronomy (物理学・天文学)','Physics and Astronomy');
document.frmSubmit.specialization.disabled = false;
}
if (chosen == "Economics and Business") {
selbox.options[selbox.options.length] = new Option('Accounting','Accounting');
selbox.options[selbox.options.length] = new Option('Banking (銀行学)','Banking');
selbox.options[selbox.options.length] = new Option('Business (ビジネス学)','Business');
selbox.options[selbox.options.length] = new Option('Business Administration (経営管理学)','Business Administration');
selbox.options[selbox.options.length] = new Option('Corporate Finance (企業金融論)','Corporate Finance');
selbox.options[selbox.options.length] = new Option('E-Commerce (eコマース)','E-Commerce');
selbox.options[selbox.options.length] = new Option('Economics (経済学)','Economics');
selbox.options[selbox.options.length] = new Option('Entrepreneurship (企業家論)','Entrepreneurship');
selbox.options[selbox.options.length] = new Option('Finance (金融学)','Finance');
selbox.options[selbox.options.length] = new Option('Hotel Administration (ホテル経営学)','Hotel Administration');
selbox.options[selbox.options.length] = new Option('Human Resources (ヒューマンリソース)','Human Resources');
selbox.options[selbox.options.length] = new Option('International Business (国際ビジネス学)','International Business');
selbox.options[selbox.options.length] = new Option('Management (経営学)','Management');
selbox.options[selbox.options.length] = new Option('Management Information Systems (経営情報システム学)','Management Information Systems');
selbox.options[selbox.options.length] = new Option('Marketing (マーケティング)','Marketing');
selbox.options[selbox.options.length] = new Option('Operations Management (運転管理)','Operations Management');
selbox.options[selbox.options.length] = new Option('Project Management (プロジェクト管理)','Project Management');
selbox.options[selbox.options.length] = new Option('Risk management (リスクマネージメント、危機管理)','Risk management');
selbox.options[selbox.options.length] = new Option('Statistics (統計学)','Statistics');
selbox.options[selbox.options.length] = new Option('Strategy (経営戦略論)','Strategy');
selbox.options[selbox.options.length] = new Option('Technology Management (技術経営学)','Technology Management');
selbox.options[selbox.options.length] = new Option('Other (その他)','Other');
document.frmSubmit.specialization.disabled = true;
}
if (chosen == "The Arts, Humanities, and Social Sciences") {
selbox.options[selbox.options.length] = new Option('Anthropology (人類学)','Anthropology');
selbox.options[selbox.options.length] = new Option('Archeology (interdisciplinary) (考古学)','Archeology (interdisciplinary)');
selbox.options[selbox.options.length] = new Option('Arts (文科系)','Arts');
selbox.options[selbox.options.length] = new Option('Asian Studies (アジア研究)','Asian Studies');
selbox.options[selbox.options.length] = new Option('Criminology (犯罪学)','Criminology');
selbox.options[selbox.options.length] = new Option('Cultural and Gender Studies (ジェンダー学)','Cultural and Gender Studies');
selbox.options[selbox.options.length] = new Option('Education (教育学)','Education');
selbox.options[selbox.options.length] = new Option('Geography (地理学)','Geography');
selbox.options[selbox.options.length] = new Option('History (歴史学)','History');
selbox.options[selbox.options.length] = new Option('Humanities (人文科学)','Humanities');
selbox.options[selbox.options.length] = new Option('International Relations (国際関係学)','International Relations');
selbox.options[selbox.options.length] = new Option('Language and Linguistics (言語学)','Language and Linguistics');
selbox.options[selbox.options.length] = new Option('Law (法学)','Law');
selbox.options[selbox.options.length] = new Option('Library Science (図書館学)','Library Science');
selbox.options[selbox.options.length] = new Option('Literature (文学)','Literature');
selbox.options[selbox.options.length] = new Option('Media/Communication (マスメディア/コミュニケーション)','Media/Communication');
selbox.options[selbox.options.length] = new Option('Music (音楽)','Music');
selbox.options[selbox.options.length] = new Option('Philosophy (哲学)','Philosophy');
selbox.options[selbox.options.length] = new Option('Political Science  (政治学)','Political Science');
selbox.options[selbox.options.length] = new Option('Population Studies  (人口学)','Population Studies');
selbox.options[selbox.options.length] = new Option('Psychology  (心理学)','Psychology');
selbox.options[selbox.options.length] = new Option('Social Science (社会科学)','Social Science');
selbox.options[selbox.options.length] = new Option('Social Work and Social Policy (社会事業、社会政策)','Social Work and Social Policy');
selbox.options[selbox.options.length] = new Option('Sociology (社会学)','Sociology');
selbox.options[selbox.options.length] = new Option('Sports (スポーツ学)','Sports');
selbox.options[selbox.options.length] = new Option('Theater (映画論)','Theater');
selbox.options[selbox.options.length] = new Option('Theology/Religion (神学、宗教学)','Theology/Religion');
selbox.options[selbox.options.length] = new Option('Urban Studies (都市科学)','Urban Studies');
selbox.options[selbox.options.length] = new Option('Other (その他)','Other');
document.frmSubmit.specialization.disabled = true;
}
}

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
if (chosen == "Agriculture") {
selbox1.options[selbox1.options.length] = new Option('Agricultural Engineering (農業工学)','Agricultural Engineering');
selbox1.options[selbox1.options.length] = new Option('Agronomy (作物栽培学)','Agronomy');
selbox1.options[selbox1.options.length] = new Option('Dairy Science (酪農科学)','Dairy Science');
selbox1.options[selbox1.options.length] = new Option('Fisheries (水産業)','Fisheries');
selbox1.options[selbox1.options.length] = new Option('Forestry (林学)','Forestry');
selbox1.options[selbox1.options.length] = new Option('Horticulture  (園芸学)','Horticulture');
selbox1.options[selbox1.options.length] = new Option('Veterinary Science/Animal Husbandry (獣医学／畜産)','Veterinary Science/Animal Husbandry'
);
selbox1.options[selbox1.options.length] = new Option('Other (その他)','Other');
}
if (chosen == "Biosciences") {
selbox1.options[selbox1.options.length] = new Option('Applied Genetics (応用遺伝子学)','Applied Genetics');
selbox1.options[selbox1.options.length] = new Option('Applied Lifesciences and Biosciences (応用生命学／生物学)',' Applied Lifesciences and Biosciences');
selbox1.options[selbox1.options.length] = new Option('Biochemistry (生物化学・生理科学)','Biochemistry');
selbox1.options[selbox1.options.length] = new Option('Bioinformatics (interdisciplinary) (生物情報学)','Bioinformatics (interdisciplinary)');
selbox1.options[selbox1.options.length] = new Option('Biomaterial Science (interdisciplinary) (生体材料科学)','Biomaterial Science (interdisciplinary)');
selbox1.options[selbox1.options.length] = new Option('Biomedical Engineering (interdisciplinary) (生物医工学)','Biomedical Engineering (interdisciplinary)');
selbox1.options[selbox1.options.length] = new Option('Biomodeling (interdisciplinary) (生物モデリング)','Biomodeling (interdisciplinary)');
selbox1.options[selbox1.options.length] = new Option('Biophysics (interdisciplinary) (生物物理学)','Biophysics (interdisciplinary)');
selbox1.options[selbox1.options.length] = new Option('Biosensing (interdisciplinary) (バイオセンシング)','Biosensing (interdisciplinary)');
selbox1.options[selbox1.options.length] = new Option('Biotechnology (バイオテクノロジー（生物技術学）)','Biotechnology');
selbox1.options[selbox1.options.length] = new Option('Botany (植物学)','Botany');
selbox1.options[selbox1.options.length] = new Option('Cell Biology (細胞生物学)','Cell Biology');
selbox1.options[selbox1.options.length] = new Option('Genetics (遺伝子学)','Genetics');
selbox1.options[selbox1.options.length] = new Option('Microbiology (微生物学)','Microbiology');
selbox1.options[selbox1.options.length] = new Option('Molecular Biology (分子生物学)','Molecular Biology');
selbox1.options[selbox1.options.length] = new Option('Zoology (動物学)','Zoology');
selbox1.options[selbox1.options.length] = new Option('Virology (ウイルス学)','Virology');
selbox1.options[selbox1.options.length] = new Option('Parasitology (寄生虫学)','Parasitology');
selbox1.options[selbox1.options.length] = new Option('Other (その他)','Other');
}

if (chosen == "Dentistry") {
selbox1.options[selbox1.options.length] = new Option('Basic Dental Science (基礎歯科学)','Basic Dental Science');
selbox1.options[selbox1.options.length] = new Option('Clinical Dental Science (臨床歯科学)','Clinical Dental Science');
selbox1.options[selbox1.options.length] = new Option('Other (その他)','Other');

}

if (chosen == "Environmental Sciences") {
selbox1.options[selbox1.options.length] = new Option('Biosphere Sciences (interdisciplinary) (生活科学)','Biosphere Sciences');
selbox1.options[selbox1.options.length] = new Option('Conservation (interdisciplinary) (保護)','Conservation');
selbox1.options[selbox1.options.length] = new Option('Ecology (interdisciplinary) (生態学)','Ecology');
selbox1.options[selbox1.options.length] = new Option('Environmental Engineering (interdisciplinary) (環境工学)','Environmental Engineering');
selbox1.options[selbox1.options.length] = new Option('Environmental Material Sciences (interdisciplinary) (環境物質科学)','Environmental Material Sciences');
selbox1.options[selbox1.options.length] = new Option('Environmental Resources (interdisciplinary) (環境資源)','Environmental Resources');
selbox1.options[selbox1.options.length] = new Option('Waste Management (interdisciplinary) (廃棄物管理)','Waste Management');
selbox1.options[selbox1.options.length] = new Option('Other (その他)','Other');
}

if (chosen == "Medicine") {
selbox1.options[selbox1.options.length] = new Option('Allergology (アレルギー学)','Allergology');
selbox1.options[selbox1.options.length] = new Option('Alternative Medicine (オルタナティブメディスン)','Alternative Medicine');
selbox1.options[selbox1.options.length] = new Option('Anatomy (解剖学)','Anatomy');
selbox1.options[selbox1.options.length] = new Option('Anesthesiology (麻酔学)','Anesthesiology');
selbox1.options[selbox1.options.length] = new Option('Cancer Medicine/Oncology (癌医学/腫瘍学)','Cancer Medicine/Oncology');
selbox1.options[selbox1.options.length] = new Option('Cardiology (心臓学)','Cardiology');
selbox1.options[selbox1.options.length] = new Option('Dermatology (皮膚科学)','Dermatology');
selbox1.options[selbox1.options.length] = new Option('Endocrinology (内分泌学)','Endocrinology');
selbox1.options[selbox1.options.length] = new Option('Epidemiology (interdisciplinary) (疫学、伝染病学)','Epidemiology');
selbox1.options[selbox1.options.length] = new Option('Experimental medicine (臨床医学)','Experimental medicine');
selbox1.options[selbox1.options.length] = new Option('Gastroenterology (胃腸病学、消化器病学)','Gastroenterology');
selbox1.options[selbox1.options.length] = new Option('General Medicine (基礎医学)','General Medicine');
selbox1.options[selbox1.options.length] = new Option('Geriatrics & Gerontology (高齢医学＆老年病学)','Geriatrics & Gerontology');
selbox1.options[selbox1.options.length] = new Option('Health Sciences & Social Medicine (健康科学＆社会医学)','Health Sciences & Social Medicine');
selbox1.options[selbox1.options.length] = new Option('Hematology (血液学)','Hematology');
selbox1.options[selbox1.options.length] = new Option('Immunology (免疫学)','Immunology');
selbox1.options[selbox1.options.length] = new Option('Internal Medicine (内科学)','Internal Medicine');
selbox1.options[selbox1.options.length] = new Option('Medical Education (interdisciplinary) (医学教育)','Medical Education');
selbox1.options[selbox1.options.length] = new Option('Molecular Medicine (分子医学)','Molecular Medicine');
selbox1.options[selbox1.options.length] = new Option('Nephrology (腎臓病学)','Nephrology');
selbox1.options[selbox1.options.length] = new Option('Neurological Sciences (神経科学)','Neurological Sciences');
selbox1.options[selbox1.options.length] = new Option('Nursing (看護学)','Nursing');
selbox1.options[selbox1.options.length] = new Option('Nutrition & Food Sciences (栄養・食物科学)','Nutrition & Food Sciences');
selbox1.options[selbox1.options.length] = new Option('Obstetrics and Gynecology (産婦人科学)','Obstetrics and Gynecology');
selbox1.options[selbox1.options.length] = new Option('Ophthalmology (眼科学)','Ophthalmology');
selbox1.options[selbox1.options.length] = new Option('Orthopedics (整形外科学)','Orthopedics');
selbox1.options[selbox1.options.length] = new Option('Otolaryngology (耳鼻咽喉科学)','Otolaryngology');
selbox1.options[selbox1.options.length] = new Option('Palliative Medicine (interdisciplinary) (苦痛緩和剤)','Palliative Medicine');
selbox1.options[selbox1.options.length] = new Option('Pathophysiological Sciences (病理学)','Pathophysiological Sciences');
selbox1.options[selbox1.options.length] = new Option('Pediatrics (小児科学)','Pediatrics');
selbox1.options[selbox1.options.length] = new Option('Physiological Sciences (生理科学)','Physiological Sciences');
selbox1.options[selbox1.options.length] = new Option('Physiotherapy (理学療法)','Physiotherapy');
selbox1.options[selbox1.options.length] = new Option('Psychiatry (精神医学)','Psychiatry');
selbox1.options[selbox1.options.length] = new Option('Radiology (放射線医学)','Radiology');
selbox1.options[selbox1.options.length] = new Option('Rheumatology (リウマチ学)','Rheumatology');
selbox1.options[selbox1.options.length] = new Option('Sports Medicine & Technology (interdisciplinary) (スポーツ医学・スポーツテクノロジー)','Sports Medicine & Technology');
selbox1.options[selbox1.options.length] = new Option('Surgery (外科学)','Surgery');
selbox1.options[selbox1.options.length] = new Option('Urology (泌尿器学)','Urology');
selbox1.options[selbox1.options.length] = new Option('Other (その他)','Other');
}

if (chosen == "Pharmaceutical Sciences") {

selbox1.options[selbox1.options.length] = new Option('Chemo-Pharmaceutical Sciences (薬化学)','Chemo-Pharmaceutical Sciences');
selbox1.options[selbox1.options.length] = new Option('Medico-pharmaceutical Sciences (薬理医学)','Medico-pharmaceutical Sciences');
selbox1.options[selbox1.options.length] = new Option('Pharmacology (薬理学)','Pharmacology');
selbox1.options[selbox1.options.length] = new Option('Toxicology (毒物学)','Toxicology');
selbox1.options[selbox1.options.length] = new Option('Other (その他)','Other');
}

if (chosen == "Chemistry") {
selbox1.options[selbox1.options.length] = new Option('Analytical Chemistry (分析化学)','Analytical Chemistry');
selbox1.options[selbox1.options.length] = new Option('Applied Chemistry (応用化学)','Applied Chemistry');
selbox1.options[selbox1.options.length] = new Option('Coodination Chemistry (錯体化学・配位化学)','Coodination Chemistry');
selbox1.options[selbox1.options.length] = new Option('Inorganic Chemistry (無機化学)','Inorganic Chemistry');
selbox1.options[selbox1.options.length] = new Option('Organic Chemistry (有機化学)','Organic Chemistry');
selbox1.options[selbox1.options.length] = new Option('Organometallic Chemistry (有機鉱物学)','Organometallic Chemistry');
selbox1.options[selbox1.options.length] = new Option('Physical Chemistry (物理化学)','Physical Chemistry');
selbox1.options[selbox1.options.length] = new Option('Solid State Chemistry (固体化学)','Solid State Chemistry');
selbox1.options[selbox1.options.length] = new Option('Structural Chemistry (構造化学)','Structural Chemistry');
selbox1.options[selbox1.options.length] = new Option('Other (その他)','Other');
}

if (chosen == "Computer/Information Sciences") {
selbox1.options[selbox1.options.length] = new Option('Applied Information Sciences (応用情報科学)','Applied Information Sciences');
selbox1.options[selbox1.options.length] = new Option('Computer Aided Engineering (CAE) (コンピューター援用エンジニアリング)','Computer Aided Engineering');
selbox1.options[selbox1.options.length] = new Option('Computer Graphics (コンピューターグラフィックス)','Computer Graphics');
selbox1.options[selbox1.options.length] = new Option('Computer Science (コンピューターサイエンス)','Computer Science');
selbox1.options[selbox1.options.length] = new Option('Informatics (Interdisciplinary) (インフォマティックス)','Informatics');
selbox1.options[selbox1.options.length] = new Option('Information Technology (情報技術)','Information Technology');
selbox1.options[selbox1.options.length] = new Option('Virtual Reality (バーチャルリアリティー)','Virtual Reality');
selbox1.options[selbox1.options.length] = new Option('Other (その他)','Other');
}

if (chosen == "Earth and Planetary Sciences/Geophysics") {
selbox1.options[selbox1.options.length] = new Option('Geochemistry (地球科学)','Geochemistry');
selbox1.options[selbox1.options.length] = new Option('Geology (地質学)','Geology');
selbox1.options[selbox1.options.length] = new Option('Geophysics (地球物理学)','Geophysics');
selbox1.options[selbox1.options.length] = new Option('Meteorology (気象学)','Meteorology');
selbox1.options[selbox1.options.length] = new Option('Mineralogy (鉱物学)','Mineralogy'); 
selbox1.options[selbox1.options.length] = new Option('Oceanography (海洋学)','Oceanography');
selbox1.options[selbox1.options.length] = new Option('Petrology','Petrology');
selbox1.options[selbox1.options.length] = new Option('Seismology (地震学)','Seismology');

selbox1.options[selbox1.options.length] = new Option('Volcanology (火山学)','Volcanology');
selbox1.options[selbox1.options.length] = new Option('Other (その他)','Other');
}

if (chosen == "Engineering") {
selbox1.options[selbox1.options.length] = new Option('Aerospace/Aeronautical Engineering (航空宇宙産業/航空工学)','Aerospace/Aeronautical Engineering');
selbox1.options[selbox1.options.length] = new Option('Architecture (建築学)','Architecture');
selbox1.options[selbox1.options.length] = new Option('Automotive Engineering (自動車工学)','Automotive Engineering');
selbox1.options[selbox1.options.length] = new Option('Chemical Engineering (化学工業学)','Chemical Engineering');  
selbox1.options[selbox1.options.length] = new Option('Civil Engineering (土木工学)','Civil Engineering');
selbox1.options[selbox1.options.length] = new Option('Electrical Engineering (電気工学)','Electrical Engineering');
selbox1.options[selbox1.options.length] = new Option('Electronics Engineering (電子工学)','Electronics Engineering');
selbox1.options[selbox1.options.length] = new Option('Energy Systems Engineering (エネルギーシステム工学)','Energy Systems Engineering');
selbox1.options[selbox1.options.length] = new Option('Ergonomics (interdisciplinary)','Ergonomics (interdisciplinary)');
selbox1.options[selbox1.options.length] = new Option('Instrumentation Engineering','Instrumentation Engineering');
selbox1.options[selbox1.options.length] = new Option('Marine Engineering (海洋工学)','Marine Engineering');
selbox1.options[selbox1.options.length] = new Option('Materials Science/Engineering (物質工学)','Materials Science/Engineering');
selbox1.options[selbox1.options.length] = new Option('Mechanical Engineering (機械工学)','Mechanical Engineering');
selbox1.options[selbox1.options.length] = new Option('Mechanics (力学・機械学)','Mechanics');
selbox1.options[selbox1.options.length] = new Option('Metallurgy (冶金学・金属学)','Metallurgy');
selbox1.options[selbox1.options.length] = new Option('Metrology (計測学・計量学)','Metrology');
selbox1.options[selbox1.options.length] = new Option('Molecular Engineering (分子工学)','Molecular Engineering'); 
selbox1.options[selbox1.options.length] = new Option('Nanotechnology (ナノテクノロジー論)','Nanotechnology');
selbox1.options[selbox1.options.length] = new Option('Production/Manufacturing Engineering (生産技術/製造エンジニアリング)','Production/Manufacturing Engineering');
selbox1.options[selbox1.options.length] = new Option('Robotics (ロボット工学)','Robotics');
selbox1.options[selbox1.options.length] = new Option('Structural Engineering (構造工学)','Structural Engineering');
selbox1.options[selbox1.options.length] = new Option('Telecommunication Engineering (電気通信エンジニアリング)','Telecommunication Engineering');
selbox1.options[selbox1.options.length] = new Option('Urban Engineering (都市工学)','Urban Engineering');
selbox1.options[selbox1.options.length] = new Option('Other (その他)','Other');
}

if (chosen == "Mathematics") {
selbox1.options[selbox1.options.length] = new Option('Algebra (代数学)','Algebra');
selbox1.options[selbox1.options.length] = new Option('Analysis (分析学)','Analysis');
selbox1.options[selbox1.options.length] = new Option('Applied Mathematics (応用数学)','Applied Mathematics');
selbox1.options[selbox1.options.length] = new Option('Calculus (微積分学)','Calculus');
selbox1.options[selbox1.options.length] = new Option('Game Theory (interdisciplinary) (ゲーム理論)','Game Theory');
selbox1.options[selbox1.options.length] = new Option('Geometry (幾何学)','Geometry');
selbox1.options[selbox1.options.length] = new Option('Stochastic Processes (確率論・情報理論)','Stochastic Processes');
selbox1.options[selbox1.options.length] = new Option('Other (その他)','Other');
}

if (chosen == "Physics and Astronomy") {
selbox1.options[selbox1.options.length] = new Option('Acoustics (音響学)','Acoustics');
selbox1.options[selbox1.options.length] = new Option('Applied Physics (応用物理)','Applied Physics');
selbox1.options[selbox1.options.length] = new Option('Astronomy & Astrophysics (天文学・天体物理学)','Astronomy & Astrophysics');
selbox1.options[selbox1.options.length] = new Option('Atomic/Nuclear/Particle Physics (原子/原子力発電/素粒子物理学)','Atomic/Nuclear/Particle Physics');
selbox1.options[selbox1.options.length] = new Option('Colloid & Interface Science (コロイド・界面科学)','Colloid & Interface Science');
selbox1.options[selbox1.options.length] = new Option('Condensed Matter Physics (物性理論学)','Condensed Matter Physics');
selbox1.options[selbox1.options.length] = new Option('Crystal Physics (結晶物理学)','Crystal Physics');
selbox1.options[selbox1.options.length] = new Option('Fluid Physics (流体物理学)','Fluid Physics');
selbox1.options[selbox1.options.length] = new Option('Low Temperature Physics (低温物理学)','Low Temperature Physics');
selbox1.options[selbox1.options.length] = new Option('Magnetism & Electromagnetism (磁気・電磁気学)','Magnetism & Electromagnetism');
selbox1.options[selbox1.options.length] = new Option('Optics (光学)','Optics');
selbox1.options[selbox1.options.length] = new Option('Plasma Physics/Chemistry (プラズマ物理学/化学)','Plasma Physics/Chemistry');
selbox1.options[selbox1.options.length] = new Option('Quantum Physics (量子物理学)','Quantum Physics');
selbox1.options[selbox1.options.length] = new Option('Spectroscopy (Mass/Solid State/Molecular) (分光学（質量/固体/分子）)','Spectroscopy (Mass/Solid State/Molecular)');
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