// JavaScript Document for validation of 23.htm
function validate_step1() {
    if (isservice() && isMif() && isDelDate() && isHrs() && isEditstart()) {
        return showonlyone('assignmentdetails');
    } else {
        return false;
    }
}

function validate_step2() {
    if (isSubjectArea() && isInputfile() && isOutputfile() && isLanguage() && isUseofdocu2() && isTypeofdoc() && isFormat3()) {
        return showonlyone('uploadnpayment');
    } else {
        return false;
    }
}

function validate_step3() {
    if (isattachfiles() && isReceipt() && isUpload() && isExtension()) {
        return showonlyone('personaldetails');
    } else {
        return false;
    }
}

function validate_confirm() {
    if (isClientType() && isPlandetails() && isCaptcha() && istandc()) {
        document.frmSubmit.action = "292_nreq.php";
        return true;
    } else {
        return false;
    }
}

function isservice() {
    var pub = false;
    for (var i = 0; i <= 1; i++) {
        if (document.frmSubmit.service[i].checked) {
            pub = true;
        }
    }
    if (pub == false) {
        alert("ご希望のサービスをお選びください。");
        document.frmSubmit.service[0].focus();
        return false;
    }
    if (document.frmSubmit.service[1].checked) {
        if (document.frmSubmit.priority_advance.selectedIndex == 0) {
            alert("納品速度を選択してください。");
            document.frmSubmit.priority_advance.focus();
            return false;
        }
        return true;
    } else {
        if (document.frmSubmit.priority.selectedIndex == 0) {
            alert("納品速度を選択してください。");
            document.frmSubmit.priority.focus();
            return false;
        }
        return true;
    }
}

function isMif() {
	
	 if (document.frmSubmit.service[0].checked) 
	 {
		 return isNormalMifReq();
	 }
	 else
	 {
		 return isAdvanceMifReq();
	 }
		 
return true;
}

function isNormalMifReq() {
    var pub = false;
    for (var i = 0; i <= 1; i++) {
        if (document.frmSubmit.mifnormal[i].checked) {
            pub = true;
        }
    }
    if (pub == false) {
        alert("あんしん保証を付けますか？");
        document.frmSubmit.mifnormal[0].focus();
        return false;
    }
    return true;
}

function isAdvanceMifReq() {
    var pub = false;
    for (var i = 0; i <= 1; i++) {
        if (document.frmSubmit.mifadvance[i].checked) {
            pub = true;
        }
    }
    if (pub == false) {
        alert("もっとあんしん保証を付けますか？");
        document.frmSubmit.mifadvance[0].focus();
        return false;
    }
    return true;
}

function isMifReq() {
    var pub = false;
    for (var i = 0; i <= 1; i++) {
        if (document.frmSubmit.mif[i].checked) {
            pub = true;
        }
    }
    if (pub == false) {
        alert("あんしん保証を付けますか？");
        document.frmSubmit.mif[0].focus();
        return false;
    }
    return true;
}

function isDelDate() {
    if (document.frmSubmit.deadlinestrict.checked == true) {
        return true;
    }
    if (document.frmSubmit.deadlinestrict.checked == false) {
        var str = document.frmSubmit.delMonth.selectedIndex;
        if (str == 0) {
            alert("納品希望日を選択してください。")
            document.frmSubmit.delMonth.focus();
            return false;
        }
        var str = document.frmSubmit.delDay.selectedIndex;
        if (str == 0) {
            alert("納品希望日を選択してください。")
            document.frmSubmit.delDay.focus();
            return false;
        }
        var str = document.frmSubmit.delYear.selectedIndex;
        if (str == 0) {
            alert("納品希望日を選択してください。")
            document.frmSubmit.delYear.focus();
            return false;
        }
        var intMonth = document.frmSubmit.delMonth.selectedIndex;
        var intMonth = document.frmSubmit.delMonth.selectedIndex;
        var intDay = document.frmSubmit.delDay.selectedIndex;
        if ((intMonth == 4 || intMonth == 6 || intMonth == 9 || intMonth == 11) && intDay == 31) {
            alert("納品希望日を選択してください。");
            document.frmSubmit.delMonth.focus();
            return false;
        }
        var intYear = document.frmSubmit.delYear.selectedIndex;
        var intYearvalue = document.frmSubmit.delYear[intYear].value;
        if (intYearvalue != 2012) {
            if ((intMonth == 2 && (intDay == 29 || intDay == 30 || intDay == 31))) {
                alert("納品希望日を選択してください。");
                document.frmSubmit.delDay.focus();
                return false;
            }
        }
        return true;
    }
}

