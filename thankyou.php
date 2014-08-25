<?php
ini_set("mbstring.internal_encoding","UTF-8");
$num1 = $_POST['num1'];
$num2 = $_POST['num2'];
$answer = $_POST['answer'];
$trackcode = $_POST['trackcode'];

$answer2 = $num1 + $num2;

if($trackcode == "crimson" && $answer == $answer2){
// end function validate_email
$originallname=$lname;
$originalfname=$fname;
$specialcode=strtoupper($specialcode);
include "common.php";
include "uploadconfig.php";
putenv('TZ=Asia/Calcutta');
$date=date('d F Y'); //Output: Wednesday, 07 September 2005 02:22 AM
$nowDay=date("m/d/Y");
$nowHour = getdate(mktime(date("H")));
$nowMin = date("i");
$nowSec = date("s");
$nowClock = $nowHour["hours"].":".$nowMin.":".$nowSec;
$ip=@$REMOTE_ADDR; 
//****************************************************************************

// important to order by parent ie MSIE then OPERA.

$browser = array (
   "MSIE",            // parent
   "OPERA",
   "MOZILLA",        // parent
   "NETSCAPE",
   "FIREFOX",
   "SAFARI"
);

$info[browser] = "OTHER";
//****************************************************************************
//alerts

if($clienttype == "New Client")
{

	if($format!="No, do not format" && $journalurl=="")
		{$alert1="\n1. No Journal URL. ASK CLIENT URL.";}
		
	if($format!="No, do not format")
		{ 
		if($inputfile=="PDF" || $inputfile=="TeX")
			{
				$alert2="\n2. No formatting possible for TeX or PDF. UNCHECK FORMATTING IN SHEET";
			}
		if($priority=="Super Express" || $priority=="Last Minute")
				{
		$alert3="\n3. No formatting for Super Express and Last Minute.  UNCHECK FORMATTING IN SHEET";
				}	
		}
	if($numreferencefiles>0 || $numeditingfiles>1)
		{ 
			$alert4="\n4. Check the number of editing and reference files"; 
		}
	
	//NEW CLIENT FEATURES
	if($email2=="")
		{ 
			$alert7="\n7. Only one email address-Be careful"; 
		}
		
	if($country!="Russia")
		{ 
			$alert8="\n8. Check Country and address client accordingly."; 
		}
	if($service =="Advance Editing")
		{ 
			$alert14="\n14. A new client has chosen Advance Editing, enter 20% new client discount."; 
		}
	
	if($mrc!="" && $priority=="Economy")
		{ 
			$alert10="\n10. Client has chosed ECONOMY and wants MRC. This is not possible."; 
		}
	
	if($service=="Advance Editing" && $outputfile!="MS Word")
		{ 
			$alert11="\n11. Output format for ADVANCE editing should be MSWORD."; 
		}
	if($specialcode == "RE-EDIT" || $specialcode == "re-edit")
		{ 
			$alert12="\n12. Re-edting assignment, enter the 30% re-editing discount."; 
		}
	
	if($inputfile=="TeX" && $outputfile=="TeX")
		{
		$alert13="\n13. TeX to TeX editing, enter the 30% TeX premium."; 
		}
	if($inputfile=="PPT/XLS")
		{
		$alert15="\n15. PPT. Excel file for editing, enter premuim accordingly."; 
		}
	
	if($specialcode == "POSTER")
		{
		if($outputfile!="PPT/XLS" && $outputfile!="PDF" )
			{$alert20="\n20. Only PPT or PDF accepted as output file format for Poster Service"; }
		$alert16="\n16. This is a special poster editing service. Enter fee as 25000 Yen"; 
		}
	
	if($specialcode == "FTS0607")
		{
		$alert17="\n17. 1. Client has chosen formatting service only.\n
	2. Intimate the client that his document will be formatted only and no English language check  will be done."; 
		}
	if($deadlinestrict == "NO STRICT DEADLINE")
		{
		$alert19="\n19. Take extra days to calculate TAT."; 
		}
	if($R1 == "Others" && $txtRef == "")
		{
		$alert27="\n27. Please ask the name of the reference person from the client."; 
		}
	if($membershipid=="HISKI")
		{ 
			$alert30="\n30. Please inform EC to format document for linguistic style related changes only irrespectve of output file format."; 
		}
	
	//ALERT BOX
	if ($alert1=="" && $alert2=="" && $alert3=="" && $alert4=="" && $alert5=="" && $alert6=="" && $alert9=="" && $alert10=="" && $alert11==""  && $alert12==""  && $alert13==""  && $alert14==""  && $alert15==""  && $alert16==""  && $alert17==""  && $alert18==""  && $alert19==""  && $alert20=="" && $alert27=="" && $alert30=="")
	{ $finalalert="";}
	else
	{
	 $finalalert="ALERTS//////////////////////////
	$alert1 $alert2 $alert3 $alert4 $alert5 $alert6 $alert9 $alert10 $alert11  $alert12 $alert13 $alert14 $alert15 $alert16 $alert17 $alert18 $alert19 $alert20 $alert27 $alert30
	//////////////////////////////////////////////////// ";
	}
	
}
if($clienttype == "Exiting Client"){
	
	if($format!="No, do not format" && $journalurl=="")
	{$alert1="\n1. No Journal URL. ASK CLIENT URL.";}

if($format!="No, do not format")
	{ 
		if($inputfile=="PDF" || $inputfile=="TeX") 
			{
				$alert2="\n2. No formatting possible for TeX or PDF. UNCHECK FORMATTING IN SHEET";
			}
		if($priority=="Super Express" || $priority=="Last Minute") 
			{
				$alert3="\n3. No formatting for Super Express and Last Minute.  UNCHECK FORMATTING IN SHEET";
			}	
			
	}

if($numreferencefiles>0 || $numeditingfiles>1)
	{ 
		$alert4="\n4. Check the number of editing and reference files"; 
	}

if($membershipid=="RYOIN")
	{ 
		$alert7="\n7. Please calculate the word count of this client carefully.\n Do not include page number in header and footer."; 
	}
if($membershipid=="SEKMI")
	{
		$alert8="\n8. Inform EC to send both the file with track changes as well without the track changes."; 
	}
if($membershipid=="HISKI")
	{ 
		$alert30="\n30. Please inform EC to format document for linguistic style related changes only irrespectve of output file format."; 
	}
if($membershipid=="MASKU")
	{ 
		$alert31="\n31. Please password protect the final files for delivery. Kindly consult EC for password."; 
	}
	
//MRC alert
if($mrc!="" && $priority=="Economy")
	{ 
		$alert10="\n10. Client has chosed ECONOMY and wants MRC. This is not possible."; 
	}

if($service=="Advance Editing" && $outputfile!="MS Word")
	{ 
		$alert11="\n11. Output format for ADVANCE editing should be MSWORD."; 
	}
if($specialcode == "RE-EDIT" || $specialcode == "re-edit")
	{ 
		$alert12="\n12. Re-edting assignment, enter the 30% re-editing discount."; 
	}

if($inputfile=="TeX" && $outputfile=="TeX")
	{
	$alert13="\n13. TeX to TeX editing, enter the 30% TeX premium."; 
	}
if($inputfile=="PPT/XLS")
	{
	$alert15="\n15. PPT. Excel file for editing, enter premuim accordingly."; 
	}

if($specialcode == "FTS0607")
	{
	$alert17="\n17. 1. Client has chosen formatting service only.\n
2. Intimate the client that his document will be formatted only and no English language check  will be done."; 
	}
if($deadlinestrict == "NO STRICT DEADLINE")
	{
	$alert19="\n19. Take extra days to calculate TAT."; 
	}
if($specialcode == "Pharma" && $membershipid == "TNRDS")
	{
	$alert24="\n24. Please check the special code is as 'Pharma'. \n Provide Instructions to editors accordingly."; 
	}
if($membershipid == "TAKAS")
	{
	$alert25="\n25. Please inform the client that payment documents were sent in advance for an amount of 142,995 Yen. In case the fee for his assignment is less or more, inform the client and CC: payments@enago.com  about the new fee."; 
	}
if($membershipid == "HIRIS")
	{
	$alert26="\n26. Please enter special discount of 5% in additon to regular discounts for this client."; 
	}
if($membershipid=="JSPFR")
	{ 
		$alert27="\n27.  Please do not edit figures and references. The guidelines for editor is saved in the following location: //Crimson-2/assignments/EnagoAssignments/Pending/GUIDELINES. Please refer to all the instructions carefully.";
	}
	
	
//ALERT BOX
if ($alert1=="" && $alert2=="" && $alert3=="" && $alert4=="" && $alert5=="" && $alert6=="" && $alert7=="" && $alert8=="" && $alert9=="" && $alert10=="" && $alert11==""  && $alert12==""  && $alert13==""  && $alert15==""  && $alert16==""  && $alert17==""  && $alert18==""  && $alert19==""  && $alert20=="" && $alert24=="" && $alert25=="" && $alert26=="" && $alert27=="" && $alert30=="" && $alert30=="")
{ $finalalert="";}
else
{
 $finalalert="ALERTS//////////////////////////
$alert1 $alert2 $alert3 $alert4 $alert5 $alert6 $alert7 $alert8 $alert9 $alert10 $alert11  $alert12 $alert13 $alert15 $alert16 $alert17 $alert18 $alert19 $alert20 $alert24 $alert25 $alert26 $alert27 $alert30 $alert31
//////////////////////////////////////////////////// ";
}
	
}

///ALERT END

foreach ($browser as $parent) {
   $s = strpos(strtoupper($_SERVER['HTTP_USER_AGENT']), $parent);
   $f = $s + strlen($parent);
   $version = substr($_SERVER['HTTP_USER_AGENT'], $f, 5);
   $version = preg_replace('/[^0-9,.]/','',$version);
   
   if (strpos(strtoupper($_SERVER['HTTP_USER_AGENT']), $parent)) {
   $info[browser] = $parent;
   $info[version] = $version;
   }
}
$browser=implode(",", $info);

//****************************************************************************

//

$firstchar = substr($subsubject, 0, 3);

//
if($firstchar == "Med")
{
	$mainsubject = "Medical/Clinical Sciences";
}
if($firstchar == "Lif")
{
	$mainsubject = "Life Sciences";
}
if($firstchar == "Phy")
{
	$mainsubject = "Physical Sciences and Engineering";
}
if($firstchar == "Eco")
{
	$mainsubject = "Economics and Business";
}
if($firstchar == "Art")
{
	$mainsubject = "The Arts, Humanities, and Social Sciences";
}
//


$subsubject_a = substr($subsubject, 4);


$specialization_a = $specialization;

if($specialization == "Other")
{
	$specialization_a = $otherspecialization;
}
//

/****************  EXT Rstriction  ********************/

$finfo = explode('.',$superdat_name);
$ext = array_pop($finfo);

/****************  End  ********************/
if ($superdat_name == "")
	{
	$autoresponse="Пожалуйста,  загрузите  файл.";
	$crimsonemailtext="Client did not upload the file";
	$thankyoupagetext="<p>Пожалуйста,  загрузите  файл.</p>";
	}
else if (($ext == "doc") || ($ext == "docx") || ($ext == "xls") || ($ext == "xlsm") || ($ext == "xlsx") || ($ext == "ppt") || ($ext == "pptx") || ($ext == "rtf") || ($ext == "dot")
|| ($ext == "hwp") || ($ext == "zip") || ($ext == "rar") || ($ext == "lzh") || ($ext == "pdf") || ($ext == "tex") || ($ext == "7z") || ($ext == "txt") || ($ext == "jpeg") || ($ext == "tiff") || ($ext == "eps") || ($ext == "png") || ($ext == "gif"))
	{
	if (($size_limit == "yes") && ($limit_size < $superdat_size))
	{
	$superdat_name=$fname."_".$lname."_".$superdat_name;
	$autoresponse="File size is very large, so cannot upload through website";
	$crimsonemailtext="FILE SIZE MORE THAN 8 MB, so cannot upload through website";
	$thankyoupagetext="<p>File size is very large, so cannot upload through website</p>";
	}
	else
	{
	if (file_exists("$absolute_path/$superdat_name"))
		{
		$superdat_name=$fname.$lname."_".$date.$nowClock."_".$superdat_name;
		}
		else {$superdat_name=$fname."_".$lname."_".$superdat_name;}
	@copy($superdat, "$absolute_path/$superdat_name");
	$autoresponse="Вы загрузили следующие файлы: $superdat_name";
	$crimsonemailtext="FILE UPLOADED";
	$thankyoupagetext="<p>Сіз келесідей файлдарды жүктедіңіз: $superdat_name</p>";
	};
}
else
{
	$thankyoupagetext="File type not supported.";
	$autoresponse="File type not supported.";
	$crimsonemailtext="File type not supported.";
}

/////////////////

$to = $tod;
if ($typeofdoc == "Abstract")
	{
$subjecttypeofdoc="{ABS}";
	}
if ($specialcode == "FTS0607")
	{
	$serviceprimary=$service;
	$service="FORMATTING SERVICE";
	}
	elseif ($specialcode == "POSTER")
	{
	$serviceprimary=$service;
	$service="POSTER SERVICE";
	}
	elseif ($specialcode == "RE-EDIT" || $specialcode == "re-edit")
	{
	$re="RE-EDITING ";
	}

if($specialcode=="ULATUS" && $service=="Advance Editing")
	{
	$re= "5% DISCOUNT";
	}

if($inputfile=="TeX" && $outputfile=="TeX")
{
$formatser="|TeX Editing";
}

//

if($typeofdoc == "Others")
{
	$typeofdoc = $other_typeofdoc;
}

//

if($specialcode=="8257")
	{
	$re= "5% DISCOUNT";
	}
	
if($specialcode=="MASTER")
	{
	$re= "10% Discount Master Thesis";
	}
if($specialcode=="WRCONLY")
	{
	$re= "[WORD COUNT REDUCTION]";
	}
//
if($specialcode!=""){
	$spcode = "Channel Partner Client. Please check Special Code - ".$specialcode;
}
else{
	$spcode = "";
}
//
if($isrequest == "Yes")
{
	$specialcode = "RE-EDIT";
	$re = "[RE-EDITING]";
}

//
if($clienttype == "New Client")
{
$msgrequest = "New Client Request Form

** $spcode **

$finalalert

REQUEST CAME IN AT INDIA TIME:$nowClock

PERSONAL DETAILS:
*****************************
Name: $fname $lname
Organization:  $organisation
Department: $department
Designation: $designation
Email:  $email 
Email2:  $email2 
Country: $country 
Zip Code: $zipcode 
City: $city 
Address:  $mailingaddress1 
Phone: $phone  $extno
Fax: $fax
Website: $website
Reference: $R1 (Details: $txtRef)
*****************************

SERVICE: $service $serviceprimary
Coverletter: $coverletter
MRC: $mrc

LANGUAGE DETAILS:
*****************************
Subject area: $mainsubject 
Subsubject: $subsubject_a
Specialization: $specialization
Other Specialization: $otherspecialization
Language: $language
Use of document: $useofdoc
Type of document: $typeofdoc
Journal name: $journalname
Format: $format
INPUT FILE: $inputfile
OUTPUT FILE: $outputfile
*****************************

TAT:
*****************************
Priority: $priority
Delivery Date: $delDay  $delMonth  $delYear 
Delivery Time:  $delHrs : $delMin Russia time
Deadline strictness: $deadlinestrict
Details: $deadlinedetails
*****************************

PAYMENT: 
*****************************
How would you like to pay us?: $ePayment
Invoice type: $ePublicEx
Name of institution: $institution
Register nummer: $regnumber
Invoice date: $invoicedate
Other Info: $otherinfo
*****************************

*****************************
Specialcode: $specialcode
File uploaded: $crimsonemailtext $superdat_name
Files for editing: $numeditingfiles
Files for reerence: $numreferencefiles
Comments: $sInstructions

$tandc

*****************************
IP: $ip
Browser:$browser

$date|$fname|$lname|$kanjinamegiven|$kanjinamefamily|$organisation|$organisation|$email|$email2|$country|$state|$city|$mailingaddress1|$zipcode|$phone|$fax,$cellno,$cellemailid|$website||$txtRef||$R1|$ePayment|$department|$designation|RUSSIA


$service|$priority|$lname|$date|$nowClock||||$lastlinemif|||$oldeditor($asneditor)|$deadlinestrict|$shouldwestart|$formatsub||$coverletter|$mrc||$mainsubject|$subsubject_a|$useofdoc|$journalname|$typeofdoc|$format|$journalurl|$language|$oldeditor|$inputfile|$outputfile|$numeditingfiles|$numreferencefiles|$superdat_name|$file_size|$specialcode|NON-SECURE|$ip|$browser|NEW|$specialization_a||$email;$email2|$ePublicEx|$publicExText|$payer|$membershipid||";

	$msgvcs = "
PLEASE REPLY TO: $replyvcs

REQUEST CAME IN AT INDIA TIME:$nowClock

PERSONAL DETAILS:(TRANSLATE IF ANYTHING BELOW IS IN RUSSIAN)
*****************************
Name: $fname $lname
Reference: $txtRef
*****************************

MANUSCRIPT DETAILS:
*****************************
Other Specialization: $otherspecialization
Journal name: $journalname
*****************************

TAT:
*****************************
Details: $deadlinedetails
*****************************

*****************************
Comments: $sInstructions

*****************************";

	$subjectline = "[$nowClock][RUSSIA] $subjecttypeofdoc $re | $service $formatser $addition | $fname $lname | $shouldwestart | $priority | $delDay $delMonth $deadlinestrict";
	
}
else
{
$msgrequest = "Existing Client Request Form

** $spcode **

$finalalert

REQUEST CAME IN AT INDIA TIME:$nowClock

PERSONAL DETAILS:
*****************************
Membership ID: $membershipid
Name: $fname $lname
Organization:  $organisation
Email:  $email
Email2:  $email2 
*****************************

SERVICE: $service  $serviceprimary
Coverletter: $coverletter
MRC: $mrc

LANGUAGE DETAILS:
*****************************
Subject area: $mainsubject 
Subsubject: $subsubject_a
Specialization: $specialization
Other Specialization: $otherspecialization
Language: $language
Use of document: $useofdoc
Type of document: $typeofdoc
Journal name: $journalname
Format: $format ($journalurl)$formatsub
INPUT FILE: $inputfile
OUTPUT FILE: $outputfile
Editor: $oldeditor ($asneditor)
*****************************

TAT:
*****************************
SHOULD WE START EDITING: $shouldwestart
Priority: $priority
Delivery Date: $delDay  $delMonth  $delYear 
Delivery Time:  $delHrs : $delMin Russia time
Deadline strictness: $deadlinestrict
Details: $deadlinedetails
*****************************

PAYMENT: 
*****************************
Invoice type: $ePublicEx 
Name of institution: $institution
Register nummer: $regnumber
Invoice date: $invoicedate
Other Info: $otherinfo
*****************************

*****************************
Specialcode: $specialcode 
File uploaded: $crimsonemailtext $superdat_name
Files for editing: $numeditingfiles
Files for reerence: $numreferencefiles
Comments: $sInstructions

$tandc

*****************************
IP: $ip
Browser:$browser

$service|$priority|$lname|$date|$nowClock||||$lastlinemif|||$oldeditor($asneditor)|$deadlinestrict|$shouldwestart|$formatsub||$coverletter|$mrc||$mainsubject|$subsubject_a|$useofdoc|$journalname|$typeofdoc|$format|$journalurl|$language|$oldeditor|$inputfile|$outputfile|$numeditingfiles|$numreferencefiles|$superdat_name|$file_size|$specialcode|NON-SECURE|$ip|$browser|EXISTING|$specialization_a||$email;$email2|$ePublicEx|$publicExText|$payer|$membershipid||";

	$msgvcs = "
PLEASE REPLY TO: $replyvcs

REQUEST CAME IN AT INDIA TIME:$nowClock

PERSONAL DETAILS:(TRANSLATE IF ANYTHING BELOW IS IN PORTUGUESE)
*****************************
Membership ID: $membershipid
Name: $fname $lname
*****************************

MANUSCRIPT DETAILS:
*****************************
Other Specialization: $otherspecialization
Journal name: $journalname
*****************************

TAT:
*****************************
Details: $deadlinedetails
*****************************

*****************************
Comments: $sInstructions
*****************************";

	$subjectline = "[$nowClock][RUSSIA] $subjecttypeofdoc $re | $service $formatser $addition | $membershipid | $shouldwestart | $priority | $delDay $delMonth $deadlinestrict";
	
}

//
$file_size=$superdat_size/1024;
$lname=ucwords(strtolower($lname));
$fname=ucwords(strtolower($fname));
$tandc="$agreeterms, I have agreed the terms & conditions. ";


$message = $msgrequest;

mail("$to", "$subjectline", $message,
              "From: Uploads-ENAGO<$fromAdd>\r\n" .
				"Content-type: text/plain; charset=utf-8");

//

$messagevcs = $msgvcs;


mail("$tovcs", "$subjectline", $messagevcs,  
              "From: Uploads-ENAGO<$fromAdd>\r\n" .
				"Content-type: text/plain; charset=utf-8");

//AUTORESPONSE

$sub="Спасибо за Ваш запрос.(Авто-ответ)";
$message1 = "Дорогой, $originallname \n
Благодарим Вас за подачу рукописи

$autoresponse

============================================================
С наилучшими пожеланиями, 
Служба клиентской поддержки
научного редактирования  
CRIMSON INTERACTIVE, LLC (USA)";

		
mb_send_mail("$email", "$sub", $message1, "From: CRIMSON (DO_NOT_REPLY-ENAGO)<$clientfromAdd>\r\n" );
?> 
<?php 
  $currentPage="Quotation";
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">

<!-- HEAD -->
<head>
<meta name="author" content="DigitalCavalry" />
<meta name="description" content="Enago предлагает  Вам услуги академического научного редактирования английского языка  по доступным ценам. Enago имеет опыт в редактировании более 120000 слов. Наши редакторы - носители английского языка в области редактирования из США, Великобритании. Редакторы имеют степень магистра, доктора наук. " />
<meta name="keywords" content="" />

<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Услуги научного английского редактирования, научное английское редактирование, услуги корректирования научного английского языка</title>
<!-- ICON -->
<link type="image/x-icon" href="images/favicon.ico" rel="shortcut icon">
<!-- CSS (Cascading Style Sheets) Files -->
<link type="text/css" rel="stylesheet" href="css/common.css" />

<link type="text/css" rel="stylesheet" href="css/index.css" />
<!-- JavaScript Files -->

<script src="js/jquery-1.2.1.min.js" type="text/javascript"></script>

<script src='http://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js'></script>
<script src="js/organictabs.jquery1.js"></script>
    <script>
	window.onload = function() {
	setTimeout(function() {
		// preload image
		new Image().src = "images/ec-support/ec-tab-sprite.png";
	}, 100);
};

        $(function() {
    
            $("#example-one").organicTabs();
            
            $("#example-two").organicTabs({
                "speed": 200
            });
    
        });
    </script>

<!--[if IE 6]>
        <script type="text/javascript" src="lib/DD_belatedPNG_0.0.8a-min.js"></script>
        <script>
          DD_belatedPNG.fix('.ie6PNGfix, .commonLink');
          
          /* string argument can be any CSS selector */
          /* .ie6PNGfix example is unnecessary */
          /* change it to what suits you! */
        </script>
        <![endif]-->

<script type="text/javascript"><!--//--><![CDATA[//><!--
            sfHover = function() {
                var sfEls = document.getElementById("nav").getElementsByTagName("LI");
                for (var i=0; i<sfEls.length; i++) {
                    sfEls[i].onmouseover=function() {
                        this.className+=" sfhover";
                    }
                    sfEls[i].onmouseout=function() {
                        this.className=this.className.replace(new RegExp(" sfhover\\b"), "");
                    }
                }
            }
            if (window.attachEvent) window.attachEvent("onload", sfHover);
        //--><!]]></script>
</head>

<body>
<?php
$a = "Английское редактирование, Английский редактор, Научное редактирование, Услуги научного редактирования";
?>

<!-- HEADER SECTION -->
<?php include("inc_header.htm"); ?>
<!-- headerContainer  --> <!-- BODY CONTAINER -->
<div id="bodyContainer">
  <div class="cleaner"></div>
  <!-- NAVIGATION -->
<?php include("inc_navigation.htm"); ?>
  <!-- navigationContainer --> 
 
  <!-- SERVICES AND PRODUCTS, LAST NEWS LIST -->
  <div id="bodyContainer">
  <div class="cleaner"></div>
  <!-- NAVIGATION -->
  
  <!-- navigationContainer -->
  <!-- SERVICES AND PRODUCTS, LAST NEWS LIST -->
  <div id="corporateInfoContainer">
    <!-- COLUMN #2 -->
    <div class="columnLatestNews">
      <h2 id="latestNewsHeader">Форма цитат</h2>
      <div class="sidebarLinkPanelContainer">
      	<a href="23.htm" class="item">Форма цитат<!-- Quotation form --></a>
        <a href="27.htm" class="item active-sub">Скидки / предложения<!-- Discounts/Offers --></a>
        <a href="30.htm" class="item">Оплата<!-- Payments--></a>
        <!-- Left banner -->
      <?php include("inc_leftbottom.htm"); ?>
        <!-- Left banner end -->           
        </div>
    </div>
    <!-- COLUMN #1 -->
    <div class="columnServicesProducts">
      <h1>Благодарим вас за подачу рукописи!</h1>
      <div id="navigationTreeContainer">
                        <a href="index.htm" class="prev">Home</a>&nbsp;&nbsp;\&nbsp;&nbsp;<a href="#" class="prev">Форма цитат</a>&nbsp;&nbsp;\&nbsp;&nbsp; 
                        <a class="current">Благодарим вас за подачу рукописи!</a>
                    </div>
      <div class="columnText">
        <p>Спасибо за Ваш запрос.</p>
        
<p>Наши клиенты  из отдела по обслуживанию персонала свяжутся с Вами в течение 1 рабочего часа с точной цитатой к вашей работе.</p>

<?php echo $thankyoupagetext ?>

<p>→ Если у вас есть несколько файлов, пожалуйста, отправьте на этот электронный адрес:  <a href="mailto:request@enago.com" class="contentlink">request@enago.com</a>.</p>

<h2>Вам необходима другая помощь в публикации вашей рукописи?</h2>
        <p>Enago предлагает следующие услуги для оказания поддержки   исследователям в публикации их научных работ. Для того, чтобы воспользоваться любой из этих услуг, пожалуйста, отправьте запрос  на <a href="mailto:request@enago.com" class="contentlink">request@enago.com</a></p>

<ul class="ulbasic3">
<li>Служба в выборе журнала</li>
<li>Услуги редактирования по пересмотру отклоненных работ</li>
<li>Авторские принципы  в подборе  вашего журнала</li>
<li>Написание сопроводительного письма для представления в журналы</li>
<li>Иллюстрированное редактирование</li>
<li>Услуга предварительного представления экспертной оценки</li>
<li>Служба подачи рукописей</li>
</ul>

<p>Для того, чтобы воспользоваться любой из этих услуг, пожалуйста, сделайте запрос в необходимой форме или отправьте нам письмо на <a href="mailto:request@enago.com" class="contentlink">request@enago.com</a> и наш обслуживающий персонал ответит на Ваше письмо</p>

<h2>Специальное предложение!</h2>
        <p>Если вы используете любой из этих услуг вместе со службой английского редактирования, вы получите дополнительную скидку 5% на английские цитирования службой редактирования. Пожалуйста, сделайте запрос, мы отправим вам письмо с Вашим идентификационным номером</p>

<h2>Предложение для новых Клиентов!</h2>
        <p> Если вы пользуетесь нашими услугами в первый раз, вы имеете право на скидку 10% от цен указанных на нашей странице,  относящихся к ценам  услуг редактирования .</p>
 </div>
   <div id="calltoaction"><a href="106.htm" class="btn-checkprice"></a><a href="23.htm" class="btn-submitmanuscript"></a></div>
    </div>
    <!-- columnLatestNews -->
    <div class="clearBoth"></div>
  </div>
  <!-- corporateInfoContainer -->
</div>
  <!-- corporateInfoContainer --> 
  
</div>
<!-- bodyContainer --> 

<!-- FOOTER -->
<?php include("inc_footer.htm"); ?>
<!-- footerContainer -->

<!-- Google Code for Google Code for EnagoRussia Conversion Page -->
<script type="text/javascript">
/* <![CDATA[ */
var google_conversion_id = 980682862;
var google_conversion_language = "en";
var google_conversion_format = "2";
var google_conversion_color = "ffffff";
var google_conversion_label = "q7yECKLg6wkQ7pDQ0wM";
var google_remarketing_only = false;
/* ]]> */
</script>
<script type="text/javascript" src="//www.googleadservices.com/pagead/conversion.js">
</script>
<noscript>
<div style="display:inline;">
<img height="1" width="1" style="border-style:none;" alt="" src="//www.googleadservices.com/pagead/conversion/980682862/?label=q7yECKLg6wkQ7pDQ0wM&amp;guid=ON&amp;script=0"/>
</div>
</noscript>



<!-- Google Code for EnagoRussia Remarketing -->
<!-- Remarketing tags may not be associated with personally identifiable information or placed on pages related to sensitive categories. For instructions on adding this tag and more information on the above requirements, read the setup guide: google.com/ads/remarketingsetup -->
<script type="text/javascript">
/* <![CDATA[ */
var google_conversion_id = 980682862;
var google_conversion_label = "apT4CMK46AkQ7pDQ0wM";
var google_custom_params = window.google_tag_params;
var google_remarketing_only = true;
/* ]]> */
</script>
<script type="text/javascript" src="//www.googleadservices.com/pagead/conversion.js">
</script>
<noscript>
<div style="display:inline;">
<img height="1" width="1" style="border-style:none;" alt="" src="//googleads.g.doubleclick.net/pagead/viewthroughconversion/980682862/?value=1.000000&amp;label=apT4CMK46AkQ7pDQ0wM&amp;guid=ON&amp;script=0"/>
</div>
</noscript>

</body>
</html>
<?php 
} 
else
{
	echo "Incorrect data";
	return false;
}
?>