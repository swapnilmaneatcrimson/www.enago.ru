//validation jscript 23 Quotation Form

function validate_step1()
{
	_gaq.push(['_trackEvent', 'Form', 'Submit', 'Step2']);
	if (isservice() && ispriority() && isDelDate() && isHrs())
	{
		return showonlyone('assignmentdetails');
		
	}
	else
	{
		return false;
	}
}
function validate_step2()
{
	_gaq.push(['_trackEvent', 'Form', 'Submit', 'Step3']);
	if (isSubjectArea() && isInputfile() && isOutputfile() && isLanguage() && isUseofdocu2() && isTypeofdoc() && isFormat3())
	{
		return showonlyone('uploadnpayment');
	}
	else
	{
		return false;
	}
}

function validate_step3()
{
	_gaq.push(['_trackEvent', 'Form', 'Submit', 'Step4']);
	if (isUpload() && isExtension() && isattachfiles() && isCLtype())
	{
		return showonlyone('personaldetails');
	}
	else
	{
		return false;
	}
}

function validate_confirm()
{
	if (isClientType() && isCaptcha() && istandc())
	{
		document.frmSubmit.action = "thankyou.php";
		return true;
	}
	else
	{
			
		return false;
	}	
}

function isservice()
{
	var pub = false;
		for(var i=0;i<=1;i++)
		{
			if(document.frmSubmit.service[i].checked)
			{
				pub = true;
			}
		}
		if(pub == false)
		{
			alert("обязательный: Выберите тот уровень редактирования, который, по Вашему мнению, вам необходим. Узнайте больше о наших издательских услуг.");
			document.frmSubmit.service[0].focus();
			return false;
		}
return true;
}

function ispriority(){
	if (document.frmSubmit.priority.selectedIndex == 0)
	{
		alert("обязательный: Пожалуйста, выберите план");
		document.frmSubmit.priority.focus();
		return false;
	}
return true;
}

function isDelDate() 
{
	if(document.frmSubmit.deadlinestrict.checked==true)
	{
	return true;
	}
	
	if(document.frmSubmit.deadlinestrict.checked==false)
	{
		var str = document.frmSubmit.delMonth.selectedIndex; 
		if (str == 0)
		{
		alert("обязательный : Выберите дату доставки рукописи")
		document.frmSubmit.delMonth.focus();
		return false;
		}

		var str = document.frmSubmit.delDay.selectedIndex; 
		if (str == 0)
		{
		alert("обязательный : Выберите дату доставки рукописи")
		document.frmSubmit.delDay.focus();
		return false;
		}
		
		var str = document.frmSubmit.delYear.selectedIndex; 
		if (str == 0)
		{
		alert("обязательный : Выберите дату доставки рукописи")
		document.frmSubmit.delYear.focus();
		return false;
		}
		
		var intMonth = document.frmSubmit.delMonth.selectedIndex;
		var intMonth = document.frmSubmit.delMonth.selectedIndex;
		var intDay = document.frmSubmit.delDay.selectedIndex;
		if ((intMonth == 4 || intMonth == 6 || intMonth == 9 || intMonth == 11) && intDay == 31) {
		alert("обязательный : Выберите дату доставки рукописи");
		document.frmSubmit.delMonth.focus();
		return false;
		}
		
		var intYear=document.frmSubmit.delYear.selectedIndex;
		var intYearvalue = document.frmSubmit.delYear[intYear].value;
		if(intYearvalue!=2012){
		if((intMonth==2&&(intDay==29||intDay==30||intDay==31)))
			{
			alert("обязательный : Выберите дату доставки рукописи");
			document.frmSubmit.delDay.focus();
			return false;
			}
	}
				
//		var today = new Date();
//		var intMonth1 = getMonth(today);
//		var intDay1 = getDate(today);
//		var intYear1 = getYear(today);
//		if (document.frmSubmit.delYear.selectedIndex.value > intYear1) {
//			alert ("Date greater then current date.");
//			document.frmSubmit.delYear.focus();
//			return false;
//		}
		return true;
	}
}

function isHrs()
{
	if(document.frmSubmit.deadlinestrict.checked==true)
	{
	return true;
	}
	
	if(document.frmSubmit.deadlinestrict.checked==false)
	{

	if (document.frmSubmit.delHrs.selectedIndex == 0)
			{
				alert("обязательный: Выберите дату доставки рукописи");
				document.frmSubmit.delHrs.focus();
				return false;
			}
	return true;
	}
}