function isHrs() {
    if (document.frmSubmit.deadlinestrict.checked == true) {
        return true;
    }
    if (document.frmSubmit.deadlinestrict.checked == false) {
        if (document.frmSubmit.delHrs.selectedIndex == 0) {
            alert("納品希望時刻を選択してください。");
            document.frmSubmit.delHrs.focus();
            return false;
        }
        return true;
    }
}

function isEditstart() {
    var pub = false;
    for (var i = 0; i <= 1; i++) {
        if (document.frmSubmit.shouldwestart[i].checked) {
            pub = true;
        }
    }
    if (pub == false) {
        alert("英文校正の開始日をお知らせください。すぐに校正を開始しますか？それとも、お見積もりを確認してから依頼を確定、その後に校正を開始しますか？");
        document.frmSubmit.shouldwestart[0].focus();
        return false;
    }
    return true;
}

function isSubjectArea() {
    if (document.frmSubmit.subsubject.selectedIndex == 0) {
        alert("近接の科目名をお選びください。");
        document.frmSubmit.subsubject.focus();
        return false;
    } else if (document.frmSubmit.specialization.selectedIndex == 0) {
        alert("お客様の専門分野をお選びください。");
        document.frmSubmit.specialization.focus();
        return false;
    } else if ((document.frmSubmit.specialization.value == "Other") && (document.frmSubmit.otherspecialization.value == "")) {
        alert("お客様の専門分野名をお知らせください。");
        document.frmSubmit.otherspecialization.focus();
        return false;
    }
    return true;
}

function isInputfile() {
    if (document.frmSubmit.inputfile.selectedIndex == 0) {
        alert("ご依頼原稿のファイル形式をお選びください。");
        document.frmSubmit.inputfile.focus();
        return false;
    }
    return true;
}

function isOutputfile() {
    if (document.frmSubmit.outputfile.selectedIndex == 0) {
        alert("納品原稿のファイル形式をお選びください。");
        document.frmSubmit.outputfile.focus();
        return false;
    }
    return true;
}

function isLanguage() {
    if (document.frmSubmit.language.selectedIndex == 0) {
        alert("イギリス／アメリカ英語のどちらでの校正をご希望かお知らせください。");
        document.frmSubmit.language.focus();
        return false;
    }
    return true;
}

function isUseofdocu2() {
    if (document.frmSubmit.useofdoc.selectedIndex == 0) {
        alert("ご依頼原稿の用途をお知らせください。");
        document.frmSubmit.useofdoc.focus();
        return false;
    }
    return true;
}

function isTypeofdoc() {
    if (document.frmSubmit.typeofdoc.selectedIndex == 0) {
        alert("原稿のタイプをお選びください。");
        document.frmSubmit.typeofdoc.focus();
        return false;
    }
    return true;
}

function isFormat3() {
    if (document.frmSubmit.format.selectedIndex == 0) {
        alert("フォーマット調整が必要ですか？");
        document.frmSubmit.format.focus();
        return false;
    }
    return true;
}

function isattachfiles() {
    var str = document.frmSubmit.numeditingfiles.value;
    var itr = document.frmSubmit.numreferencefiles.value;
    if (str == "") {
        alert("ご依頼のファイル数をご記入ください。")
        document.frmSubmit.numeditingfiles.focus();
        return false;
    }
    if (itr == "") {
        alert("参考資料のファイル数をお知らせください。")
        document.frmSubmit.numreferencefiles.focus();
        return false;
    }
    return true;
}

function isReceipt() {
    var pub = false;
    for (var i = 0; i <= 1; i++) {
        if (document.frmSubmit.ePublicEx[i].checked) {
            pub = true;
        }
    }
    if (pub == false) {
        alert("見積書・納品書・請求書が必要かどうかをお知らせください。");
        document.frmSubmit.ePublicEx[0].focus();
        return false;
    }
    if (document.frmSubmit.ePublicEx[0].checked) {
        return true;
    } else {
        if (document.frmSubmit.payer.value == "") {
            alert("請求書の宛名をご記入ください。");
            document.frmSubmit.publicExText.focus();
            return false;
        }
        return true;
    }
}

