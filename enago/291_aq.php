<?
//END OF VOLUME CODING
ini_set("mbstring.internal_encoding","shift_jis");

$mainservice = $service;

include "common.php";
if($client=="new")
	{
	$link="�� �ڍׂȂ����ς���F�F�V�K�̂��q�l (http://www.enago.jp/23.htm)";
	$linkhtml="<a href=http://www.enago.jp/23.htm target=_blank><img src=img/mailimages/orderbutton.gif border=\"0\" ></a>";
	$wrdcnt="�����ӂ��������I�F
	���ۂ̍Z����Ƃ̊J�n���Ԃɂ���āA��L�̍�Ǝ��Ԃ��ύX����܂��B
	���m�Ȕ[�i���������m��ɂȂ肽�����́A<a href=http://www.enago.jp/23.htm>�����ς���E���˗��t�H�[��</a>�����L���E�����M���������B";
	$wrdcnthtml="<div><strong class=fontred>�����ӂ��������I�F</strong>
		 <br />
		 ���e�����a���肵�����_�ł̍Z���҂̗\��󋵂ɂ���āA��L��Ǝ��Ԃ͕ϓ����܂��B<br />���m�Ȕ[�i���������m��ɂȂ肽�����́A<a href=http://www.enago.jp/23.htm target=_blank>�����ς���E�������t�H�[��</a>�����L���E���M���������B</div>";
		
	}
else 
	{
	$link="�� �ڍׂȂ����ς���F�F�����̂��q�l (http://www.enago.jp/23.htm)";
	$linkhtml="<a href=http://www.enago.jp/23.htm target=_blank><img src=img/mailimages/orderbutton.gif border=\"0\" ></a>";
	$wrdcnt="�����ӂ��������I�F
	���e�����a���肵�����_�ł̍Z���҂̗\��󋵂ɂ���āA��L��Ǝ��Ԃ͕ϓ����܂��B
	���m�Ȕ[�i���������m��ɂȂ肽�����́A�����ς���E�������t�H�[��(http://www.enago.jp/23.htm)�����L���E���M���������B";
	$wrdcnthtml="<div><strong class=fontred>�����ӂ��������I�F</strong>
		 <br />
		 ���e�����a���肵�����_�ł̍Z���҂̗\��󋵂ɂ���āA��L��Ǝ��Ԃ͕ϓ����܂��B<br />���m�Ȕ[�i���������m��ɂȂ肽�����́A<a href=http://www.enago.jp/23.htm target=_blank>�����ς���E�������t�H�[��</a>�����L���E���M���������B</div>";
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
	$kanjimessage="�S�p�����i��F �S�O�O�O�j ���g���ăt�H�[���ɋL���������߁A�����������ς���̌v�Z���ł��܂���ł����B���˗��t�H�[���ɖ߂�A���p�����i��F4000�j�ōċL�����Ă��������B<br /><br />";
	$kanjimessage_auto="�S�p�����i��F �S�O�O�O�j ���g���ăt�H�[���ɋL���������߁A�����������ς���̌v�Z���ł��܂���ł����B���˗��t�H�[���ɖ߂�A���p�����i��F4000�j�ōċL�����Ă��������B";
	}
else {

//ratecard

if($wordcount>1000)
{
if ( $delpriority == "economy")
{
$ratecard="
�� �G�R�m�~�[�v���������I�т̂��q�l�ɂ́A
���e�]���J���e�������グ�Ă���܂���B
(http://www.enago.jp/1002.htm)
���e�]���J���e�́A�G�R�m�~�[������
���ׂẴv�����ł��񋟂��Ă��܂��B
";
$ratecardhtml="<table width=100% cellpadding=2 >
<tr>
<td width=43><img src=img/mailimages/icon4.gif alt=></td>
<td style=color:#990000; padding-left:10px;>�G�R�m�~�[�v���������I�т̂��q�l�ɂ́A
<a href=http://www.enago.jp/1002.htm target=_blank>���e�]���J���e</a>�������グ�Ă���܂���B
���e�]���J���e�́A�G�R�m�~�[������
���ׂẴv�����Ŗ����ō����グ�Ă��܂��B</td>
</tr>
</table>";
}
else
{


if ($service=="advance")
		{
$ratecard="
�� ���̃T�[�r�X�������p�̂��q�l�ɂ̓J�o�[���^�[�ƃA�h�o���X���|�[�g�𖳗��ł��񋟂������܂��I
�� ���e�]���J���e�������ō����グ�܂��B�T���v���͂�����(http://www.enago.jp/ratecard/h1.htm)
���������������B����͂��q�l�����ɂ��������邽�߂̕��Ђ̉B�������N�ƂȂ��Ă���܂��B
";
$ratecardhtml="<table width=100%  cellpadding=2>
<tr>
<td width=43><img src=img/mailimages/icon4.gif alt=></td>
<td style=color:#990000; padding-left:10px;>���̃T�[�r�X�������p�̂��q�l�ɂ̓J�o�[���^�[�ƃA�h�o���X���|�[�g�𖳗��ł��񋟂������܂��I<br />
���e�]���J���e�������ō����グ�܂��B�T���v����<a href=http://www.enago.jp/ratecard/h1.htm target=_blank>������</a><br />
���������������B����͂��q�l�����ɂ��������邽�߂̕��Ђ̉B�������N�ƂȂ��Ă���܂��B</td>
</tr>
</table>";
		
		}
	else
		{
$ratecard="
�� ���e�]���J���e�̃T���v�����������������B����͂��q�l�����ɂ��������邽�߂̕��Ђ̉B�������N�ƂȂ��Ă���܂��B
(http://www.enago.jp/ratecard/h1.htm)
";
$ratecardhtml="<table width=100%  cellpadding=2>
<tr>
<td width=43><img src=img/mailimages/icon4.gif alt=></td>
<td style=color:#990000; padding-left:10px;>���e�]���J���e��<a href=http://www.enago.jp/ratecard/h1.htm target=_blank>�T���v��</a>���������������B����͂��q�l�����ɂ��������邽�߂̕��Ђ̉B�������N�ƂȂ��Ă���܂��B<br />
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
			$jptextpriority="�X�^���_�[�h�iStandard�j";
		}
	else if ($delpriority_advance == "express")
	{
			include "296_express.php";
			$jptextpriority="�G�N�X�v���X�iExpress�j";
	}
	else if ($delpriority_advance == "superexpress")
	{
			include "297_superexpress.php";
			$jptextpriority="�X�[�p�[�G�N�X�v���X�iSuper Express�j";
	}
	else
	{
			include "298_lastminute.php";
			$jptextpriority="�삯���ݏ�ԁiLast Minute�j";
	}
}

if ($service=="advance")
{
$delpriority=$delpriority_advance;
$jpservice="�A�h�o���X�p���Z���T�[�r�X";

$coverlettermsg="<td class=\"tblcell5\">�J�o�[���^�[ <img src=\"img/new-services/coverletter.png\" class=\"vabsmiddle\" alt=\"�p���Z���E�p���Z�{�E�p���_���Z��\" width=\"72\" height=\"69\" /></td>
    <td class=\"tblcell6\"><strong class=\"txtBrown\">�t���Ă��܂��B</strong><br />
�S���Z���҂��J�o�[���^�[�𖳗��Ŏ��M��s���܂��B</td>";
$coverlettermsg_auto="�y�J�o�[���^�[�z
�t���Ă��܂��B�S���Z���҂��J�o�[���^�[�𖳗��Ŏ��M��s���܂��B";
}
else
{
$jpservice="�p���Z���T�[�r�X";
	
}


//including the file according to the priority-common and normal only

if ($delpriority == "standard")
{
include "295_standard.php";
$mrcautomsg="�t���܂�:���e�]���J���e�̃T���v�����������������B
�T���v����URL:http://www.enago.jp/1002.htm";
$mrchtmlmsg="<strong class=txtBrown>�t���܂�</strong><br />���e�]���J���e��<a href=\"1002.htm\" target=\"blank\" class=\"contentlink\">�T���v��</a>���������������B";
$jptextpriority ="�X�^���_�[�h(Standard)";
$tatfinalexpressplain="";
$tatfinalexpress="";
}
elseif ($delpriority == "economy")
{
include "298_economy.php";
$jptextpriority="�G�R�m�~�[(Economy)";
$mrcautomsg="�Ȃ�:�G�R�m�~�[�v���������I�т̂��q�l�ɂ́A
���e�]���J���e�������グ�Ă���܂���B
���e�]���J���e�́A�G�R�m�~�[���������ׂẴv�����ł͖����ō����グ�Ă��܂��B";
$mrchtmlmsg="<strong class=txtBrown>�Ȃ�</strong><br />�G�R�m�~�[�v���������I�т̂��q�l�ɂ́A���e�]���J���e�������グ�Ă���܂���B���e�]���J���e�́A�G�R�m�~�[���������ׂẴv�����ł͖����ō����グ�Ă��܂��B";
}
elseif ($delpriority == "express") //No MI service
{
include "296_express.php";
$jptextpriority="�G�N�X�v���X(Express)";
$tatfinalexpressplain="";
$jpsetext="$tatfinalexpressplain";
$notes="\n
���������ӂ�����������
";
$noteshtml="<img src=img/mailimages/headingtab2.gif alt=>";

$jpsetexthtml="
$tatfinalexpressplainhtml
<img src=\"img/common/squere/6x6enago.gif\" alt=\"\" /> ���������˗�����邨�q�l�́A���̃o�i�[�u�ڍׂȌ��ς������]���܂� / �˗����m�肵�܂��v��育�A�����������B<br />
";

$mrcautomsg="�t���܂�:���e�]���J���e�̃T���v�����������������B
�T���v����URL:http://www.enago.jp/1002.htm";
$mrchtmlmsg="<strong class=txtBrown>�t���܂�</strong><br />���e�]���J���e��<a href=\"1002.htm\" target=\"blank\" class=\"contentlink\">�T���v��</a>���������������B";
}
elseif($delpriority == "superexpress")
{
include "297_superexpress.php";
$jptextpriority="�X�[�p�[�G�N�X�v���X(Super Express)";
$tatfinalexpressplain="";
$jpsetext="$tatfinalexpressplain";
$notes="\n
���������ӂ�����������
";
$noteshtml="<img src=img/mailimages/headingtab2.gif alt=>";

$jpsetexthtml="
$tatfinalexpressplainhtml
<img src=\"img/common/squere/6x6enago.gif\" alt=\"\" /> ���������˗�����邨�q�l�́A���̃o�i�[�u�ڍׂȌ��ς������]���܂� / �˗����m�肵�܂��v��育�A�����������B<br />
";

$mrcautomsg="�t���܂�:���e�]���J���e�̃T���v�����������������B
�T���v����URL:http://www.enago.jp/1002.htm";
$mrchtmlmsg="<strong class=txtBrown>�t���܂�</strong><br />���e�]���J���e��<a href=\"1002.htm\" target=\"blank\" class=\"contentlink\">�T���v��</a>���������������B";

}
else
{
	include "298_lastminute.php";
	$mrcautomsg="�t���܂�:���e�]���J���e�̃T���v�����������������B
	�T���v����URL:http://www.enago.jp/1002.htm";
	$mrchtmlmsg="<strong class=txtBrown>�t���܂�</strong><br />���e�]���J���e��<a href=\"1002.htm\" target=\"blank\" class=\"contentlink\">�T���v��</a>���������������B";
	$jptextpriority="�삯���ݏ�ԃv�����iLast Minute�j";
	$tatfinalexpressplain="";
	$jpsetext="$tatfinalexpressplain";
	$notes="\n
	���������ӂ�����������";
	$noteshtml="<img src=img/mailimages/headingtab2.gif alt=>";
	
	$jpsetexthtml="$tatfinalexpressplainhtml
	<img src=\"img/common/squere/6x6enago.gif\" alt=\"\" /> ���������˗�����邨�q�l�́A���̃o�i�[�u�ڍׂȌ��ς������]���܂� / �˗����m�肵�܂��v��育�A�����������B<br />
	";												
}
//gross amount calculation-STEP1-subject identification-common
if ($subjectarea == "medicine")
{
$rate=$ratebiosciences;
$jpsubjectarea="��w�E��w (Medicine)";
$advrate=$advratebiosciences;}
elseif ($subjectarea == "biosciences")
{
$rate=$ratebiosciences;
$jpsubjectarea="�����w�E�_�w�E���Ȋw�Ȃ� (Biosciences)";
$advrate=$advratebiosciences;}
elseif ($subjectarea == "physics")
{
$rate=$ratephysics;
$jpsubjectarea="�����w�E���w�E�H�w�E���Ȋw�Ȃ� (Physical Sciences and Engineering)";
$advrate=$advratephysics;
}
elseif ($subjectarea == "art")
{
$rate=$rateart;
$jpsubjectarea="�l��/�Љ�Ȋw�E�|�p�Ȃ� (The Arts, Humanities, and Social Sciences)";
$advrate=$advrateart;
}
else
{
$rate=$rateeco;
$jpsubjectarea="�o�ϊw�E�o�c�w�E�r�W�l�X�Ȃ� (Economics and Business)";
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
				<td class=\"cell1 cell1bg\">�����Ƃ��񂵂�ۏؒǉ�����</td>
				<td class=cell2>".number_format($mifamount)."�~ <span class=\"reliable green\"><i>��</i><i>��</i><i>��</i>���񂵂�</span></td>";
				$mifautobreakup="�����Ƃ��񂵂�ۏؒǉ������F".number_format($mifamount)."�~";
				
				$mifyesnofree="<strong class=txtBrown>�����ŕt���܂�</strong><br />
				�A�h�o���X�p���Z���ɂ͖�����<a href=\"after-sales-service.htm\" target=\"blank\" class=\"contentlink\">���񂵂�ۏ�</a>���t���Ă��܂��B1�N�Ԃ̕ۏ؊��Ԓ��́A�C���������������e�����x�ł��čZ���������܂��B<strong>�������A�ꕔ�����p���������Ȃ��ꍇ���������܂��B�ڂ�����<a href=\"after-sales-service.htm\" target=\"blank\" class=\"contentlink\">���񂵂�ۏ�</a>�̃y�[�W���������������B</strong>";
			
			$mifyesnofree_auto="�y���񂵂�ۏ؁z 
			�����ŕt���܂�:�A�h�o���X�p���Z���ɂ͖����ł��񂵂�ۏ؂��t���Ă��܂��B1�N�Ԃ̕ۏ؊��Ԓ��́A�C���������������e�����x�ł��čZ���������܂��B�������A�ꕔ�����p���������Ȃ��ꍇ���������܂��B�ڂ����͂��񂵂�ۏ؂̃y�[�W���������������BURL:http://www.enago.jp/after-sales-service.htm";
				
				$mifyesnopaid="<strong class=txtBrown>�t���܂�</strong><br />���e��A���ǎ҃R�����g���m�F���Ȃ���̍čZ����A���҂��獸�ǎ҂ւ̉񓚕��̍Z���ȂǁA���L���ē��e���T�|�[�g���܂��B�ڂ�����<a href=\"revision-support.htm\" target=\"blank\" class=\"contentlink\">�����Ƃ��񂵂�ۏ�</a>���������������B";
			
			$mifyesnopaid_auto="�y�����Ƃ��񂵂�ۏ؁z 
			�t���܂�:���e��A���ǎ҃R�����g���m�F���Ȃ���̍čZ����A���҂��獸�ǎ҂ւ̉񓚕��̍Z���ȂǁA���L���ē��e���T�|�[�g���܂��B�ڂ����͂����Ƃ��񂵂�ۏ؂��������������BURL:http://www.enago.jp/revision-support.htm";
			
				$miffreehtmlmsg="<td class=\"cell1 cell1bg\">���񂵂�ۏ�</td>
				  <td class=cell2>��]���܂��B</td>";
				  $miffreeautomsg="���񂵂�ۏ؁F��]���܂��B";
				
				$mifpaidhtmlmsg="<td class=\"cell1last cell1bg\">�����Ƃ��񂵂�ۏ�</td>
				  <td class=cell2last>��]���܂��B</td>";
				  $mifpaidautomsg="�����Ƃ��񂵂�ۏ؁F��]���܂��B";
				}
			else // IF MI NO OPTION SELECTED
			{
				$mifyesnofree="<strong class=txtBrown>�����ŕt���܂�</strong><br />
				�A�h�o���X�p���Z���ɂ͖����ł��񂵂�ۏ؂��t���Ă��܂��B1�N�Ԃ̕ۏ؊��Ԓ��́A�C���������������e�����x�ł��čZ���������܂��B<strong>�������A�ꕔ�����p���������Ȃ��ꍇ���������܂��B�ڂ�����<a href=\"after-sales-service.htm\" target=\"blank\" class=\"contentlink\">���񂵂�ۏ�</a>�̃y�[�W���������������B</strong>";
		
		$mifyesnofree_auto="�y���񂵂�ۏ؁z 
		�����ŕt���܂��B:�A�h�o���X�p���Z���ɂ͖����ł��񂵂�ۏ؂��t���Ă��܂��B1�N�Ԃ̕ۏ؊��Ԓ��́A�C���������������e�����x�ł��čZ���������܂��B�������A�ꕔ�����p���������Ȃ��ꍇ���������܂��B�ڂ����͂��񂵂�ۏ؂̃y�[�W���������������BURL:http://www.enago.jp/after-sales-service.htm";
			
			$mifyesnopaid="<strong class=txtBrown>���I�т��������܂���ł���</strong><br />��L�̍��v���z��1�ꂠ����4�~�̒ǉ������ŁA���e��̍��ǃR�����g�Ή��T�[�r�X�܂ŃJ�o�[����ۏ؂�t���邱�Ƃ��ł��܂��B�ڂ�����<a href=\"revision-support.htm\" target=\"blank\" class=\"contentlink\">�����Ƃ��񂵂�ۏ�</a>�̃y�[�W���������������B";
		
		$mifyesnopaid_auto="�y�����Ƃ��񂵂�ۏ؁z
		���I�т��������܂���ł����B:��L�̍��v���z��1�ꂠ����4�~�̒ǉ������ŁA���e��̍��ǃR�����g�Ή��T�[�r�X�܂ŃJ�o�[����ۏ؂�t���邱�Ƃ��ł��܂��B�ڂ����͂����Ƃ��񂵂�ۏ؂̃y�[�W���������������BURL:http://www.enago.jp/revision-support.htm";
		
			$miffreehtmlmsg="<td class=\"cell1 cell1bg\">���񂵂�ۏ�</td>
			  <td class=cell2>��]���܂��B</td>";
			  $miffreeautomsg="���񂵂�ۏ؁F��]���܂��B";
			
			$mifpaidhtmlmsg="<td class=\"cell1last cell1bg\">�����Ƃ��񂵂�ۏ�</td>
			  <td class=cell2last>��]���܂���B</td>";
			  $mifpaidautomsg="�����Ƃ��񂵂�ۏ؁F��]���܂���B";
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
    <td class=\"cell1 cell1bg\">���񂵂�ۏؒǉ�����</td>
    <td class=cell2>".number_format($mifamount)."�~ <span class=\"reliable\">���񂵂�</span></td>";
	$mifautobreakup="���񂵂�ۏؒǉ������F".number_format($mifamount)."�~";
	
	$mifyesnofree="<strong class=txtBrown>�t���܂�</strong><br />	�[�i��120���Ԃ́A�C���������������e�����x�ł��čZ���������܂��B�������A�ꕔ�����p���������Ȃ��ꍇ���������܂��B�ڂ�����<a href=\"after-sales-service.htm\" target=\"blank\" class=\"contentlink\">���񂵂�ۏ�</a>�̃y�[�W���������������B";

$mifyesnofree_auto="�y���񂵂�ۏ؁z 
�t���܂��B:�[�i��120���Ԃ́A�C���������������e�����x�ł��čZ���������܂��B�������A�ꕔ�����p���������Ȃ��ꍇ���������܂��B�ڂ����͂��񂵂�ۏ؂̃y�[�W���������������BURL:http://www.enago.jp/after-sales-service.htm";
	
	$mifyesnopaid="<strong class=txtBrown>�����p�ɂȂ�܂���B</strong><br />
	�����Ƃ��񂵂�ۏ؁i���ǑΉ��ۏ؁j�́A�A�h�o���X�p���Z���������p�̂��q�l����̃T�[�r�X�ƂȂ�܂��B�ڂ�����<a href=\"after-sales-service.htm\" target=\"blank\" class=\"contentlink\">���񂵂�ۏ�</a>���������������B";

$mifyesnopaid_auto="�y�����Ƃ��񂵂�ۏ؁z 
�����p�ɂȂ�܂���B:�����Ƃ��񂵂�ۏ؁i���ǑΉ��ۏ؁j�́A�A�h�o���X�p���Z���������p�̂��q�l����̃T�[�r�X�ƂȂ�܂��B�ڂ����͂��񂵂�ۏ؂��������������BURL:http://www.enago.jp/after-sales-service.htm";


$miffreehtmlmsg="<td class=\"cell1 cell1bg\">���񂵂�ۏ�</td>
      <td class=cell2>��]���܂��B</td>";
	  $miffreeautomsg="���񂵂�ۏ؁F��]���܂��B";
	  
	
	$mifpaidhtmlmsg="<td class=\"cell1last cell1bg\">�����Ƃ��񂵂�ۏ�</td>
      <td class=cell2last>�����p�ɂȂ�܂���B</td>";
	  $mifpaidautomsg="�����Ƃ��񂵂�ۏ؁F�����p�ɂȂ�܂���B";
	}
	else // IF MI NO OPTION SELECTED
	{
		$mifyesnofree="<strong class=txtBrown>���I�т��������܂���ł����B</strong><br />
		1�ꂠ����2�~�̒ǉ������ł��񂵂�ۏ؁i�čZ���ۏ؁j��t���邱�Ƃ��ł��܂��̂ŁA����]�̕��͂��˗����ɂ��I�т��������B�ۏ؂�t����ƁA�[�i��120���Ԃ́A�C���������������e�����x�ł��čZ���������܂��B";

$mifyesnofree_auto="�y���񂵂�ۏ؁z 
���I�т��������܂���ł����B:1�ꂠ����2�~�̒ǉ������ł��񂵂�ۏ؁i�čZ���ۏ؁j��t���邱�Ƃ��ł��܂��̂ŁA����]�̕��͂��˗����ɂ��I�т��������B�ۏ؂�t����ƁA�[�i��120���Ԃ́A�C���������������e�����x�ł��čZ���������܂��B";
	
	$mifyesnopaid="<strong class=txtBrown>�����p�ɂȂ�܂���B</strong><br />
	�����Ƃ��񂵂�ۏ؁i���ǑΉ��ۏ؁j�́A�A�h�o���X�p���Z���������p�̂��q�l����̃T�[�r�X�ƂȂ�܂��B�ڂ�����<a href=\"after-sales-service.htm\" target=\"blank\" class=\"contentlink\">���񂵂�ۏ�</a>���������������B";

$mifyesnopaid_auto="�y�����Ƃ��񂵂�ۏ؁z 
�����p�ɂȂ�܂���B:�����Ƃ��񂵂�ۏ؁i���ǑΉ��ۏ؁j�́A�A�h�o���X�p���Z���������p�̂��q�l����̃T�[�r�X�ƂȂ�܂��B�ڂ����͂��񂵂�ۏ؂��������������BURL:http://www.enago.jp/after-sales-service.htm";

$miffreehtmlmsg="<td class=\"cell1 cell1bg\">���񂵂�ۏ�</td>
      <td class=cell2>��]���܂���B</td>";
	  $miffreeautomsg="���񂵂�ۏ؁F��]���܂���B";
	  
	
	$mifpaidhtmlmsg="<td class=\"cell1last cell1bg\">�����Ƃ��񂵂�ۏ�</td>
      <td class=cell2last>�����p�ɂȂ�܂���B</td>";
	  $mifpaidautomsg="�����Ƃ��񂵂�ۏ؁F�����p�ɂȂ�܂���B";
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
		$discounttext="<img src=\"img/common/transparent.gif\" width=\"11\" height=\"14\" alt=\"�p���Z���E�p���Z�{�E�p��_���Z��\" class=\"topnewclient\">�V�K���q�l����";
				$discounttextauto="�V�K���q�l����";
	}
	else
	{
		$ratenew = $volumedicount;	
		$discounttext="<img src=\"img/common/transparent.gif\" width=\"11\" height=\"14\" alt=\"�p���Z���E�p���Z�{�E�p��_���Z��\" class=\"topnewclient\">�{�����[������";
$discounttextauto="�{�����[������";
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
				<td class=\"cell1 cell1bg\">�����Ƃ��񂵂�ۏؒǉ�����</td>
				<td class=cell2>".number_format($mifamount)."�~ <span class=\"reliable green\"><i>��</i><i>��</i><i>��</i>���񂵂�</span></td>";
				$mifautobreakup="�����Ƃ��񂵂�ۏؒǉ������F".number_format($mifamount)."�~";
				
				$mifyesnofree="<strong class=txtBrown>�����ŕt���܂�</strong><br />
				�A�h�o���X�p���Z���ɂ͖�����<a href=\"after-sales-service.htm\" target=\"blank\" class=\"contentlink\">���񂵂�ۏ�</a>���t���Ă��܂��B1�N�Ԃ̕ۏ؊��Ԓ��́A�C���������������e�����x�ł��čZ���������܂��B<strong>�������A�ꕔ�����p���������Ȃ��ꍇ���������܂��B�ڂ�����<a href=\"after-sales-service.htm\" target=\"blank\" class=\"contentlink\">���񂵂�ۏ�</a>�̃y�[�W���������������B</strong>";
			
			$mifyesnofree_auto="�y���񂵂�ۏ؁z 
			�����ŕt���܂�:�A�h�o���X�p���Z���ɂ͖����ł��񂵂�ۏ؂��t���Ă��܂��B1�N�Ԃ̕ۏ؊��Ԓ��́A�C���������������e�����x�ł��čZ���������܂��B�������A�ꕔ�����p���������Ȃ��ꍇ���������܂��B�ڂ����͂��񂵂�ۏ؂̃y�[�W���������������BURL:http://www.enago.jp/after-sales-service.htm";
				
				$mifyesnopaid="<strong class=txtBrown>�t���܂�</strong><br />���e��A���ǎ҃R�����g���m�F���Ȃ���̍čZ����A���҂��獸�ǎ҂ւ̉񓚕��̍Z���ȂǁA���L���ē��e���T�|�[�g���܂��B�ڂ�����<a href=\"revision-support.htm\" target=\"blank\" class=\"contentlink\">�����Ƃ��񂵂�ۏ�</a>���������������B";
			
			$mifyesnopaid_auto="�y�����Ƃ��񂵂�ۏ؁z 
			�t���܂�:���e��A���ǎ҃R�����g���m�F���Ȃ���̍čZ����A���҂��獸�ǎ҂ւ̉񓚕��̍Z���ȂǁA���L���ē��e���T�|�[�g���܂��B�ڂ����͂����Ƃ��񂵂�ۏ؂��������������BURL:http://www.enago.jp/revision-support.htm";
			
				$miffreehtmlmsg="<td class=\"cell1 cell1bg\">���񂵂�ۏ�</td>
				  <td class=cell2>��]���܂��B</td>";
				  $miffreeautomsg="���񂵂�ۏ؁F��]���܂��B";
				
				$mifpaidhtmlmsg="<td class=\"cell1last cell1bg\">�����Ƃ��񂵂�ۏ�</td>
				  <td class=cell2last>��]���܂��B</td>";
				  $mifpaidautomsg="�����Ƃ��񂵂�ۏ؁F��]���܂��B";
				}
			else // IF MI NO OPTION SELECTED
			{
				$mifyesnofree="<strong class=txtBrown>�����ŕt���܂��B</strong><br />
				�A�h�o���X�p���Z���ɂ͖����ł��񂵂�ۏ؂��t���Ă��܂��B1�N�Ԃ̕ۏ؊��Ԓ��́A�C���������������e�����x�ł��čZ���������܂��B<strong>�������A�ꕔ�����p���������Ȃ��ꍇ���������܂��B�ڂ�����<a href=\"after-sales-service.htm\" target=\"blank\" class=\"contentlink\">���񂵂�ۏ�</a>�̃y�[�W���������������B</strong>";
		
		$mifyesnofree_auto="�y���񂵂�ۏ؁z 
		�����ŕt���܂��B:�A�h�o���X�p���Z���ɂ͖����ł��񂵂�ۏ؂��t���Ă��܂��B1�N�Ԃ̕ۏ؊��Ԓ��́A�C���������������e�����x�ł��čZ���������܂��B�������A�ꕔ�����p���������Ȃ��ꍇ���������܂��B�ڂ����͂��񂵂�ۏ؂̃y�[�W���������������BURL:http://www.enago.jp/after-sales-service.htm";
			
			$mifyesnopaid="<strong class=txtBrown>���I�т��������܂���ł����B</strong><br />��L�̍��v���z��1�ꂠ����4�~�̒ǉ������ŁA���e��̍��ǃR�����g�Ή��T�[�r�X�܂ŃJ�o�[����ۏ؂�t���邱�Ƃ��ł��܂��B�ڂ�����<a href=\"revision-support.htm\" target=\"blank\" class=\"contentlink\">�����Ƃ��񂵂�ۏ�</a>�̃y�[�W���������������B";
		
		$mifyesnopaid_auto="�y�����Ƃ��񂵂�ۏ؁z
		���I�т��������܂���ł����B:��L�̍��v���z��1�ꂠ����4�~�̒ǉ������ŁA���e��̍��ǃR�����g�Ή��T�[�r�X�܂ŃJ�o�[����ۏ؂�t���邱�Ƃ��ł��܂��B�ڂ����͂����Ƃ��񂵂�ۏ؂̃y�[�W���������������BURL:http://www.enago.jp/revision-support.htm";
		
			$miffreehtmlmsg="<td class=\"cell1 cell1bg\">���񂵂�ۏ�</td>
			  <td class=cell2>��]���܂��B</td>";
			  $miffreeautomsg="���񂵂�ۏ؁F��]���܂��B";
			
			$mifpaidhtmlmsg="<td class=\"cell1last cell1bg\">�����Ƃ��񂵂�ۏ�</td>
			  <td class=cell2last>��]���܂���B</td>";
			  $mifpaidautomsg="�����Ƃ��񂵂�ۏ؁F��]���܂���B";
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
    <td class=\"cell1 cell1bg\">���񂵂�ۏؒǉ�����</td>
    <td class=cell2>".number_format($mifamount)."�~ <span class=\"reliable\">���񂵂�</span></td>";
	$mifautobreakup="���񂵂�ۏؒǉ������F".number_format($mifamount)."�~";
	
	$mifyesnofree="<strong class=txtBrown>�t���܂�</strong><br />	�[�i��120���Ԃ́A�C���������������e�����x�ł��čZ���������܂��B�������A�ꕔ�����p���������Ȃ��ꍇ���������܂��B�ڂ�����<a href=\"after-sales-service.htm\" target=\"blank\" class=\"contentlink\">���񂵂�ۏ�</a>�̃y�[�W���������������B";

$mifyesnofree_auto="�y���񂵂�ۏ؁z 
�t���܂��B:�[�i��120���Ԃ́A�C���������������e�����x�ł��čZ���������܂��B�������A�ꕔ�����p���������Ȃ��ꍇ���������܂��B�ڂ����͂��񂵂�ۏ؂̃y�[�W���������������BURL:http://www.enago.jp/after-sales-service.htm";
	
	$mifyesnopaid="<strong class=txtBrown>�����p�ɂȂ�܂���B</strong><br />
	�����Ƃ��񂵂�ۏ؁i���ǑΉ��ۏ؁j�́A�A�h�o���X�p���Z���������p�̂��q�l����̃T�[�r�X�ƂȂ�܂��B�ڂ�����<a href=\"revision-support.htm\" target=\"blank\" class=\"contentlink\">�����Ƃ��񂵂�ۏ�</a>���������������B";

$mifyesnopaid_auto="�y�����Ƃ��񂵂�ۏ؁z 
�����p�ɂȂ�܂���B:�����Ƃ��񂵂�ۏ؁i���ǑΉ��ۏ؁j�́A�A�h�o���X�p���Z���������p�̂��q�l����̃T�[�r�X�ƂȂ�܂��B�ڂ����͂����Ƃ��񂵂�ۏ؂��������������BURL:http://www.enago.jp/revision-support.htm";


$miffreehtmlmsg="<td class=\"cell1 cell1bg\">���񂵂�ۏ�</td>
      <td class=cell2>��]���܂��B</td>";
	  $miffreeautomsg="���񂵂�ۏ؁F��]���܂��B";
	  
	
	$mifpaidhtmlmsg="<td class=\"cell1last cell1bg\">�����Ƃ��񂵂�ۏ�</td>
      <td class=cell2last>�����p�ɂȂ�܂���B</td>";
	  $mifpaidautomsg="�����Ƃ��񂵂�ۏ؁F�����p�ɂȂ�܂���B";
	}
	else // IF MI NO OPTION SELECTED
	{
		$mifyesnofree="<strong class=txtBrown>���I�т��������܂���ł����B</strong><br />
		1�ꂠ����2�~�̒ǉ������ł��񂵂�ۏ؁i�čZ���ۏ؁j��t���邱�Ƃ��ł��܂��̂ŁA����]�̕��͂��˗����ɂ��I�т��������B�ۏ؂�t����ƁA�[�i��120���Ԃ́A�C���������������e�����x�ł��čZ���������܂��B";

$mifyesnofree_auto="�y���񂵂�ۏ؁z 
���I�т��������܂���ł����B:1�ꂠ����2�~�̒ǉ������ł��񂵂�ۏ؁i�čZ���ۏ؁j��t���邱�Ƃ��ł��܂��̂ŁA����]�̕��͂��˗����ɂ��I�т��������B�ۏ؂�t����ƁA�[�i��120���Ԃ́A�C���������������e�����x�ł��čZ���������܂��B";
	
	$mifyesnopaid="<strong class=txtBrown>�����p�ɂȂ�܂���B</strong><br />
	�����Ƃ��񂵂�ۏ؁i���ǑΉ��ۏ؁j�́A�A�h�o���X�p���Z���������p�̂��q�l����̃T�[�r�X�ƂȂ�܂��B�ڂ�����<a href=\"revision-support.htm\" target=\"blank\" class=\"contentlink\">�����Ƃ��񂵂�ۏ�</a>���������������B";

$mifyesnopaid_auto="�y�����Ƃ��񂵂�ۏ؁z 
�����p�ɂȂ�܂���B:�����Ƃ��񂵂�ۏ؁i���ǑΉ��ۏ؁j�́A�A�h�o���X�p���Z���������p�̂��q�l����̃T�[�r�X�ƂȂ�܂��B�ڂ����͂����Ƃ��񂵂�ۏ؂��������������BURL:http://www.enago.jp/revision-support.htm";

$miffreehtmlmsg="<td class=\"cell1 cell1bg\">���񂵂�ۏ�</td>
      <td class=cell2>��]���܂���B</td>";
	  $miffreeautomsg="���񂵂�ۏ؁F��]���܂���B";
	  
	
	$mifpaidhtmlmsg="<td class=\"cell1last cell1bg\">�����Ƃ��񂵂�ۏ�</td>
      <td class=cell2last>�����p�ɂȂ�܂���B</td>";
	  $mifpaidautomsg="�����Ƃ��񂵂�ۏ؁F�����p�ɂȂ�܂���B";
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
	
$discounttext="�{�����[������";
$discounttextauto="�{�����[������";
	
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

$jptextpremium="(PDF��������" . $ratepdf ."%)";
$notes="\n
���������ӂ�����������
";
$formatnoteplain="
�� PDF�t�@�C���ň˗��𒸂����ꍇ�A�[�i���e�͂o�c�e�Ƃl�r���[�h��2��ނ̌`�����炨�I�ђ����܂��B
PDF�ł̔[�i�͎菑���Z���ƂȂ�܂��B�ڍׂ�PDF�p���Z��(http://www.enago.jp/108_b.htm)���������������B
�� �菑���iPDF��PDF�j�p���Z���ł́A�A�h�o���X�p���Z���T�[�r�X�����I�ђ����܂���B";
$noteshtml="<img src=img/mailimages/headingtab2.gif alt=>";

$formatnoteplainhtml="<img src=\"img/common/squere/6x6enago.gif\" alt=\"\" /> 
PDF�t�@�C���ň˗��𒸂����ꍇ�A�[�i���e�͂o�c�e�Ƃl�r���[�h��2��ނ̌`�����炨�I�ђ����܂��B
PDF�ł̔[�i�͎菑���Z���ƂȂ�܂��B�ڍׂ�PDF�p���Z��(http://www.enago.jp/108_b.htm)���������������B<br / >
<img src=\"img/common/squere/6x6enago.gif\" alt=\"\" /> �菑���iPDF��PDF�j�p���Z���ł́A�A�h�o���X�p���Z���T�[�r�X�����I�ђ����܂���B<br />";
}
elseif ($format == "excel")
{
$jpformat="Excel/PowerPoint (.xls/.ppt)";
$premium=($grossamount*$rateexcel);
$netamount=$grossamount+$premium-$newdiscount;
$advpremium=($advgrossamount*$advrateexcel);
$advnetamount=$advgrossamount+$advpremium-$advnewdiscount;
$jptextpremium="(�p���[�|�C���g�^�G�N�Z����������" . $rateexcel ."%)";
}
elseif ($format == "latexword")
{
$jpformat="TeX��MS���[�h�p���Z��";
$premium=($grossamount*$ratelatex);

$netamount=$grossamount+$premium-$newdiscount;

$advpremium=($advgrossamount*$advratelatex);

$advnetamount=$advgrossamount+$advpremium-$advnewdiscount;

$jptextpremium="(TeX��������" . $ratelatex ."%)";
$notes="\n
���������ӂ�����������
";

$formatnoteplain="�� TeX�t�@�C���Ō��e�𒸂����ꍇ�A�[�i���e��TeX�Ƃl�r���[�h��2��ނ̌`�����炨�I�т��������܂��B";

$noteshtml="<img src=img/mailimages/headingtab2.gif alt=>";
$formatnoteplainhtml="<img src=\"img/common/squere/6x6enago.gif\" alt=\"\" /> TeX�t�@�C���Ō��e�𒸂����ꍇ�A�[�i���e��TeX�Ƃl�r���[�h��2��ނ̌`�����炨�I�т��������܂��B<br />";
}
else
{
$jpformat="�_�C���N�gTeX�p���Z��";
$netamount=$grossamount;
$premium=($grossamount*$ratelatextotex);

$netamount=$grossamount+$premium-$newdiscount;
$advpremium=($advgrossamount*$advratelatextotex);

$advnetamount=$advgrossamount+$advpremium-$advnewdiscount;
$ratelatextotexdisplay=$ratelatextotex*100;
$jptextpremium=" (�_�C���N�gTeX��������" . $ratelatextotexdisplay ."%)";
$notes="\n
���������ӂ�����������
";
$formatnoteplain="
�� TeX�t�@�C���Ō��e�𒸂����ꍇ�A�[�i���e��TeX�Ƃl�r���[�h��
�Q��ނ̌`�����炨�I�ђ����܂��B�_�C���N�gTeX�iTeX��TeX�j�p���Z���ɂ�
30���̊���������������܂��B�ڍׂ�TeX�p���Z���ihttp://www.enago.jp/108_c.htm�j
���������������B";
$noteshtml="<img src=img/mailimages/headingtab2.gif alt=>";
$formatnoteplainhtml="
<img src=\"img/common/squere/6x6enago.gif\" alt=\"\" /> TeX�t�@�C���Ō��e�𒸂����ꍇ�A�[�i���e��TeX�Ƃl�r���[�h��
�Q��ނ̌`�����炨�I�ђ����܂��B�_�C���N�gTeX�iTeX��TeX�j�p���Z���ɂ�30���̊���������������܂��B�ڍׂ�<a href=http://www.enago.jp/108_c.htm>TeX�p���Z��</a>
���������������B<br />";
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
		
			$tatfinal="��1�� (���}���̂��q�l�́A���₢���킹���������B)";	
		}
	elseif  ($wordcount > 1000 && $wordcount <= 2000 )
	{
			$tatfinal="��2�� (���}���̂��q�l�́A���₢���킹���������B)";
	}
	
	elseif  ($wordcount > 2000 && $wordcount <= 6000 )
	{
			$tatfinal="��4�� (���}���̂��q�l�́A���₢���킹���������B)";
	}
	
	elseif  ($wordcount > 6000 && $wordcount <= 10000 )
	{
			$tatfinal="��7�� (���}���̂��q�l�́A���₢���킹���������B)";
	}
	else
	{
			$tatfinal="���₢���킹���������B";
	}*/
	
	//
	
	if ($delpriority_advance == "standard")
	{
		$tateco=ceil($wordcount/1500);
		$tatfinalhtml="�� $tateco �� (���}���̂��q�l�́A���₢���킹���������B)";
		$tatfinal="�� $tateco �� (���}���̂��q�l�́A���₢���킹���������B)";
		$ratefin=$advrate;
		$netamountfin=$advnetamount;
		$actualDiscount=number_format($advnewdiscount)."�~";
		$advgrossamount=number_format($advgrossamount);
	}
	else if ($delpriority_advance == "express")
	{
		$tateco=ceil($wordcount/2000);
		$tatfinalhtml="�� $tateco �� (���}���̂��q�l�́A���₢���킹���������B)";
		$tatfinal="�� $tateco �� (���}���̂��q�l�́A���₢���킹���������B)";
		$ratefin=$advrate;
		$netamountfin=$advnetamount;
		$actualDiscount=number_format($advnewdiscount)."�~";
		$advgrossamount=number_format($advgrossamount);
	}
	else if ($delpriority_advance == "superexpress")
	{
		$tateco=ceil($wordcount/2500);
		$tatfinalhtml="�� $tateco �� (���}���̂��q�l�́A���₢���킹���������B)";
		$tatfinal="�� $tateco �� (���}���̂��q�l�́A���₢���킹���������B)";
		$ratefin=$advrate;
		$netamountfin=$advnetamount;
		$actualDiscount=number_format($advnewdiscount)."�~";
		$advgrossamount=number_format($advgrossamount);
	}
	else
	{
		
		$tatfinalhtml="���2500�P��ȏ�Z�����܂��B�ڂ����͂��₢���킹���������B";
		$tatfinal="���2500�P��ȏ�Z�����܂��B�ڂ����͂��₢���킹���������B";
		$ratefin=$advrate;
		$netamountfin=$advnetamount;
		$actualDiscount=number_format($advnewdiscount)."�~";
		$advgrossamount=number_format($advgrossamount);

	}
	
	// Place where we had added advance mi code
	
	if ($advpremium==0)
	{}
	else
	{
		$advtemp1premium=number_format($advpremium)."�~". $jptextpremium;
		$chargesfileformat_auto="�ǉ�����: $advtemp1premium";	
		$chargesfileformat="<td class=\"cell1 cell1bg\">�ǉ�����</td>
			<td class=cell2>$advtemp1premium</td>";	
	}
	
	//
	
	if ($advnewdiscount==0)
	{}
	else
	{
		$advtemp1newdiscount=$actualDiscount. $jptextdiscount;
		$advtemp1newdiscountauto=$actualDiscount. $jptextdiscountauto;
		$maincalculationplainfin="����: $advtemp1newdiscountauto";
		$maincalculationplainfinhtml="<td class=\"cell1 cell1bg\">����</td>
			<td class=cell2>$advtemp1newdiscount</td>";

	}

	//
	
	$grossfin=$advgrossamount."�~";
	$maingrossfin="<td class=\"cell1 cell1bg\">��{����</td>
		<td class=\"cell2\">$grossfin</td>";
	$maingrossfin_auto="��{����:$grossfin";

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
$jptextworkinghrslower="����";
}
elseif ($lowertathoursindecimals <= 6)
{
$lowerhrsadded="6";
$lowerdaysadded="0";
$jptextworkinghrslower="����";

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
$jptextworkinghrsupper="����";
}
elseif ($uppertathoursindecimals <= 6)
{
$upperhrsadded="6";
$upperdaysadded="0";
$jptextworkinghrsupper="����";
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
		$tatfinal= "1 ����6���� �i���j�������j
		�y24���Ԉȓ��ł̔[�i��K�v�Ƃ��邨�}���̈Č��́A
		���e�̒P�ꐔ�Ɋւ�炸�A�S�āu�삯���ݏ�ԃv�����v
		�ƂȂ�܂��B�z
		";
		$tatfinalhtml= "1 �� ��6 ���� �i���j�������j
	   �y24���Ԉȓ��ł̔[�i��K�v�Ƃ��邨�}���̈Č��́A
		���e�̒P�ꐔ�Ɋւ�炸�A�S�āu�삯���ݏ�ԃv�����v
		�ƂȂ�܂��B�z
		";
		
				} 
else
{
$tatfinal= $finaluppertat . "�� " . $upperhrsadded . $jptextworkinghrsupper . " �ȓ�"."�i���j�������j";
$tatfinalhtml=$tatfinal;

}
} 
else

{
if ($delpriority=="economy" || $delpriority == "lastminute")
{
$tatfinal=$finaluppertat . "�� " . $upperhrsadded . $jptextworkinghrsupper . " ���� " . $finallowertat . "�� " . $lowerhrsadded . $jptextworkinghrslower . " �ȓ�"."�i���j�������j";	
$tatfinalhtml=$tatfinal;
}
else {
 $tatfinal=$finaluppertat . "�� " . $upperhrsadded . $jptextworkinghrsupper."�i���j�������j";}
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
	{$temp1premium=number_format($premium)."�~ ".$jptextpremium;
		$chargesfileformat_auto="�ǉ�����: $temp1premium";	

	$chargesfileformat="<td class=\"cell1 cell1bg\">�ǉ�����</td>
		<td class=cell2>$temp1premium</td>";
	
	}

if ($newdiscount==0)
{}
else
	{
		$temp1newdiscount=number_format($newdiscount)."�~ ".$jptextdiscount;
		$temp1newdiscountauto=number_format($newdiscount)."�~ ".$jptextdiscountauto;
	$maincalculationplainfin="����: $temp1newdiscountauto";
	
	$maincalculationplainfinhtml="<td class=\"cell1 cell1bg\">����</td>
		<td class=cell2>$temp1newdiscount</td>";
	
	
	}

$grossfin=number_format($grossamount)."�~";

$maingrossfin="<td class=\"cell1 cell1bg\">��{����</td>
    <td class=\"cell2\">$grossfin</td>";
$maingrossfin_auto="��{����:$grossfin";

}
//word count note-common
/*if ($wordcount > 10000) 
{
$notes="\n
���������ӂ�����������
";
$volumenoteplain="���{�����[���̂��邲�˗��̂��߁A�ڍׂ����L���̏�request@enago.com��
���ڂ��A�������������Ƃ��������߂��܂��B�[���ȂǏ_��ɂ��Ή����܂��B"; 
$noteshtml="<img src=img/mailimages/headingtab2.gif alt=>";
$volumenoteplainhtml="<img src=\"img/common/squere/6x6enago.gif\" alt=\"\" />  �{�����[���̂��邲�˗��̂��߁A�ڍׂ����L���̏�<a href=mailto:request@enago.com class=contentlink>request@enago.com</a>�ɒ��ڂ��A�������������Ƃ��������߂��܂��B�[���ȂǏ_��ɂ��Ή����܂��B"; 
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




$message ="$name �l

$kanjimessage_auto 

���̂��т́A�G�i�S�̎��������ς���t�H�[���������p���������A���肪�Ƃ��������܂��B
�ȉ��������ς��茋�ʂƂȂ�܂��B

�������ς��脪����������������������������������������������������������

�T�[�r�X: $jpservice 
�����v����: $ratefin �~ (1�ꂠ����)
$maingrossfin_auto 
$maincalculationplainfin
$chargesfileformat_auto
$mifautobreakup
���v: $netamountfin �~
��Ǝ���: $tatfinal

�� �����ӁF���e�����a���肵�����_�ł̍Z���҂̗\��󋵂ɂ���āA��L��Ǝ��Ԃ͕ϓ����܂��B
$formatnoteplain
$jpsetext $volumenoteplain

���I�v�V����������������������������������������������������������������

�y���e�]���J���e�z 
$mrcautomsg 

$coverlettermsg_auto \n
$mifyesnofree_auto \n
$mifyesnopaid_auto


�����̃X�e�b�v������������������������������������������������������������

���������m�肳��邨�q�l�A��萳�m�Ȃ����ς��������]�̂��q�l�́A
�ȉ��̃t�H�[�������L���E���M���Ă��������B
http://www.enago.jp/23.htm
���₢���킹�E������́Arequest@enago.com �܂ł��肢���܂�



�����q�l�̃t�H�[�����L�����e����������������������������������������������

��啪��: $jpsubjectarea
�t�@�C�����: $jpformat
�P�ꐔ: $wordcount
�[�i���x: $jptextpriority  
$miffreeautomsg \n
$mifpaidautomsg

============================================================
�p���Z���E�p���Z�{�G�i�S
�c�Ǝ��ԁi���[����t���ԁj�F�@24���ԉc�� 
�d�b��t���ԁF ���`�� 10:00-20:00, �y 12:30-21:30
���₢���킹E���[���A�h���X�F request@enago.com
Phone (�����ԍ�): 03-5050-5374
Fax (�����ԍ�): 03-4496-4934 
****************************************************
��ISO 9001:2008�i�i���}�l�W�����g�j �F�؎擾��
��ISO 27001:2013�i���Z�L�����e�B�j �F�؎擾��
�G�i�S�ł́A���łȏ��Z�L�����e�B�V�X�e����ێ�����
��Ђɗ^�����鍑�۔F��ISO27001:2013���擾���܂����B
���q�l�̌��e�����d�ɊǗ����Ă���܂��B
";

mb_send_mail($email, "[�p���Z��]�����ς��茋�ʁi���������ς���t�H�[���j".$subalert, $testalert.$message, "From: CRIMSON (Enago-Request)<$clientfromAdd>\r\n" );

/* mail("$email", "[�p���Z��]�����ς��茋�ʁi���������ς���t�H�[���j".$subalert, $testalert.$message,
  "From: CRIMSON (Enago-Request)<$clientfromAdd>\r\n" . 
  "Content-type: text/plain; charset=Shift_JIS");*/
}
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="ja" lang="ja">

    <!-- HEAD -->
    <head>
    <meta http-equiv="Content-Type" content="text/html; charset=shift_jis" />
<title>�p���Z���E�p��_���Z���E�p���Z�{�̃G�i�S::1���ŃN�C�b�N�m�F�̎��������ς���</title>
<meta name="description" content="�p���������̉p���Z�����i���Ŏ󒍁B�A�u�X�g���N�g�A�p��X�s�[�`���e�A�������\�������Ȃǂ̊w�p�����ق��A�򎖐\�������A�򎖋K�������A�Տ������񍐏��A�e��r�W�l�X�����A�p���z�[���y�[�W�̉p���Z���Ȃǂ�����܂��B">
<meta name="keywords" content="�p���Z��,�p��_���Z��,�p���Z�{,�p���Y��,�l�C�e�B�u�`�F�b�N,�p��Y��,�p�앶�Y��,�A�J�f�~�b�N���C�e�B���O">

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
<div id="breadcrumb"><span> <a href="http://www.enago.jp" class="prev">�z�[��</a>&nbsp; >> &nbsp;<a class="current">�����ς���</a></span></div></div>
  </div>
  

<div id="layout-wrapper">
  
  <div id="columns-wrapper">
    <div id="leftcontainer">
      	<div class="subnav ">
            <dl class="navTitle ie6PNGfix">
              <dt>�����ς���E������</dt>
            </dl>
            <div class="items" id="subnav">
          <a href="20.htm" class="first">�����ς���E������</a>
           <a href="21.htm">���������ς���v�Z</a>
           <a href="23.htm">�����ς���E�������t�H�[��</a>
         <script type="text/javascript" src="js/setpage.js"></script>
            <script type="application/javascript" language="javascript">setPage()</script>
        </div>
     
 <?php include("inc_sidebar_s.htm");?> 

    </div>
    
    </div>
    
    <div id="maincontentcontainer">
    <h1 class="commonPageTitle">���������ς���̌���</h1>
<div id="innerdiv">
                <table class="commonText" width="630" border="0" cellspacing="0" cellpadding="0">

<tr>
<td><div style="float:left"><?php echo $name ?> �l</div><div style="float:right"><?php echo date('Y') ?>�N<?php echo date('n') ?>��<?php echo date('j') ?>�� <?php echo $nowClock ?></div></td>
</tr>
<tr>
<td>&nbsp;</td>
</tr>
<!--<tr>
  <td>&nbsp;</td>
  <td class="txtBrown"><strong>2011�N6��15���܂ŁA���ʊ���������݂��Ă��܂��B</strong></td>
</tr> -->
<tr>
  <td><strong class="redc"><?php echo $kanjimessage ?></strong>���̂��т́A�G�i�S�̎��������ς���t�H�[���������p���������A���肪�Ƃ��������܂��B<br />
    �ȉ��������ς��茋�ʂƂȂ�܂��B</td>
</tr>
<tr>
<td valign="top">&nbsp;</td>
</tr>
<tr>
<td valign="top"><img src="img/common/squere/6x6enago.png" width="12" height="12" alt="�p���Z���E�p���Z�{" /><strong class="txt14"> �����ς���</strong></td>
</tr>

<tr>
<td valign="top" class="paddingtop10"><table class="tableborder" width="630" border="0" cellspacing="0" cellpadding="4">
  <tr>
    <td class="cell1 cell1bg">�T�[�r�X</td>
    <td class="cell2"><?php echo $jpservice ?></td>
    </tr>
  <tr>
    <td width="250" class="cell1 cell1bg">�����v����</td>
    <td class="cell2"><?php echo $ratefin ?>�~ (1�ꂠ����)</td>
    </tr>
  <tr><?php echo $maingrossfin ?></tr>
  <tr><?php echo $maincalculationplainfinhtml ?></tr>
  <tr><?php echo $chargesfileformat ?></tr>
  <tr><?php echo $mifhtmlbreakup ?></tr>
  <tr>
    <td class="cell1 cell2bg">���v</td>
    <td class="cell2"><?php echo $netamountfin?>�~</td>
    </tr>
  <tr>
    <td class="cell1last cell2bg">��Ǝ���</td>
    <td class="cell2last"><?php echo $tatfinalhtml ?></td>
    </tr>
</table></td>
</tr>
<tr>
  <td valign="top">&nbsp;</td>
</tr>
<tr>
<td valign="top" class="paddingtop5px"><img src="img/bullet_navhighlight.gif" width="11" height="11" alt="�p���Z���E�p���Z�{" /> �����ӁF���e�����a���肵�����_�ł̍Z���҂̗\��󋵂ɂ���āA��L��Ǝ��Ԃ͕ϓ����܂��B</td>
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
  <td valign="top"><img src="img/common/squere/6x6enago.png" width="12" height="12" alt="�p���Z�{�E�p���_���Z��" /><strong class="txt14"> �I�v�V����</strong></td>
</tr>
<tr>
<td valign="top" class="paddingtop10"><table class="tablegreyborder" width="630" border="0" cellspacing="0" cellpadding="0">
  <tr>
    <td width="25%" class="tblcell1">���e�]���J���e <img src="img/mailimages/mrc.png" class="vabsmiddle" alt="�p���Z�{�E�p���_���Z��" width="67" height="76" /></td>
    <td class="tblcell2"><?php echo $mrchtmlmsg ?></td>
    </tr>
  <tr>
    <td class="tblcell1">���񂵂�ۏ�<br />�i�čZ���ۏ؁j<br />
<span class="reliable mart10 marL10">���񂵂�</span></td>
    <td class="tblcell2"><?php echo $mifyesnofree ?></td>
    </tr>
  <tr>
    <td class="tblcell3">�����Ƃ��񂵂�ۏ�<br />
      �i���ǑΉ��ۏ؁j<br />
<span class="reliable green" style="margin-top:3px;"><i>��</i><i>��</i><i>��</i>���񂵂�</span></td>
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
  <td valign="top"><img src="img/common/squere/6x6enago.png" width="12" height="12" alt="�p���Z���E�p���_���Z��" /><strong class="txt14"> ���̃X�e�b�v</strong></td>
</tr>
<tr>
  <td>&nbsp;</td>
</tr>
<tr>
<td>  <img src="img/common/squere/6x6enago.gif" width="6" height="6" alt="�p���Z���E�p���Z�{" /><a href="http://www.enago.jp/23.htm" class="contentlink"> ���������m�肳��邨�q�l�A��萳�m�Ȃ����ς��������]�̂��q�l</a></td>
</tr>
<tr>
  <td><a href="http://www.enago.jp/23.htm" target="_blank" onmouseout="MM_swapImgRestore()" onmouseover="MM_swapImage('Image47','','img/banners/at-quotation-banner2.png',1)"><img src="img/banners/at-quotation-banner1.png" name="Image47" width="355" height="64" border="0" id="Image47" alt="�p���Z�{�E�p���Z�����ς���˗�" /></a><br />
<br />
  <img src="img/common/squere/6x6enago.gif" width="6" height="6" alt="�p���Z��/
  �e�t�E���e�t" /> <a href="http://www.enago.jp/21.htm" class="contentlink">������ς��Ă�蒼���������q�l</a><br />
    <a href="http://www.enago.jp/21.htm"  target="_blank" onmouseout="MM_swapImgRestore()" onmouseover="MM_swapImage('Image48','','img/banners/re-at-quotation-banner2.png',1)"><img src="img/banners/re-at-quotation-banner1.png" name="Image48" width="355" height="64" border="0" id="Image48" alt="�p���Z�{�E�p���Z���T�[�r�X" /></a><br />
<br />
  <img src="img/common/squere/6x6enago.gif" width="6" height="6" alt="�p���Z���E�p���Z�{�EPDF" /> ���₢���킹�E������́A<a href="mailto:request@enago.com" class="contentlink">request@enago.com</a> �܂ł��肢���܂��B</td>
</tr>
<tr>
  <td>&nbsp;</td>
</tr>
<tr>
  <td>&nbsp;</td>
</tr>
<tr>
  <td valign="top"><img src="img/common/squere/6x6enago.png" width="12" height="12" alt="�p���Z���ETeX�ELaTeX" /><strong class="txt14"> ���q�l�̃t�H�[�����L�����e</strong></td>
</tr>
<tr>
  <td class="paddingtop10"><table class="tableborder" width="630" border="0" cellspacing="0" cellpadding="4">
    <tr>
      <td class="cell1 cell1bg"><strong>��啪��</strong></td>
      <td class="cell2"><?php echo $jpsubjectarea ?></td>
      </tr>
    <tr>
      <td width="250" class="cell1 cell1bg"><strong>�t�@�C�����</strong></td>
      <td class="cell2"><?php echo $jpformat ?></td>
      </tr>
    <tr>
      <td class="cell1 cell1bg"><strong>�P�ꐔ</strong></td>
      <td class="cell2"><?php echo $wordcount ?> words</td>
      </tr>
    <tr>
      <td class="cell1 cell1bg"><strong>�[�i���x</strong></td>
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
  <td valign="top"><img src="img/common/squere/6x6enago.png" width="12" height="12" alt="��w�p��_���E�p���Z�{" /><strong class="txt14"> PR</strong></td>
</tr>
<tr>
  <td>�p���Z���G�i�S�́A���łȏ��Z�L�����e�B�V�X�e����ێ������Ђɗ^�����鍑�۔F��<br />
ISO27001:2013���擾���Ă���A�����Ȃ��p���Z����Ђ̂ЂƂł��B<br />
    <strong>���q�l�̌��e�����d�ɊǗ����Ă���܂��̂ŁA�����S���Ă��a�����������B</strong><br />
<span class="txt20">��</span><strong> ISO 27001:2013�i���Z�L�����e�B�j �F�؎擾 </strong><span class="txt20">��</span></td>
</tr>
<!--<tr>
  <td>�W���[�i���֘_���𓊍e����邨�q�l���T�|�[�g���邽�߂́A�V�����T�[�r�X���n�߂܂����B<br />
    �ڍׂ�<a href="http://www.enago.jp/publication-support/200.htm" class="contentlink">http://www.enago.jp/publication-support/200.htm</a>���������������B<br />
    <br />
    �A�C�G�V�C�g���x���́A�Ɩ��n�q�A�o���A���ۉ�c�A <br />
    �w��A�c�̎�z�𓾈ӂƂ��闷�s��Ђł��B <br />
    �ڍׂ�<a href="http://www.iace.co.jp/bts/convention" target="_blank" class="contentlink">http://www.iace.co.jp/bts/convention/</a>���������������B </td>
</tr> -->
<tr>
  <td>&nbsp;</td>
</tr>
<tr>
  <td>
  	<div class="clearBoth mart20"><a href="campaign.htm#PS" target="_blank"><img src="img/campaign/PS-campaign-banner.png" width="630" height="112" alt="�_���|��T�[�r�X�E�_���p��" class="publication-banner"/></a></div>
    <div class="clearBoth mart20"><a href="campaign.htm#EU" target="_blank"><img src="img/campaign/cross-campagin.jpg" width="630" height="121" alt="�_���|��T�[�r�X�E�_���p��" class="publication-banner"/></a></div>
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
