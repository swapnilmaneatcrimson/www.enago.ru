<?php 
  $currentPage="Quality";
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">

<!-- HEAD -->
<head>
<meta name="author" content="DigitalCavalry" />
<meta name="description" content="Редакторы, со степенью Доктора философии и Магистра по Медицине, Хирургии, Ветеринарной Науке и других родственных сферах редактируют Ваши академические научные статьи в журналах и газетах. Утвержденные рукописи, Медицинские науки" />
<meta name="keywords" content="Английское редактирование, Английское корректура, научных редактирования Услуги, Английское редактор, Научные редактирование, Научные Английское редактирование, Редактирование статьи, Редактирование статьи, Редактирование статьи, Научное корректирование, Корректирование научной статьи, английского редактирования, Научная редакторская группа" />

<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Утвержденные рукописи, Медицинские науки | услуги редактирования для научных статей по Медицине на английском языке</title>
<!-- ICON -->
<link title="Enago English Editing" type="image/x-icon" href="images/favicon.ico" rel="shortcut icon">
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
<!-- <script type="text/javascript" src="js/paginate.js"></script> -->
<script type="text/javascript">
function showdes(id1){
	document.getElementById(id1).style.visibility = "visible";
	document.getElementById(id1).style.display = "block";
}

function hidedes(id2){
	document.getElementById(id2).style.visibility = "hidden";
	document.getElementById(id2).style.display = "none";
	
}

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

<!-- HEADER SECTION -->
<?php include("inc_header.htm"); ?>
<!-- headerContainer  --> 

<!-- BODY CONTAINER -->
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
         <a href="accepted-papers.php" class="item active-sub">Утвержденные рукописи</a>
         <a href="113.php" class="item">Отзывы</a>
        <!-- Left banner -->
      <?php include("inc_leftbottom.htm"); ?>
        <!-- Left banner end -->            
		</div>
    </div>
    
    <!-- COLUMN #1 -->
    <div class="columnServicesProducts">
      <h2>Утвержденные рукописи</h2>
		<div id="navigationTreeContainer">
            <a href="index.htm" class="prev">Home</a>&nbsp;&nbsp;\&nbsp;&nbsp;
            <a href="editing-services.htm" class="prev">Качество Энаго</a>&nbsp;&nbsp;\&nbsp;&nbsp;
            <a href="accepted-papers.php" class="current">Утвержденные рукописи</a>
		</div>
	  <div class="columnText">
      
    
<?php

include('conn.php');
$Country = "English";

$SubA = "SELECT * from accepted_papers WHERE SA1 = 'Medical/Clinical Sciences' and Can_Publish_Accepted__Papers=\"Yes\" ";
$SubB = "SELECT * from accepted_papers WHERE SA1 = 'Physical Sciences and Engineering' and Can_Publish_Accepted__Papers=\"Yes\" "; 
$SubC = "SELECT * from accepted_papers WHERE SA1 = 'Life Sciences' and Can_Publish_Accepted__Papers=\"Yes\" "; 
$SubD = "SELECT * from accepted_papers WHERE (SA1 = 'The Arts, Humanities, and Social Sciences' OR  SA1 = 'Economics and Business') and Can_Publish_Accepted__Papers=\"Yes\" "; 


$numSubA=mysql_query($SubA);
$numSubB=mysql_query($SubB);
$numSubC=mysql_query($SubC);
$numSubD=mysql_query($SubD);

$numrowsSubA=mysql_num_rows($numSubA);
$numrowsSubB=mysql_num_rows($numSubB);
$numrowsSubC=mysql_num_rows($numSubC);
$numrowsSubD=mysql_num_rows($numSubD);

if($numrowsSubA==0)
{
	echo "<H4>Results</H4>";
	echo "<P>Sorry, no records found</P>";
	
}
if (empty($s))
{
	$s=0;
}

//$MyQuery.= " limit $s,$limit";
//$MyQuery1.= " limit $s,$limit";


