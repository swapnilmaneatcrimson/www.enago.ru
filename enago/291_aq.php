<?
//END OF VOLUME CODING
ini_set("mbstring.internal_encoding","shift_jis");

$mainservice = $service;

include "common.php";
if($client=="new")
	{
	$link="⇒ 詳細なお見積もり：：新規のお客様 (http://www.enago.jp/23.htm)";
	$linkhtml="<a href=http://www.enago.jp/23.htm target=_blank><img src=img/mailimages/orderbutton.gif border=\"0\" ></a>";
	$wrdcnt="ご注意ください！：
	実際の校正作業の開始時間によって、上記の作業時間が変更されます。
	正確な納品時刻をお知りになりたい方は、<a href=http://www.enago.jp/23.htm>お見積もり・ご依頼フォーム</a>をご記入・ご送信ください。";
	$wrdcnthtml="<div><strong class=fontred>ご注意ください！：</strong>
		 <br />
		 原稿をお預かりした時点での校正者の予約状況によって、上記作業時間は変動します。<br />正確な納品時刻をお知りになりたい方は、<a href=http://www.enago.jp/23.htm target=_blank>お見積もり・ご注文フォーム</a>をご記入・送信ください。</div>";
		
	}
else 
	{
	$link="⇒ 詳細なお見積もり：：既存のお客様 (http://www.enago.jp/23.htm)";
	$linkhtml="<a href=http://www.enago.jp/23.htm target=_blank><img src=img/mailimages/orderbutton.gif border=\"0\" ></a>";
	$wrdcnt="ご注意ください！：
	原稿をお預かりした時点での校正者の予約状況によって、上記作業時間は変動します。
	正確な納品時刻をお知りになりたい方は、お見積もり・ご注文フォーム(http://www.enago.jp/23.htm)をご記入・送信ください。";
	$wrdcnthtml="<div><strong class=fontred>ご注意ください！：</strong>
		 <br />
		 原稿をお預かりした時点での校正者の予約状況によって、上記作業時間は変動します。<br />正確な納品時刻をお知りになりたい方は、<a href=http://www.enago.jp/23.htm target=_blank>お見積もり・ご注文フォーム</a>をご記入・送信ください。</div>";
	}
$ip=@$REMOTE_ADDR; 
$domain = GetHostByName($ip); 
putenv('TZ=Asia/Tokyo');
$date=date('d F Y '); //Output: Wednesday, 07 September 2005 02:22 AM
$nowDay=date("m/d/Y");
$nowHour = getdate(mktime(date("H")));
$nowMin = date("i");
$nowSec = date("s");
$nowClock = $nowHour["hours"].":".$nowMin;
//****************************************************************************

function getBrowser()
{
    $u_agent = $_SERVER['HTTP_USER_AGENT'];
    $bname = 'Unknown';
    $platform = 'Unknown';
    $version= "";

    //First get the platform?
    if (preg_match('/linux/i', $u_agent)) {
        $platform = 'linux';
    }
    elseif (preg_match('/macintosh|mac os x/i', $u_agent)) {
        $platform = 'mac';
    }
    elseif (preg_match('/windows|win32/i', $u_agent)) {
        $platform = 'windows';
    }
   
    // Next get the name of the useragent yes seperately and for good reason
    if(preg_match('/MSIE/i',$u_agent) && !preg_match('/Opera/i',$u_agent))
    {
        $bname = 'Internet Explorer';
        $ub = "MSIE";
    }
	elseif(preg_match('/Trident\/7.0; rv:11.0/',$u_agent))
    {
        $bname = 'Internet Explorer';
    }
	
    elseif(preg_match('/Firefox/i',$u_agent))
    {
        $bname = 'Mozilla Firefox';
        $ub = "Firefox";
    }
    elseif(preg_match('/Chrome/i',$u_agent))
    {
        $bname = 'Google Chrome';
        $ub = "Chrome";
    }
    elseif(preg_match('/Safari/i',$u_agent))
    {
        $bname = 'Apple Safari';
        $ub = "Safari";
    }
    elseif(preg_match('/Opera/i',$u_agent))
    {
        $bname = 'Opera';
        $ub = "Opera";
    }
    elseif(preg_match('/Netscape/i',$u_agent))
    {
        $bname = 'Netscape';
        $ub = "Netscape";
    }
   
    // finally get the correct version number
    $known = array('Version', $ub, 'other');
    $pattern = '#(?<browser>' . join('|', $known) .
    ')[/ ]+(?<version>[0-9.|a-zA-Z.]*)#';
    if (!preg_match_all($pattern, $u_agent, $matches)) {
        // we have no matching number just continue
    }
   
    // see how many we have
    $i = count($matches['browser']);
    if ($i != 1) {
        //we will have two since we are not using 'other' argument yet
        //see if version is before or after the name
        if (strripos($u_agent,"Version") < strripos($u_agent,$ub)){
            $version= $matches['version'][0];
        }
        else {
            $version= $matches['version'][1];
        }
    }
    else {
        $version= $matches['version'][0];
    }
   
    // check if we have a number
    if ($version==null || $version=="") {$version="11";}
   
    return array(
        'userAgent' => $u_agent,
        'name'      => $bname,
        'version'   => $version,
        'platform'  => $platform,
        'pattern'    => $pattern
    );
}

// now try it
$ua=getBrowser();

$browser = $ua['name'];
$version = $ua['version'];
$platform = $ua['userAgent'];

//****************************************************************************

if($wordcount < 1)
	{
	$kanjimessage="全角文字（例： ４０００） を使ってフォームに記入したため、正しいお見積もりの計算ができませんでした。ご依頼フォームに戻り、半角文字（例：4000）で再記入してください。<br /><br />";
	$kanjimessage_auto="全角文字（例： ４０００） を使ってフォームに記入したため、正しいお見積もりの計算ができませんでした。ご依頼フォームに戻り、半角文字（例：4000）で再記入してください。";
	}
else {

//ratecard

if($wordcount>1000)
{
if ( $delpriority == "economy")
{
$ratecard="
■ エコノミープランをお選びのお客様には、
原稿評価カルテを差し上げておりません。
(http://www.enago.jp/1002.htm)
原稿評価カルテは、エコノミーを除く
すべてのプランでご提供しています。
";
$ratecardhtml="<table width=100% cellpadding=2 >
<tr>
<td width=43><img src=img/mailimages/icon4.gif alt=></td>
<td style=color:#990000; padding-left:10px;>エコノミープランをお選びのお客様には、
<a href=http://www.enago.jp/1002.htm target=_blank>原稿評価カルテ</a>を差し上げておりません。
原稿評価カルテは、エコノミーを除く
すべてのプランで無料で差し上げています。</td>
</tr>
</table>";
}
else
{


if ($service=="advance")
		{
$ratecard="
■ このサービスをご利用のお客様にはカバーレターとアドバンスレポートを無料でご提供いたします！
■ 原稿評価カルテも無料で差し上げます。サンプルはこちら(http://www.enago.jp/ratecard/h1.htm)
をご覧ください。これはお客様だけにお見せするための弊社の隠しリンクとなっております。
";
$ratecardhtml="<table width=100%  cellpadding=2>
<tr>
<td width=43><img src=img/mailimages/icon4.gif alt=></td>
<td style=color:#990000; padding-left:10px;>このサービスをご利用のお客様にはカバーレターとアドバンスレポートを無料でご提供いたします！<br />
原稿評価カルテも無料で差し上げます。サンプルは<a href=http://www.enago.jp/ratecard/h1.htm target=_blank>こちら</a><br />
をご覧ください。これはお客様だけにお見せするための弊社の隠しリンクとなっております。</td>
</tr>
</table>";
		
		}
	else
		{
$ratecard="
■ 原稿評価カルテのサンプルをご覧ください。これはお客様だけにお見せするための弊社の隠しリンクとなっております。
(http://www.enago.jp/ratecard/h1.htm)
";
$ratecardhtml="<table width=100%  cellpadding=2>
<tr>
<td width=43><img src=img/mailimages/icon4.gif alt=></td>
<td style=color:#990000; padding-left:10px;>原稿評価カルテの<a href=http://www.enago.jp/ratecard/h1.htm target=_blank>サンプル</a>をご覧ください。これはお客様だけにお見せするための弊社の隠しリンクとなっております。<br />
</td>
</tr>
</table>";
	
		}
	

}
}

//****************************************************************************

if ($service=="advance")
{
	if ($delpriority_advance == "standard")
		{
			include "295_standard.php";
			$jptextpriority="スタンダード（Standard）";
		}
	else if ($delpriority_advance == "express")
	{
			include "296_express.php";
			$jptextpriority="エクスプレス（Express）";
	}
	else if ($delpriority_advance == "superexpress")
	{
			include "297_superexpress.php";
			$jptextpriority="スーパーエクスプレス（Super Express）";
	}
	else
	{
			include "298_lastminute.php";
			$jptextpriority="駆け込み乗車（Last Minute）";
	}
}

if ($service=="advance")
{
$delpriority=$delpriority_advance;
$jpservice="アドバンス英文校正サービス";

$coverlettermsg="<td class=\"tblcell5\">カバーレター <img src=\"img/new-services/coverletter.png\" class=\"vabsmiddle\" alt=\"英文校正・英文校閲・英文論文校正\" width=\"72\" height=\"69\" /></td>
    <td class=\"tblcell6\"><strong class=\"txtBrown\">付いています。</strong><br />
担当校正者がカバーレターを無料で執筆代行します。</td>";
$coverlettermsg_auto="【カバーレター】
付いています。担当校正者がカバーレターを無料で執筆代行します。";
}
else
{
$jpservice="英文校正サービス";
	
}


//including the file according to the priority-common and normal only

if ($delpriority == "standard")
{
include "295_standard.php";
$mrcautomsg="付きます:原稿評価カルテのサンプルをご覧ください。
サンプルのURL:http://www.enago.jp/1002.htm";
$mrchtmlmsg="<strong class=txtBrown>付きます</strong><br />原稿評価カルテの<a href=\"1002.htm\" target=\"blank\" class=\"contentlink\">サンプル</a>をご覧ください。";
$jptextpriority ="スタンダード(Standard)";
$tatfinalexpressplain="";
$tatfinalexpress="";
}
elseif ($delpriority == "economy")
{
include "298_economy.php";
$jptextpriority="エコノミー(Economy)";
$mrcautomsg="なし:エコノミープランをお選びのお客様には、
原稿評価カルテを差し上げておりません。
原稿評価カルテは、エコノミーを除くすべてのプランでは無料で差し上げています。";
$mrchtmlmsg="<strong class=txtBrown>なし</strong><br />エコノミープランをお選びのお客様には、原稿評価カルテを差し上げておりません。原稿評価カルテは、エコノミーを除くすべてのプランでは無料で差し上げています。";
}
elseif ($delpriority == "express") //No MI service
{
include "296_express.php";
$jptextpriority="エクスプレス(Express)";
$tatfinalexpressplain="";
$jpsetext="$tatfinalexpressplain";
$notes="\n
☆★ご注意ください☆★
";
$noteshtml="<img src=img/mailimages/headingtab2.gif alt=>";

$jpsetexthtml="
$tatfinalexpressplainhtml
<img src=\"img/common/squere/6x6enago.gif\" alt=\"\" /> 今すぐご依頼されるお客様は、下のバナー「詳細な見積もりを希望します / 依頼を確定します」よりご連絡ください。<br />
";

$mrcautomsg="付きます:原稿評価カルテのサンプルをご覧ください。
サンプルのURL:http://www.enago.jp/1002.htm";
$mrchtmlmsg="<strong class=txtBrown>付きます</strong><br />原稿評価カルテの<a href=\"1002.htm\" target=\"blank\" class=\"contentlink\">サンプル</a>をご覧ください。";
}
elseif($delpriority == "superexpress")
{
include "297_superexpress.php";
$jptextpriority="スーパーエクスプレス(Super Express)";
$tatfinalexpressplain="";
$jpsetext="$tatfinalexpressplain";
$notes="\n
☆★ご注意ください☆★
";
$noteshtml="<img src=img/mailimages/headingtab2.gif alt=>";

$jpsetexthtml="
$tatfinalexpressplainhtml
<img src=\"img/common/squere/6x6enago.gif\" alt=\"\" /> 今すぐご依頼されるお客様は、下のバナー「詳細な見積もりを希望します / 依頼を確定します」よりご連絡ください。<br />
";

$mrcautomsg="付きます:原稿評価カルテのサンプルをご覧ください。
サンプルのURL:http://www.enago.jp/1002.htm";
$mrchtmlmsg="<strong class=txtBrown>付きます</strong><br />原稿評価カルテの<a href=\"1002.htm\" target=\"blank\" class=\"contentlink\">サンプル</a>をご覧ください。";

}
else
{
	include "298_lastminute.php";
	$mrcautomsg="付きます:原稿評価カルテのサンプルをご覧ください。
	サンプルのURL:http://www.enago.jp/1002.htm";
	$mrchtmlmsg="<strong class=txtBrown>付きます</strong><br />原稿評価カルテの<a href=\"1002.htm\" target=\"blank\" class=\"contentlink\">サンプル</a>をご覧ください。";
	$jptextpriority="駆け込み乗車プラン（Last Minute）";
	$tatfinalexpressplain="";
	$jpsetext="$tatfinalexpressplain";
	$notes="\n
	☆★ご注意ください☆★";
	$noteshtml="<img src=img/mailimages/headingtab2.gif alt=>";
	
	$jpsetexthtml="$tatfinalexpressplainhtml
	<img src=\"img/common/squere/6x6enago.gif\" alt=\"\" /> 今すぐご依頼されるお客様は、下のバナー「詳細な見積もりを希望します / 依頼を確定します」よりご連絡ください。<br />
	";												
}
//gross amount calculation-STEP1-subject identification-common
if ($subjectarea == "medicine")
{
$rate=$ratebiosciences;
$jpsubjectarea="医学・薬学 (Medicine)";
$advrate=$advratebiosciences;}
elseif ($subjectarea == "biosciences")
{
$rate=$ratebiosciences;
$jpsubjectarea="生物学・農学・環境科学など (Biosciences)";
$advrate=$advratebiosciences;}
elseif ($subjectarea == "physics")
{
$rate=$ratephysics;
$jpsubjectarea="物理学・化学・工学・情報科学など (Physical Sciences and Engineering)";
$advrate=$advratephysics;
}
elseif ($subjectarea == "art")
{
$rate=$rateart;
$jpsubjectarea="人文/社会科学・芸術など (The Arts, Humanities, and Social Sciences)";
$advrate=$advrateart;
}
else
{
$rate=$rateeco;
$jpsubjectarea="経済学・経営学・ビジネスなど (Economics and Business)";
$advrate=$advrateeco;
}



//gross amount calculation-STEP 2- rate calculation-common
$grossamountfloor=$wordcount*$rate; //without round down
$advgrossamountfloor=$wordcount*$advrate;

//round down
$grossamount=floor($grossamountfloor);
$advgrossamount=floor($advgrossamountfloor);

//discount calculation

if($client=="new")

{
	////////////////////////////////////////* Added by Anand (Advance Manuscript Insurance @0Yen/Word for new client)*////////////////////////////////////////
	$ratemifadvance = 0;
	
	if ($mainservice=="advance")
	{ 
			if($mifadvance=="Yes")
			{ 
				$mifamount= $wordcount*$ratemifadvance;
				$netamountfin=$netamountfin+$mifamount;
				
				$mifhtmlbreakup="
				<td class=\"cell1 cell1bg\">もっとあんしん保証追加料金</td>
				<td class=cell2>".number_format($mifamount)."円 <span class=\"reliable green\"><i>も</i><i>っ</i><i>と</i>あんしん</span></td>";
				$mifautobreakup="もっとあんしん保証追加料金：".number_format($mifamount)."円";
				
				$mifyesnofree="<strong class=txtBrown>無料で付きます</strong><br />
				アドバンス英文校正には無料で<a href=\"after-sales-service.htm\" target=\"blank\" class=\"contentlink\">あんしん保証</a>が付いています。1年間の保証期間中は、修正いただいた原稿を何度でも再校正いたします。<strong>ただし、一部ご利用いただけない場合がございます。詳しくは<a href=\"after-sales-service.htm\" target=\"blank\" class=\"contentlink\">あんしん保証</a>のページをご覧ください。</strong>";
			
			$mifyesnofree_auto="【あんしん保証】 
			無料で付きます:アドバンス英文校正には無料であんしん保証が付いています。1年間の保証期間中は、修正いただいた原稿を何度でも再校正いたします。ただし、一部ご利用いただけない場合がございます。詳しくはあんしん保証のページをご覧ください。URL:http://www.enago.jp/after-sales-service.htm";
				
				$mifyesnopaid="<strong class=txtBrown>付きます</strong><br />投稿後、査読者コメントを確認しながらの再校正や、著者から査読者への回答文の校正など、幅広く再投稿をサポートします。詳しくは<a href=\"revision-support.htm\" target=\"blank\" class=\"contentlink\">もっとあんしん保証</a>をご覧ください。";
			
			$mifyesnopaid_auto="【もっとあんしん保証】 
			付きます:投稿後、査読者コメントを確認しながらの再校正や、著者から査読者への回答文の校正など、幅広く再投稿をサポートします。詳しくはもっとあんしん保証をご覧ください。URL:http://www.enago.jp/revision-support.htm";
			
				$miffreehtmlmsg="<td class=\"cell1 cell1bg\">あんしん保証</td>
				  <td class=cell2>希望します。</td>";
				  $miffreeautomsg="あんしん保証：希望します。";
				
				$mifpaidhtmlmsg="<td class=\"cell1last cell1bg\">もっとあんしん保証</td>
				  <td class=cell2last>希望します。</td>";
				  $mifpaidautomsg="もっとあんしん保証：希望します。";
				}
			else // IF MI NO OPTION SELECTED
			{
				$mifyesnofree="<strong class=txtBrown>無料で付きます</strong><br />
				アドバンス英文校正には無料であんしん保証が付いています。1年間の保証期間中は、修正いただいた原稿を何度でも再校正いたします。<strong>ただし、一部ご利用いただけない場合がございます。詳しくは<a href=\"after-sales-service.htm\" target=\"blank\" class=\"contentlink\">あんしん保証</a>のページをご覧ください。</strong>";
		
		$mifyesnofree_auto="【あんしん保証】 
		無料で付きます。:アドバンス英文校正には無料であんしん保証が付いています。1年間の保証期間中は、修正いただいた原稿を何度でも再校正いたします。ただし、一部ご利用いただけない場合がございます。詳しくはあんしん保証のページをご覧ください。URL:http://www.enago.jp/after-sales-service.htm";
			
			$mifyesnopaid="<strong class=txtBrown>お選びいただきませんでした</strong><br />上記の合計金額に1語あたり4円の追加料金で、投稿後の査読コメント対応サービスまでカバーする保証を付けることができます。詳しくは<a href=\"revision-support.htm\" target=\"blank\" class=\"contentlink\">もっとあんしん保証</a>のページをご覧ください。";
		
		$mifyesnopaid_auto="【もっとあんしん保証】
		お選びいただきませんでした。:上記の合計金額に1語あたり4円の追加料金で、投稿後の査読コメント対応サービスまでカバーする保証を付けることができます。詳しくはもっとあんしん保証のページをご覧ください。URL:http://www.enago.jp/revision-support.htm";
		
			$miffreehtmlmsg="<td class=\"cell1 cell1bg\">あんしん保証</td>
			  <td class=cell2>希望します。</td>";
			  $miffreeautomsg="あんしん保証：希望します。";
			
			$mifpaidhtmlmsg="<td class=\"cell1last cell1bg\">もっとあんしん保証</td>
			  <td class=cell2last>希望しません。</td>";
			  $mifpaidautomsg="もっとあんしん保証：希望しません。";
			}
	
	}

	////////////////////////////////////////* Added by Anand (Normal Manuscript Insurance @2Yen/Word)*////////////////////////////////////////

if ($mainservice=="normal")
{
	if($mifnormal=="Yes")
	{
	$mifamount= $wordcount*$ratemifnormal;
	$netamount=$netamount+$mifamount;
	
	$mifhtmlbreakup="
    <td class=\"cell1 cell1bg\">あんしん保証追加料金</td>
    <td class=cell2>".number_format($mifamount)."円 <span class=\"reliable\">あんしん</span></td>";
	$mifautobreakup="あんしん保証追加料金：".number_format($mifamount)."円";
	
	$mifyesnofree="<strong class=txtBrown>付きます</strong><br />	納品後120日間は、修正いただいた原稿を何度でも再校正いたします。ただし、一部ご利用いただけない場合がございます。詳しくは<a href=\"after-sales-service.htm\" target=\"blank\" class=\"contentlink\">あんしん保証</a>のページをご覧ください。";

$mifyesnofree_auto="【あんしん保証】 
付きます。:納品後120日間は、修正いただいた原稿を何度でも再校正いたします。ただし、一部ご利用いただけない場合がございます。詳しくはあんしん保証のページをご覧ください。URL:http://www.enago.jp/after-sales-service.htm";
	
	$mifyesnopaid="<strong class=txtBrown>ご利用になれません。</strong><br />
	もっとあんしん保証（査読対応保証）は、アドバンス英文校正をご利用のお客様限定のサービスとなります。詳しくは<a href=\"after-sales-service.htm\" target=\"blank\" class=\"contentlink\">あんしん保証</a>をご覧ください。";

$mifyesnopaid_auto="【もっとあんしん保証】 
ご利用になれません。:もっとあんしん保証（査読対応保証）は、アドバンス英文校正をご利用のお客様限定のサービスとなります。詳しくはあんしん保証をご覧ください。URL:http://www.enago.jp/after-sales-service.htm";


$miffreehtmlmsg="<td class=\"cell1 cell1bg\">あんしん保証</td>
      <td class=cell2>希望します。</td>";
	  $miffreeautomsg="あんしん保証：希望します。";
	  
	
	$mifpaidhtmlmsg="<td class=\"cell1last cell1bg\">もっとあんしん保証</td>
      <td class=cell2last>ご利用になれません。</td>";
	  $mifpaidautomsg="もっとあんしん保証：ご利用になれません。";
	}
	else // IF MI NO OPTION SELECTED
	{
		$mifyesnofree="<strong class=txtBrown>お選びいただきませんでした。</strong><br />
		1語あたり2円の追加料金であんしん保証（再校正保証）を付けることができますので、ご希望の方はご依頼時にお選びください。保証を付けると、納品後120日間は、修正いただいた原稿を何度でも再校正いたします。";

$mifyesnofree_auto="【あんしん保証】 
お選びいただきませんでした。:1語あたり2円の追加料金であんしん保証（再校正保証）を付けることができますので、ご希望の方はご依頼時にお選びください。保証を付けると、納品後120日間は、修正いただいた原稿を何度でも再校正いたします。";
	
	$mifyesnopaid="<strong class=txtBrown>ご利用になれません。</strong><br />
	もっとあんしん保証（査読対応保証）は、アドバンス英文校正をご利用のお客様限定のサービスとなります。詳しくは<a href=\"after-sales-service.htm\" target=\"blank\" class=\"contentlink\">あんしん保証</a>をご覧ください。";

$mifyesnopaid_auto="【もっとあんしん保証】 
ご利用になれません。:もっとあんしん保証（査読対応保証）は、アドバンス英文校正をご利用のお客様限定のサービスとなります。詳しくはあんしん保証をご覧ください。URL:http://www.enago.jp/after-sales-service.htm";

$miffreehtmlmsg="<td class=\"cell1 cell1bg\">あんしん保証</td>
      <td class=cell2>希望しません。</td>";
	  $miffreeautomsg="あんしん保証：希望しません。";
	  
	
	$mifpaidhtmlmsg="<td class=\"cell1last cell1bg\">もっとあんしん保証</td>
      <td class=cell2last>ご利用になれません。</td>";
	  $mifpaidautomsg="もっとあんしん保証：ご利用になれません。";
	}
}
	
	////////////////////////////////////////////////////////////////////////////////
	
	$newclientdiscount=0.15;
	
	//volume discount
		
	if ($wordcount>10000)
	{
			$volumedicount=0.20;
			
	}
	elseif($wordcount>=8001 && $wordcount <= 10000)
	{
		$volumedicount=0.15;
	}
	elseif($wordcount>=4000 && $wordcount <= 8000)
	{
		$volumedicount=0.10;
	}
	else
	{
		$volumedicount=0;
	}
	
	
	//
	echo "Vol ". $volumedicount. "\n";
	
	echo "New ". $newclientdiscount;
	
	
	if($volumedicount <= $newclientdiscount)
	{
		$ratenew = $newclientdiscount;
		$discounttext="<img src=\"img/common/transparent.gif\" width=\"11\" height=\"14\" alt=\"英文校正・英文校閲・英語論文校正\" class=\"topnewclient\">新規お客様割引";
				$discounttextauto="新規お客様割引";
	}
	else
	{
		$ratenew = $volumedicount;	
		$discounttext="<img src=\"img/common/transparent.gif\" width=\"11\" height=\"14\" alt=\"英文校正・英文校閲・英語論文校正\" class=\"topnewclient\">ボリューム割引";
$discounttextauto="ボリューム割引";
	}
	
	//
	
	
}
else // If Existing Client 
{
	
	////////////////////////////////////////* Added by Anand (Advance Manuscript Insurance @4Yen/Word)*////////////////////////////////////////
	$ratemifadvance = 4;
	
	if ($mainservice=="advance")
	{ 
			if($mifadvance=="Yes")
			{ 
				$mifamount= $wordcount*$ratemifadvance;
				$netamountfin=$netamountfin+$mifamount;
				
				$mifhtmlbreakup="
				<td class=\"cell1 cell1bg\">もっとあんしん保証追加料金</td>
				<td class=cell2>".number_format($mifamount)."円 <span class=\"reliable green\"><i>も</i><i>っ</i><i>と</i>あんしん</span></td>";
				$mifautobreakup="もっとあんしん保証追加料金：".number_format($mifamount)."円";
				
				$mifyesnofree="<strong class=txtBrown>無料で付きます</strong><br />
				アドバンス英文校正には無料で<a href=\"after-sales-service.htm\" target=\"blank\" class=\"contentlink\">あんしん保証</a>が付いています。1年間の保証期間中は、修正いただいた原稿を何度でも再校正いたします。<strong>ただし、一部ご利用いただけない場合がございます。詳しくは<a href=\"after-sales-service.htm\" target=\"blank\" class=\"contentlink\">あんしん保証</a>のページをご覧ください。</strong>";
			
			$mifyesnofree_auto="【あんしん保証】 
			無料で付きます:アドバンス英文校正には無料であんしん保証が付いています。1年間の保証期間中は、修正いただいた原稿を何度でも再校正いたします。ただし、一部ご利用いただけない場合がございます。詳しくはあんしん保証のページをご覧ください。URL:http://www.enago.jp/after-sales-service.htm";
				
				$mifyesnopaid="<strong class=txtBrown>付きます</strong><br />投稿後、査読者コメントを確認しながらの再校正や、著者から査読者への回答文の校正など、幅広く再投稿をサポートします。詳しくは<a href=\"revision-support.htm\" target=\"blank\" class=\"contentlink\">もっとあんしん保証</a>をご覧ください。";
			
			$mifyesnopaid_auto="【もっとあんしん保証】 
			付きます:投稿後、査読者コメントを確認しながらの再校正や、著者から査読者への回答文の校正など、幅広く再投稿をサポートします。詳しくはもっとあんしん保証をご覧ください。URL:http://www.enago.jp/revision-support.htm";
			
				$miffreehtmlmsg="<td class=\"cell1 cell1bg\">あんしん保証</td>
				  <td class=cell2>希望します。</td>";
				  $miffreeautomsg="あんしん保証：希望します。";
				
				$mifpaidhtmlmsg="<td class=\"cell1last cell1bg\">もっとあんしん保証</td>
				  <td class=cell2last>希望します。</td>";
				  $mifpaidautomsg="もっとあんしん保証：希望します。";
				}
			else // IF MI NO OPTION SELECTED
			{
				$mifyesnofree="<strong class=txtBrown>無料で付きます。</strong><br />
				アドバンス英文校正には無料であんしん保証が付いています。1年間の保証期間中は、修正いただいた原稿を何度でも再校正いたします。<strong>ただし、一部ご利用いただけない場合がございます。詳しくは<a href=\"after-sales-service.htm\" target=\"blank\" class=\"contentlink\">あんしん保証</a>のページをご覧ください。</strong>";
		
		$mifyesnofree_auto="【あんしん保証】 
		無料で付きます。:アドバンス英文校正には無料であんしん保証が付いています。1年間の保証期間中は、修正いただいた原稿を何度でも再校正いたします。ただし、一部ご利用いただけない場合がございます。詳しくはあんしん保証のページをご覧ください。URL:http://www.enago.jp/after-sales-service.htm";
			
			$mifyesnopaid="<strong class=txtBrown>お選びいただきませんでした。</strong><br />上記の合計金額に1語あたり4円の追加料金で、投稿後の査読コメント対応サービスまでカバーする保証を付けることができます。詳しくは<a href=\"revision-support.htm\" target=\"blank\" class=\"contentlink\">もっとあんしん保証</a>のページをご覧ください。";
		
		$mifyesnopaid_auto="【もっとあんしん保証】
		お選びいただきませんでした。:上記の合計金額に1語あたり4円の追加料金で、投稿後の査読コメント対応サービスまでカバーする保証を付けることができます。詳しくはもっとあんしん保証のページをご覧ください。URL:http://www.enago.jp/revision-support.htm";
		
			$miffreehtmlmsg="<td class=\"cell1 cell1bg\">あんしん保証</td>
			  <td class=cell2>希望します。</td>";
			  $miffreeautomsg="あんしん保証：希望します。";
			
			$mifpaidhtmlmsg="<td class=\"cell1last cell1bg\">もっとあんしん保証</td>
			  <td class=cell2last>希望しません。</td>";
			  $mifpaidautomsg="もっとあんしん保証：希望しません。";
			}
	
	}
	
	
	////////////////////////////////////////* Added by Anand (Normal Manuscript Insurance @2Yen/Word)*////////////////////////////////////////

if ($mainservice=="normal")
{
	if($mifnormal=="Yes")
	{
	$mifamount= $wordcount*$ratemifnormal;
	$netamount=$netamount+$mifamount;
	
	$mifhtmlbreakup="
    <td class=\"cell1 cell1bg\">あんしん保証追加料金</td>
    <td class=cell2>".number_format($mifamount)."円 <span class=\"reliable\">あんしん</span></td>";
	$mifautobreakup="あんしん保証追加料金：".number_format($mifamount)."円";
	
	$mifyesnofree="<strong class=txtBrown>付きます</strong><br />	納品後120日間は、修正いただいた原稿を何度でも再校正いたします。ただし、一部ご利用いただけない場合がございます。詳しくは<a href=\"after-sales-service.htm\" target=\"blank\" class=\"contentlink\">あんしん保証</a>のページをご覧ください。";

$mifyesnofree_auto="【あんしん保証】 
付きます。:納品後120日間は、修正いただいた原稿を何度でも再校正いたします。ただし、一部ご利用いただけない場合がございます。詳しくはあんしん保証のページをご覧ください。URL:http://www.enago.jp/after-sales-service.htm";
	
	$mifyesnopaid="<strong class=txtBrown>ご利用になれません。</strong><br />
	もっとあんしん保証（査読対応保証）は、アドバンス英文校正をご利用のお客様限定のサービスとなります。詳しくは<a href=\"revision-support.htm\" target=\"blank\" class=\"contentlink\">もっとあんしん保証</a>をご覧ください。";

$mifyesnopaid_auto="【もっとあんしん保証】 
ご利用になれません。:もっとあんしん保証（査読対応保証）は、アドバンス英文校正をご利用のお客様限定のサービスとなります。詳しくはもっとあんしん保証をご覧ください。URL:http://www.enago.jp/revision-support.htm";


$miffreehtmlmsg="<td class=\"cell1 cell1bg\">あんしん保証</td>
      <td class=cell2>希望します。</td>";
	  $miffreeautomsg="あんしん保証：希望します。";
	  
	
	$mifpaidhtmlmsg="<td class=\"cell1last cell1bg\">もっとあんしん保証</td>
      <td class=cell2last>ご利用になれません。</td>";
	  $mifpaidautomsg="もっとあんしん保証：ご利用になれません。";
	}
	else // IF MI NO OPTION SELECTED
	{
		$mifyesnofree="<strong class=txtBrown>お選びいただきませんでした。</strong><br />
		1語あたり2円の追加料金であんしん保証（再校正保証）を付けることができますので、ご希望の方はご依頼時にお選びください。保証を付けると、納品後120日間は、修正いただいた原稿を何度でも再校正いたします。";

$mifyesnofree_auto="【あんしん保証】 
お選びいただきませんでした。:1語あたり2円の追加料金であんしん保証（再校正保証）を付けることができますので、ご希望の方はご依頼時にお選びください。保証を付けると、納品後120日間は、修正いただいた原稿を何度でも再校正いたします。";
	
	$mifyesnopaid="<strong class=txtBrown>ご利用になれません。</strong><br />
	もっとあんしん保証（査読対応保証）は、アドバンス英文校正をご利用のお客様限定のサービスとなります。詳しくは<a href=\"revision-support.htm\" target=\"blank\" class=\"contentlink\">もっとあんしん保証</a>をご覧ください。";

$mifyesnopaid_auto="【もっとあんしん保証】 
ご利用になれません。:もっとあんしん保証（査読対応保証）は、アドバンス英文校正をご利用のお客様限定のサービスとなります。詳しくはもっとあんしん保証をご覧ください。URL:http://www.enago.jp/revision-support.htm";

$miffreehtmlmsg="<td class=\"cell1 cell1bg\">あんしん保証</td>
      <td class=cell2>希望しません。</td>";
	  $miffreeautomsg="あんしん保証：希望しません。";
	  
	
	$mifpaidhtmlmsg="<td class=\"cell1last cell1bg\">もっとあんしん保証</td>
      <td class=cell2last>ご利用になれません。</td>";
	  $mifpaidautomsg="もっとあんしん保証：ご利用になれません。";
	}
}
	
	////////////////////////////////////////////////////////////////////////////////
	
	//volume discount
		
	if ($wordcount>10000)
	{
			$volumedicount=0.20;
			
	}
	elseif($wordcount>=8001 && $wordcount <= 10000)
	{
		$volumedicount=0.15;
	}
	elseif($wordcount>=4000 && $wordcount <= 8000)
	{
		$volumedicount=0.10;
	}
	else
	{
		$volumedicount=0;
	}
	
	//
	echo "Vol ". $volumedicount. "\n";
	
	echo "New ". $newclientdiscount;
	
$discounttext="ボリューム割引";
$discounttextauto="ボリューム割引";
	
}

echo "track ".$ratenew;

//change decimals to % for display purpose example 0.15 will change to 15%
$ratenew100=$ratenew*100;
//$advratenew100=$advratenew*100;
	if ($service=="advance")
		{

$jptextdiscount= " (".$discounttext . $ratenew100 ."%)";
$jptextdiscountauto= " (".$discounttextauto . $ratenew100 ."%)";
		} else {
		
$jptextdiscount= " (".$discounttext . $ratenew100 ."%)";
$jptextdiscountauto= " (".$discounttextauto . $ratenew100 ."%)";
		}
		
//end of display code


$newdiscount=($grossamount*$ratenew);
$advnewdiscount=($advgrossamount*$ratenew);


//add format fees
if ($format == "word")
{
$premium=($grossamount*$rateword);

$netamount=$grossamount+$premium-$newdiscount;

$advpremium=($advgrossamount*$advrateword);

$advnetamount=$advgrossamount+$advpremium-$advnewdiscount;

$jpformat="MSWORD (.doc, .rtf)";
}

elseif ($format == "pdf")
{
$jpformat="PDF";
$premium=($grossamount*$ratepdf);

$netamount=$grossamount+$premium-$newdiscount;

$advpremium=($advgrossamount*$advratepdf);

$advnetamount=$advgrossamount+$advpremium-$advnewdiscount;

$jptextpremium="(PDF割増料金" . $ratepdf ."%)";
$notes="\n
☆★ご注意ください☆★
";
$formatnoteplain="
※ PDFファイルで依頼を頂いた場合、納品原稿はＰＤＦとＭＳワードの2種類の形式からお選び頂けます。
PDFでの納品は手書き校正となります。詳細はPDF英文校正(http://www.enago.jp/108_b.htm)をご覧ください。
※ 手書き（PDF→PDF）英文校正では、アドバンス英文校正サービスをお選び頂けません。";
$noteshtml="<img src=img/mailimages/headingtab2.gif alt=>";

$formatnoteplainhtml="<img src=\"img/common/squere/6x6enago.gif\" alt=\"\" /> 
PDFファイルで依頼を頂いた場合、納品原稿はＰＤＦとＭＳワードの2種類の形式からお選び頂けます。
PDFでの納品は手書き校正となります。詳細はPDF英文校正(http://www.enago.jp/108_b.htm)をご覧ください。<br / >
<img src=\"img/common/squere/6x6enago.gif\" alt=\"\" /> 手書き（PDF→PDF）英文校正では、アドバンス英文校正サービスをお選び頂けません。<br />";
}
elseif ($format == "excel")
{
$jpformat="Excel/PowerPoint (.xls/.ppt)";
$premium=($grossamount*$rateexcel);
$netamount=$grossamount+$premium-$newdiscount;
$advpremium=($advgrossamount*$advrateexcel);
$advnetamount=$advgrossamount+$advpremium-$advnewdiscount;
$jptextpremium="(パワーポイント／エクセル割増料金" . $rateexcel ."%)";
}
elseif ($format == "latexword")
{
$jpformat="TeX→MSワード英文校正";
$premium=($grossamount*$ratelatex);

$netamount=$grossamount+$premium-$newdiscount;

$advpremium=($advgrossamount*$advratelatex);

$advnetamount=$advgrossamount+$advpremium-$advnewdiscount;

$jptextpremium="(TeX割増料金" . $ratelatex ."%)";
$notes="\n
☆★ご注意ください☆★
";

$formatnoteplain="※ TeXファイルで原稿を頂いた場合、納品原稿はTeXとＭＳワードの2種類の形式からお選びいただけます。";

$noteshtml="<img src=img/mailimages/headingtab2.gif alt=>";
$formatnoteplainhtml="<img src=\"img/common/squere/6x6enago.gif\" alt=\"\" /> TeXファイルで原稿を頂いた場合、納品原稿はTeXとＭＳワードの2種類の形式からお選びいただけます。<br />";
}
else
{
$jpformat="ダイレクトTeX英文校正";
$netamount=$grossamount;
$premium=($grossamount*$ratelatextotex);

$netamount=$grossamount+$premium-$newdiscount;
$advpremium=($advgrossamount*$advratelatextotex);

$advnetamount=$advgrossamount+$advpremium-$advnewdiscount;
$ratelatextotexdisplay=$ratelatextotex*100;
$jptextpremium=" (ダイレクトTeX割増料金" . $ratelatextotexdisplay ."%)";
$notes="\n
☆★ご注意ください☆★
";
$formatnoteplain="
※ TeXファイルで原稿を頂いた場合、納品原稿はTeXとＭＳワードの
２種類の形式からお選び頂けます。ダイレクトTeX（TeX→TeX）英文校正には
30％の割増料金がかかります。詳細はTeX英文校正（http://www.enago.jp/108_c.htm）
をご覧ください。";
$noteshtml="<img src=img/mailimages/headingtab2.gif alt=>";
$formatnoteplainhtml="
<img src=\"img/common/squere/6x6enago.gif\" alt=\"\" /> TeXファイルで原稿を頂いた場合、納品原稿はTeXとＭＳワードの
２種類の形式からお選び頂けます。ダイレクトTeX（TeX→TeX）英文校正には30％の割増料金がかかります。詳細は<a href=http://www.enago.jp/108_c.htm>TeX英文校正</a>
をご覧ください。<br />";
}
//rounding-common
$netamount=floor($netamount);
$premium=floor($premium);
$newdiscount=ceil($newdiscount);

$advnetamount=floor($advnetamount);
$advpremium=floor($advpremium);
$advnewdiscount=ceil($advnewdiscount);
//***END-END-END**Fees calculated**END-END-END**************

//TAT check-normal editing only

if ($service=="advance")
{

//TAT for advance based on wordocunt. Implemented on 06 December 2010-Anand

	/*if ($wordcount > 0 && $wordcount <= 1000 )
		{
		
			$tatfinal="約1日 (お急ぎのお客様は、お問い合わせください。)";	
		}
	elseif  ($wordcount > 1000 && $wordcount <= 2000 )
	{
			$tatfinal="約2日 (お急ぎのお客様は、お問い合わせください。)";
	}
	
	elseif  ($wordcount > 2000 && $wordcount <= 6000 )
	{
			$tatfinal="約4日 (お急ぎのお客様は、お問い合わせください。)";
	}
	
	elseif  ($wordcount > 6000 && $wordcount <= 10000 )
	{
			$tatfinal="約7日 (お急ぎのお客様は、お問い合わせください。)";
	}
	else
	{
			$tatfinal="お問い合わせください。";
	}*/
	
	//
	
	if ($delpriority_advance == "standard")
	{
		$tateco=ceil($wordcount/1500);
		$tatfinalhtml="約 $tateco 日 (お急ぎのお客様は、お問い合わせください。)";
		$tatfinal="約 $tateco 日 (お急ぎのお客様は、お問い合わせください。)";
		$ratefin=$advrate;
		$netamountfin=$advnetamount;
		$actualDiscount=number_format($advnewdiscount)."円";
		$advgrossamount=number_format($advgrossamount);
	}
	else if ($delpriority_advance == "express")
	{
		$tateco=ceil($wordcount/2000);
		$tatfinalhtml="約 $tateco 日 (お急ぎのお客様は、お問い合わせください。)";
		$tatfinal="約 $tateco 日 (お急ぎのお客様は、お問い合わせください。)";
		$ratefin=$advrate;
		$netamountfin=$advnetamount;
		$actualDiscount=number_format($advnewdiscount)."円";
		$advgrossamount=number_format($advgrossamount);
	}
	else if ($delpriority_advance == "superexpress")
	{
		$tateco=ceil($wordcount/2500);
		$tatfinalhtml="約 $tateco 日 (お急ぎのお客様は、お問い合わせください。)";
		$tatfinal="約 $tateco 日 (お急ぎのお客様は、お問い合わせください。)";
		$ratefin=$advrate;
		$netamountfin=$advnetamount;
		$actualDiscount=number_format($advnewdiscount)."円";
		$advgrossamount=number_format($advgrossamount);
	}
	else
	{
		
		$tatfinalhtml="一日2500単語以上校正します。詳しくはお問い合わせください。";
		$tatfinal="一日2500単語以上校正します。詳しくはお問い合わせください。";
		$ratefin=$advrate;
		$netamountfin=$advnetamount;
		$actualDiscount=number_format($advnewdiscount)."円";
		$advgrossamount=number_format($advgrossamount);

	}
	
	// Place where we had added advance mi code
	
	if ($advpremium==0)
	{}
	else
	{
		$advtemp1premium=number_format($advpremium)."円". $jptextpremium;
		$chargesfileformat_auto="追加料金: $advtemp1premium";	
		$chargesfileformat="<td class=\"cell1 cell1bg\">追加料金</td>
			<td class=cell2>$advtemp1premium</td>";	
	}
	
	//
	
	if ($advnewdiscount==0)
	{}
	else
	{
		$advtemp1newdiscount=$actualDiscount. $jptextdiscount;
		$advtemp1newdiscountauto=$actualDiscount. $jptextdiscountauto;
		$maincalculationplainfin="割引: $advtemp1newdiscountauto";
		$maincalculationplainfinhtml="<td class=\"cell1 cell1bg\">割引</td>
			<td class=cell2>$advtemp1newdiscount</td>";

	}

	//
	
	$grossfin=$advgrossamount."円";
	$maingrossfin="<td class=\"cell1 cell1bg\">基本料金</td>
		<td class=\"cell2\">$grossfin</td>";
	$maingrossfin_auto="基本料金:$grossfin";

}
else
{
//LOWER TAT CHECK***********************************************************
$lowertatwithdecimals=$wordcount/$lowertat; //TAT with decimals: 2.3456
$lowertatwithoutdecimals=floor($lowertatwithdecimals); // truncates tat: 2
$lowertathoursindecimals=($lowertatwithdecimals-$lowertatwithoutdecimals)*8; //Seperates the decimal part and multiply by 8 working hours: .3456*8


if ($lowertathoursindecimals ==0)
{
$lowerhrsadded="";
$lowerdaysadded="0";
$jptextworkinghrslower="";

}
elseif ($lowertathoursindecimals <=3)
{
$lowerhrsadded="3";
$lowerdaysadded="0";
$jptextworkinghrslower="時間";
}
elseif ($lowertathoursindecimals <= 6)
{
$lowerhrsadded="6";
$lowerdaysadded="0";
$jptextworkinghrslower="時間";

}
else
{
$lowerhrsadded="";
$lowerdaysadded="1";
$jptextworkinghrslower="";

}

$finallowertatcheck= ($lowertatwithoutdecimals+$lowerdaysadded);
//minimum check
if ($finallowertatcheck < 1) 
{
$finallowertat=1; 
$lowerhrsadded="";
$jptextworkinghrslower="";
}
else 
{
$finallowertat=$finallowertatcheck;
}
//END-END-END -- LOWER TAT CHECK***********************************************************

////upper TAT CHECK***********************************************************
$uppertatwithdecimals=$wordcount/$uppertat; //TAT with decimals: 2.3456
$uppertatwithoutdecimals=floor($uppertatwithdecimals); // truncates tat: 2
$uppertathoursindecimals=($uppertatwithdecimals-$uppertatwithoutdecimals)*8; //Seperates the decimal part and multiply by 8 working hours: .3456*8
if ($uppertathoursindecimals ==0)
{
$upperhrsadded="";

$upperdaysadded="0";
$jptextworkinghrsupper="";
}
elseif ($uppertathoursindecimals <=3)
{
$upperhrsadded="3";
$upperdaysadded="0";
$jptextworkinghrsupper="時間";
}
elseif ($uppertathoursindecimals <= 6)
{
$upperhrsadded="6";
$upperdaysadded="0";
$jptextworkinghrsupper="時間";
}
else
{
$upperhrsadded="";
$upperdaysadded="1";
$jptextworkinghrsupper="";

}
$finaluppertatcheck= ($uppertatwithoutdecimals+$upperdaysadded);
//minimum check
if ($finaluppertatcheck < 1) 
{
$finaluppertat=1; 
$upperhrsadded="";
$jptextworkinghrsupper="";
}
else 
{
$finaluppertat=$finaluppertatcheck;
}
//END-END-END -- UPPER TAT CHECK***********************************************************
//checking if upper TAT and lower TAT is the same? only normal

if($finaluppertat == $finallowertat && $upperhrsadded==$lowerhrsadded)
{
if($finaluppertat == $finallowertat && $upperhrsadded==$lowerhrsadded  && $finallowertat==1 && $lowerhrsadded=="" && $delpriority!="lastminute")
		{
		$tatfinal= "1 日と6時間 （日曜日除く）
		【24時間以内での納品を必要とするお急ぎの案件は、
		原稿の単語数に関わらず、全て「駆け込み乗車プラン」
		となります。】
		";
		$tatfinalhtml= "1 日 と6 時間 （日曜日除く）
	   【24時間以内での納品を必要とするお急ぎの案件は、
		原稿の単語数に関わらず、全て「駆け込み乗車プラン」
		となります。】
		";
		
				} 
else
{
$tatfinal= $finaluppertat . "日 " . $upperhrsadded . $jptextworkinghrsupper . " 以内"."（日曜日除く）";
$tatfinalhtml=$tatfinal;

}
} 
else

{
if ($delpriority=="economy" || $delpriority == "lastminute")
{
$tatfinal=$finaluppertat . "日 " . $upperhrsadded . $jptextworkinghrsupper . " から " . $finallowertat . "日 " . $lowerhrsadded . $jptextworkinghrslower . " 以内"."（日曜日除く）";	
$tatfinalhtml=$tatfinal;
}
else {
 $tatfinal=$finaluppertat . "日 " . $upperhrsadded . $jptextworkinghrsupper."（日曜日除く）";}
 $tatfinalhtml=$tatfinal;

}

//CS END
if($finaluppertat == $finallowertat && $upperhrsadded==$lowerhrsadded)
{
if($finaluppertat == $finallowertat && $upperhrsadded==$lowerhrsadded  && $finallowertat==1 && $lowerhrsadded=="" && $delpriority!="lastminute")
		{
		$tatfinalcs= "1 day 6 hours
	Note that delivery within 1 day will be Last minute plan.
	You need to give us more than 1 day for other priority.
		";
		}


//$tatfinalcs= $finaluppertat . " days " . $upperhrsadded . $jptextworkinghrsupper . " within ";
} 
else
{
if ($delpriority=="economy" || $delpriority == "lastminute")
{
$tatfinalcs=$finaluppertat . " days " . $upperhrsadded . $jptextworkinghrsupper . " to " . $finallowertat . " days " . $lowerhrsadded . $jptextworkinghrslower ;	
}
else {
 $tatfinalcs=$finaluppertat . " days " . $upperhrsadded . $jptextworkinghrsupper ;}

}
///////////////////////////// 

// Normal MI code place

//

$ratefin=$rate;
$netamountfin=$netamount;

$maincalculationplainfin=$maincalculationplain;

if ($premium==0)
{}
else
	{$temp1premium=number_format($premium)."円 ".$jptextpremium;
		$chargesfileformat_auto="追加料金: $temp1premium";	

	$chargesfileformat="<td class=\"cell1 cell1bg\">追加料金</td>
		<td class=cell2>$temp1premium</td>";
	
	}

if ($newdiscount==0)
{}
else
	{
		$temp1newdiscount=number_format($newdiscount)."円 ".$jptextdiscount;
		$temp1newdiscountauto=number_format($newdiscount)."円 ".$jptextdiscountauto;
	$maincalculationplainfin="割引: $temp1newdiscountauto";
	
	$maincalculationplainfinhtml="<td class=\"cell1 cell1bg\">割引</td>
		<td class=cell2>$temp1newdiscount</td>";
	
	
	}

$grossfin=number_format($grossamount)."円";

$maingrossfin="<td class=\"cell1 cell1bg\">基本料金</td>
    <td class=\"cell2\">$grossfin</td>";
$maingrossfin_auto="基本料金:$grossfin";

}
//word count note-common
/*if ($wordcount > 10000) 
{
$notes="\n
☆★ご注意ください☆★
";
$volumenoteplain="※ボリュームのあるご依頼のため、詳細をご記入の上request@enago.comに
直接ご連絡いただくことをおすすめします。納期など柔軟にご対応します。"; 
$noteshtml="<img src=img/mailimages/headingtab2.gif alt=>";
$volumenoteplainhtml="<img src=\"img/common/squere/6x6enago.gif\" alt=\"\" />  ボリュームのあるご依頼のため、詳細をご記入の上<a href=mailto:request@enago.com class=contentlink>request@enago.com</a>に直接ご連絡いただくことをおすすめします。納期など柔軟にご対応します。"; 
}*/
//
if($format =="latexlatex"){
	$chargesfileformat=$chargesfileformat;
	$chargesfileformat_auto=$chargesfileformat_auto;
}
else
{
	$chargesfileformat="";
	$chargesfileformat_auto="";
}
//
//
/*if($service =="advance" && $format =="word" || $format =="pdf" || $format =="latexword")
{
	$maingrossfin_auto="";
	$maingrossfin="";
}
else{
	$maingrossfin_auto=$maingrossfin_auto;
	$maingrossfin=$maingrossfin;
}*/

// formatting-common


if ($service == "advance")
{	
$netamountfin= number_format($netamountfin);
$advgrossamount=number_format($advgrossamount);
}


//$maingrossfin_auto =number_format($maingrossfin_auto);

$premium=number_format($premium);
$newdiscount=number_format($newdiscount);

$advpremium=number_format($advpremium);
$advnetamount= number_format($advnetamount);
$advnewdiscount= number_format($advnewdiscount);

//emails
//$name=ucwords(strtolower($name));

$message ="****AUTOMATIC QUOTATION: JAPANESE WEBSITE****
_____________________________________ 

Date: $date 
Time:  $nowClock Japan Time 
_____________________________________ 

::Personal details::
Name: $name 
Organization:  $organisation 
email address: $email 

::Your assignment details::
Service: $service
Format: $jpformat
Subject area: $subjectarea
Word count: $wordcount 
Priority: $delpriority 
TAT: $tatfinalcs

::FEES::
RATE: $ratefin
Manuscript Insurance: $mifamount
NET AMOUNT: $netamountfin 
$maincalculationplainfin
****************************

IP: $ip 
BROWSER:$browser $version

$date|$name|$name|$organisation|$email|$jpformat|$jpsubjectarea|$wordcount|$delpriority|$ip|Plain text|$browser|$client|$service

";

$to=$autotod;

$myemail = strpbrk($email, '@');

$clientname=ucwords(strtolower($name));
if($clientname =="Crimson" || $clientname =="Test" || $myemail == "@crimsoni.com" || $myemail == "@enago.com" || $myemail == "@ulatus.com" || $myemail == "@voxtab.com")
	{ 
		$to = $testmail.", ".$email; 
		$subalert="[FORM TESTING]";
		$testalert="FORM TESTING >>>>>>> FORM TESTING >>>>>>> FORM TESTING >>>>>>> FORM TESTING >>>>>>> FORM TESTING >>>>>>> FORM TESTING";
	}

/*mail("$to", "$client-$service-$delpriority-$wordcount-$jpformat".$subalert, $testalert.$message,
  "From: Autoquote-ENAGO<$fromAddauto>\r\n" . 
  "Content-type: text/plain; charset=Shift_JIS");*/
  
  
mb_send_mail($to, "$client-$service-$delpriority-$wordcount".$subalert, $testalert.$message, "From: Autoquote-ENAGO<$fromAddauto>\r\n" );
  

//AUTORESPONSE




$message ="$name 様

$kanjimessage_auto 

このたびは、エナゴの自動お見積もりフォームをご利用いただき、ありがとうございます。
以下がお見積もり結果となります。

┏お見積もり━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓

サービス: $jpservice 
料金プラン: $ratefin 円 (1語あたり)
$maingrossfin_auto 
$maincalculationplainfin
$chargesfileformat_auto
$mifautobreakup
合計: $netamountfin 円
作業時間: $tatfinal

※ ご注意：原稿をお預かりした時点での校正者の予約状況によって、上記作業時間は変動します。
$formatnoteplain
$jpsetext $volumenoteplain

┏オプション━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓

【原稿評価カルテ】 
$mrcautomsg 

$coverlettermsg_auto \n
$mifyesnofree_auto \n
$mifyesnopaid_auto


┏次のステップ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓

ご注文を確定されるお客様、より正確なお見積もりをご希望のお客様は、
以下のフォームをご記入・送信してください。
http://www.enago.jp/23.htm
お問い合わせ・ご質問は、request@enago.com までお願いします



┏お客様のフォームご記入内容━━━━━━━━━━━━━━━━━━━━━━┓

専門分野: $jpsubjectarea
ファイル種類: $jpformat
単語数: $wordcount
納品速度: $jptextpriority  
$miffreeautomsg \n
$mifpaidautomsg

============================================================
英文校正・英文校閲エナゴ
営業時間（メール受付時間）：　24時間営業 
電話受付時間： 月～金 10:00-20:00, 土 12:30-21:30
お問い合わせEメールアドレス： request@enago.com
Phone (東京番号): 03-5050-5374
Fax (東京番号): 03-4496-4934 
****************************************************
■ISO 9001:2008（品質マネジメント） 認証取得■
■ISO 27001:2013（情報セキュリティ） 認証取得■
エナゴでは、強固な情報セキュリティシステムを保持する
会社に与えられる国際認証ISO27001:2013を取得しました。
お客様の原稿を厳重に管理しております。
";

mb_send_mail($email, "[英文校正]お見積もり結果（自動お見積もりフォーム）".$subalert, $testalert.$message, "From: CRIMSON (Enago-Request)<$clientfromAdd>\r\n" );

/* mail("$email", "[英文校正]お見積もり結果（自動お見積もりフォーム）".$subalert, $testalert.$message,
  "From: CRIMSON (Enago-Request)<$clientfromAdd>\r\n" . 
  "Content-type: text/plain; charset=Shift_JIS");*/
}
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="ja" lang="ja">

    <!-- HEAD -->
    <head>
    <meta http-equiv="Content-Type" content="text/html; charset=shift_jis" />
<title>英文校正・英語論文校正・英文校閲のエナゴ::1分でクイック確認の自動お見積もり</title>
<meta name="description" content="英文履歴書の英文校正も格安で受注。アブストラクト、英語スピーチ原稿、助成金申請文書などの学術文書ほか、薬事申請文書、薬事規制文書、臨床試験報告書、各種ビジネス文書、英文ホームページの英文校正なども承ります。">
<meta name="keywords" content="英文校正,英語論文校正,英文校閲,英文添削,ネイティブチェック,英語添削,英作文添削,アカデミックライティング">

       <!-- ICON -->
       <link rel="icon" href="img/common/icons/favicon.ico" type="image/x-icon"/>
<!-- new template CSS -->
<link href="css/innermain-new.css" rel="stylesheet" type="text/css"/>
<link type="text/css" rel="stylesheet" href="css/nav-dropdown.css"/>
    <!--[if IE]>
  <style type="text/css">
#rightcontainer a.toplink{padding:0px 5px 0px 5px; margin-right:0}
#quotation-callus-banner{border:2px solid #eee;}
.brd1shadow{ border:1px solid #eee;}

.commonPageTitle{margin:38px 0px 0px 0px;}

</style>
<![endif]-->

  <!--[if lte IE 6]>
<link id="stylesheet3" rel="stylesheet" href="css/innermain-ie.css" type="text/css" media="all" />
<![endif]-->
 <!--[if IE 6]>
        <script src="js/DD_belatedPNG_0.0.8a-min.js"></script>
        <script type="text/javascript">
          DD_belatedPNG.fix('.ie6PNGfix, .commonLink');
          
          /* string argument can be any CSS selector */
          /* .ie6PNGfix example is unnecessary */
          /* change it to what suits you! */
        </script>
        <![endif]-->
<!-- new template CSS end -->       
       <!-- CSS (Cascading Style Sheets) Files -->

 <link rel="stylesheet" type="text/css" href="css/innerpage-style-new.css"  />
    


  </head>
    
<body onload="changePage();MM_preloadImages('img/banners/at-quotation-banner2.png','img/banners/re-at-quotation-banner2.png')" ><div id="headerwrap">
<div class="header">

<?php include("inc_header_s.htm");?> 
</div>
<?php include("inc_nav_s.htm");?>
<div class="breadcrumbwrap">
<div id="breadcrumb"><span> <a href="http://www.enago.jp" class="prev">ホーム</a>&nbsp; >> &nbsp;<a class="current">お見積もり</a></span></div></div>
  </div>
  

<div id="layout-wrapper">
  
  <div id="columns-wrapper">
    <div id="leftcontainer">
      	<div class="subnav ">
            <dl class="navTitle ie6PNGfix">
              <dt>お見積もり・ご注文</dt>
            </dl>
            <div class="items" id="subnav">
          <a href="20.htm" class="first">お見積もり・ご注文</a>
           <a href="21.htm">自動お見積もり計算</a>
           <a href="23.htm">お見積もり・ご注文フォーム</a>
         <script type="text/javascript" src="js/setpage.js"></script>
            <script type="application/javascript" language="javascript">setPage()</script>
        </div>
     
 <?php include("inc_sidebar_s.htm");?> 

    </div>
    
    </div>
    
    <div id="maincontentcontainer">
    <h1 class="commonPageTitle">自動お見積もりの結果</h1>
<div id="innerdiv">
                <table class="commonText" width="630" border="0" cellspacing="0" cellpadding="0">

<tr>
<td><div style="float:left"><?php echo $name ?> 様</div><div style="float:right"><?php echo date('Y') ?>年<?php echo date('n') ?>月<?php echo date('j') ?>日 <?php echo $nowClock ?></div></td>
</tr>
<tr>
<td>&nbsp;</td>
</tr>
<!--<tr>
  <td>&nbsp;</td>
  <td class="txtBrown"><strong>2011年6月15日まで、特別割引料金を設けています。</strong></td>
</tr> -->
<tr>
  <td><strong class="redc"><?php echo $kanjimessage ?></strong>このたびは、エナゴの自動お見積もりフォームをご利用いただき、ありがとうございます。<br />
    以下がお見積もり結果となります。</td>
</tr>
<tr>
<td valign="top">&nbsp;</td>
</tr>
<tr>
<td valign="top"><img src="img/common/squere/6x6enago.png" width="12" height="12" alt="英文校正・英文校閲" /><strong class="txt14"> お見積もり</strong></td>
</tr>

<tr>
<td valign="top" class="paddingtop10"><table class="tableborder" width="630" border="0" cellspacing="0" cellpadding="4">
  <tr>
    <td class="cell1 cell1bg">サービス</td>
    <td class="cell2"><?php echo $jpservice ?></td>
    </tr>
  <tr>
    <td width="250" class="cell1 cell1bg">料金プラン</td>
    <td class="cell2"><?php echo $ratefin ?>円 (1語あたり)</td>
    </tr>
  <tr><?php echo $maingrossfin ?></tr>
  <tr><?php echo $maincalculationplainfinhtml ?></tr>
  <tr><?php echo $chargesfileformat ?></tr>
  <tr><?php echo $mifhtmlbreakup ?></tr>
  <tr>
    <td class="cell1 cell2bg">合計</td>
    <td class="cell2"><?php echo $netamountfin?>円</td>
    </tr>
  <tr>
    <td class="cell1last cell2bg">作業時間</td>
    <td class="cell2last"><?php echo $tatfinalhtml ?></td>
    </tr>
</table></td>
</tr>
<tr>
  <td valign="top">&nbsp;</td>
</tr>
<tr>
<td valign="top" class="paddingtop5px"><img src="img/bullet_navhighlight.gif" width="11" height="11" alt="英文校正・英文校閲" /> ご注意：原稿をお預かりした時点での校正者の予約状況によって、上記作業時間は変動します。</td>
</tr>
<tr>
  <td><div class="paddingtop10"><?php echo $formatnoteplainhtml ?></div>
  <div class="paddingtop10"><?php echo $jpsetexthtml ?></div>
  <div class="paddingtop10"><?php echo $volumenoteplainhtml ?></div></td>
</tr>
<tr>
  <td valign="top">&nbsp;</td>
</tr>
<tr>
  <td valign="top"><img src="img/common/squere/6x6enago.png" width="12" height="12" alt="英文校閲・英文論文校正" /><strong class="txt14"> オプション</strong></td>
</tr>
<tr>
<td valign="top" class="paddingtop10"><table class="tablegreyborder" width="630" border="0" cellspacing="0" cellpadding="0">
  <tr>
    <td width="25%" class="tblcell1">原稿評価カルテ <img src="img/mailimages/mrc.png" class="vabsmiddle" alt="英文校閲・英文論文校正" width="67" height="76" /></td>
    <td class="tblcell2"><?php echo $mrchtmlmsg ?></td>
    </tr>
  <tr>
    <td class="tblcell1">あんしん保証<br />（再校正保証）<br />
<span class="reliable mart10 marL10">あんしん</span></td>
    <td class="tblcell2"><?php echo $mifyesnofree ?></td>
    </tr>
  <tr>
    <td class="tblcell3">もっとあんしん保証<br />
      （査読対応保証）<br />
<span class="reliable green" style="margin-top:3px;"><i>も</i><i>っ</i><i>と</i>あんしん</span></td>
    <td class="tblcell4"><?php echo $mifyesnopaid ?></td>
  </tr>
  <tr>
    <?php echo $coverlettermsg ?>
    </tr>
</table></td>
</tr>
<tr>
  <td>&nbsp;</td>
</tr>
<tr>
<td>&nbsp;</td>
</tr>
<tr>
  <td valign="top"><img src="img/common/squere/6x6enago.png" width="12" height="12" alt="英文校正・英文論文校正" /><strong class="txt14"> 次のステップ</strong></td>
</tr>
<tr>
  <td>&nbsp;</td>
</tr>
<tr>
<td>  <img src="img/common/squere/6x6enago.gif" width="6" height="6" alt="英文校正・英文校閲" /><a href="http://www.enago.jp/23.htm" class="contentlink"> ご注文を確定されるお客様、より正確なお見積もりをご希望のお客様</a></td>
</tr>
<tr>
  <td><a href="http://www.enago.jp/23.htm" target="_blank" onmouseout="MM_swapImgRestore()" onmouseover="MM_swapImage('Image47','','img/banners/at-quotation-banner2.png',1)"><img src="img/banners/at-quotation-banner1.png" name="Image47" width="355" height="64" border="0" id="Image47" alt="英文校閲・英文校正見積もり依頼" /></a><br />
<br />
  <img src="img/common/squere/6x6enago.gif" width="6" height="6" alt="英文校正/
  テフ・ラテフ" /> <a href="http://www.enago.jp/21.htm" class="contentlink">条件を変えてやり直したいお客様</a><br />
    <a href="http://www.enago.jp/21.htm"  target="_blank" onmouseout="MM_swapImgRestore()" onmouseover="MM_swapImage('Image48','','img/banners/re-at-quotation-banner2.png',1)"><img src="img/banners/re-at-quotation-banner1.png" name="Image48" width="355" height="64" border="0" id="Image48" alt="英文校閲・英文校正サービス" /></a><br />
<br />
  <img src="img/common/squere/6x6enago.gif" width="6" height="6" alt="英文校正・英文校閲・PDF" /> お問い合わせ・ご質問は、<a href="mailto:request@enago.com" class="contentlink">request@enago.com</a> までお願いします。</td>
</tr>
<tr>
  <td>&nbsp;</td>
</tr>
<tr>
  <td>&nbsp;</td>
</tr>
<tr>
  <td valign="top"><img src="img/common/squere/6x6enago.png" width="12" height="12" alt="英文校正・TeX・LaTeX" /><strong class="txt14"> お客様のフォームご記入内容</strong></td>
</tr>
<tr>
  <td class="paddingtop10"><table class="tableborder" width="630" border="0" cellspacing="0" cellpadding="4">
    <tr>
      <td class="cell1 cell1bg"><strong>専門分野</strong></td>
      <td class="cell2"><?php echo $jpsubjectarea ?></td>
      </tr>
    <tr>
      <td width="250" class="cell1 cell1bg"><strong>ファイル種類</strong></td>
      <td class="cell2"><?php echo $jpformat ?></td>
      </tr>
    <tr>
      <td class="cell1 cell1bg"><strong>単語数</strong></td>
      <td class="cell2"><?php echo $wordcount ?> words</td>
      </tr>
    <tr>
      <td class="cell1 cell1bg"><strong>納品速度</strong></td>
      <td class="cell2"><?php echo $jptextpriority ?></td>
      </tr>
     <tr><?php echo $miffreehtmlmsg ?></tr>
     <tr><?php echo $mifpaidhtmlmsg ?></tr>
  </table></td>
</tr>
<tr>
  <td>&nbsp;</td>
</tr>
<tr>
  <td>&nbsp;</td>
</tr>
<tr>
  <td valign="top"><img src="img/common/squere/6x6enago.png" width="12" height="12" alt="医学英語論文・英文校閲" /><strong class="txt14"> PR</strong></td>
</tr>
<tr>
  <td>英文校正エナゴは、強固な情報セキュリティシステムを保持する会社に与えられる国際認証<br />
ISO27001:2013を取得している、数少ない英文校正会社のひとつです。<br />
    <strong>お客様の原稿を厳重に管理しておりますので、ご安心してお預けください。</strong><br />
<span class="txt20">■</span><strong> ISO 27001:2013（情報セキュリティ） 認証取得 </strong><span class="txt20">■</span></td>
</tr>
<!--<tr>
  <td>ジャーナルへ論文を投稿されるお客様をサポートするための、新しいサービスを始めました。<br />
    詳細は<a href="http://www.enago.jp/publication-support/200.htm" class="contentlink">http://www.enago.jp/publication-support/200.htm</a>をご覧ください。<br />
    <br />
    アイエシイトラベルは、業務渡航、出張、国際会議、 <br />
    学会、団体手配を得意とする旅行会社です。 <br />
    詳細は<a href="http://www.iace.co.jp/bts/convention" target="_blank" class="contentlink">http://www.iace.co.jp/bts/convention/</a>をご覧ください。 </td>
</tr> -->
<tr>
  <td>&nbsp;</td>
</tr>
<tr>
  <td>
  	<div class="clearBoth mart20"><a href="campaign.htm#PS" target="_blank"><img src="img/campaign/PS-campaign-banner.png" width="630" height="112" alt="論文翻訳サービス・論文英訳" class="publication-banner"/></a></div>
    <div class="clearBoth mart20"><a href="campaign.htm#EU" target="_blank"><img src="img/campaign/cross-campagin.jpg" width="630" height="121" alt="論文翻訳サービス・論文英訳" class="publication-banner"/></a></div>
  </td>
</tr>
                </table>
                    
                    
                    </div>


    </div>
    
  </div>

</div>

<script type="text/javascript" src="js/jquery-innerpage.js"></script>
<script type="text/javascript" src="js/global-innerpage.js"></script>
 <script type="text/javascript" src="js/jquery.min.js"></script>
 <?php include("inc_footer_s.htm");?>
</body>
</html>