function isUpload() {
    if (document.frmSubmit.superdat.value == "") {
        var confirmAns = confirm("アップロードするファイルをお選びください。ファイルをアップロードして頂ければ、より正確なお見積もりをお知らせことができます。アップロードせずにフォームを送信する場合はOKを、アップロードされる場合はcancelをクリックしてください。");
        if (confirmAns) {
            return true;
        } else {
            document.frmSubmit.superdat.focus();
            return false;
        }
        return false;
    }
    return true;
}

function isExtension() {
    var s = document.frmSubmit.superdat.value;
    // Return everything after the last '.'
    function getExtension2(s) {
        var m = s.match(/[^.]+$/);
        return m ? m[0] : '';
    }
    var ext = getExtension2(s);
    if (s !== "") {
        if ((ext == "doc") || (ext == "docx") || (ext == "xls") || (ext == "xlsm")

            || (ext == "xlsx") || (ext == "ppt") || (ext == "pptx") || (ext == "rtf") || (ext == "dot") || (ext == "hwp") || (ext == "zip") || (ext == "rar") || (ext == "lzh") || (ext ==

                "pdf") || (ext == "tex") || (ext == "7z") || (ext == "txt") || (ext == "jpeg") || (ext == "tiff")

            || (ext == "eps") || (ext == "png") || (ext == "gif")) {
            return true;
        } else {
            alert(" 対象外のファイルとなります。ファイルをご確認のうえ、再度ファイルのアップロードお願いします。");
            document.frmSubmit.superdat.focus();
            return false;
        }
    }
    return true;
}

function isPlandetails() {
    if (document.frmSubmit.clienttype[0].checked == true) {
        return isRequest();
    }
    return true;
}

function isRequest() {
    var pub = false;
    for (var i = 0; i <= 1; i++) {
        if (document.frmSubmit.isrequest[i].checked) {
            pub = true;
        }
    }
    if (document.frmSubmit.isrequest[0].checked) {
        if (document.frmSubmit.reeditasn.value == "") {
            alert("アサイメント番号を記入してください。");
            document.frmSubmit.reeditasn.focus();
            return false;
        } else {
            return true;
        }
    }
    if (pub == false) {
        alert("以前のアサイメントに関する再校正のご依頼でしょうか。");
        document.frmSubmit.isrequest[0].focus();
        return false;
    }
    return true;
}

function isCaptcha() {
    var str = document.frmSubmit.answer.value;
    var num1 = document.frmSubmit.num1.value;
    var num2 = document.frmSubmit.num2.value;
    var total = Math.round(num1) + Math.round(num2);
    if (str == "") {
        alert("計算が間違っています。");
        document.frmSubmit.answer.focus();
        return false;
    } else if (str != total) {
        alert("計算が間違っています。");
        document.frmSubmit.answer.focus();
        return false;
    }
    return true;
}

function istandc() {
    if (document.frmSubmit.agreeterms.checked == false) {
        alert("「ご利用規約に同意する」をクリックしてください。（同意のない場合、サービスをご利用いただけません）");
        document.frmSubmit.agreeterms.focus();
        return false;
    }
    return true;
}

function showonlyone(thechosenone) {
    var newboxes = document.getElementsByTagName("div");
    for (var x = 0; x < newboxes.length; x++) {
        name = newboxes[x].getAttribute("name");
        if (name == 'newboxes') {
            if (newboxes[x].id == thechosenone) {
                newboxes[x].style.display = 'block';
                window.scroll(0, 400);
            } else {
                newboxes[x].style.display = 'none';
            }
        }
    }
}

function isClientType() {
    if (document.frmSubmit.clienttype[1].checked == true) {
        return islastname() && isfirstname() && isOrg() && isCountry() && isEmail() && isMatch() && isZipCode() && isstate() && iscity() && isAddress() && isPhone() && isRefered();
    } else {
        return ismemberid1() && islastname() && isfirstname() && isOrg() && isEmail() && isMatch();
    }
}

function islastname() {
    var str = document.frmSubmit.lname.value;
    if (str == "") {
        alert("お名前（ローマ字）を入力してください。")
        document.frmSubmit.lname.focus();
        return false;
    }
    return true;
}

function isfirstname() {
    var str = document.frmSubmit.fname.value;
    if (str == "") {
        alert("お名前を入力してください。")
        document.frmSubmit.fname.focus();
        return false;
    }
    return true;
}