$Subarea1 = mysql_query($SubA) or die("Couldn't execute query");
$Subarea2 = mysql_query($SubB) or die("Couldn't execute query");
$Subarea3 = mysql_query($SubC) or die("Couldn't execute query");
$Subarea4 = mysql_query($SubD) or die("Couldn't execute query");

$spannum = 1;

$rows = 5; // number of rows to display in one table
//$maxpages = ceil($numrowsSubA/$rows);
$maxpages = 11;

?>
<a id="subjectarea-a" name="subjectarea-a"></a>
<h2 class="h2-sub1">Медицинские науки</h2>
		<p class="mart10"></p>
<table id="theTable" class="paperlist sortable-onload-3-reverse rowstyle-alt no-arrow colstyle-alt paginate-<?php echo $rows ?> max-pages-<?php echo $maxpages ?> paginationcallback-callbackTest-calculateTotalRating sortcompletecallback-callbackTest-calculateTotalRating" style="table-layout:fixed;" border="0" cellpadding="0" cellspacing="0">
    <colgroup span="5" width="950px">
        	<col width="200px" />
        	<col width="220px" />
			<col width="100px" />
			<col width="280px" />
			<col width="150px" />
  			  </colgroup>
   <thead>
	<tr>
	 <th style="-moz-user-select: none;" class="sortable-text forwardSort fd-column-0"><a title="Sort on “Publisher”" href="#">Publisher</a></th>
	  <th style="-moz-user-select: none;" class="sortable-text forwardSort fd-column-1"><a title="Sort on “Journal Details”" href="#">Journal Details</a></th>
	  <th style="-moz-user-select: none;" class="sortable-numeric reverseSort fd-column-2"><a title="Sort on “I.F.”" href="#">Impact Factor</a></th>
	  <th style="-moz-user-select: none;" class="sortable-text forwardSort fd-column-3"><a title="Sort on “Paper Title”" href="#">Paper Title</a></th>
	  <th style="-moz-user-select: none;" class="sortable-text forwardSort fd-column-4"><a title="Sort on “Author”" href="#">Author</a></th>
	</tr>
  </thead>
  <tbody>


<?php

while ($row= mysql_fetch_array($Subarea1))
	{
			//if author name=yes
			$Publisher_Name = $row["Publisher_Name"]; 
			$Journal_Details = $row["Journal_Details"];
			$Impact_Factor =  $row["Impact_Factor"];
			if ($Impact_Factor == 0) 
	{
		$Impact_Factor = "-";
		};
			$Revised_Paper_Title = $row["Revised_Paper_Title"];
			$Article_Link = $row["Article_Link"];
			$Permission_to_Publish_Testimonial = $row["Permission_to_Publish_Testimonial"];
		
		if ($Country == $row["Country"])
		{$First_Name =  $row["FirstName_R"];
			$Last_Name = $row["LastName_R"];
			
			} else {
				$First_Name =  $row["FirstName_EN"];
			$Last_Name = $row["LastName_EN"];
			
				}
		
		$Testimonial = $row["Testimonial_".$Country];		
			
			if($Testimonial == "" || $Permission_to_Publish_Testimonial == "No")
			{
				$ContainerTestimonial = "";
			}
			else
			{
				$ContainerTestimonial = "<a href=\"#\" onmouseover=\"showdes(".$spannum.");\" onmouseout=\"hidedes(".$spannum.");\"><img src=\"images/testimonials/icon_testimonials.png\" style=\"cursor:pointer; border:none;\"   ></a> <span id=".$spannum." class=\"boxcallout\" style=\"visibility:hidden; display:none;\">".$Testimonial."</span></td></tr>";
			}
			
			
		echo "<tr class=\"\">
		  <td style=\"word-wrap:break-word;\">".$Publisher_Name."</td>
		  <td style=\"word-wrap:break-word;\">".$Journal_Details."</td>
		  <td style=\"word-wrap:break-word;\">".$Impact_Factor."</td>
		  <td style=\"word-wrap:break-word;\"><a href=".$Article_Link." target=\"_blank\">".$Revised_Paper_Title."</a></td>
		  <td style=\"word-wrap:break-word;\">".$Last_Name." ".$First_Name." ".$ContainerTestimonial."</td></tr> ";

			$spannum++;
}