function isSubjectArea()
{
	if(document.frmSubmit.subsubject.selectedIndex == 0)
	{
			alert("обязательный: Предметная область");
			document.frmSubmit.subsubject.focus();
			return false;
	
	}
	else if(document.frmSubmit.specialization.selectedIndex == 0)
	{
				alert("обязательный: Предметная область");
				document.frmSubmit.specialization.focus();
				return false;
	}
		
	else if((document.frmSubmit.specialization.value == "Other") && (document.frmSubmit.otherspecialization.value == ""))
	{
			alert("обязательный: Другое");
			document.frmSubmit.otherspecialization.focus();
			return false;
	}
	
return true;
}

function isInputfile()
{
	if(document.frmSubmit.inputfile.selectedIndex == 0)
	{
		alert("обязательный:Оригинальный формат рукописи");
		document.frmSubmit.inputfile.focus();
		return false;
	}
return true;
}

function isOutputfile()
{
	if(document.frmSubmit.outputfile.selectedIndex == 0)
	{
		alert("обязательный:Требуемый формат файла");
		document.frmSubmit.outputfile.focus();
		return false;
	}
return true;
}

function isLanguage()
{
	if(document.frmSubmit.language.selectedIndex == 0)
	{
		alert("обязательный: Требуемый вариант английского");
		document.frmSubmit.language.focus();
		return false;
	}
return true;
}

function isUseofdocu2()
{
	if(document.frmSubmit.useofdoc.selectedIndex == 0)
	{	alert("обязательный: Пожалуйста, выберите цель (назначение) для вашей рукописи");
		document.frmSubmit.useofdoc.focus();
		return false;
	}
return true;
}	

function isTypeofdoc()
{
	if(document.frmSubmit.typeofdoc.selectedIndex == 0)
	{	
		alert("обязательный: Вид документа")
		document.frmSubmit.typeofdoc.focus();
		return false;
	}

return true;
}

function isFormat3()
{
	if(document.frmSubmit.service[0].checked){	
	 return true;
	}
	else{
		var pub = false;
			for(var i=0;i<=1;i++){
				if(document.frmSubmit.format[i].checked)
				{
					pub = true;
				}
			}
			if(pub == false)
			{
				alert("обязательный: Вы хотите  отформатировать / или проверить расположение файла");
				document.frmSubmit.format[0].focus();
				return false;
			}
	}
return true;
}

function showonlyone(thechosenone) {
      var newboxes = document.getElementsByTagName("div");
            for(var x=0; x<newboxes.length; x++) {
                  name = newboxes[x].getAttribute("name");
                  if (name == 'newboxes') {
                        if (newboxes[x].id == thechosenone) {
                        newboxes[x].style.display = 'block';
                  }
                  else {
                        newboxes[x].style.display = 'none';
                  }
            }
      }
}

function isUpload()
{
	if(document.frmSubmit.superdat.value == "")
	{
		var confirmAns = confirm("Вы  не  выбрали  файл  для  загрузки. Для  точной  цитаты  нам  необходима рукопись. Выберите  «Отмена»  для  выбора  файла  и  нажмите  кнопку OK,  чтобы  продолжить процесс  без  загрузки  файла.");
		if(confirmAns)
		{
			return true;
		}
		else
		{
			document.frmSubmit.superdat.focus();
			return false;
		}

	return false;	
	}
return true;
} 

function isExtension()
{
	var s = document.frmSubmit.superdat.value;
	// Return everything after the last '.'
	function getExtension2(s) {
		var m = s.match(/[^.]+$/);
		return m? m[0] : '';
	}
	var ext = getExtension2(s);
	if(s !== "")
	{
			if ((ext == "doc") || (ext == "docx") || (ext == "xls") || (ext == "xlsm") || (ext == "xlsx") || (ext == "ppt") || (ext == "pptx") || (ext == "rtf") || (ext == "dot")
		|| (ext == "hwp") || (ext == "zip") || (ext == "rar") || (ext == "lzh") || (ext == "pdf") || (ext == "tex") || (ext == "7z") || (ext == "txt") || (ext == "jpeg") || (ext == "tiff") || (ext == "eps") || (ext == "png") || (ext == "gif"))
			{
				return true;
			}
			else
			{
				alert("File type not supported.");
				document.frmSubmit.superdat.focus();
				return false;
			}
	}
return true;
}