function isOrg() {
    var str = document.frmSubmit.organisation.value;
    if (str == "") {
        alert("ご所属の組織名を入力してください。")
        document.frmSubmit.organisation.focus();
        return false;
    }
    return true;
}

function isCountry() {
    if (document.frmSubmit.country.selectedIndex == 0) {
        alert("国名を選択してください。");
        document.frmSubmit.country.focus();
        return false;
    }
    return true;
}

function isEmail() {
    validateObject = new Object();
    validateObject.val = document.frmSubmit.email.value;
    if ((validateObject.val.indexOf("@") == -1) || (validateObject.val.charAt(0) == ".") || (validateObject.val.charAt(0) == "@") || (validateObject.len < 6) || (validateObject.val.indexOf(".") == -1) || (validateObject.val.charAt(validateObject.val.indexOf("@") + 1) == ".") || (validateObject.val.charAt(validateObject.val.indexOf("@") - 1) == ".")) {
        alert("Eメールアドレスを正しく入力してください。");
        document.frmSubmit.email.focus();
        return false;
    }
    return true;
}

function isMatch() {
    var email = document.frmSubmit.email.value;
    var cemail = document.frmSubmit.emailconfirm.value;
    if (email !== cemail) {
        alert("Eメールアドレスをもう一度正しく入力してください。");
        document.frmSubmit.emailconfirm.focus();
        return false;
    }
    return true;
}

function isZipCode() {
    var str = document.frmSubmit.zipcode.value;
    if (str == "") {
        alert("郵便番号を入力してください。")
        document.frmSubmit.zipcode.focus();
        return false;
    }
    return true;
}

function isstate() {
    var str = document.frmSubmit.state.value;
    if (str == "") {
        alert("都道府県を入力してください。")
        document.frmSubmit.state.focus();
        return false;
    }
    return true;
}

function iscity() {
    var str = document.frmSubmit.city.value;
    if (str == "") {
        alert("区市町村を入力してください。")
        document.frmSubmit.city.focus();
        return false;
    }
    return true;
}

function isAddress() {
    var str = document.frmSubmit.mailingaddress1.value;
    if (str == "") {
        alert("以下住所を入力してください。")
        document.frmSubmit.mailingaddress1.focus();
        return false;
    }
    return true;
}

function isPhone() {
    var no = document.frmSubmit.phone.value;
    if (no.length == 0) {
        alert("電話番号を入力してください。");
        document.frmSubmit.phone.focus();
        document.frmSubmit.phone.select();
        return false;
    }
    for (var i = 1; i < no.length; i++) {
        var strpno = (no.substring(i, i + 1));
        if ((strpno > 'a' && strpno < 'z') || (strpno > 'A' && strpno < 'Z')) {
            alert("電話番号を入力してください。");
            document.frmSubmit.phone.focus();
            document.frmSubmit.phone.select();
            return false;
        }
    }
    return true;
}

function isRefered() {
    var menuSel = document.frmSubmit.R1.selectedIndex;
    var menuSell = document.frmSubmit.R2.selectedIndex;
    if (menuSel == 0) {
        alert("どのようにして弊社をお知りになったかお選びください。");
        document.frmSubmit.R1.focus();
        return false;
    }
    if (menuSel == 1 || menuSel == 2) {
        if (menuSell == 0) {
            alert("どのようにして弊社をお知りになったかお選びください。");
            document.frmSubmit.R2.focus();
            return false;
        }
    }
    if (menuSel == 7 || menuSel == 8 || menuSel == 9 || menuSel == 10 || menuSel == 12) {
        return true;
    }
    if (menuSel == 14 || menuSell == 7) {
        if (document.frmSubmit.txtRef.value == "" || document.frmSubmit.txtRef.value == null) {
            alert("どのようにして弊社をお知りになったかお選びください。");
            document.frmSubmit.txtRef.focus();
            return false;
        } else {
            return true;
        }
    }
    return true;
}

function ismemberid1() {
    var str = document.frmSubmit.membershipid.value;
    if (str == "") {
        alert("メンバーシップIDを入力してください。")
        document.frmSubmit.membershipid.focus();
        return false;
    }
    return true;
}