$rows = 5; // number of rows to display in one table
//$maxpages = ceil($numrowsSubA/$rows);
$maxpages = 11;

?></tbody>
</table>

<a id="subjectarea-e" name="subjectarea-e"></a>
<h2 class="h2-sub3">Наука о Жизни</h2>
		<p class="mart10"></p>
<table id="theTable3" class="paperlist sortable-onload-3-reverse rowstyle-alt no-arrow colstyle-alt paginate-<?php echo $rows ?> max-pages-<?php echo $maxpages ?> paginationcallback-callbackTest-calculateTotalRating sortcompletecallback-callbackTest-calculateTotalRating" style="table-layout:fixed;" border="0" cellpadding="0" cellspacing="0">
    <colgroup span="5" width="950px">
        	<col width="200px" />
        	<col width="220px" />
			<col width="100px" />
			<col width="280px" />
			<col width="150px" />
  			  </colgroup>
   <thead>
	<tr>
	   <th style="-moz-user-select: none;" class="sortable-text forwardSort fd-column-0"><a title="Sort on “Publisher”" href="#">Publisher</a></th>
	  <th style="-moz-user-select: none;" class="sortable-text forwardSort fd-column-1"><a title="Sort on “Journal Details”" href="#">Journal Details</a></th>
	  <th style="-moz-user-select: none;" class="sortable-numeric reverseSort fd-column-2"><a title="Sort on “I.F.”" href="#">Impact Factor</a></th>
	  <th style="-moz-user-select: none;" class="sortable-text forwardSort fd-column-3"><a title="Sort on “Paper Title”" href="#">Paper Title</a></th>
	  <th style="-moz-user-select: none;" class="sortable-text forwardSort fd-column-4"><a title="Sort on “Author”" href="#">Author</a></th>
	</tr>
  </thead>
  <tbody>
  
<?php 
	while ($row= mysql_fetch_array($Subarea3))
{
	//if author name=yes
	$Publisher_Name = $row["Publisher_Name"]; 
	$Journal_Details = $row["Journal_Details"];
	$Impact_Factor =  $row["Impact_Factor"];
	if ($Impact_Factor == 0) 
	{
		$Impact_Factor = "-";
		};
	$Revised_Paper_Title = $row["Revised_Paper_Title"];
	$Article_Link = $row["Article_Link"];
	$Permission_to_Publish_Testimonial = $row["Permission_to_Publish_Testimonial"];
	
	if ($Country == $row["Country"])
	{$First_Name =  $row["FirstName_R"];
		$Last_Name = $row["LastName_R"];
		} else {
			$First_Name =  $row["FirstName_EN"];
		$Last_Name = $row["LastName_EN"];
	
			}
			
		$Testimonial = $row["Testimonial_".$Country];
		
		if($Testimonial == "" || $Permission_to_Publish_Testimonial == "No")
		{
			$ContainerTestimonial = "";
		}
		else
		{
			$ContainerTestimonial = "<a href=\"#\" onmouseover=\"showdes(".$spannum.");\" onmouseout=\"hidedes(".$spannum.");\"><img src=\"images/testimonials/icon_testimonials.png\" style=\"cursor:pointer; border:none;\"   ></a> <span id=".$spannum." class=\"boxcallout\" style=\"visibility:hidden; display:none;\">".$Testimonial."</span></td></tr>";
		}
	

echo "<tr class=\"\">
		  <td style=\"word-wrap:break-word;\">".$Publisher_Name."</td>
		  <td style=\"word-wrap:break-word;\">".$Journal_Details."</td>
		  <td style=\"word-wrap:break-word;\">".$Impact_Factor."</td>
		  <td style=\"word-wrap:break-word;\"><a href=".$Article_Link." target=\"_blank\">".$Revised_Paper_Title."</a></td>
		  <td style=\"word-wrap:break-word;\">".$Last_Name." ".$First_Name." ".$ContainerTestimonial."</td></tr> ";

	$spannum++;
}

?></tbody>
</table>

<?php 


