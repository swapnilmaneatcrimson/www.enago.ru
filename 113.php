<?php 
  $currentPage="Quality";
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">

<!-- HEAD -->
<head>
<meta name="author" content="DigitalCavalry" />
<meta name="description" content="Прочитайте то, о чем авторы говорят про нас, которые прибегли к нашим услугам в области научного редактирования. Наше обязательство по предоставлению качества и оказания внимания к потребностям клиентов делают нас одной из лучших академических компаний по редактированию во всем мире." />
<meta name="keywords" content="" />
<meta name="language" content="english" />
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Enago оказывает услуги редактирования и мы завоевали доверие 20 000 клиентов из более чем 67 стран</title>
<!-- ICON -->
<link rel="icon" href="img/common/icons/favicon.ico" type="image/x-icon" />
<!-- CSS (Cascading Style Sheets) Files -->
<link type="text/css" rel="stylesheet" href="css/prettyPhoto/prettyPhoto.css" />
<link type="text/css" rel="stylesheet" href="css/common.css" />

<link type="text/css" rel="stylesheet" href="css/index.css" />
<link href="css/demo.css" rel="stylesheet" type="text/css" />
<!-- JavaScript Files -->
<script type="text/javascript" src="lib/jquery-1.3.2.min.js"></script>
<script type="text/javascript" src="lib/jquery.easing.1.2.js"></script>
<script type="text/javascript" src="lib/jquery.prettyPhoto.js"></script>
<script type="text/javascript" src="js/common.js"></script>
<script type="text/javascript" src="js/index.js"></script>

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

<!-- HEADER SECTION -->
<?php include("inc_header.htm"); ?>
<!-- headerContainer  --> <!-- BODY CONTAINER -->
<div id="bodyContainer">
  <div class="cleaner"></div>
  <!-- NAVIGATION -->
  <?php include("inc_navigation.htm"); ?>
  <!-- navigationContainer --> 
 
  <!-- SERVICES AND PRODUCTS, LAST NEWS LIST -->
  <div id="corporateInfoContainer"> 
    <!-- COLUMN #2 -->
    <div class="columnLatestNews">
      <h2 id="latestNewsHeader">Качество Энаго</h2>
		<div class="sidebarLinkPanelContainer">
         <a href="quality.htm" class="item">Качество Энаго</a>
         <a href="accepted-papers.php" class="item">Утвержденные рукописи</a>
         <a href="113.php" class="item active-sub">Отзывы</a>
        <!-- Left banner -->
      <?php include("inc_leftbottom.htm"); ?>
        <!-- Left banner end -->            
		</div>
    </div>
    
    <!-- COLUMN #1 -->
    <div class="columnServicesProducts">
      <h2>Отзывы</h2>
      <div id="navigationTreeContainer">
                        <a href="index.htm" class="prev">Home</a>&nbsp;&nbsp;\&nbsp;&nbsp; 
                        <a href="quality.htm" class="prev">Качество Энаго</a>&nbsp;&nbsp;\&nbsp;&nbsp;<a class="current">Отзывы</a>
                    </div>
      <div class="columnText">
      
  <p>Компания Энаго оказала услуги более чем 20 000 клиентам из 67 стран мира. Мы помогли нашим Клиентам преодолеть языковой барьер и помогли им опубликовать их научные рукописи   в международных,  высоко рейтинговых научных журналах. Некоторые из наших   клиентов делятся  своими отзывами о наших услугах и рассказывают о том, как компания Энаго помогла им достичь их публикаций. </p>

<?php

// Begining of the code added by Sanjay

include('conn.php');

//$limit=25;

$CountryName="Russia";

$MyQuery = "select * from accepted_papers where Permission_to_Publish_Testimonial=\"Yes\"  And Testimonial_Kazak !='' order by field(region, \"Germany\", \"Global\", \"Taiwan\", \"Japan\", \"China\",  \"Iran\") ASC, Country ASC, Image_path DESC";

$numresults=mysql_query($MyQuery);