function isattachfiles() 
{
	var str = document.frmSubmit.numeditingfiles.value;
	var itr = document.frmSubmit.numreferencefiles.value;
	if (str == "")
	{
	alert("обязательный: Пожалуйста, выберите файл для загрузки")
	document.frmSubmit.numeditingfiles.focus();
	return false;
	}
	if (itr == "")
	{
	alert("обязательный: Файлы для списка литературы")
	document.frmSubmit.numreferencefiles.focus();
	return false;
	}
	return true;

}

function isCLtype()
{
	if(document.frmSubmit.clienttype[1].checked == true)
		{
			return isPayment();
		}
return true;
}

function isPayment()
{
var pub = false;
	for(var i=0;i<=1;i++)
	{
		if(document.frmSubmit.ePayment[i].checked)
		{
			pub = true;
		}
	}
	if(pub == false)
	{
		alert("обязательный: Как бы вы хотели платить?");
		document.frmSubmit.ePayment[0].focus();
		return false;
	}
return true;
}

function isClientType()
{
	if(document.frmSubmit.clienttype[1].checked == true)
		{
			return islastname() && isfirstname() && isOrg() && isCountry() && isEmail() && isMatch() && isZipCode() && iscity() && isAddress() && isPhone() && isRefered();
		}
	else
	{
			return ismemberid1() && islastname() && isfirstname() && isOrg() && isEmail() && isMatch();
	}
}

function isCaptcha(){
var str = document.frmSubmit.answer.value;
var num1 = document.frmSubmit.num1.value;
var num2 = document.frmSubmit.num2.value;
var total = Math.round(num1) + Math.round(num2);
	if(str == "")
	{
		alert("Please enter sum of numbers.");
		document.frmSubmit.answer.focus();
		return false;
	}
	else if(str != total)
	{
		alert("Answer the equation correctly.");
		document.frmSubmit.answer.focus();
		return false;
	}
return true;
}

function istandc() 
{
	if(document.frmSubmit.agreeterms.checked==false)
	{
	 alert("обязательный: Мен қызмет көрсету шартын қабылдаймын")
	 document.frmSubmit.agreeterms.focus();
	 return false;
    }
return true;
}

function islastname() 
{
	var str = document.frmSubmit.lname.value;
	if (str == "")
	{
	alert("обязательный: Имя")
	document.frmSubmit.lname.focus();
	return false;
	}
return true;
}

function isfirstname() 
{
	var str = document.frmSubmit.fname.value;
	if (str == "")
	{
	alert("обязательный: Фамилия")
	document.frmSubmit.fname.focus();
	return false;
	}
	return true;
}

function isOrg() 
{
	var str = document.frmSubmit.organisation.value;
	if (str == "")
	{
	alert("обязательный: Институт/Организация")
	document.frmSubmit.organisation.focus();
	return false;
	}
return true;
}

function isCountry()
{
if (document.frmSubmit.country.selectedIndex == 0)
	{
		alert("обязательный: Страна");
		document.frmSubmit.country.focus();
		return false;
	}
return true;
}

function isEmail() 
{
	validateObject = new Object();
	validateObject.val = document.frmSubmit.email.value;

	if((validateObject.val.indexOf("@") == -1) || (validateObject.val.charAt(0) == ".") || (validateObject.val.charAt(0) == "@") ||(validateObject.len < 6) || (validateObject.val.indexOf(".") == -1) || (validateObject.val.charAt(validateObject.val.indexOf("@")+1) == ".") || (validateObject.val.charAt(validateObject.val.indexOf("@")-1) == "."))
	{
		alert("обязательный: Почтовый адрес");
		document.frmSubmit.email.focus();
		return false;
	}
return true;
}

function isMatch()
{
	var email=document.frmSubmit.email.value;
	var cemail=document.frmSubmit.emailconfirm.value;
	
	if(email!==cemail)
	{
		alert("обязательный: Подтвердите адрес электронный почты ");
		document.frmSubmit.emailconfirm.focus();
		return false;
	}
return true;
}

function isZipCode() 
{

	var str = document.frmSubmit.zipcode.value;
	if (str == "")
	{
	alert("обязательный: Почтовый индекс")
	document.frmSubmit.zipcode.focus();
	return false;
	}
return true;
}

function iscity() 
{
	var str = document.frmSubmit.city.value;
	if (str == "")
	{
	alert("обязательный: Город")
	document.frmSubmit.city.focus();
	return false;
	}
return true;
}