$rows = 5; // number of rows to display in one table
//$maxpages = ceil($numrowsSubA/$rows);
$maxpages = 11;

?>

<a id="subjectarea-b" name="subjectarea-b"></a>
<h2 class="h2-sub2">Естественные науки и Инжиниринг</h2>
		<p class="mart10"></p>
<table id="theTable2" class="paperlist sortable-onload-3-reverse rowstyle-alt no-arrow colstyle-alt paginate-<?php echo $rows ?> max-pages-<?php echo $maxpages ?> paginationcallback-callbackTest-calculateTotalRating sortcompletecallback-callbackTest-calculateTotalRating" style="table-layout:fixed;" border="0" cellpadding="0" cellspacing="0">
   <colgroup span="5" width="950px">
        	<col width="200px" />
        	<col width="220px" />
			<col width="100px" />
			<col width="280px" />
			<col width="150px" />
  			  </colgroup>
   <thead>
	<tr>
	   <th style="-moz-user-select: none;" class="sortable-text forwardSort fd-column-0"><a title="Sort on “Publisher”" href="#">Publisher</a></th>
	  <th style="-moz-user-select: none;" class="sortable-text forwardSort fd-column-1"><a title="Sort on “Journal Details”" href="#">Journal Details</a></th>
	  <th style="-moz-user-select: none;" class="sortable-numeric reverseSort fd-column-2"><a title="Sort on “I.F.”" href="#">Impact Factor</a></th>
	  <th style="-moz-user-select: none;" class="sortable-text forwardSort fd-column-3"><a title="Sort on “Paper Title”" href="#">Paper Title</a></th>
	  <th style="-moz-user-select: none;" class="sortable-text forwardSort fd-column-4"><a title="Sort on “Author”" href="#">Author</a></th>
	</tr>
  </thead>
  <tbody>
  
<?php
while ($row= mysql_fetch_array($Subarea2))
{
	//if author name=yes
	$Publisher_Name = $row["Publisher_Name"]; 
	$Journal_Details = $row["Journal_Details"];
	$Impact_Factor =  $row["Impact_Factor"];
	if ($Impact_Factor == 0) 
	{
		$Impact_Factor = "-";
		};
	$Revised_Paper_Title = $row["Revised_Paper_Title"];
	$Article_Link = $row["Article_Link"];
	$Permission_to_Publish_Testimonial = $row["Permission_to_Publish_Testimonial"];
	
	if ($Country == $row["Country"])
	{$First_Name =  $row["FirstName_R"];
		$Last_Name = $row["LastName_R"];
		} else {
			$First_Name =  $row["FirstName_EN"];
		$Last_Name = $row["LastName_EN"];
			}

	$Testimonial = $row["Testimonial_".$Country];
	
	if($Testimonial == "" || $Permission_to_Publish_Testimonial == "No")
	{
		$ContainerTestimonial = "";
	}
	else
	{
		$ContainerTestimonial = "<a href=\"#\" onmouseover=\"showdes(".$spannum.");\" onmouseout=\"hidedes(".$spannum.");\"><img src=\"images/testimonials/icon_testimonials.png\" style=\"cursor:pointer; border:none;\"   ></a> <span id=".$spannum." class=\"boxcallout\" style=\"visibility:hidden; display:none;\">".$Testimonial."</span></td></tr>";
	}
	

echo "<tr class=\"\">
		  <td style=\"word-wrap:break-word;\">".$Publisher_Name."</td>
		  <td style=\"word-wrap:break-word;\">".$Journal_Details."</td>
		  <td style=\"word-wrap:break-word;\">".$Impact_Factor."</td>
		  <td style=\"word-wrap:break-word;\"><a href=".$Article_Link." target=\"_blank\">".$Revised_Paper_Title."</a></td>
		  <td style=\"word-wrap:break-word;\">".$Last_Name." ".$First_Name." ".$ContainerTestimonial."</td></tr> ";

	$spannum++;
}


?></tbody>
</table>
<?php

$rows = 5; // number of rows to display in one table
//$maxpages = ceil($numrowsSubA/$rows);
$maxpages = 11;