function serviceshow() {
    document.getElementById("service_options").style.visibility = "hidden";
    document.getElementById("service_options").style.display = "none";
    document.getElementById("servicetype").style.visibility = "visible";
    document.getElementById("servicetype").style.display = "block";
    document.getElementById("addons").style.display = "none";
    document.getElementById("addons").style.visibility = "hidden";
    document.getElementById("divcrletter").style.display = "none";
    document.getElementById("divcrletter").style.visibility = "hidden";
    document.getElementById("mifoption2").style.visibility = "hidden";
    document.getElementById("mifoption2").style.display = "none";
    document.getElementById("mifoption1").style.visibility = "visible";
    document.getElementById("mifoption1").style.display = "block";
	document.getElementById("miffree").style.visibility = "hidden";
    document.getElementById("miffree").style.display = "none";
    document.frmSubmit.coverletter.checked = false;
    document.frmSubmit.priority_advance.selectedIndex = 0;
	document.frmSubmit.mifadvance[0].checked = false;
    document.frmSubmit.mifadvance[1].checked = false;
}

function servicehide() {
    document.getElementById("service_options").style.visibility = "visible";
    document.getElementById("service_options").style.display = "block";
    document.getElementById("servicetype").style.visibility = "hidden";
    document.getElementById("servicetype").style.display = "none";
    document.getElementById("mrc").style.display = "block";
    document.getElementById("addons").style.display = "block";
    document.getElementById("addons").style.visibility = "visible";
    document.getElementById("mrc").style.visibility = "visible";
    document.getElementById("divcrletter").style.display = "block";
    document.getElementById("divcrletter").style.visibility = "visible";
    document.getElementById("mifoption2").style.visibility = "visible";
    document.getElementById("mifoption2").style.display = "block";
    document.getElementById("mifoption1").style.visibility = "hidden";
    document.getElementById("mifoption1").style.display = "none";
	document.getElementById("miffree").style.visibility = "visible";
    document.getElementById("miffree").style.display = "block";
    document.frmSubmit.priority.selectedIndex = 0;
    document.frmSubmit.mifnormal[0].checked = false;
    document.frmSubmit.mifnormal[1].checked = false;
}

function forexisting() {
    document.getElementById("editorref").style.visibility = "visible";
    document.getElementById("editorref").style.display = "block";
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
    document.getElementById("pd6").style.visibility = "visible";
    document.getElementById("pd6").style.display = "block";
    document.getElementById("pd7").style.visibility = "visible";
    document.getElementById("pd7").style.display = "block";
    document.frmSubmit.department.value = "";
    document.frmSubmit.designation.selectedIndex = 0;
    document.frmSubmit.zipcode.value = "";
    document.frmSubmit.state.value = "";
    document.frmSubmit.city.value = "";
    document.frmSubmit.mailingaddress1.value = "";
    document.frmSubmit.phone.value = "";
    document.frmSubmit.extno.value = "";
    document.frmSubmit.fax.value = "";
    document.frmSubmit.website.value = "";
    document.frmSubmit.phone.value = "";
    document.frmSubmit.R1.selectedIndex = 0;
    document.frmSubmit.txtRef.value = "";
    document.frmSubmit.clienttype[0].checked = true;
    document.frmSubmit.clienttype[1].checked = false;
}

function fornew() {
    document.getElementById("editorref").style.visibility = "hidden";
    document.getElementById("editorref").style.display = "none";
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
    document.getElementById("pd6").style.visibility = "hidden";
    document.getElementById("pd6").style.display = "none";
    document.getElementById("pd7").style.visibility = "visible";
    document.getElementById("pd7").style.display = "block";
    document.frmSubmit.membershipid.value = "";
    document.frmSubmit.asneditor.value = "";
    document.frmSubmit.oldeditor[0].checked = false;
    document.frmSubmit.oldeditor[1].checked = false;
    document.frmSubmit.oldeditor[2].checked = false;
    document.frmSubmit.isrequest.checked = false;
    document.frmSubmit.clienttype[0].checked = false;
    document.frmSubmit.clienttype[1].checked = true;
}

function isCheck() {
    if (document.frmSubmit.deadlinestrict.checked == true) {
        document.frmSubmit.delMonth.disabled = true;
        document.frmSubmit.delDay.disabled = true;
        document.frmSubmit.delYear.disabled = true;
        document.frmSubmit.delHrs.disabled = true;
        document.frmSubmit.delMin.disabled = true;
        document.frmSubmit.delDay.selectedIndex = 0;
        document.frmSubmit.delMonth.selectedIndex = 0;
        document.frmSubmit.delYear.selectedIndex = 0;
        document.frmSubmit.delHrs.selectedIndex = 0
        document.frmSubmit.delMin.selectedIndex = 0;
    }
    if (document.frmSubmit.deadlinestrict.checked == false) {
        document.frmSubmit.delMonth.disabled = false;
        document.frmSubmit.delDay.disabled = false;
        document.frmSubmit.delYear.disabled = false;
        document.frmSubmit.delHrs.disabled = false;
        document.frmSubmit.delMin.disabled = false;
    }
}