$numrows=mysql_num_rows($numresults);

if($numrows==0)
{
	echo "<H4>Results</H4>";
	echo "<P>Sorry, no records found</P>";
	
}


//$MyQuery.= " limit $s,$limit";

//echo $MyQuery;
//exit;


$result = mysql_query($MyQuery) or die("Couldn't execute query");

$i=0;
$PrevMem_Id="";
$z=0;

$ClientImg = "client-defaultimage.png";

	while ($row= mysql_fetch_array($result))
	{
		
	$Mem_Id = $row["MemID"];
	$Publisher_Name = $row["Publisher_Name"]; 
	$Journal_Details = $row["Journal_Details"];
	$Impact_Factor =  $row["Impact_Factor"];
	if ($Impact_Factor == 0) 
	{
		$Impact_Factor = "-";
		};
	$Revised_Paper_Title = $row["Revised_Paper_Title"];
	$Article_Link = $row["Article_Link"];
	$CanPublishAP = $row["Can_Publish_Accepted__Papers"];
	
	$Country = $row["Country"];
	
	if($Country == $CountryName)
	{
		$First_Name =  $row["FirstName_R"];
		$Last_Name = $row["LastName_R"];
	}
	else
	{
		$First_Name =  $row["FirstName_EN"];
		$Last_Name = $row["LastName_EN"];
	}

	$T = "Testimonial_".$CountryName;		

	$Testimonial1 = $row[$T]; 
	$Testimonial = str_replace('""',"'",$Testimonial1);
	
	if ($row["Organization_Name"]=="Confidential")
	{
	$OrgName = "";
	}
	else{
		$OrgName = $row["Organization_Name"];
	}
	
		if ($row["Designation"]=="Anonymous")
	{
	$Desig = "";
	}
	else{
		$Desig = $row["Designation"];
	}
	


	if ($row["Image_Path"]!="")
	{
		$ClientImg=$row["Image_Path"];	
	}
	else{
		$ClientImg = "client-defaultimage.png";
	}
		
	if($Mem_Id != $PrevMem_Id)
	{

	if ($i!=0)	
	{
		echo "<span class=\"divider\">&nbsp;</span>";
	}
	echo "<div class=\"testimonialblock\"><div class=\"clientname1\">".$First_Name." ".$Last_Name.", ".$Country."</div><div class=\"image\"><img src=\"images/testimonials/".$ClientImg."\" width=\"116\" height=\"116\" alt=\"English Editing of Scientific Manuscripts\"/></div><div class=\"text\">".$Testimonial."<div class=\"clientname\">".$OrgName."<br />".$Desig."</div></div></div>";
	
	}

	if (($Revised_Paper_Title != "")&&($CanPublishAP == "Yes"))
	{

		echo "<div style=\"clear:all\"></div>";
		
		if($Mem_Id != $PrevMem_Id) //sanjay
		{
			echo "<h2 class=\"h2-hd\">Publikationen dieses Autors</h2>";
			
		}
		
		echo "<table class=\"papertable\"><tr><td width=\"12%\">".$Publisher_Name."</td><td width=\"33%\">".$Journal_Details."</td><td width=\"50%\"><a href=".$Article_Link." target=\"_blank\">".$Revised_Paper_Title."</a></td><td  		width=\"5%\" class=\"sized1\">".$Impact_Factor."</td></tr></table>";				

	}
		
		//

	$count++;
	$i++;
	$PrevMem_Id = $Mem_Id;

	}
	

// End of code added by Sanjay

?>

</div>
  <div id="calltoaction"><a href="106.htm" class="btn-checkprice"></a><a href="23.htm" class="btn-submitmanuscript"></a></div>
    </div>
    
    <!-- columnLatestNews -->
    <div class="clearBoth"></div>
  </div>
  <!-- corporateInfoContainer --> 
  
</div>
<!-- bodyContainer --> 

<!-- FOOTER -->
<?php include("inc_footer.htm"); ?>
<!-- footerContainer -->

</body>
</html>