function isAddress() 
{
		var str = document.frmSubmit.mailingaddress1.value; 
		if (str == "")
		{
		alert("обязательный: Адрес для выставления счета")
		document.frmSubmit.mailingaddress1.focus();
		return false;
}
return true;
}

function isPhone()
	{
		var no=document.frmSubmit.phone.value;
		if (no.length==0)
		{
			alert("обязательный: Номер телефона");
			document.frmSubmit.phone.focus();
			document.frmSubmit.phone.select();
			return false;
		} 
		for(var i=1;i<no.length;i++)
		{
			var strpno=(no.substring(i,i+1));
			if((strpno > 'a' && strpno < 'z') || (strpno > 'A' && strpno < 'Z'))
			{
				alert("обязательный: Номер телефона");
				document.frmSubmit.phone.focus();
				document.frmSubmit.phone.select();
				return false;
			}
		}
	return true;	
}	

function isRefered()
{
	var menuSel = document.frmSubmit.R1.selectedIndex;
	var menuSell = document.frmSubmit.R2.selectedIndex;
	if(menuSel==0)
		{
			alert("обязательный: Как вы узнали о нас?");
			document.frmSubmit.R1.focus();
			return false;
		}
	else if(menuSel==1)
		{
			if(menuSell==0)
			{
				alert("обязательный: Как вы узнали о нас?");
				document.frmSubmit.R2.focus();
				return false;
			}
		}
	else if((menuSel==2) || (menuSel==3))
	{
		return true;
	}
	else if(menuSel==4 || menuSel==5)
		{
			if((document.frmSubmit.txtRef.value=="")|| (document.frmSubmit.txtRef.value==null))
				{
					alert("обязательный: Другое");
					document.frmSubmit.txtRef.focus();				
					return false;
				}
			else{
					return true;
				}
		}
	else if(menuSell==4)
		{
			if((document.frmSubmit.txtRef.value=="") || (document.frmSubmit.txtRef.value==null))
				{
					alert("обязательный: Другое");
					document.frmSubmit.txtRef.focus();				
					return false;
				}
			else{
					return true;
				}
		}
return true;
}

function ismemberid1()
{
	var str = document.frmSubmit.membershipid.value;
	if (str == "")
	{
		alert("обязательный: Членство")
		document.frmSubmit.membershipid.focus();
		
		return false;
	}
return true;
}

function forexisting()
{
	document.getElementById("editorref").style.visibility = "visible";
	document.getElementById("editorref").style.display = "block";
	document.getElementById("epay").style.visibility = "hidden";
	document.getElementById("epay").style.display = "none";
	document.getElementById("pd1").style.visibility = "visible";
	document.getElementById("pd1").style.display = "block";
	document.getElementById("pd2").style.visibility = "visible";
	document.getElementById("pd2").style.display = "block";
	document.getElementById("pd3").style.visibility = "hidden";
	document.getElementById("pd3").style.display = "none";
	document.getElementById("pd4").style.visibility = "visible";
	document.getElementById("pd4").style.display = "block";
	document.getElementById("pd5").style.visibility = "hidden";
	document.getElementById("pd5").style.display = "none";
	document.getElementById("pd7").style.visibility = "visible";
	document.getElementById("pd7").style.display = "block";
	document.frmSubmit.department.value = "";
	document.frmSubmit.designation.selectedIndex = 0;
	document.frmSubmit.zipcode.value = "";
	document.frmSubmit.city.value = "";
	document.frmSubmit.mailingaddress1.value = "";
	document.frmSubmit.phone.value = "";
	document.frmSubmit.extno.value = "";
	document.frmSubmit.fax.value = "";
	document.frmSubmit.website.value = "";
	document.frmSubmit.phone.value = "";
	document.frmSubmit.R1.selectedIndex = 0;
	document.frmSubmit.txtRef.value = "";
	document.frmSubmit.ePayment[0].checked = false;
	document.frmSubmit.ePayment[1].checked = false;
}
function fornew()
{
	document.getElementById("editorref").style.visibility = "hidden";
	document.getElementById("editorref").style.display = "none";
	document.getElementById("epay").style.visibility = "visible";
	document.getElementById("epay").style.display = "block";
	document.getElementById("pd1").style.visibility = "hidden";
	document.getElementById("pd1").style.display = "none";
	document.getElementById("pd2").style.visibility = "visible";
	document.getElementById("pd2").style.display = "block";
	document.getElementById("pd3").style.visibility = "visible";
	document.getElementById("pd3").style.display = "block";
	document.getElementById("pd4").style.visibility = "visible";
	document.getElementById("pd4").style.display = "block";
	document.getElementById("pd5").style.visibility = "visible";
	document.getElementById("pd5").style.display = "block";
	document.getElementById("pd7").style.visibility = "visible";
	document.getElementById("pd7").style.display = "block";
	document.frmSubmit.membershipid.value = "";
	document.frmSubmit.asneditor.value = "";
	document.frmSubmit.oldeditor[0].checked = false;
	document.frmSubmit.oldeditor[1].checked = false;
	document.frmSubmit.oldeditor[2].checked = false;

}