function receiptshow() {
    document.getElementById("receiptchoice").style.visibility = "visible";
    document.getElementById("receiptchoice").style.display = "block";
}

function receipthide() {
    document.getElementById("receiptchoice").style.visibility = "hidden";
    document.getElementById("receiptchoice").style.display = "none";
    document.frmSubmit.publicExText.selectedIndex = 0;
}

function reasnshow() {
    document.getElementById("reasnedit").style.visibility = "visible";
    document.getElementById("reasnedit").style.display = "block";
}

function reasnhide() {
    document.getElementById("reasnedit").style.visibility = "hidden";
    document.getElementById("reasnedit").style.display = "none";
    document.frmSubmit.reeditasn.value = "";
}

function showHidepriority() {
    if ((document.forms[0].priority.value == "Economy (エコノミー)") || (document.forms[0].priority.value == "")) {
        document.getElementById("mrc").style.display = "none";
        document.getElementById("mrc").style.visibility = "hidden";
        document.getElementById("addons").style.display = "none";
        document.getElementById("addons").style.visibility = "hidden";
    } else {
        document.getElementById("mrc").style.display = "block";
        document.getElementById("mrc").style.visibility = "visible";
        document.getElementById("addons").style.display = "block";
        document.getElementById("addons").style.visibility = "visible";
    }
}

function Mifshowhide() {
    if ((document.forms[0].priority.value == "Economy (エコノミー)") || (document.forms[0].priority.value == "Standard (スタンダード)") || (document.forms[0].priority.value == "Express (エクスプレス)")) {
        document.getElementById("mifoption1").style.visibility = "visible";
        document.getElementById("mifoption1").style.display = "block";
        document.getElementById("mifoption2").style.visibility = "hidden";
        document.getElementById("mifoption2").style.display = "none";
    } else if ((document.forms[0].priority.value == "Super Express (スーパーエクスプレス)") || (document.forms[0].priority.value == "Last minute plan (駆け込み乗車プラン)")) {
        document.getElementById("mifoption1").style.visibility = "hidden";
        document.getElementById("mifoption1").style.display = "none";
        document.getElementById("mifoption2").style.visibility = "visible";
        document.getElementById("mifoption2").style.display = "block";
        document.frmSubmit.mif[0].checked = false;
        document.frmSubmit.mif[1].checked = false;
    } else {
        document.getElementById("mifoption1").style.visibility = "hidden";
        document.getElementById("mifoption1").style.display = "none";
        document.getElementById("mifoption2").style.visibility = "hidden";
        document.getElementById("mifoption2").style.display = "none";
        document.frmSubmit.mif[0].checked = false;
        document.frmSubmit.mif[1].checked = false;
    }
}