?>
<a id="subjectarea-cd" name="subjectarea-cd"></a>
<!-- Economics and Business + The Arts, Humanities, and Social Sciences -->
<h2 class="h2-sub4">Менеджмент,  Коммерческое дело, Юридическое дело и родственные темы</h2>
		<p class="mart10"></p>
<table id="theTable4" class="paperlist sortable-onload-3-reverse rowstyle-alt no-arrow colstyle-alt paginate-<?php echo $rows ?> max-pages-<?php echo $maxpages ?> paginationcallback-callbackTest-calculateTotalRating sortcompletecallback-callbackTest-calculateTotalRating" style="table-layout:fixed;" border="0" cellpadding="0" cellspacing="0">
    <colgroup span="5" width="950px">
        	<col width="200px" />
        	<col width="220px" />
			<col width="100px" />
			<col width="280px" />
			<col width="150px" />
  			  </colgroup>
    <thead>
	<tr>
	   <th style="-moz-user-select: none;" class="sortable-text forwardSort fd-column-0"><a title="Sort on “Publisher”" href="#">Publisher</a></th>
	  <th style="-moz-user-select: none;" class="sortable-text forwardSort fd-column-1"><a title="Sort on “Journal Details”" href="#">Journal Details</a></th>
	  <th style="-moz-user-select: none;" class="sortable-numeric reverseSort fd-column-2"><a title="Sort on “I.F.”" href="#">Impact Factor</a></th>
	  <th style="-moz-user-select: none;" class="sortable-text forwardSort fd-column-3"><a title="Sort on “Paper Title”" href="#">Paper Title</a></th>
	  <th style="-moz-user-select: none;" class="sortable-text forwardSort fd-column-4"><a title="Sort on “Author”" href="#">Author</a></th>
	</tr>
  </thead>
  <tbody>
  
<?php
while ($row= mysql_fetch_array($Subarea4))
{
	//if author name=yes
	$Publisher_Name = $row["Publisher_Name"]; 
	$Journal_Details = $row["Journal_Details"];
	$Impact_Factor =  $row["Impact_Factor"];
	if ($Impact_Factor == 0) 
	{
		$Impact_Factor = "-";
		};
	$Revised_Paper_Title = $row["Revised_Paper_Title"];
	$Article_Link = $row["Article_Link"];
	$Permission_to_Publish_Testimonial = $row["Permission_to_Publish_Testimonial"];

	if ($Country == $row["Country"])
	{
		$First_Name =  $row["FirstName_R"];
		$Last_Name = $row["LastName_R"];
		} else {
			$First_Name =  $row["FirstName_EN"];
		$Last_Name = $row["LastName_EN"];
			}

	$Testimonial = $row["Testimonial_".$Country];
	
	if($Testimonial == "" || $Permission_to_Publish_Testimonial == "No")
	{
		$ContainerTestimonial = "";
	}
	else
	{
		$ContainerTestimonial = "<a href=\"#\" onmouseover=\"showdes(".$spannum.");\" onmouseout=\"hidedes(".$spannum.");\"><img src=\"images/testimonials/icon_testimonials.png\" style=\"cursor:pointer; border:none;\"   ></a> <span id=".$spannum." class=\"boxcallout\" style=\"visibility:hidden; display:none;\">".$Testimonial."</span></td></tr>";
	}

	

echo "<tr class=\"\">
		  <td style=\"word-wrap:break-word;\">".$Publisher_Name."</td>
		  <td style=\"word-wrap:break-word;\">".$Journal_Details."</td>
		  <td style=\"word-wrap:break-word;\">".$Impact_Factor."</td>
		  <td style=\"word-wrap:break-word;\"><a href=".$Article_Link." target=\"_blank\">".$Revised_Paper_Title."</a></td>
		  <td style=\"word-wrap:break-word;\">".$Last_Name." ".$First_Name." ".$ContainerTestimonial."</td></tr> ";
	
	$spannum++;
}



?></tbody>
</table>
<script type="text/javascript" src="js/tablesort.js"></script>    

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