function showdoformat(){
	document.getElementById("doformat").style.visibility = "visible";
	document.getElementById("doformat").style.display = "block";
}

function hidedoformat(){
	document.getElementById("doformat").style.visibility = "hidden";
	document.getElementById("doformat").style.display = "none";
	document.frmSubmit.format[0].checked=false;
	document.frmSubmit.format[1].checked=false;
}

function isCheck()
{
if(document.frmSubmit.deadlinestrict.checked==true)
    {document.frmSubmit.delMonth.disabled=true;
    document.frmSubmit.delDay.disabled=true;
    document.frmSubmit.delYear.disabled=true;
	document.frmSubmit.delHrs.disabled=true;
    document.frmSubmit.delMin.disabled=true;
	document.frmSubmit.delDay.selectedIndex = 0;
	document.frmSubmit.delMonth.selectedIndex = 0;
	document.frmSubmit.delYear.selectedIndex = 0;
	document.frmSubmit.delHrs.selectedIndex = 0
	document.frmSubmit.delMin.selectedIndex = 0;
	}
	
if(document.frmSubmit.deadlinestrict.checked==false)
    {document.frmSubmit.delMonth.disabled=false;
    document.frmSubmit.delDay.disabled=false;
    document.frmSubmit.delYear.disabled=false;
	document.frmSubmit.delHrs.disabled=false;
    document.frmSubmit.delMin.disabled=false;}
}

function receiptshow()
{
	document.getElementById("receiptchoice").style.visibility = "visible";
	document.getElementById("receiptchoice").style.display = "block";
}
function receipthide()
{
	document.getElementById("receiptchoice").style.visibility = "hidden";
	document.getElementById("receiptchoice").style.display = "none";
	document.frmSubmit.institution.value = "";
	document.frmSubmit.regnumber.value = "";
	document.frmSubmit.invoicedate.value = "";
	document.frmSubmit.otherinfo.value = "";
}

function showHidepriority()
{
	if(document.frmSubmit.service[0].checked == true){
		if(document.forms[0].priority.value=="Economy" || document.forms[0].priority.value=="")
			{
			document.getElementById("dmrc").style.visibility = "hidden";
			document.getElementById("dmrc").style.display = "none";
			document.getElementById("dcertificate").style.visibility = "hidden";
			document.getElementById("dcertificate").style.display = "none";
			document.getElementById("dcoverletter").style.visibility = "hidden";
			document.getElementById("dcoverletter").style.display = "none";
			document.getElementById("dadvancemrc").style.visibility = "hidden";
			document.getElementById("dadvancemrc").style.display = "none";
			}
		else{
			document.getElementById("dmrc").style.display			= "none";
			document.getElementById("dmrc").style.visibility		= "hidden";
			document.getElementById("dcertificate").style.visibility = "hidden";
			document.getElementById("dcertificate").style.display = "none";
			document.getElementById("dcoverletter").style.visibility = "hidden";
			document.getElementById("dcoverletter").style.display = "none";
			document.getElementById("dadvancemrc").style.visibility = "hidden";
			document.getElementById("dadvancemrc").style.display = "none";
			document.frmSubmit.mrc.checked = true;
		}
	}
	else if(document.frmSubmit.service[1].checked == true){
		if(document.forms[0].priority.value==""){
			document.getElementById("dmrc").style.visibility = "hidden";
			document.getElementById("dmrc").style.display = "none";
			document.getElementById("dcertificate").style.visibility = "hidden";
			document.getElementById("dcertificate").style.display = "none";
			document.getElementById("dcoverletter").style.visibility = "hidden";
			document.getElementById("dcoverletter").style.display = "none";
			document.getElementById("dadvancemrc").style.visibility = "hidden";
			document.getElementById("dadvancemrc").style.display = "none";
		}
		else{
			document.getElementById("dadvancemrc").style.visibility = "hidden";
			document.getElementById("dadvancemrc").style.display = "none";
			document.getElementById("dcertificate").style.visibility = "hidden";
			document.getElementById("dcertificate").style.display = "none";
			document.getElementById("dcoverletter").style.visibility = "hidden";
			document.getElementById("dcoverletter").style.display = "none";
			document.getElementById("dmrc").style.visibility = "hidden";
			document.getElementById("dmrc").style.display = "none";
			document.frmSubmit.certificate.checked = true;
			document.frmSubmit.advancemrc.checked = true;
			document.frmSubmit.coverletter.checked = true;
		}
	}
	else{
	document.getElementById("dmrc").style.visibility = "hidden";
	document.getElementById("dmrc").style.display = "none";
	document.getElementById("dcertificate").style.visibility = "hidden";
	document.getElementById("dcertificate").style.display = "none";
	document.getElementById("dcoverletter").style.visibility = "hidden";
	document.getElementById("dcoverletter").style.display = "none";
	document.getElementById("dadvancemrc").style.visibility = "hidden";
	document.getElementById("dadvancemrc").style.display = "none";
	}
}