function setOptions2(chosen) {
    var selbox5 = document.frmSubmit.R2;
    selbox5.options.length = 1;
    if (document.frmSubmit.R2.value == "Others") {
        document.frmSubmit.txtRef.disabled = false;
    } else {
        document.frmSubmit.txtRef.disabled = true;
        document.frmSubmit.txtRef.value = "";
    }
    if (chosen == "") {
        document.getElementById("span1").innerHTML = "";
        document.frmSubmit.R2.disabled = true;
        document.frmSubmit.txtRef.disabled = true;
        document.frmSubmit.txtRef.value = "";
        document.getElementById("message").style.display = "none";
        document.getElementById("message").style.visibility = "hidden";
        document.getElementById("r2").style.display = "none";
        document.getElementById("r2").style.visibility = "hidden";
        document.getElementById("txtref").style.display = "none";
        document.getElementById("txtref").style.visibility = "hidden";
    }
    if (chosen == "Search Engine") {
        selbox5.options[selbox5.options.length] = new Option('Google', 'Google');
        selbox5.options[selbox5.options.length] = new Option('Yahoo', 'Yahoo');
        selbox5.options[selbox5.options.length] = new Option('Bing (MSN)', 'Bing (MSN)');
        selbox5.options[selbox5.options.length] = new Option('Nifty', 'Nifty');
        selbox5.options[selbox5.options.length] = new Option('Goo', 'Goo');
        selbox5.options[selbox5.options.length] = new Option('Infoseek', 'Infoseek');
        selbox5.options[selbox5.options.length] = new Option('その他', 'Others');
        document.frmSubmit.R2.disabled = false;
        document.getElementById("span1").innerHTML = "検索語句";
        document.frmSubmit.txtRef.disabled = false;
        document.getElementById("message").style.display = "block";
        document.getElementById("message").style.visibility = "visible";
        document.getElementById("r2").style.display = "block";
        document.getElementById("r2").style.visibility = "visible";
        document.getElementById("txtref").style.display = "block";
        document.getElementById("txtref").style.visibility = "visible";
    }
    if (chosen == "Personal Referral") {
        selbox5.options[selbox5.options.length] = new Option('知人・友人', 'Person');
        selbox5.options[selbox5.options.length] = new Option('大学・研究所・団体', 'University/Institute/Organization');
        document.frmSubmit.R2.disabled = false;
        document.getElementById("span1").innerHTML = "氏名・名称";
        document.frmSubmit.txtRef.disabled = false;
        document.getElementById("r2").style.display = "block";
        document.getElementById("r2").style.visibility = "visible";
        document.getElementById("message").style.display = "block";
        document.getElementById("message").style.visibility = "visible";
        document.getElementById("txtref").style.display = "block";
        document.getElementById("txtref").style.visibility = "visible";
    }
    if (chosen == "Advertisement Banner") {
        document.frmSubmit.R2.disabled = true;
        document.getElementById("span1").innerHTML = "バナー掲載URL・サイト名";
        document.frmSubmit.txtRef.disabled = false;
        document.getElementById("message").style.display = "block";
        document.getElementById("message").style.visibility = "visible";
        document.getElementById("r2").style.display = "none";
        document.getElementById("r2").style.visibility = "hidden";
        document.getElementById("txtref").style.display = "block";
        document.getElementById("txtref").style.visibility = "visible";
    }
    if (chosen == "Website Link") {
        document.frmSubmit.R2.disabled = true;
        document.getElementById("span1").innerHTML = "リンク掲載URL・サイト名";
        document.frmSubmit.txtRef.disabled = false;
        document.getElementById("message").style.display = "block";
        document.getElementById("message").style.visibility = "visible";
        document.getElementById("r2").style.display = "none";
        document.getElementById("r2").style.visibility = "hidden";
        document.getElementById("txtref").style.display = "block";
        document.getElementById("txtref").style.visibility = "visible";
    }
    if (chosen == "Gakkai") {
        document.frmSubmit.R2.disabled = true;
        document.getElementById("span1").innerHTML = "学会名・URL";
        document.frmSubmit.txtRef.disabled = false;
        document.getElementById("message").style.display = "block";
        document.getElementById("message").style.visibility = "visible";
        document.getElementById("r2").style.display = "none";
        document.getElementById("r2").style.visibility = "hidden";
        document.getElementById("txtref").style.display = "block";
        document.getElementById("txtref").style.visibility = "visible";
    }
    if (chosen == "Journal") {
        document.frmSubmit.R2.disabled = true;
        document.getElementById("span1").innerHTML = "ジャーナル名・URL";
        document.frmSubmit.txtRef.disabled = false;
        document.getElementById("message").style.display = "block";
        document.getElementById("message").style.visibility = "visible";
        document.getElementById("r2").style.display = "none";
        document.getElementById("r2").style.visibility = "hidden";
        document.getElementById("txtref").style.display = "block";
        document.getElementById("txtref").style.visibility = "visible";
    }
    if (chosen == "Conference") {
        document.frmSubmit.R2.disabled = true;
        document.getElementById("span1").innerHTML = "会議名・URL";
        document.frmSubmit.txtRef.disabled = false;
        document.getElementById("message").style.display = "block";
        document.getElementById("message").style.visibility = "visible";
        document.getElementById("r2").style.display = "none";
        document.getElementById("r2").style.visibility = "hidden";
        document.getElementById("txtref").style.display = "block";
        document.getElementById("txtref").style.visibility = "visible";
    }
    if (chosen == "Others") {
        document.frmSubmit.R2.disabled = true;
        document.getElementById("span1").innerHTML = "名称・URL";
        document.frmSubmit.txtRef.disabled = false;
        document.getElementById("message").style.display = "block";
        document.getElementById("message").style.visibility = "visible";
        document.getElementById("r2").style.display = "none";
        document.getElementById("r2").style.visibility = "hidden";
        document.getElementById("txtref").style.display = "block";
        document.getElementById("txtref").style.visibility = "visible";
    }
    if (chosen == "Enago Blog") {
        document.frmSubmit.R2.disabled = true;
        document.getElementById("span1").innerHTML = "";
        document.frmSubmit.txtRef.disabled = true;
        document.frmSubmit.txtRef.value = "";
        document.getElementById("message").style.display = "none";
        document.getElementById("message").style.visibility = "hidden";
        document.getElementById("r2").style.display = "none";
        document.getElementById("r2").style.visibility = "hidden";
        document.getElementById("txtref").style.display = "none";
        document.getElementById("txtref").style.visibility = "hidden";
    }
    if (chosen == "Mobile Website") {
        document.frmSubmit.R2.disabled = true;
        document.getElementById("span1").innerHTML = "";
        document.frmSubmit.txtRef.disabled = true;
        document.frmSubmit.txtRef.value = "";
        document.getElementById("message").style.display = "none";
        document.getElementById("message").style.visibility = "hidden";
        document.getElementById("r2").style.display = "none";
        document.getElementById("r2").style.visibility = "hidden";
        document.getElementById("txtref").style.display = "none";
        document.getElementById("txtref").style.visibility = "hidden";
    }
    if (chosen == "Ulatus") {
        document.getElementById("span1").innerHTML = "";
        document.frmSubmit.R2.disabled = true;
        document.frmSubmit.txtRef.disabled = true;
        document.frmSubmit.txtRef.value = "";
        document.getElementById("message").style.display = "none";
        document.getElementById("message").style.visibility = "hidden";
        document.getElementById("r2").style.display = "none";
        document.getElementById("r2").style.visibility = "hidden";
        document.getElementById("txtref").style.display = "none";
        document.getElementById("txtref").style.visibility = "hidden";
    }
    if (chosen == "Voxtab") {
        document.frmSubmit.R2.disabled = true;
        document.getElementById("span1").innerHTML = "";
        document.frmSubmit.txtRef.disabled = true;
        document.frmSubmit.txtRef.value = "";
        document.getElementById("message").style.display = "none";
        document.getElementById("message").style.visibility = "hidden";
        document.getElementById("r2").style.display = "none";
        document.getElementById("r2").style.visibility = "hidden";
        document.getElementById("txtref").style.display = "none";
        document.getElementById("txtref").style.visibility = "hidden";
    }
    if (chosen == "IACE") {
        document.frmSubmit.R2.disabled = true;
        document.getElementById("span1").innerHTML = "";
        document.frmSubmit.txtRef.disabled = true;
        document.frmSubmit.txtRef.value = "";
        document.getElementById("message").style.display = "none";
        document.getElementById("message").style.visibility = "hidden";
        document.getElementById("r2").style.display = "none";
        document.getElementById("r2").style.visibility = "hidden";
        document.getElementById("txtref").style.display = "none";
        document.getElementById("txtref").style.visibility = "hidden";
    }
}

