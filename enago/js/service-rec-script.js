// JavaScript Document
var qsParm = new Array();
function qs() {
var query = window.location.search.substring(1);
var parms = query.split('|');
for (var i=0; i<parms.length; i++) {
var pos = parms[i].indexOf('=');
if (pos > 0) {
var key = parms[i].substring(0,pos);
var val = parms[i].substring(pos+1);
qsParm[key] = val;

var params = parms[0].substring(pos+1);
//alert(params);

var journalname = parms[1].substring(pos+6);
//alert(journalname);

var journalurl = parms[2].substring(pos+5);
//alert(journalurl);

var orderid = parms[3].substring(pos+2);
document.getElementById("orderid").value = orderid;
//alert(orderid);

var emailid = parms[4].substring(pos+2);
document.getElementById("emailid").value = emailid;
//alert(emailid);

break;
}
}

var choice = new Array();
choice = params.split(',');
//alert(services.length);
for(var a=0; a<choice.length; a++){

	if(choice[a] == 16){
		document.frmSubmit.serviceschoice_1.checked = true;
		choice1();
	}
	if(choice[a] == 14){
		document.frmSubmit.serviceschoice_4.checked = true;
		choice4();
	}
	if(choice[a] == 13){
		document.frmSubmit.serviceschoice_3.checked = true;
		choice3();
	}
	if(choice[a] == 7){
		document.frmSubmit.serviceschoice_7.checked = true;
		choice7();
	}
}

for(var a=0; a<choice.length; a++){

	if((choice[a] != 16) && (choice[a] != 14) && (choice[a] != 13) && (choice[a] != 7)){
			document.frmSubmit.serviceschoice_2.checked = true;
			choicecommon();
		}
	else{
		document.frmSubmit.serviceschoice_2.checked = true;
		choicecommon();
	}
}

for(var a=0; a<choice.length; a++){
	if(choice[a] == 1)
	{
		document.getElementById("sid1").innerHTML = "�m�[�}���p���Z���T�[�r�X";
		var serid1 = "Normal Editing";
		document.getElementById("serviceid1").value = serid1;
	}
	if(choice[a] == 6)
	{
		document.getElementById("sid6").innerHTML = "�A�h�o���X�p���Z���T�[�r�X ";
		var serid6 = "Advance Editing";
		document.getElementById("serviceid6").value = serid6;
	}
	if(choice[a] == 7)
	{
		document.getElementById("sid7").innerHTML = "�}�\�ҏW";
		var serid7 = "Artwork Editing";
		document.getElementById("serviceid7").value = serid7;
	}
	if(choice[a] == 9)
	{
		document.getElementById("sid9").innerHTML = "�������e?���M�����";
		var serid9 = "Initial Submission Cover Letter Writing";
		document.getElementById("serviceid9").value = serid9;
	}
	if(choice[a] == 11)
	{
		document.getElementById("sid11").innerHTML = "���e���W�Ɋ���?���M�����";
		var serid11 = "Customized Cover Letter Writing";
		document.getElementById("serviceid11").value = serid11;
	}
	if(choice[a] == 13)
	{
		document.getElementById("sid13").innerHTML = "���e��A�h�o�C�U�[";
		var serid13 = "Journal Selection Assistant";
		document.getElementById("serviceid13").value = serid13;
	}
	if(choice[a] == 14)
	{
		document.getElementById("sid14").innerHTML = "���e�葱���̑�s";
		var serid14 = "Manuscript Submission Assistant";
		document.getElementById("serviceid14").value = serid14;
	}
	if(choice[a] == 15)
	{
		document.getElementById("sid15").innerHTML = "�W���[�i�����e�O�̃s�A���r���[";
		var serid15 = "Pre-Submission Review";
		document.getElementById("serviceid15").value = serid15;
	}
	if(choice[a] == 16)
	{
		document.getElementById("sid16").innerHTML = "���W�F�N�g�_���̍Z��";
		var serid16 = "Revised/Rejected Paper Editing";
		document.getElementById("serviceid16").value = serid16;
	}
	if(choice[a] == 20)
	{
		document.getElementById("sid20").innerHTML = "���e�{�m��?����";
		var serid20 = "Instructions to Authors (ITA)";
		document.getElementById("serviceid20").value = serid20;
	}
	if(choice[a] == 21)
	{
		document.getElementById("sid21").innerHTML = "�P�ꐔ�팸";
		var serid21 = "Word count reduction (10%)";
		document.getElementById("serviceid21").value = serid21;
	}
}

function choicecommon(){
	if(document.frmSubmit.serviceschoice_3.checked == true)
	{
		document.getElementById("1_2").style.display			= "none";
		document.getElementById("1_2").style.visibility		= "hidden";
		document.frmSubmit.serviceschoice_info.checked = false;
	}
	else{
		if(journalname != ""){
			document.getElementById("1_2").style.display			= "none";
			document.getElementById("1_2").style.visibility		= "hidden";
			document.frmSubmit.serviceschoice_info.checked = false;
		}
		else{
			document.getElementById("1_2").style.display			= "block";
			document.getElementById("1_2").style.visibility		= "visible";
			document.frmSubmit.serviceschoice_info.checked = true;
		}
	}

}
} 