function showHide()
{
	if(document.frmSubmit.typeofdoc.value == "Others")
	{
		document.getElementById("doctype").style.display			= "block";
		document.getElementById("doctype").style.visibility		= "visible";
	}
	else
	{
		document.getElementById("doctype").style.display			= "none";
		document.getElementById("doctype").style.visibility		= "hidden";
		document.frmSubmit.other_typeofdoc.value = "";
	}
}

function setOptions2(chosen)
{
var selbox5 = document.frmSubmit.R2;

selbox5.options.length = 1;

if (chosen == "") {
document.frmSubmit.R2.disabled = true;
document.frmSubmit.txtRef.disabled = true;
document.frmSubmit.txtRef.value = "";
document.getElementById("r2").style.display			= "none";
document.getElementById("r2").style.visibility		= "hidden";
document.getElementById("txtref").style.display			= "none";
document.getElementById("txtref").style.visibility		= "hidden";
}
if (chosen == "Search Engines") {
selbox5.options[selbox5.options.length] = new Option('Google','Google');	
selbox5.options[selbox5.options.length] = new Option('Yahoo','Yahoo');
selbox5.options[selbox5.options.length] = new Option('MSN','MSN');
selbox5.options[selbox5.options.length] = new Option('Other Search Engine','Other Search Engine');
document.frmSubmit.R2.disabled = false;
document.frmSubmit.txtRef.disabled = true;
document.getElementById("r2").style.display			= "block";
document.getElementById("r2").style.visibility		= "visible";
document.getElementById("txtref").style.display			= "none";
document.getElementById("txtref").style.visibility		= "hidden";
}
if ((chosen == "Others") || (chosen == "Friend")) {
document.frmSubmit.txtRef.disabled = false;
document.frmSubmit.R2.disabled = true;
document.getElementById("r2").style.display			= "none";
document.getElementById("r2").style.visibility		= "hidden";
document.getElementById("txtref").style.display			= "block";
document.getElementById("txtref").style.visibility		= "visible";
}
if (chosen == "Advertising") {
document.frmSubmit.R2.disabled = true;
document.frmSubmit.txtRef.disabled = true;
document.frmSubmit.txtRef.value = "";
document.getElementById("r2").style.display			= "none";
document.getElementById("r2").style.visibility		= "hidden";
document.getElementById("txtref").style.display			= "none";
document.getElementById("txtref").style.visibility		= "hidden";
}
if (chosen == "Newsletter") {
document.frmSubmit.R2.disabled = true;
document.frmSubmit.txtRef.disabled = true;
document.frmSubmit.txtRef.value = "";
document.getElementById("r2").style.display			= "none";
document.getElementById("r2").style.visibility		= "hidden";
document.getElementById("txtref").style.display			= "none";
document.getElementById("txtref").style.visibility		= "hidden";
}
}

function showalert(){
	if(document.frmSubmit.inputfile.value == "TeX")
	{
		alert("Пожалуйста,  отправьте  этот  файл  в  PDF  формате TeX: request-kz@enago.com.");
	}
}