function choiceshowhide() {
    if (document.forms[0].format.value == "yes, please format") {
        document.getElementById("formatchoice").style.visibility = "visible";
        document.getElementById("formatchoice").style.display = "block";
    } else {
        document.getElementById("formatchoice").style.visibility = "hidden";
        document.getElementById("formatchoice").style.display = "none";
        document.frmSubmit.formatsub[0].checked = false;
        document.frmSubmit.formatsub[1].checked = false;
        document.frmSubmit.journalurl.value = "";
    }
}

function showHide() {
    if (document.frmSubmit.typeofdoc.value == "Others") {
        document.getElementById("doctype").style.display = "block";
        document.getElementById("doctype").style.visibility = "visible";
    } else {
        document.getElementById("doctype").style.display = "none";
        document.getElementById("doctype").style.visibility = "hidden";
    }
}

function submissionquestion()
{
	if(document.frmSubmit.coverletter.checked == true)
	{
		document.getElementById("submissionchoice").style.display = "block";
        document.getElementById("submissionchoice").style.visibility = "visible";
	}
	else
	{
		document.getElementById("submissionchoice").style.display = "none";
        document.getElementById("submissionchoice").style.visibility = "hidden";
		document.frmSubmit.submissiontype[0].checked = false;
        document.frmSubmit.submissiontype[1].checked = false;
	}
	
}