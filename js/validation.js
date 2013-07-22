//validation jscript

/*********************************** 23 Quotation Form **************************************************/
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
	if (isattachfiles() && isCLtype())
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
	if (isClientType() && isUpload() && istandc())
	{
		document.frmSubmit.action = "thankyou.php";
		return true;
	}
	else
	{
			
		return false;
	}	
}


function isPlandetails()
{
	if(document.frmSubmit.clienttype[0].checked == true)
		{
			return isRequest();
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

function isReceipt()
{
	var pub = false;
		for(var i=0;i<=1;i++)
		{
			if(document.frmSubmit.ePublicEx[i].checked)
			{
				pub = true;
			}
		}
		if(pub == false)
		{
			alert("обязательный: Счет за текущий период");
			document.frmSubmit.ePublicEx[0].focus();
			return false;
		}
		if(document.frmSubmit.ePublicEx[1].checked)
			{
				if(document.frmSubmit.institution.value == ""){
					alert("обязательный: ЖОО-ң аты(университет, институт)");
					document.frmSubmit.institution.focus();
					return false;
				}
				if(document.frmSubmit.regnumber.value == ""){
					alert("обязательный: Тіркеу номері");
					document.frmSubmit.regnumber.focus();
					return false;
				}
				if(document.frmSubmit.invoicedate.value == ""){
					alert("обязательный: Есеп мерзімі");
					document.frmSubmit.invoicedate.focus();
					return false;
				}
				if(document.frmSubmit.otherinfo.value == "")
				{
					alert("обязательный: Толық ақпарат");
					document.frmSubmit.otherinfo.focus();
					return false;
				}
			}
return true;
}

function isTypeofdoc()
{
	if (document.frmSubmit.typeofdoc.selectedIndex == 0)
	{
		alert("обязательный: Вид документа");
		document.frmSubmit.typeofdoc.focus();
		return false;
	}
	if((document.frmSubmit.typeofdoc.selectedIndex == 23) && (document.frmSubmit.other_typeofdoc.value == ""))
	{
		alert("обязательный: Вид документа");
		document.frmSubmit.other_typeofdoc.focus();
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

function isMif()
{
	var indexvalue = document.frmSubmit.priority.selectedIndex;
	var value = document.frmSubmit.priority[indexvalue].value;
	
	if((value=="Economy") || (value=="Standard") || (value=="Express")){
	return isMifReq();
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

function isUseofdocu2()
{
	if(document.frmSubmit.useofdoc.selectedIndex == 0)
	{	alert("обязательный: Пожалуйста, выберите цель (назначение) для вашей рукописи");
		document.frmSubmit.useofdoc.focus();
		return false;
	}
return true;
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

function showalert(){
	if(document.frmSubmit.inputfile.value == "TeX")
	{
		alert("Пожалуйста,  отправьте  этот  файл  в  PDF  формате TeX: request-kz@enago.com.");
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

function showHide2()
{
	if(document.frmSubmit.useofdoc.value == "Others")
	{
		document.getElementById("otheruseofdoc").style.display			= "block";
		document.getElementById("otheruseofdoc").style.visibility		= "visible";
	}
	else
	{
		document.getElementById("otheruseofdoc").style.display			= "none";
		document.getElementById("otheruseofdoc").style.visibility		= "hidden";
		document.frmSubmit.other_useofdoc.value = "";
	}
}

function singlecheck(){
	document.getElementById("dmrc").style.visibility = "hidden";
	document.getElementById("dmrc").style.display = "none";
	document.getElementById("dcertificate").style.visibility = "hidden";
	document.getElementById("dcertificate").style.display = "none";
	document.getElementById("dcoverletter").style.visibility = "hidden";
	document.getElementById("dcoverletter").style.display = "none";
	
	document.getElementById("dadvancemrc").style.visibility = "hidden";
	document.getElementById("dadvancemrc").style.display = "none";
	document.frmSubmit.priority.selectedIndex = 0;
}

function doublecheck(){
	
	document.getElementById("dmrc").style.visibility = "hidden";
	document.getElementById("dmrc").style.display = "none";
	document.getElementById("dcertificate").style.visibility = "visible";
	document.getElementById("dcertificate").style.display = "block";
	document.getElementById("dcoverletter").style.visibility = "hidden";
	document.getElementById("dcoverletter").style.display = "none";
	
	document.getElementById("dadvancemrc").style.visibility = "hidden";
	document.getElementById("dadvancemrc").style.display = "none";
	document.frmSubmit.priority.selectedIndex = 0;
}

function advanceediting(){
	
	document.getElementById("dadvancemrc").style.visibility = "visible";
	document.getElementById("dadvancemrc").style.display = "block";
	document.getElementById("dcertificate").style.visibility = "visible";
	document.getElementById("dcertificate").style.display = "block";
	document.getElementById("dcoverletter").style.visibility = "visible";
	document.getElementById("dcoverletter").style.display = "block";
	
	document.getElementById("dmrc").style.visibility = "hidden";
	document.getElementById("dmrc").style.display = "none";
	document.frmSubmit.priority.selectedIndex = 0;
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

function reasnshow()
{
	document.getElementById("reasnedit").style.visibility = "visible";
	document.getElementById("reasnedit").style.display = "block";
}
function reasnhide()
{
	document.getElementById("reasnedit").style.visibility = "hidden";
	document.getElementById("reasnedit").style.display = "none";
	document.frmSubmit.reeditasn.value = "";
	
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

function clearselections(){
	document.getElementById("dmrc").style.visibility = "hidden";
	document.getElementById("dmrc").style.display = "none";
	document.getElementById("dcertificate").style.visibility = "hidden";
	document.getElementById("dcertificate").style.display = "none";
	document.getElementById("dcoverletter").style.visibility = "hidden";
	document.getElementById("dcoverletter").style.display = "none";
	document.getElementById("dadvancemrc").style.visibility = "hidden";
	document.getElementById("dadvancemrc").style.display = "none";
	document.frmSubmit.priority.selectedIndex = 0;
}
/*
function showHidepriority()
{
	if(document.frmSubmit.service[2].checked != true){
			if(document.forms[0].priority.value=="Economy")	
			{
				document.getElementById("dmrc").style.display			= "none";
				document.getElementById("dmrc").style.visibility		= "hidden";
			}
			else
			{
				document.getElementById("dmrc").style.display			= "block";
				document.getElementById("dmrc").style.visibility		= "visible";
			}
		}
}*/

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


function isMifauto()
{
	if((document.frmSubmit.delpriority[0].checked == true) || (document.frmSubmit.delpriority[1].checked == true) || (document.frmSubmit.delpriority[2].checked == true)){
	return isMifReq();
	}
return true;
}

function showHideservice()
{
	if(document.forms[0].service.value=="normal")	
	{
		document.getElementById("service_type").style.display			= "block";
		document.getElementById("service_type").style.visibility		= "visible";
		document.getElementById("service_options").style.display			= "none";
		document.getElementById("service_options").style.visibility		= "hidden";
		document.getElementById("mifoption2").style.visibility = "hiddden";
		document.getElementById("mifoption2").style.display = "none";
		document.getElementById("mifoption1").style.visibility = "hidden";
		document.getElementById("mifoption1").style.display = "none";
		document.frmSubmit.delpriority_advance[0].checked = false;
		document.frmSubmit.delpriority_advance[1].checked = false;
	}
	else if(document.forms[0].service.value=="advance")
	{
		document.getElementById("service_type").style.display			= "none";
		document.getElementById("service_type").style.visibility		= "hidden";
		document.getElementById("service_options").style.display			= "block";
		document.getElementById("service_options").style.visibility		= "visible";
		document.getElementById("mifoption2").style.visibility = "visible";
		document.getElementById("mifoption2").style.display = "block";
		document.getElementById("mifoption1").style.visibility = "hidden";
		document.getElementById("mifoption1").style.display = "none";
		document.frmSubmit.mif[0].checked = false;
		document.frmSubmit.mif[1].checked = false;
		document.frmSubmit.delpriority[0].checked = false;
		document.frmSubmit.delpriority[1].checked = false;
		document.frmSubmit.delpriority[2].checked = false;
		document.frmSubmit.delpriority[3].checked = false;
		document.frmSubmit.delpriority[4].checked = false;
	}
	else
	{
		document.getElementById("service_type").style.display			= "none";
		document.getElementById("service_type").style.visibility		= "hidden";
		document.getElementById("service_options").style.display			= "none";
		document.getElementById("service_options").style.visibility		= "hidden";
		document.getElementById("mifoption2").style.visibility = "hiddden";
		document.getElementById("mifoption2").style.display = "none";
		document.getElementById("mifoption1").style.visibility = "hidden";
		document.getElementById("mifoption1").style.display = "none";
		document.frmSubmit.mif[0].checked = false;
		document.frmSubmit.mif[1].checked = false;
		document.frmSubmit.delpriority[0].checked = false;
		document.frmSubmit.delpriority[1].checked = false;
		document.frmSubmit.delpriority[2].checked = false;
		document.frmSubmit.delpriority[3].checked = false;
		document.frmSubmit.delpriority[4].checked = false;
		document.frmSubmit.delpriority_advance[0].checked = false;
		document.frmSubmit.delpriority_advance[1].checked = false;
	}
}

function mifpay(){
	document.getElementById("mifoption1").style.visibility = "visible";
	document.getElementById("mifoption1").style.display = "block";
	document.getElementById("mifoption2").style.visibility = "hidden";
	document.getElementById("mifoption2").style.display = "none";
	
}

function miffree(){
	document.getElementById("mifoption1").style.visibility = "hidden";
	document.getElementById("mifoption1").style.display = "none";
	document.getElementById("mifoption2").style.visibility = "visible";
	document.getElementById("mifoption2").style.display = "block";
	document.frmSubmit.mif[0].checked = false;
	document.frmSubmit.mif[1].checked = false;
}

function showHideOther()
{
	if(document.frmSubmit.publishpurpose.value == "Other purpose of publishing")
	{
		document.getElementById("other_a").style.display			= "block";
		document.getElementById("other_a").style.visibility		= "visible";
	}
	else
	{
		document.getElementById("other_a").style.display			= "none";
		document.getElementById("other_a").style.visibility		= "hidden";
	}
}
function showHide1()
{
	if(document.frmSubmit.targetjournal.value == "Other journal type")
	{
		document.getElementById("other_b").style.display			= "block";
		document.getElementById("other_b").style.visibility		= "visible";
	}
	else
	{
		document.getElementById("other_b").style.display			= "none";
		document.getElementById("other_b").style.visibility		= "hidden";
	}
}

function ques2show()
{
	document.getElementById("qus2").style.visibility = "visible";
	document.getElementById("qus2").style.display = "block";

}
function ques2hide()
{
	document.getElementById("qus2").style.visibility = "hidden";
	document.getElementById("qus2").style.display = "none";
}

function serviceshow1()
{
	document.getElementById("revisedpaper").style.visibility = "visible";
	document.getElementById("revisedpaper").style.display = "block";
	document.getElementById("rejectedpaper").style.visibility = "hidden";
	document.getElementById("rejectedpaper").style.display = "none";
	document.getElementById("changejournal").style.visibility = "hidden";
	document.getElementById("changejournal").style.display = "none";
	document.frmSubmit.journalname_a.value = "";
	document.frmSubmit.journalurl_a.value = "";


}
function servicehide1()
{
	document.getElementById("revisedpaper").style.visibility = "hidden";
	document.getElementById("revisedpaper").style.display = "none";
	document.getElementById("rejectedpaper").style.visibility = "visible";
	document.getElementById("rejectedpaper").style.display = "block";
	document.getElementById("changejournal").style.visibility = "visible";
	document.getElementById("changejournal").style.display = "block";

}

function commentyes()
{
	document.getElementById("reviwercomment").style.visibility = "visible";
	document.getElementById("reviwercomment").style.display = "block";
}
function commentno()
{
	document.getElementById("reviwercomment").style.visibility = "hidden";
	document.getElementById("reviwercomment").style.display = "none";
}

function othertxtref(){
	var index = document.frmSubmit.R2.selectedIndex;
var indexvalue = document.frmSubmit.R2[index].value;

if(indexvalue == "Other Search Engine")
{
	document.frmSubmit.txtRef.disabled = false;
	document.getElementById("txtref").style.display			= "block";
	document.getElementById("txtref").style.visibility		= "visible";
}
else
{
	document.frmSubmit.txtRef.disabled = true;
	document.frmSubmit.txtRef.value = "";
	document.getElementById("txtref").style.display			= "none";
	document.getElementById("txtref").style.visibility		= "hidden";
}	
}
/**************************************************** Isub Coverletter Free *******************************************************/
function validate_isubfree()
{
	if (islastname() && isfirstname() && isOrg() && isEmail() && isMatch() && isCountry() && isZipCode() && iscity() && isAddress() && isPhone() && isRefered() && isSameasabove() && isJournalName() && isJournalURL() && isManuscripttitle()  && isTypeofdoc() && isBriefdes() && isSummary())
	{
		document.frmSubmit.action = "insta-coverletter-form-result.php";
		return true;
	}
	else
	{
			
		return false;
	}	
}

function isSameasabove() 
{
	validateObject = new Object();
	validateObject.val = document.frmSubmit.email_a.value;
	var email_a=document.frmSubmit.email_a.value;
	var cemail=document.frmSubmit.emailconfirm_a.value;

	if(document.frmSubmit.sameasabove.checked == false)
	{
		if (document.frmSubmit.lname_a.value == "")
		{
			alert("обязательный: Имя")
			document.frmSubmit.lname_a.focus();
			return false;
		}
		if (document.frmSubmit.fname_a.value == "")
		{
			alert("обязательный: Фамилия")
			document.frmSubmit.fname_a.focus();
			return false;
		}
		if (document.frmSubmit.phone_a.value.length==0)
		{
			alert("обязательный: Номер телефона");
			document.frmSubmit.phone_a.focus();
			return false;
		}
		if (document.frmSubmit.mailingaddress1_a.value == "")
		{
			alert("обязательный: Почтовый адрес")
			document.frmSubmit.mailingaddress1_a.focus();
			return false;
		}
		if((validateObject.val.indexOf("@") == -1) || (validateObject.val.charAt(0) == ".") || (validateObject.val.charAt(0) == "@") ||(validateObject.len < 6) || (validateObject.val.indexOf(".") == -1) || (validateObject.val.charAt(validateObject.val.indexOf("@")+1) == ".") || (validateObject.val.charAt(validateObject.val.indexOf("@")-1) == "."))
	{
		alert("обязательный: E-mail");
		document.frmSubmit.email_a.focus();
		return false;
		}
		if(email_a!==cemail)
		{
			alert("обязательный: Digite novamente o endereço de e-mail");
			document.frmSubmit.emailconfirm_a.focus();
			return false;
		}
		
    }
return true;
}

function isJournalName() 
{
	var str = document.frmSubmit.journalname.value;
	if (str == "")
	{
	alert("обязательный: Пожалуйста, дайте нам знать название журнала")
	document.frmSubmit.journalname.focus();
	return false;
	}
return true;
}

function isJournalURL() 
{
	var str = document.frmSubmit.journalurl.value;
	if (str == "")
	{
	alert("обязательный: URL")
	document.frmSubmit.journalurl.focus();
	return false;
	}
return true;
}

function isManuscripttitle() 
{
		var str = document.frmSubmit.manuscripttitle.value; 
		if (str == "")
		{
		alert("обязательный: Название")
		document.frmSubmit.manuscripttitle.focus();
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

function isBriefdes() 
{
		var str = document.frmSubmit.briefdescription.value; 
		if (str == "")
		{
		alert("обязательный:")
		document.frmSubmit.briefdescription.focus();
		return false;
}
return true;
}

function isSummary() 
{
		var str = document.frmSubmit.summary.value; 
		if (str == "")
		{
		alert("обязательный: ")
		document.frmSubmit.summary.focus();
		return false;
}
return true;
}

function isAddstatement()
{
	var addstat1 = document.frmSubmit.addstatement1.checked;
	var addstat2 = document.frmSubmit.addstatement2.checked;
	var addstat3 = document.frmSubmit.addstatement3.checked;
	var addstat4 = document.frmSubmit.addstatement4.checked;
	if((addstat1==false) && (addstat2==false) && (addstat3==false) && (addstat4==false) )
		{
			alert("обязательный: ");
			document.frmSubmit.addstatement1.focus();
			return false;
		}
return true;
}

function isSameAs()
{
if(document.frmSubmit.sameasabove.checked==true)
    {
	document.frmSubmit.lname_a.disabled=true;
	document.frmSubmit.lname_a.value = "";
    document.frmSubmit.fname_a.disabled=true;
    document.frmSubmit.fname_a.value = "";
    document.frmSubmit.mailingaddress1_a.disabled=true;
    document.frmSubmit.mailingaddress1_a.value = "";
	document.frmSubmit.phone_a.disabled=true;
	document.frmSubmit.phone_a.value = "";
    document.frmSubmit.extno_a.disabled=true;
    document.frmSubmit.extno_a.value="";
    document.frmSubmit.fax_a.disabled=true;
    document.frmSubmit.fax_a.value="";
    document.frmSubmit.email_a.disabled=true;
    document.frmSubmit.email_a.value="";
    document.frmSubmit.emailconfirm_a.disabled=true;
    document.frmSubmit.emailconfirm_a.value="";
    document.frmSubmit.email2_a.disabled=true;
    document.frmSubmit.email2_a.value="";
	}
	
if(document.frmSubmit.sameasabove.checked==false)
    {
	document.frmSubmit.lname_a.disabled=false;
    document.frmSubmit.fname_a.disabled=false;
    document.frmSubmit.mailingaddress1_a.disabled=false;
	document.frmSubmit.phone_a.disabled=false;
    document.frmSubmit.extno_a.disabled=false;
    document.frmSubmit.fax_a.disabled=false;
    document.frmSubmit.email_a.disabled=false;
    document.frmSubmit.emailconfirm_a.disabled=false;
    document.frmSubmit.email2_a.disabled=false;
	}
}

/**************************************************** EC support form *******************************************************/

function validate_ecsupport()
{
	if (isEcService() && isJournal_ec1() && isDoctype() && isSubjectArea() && isJournalSelection() && isRevisedRejected() && isArtworkEditing() && isManuscriptSubmission() && isattachfiles() && isClientType() && isUpload() && istandc())
	{
		document.frmSubmit.action = "publication-support-thankyou.php";
		return true;
	}
	else
	{
		return false;
	}	
}

function isJournalSelection(){
	if(document.frmSubmit.serviceschoice_3.checked == true){
		return isJournaltype() && isPubUrgency();
	}
return true;
}

function isRevisedRejected(){

	if(document.frmSubmit.serviceschoice_1.checked == true){
		return isServices() && isLanguages() && isJournalA();
	}
return true;
}

function isArtworkEditing(){

	if(document.frmSubmit.serviceschoice_7.checked == true){
		return isNumimages();
	}
return true;
}

function isManuscriptSubmission(){

	if(document.frmSubmit.serviceschoice_4.checked == true){
		return isTitlepaper() && isAuthorInfo() && isRunningTitle() && isNumberFigure() && isNumberTables() && isSupplimentary() && isSubmittedSameJournal() && isSubmittedDiffJournal() && isDeadline() && isConfirmManuscript() && isConfirmAuthors() && isBriefSummary() && isconflict() && isSubmissionFees();
	}
return true;
}

function isTitlepaper() 
{
	var str = document.frmSubmit.papertitle.value;
	if (str == "")
	{
	alert("Bitte geben Sie die Name des Artikels")
	document.frmSubmit.papertitle.focus();
	return false;
	}
return true;
}

function isconflict(){
	if(document.frmSubmit.noconflict.value == ""){
		alert("Besteht ein Interessenkonflikt?")
		document.frmSubmit.noconflict.focus();
		return false;
	}
	return true;
}

function isJournal_ec1(){
	if(document.frmSubmit.serviceschoice_3.checked == true)
	{
		return true;
	}
	else
	{
		return isJourName2submit();
	}
return true;
}

function isJournal_ec(){
	if(document.frmSubmit.serviceschoice_3.checked == true)
	{
		return true;
	}
	else if(document.frmSubmit.serviceschoice_3.checked == false)
	{
		if(document.frmSubmit.serviceschoice_info.checked == true)
		{
			return isJourName2submit();
		}
		else{
			return true;
		}
	}
return true;
}

function isEcService()
{
	if (!document.frmSubmit.serviceschoice_1.checked && !document.frmSubmit.serviceschoice_2.checked && !document.frmSubmit.serviceschoice_3.checked && !document.frmSubmit.serviceschoice_4.checked && !document.frmSubmit.serviceschoice_5.checked && !document.frmSubmit.serviceschoice_6.checked && !document.frmSubmit.serviceschoice_7.checked)
	{
	alert("Bitte wählen Sie den benötigten Service aus");
	document.frmSubmit.serviceschoice_1.focus();
	return false;
	}
return true;
}

function isNumimages(){
	var str = document.frmSubmit.numimages.value;
	if (str == "")
	{
	alert("Bitte geben Sie die Anzahl der zu bearbeitenden Grafiken")
	document.frmSubmit.numimages.focus();
	return false;
	}
return true;
}

function isServices() 
{
var index = document.frmSubmit.services.selectedIndex;

	if(index == 0){
		alert("Bitte wählen Sie einen Service")
		document.frmSubmit.services.focus();
		return false;
	}
return true;
}

function isPubUrgency() 
{
var index = document.frmSubmit.puburgency.selectedIndex;

	if(index == 0){
		alert("Bitte wählen Sie einen Dringlichkeit")
		document.frmSubmit.puburgency.focus();
		return false;
	}
return true;
}

function isTopJournal1(){
	var str = document.frmSubmit.topjournal1.value;
	if (str == "")
	{
	alert("Bitte geben Sie fünf Journale an, in denen Sie publizieren möchten")
	document.frmSubmit.topjournal1.focus();
	return false;
	}
return true;
}
function isTopJournal2(){
	var str = document.frmSubmit.topjournal2.value;
	if (str == "")
	{
	alert("Bitte geben Sie fünf Journale an, in denen Sie publizieren möchten")
	document.frmSubmit.topjournal2.focus();
	return false;
	}
return true;
}
function isTopJournal3(){
	var str = document.frmSubmit.topjournal3.value;
	if (str == "")
	{
	alert("Bitte geben Sie fünf Journale an, in denen Sie publizieren möchten")
	document.frmSubmit.topjournal3.focus();
	return false;
	}
return true;
}
function isTopJournal4(){
	var str = document.frmSubmit.topjournal4.value;
	if (str == "")
	{
	alert("Bitte geben Sie fünf Journale an, in denen Sie publizieren möchten")
	document.frmSubmit.topjournal4.focus();
	return false;
	}
return true;
}
function isTopJournal5(){
	var str = document.frmSubmit.topjournal5.value;
	if (str == "")
	{
	alert("Bitte geben Sie fünf Journale an, in denen Sie publizieren möchten")
	document.frmSubmit.topjournal5.focus();
	return false;
	}
return true;
}

function isLanguages() 
{
var index = document.frmSubmit.languages.selectedIndex;

	if(index == 0){
		alert("Bitte wählen Sie einen Englisch Stil")
		document.frmSubmit.languages.focus();
		return false;
	}
return true;
}

function isJournalA(){
var index = document.frmSubmit.services.selectedIndex;
var services = document.frmSubmit.services[index].value;	
	if(services == "Revised and submitted to another journal")
	{
		var str = document.frmSubmit.journalname_a.value;
		if (str == "")
		{
		alert("Bei welchem Journal/Verlag hatten Sie den Artikel eingereicht?")
		document.frmSubmit.journalname_a.focus();
		return false;
		}
	}
return true;
}

function isAuthorInfo() 
{
validateObject = new Object();
validateObject.val = document.frmSubmit.email_a.value;
var email_a=document.frmSubmit.email_a.value;	
var pub = false;	

	for(var i=0; i<=1; i++)
	{
		if(document.frmSubmit.authorinfo[i].checked)
		{
			pub = true;
		}
	}
	if(pub == false){
		alert("Angaben zu dem korrespondierenden Autor");
		document.frmSubmit.authorinfo[0].focus();
		return false;
	}
	if(document.frmSubmit.authorinfo[1].checked)
	{
		if (document.frmSubmit.lname_a.value == "")
		{
			alert("Bitte geben Sie die Nachname");
			document.frmSubmit.lname_a.focus();
			return false;
		}
		if (document.frmSubmit.fname_a.value == "")
		{
			alert("Bitte geben Sie die Vorname");
			document.frmSubmit.fname_a.focus();
			return false;
		}
		if((validateObject.val.indexOf("@") == -1) || (validateObject.val.charAt(0) == ".") || (validateObject.val.charAt(0) == "@") ||(validateObject.len < 6) || (validateObject.val.indexOf(".") == -1) || (validateObject.val.charAt(validateObject.val.indexOf("@")+1) == ".") || (validateObject.val.charAt(validateObject.val.indexOf("@")-1) == "."))
		{
			alert("Bitte geben Sie die Email Adresse");
			document.frmSubmit.email_a.focus();
			return false;
		}
		if (document.frmSubmit.organisation_a.value == "")
		{
			alert("Bitte geben Sie die Institut/Firma");
			document.frmSubmit.organisation_a.focus();
			return false;
		}
	}
return true;
}

function isRunningTitle(){
	var str = document.frmSubmit.runningtitle.value;
	if (str == "")
	{
	alert("Bitte geben Sie die Kurztitel");
	document.frmSubmit.runningtitle.focus();
	return false;
	}
return true;
}

function isNumberFigure(){
	var str = document.frmSubmit.numfigures.value;
	if (str == "")
	{
	alert("Bitte geben Sie die Anzahl der Abbildungen");
	document.frmSubmit.numfigures.focus();
	return false;
	}
return true;
}

function isNumberTables(){
	var str = document.frmSubmit.numtables.value;
	if (str == "")
	{
	alert("Bitte geben Sie die Anzahl der Tabellen");
	document.frmSubmit.numtables.focus();
	return false;
	}
return true;
}

function isSupplimentary(){
	var str = document.frmSubmit.supplimentary.value;
	if (str == "")
	{
	alert("Bitte geben Sie die Hilfmaterial beigefügt");
	document.frmSubmit.supplimentary.focus();
	return false;
	}
return true;
}

function isDeadline(){
	var str = document.frmSubmit.deadline.value;
	if (str == "")
	{
	alert("Bitte geben Sie die Abgabetermin");
	document.frmSubmit.deadline.focus();
	return false;
	}
return true;
}

function isSubmittedSameJournal(){
var pub = false;
	for(var i=0; i<=1; i++)
	{
		if(document.frmSubmit.submittedsame[i].checked)
		{
			if(document.frmSubmit.submittedsame[0].checked)
			{
				if(document.frmSubmit.username19.value == "")
				{
					alert("Bitte geben Sie die Zugangsdaten Username");
					document.frmSubmit.username19.focus();
					return false;	
				}
				else if(document.frmSubmit.password19.value == "")
				{
					alert("Bitte geben Sie die Zugangsdaten Passwort");
					document.frmSubmit.password19.focus();
					return false;	
				}
				else
				{
					pub = true;
				}
			}
			else
			{
				pub = true;
			}
		}
	}
	if(pub == false)
	{
		alert("Bei welchem Journal/Verlag hatten Sie den Artikel eingereicht?")
		document.frmSubmit.submittedsame[0].focus();
		return false;
	}
return true;
}

function isSubmittedDiffJournal(){
var pub = false;
	for(var i=0; i<=1; i++)
	{
		if(document.frmSubmit.submitteddiff[i].checked)
		{
			if(document.frmSubmit.submitteddiff[0].checked)
			{
				if(document.frmSubmit.username20.value == "")
				{
					alert("Bitte geben Sie die Zugangsdaten Username");
					document.frmSubmit.username20.focus();
					return false;	
				}
				else if(document.frmSubmit.password20.value == "")
				{
					alert("Bitte geben Sie die Zugangsdaten Passwort");
					document.frmSubmit.password20.focus();
					return false;	
				}
				else
				{
					pub = true;
				}
			}
			else if(document.frmSubmit.submitteddiff[1].checked)
			{
				if(document.frmSubmit.desiredusername.value == "")
				{
					alert("Bitte geben Sie die Gewünschte Zugangsdaten Username");
					document.frmSubmit.desiredusername.focus();
					return false;	
				}
				else if(document.frmSubmit.desiredpassword.value == "")
				{
					alert("Bitte geben Sie die Gewünschte Zugangsdaten Passwort");
					document.frmSubmit.desiredpassword.focus();
					return false;	
				}
				else
				{
					pub = true;
				}
			}
			else
			{
				pub = true;
			}
		}
	}
	if(pub == false)
	{
		alert("Haben Sie schon einmal bei diesem Journal/Verlag eingereicht?")
		document.frmSubmit.submitteddiff[0].focus();
		return false;
	}
return true;
}

function isConfirmManuscript() 
{
var pub = false;	
	for(var i=0; i<=1; i++){
		if(document.frmSubmit.manuscriptconfirm[i].checked)
		{
			pub = true;
		}
	}
	if(pub == false){
		alert("Ich bestätige hiermit, dass dieses Manuskript weder veröffentlicht noch bei einem anderen Journal/Verlag eingereicht wurde.");
		document.frmSubmit.manuscriptconfirm[0].focus();
		return false;
	}
return true;
}

function isConfirmAuthors() 
{
var pub = false;	
	for(var i=0; i<=1; i++){
		if(document.frmSubmit.confirmauthors[i].checked)
		{
			pub = true;
		}
	}
	if(pub == false){
		alert("Haben alle genannten Ko-Autoren der Einreichung an dieses Journal zugestimmt?");
		document.frmSubmit.confirmauthors[0].focus();
		return false;
	}	
return true;
}

function isBriefSummary(){
	var str = document.frmSubmit.briefsummary.value;
	if (str == "")
	{
	alert("Bitte geben Sie eine kurze Beschreibung zur Bedeutung Ihres Manuskripts in Englisch (max. 150 Worte)");
	document.frmSubmit.briefsummary.focus();
	return false;
	}
return true;
}

function isSubmissionFees() 
{
var index = document.frmSubmit.submissionfees.selectedIndex;

	if(index == 0){
		alert("Wie soll die Zahlung der Einreichungsgebühren erfolgen?");
		document.frmSubmit.submissionfees.focus();
		return false;
	}
return true;
}

function isJourName2submit() 
{
	var str = document.frmSubmit.journalname.value;
	if (str == "")
	{
	alert("In welchem Journal möchten Sie publizieren?");
	document.frmSubmit.journalname.focus();
	return false;
	}
return true;
}

function isJournaltype() 
{
var index = document.frmSubmit.journaltype.selectedIndex;
var journaltype = document.frmSubmit.journaltype[index].value;

	if(index == 0){
		alert("Bitte wählen Sie Art des Journals");
		document.frmSubmit.journaltype.focus();
		return false;
	}
	if(journaltype == "Others"){
		return isOtherjournaltype();
	}
	
return true;
}

function isOtherjournaltype(){
	var str = document.frmSubmit.other_journaltype.value;
	if(str == "")
	{
	alert("Bitte geben Sie die Anderes Journal");
	document.frmSubmit.other_journaltype.focus();
	return false;
	}
return true;
}

function isDoctype() 
{
var index = document.frmSubmit.typeofdoc.selectedIndex;
var typeofdoc = document.frmSubmit.typeofdoc[index].value;

	if(index == 0){
		alert("Bitte wählen Sie Zweck des Dokumentes");
		document.frmSubmit.typeofdoc.focus();
		return false;
	}
	if(typeofdoc == "Others"){
		return isOthertypeofdoc();
	}
	
return true;
}

function isOthertypeofdoc(){
	var str = document.frmSubmit.other_typeofdoc.value;
	if(str == "")
	{
	alert("Bitte geben Sie die Anderes Zweck des Dokumentes");
	document.frmSubmit.other_typeofdoc.focus();
	return false;
	}
return true;
}


function ifOthers()
{
	if(document.frmSubmit.journaltype.value == "Others")
	{
		document.getElementById("jourtype").style.display			= "block";
		document.getElementById("jourtype").style.visibility		= "visible";
	}
	else
	{
		document.getElementById("jourtype").style.display			= "none";
		document.getElementById("jourtype").style.visibility		= "hidden";
	}
}

function choice1(){
	if(document.frmSubmit.serviceschoice_1.checked == true){
		document.getElementById("10_13").style.display			= "block";
		document.getElementById("10_13").style.visibility		= "visible";
	}
	else{
		document.getElementById("10_13").style.display			= "none";
		document.getElementById("10_13").style.visibility		= "hidden";
	}
}

function choice3(){
	if(document.frmSubmit.serviceschoice_3.checked == true)
	{
		document.getElementById("5_7").style.display			= "block";
		document.getElementById("5_7").style.visibility		= "visible";

	}
	else{
		document.getElementById("5_7").style.display			= "none";
		document.getElementById("5_7").style.visibility		= "hidden";
	}
}

function choice4(){
	if(document.frmSubmit.serviceschoice_4.checked == true){
		document.getElementById("8").style.display			= "block";
		document.getElementById("8").style.visibility		= "visible";
		document.getElementById("14_30").style.display			= "block";
		document.getElementById("14_30").style.visibility		= "visible";

	}
	else{
		document.getElementById("8").style.display			= "none";
		document.getElementById("8").style.visibility		= "hidden";
		document.getElementById("14_30").style.display			= "none";
		document.getElementById("14_30").style.visibility		= "hidden";

	}
}

function choice7(){
	if(document.frmSubmit.serviceschoice_7.checked == true){
		document.getElementById("9").style.display			= "block";
		document.getElementById("9").style.visibility		= "visible";

	}
	else{
		document.getElementById("9").style.display			= "none";
		document.getElementById("9").style.visibility		= "hidden";

	}
}

function choiceother(){
	if(document.frmSubmit.serviceschoice_3.checked == true){
		document.getElementById("1_2").style.display			= "none";
		document.getElementById("1_2").style.visibility		= "hidden";
	}
	else{
		document.getElementById("1_2").style.display			= "block";
		document.getElementById("1_2").style.visibility		= "visible";	
		}
}

function samejournalYes(){
	document.getElementById("19_yes").style.visibility = "visible";
	document.getElementById("19_yes").style.display = "block";
}

function samejournalNo(){
	document.getElementById("19_yes").style.visibility = "hidden";
	document.getElementById("19_yes").style.display = "none";
	document.frmSubmit.username19.value = "";
	document.frmSubmit.password19.value = "";
	
}

function sameauthorinfo(){
	document.getElementById("authorinformation").style.visibility = "hidden";
	document.getElementById("authorinformation").style.display = "none";
	document.frmSubmit.fname_a.value = "";
	document.frmSubmit.lname_a.value = "";
	document.frmSubmit.organisation_a.value = "";
	document.frmSubmit.email_a.value = "";
	document.frmSubmit.designation_a.selectedIndex = 0;
}

function diffauthorinfo(){
	document.getElementById("authorinformation").style.visibility = "visible";
	document.getElementById("authorinformation").style.display = "block";
}


function showhide12_13(){
	var index = document.frmSubmit.services.selectedIndex;
	var services = document.frmSubmit.services[index].value;
	if(services == "Revised and submitted to another journal"){
		document.getElementById("12_13").style.visibility = "visible";
		document.getElementById("12_13").style.display = "block";
	}
	else{
		document.getElementById("12_13").style.visibility = "hidden";
		document.getElementById("12_13").style.display = "none";
		document.frmSubmit.journalname_a.value = "";
		document.frmSubmit.journalurl_a.value = "";
	}
}

function diffjournalYes(){
	document.getElementById("20_yes").style.visibility = "visible";
	document.getElementById("20_yes").style.display = "block";
	document.getElementById("20_no").style.visibility = "hidden";
	document.getElementById("20_no").style.display = "none";
	document.frmSubmit.desiredusername.value = "";
	document.frmSubmit.desiredpassword.value = "";
}

function diffjournalNo(){
	document.getElementById("20_yes").style.visibility = "hidden";
	document.getElementById("20_yes").style.display = "none";
	document.getElementById("20_no").style.visibility = "visible";
	document.getElementById("20_no").style.display = "block";
	document.frmSubmit.username20.value = "";
	document.frmSubmit.password20.value = "";
}

function forexisting_ec()
{
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
	document.getElementById("pd8").style.visibility = "visible";
	document.getElementById("pd8").style.display = "block";
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
}
function fornew_ec()
{
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
	document.getElementById("pd8").style.visibility = "visible";
	document.getElementById("pd8").style.display = "block";
	document.frmSubmit.membershipid.value = "";
}

function showmanuscript(){
	document.getElementById('typeofmanuscript').style.visibility = "visible";
	document.getElementById('typeofmanuscript').style.display = "block";
}

function hidemanuscript(){
	document.getElementById('typeofmanuscript').style.visibility = "hidden";
	document.getElementById('typeofmanuscript').style.display = "none";
	document.frmSubmit.typeofdoc.selectedIndex = 0;
}