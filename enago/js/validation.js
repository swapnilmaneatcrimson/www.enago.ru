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

function validate_confirm_japan() {
    if (isClientType() && isPlandetails() && isCaptcha() && istandc()) {
        document.frmSubmit.action = "292_nreq_japan.php";
        return true;
    } else {
        return false;
    }
}

function validate_quotation() {
    if (isservice() && isDelDate() && isHrs() && isEditstart() && isSubjectArea() && isInputfile() && isOutputfile() && isLanguage() && isUseofdocu2() && isTypeofdoc() && isFormat3() && isattachfiles() && isReceipt() && isCLtype() && isClientType() && isPlandetails() && istandc() && isUpload()) {
        document.frmSubmit.action = "292_nreq.php";
        return true;
    } else {
        return false;
    }
}

function isScode() {
    var str = document.frmSubmit.security_code.value;
    if (str == '') {
        alert("セキュリティーコードを入力してください。")
        document.frmSubmit.security_code.focus();
        return false;
    }
    return true;
}

function isFileName() {
    var fnamev = document.frmSubmit.fname.value;
    var lnamev = document.frmSubmit.lname.value;
    var fnamelen = fnamev.length;
    var lnamelen = lnamev.length;
    var url = document.frmSubmit.superdat.value;
    var filename = url.substring(url.lastIndexOf('/') + 1);
    var filelength = filename.length;
    var userfile = fnamelen + lnamelen + filelength;
    var clientinput = userfile - 100;
    if (userfile > 100) {
        alert("ファイル名が " + clientinput + " 文字超えています。ファイル名を短くしてください。");
        return false;
    }
    alert(clientinput);
    return true;
}

function resetform() {
    document.frmSubmit.reset();
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

function isPlandetails() {
    if (document.frmSubmit.clienttype[0].checked == true) {
        return isRequest();
    }
    return true;
}

function isCLtype() {
    if (document.frmSubmit.clienttype[1].checked == true) {
        return isPayment();
    }
    return true;
}

function isClientType() {
        if (document.frmSubmit.clienttype[1].checked == true) {
            return islastname() && isfirstname() && isOrg() && isCountry() && isEmail() && isMatch() && isZipCode() && isstate() && iscity() && isAddress() && isPhone() && isRefered();
        } else {
            return ismemberid1() && islastname() && isfirstname() && isOrg() && isEmail() && isMatch();
        }
    }
    //**** customized for publication form ***//

function isClientType_publication() {
    if (document.frmSubmit.clienttype[1].checked == true) {
        return islastname() && isfirstname() && isOrg() && isCountry() && isEmail() && isZipCode() && isstate() && iscity() && isAddress() && isPhone() && isRefered();
    } else {
        return ismemberid1() && islastname() && isfirstname() && isOrg() && isEmail();
    }
}

//*****  end *****//

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

function ismemberid1() {
    var str = document.frmSubmit.membershipid.value;
    if (str == "") {
        alert("メンバーシップIDを入力してください。")
        document.frmSubmit.membershipid.focus();
        return false;
    }
    return true;
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

function istandc() {
    if (document.frmSubmit.agreeterms.checked == false) {
        alert("「ご利用規約に同意する」をクリックしてください。（同意のない場合、サービスをご利用いただけません）");
        document.frmSubmit.agreeterms.focus();
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

function isTypeofdoc() {
    if (document.frmSubmit.typeofdoc.selectedIndex == 0) {
        alert("原稿のタイプをお選びください。");
        document.frmSubmit.typeofdoc.focus();
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
        alert("あんしん保証を付けますか？");
        document.frmSubmit.mifadvance[0].focus();
        return false;
    }
    return true;
}

function isMif() {
    var indexvalue = document.frmSubmit.priority.selectedIndex;
    var value = document.frmSubmit.priority[indexvalue].value;
    if ((value == "Economy (エコノミー)") || (value == "Standard (スタンダード)") || (value == "Express (エクスプレス)")) {
        return isMifReq();
    }
    return true;
}

function isPayment() {
    var pub = false;
    for (var i = 0; i <= 1; i++) {
        if (document.frmSubmit.ePayment[i].checked) {
            pub = true;
        }
    }
    if (pub == false) {
        alert("お支払方法を選択してください。");
        document.frmSubmit.ePayment[0].focus();
        return false;
    }
    return true;
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

function isLanguage() {
    if (document.frmSubmit.language.selectedIndex == 0) {
        alert("イギリス／アメリカ英語のどちらでの校正をご希望かお知らせください。");
        document.frmSubmit.language.focus();
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

function isFormat4() {
    if (document.frmSubmit.format.selectedIndex == 1) {
        return true;
    }
    if (document.frmSubmit.format.selectedIndex == 2) {
        var pub = false;
        for (var i = 0; i <= 1; i++) {
            if (document.frmSubmit.formatsub[i].checked) {
                pub = true;
            }
        }
        if (pub == false) {
            alert("フォーマットの状況をお知らせください。");
            document.frmSubmit.formatsub[0].focus();
            return false;
        }
        return true;
    }
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

function isCountry() {
    if (document.frmSubmit.country.selectedIndex == 0) {
        alert("国名を選択してください。");
        document.frmSubmit.country.focus();
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

function isUseofdocu2() {
    if (document.frmSubmit.useofdoc.selectedIndex == 0) {
        alert("ご依頼原稿の用途をお知らせください。");
        document.frmSubmit.useofdoc.focus();
        return false;
    }
    return true;
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

function showalert() {
    if (document.frmSubmit.inputfile.value == "TeX") {
        alert("このTeXファイルをPDFファイルでrequest@enago.comまでお送り下さい。");
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
    document.frmSubmit.coverletter.checked = false;
    document.frmSubmit.priority_advance.selectedIndex = 0;
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
    document.frmSubmit.priority.selectedIndex = 0;
    document.frmSubmit.mif[0].checked = false;
    document.frmSubmit.mif[1].checked = false;
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

function receiptshow() {
    document.getElementById("receiptchoice").style.visibility = "visible";
    document.getElementById("receiptchoice").style.display = "block";
}

function receipthide() {
    document.getElementById("receiptchoice").style.visibility = "hidden";
    document.getElementById("receiptchoice").style.display = "none";
    document.frmSubmit.publicExText.selectedIndex = 0;
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

function custtype() {
    if (document.frmSubmit.newcust.checked == true) {
        return fornewcust();
    } else {
        return forexisting();
    }
}

function fornewcust() {
    document.getElementById("editorref").style.visibility = "hidden";
    document.getElementById("editorref").style.display = "none";
    document.getElementById("pd1").style.visibility = "hidden";
    document.getElementById("pd1").style.display = "none";
    document.getElementById("pd1a").style.visibility = "visible";
    document.getElementById("pd1a").style.display = "block";
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

function validate_autoquotation() {
    var str = document.forms[0].service.value;
    if (str == "") {
        alert("ご希望のサービスをお選びください。");
        document.forms[0].service.focus();
        return false;
    } else if (str == "normal") {
        if (isDelPriority() && isNormalMifReq() && isSubjectarea2() && isWordcount2() && isFormat() && isEmail() && isClient()) {
            document.frmSubmit.action = "291_aq.php";
            return true;
        } else {
            return false;
        }
    } else {
        if (isDelPriority_Advance() && isAdvanceMifReq() && isSubjectarea2() && isWordcount2() && isFormat() && isEmail() && isClient()) {
            document.frmSubmit.action = "291_aq.php";
            return true;
        } else {
            return false;
        }
    }
}

function isFormat() {
    var str = document.forms[0].format.value;
    if (str == "") {
        alert("ご依頼原稿のファイル形式をお選びください。")
        document.forms[0].format.focus();
        return false;
    }
    return true;
}

function isClient() {
    var str = document.forms[0].client.value;
    if (str == "") {
        alert("弊社サービスご利用経験の有無をお選びください。")
        document.forms[0].client.focus();
        return false;
    }
    return true;
}

function isSubjectarea2() {
    var pub = false;
    for (var i = 0; i <= 4; i++) {
        if (document.frmSubmit.subjectarea[i].checked) {
            pub = true;
        }
    }
    if (pub == false) {
        alert("ご依頼原稿の専門分野をお選びください。");
        document.frmSubmit.subjectarea[0].focus();
        return false;
    }
    return true;
}

function isWordcount2() {
    var no = document.frmSubmit.wordcount.value;
    if (no.length == 0) {
        alert("ご依頼原稿の単語数をご記入ください。");
        document.frmSubmit.wordcount.focus();
        document.frmSubmit.wordcount.select();
        return false;
    }
    for (var i = 1; i < no.length; i++) {
        var strpno = (no.substring(i, i + 1));
        if ((strpno > 'a' && strpno < 'z') || (strpno > 'A' && strpno < 'Z') || (strpno.indexOf(',') != -1) || (strpno.indexOf('.') != -1)) {
            alert("半角数字のみでご入力下さい。（「,」など記号を入力されると、正しく認識されません）");
            document.frmSubmit.wordcount.focus();
            document.frmSubmit.wordcount.select();
            return false;
        }
    }
    return true;
}

function isDelPriority() {
    var pub = false;
    for (var i = 0; i <= 4; i++) {
        if (document.frmSubmit.delpriority[i].checked) {
            pub = true;
        }
    }
    if (pub == false) {
        alert("ご希望の納期に合わせてプランをお選びください。");
        document.frmSubmit.delpriority[0].focus();
        return false;
    }
    return true;
}

function isDelPriority_Advance() {
    var pub = false;
    for (var i = 0; i <= 3; i++) {
        if (document.frmSubmit.delpriority_advance[i].checked) {
            pub = true;
        }
    }
    if (pub == false) {
        alert("ご希望の納期に合わせてプランをお選びください。");
        document.frmSubmit.delpriority_advance[0].focus();
        return false;
    }
    return true;
}

function isName2() {
    var str = document.frmSubmit.name.value;
    if (str == "") {
        alert("お名前を入力してください。")
        document.frmSubmit.name.focus();
        return false;
    }
    for (var i = 1; i < str.length; i++) {
        var ch = str.substring(i, i + 1);
        if ((ch < "a" && "z" < ch) || (ch < "A" && "Z" < ch)) {
            alert("お名前を入力してください。");
            document.frmSubmit.name.select();
            document.frmSubmit.name.focus();
            return false;
        }
    }
    return true;
}

function isMifauto() {
    if ((document.frmSubmit.delpriority[0].checked == true) || (document.frmSubmit.delpriority[1].checked == true)) {
        return isMifReq();
    }
    return true;
}

function showHideservice() {

var strindex = document.frmSubmit.service.selectedIndex;
var strvalue = document.frmSubmit.service[strindex].value;
	
    if (strvalue == "normal") {
        document.getElementById("service_type").style.visibility = "visible";
		document.getElementById("service_type").style.display = "block";
        document.getElementById("service_options").style.visibility = "hidden";
		document.getElementById("service_options").style.display = "none";
		document.getElementById("mifoption1").style.visibility = "visible";
        document.getElementById("mifoption1").style.display = "block";
        document.getElementById("mifoption2").style.visibility = "hidden";
        document.getElementById("mifoption2").style.display = "none";
		document.frmSubmit.mifadvance[0].checked = false;
        document.frmSubmit.mifadvance[1].checked = false;
        document.frmSubmit.delpriority_advance[0].checked = false;
        document.frmSubmit.delpriority_advance[1].checked = false;
        document.frmSubmit.delpriority_advance[2].checked = false;
        document.frmSubmit.delpriority_advance[3].checked = false;
    } else if (strvalue == "advance") {
        document.getElementById("service_type").style.display = "none";
        document.getElementById("service_type").style.visibility = "hidden";
        document.getElementById("service_options").style.display = "block";
        document.getElementById("service_options").style.visibility = "visible";
        document.getElementById("mifoption2").style.visibility = "visible";
        document.getElementById("mifoption2").style.display = "block";
        document.getElementById("mifoption1").style.visibility = "hidden";
        document.getElementById("mifoption1").style.display = "none";
        document.frmSubmit.mifnormal[0].checked = false;
        document.frmSubmit.mifnormal[1].checked = false;
        document.frmSubmit.delpriority[0].checked = false;
        document.frmSubmit.delpriority[1].checked = false;
        document.frmSubmit.delpriority[2].checked = false;
        document.frmSubmit.delpriority[3].checked = false;
        document.frmSubmit.delpriority[4].checked = false;
    } else {
        document.getElementById("service_type").style.display = "none";
        document.getElementById("service_type").style.visibility = "hidden";
        document.getElementById("service_options").style.display = "none";
        document.getElementById("service_options").style.visibility = "hidden";
        document.getElementById("mifoption2").style.visibility = "hidden";
        document.getElementById("mifoption2").style.display = "none";
        document.getElementById("mifoption1").style.visibility = "hidden";
        document.getElementById("mifoption1").style.display = "none";
        document.frmSubmit.mifnormal[0].checked = false;
        document.frmSubmit.mifnormal[1].checked = false;
		document.frmSubmit.mifadvance[0].checked = false;
        document.frmSubmit.mifadvance[1].checked = false;
        document.frmSubmit.delpriority[0].checked = false;
        document.frmSubmit.delpriority[1].checked = false;
        document.frmSubmit.delpriority[2].checked = false;
        document.frmSubmit.delpriority[3].checked = false;
        document.frmSubmit.delpriority[4].checked = false;
        document.frmSubmit.delpriority_advance[0].checked = false;
        document.frmSubmit.delpriority_advance[1].checked = false;
        document.frmSubmit.delpriority_advance[2].checked = false;
        document.frmSubmit.delpriority_advance[3].checked = false;
    }
}

function mifpay() {
    document.getElementById("mifoption1").style.visibility = "visible";
    document.getElementById("mifoption1").style.display = "block";
    document.getElementById("mifoption2").style.visibility = "hidden";
    document.getElementById("mifoption2").style.display = "none";
}

function miffree() {
    document.getElementById("mifoption1").style.visibility = "hidden";
    document.getElementById("mifoption1").style.display = "none";
    document.getElementById("mifoption2").style.visibility = "visible";
    document.getElementById("mifoption2").style.display = "block";
    document.frmSubmit.mif[0].checked = false;
    document.frmSubmit.mif[1].checked = false;
}

function validate_contactus() {
    if (isFName() && isLName() && isOrg() && isEmail() && isMatch() && isCountry() && isPhone() && isPurpose1() && isScode()) {
        document.frmSubmit.action = "294_contact.php";
        return true;
    } else {
        return false;
    }
}

function isFName() {
    var str = document.frmSubmit.fname.value;
    if (str == "") {
        alert("お名前を入力してください。")
        document.frmSubmit.fname.focus();
        return false;
    }
    for (var i = 1; i < str.length; i++) {
        var ch = str.substring(i, i + 1);
        if ((ch < "a" && "z" < ch) || (ch < "A" && "Z" < ch)) {
            alert("お名前を正しく入力してください。");
            document.frmSubmit.fname.select();
            document.frmSubmit.fname.focus();
            return false;
        }
    }
    return true;
}

function isLName() {
    var str = document.frmSubmit.lname.value;
    if (str == "") {
        alert("お名前を入力してください。")
        document.frmSubmit.lname.focus();
        return false;
    }
    for (var i = 1; i < str.length; i++) {
        var ch = str.substring(i, i + 1);
        if ((ch < "a" && "z" < ch) || (ch < "A" && "Z" < ch)) {
            alert("お名前を正しく入力してください。");
            document.frmSubmit.lname.select();
            document.frmSubmit.lname.focus();
            return false;
        }
    }
    return true;
}

function isPurpose1() {
    if (document.frmSubmit.purpose.selectedIndex == 0) {
        alert("お問い合わせ内容を選択してください。");
        document.frmSubmit.purpose.focus();
        return false;
    }
    return true;
}

function validate_journalselection() {
    if (islastname() && isfirstname() && isOrg() && isEmail() && isMatch() && isCountry() && isZipCode() && isstate() && iscity() && isAddress() && isPhone() && isRefered() && isFieldsstudy() && isPurposepublish() && isTargetjournal() && isUrgency() && isArticletype() && isSignificance() && isQuality() && isPayment() && isReceipt() && isattachfiles() && isFileUpload()) {
        document.frmSubmit.action = "201_journalselection.php";
        return true;
    } else {
        return false;
    }
}

function isFieldsstudy() {
    if (document.frmSubmit.fieldsstudy.selectedIndex == 0) {
        alert("専門分野をお選びください。");
        document.frmSubmit.fieldsstudy.focus();
        return false;
    }
    return true;
}

function isPurposepublish() {
    if (document.frmSubmit.publishpurpose.selectedIndex == 0) {
        alert("ジャーナルに投稿する目的・意義をご記入ください。");
        document.frmSubmit.publishpurpose.focus();
        return false;
    }
    return true;
}

function isTargetjournal() {
    if (document.frmSubmit.targetjournal.selectedIndex == 0) {
        alert("ジャーナルの種類をお選びください。");
        document.frmSubmit.targetjournal.focus();
        return false;
    }
    return true;
}

function isUrgency() {
    var pub = false;
    for (var i = 0; i <= 3; i++) {
        if (document.frmSubmit.urgency[i].checked) {
            pub = true;
        }
    }
    if (pub == false) {
        alert("出版の緊急性をお選びください。");
        document.frmSubmit.urgency[0].focus();
        return false;
    }
    return true;
}

function isArticletype() {
    if (document.frmSubmit.articletype.selectedIndex == 0) {
        alert("論文の種類をお選びください。");
        document.frmSubmit.articletype.focus();
        return false;
    }
    return true;
}

function isSignificance() {
    if (document.frmSubmit.significance.selectedIndex == 0) {
        alert("当該分野におけるこの研究の重要性をお選びください。");
        document.frmSubmit.significance.focus();
        return false;
    }
    return true;
}

function isQuality() {
    if (document.frmSubmit.quality.selectedIndex == 0) {
        alert("英語ネイティブの同僚がこの論文をどう評価しているかをお選びください。");
        document.frmSubmit.quality.focus();
        return false;
    }
    return true;
}

function isFileUpload() {
    if (document.frmSubmit.superdat.value == "") {
        alert("ファイルをアップロードしてください。");
        document.frmSubmit.superdat.focus();
        return false;
    }
    return true;
}

function showHideOther() {
    if (document.frmSubmit.publishpurpose.value == "Other purpose of publishing") {
        document.getElementById("other_a").style.display = "block";
        document.getElementById("other_a").style.visibility = "visible";
    } else {
        document.getElementById("other_a").style.display = "none";
        document.getElementById("other_a").style.visibility = "hidden";
    }
}

function showHide1() {
    if (document.frmSubmit.targetjournal.value == "Other journal type") {
        document.getElementById("other_b").style.display = "block";
        document.getElementById("other_b").style.visibility = "visible";
    } else {
        document.getElementById("other_b").style.display = "none";
        document.getElementById("other_b").style.visibility = "hidden";
    }
}

function validate_instruction2author() {
    if (isDelDate() && isHrs() && isEditstart() && isSubjectarea() && isInputfile() && isOutputfile() && isLanguage() && isJournalName() && isJournalURL() && isTypeofdoc() && isattachfiles() && isPayment() && isReceipt() && islastname() && isfirstname() && isOrg() && isEmail() && isMatch() && isCountry() && isZipCode() && isstate() && iscity() && isAddress() && isPhone() && isRefered() && isUpload() && istandc()) {
        document.frmSubmit.action = "202_instruction.php";
        return true;
    } else {
        return false;
    }
}

function isSubjectarea() {
    if (document.frmSubmit.mainsubject.selectedIndex == 0) {
        alert("科目名をお選びください。");
        document.frmSubmit.mainsubject.focus();
        return false;
    } else if (document.frmSubmit.subsubject.selectedIndex == 0) {
        alert("近接の科目名をお選びください。");
        document.frmSubmit.subsubject.focus();
        return false;
    } else if ((document.frmSubmit.mainsubject.value == "Biosciences and Medicine") || (document.frmSubmit.mainsubject.value == "Physical Sciences and Engineering")) {
        if (document.frmSubmit.specialization.selectedIndex == 0) {
            alert("お客様の専門分野をお選びください。");
            document.frmSubmit.specialization.focus();
            return false;
        } else if ((document.frmSubmit.specialization.value == "Other") && (document.frmSubmit.otherspecialization.value == "")) {
            alert("お客様の専門分野名をお知らせください。");
            document.frmSubmit.otherspecialization.focus();
            return false;
        }
    } else if ((document.frmSubmit.subsubject.value == "Other") && (document.frmSubmit.otherspecialization.value == "")) {
        alert("お客様の専門分野名をお知らせください。");
        document.frmSubmit.otherspecialization.focus();
        return false;
    }
    return true;
}

function isJournalName() {
    var str = document.frmSubmit.journalname.value;
    if (str == "") {
        alert("投稿を予定しているジャーナル名をお知らせください。")
        document.frmSubmit.journalname.focus();
        return false;
    }
    return true;
}

function isJournalURL() {
    var str = document.frmSubmit.journalurl.value;
    if (str == "") {
        alert("投稿規程のURLをお知らせください。")
        document.frmSubmit.journalurl.focus();
        return false;
    }
    return true;
}

function validate_artwork() {
    if (islastname() && isfirstname() && isOrg() && isEmail() && isMatch() && isCountry() && isZipCode() && isstate() && iscity() && isAddress() && isPhone() && isRefered() && isSubjectarea() && isJournalName() && isJournalURL() && isNumImages() && isPayment() && isReceipt() && isattachfiles() && isFileUpload()) {
        document.frmSubmit.action = "203artwork.php";
        return true;
    } else {
        return false;
    }
}

function isNumImages() {
    if (document.frmSubmit.numimages.selectedIndex == 0) {
        alert("アップロードした画像の数はいくつですか。");
        document.frmSubmit.numimages.focus();
        return false;
    }
    return true;
}

function validate_wcr() {
    if (islastname() && isfirstname() && isOrg() && isEmail() && isMatch() && isCountry() && isZipCode() && isstate() && iscity() && isAddress() && isPhone() && isRefered() && isSubjectarea() && isLanguage() && isTypeofdoc() && isJournalName() && isJournalURL() && isWRC() && isInputfile() && isEditstart() && isPriority() && isDelDate() && isHrs() && isPayment() && isReceipt() && isattachfiles() && isUpload()) {
        document.frmSubmit.action = "204wcr.php";
        return true;
    } else {
        return false;
    }
}

function isWRC() {
    if (document.frmSubmit.wrc.selectedIndex == 0) {
        alert("単語数削減率をお選びください。");
        document.frmSubmit.wrc.focus();
        return false;
    }
    return true;
}

function isPriority() {
    if (document.frmSubmit.priority.selectedIndex == 0) {
        alert("納品速度を選択してください。");
        document.frmSubmit.priority.focus();
        return false;
    }
    return true;
}

function validate_presubform() {
    if (islastname() && isfirstname() && isOrg() && isEmail() && isMatch() && isCountry() && isZipCode() && isstate() && iscity() && isAddress() && isPhone() && isRefered() && isSubjectarea() && isJournalName() && isJournalURL() && isTypeofdoc() && isReasonjounal() && isPubauthorhistory() && isManuscriptPurpose() && isEditedBy() && isRefered() && isPayment() && isReceipt() && isattachfiles() && isFileUpload()) {
        document.frmSubmit.action = "206_presubform.php";
        return true;
    } else {
        return false;
    }
}

function isEditedBy() {
    var pub = false;
    var pub1 = false;
    for (var i = 0; i <= 1; i++) {
        if (document.frmSubmit.editedbycrimson[i].checked) {
            pub = true;
        }
    }
    if (pub == false) {
        alert("本原稿は弊社による校正を受けられましたか。");
        document.frmSubmit.editedbycrimson[0].focus();
        return false;
    }
    if (document.frmSubmit.editedbycrimson[1].checked) {
        return true;
    } else {
        for (var i = 0; i <= 1; i++) {
            if (document.frmSubmit.revisedbyus[i].checked) {
                return true;
            }
        }
        if (pub1 == false) {
            alert("弊社による校正の後、お客様ご自身の手で推敲されましたか。");
            document.frmSubmit.revisedbyus[0].focus();
            return false;
        }
    }
}

function isManuscriptPurpose() {
    var str = document.frmSubmit.purpose_manuscript.value;
    if (str == "") {
        alert("「この原稿の目的は何でしょうか。」に対する回答をお願いします。校正者が原稿の目的と内容を照らし合わせる上で必要となる事項です。")
        document.frmSubmit.purpose_manuscript.focus();
        return false;
    }
    return true;
}

function isReasonjounal() {
    var str = document.frmSubmit.reasonjournal.value;
    if (str == "") {
        alert("このジャーナルを選んだ理由をお聞かせください。")
        document.frmSubmit.reasonjournal.focus();
        return false;
    }
    return true;
}

function isPubauthorhistory() {
    var str = document.frmSubmit.pubauthorhistory.value;
    if (str == "") {
        alert("著者のジャーナルの掲載履歴をお書きください。")
        document.frmSubmit.pubauthorhistory.focus();
        return false;
    }
    return true;
}

function ques2show() {
    document.getElementById("qus2").style.visibility = "visible";
    document.getElementById("qus2").style.display = "block";
}

function ques2hide() {
    document.getElementById("qus2").style.visibility = "hidden";
    document.getElementById("qus2").style.display = "none";
}

function validate_manuscript() {
    if (islastname() && isfirstname() && isOrg() && isEmail() && isMatch() && isCountry() && isZipCode() && isstate() && iscity() && isAddress() && isPhone() && isSameasabove() && isTitlepaper() && isRunninghead() && isNumFigure() && isNumTables() && isAuximaterial() && isJournalName() && isJournalURL() && isTypeofdoc() && isSubdeadline() && isSubjournal() && isPreSubjournal() && isStatement() && isPayment() && isReceipt() && isFileUpload()) {
        document.frmSubmit.action = "207_manuscriptfrm.php";
        return true;
    } else {
        return false;
    }
}

function isSameasabove() {
    validateObject = new Object();
    validateObject.val = document.frmSubmit.email_a.value;
    var email_a = document.frmSubmit.email_a.value;
    var cemail = document.frmSubmit.emailconfirm_a.value;
    if (document.frmSubmit.sameasabove.checked == false) {
        if (document.frmSubmit.lname_a.value == "") {
            alert("corresponding authorのお名前を入力してください。")
            document.frmSubmit.lname_a.focus();
            return false;
        }
        if (document.frmSubmit.fname_a.value == "") {
            alert("corresponding authorのお名前を入力してください。")
            document.frmSubmit.fname_a.focus();
            return false;
        }
        if (document.frmSubmit.phone_a.value.length == 0) {
            alert("corresponding authorの電話番号を入力してください。");
            document.frmSubmit.phone_a.focus();
            document.frmSubmit.phone_a.select();
            return false;
        }
        if (document.frmSubmit.mailingaddress1_a.value == "") {
            alert("corresponding authorの住所を入力してください。")
            document.frmSubmit.mailingaddress1_a.focus();
            return false;
        }
        if ((validateObject.val.indexOf("@") == -1) || (validateObject.val.charAt(0) == ".") || (validateObject.val.charAt(0) == "@") || (validateObject.len < 6) || (validateObject.val.indexOf(".") == -1) || (validateObject.val.charAt(validateObject.val.indexOf("@") + 1) == ".") || (validateObject.val.charAt(validateObject.val.indexOf("@") - 1) == ".")) {
            alert("corresponding authorのEメールアドレスを正しく入力してください。");
            document.frmSubmit.email_a.focus();
            return false;
        }
        if (email_a !== cemail) {
            alert("corresponding authorのEメールアドレスをもう一度正しく入力してください。");
            document.frmSubmit.emailconfirm_a.focus();
            return false;
        }
    }
    return true;
}

function isTitlepaper() {
    var str = document.frmSubmit.papertitle.value;
    if (str == "") {
        alert("論文タイトルをご記入ください。")
        document.frmSubmit.papertitle.focus();
        return false;
    }
    return true;
}

function isRunninghead() {
    var str = document.frmSubmit.runninghead.value;
    if (str == "") {
        alert("ランニングタイトルをご記入ください。")
        document.frmSubmit.runninghead.focus();
        return false;
    }
    return true;
}

function isNumFigure() {
    var str = document.frmSubmit.numfigures.value;
    if (str == "") {
        alert("図の数をお知らせください。")
        document.frmSubmit.numfigures.focus();
        return false;
    }
    return true;
}

function isNumTables() {
    var str = document.frmSubmit.numtables.value;
    if (str == "") {
        alert("表の数をお知らせください。")
        document.frmSubmit.numtables.focus();
        return false;
    }
    return true;
}

function isAuximaterial() {
    var pub = false;
    for (var i = 0; i <= 1; i++) {
        if (document.frmSubmit.auximaterial[i].checked) {
            pub = true;
        }
    }
    if (pub == false) {
        alert("補助的な資料はありますか？");
        document.frmSubmit.auximaterial[0].focus();
        return false;
    }
    return true;
}

function isSubdeadline() {
    var str = document.frmSubmit.submissiondeadline.value;
    if (str == "") {
        alert("投稿の期限をお知らせください。")
        document.frmSubmit.submissiondeadline.focus();
        return false;
    }
    return true;
}

function isSubjournal() {
    var pub = false;
    for (var i = 0; i <= 1; i++) {
        if (document.frmSubmit.subjournal[i].checked) {
            if (document.frmSubmit.subjournal[0].checked) {
                if (document.frmSubmit.username.value == "") {
                    alert("ユーザー名をご記入ください。");
                    document.frmSubmit.username.focus();
                    return false;
                } else if (document.frmSubmit.password.value == "") {
                    alert("パスワードをご記入ください。");
                    document.frmSubmit.password.focus();
                    return false;
                } else {
                    pub = true;
                }
            } else {
                pub = true;
            }
        }
    }
    if (pub == false) {
        alert("以前にも同じジャーナルに投稿したことはありますか？");
        document.frmSubmit.subjournal[0].focus();
        return false;
    }
    return true;
}

function isPreSubjournal() {
    var pub = false;
    for (var i = 0; i <= 1; i++) {
        if (document.frmSubmit.presubjournal[i].checked) {
            if (document.frmSubmit.presubjournal[0].checked) {
                if (document.frmSubmit.username_a.value == "") {
                    alert("ユーザー名をご記入ください。");
                    document.frmSubmit.username_a.focus();
                    return false;
                } else if (document.frmSubmit.password_a.value == "") {
                    alert("パスワードをご記入ください。");
                    document.frmSubmit.password_a.focus();
                    return false;
                } else {
                    pub = true;
                }
            } else if (document.frmSubmit.presubjournal[1].checked) {
                if (document.frmSubmit.desireusername.value == "") {
                    alert("お好きなユーザー名をご記入ください。");
                    document.frmSubmit.desireusername.focus();
                    return false;
                } else if (document.frmSubmit.desirepassword.value == "") {
                    alert("お好きなパスワードをご記入ください。");
                    document.frmSubmit.desirepassword.focus();
                    return false;
                } else {
                    pub = true;
                }
            } else {
                pub = true;
            }
        }
    }
    if (pub == false) {
        alert("以前に、同じ出版社の別のジャーナルに投稿したことはありますか？");
        document.frmSubmit.presubjournal[0].focus();
        return false;
    }
    return true;
}

function isStatement() {
    var str = document.frmSubmit.statement.value;
    if (str == "") {
        alert("ログインや代金の払い込みをエナゴに委託しますか？それとも著者ご自身が行いますか？")
        document.frmSubmit.statement.focus();
        return false;
    }
    return true;
}

function isSameAs() {
    if (document.frmSubmit.sameasabove.checked == true) {
        document.frmSubmit.lname_a.disabled = true;
        document.frmSubmit.lname_a.value = "";
        document.frmSubmit.fname_a.disabled = true;
        document.frmSubmit.fname_a.value = "";
        document.frmSubmit.mailingaddress1_a.disabled = true;
        document.frmSubmit.mailingaddress1_a.value = "";
        document.frmSubmit.phone_a.disabled = true;
        document.frmSubmit.phone_a.value = "";
        document.frmSubmit.extno_a.disabled = true;
        document.frmSubmit.extno_a.value = "";
        document.frmSubmit.fax_a.disabled = true;
        document.frmSubmit.fax_a.value = "";
        document.frmSubmit.email_a.disabled = true;
        document.frmSubmit.email_a.value = "";
        document.frmSubmit.emailconfirm_a.disabled = true;
        document.frmSubmit.emailconfirm_a.value = "";
        document.frmSubmit.email2_a.disabled = true;
        document.frmSubmit.email2_a.value = "";
    }
    if (document.frmSubmit.sameasabove.checked == false) {
        document.frmSubmit.lname_a.disabled = false;
        document.frmSubmit.fname_a.disabled = false;
        document.frmSubmit.mailingaddress1_a.disabled = false;
        document.frmSubmit.phone_a.disabled = false;
        document.frmSubmit.extno_a.disabled = false;
        document.frmSubmit.fax_a.disabled = false;
        document.frmSubmit.email_a.disabled = false;
        document.frmSubmit.emailconfirm_a.disabled = false;
        document.frmSubmit.email2_a.disabled = false;
    }
}

function validate_revise() {
    if (islastname() && isfirstname() && isOrg() && isEmail() && isMatch() && isCountry() && isZipCode() && isstate() && iscity() && isAddress() && isPhone() && isRefered() && isService() && isSubjectarea() && isLanguage() && isTypeofdoc() && isJournalName() && isJournalURL() && isInputfile() && isEditstart() && isDelDate() && isHrs() && isPayment() && isReceipt() && isattachfiles() && isUpload() && istandc()) {
        document.frmSubmit.action = "208_reviseform.php";
        return true;
    } else {
        return false;
    }
}

function isChJournalname() {
    var str = document.frmSubmit.journalname_a.value;
    if (str == "") {
        alert("別のジャーナルに投稿する場合は、その誌名をお知らせください。")
        document.frmSubmit.journalname_a.focus();
        return false;
    }
    return true;
}

function isChJournalURL() {
    var str = document.frmSubmit.journalurl_a.value;
    if (str == "") {
        alert("別のジャーナルに投稿する場合は、そのURLをお知らせください。")
        document.frmSubmit.journalurl_a.focus();
        return false;
    }
    return true;
}

function isService() {
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
        if (document.frmSubmit.journalname.value == "") {
            alert("投稿を予定しているジャーナル名をお知らせください。")
            document.frmSubmit.journalname.focus();
            return false;
        } else if (document.frmSubmit.journalurl.value == "") {
            alert("投稿を予定しているジャーナルのURLをお知らせください。")
            document.frmSubmit.journalurl.focus();
            return false;
        } else if (document.frmSubmit.journalname_a.value == "") {
            alert("別のジャーナルに投稿する場合は、その誌名をお知らせください。")
            document.frmSubmit.journalname_a.focus();
            return false;
        } else if (document.frmSubmit.journalurl_a.value == "") {
            alert("別のジャーナルに投稿する場合は、そのURLをお知らせください。")
            document.frmSubmit.journalurl_a.focus();
            return false;
        } else {
            return true;
        }
    }
    if (document.frmSubmit.service[0].checked) {
        if (document.frmSubmit.journalname.value == "") {
            alert("投稿を予定しているジャーナル名をお知らせください。")
            document.frmSubmit.journalname.focus();
            return false;
        } else if (document.frmSubmit.journalurl.value == "") {
            alert("投稿を予定しているジャーナルのURLをお知らせください。")
            document.frmSubmit.journalurl.focus();
            return false;
        } else {
            return true;
        }
    }
    return true
}

function serviceshow1() {
    document.getElementById("revisedpaper").style.visibility = "visible";
    document.getElementById("revisedpaper").style.display = "block";
    document.getElementById("rejectedpaper").style.visibility = "hidden";
    document.getElementById("rejectedpaper").style.display = "none";
    document.getElementById("changejournal").style.visibility = "hidden";
    document.getElementById("changejournal").style.display = "none";
    document.frmSubmit.journalname_a.value = "";
    document.frmSubmit.journalurl_a.value = "";
}

function servicehide1() {
    document.getElementById("revisedpaper").style.visibility = "hidden";
    document.getElementById("revisedpaper").style.display = "none";
    document.getElementById("rejectedpaper").style.visibility = "visible";
    document.getElementById("rejectedpaper").style.display = "block";
    document.getElementById("changejournal").style.visibility = "visible";
    document.getElementById("changejournal").style.display = "block";
}

function validate_psf() {
    if (isservice() && isDelDate() && isHrs() && isEditstart() && isSubjectarea() && isInputfile() && isOutputfile() && isUseofdocu2() && isFormat3() && isattachfiles() && isPayment() && isReceipt() && islastname() && isfirstname() && isOrg() && isEmail() && isMatch() && isCountry() && isZipCode() && isstate() && iscity() && isAddress() && isPhone() && isRefered() && isUpload() && istandc()) {
        document.frmSubmit.action = "501_psfrm.php";
        return true;
    } else {
        return false;
    }
}

function validate_advancecoverletter() {
    if (isAsnNo() && islastname() && isfirstname() && isEmail() && isMatch() && iscity() && isAddress() && isSameasabove() && isManuscripttitle() && isBriefdes() && isSummary()) {
        document.frmSubmit.action = "advance-cover-letter-form.php";
        return true;
    } else {
        return false;
    }
}

function isAsnNo() {
    var str = document.frmSubmit.asnno.value;
    if (str == "") {
        alert("アサイメント番号を入力してください。")
        document.frmSubmit.asnno.focus();
        return false;
    }
    return true;
}

function isManuscripttitle() {
    var str = document.frmSubmit.manuscripttitle.value;
    if (str == "") {
        alert("論文タイトルをご記入ください。")
        document.frmSubmit.manuscripttitle.focus();
        return false;
    }
    return true;
}

function isBriefdes() {
    var str = document.frmSubmit.briefdescription.value;
    if (str == "") {
        alert("論文テーマと成果についてご説明ください。")
        document.frmSubmit.briefdescription.focus();
        return false;
    }
    return true;
}

function isSummary() {
    var str = document.frmSubmit.summary.value;
    if (str == "") {
        alert("ジャーナルの読者が論文を評価する理由を英文50ワード程度でまとめてください。")
        document.frmSubmit.summary.focus();
        return false;
    }
    return true;
}

function isAddstatement() {
    var addstat1 = document.frmSubmit.addstatement1.checked;
    var addstat2 = document.frmSubmit.addstatement2.checked;
    var addstat3 = document.frmSubmit.addstatement3.checked;
    var addstat4 = document.frmSubmit.addstatement4.checked;
    if ((addstat1 == false) && (addstat2 == false) && (addstat3 == false) && (addstat4 == false)) {
        alert("追加情報をお選びください。");
        document.frmSubmit.addstatement1.focus();
        return false;
    }
    return true;
}

function validate_isubediting() {
    if (islastname() && isfirstname() && isOrg() && isEmail() && isMatch() && isCountry() && isZipCode() && isstate() && iscity() && isAddress() && isPhone() && isRefered() && isSameasabove() && isPayment() && isReceipt() && isJournalName() && isJournalURL() && isManuscripttitle() && isTypeofdoc() && isBriefdes() && isSummary()) {
        document.frmSubmit.action = "isubcoverletter_editing.php";
        return true;
    } else {
        return false;
    }
}

function validate_isubfree() {
    if (islastname() && isfirstname() && isOrg() && isEmail() && isMatch() && isCountry() && isZipCode() && isstate() && iscity() && isAddress() && isPhone() && isRefered() && isSameasabove() && isJournalName() && isJournalURL() && isManuscripttitle() && isTypeofdoc() && isBriefdes() && isSummary() && isScode()) {
        document.frmSubmit.action = "isubcoverletter_free.php";
        return true;
    } else {
        return false;
    }
}

function validate_isubtranslation() {
    if (islastname() && isfirstname() && isOrg() && isEmail() && isMatch() && isCountry() && isZipCode() && isstate() && iscity() && isAddress() && isPhone() && isRefered() && isSameasabove() && isPayment() && isReceipt() && isJournalName() && isJournalURL() && isManuscripttitle() && isTypeofdoc() && isBriefdes() && isSummary() && isFileUpload() && isExtension()) {
        document.frmSubmit.action = "isubcoverletter_translation.php";
        return true;
    } else {
        return false;
    }
}

function validate_isubwriting() {
    if (islastname() && isfirstname() && isOrg() && isEmail() && isMatch() && isCountry() && isZipCode() && isstate() && iscity() && isAddress() && isPhone() && isRefered() && isSameasabove() && isPayment() && isReceipt() && isJournalName() && isJournalURL() && isTypeofdoc() && isFileUpload() && isExtension()) {
        document.frmSubmit.action = "isubcoverletter_writing.php";
        return true;
    } else {
        return false;
    }
}

function validate_rsubfree() {
    if (islastname() && isfirstname() && isOrg() && isEmail() && isMatch() && isCountry() && isZipCode() && isstate() && iscity() && isAddress() && isPhone() && isRefered() && isSameasabove() && isJournalName() && isDate() && isManuscripttitle() && isRefID() && isSummary() && isJustification() && isDescription()) {
        document.frmSubmit.action = "rsubcoverletter_free.php";
        return true;
    } else {
        return false;
    }
}

function isDate() {
    var str = document.frmSubmit.month.selectedIndex;
    if (str == 0) {
        alert("カバーレターの日付をお知らせください。")
        document.frmSubmit.month.focus();
        return false;
    }
    var str = document.frmSubmit.day.selectedIndex;
    if (str == 0) {
        alert("カバーレターの日付をお知らせください。")
        document.frmSubmit.day.focus();
        return false;
    }
    var str = document.frmSubmit.year.selectedIndex;
    if (str == 0) {
        alert("カバーレターの日付をお知らせください。")
        document.frmSubmit.year.focus();
        return false;
    }
    var intMonth = document.frmSubmit.month.selectedIndex;
    var intMonth = document.frmSubmit.month.selectedIndex;
    var intDay = document.frmSubmit.day.selectedIndex;
    if ((intMonth == 4 || intMonth == 6 || intMonth == 9 || intMonth == 11) && intDay == 31) {
        alert("カバーレターの日付をお知らせください。");
        document.frmSubmit.ltmonth.focus();
        return false;
    }
    if ((intMonth == 2 && (intDay == 29 || intDay == 30 || intDay == 31))) {
        alert("カバーレターの日付をお知らせください。");
        document.frmSubmit.ltday.focus();
        return false;
    }
    return true;
}

function isauthorname() {
    var str = document.frmSubmit.cauthorname.value;
    if (str == "") {
        alert("連絡先の著者名（Corresponding author）をお知らせください。")
        document.frmSubmit.cauthorname.focus();
        return false;
    }
    return true;
}

function iseditorname() {
    var str = document.frmSubmit.editorname.value;
    if (str == "") {
        alert("エディター名をお書きください。")
        document.frmSubmit.editorname.focus();
        return false;
    }
    return true;
}

function isRefID() {
    var str = document.frmSubmit.referenceid.value;
    if (str == "") {
        alert("参照IDをご記入ください。")
        document.frmSubmit.referenceid.focus();
        return false;
    }
    return true;
}

function isJustification() {
    var str = document.frmSubmit.justification.value;
    if (str == "") {
        alert("査読者の指摘の中で反映できなかったポイントについてご説明ください。")
        document.frmSubmit.justification.focus();
        return false;
    }
    return true;
}

function isDescription() {
    var str = document.frmSubmit.description.value;
    if (str == "") {
        alert("レビュアーコメントとは無関係の大きな変更点があれば、ご説明ください。")
        document.frmSubmit.description.focus();
        return false;
    }
    return true;
}

function validate_rsubtranslation() {
    if (islastname() && isfirstname() && isOrg() && isEmail() && isMatch() && isCountry() && isZipCode() && isstate() && iscity() && isAddress() && isPhone() && isRefered() && isSameasabove() && isJournalName() && iseditorname() && isDate() && isManuscripttitle() && isRefID() && isSummary() && isJustification() && isDescription() && isPayment() && isReceipt() && isFileUpload() && isExtension()) {
        document.frmSubmit.action = "rsubcoverletter_translation.php";
        return true;
    } else {
        return false;
    }
}

function validate_journalacs() {
    if (isauthorname() && isAddress() && isFax() && isPhone() && isEmail() && isManuscripttitle() && isTypeofdoc() && isBriefdes() && isSummary() && isNameAssoEditor() && isCompetant() && isSubInfo() && isAddstatement() && isPayment() && isReceipt() && isFileUpload() && isExtension()) {
        document.frmSubmit.action = "journalacs_result.php";
        return true;
    } else {
        return false;
    }
}

function isFax() {
    var str = document.frmSubmit.fax.value;
    if (str == "") {
        alert("Corresponding authorのFAX番号をお書きください。")
        document.frmSubmit.fax.focus();
        return false;
    }
    return true;
}

function isNameAssoEditor() {
    var str = document.frmSubmit.nameofasseditors.value;
    if (str == "") {
        alert("ふさわしいJACS 協会エディターの名前を挙げてください。")
        document.frmSubmit.nameofasseditors.focus();
        return false;
    }
    return true;
}

function isCompetant() {
    var str = document.frmSubmit.competant.value;
    if (str == "") {
        alert("査読をする能力を持つ人物を最低6～8名挙げてください。半数は北米より選ぶ必要があります。")
        document.frmSubmit.competant.focus();
        return false;
    }
    return true;
}

function isSubInfo() {
    var subinfomation = document.frmSubmit.subinfo.checked;
    if (subinfomation == false) {
        alert("他誌での審査状況についてお知らせください。");
        document.frmSubmit.subinfo.focus();
        return false;
    }
    return true;
}

function validate_journalcell() {
    if (isauthorname() && isAddress() && isFax() && isPhone() && isEmail() && isManuscripttitle() && isTypeofdoc() && isBriefexplanation() && isConceptualadvance() && isSigniFicance() && isSuggestions() && isAddstatement() && isPayment() && isReceipt() && isFileUpload() && isExtension()) {
        document.frmSubmit.action = "journalcell_result.php";
        return true;
    } else {
        return false;
    }
}

function isBriefexplanation() {
    var str = document.frmSubmit.briefexplanation.value;
    if (str == "") {
        alert("これまでに知られていたことを簡潔に説明してください。")
        document.frmSubmit.briefexplanation.focus();
        return false;
    }
    return true;
}

function isConceptualadvance() {
    var str = document.frmSubmit.conceptualadvance.value;
    if (str == "") {
        alert("今回の発見の意義についてご説明ください。")
        document.frmSubmit.conceptualadvance.focus();
        return false;
    }
    return true;
}

function isSigniFicance() {
    var str = document.frmSubmit.significance.value;
    if (str == "") {
        alert("より広範な読者に対して、今回の発見の意義をご説明ください。")
        document.frmSubmit.significance.focus();
        return false;
    }
    return true;
}

function isSuggestions() {
    var str = document.frmSubmit.suggestions.value;
    if (str == "") {
        alert("査読者にふさわしい人物、また、査読者候補から除外してほしい上限3名の人物を挙げてください。")
        document.frmSubmit.suggestions.focus();
        return false;
    }
    return true;
}

function validate_journalnature() {
    if (isauthorname() && isAddress() && isFax() && isPhone() && isEmail() && isManuscripttitle() && isTypeofdoc() && isSummaryA() && isSummaryB() && isSubmissionComponents() && isNumWords() && isNumFigure() && isRoughEstimate() && isCommMethod() && isAddstatement() && isPayment() && isReceipt() && isFileUpload() && isExtension()) {
        document.frmSubmit.action = "journalnature_result.php";
        return true;
    } else {
        return false;
    }
}

function isSummaryA() {
    var str = document.frmSubmit.summary_a.value;
    if (str == "") {
        alert("必修項目を入力してください。")
        document.frmSubmit.summary_a.focus();
        return false;
    }
    return true;
}

function isSummaryB() {
    var str = document.frmSubmit.summary_b.value;
    if (str == "") {
        alert("必修項目を入力してください。")
        document.frmSubmit.summary_b.focus();
        return false;
    }
    return true;
}

function isSubmissionComponents() {
    var str = document.frmSubmit.submissioncomponents.value;
    if (str == "") {
        alert("自分の研究成果をサポートする論文や図、補足資料などを含む提出物の数と内訳をお書きください。")
        document.frmSubmit.submissioncomponents.focus();
        return false;
    }
    return true;
}

function isNumWords() {
    var str = document.frmSubmit.numwords.value;
    if (str == "") {
        alert("論文の文字数をお書きください。")
        document.frmSubmit.numwords.focus();
        return false;
    }
    return true;
}

function isRoughEstimate() {
    var str = document.frmSubmit.roughestimate.value;
    if (str == "") {
        alert("ページ数に換算した場合の希望する図のサイズをお書きください。")
        document.frmSubmit.roughestimate.focus();
        return false;
    }
    return true;
}

function isCommMethod() {
    var str = document.frmSubmit.methodcommunication.value;
    if (str == "") {
        alert("Natureは通常著者とEメールでやりとりをします。やりとりの方法や時間帯に希望があればお書きください。")
        document.frmSubmit.methodcommunication.focus();
        return false;
    }
    return true;
}

function validate_journalscience() {
    if (isauthorname() && isAddress() && isFax() && isPhone() && isEmail() && isManuscripttitle() && isTypeofdoc() && isStatement() && isPaperRelation() && isColleagueslist() && isAddstatement() && isPayment() && isReceipt() && isFileUpload() && isExtension()) {
        document.frmSubmit.action = "journalscience_result.php";
        return true;
    } else {
        return false;
    }
}

function isPaperRelation() {
    var str = document.frmSubmit.relationofpaper.value;
    if (str == "") {
        alert("先行研究との接点をご説明ください。")
        document.frmSubmit.relationofpaper.focus();
        return false;
    }
    return true;
}

function isColleagueslist() {
    var str = document.frmSubmit.listofcolleagues.value;
    if (str == "") {
        alert("論文を読んだ同僚の研究者の名を挙げてください。")
        document.frmSubmit.listofcolleagues.focus();
        return false;
    }
    return true;
}

function validate_journallancet() {
    if (isauthorname() && isAddress() && isFax() && isPhone() && isEmail() && isManuscripttitle() && isTypeofdoc() && isBriefdes() && isLancet() && isConcessions() && isAddstatement() && isPayment() && isReceipt() && isFileUpload() && isExtension()) {
        document.frmSubmit.action = "journalthelancet_result.php";
        return true;
    } else {
        return false;
    }
}

function isBriefDes() {
    var str = document.frmSubmit.briefdescription.value;
    if (str == "") {
        alert("論文テーマと成果について、英文100ワード程度でご説明ください。")
        document.frmSubmit.briefdescription.focus();
        return false;
    }
    return true;
}

function isLancet() {
    var str = document.frmSubmit.lancet.value;
    if (str == "") {
        alert("ほかでもなくThe Lancet Oncologyに掲載されるべき理由をお書きください。")
        document.frmSubmit.lancet.focus();
        return false;
    }
    return true;
}

function isConcessions() {
    var str = document.frmSubmit.concessions.value;
    if (str == "") {
        alert("必要に応じて論文を短くすることをご了承いただけるかお書きください。")
        document.frmSubmit.concessions.focus();
        return false;
    }
    return true;
}

function validate_paymenta() {
    if (isTo() && isName() && isDesignation() && isEmail()) {
        document.frmSubmit.action = "result_payment.php";
        return true;
    } else {
        return false;
    }
}

function isTo() {
    var pub = false;
    for (var i = 0; i <= 1; i++) {
        if (document.frmSubmit.towhom[i].checked) {
            pub = true;
        }
    }
    if (pub == false) {
        alert("宛先をお選びください。");
        document.frmSubmit.towhom[0].focus();
        return false;
    }
    return true;
}

function isName() {
    var str = document.frmSubmit.name.value;
    if (str == "") {
        alert("お名前を入力してください。")
        document.frmSubmit.name.focus();
        return false;
    }
    for (var i = 1; i < str.length; i++) {
        var ch = str.substring(i, i + 1);
        if ((ch < "a" && "z" < ch) || (ch < "A" && "Z" < ch)) {
            alert("お名前を入力してください。");
            document.frmSubmit.name.select();
            document.frmSubmit.name.focus();
            return false;
        }
    }
    return true;
}

function isDesignation() {
    var str = document.frmSubmit.designation.value;
    if (str == "") {
        alert("ご所属を記入してください。")
        document.frmSubmit.designation.focus();
        return false;
    }
    return true;
}

function validate_frmpaymentb() {
    if (isName() && isDesignation() && isEmail()) {
        document.frmSubmit.action = "result_payment.php";
        return true;
    } else {
        return false;
    }
}

function validate_manuscriptinsurance() {
    if (iskanjiFamily() && iskanjiGiven() && islastname() && isfirstname() && isEmail() && isMatch() && isAsnNo() && isDelDate() && isFileUpload() && isExtension() && isattachfiles() && isFilename()) {
        document.frmSubmit.action = "manuscript-insurance.php";
        return true;
    } else {
        return false;
    }
}

function iskanjiFamily() {
    var str = document.frmSubmit.kanjinamefamily.value;
    if (str == "") {
        alert("お名前の姓名をご入力してください。")
        document.frmSubmit.kanjinamefamily.focus();
        return false;
    }
    return true;
}

function iskanjiGiven() {
    var str = document.frmSubmit.kanjinamegiven.value;
    if (str == "") {
        alert("お名前の姓名をご入力してください。")
        document.frmSubmit.kanjinamegiven.focus();
        return false;
    }
    return true;
}

function isFilename() {
    var str = document.frmSubmit.filename.value;
    if (str == "") {
        alert("再校正を必要とするファイル名をお書きください。 ")
        document.frmSubmit.filename.focus();
        return false;
    }
    return true;
}

function isExpDelDate() {
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
    if ((intMonth == 2 && (intDay == 29 || intDay == 30 || intDay == 31))) {
        alert("納品希望日を選択してください。");
        document.frmSubmit.delDay.focus();
        return false;
    }
    return true;
}

function isSubtoJournal() {
    var pub = false;
    for (var i = 0; i <= 1; i++) {
        if (document.frmSubmit.subtojournal[i].checked) {
            pub = true;
        }
    }
    if (pub == false) {
        alert("ジャーナルに投稿されている場合、「はい」を選んでください。");
        document.frmSubmit.subtojournal[0].focus();
        return false;
    }
    return true;
}

function isReviwerComment() {
    if (document.frmSubmit.subtojournal[0].checked == true) {
        var str = document.frmSubmit.reviewerscomments.value;
        if (str == "") {
            alert("査読者からのコメントと、審査状況をご記入ください。")
            document.frmSubmit.reviewerscomments.focus();
            return false;
        }
    }
    return true;
}

function commentyes() {
    document.getElementById("reviwercomment").style.visibility = "visible";
    document.getElementById("reviwercomment").style.display = "block";
}

function commentno() {
    document.getElementById("reviwercomment").style.visibility = "hidden";
    document.getElementById("reviwercomment").style.display = "none";
}

function validate_servicerec_ecsupport() {
    if (isJournal_ec() && isJournalSelection() && isRevisedRejected() && isArtworkEditing() && isManuscriptSubmission()) {
        document.frmSubmit.action = "service-recommendation-thankyou.php";
        return true;
    } else {
        return false;
    }
}

function validate_ecsupport() {
    if (isEcService() && isJournal_ec1() && isDoctype() && isSubjectArea() && isJournalSelection() && isRevisedRejected() && isArtworkEditing() && isManuscriptSubmission() && isattachfiles() && isClientType_publication() && isUpload() && isExtension() && istandc()) {
        document.frmSubmit.action = "publication-support-thankyou.php";
        return true;
    } else {
        return false;
    }
}

function isJournalSelection() {
    if (document.frmSubmit.serviceschoice_3.checked == true) {
        return isJournaltype() && isPubUrgency();
    }
    return true;
}

function isRevisedRejected() {
    if (document.frmSubmit.serviceschoice_1.checked == true) {
        return isServices() && isLanguages() && isJournalA();
    }
    return true;
}

function isArtworkEditing() {
    if (document.frmSubmit.serviceschoice_7.checked == true) {
        return isNumimages();
    }
    return true;
}

function isManuscriptSubmission() {
    if (document.frmSubmit.serviceschoice_4.checked == true) {
        return isTitlepaper() && isAuthorInfo() && isRunningTitle() && isNumberFigure() && isNumberTables() && isSupplimentary() && isSubmittedSameJournal() && isSubmittedDiffJournal() && isSubmissionFees();
    }
    return true;
}

function isArticleType() {
    if (document.frmSubmit.articletype.value == "") {
        alert("論文の種類をお選びください");
        document.frmSubmit.articletype.focus();
        return false;
    }
    return true;
}

function isconflict() {
    if (document.frmSubmit.noconflict.value == "") {
        alert("利害の抵触があるかどうかお書きください。")
        document.frmSubmit.noconflict.focus();
        return false;
    }
    return true;
}

function isJournal_ec1() {
    if (document.frmSubmit.serviceschoice_3.checked == true) {
        return true;
    } else {
        return isJourName2submit();
    }
    return true;
}

function isJournal_ec() {
    if (document.frmSubmit.serviceschoice_3.checked == true) {
        return true;
    } else if (document.frmSubmit.serviceschoice_3.checked == false) {
        if (document.frmSubmit.serviceschoice_info.checked == true) {
            return isJourName2submit();
        } else {
            return true;
        }
    }
    return true;
}

function isEcService() {
    if (!document.frmSubmit.serviceschoice_1.checked && !document.frmSubmit.serviceschoice_2.checked && !document.frmSubmit.serviceschoice_3.checked && !document.frmSubmit.serviceschoice_4.checked && !document.frmSubmit.serviceschoice_5.checked && !document.frmSubmit.serviceschoice_6.checked && !document.frmSubmit.serviceschoice_7.checked) {
        alert("ご希望のサービスを1つお選びください");
        document.frmSubmit.serviceschoice_1.focus();
        return false;
    }
    return true;
}

function isNumimages() {
    var str = document.frmSubmit.numimages.value;
    if (str == "") {
        alert("図表編集をご希望のアイテム数をお書きください");
        document.frmSubmit.numimages.focus();
        return false;
    }
    return true;
}

function isServices() {
    var index = document.frmSubmit.services.selectedIndex;
    if (index == 0) {
        alert("修正原稿の投稿先をお選びください")
        document.frmSubmit.services.focus();
        return false;
    }
    return true;
}

function isPubUrgency() {
    var index = document.frmSubmit.puburgency.selectedIndex;
    if (index == 0) {
        alert("出版までのご希望期間をお選びください")
        document.frmSubmit.puburgency.focus();
        return false;
    }
    return true;
}

function isTopJournal1() {
    var str = document.frmSubmit.topjournal1.value;
    if (str == "") {
        alert("研究の一環として最もよく読んだジャーナル上位5誌をお書きください")
        document.frmSubmit.topjournal1.focus();
        return false;
    }
    return true;
}

function isTopJournal2() {
    var str = document.frmSubmit.topjournal2.value;
    if (str == "") {
        alert("研究の一環として最もよく読んだジャーナル上位5誌をお書きください")
        document.frmSubmit.topjournal2.focus();
        return false;
    }
    return true;
}

function isTopJournal3() {
    var str = document.frmSubmit.topjournal3.value;
    if (str == "") {
        alert("研究の一環として最もよく読んだジャーナル上位5誌をお書きください")
        document.frmSubmit.topjournal3.focus();
        return false;
    }
    return true;
}

function isTopJournal4() {
    var str = document.frmSubmit.topjournal4.value;
    if (str == "") {
        alert("研究の一環として最もよく読んだジャーナル上位5誌をお書きください")
        document.frmSubmit.topjournal4.focus();
        return false;
    }
    return true;
}

function isTopJournal5() {
    var str = document.frmSubmit.topjournal5.value;
    if (str == "") {
        alert("研究の一環として最もよく読んだジャーナル上位5誌をお書きください")
        document.frmSubmit.topjournal5.focus();
        return false;
    }
    return true;
}

function isLanguages() {
    var index = document.frmSubmit.languages.selectedIndex;
    if (index == 0) {
        alert("イギリス／アメリカ英語のいずれかをお選びください")
        document.frmSubmit.languages.focus();
        return false;
    }
    return true;
}

function isJournalA() {
    var index = document.frmSubmit.services.selectedIndex;
    var services = document.frmSubmit.services[index].value;
    if (services == "Revised and submitted to another journal") {
        var str = document.frmSubmit.journalname_a.value;
        if (str == "") {
            alert("投稿予定のジャーナル名をお書きください")
            document.frmSubmit.journalname_a.focus();
            return false;
        }
    }
    return true;
}

function isAuthorInfo() {
    validateObject = new Object();
    validateObject.val = document.frmSubmit.email_a.value;
    var email_a = document.frmSubmit.email_a.value;
    var pub = false;
    for (var i = 0; i <= 1; i++) {
        if (document.frmSubmit.authorinfo[i].checked) {
            pub = true;
        }
    }
    if (pub == false) {
        alert("代表著者はどなたですか？");
        document.frmSubmit.authorinfo[0].focus();
        return false;
    }
    if (document.frmSubmit.authorinfo[1].checked) {
        if (document.frmSubmit.lname_a.value == "") {
            alert("代表著者の姓をご記入ください。");
            document.frmSubmit.lname_a.focus();
            return false;
        }
        if (document.frmSubmit.fname_a.value == "") {
            alert("代表著者の名をご記入ください。");
            document.frmSubmit.fname_a.focus();
            return false;
        }
        if ((validateObject.val.indexOf("@") == -1) || (validateObject.val.charAt(0) == ".") || (validateObject.val.charAt(0) == "@") || (validateObject.len < 6) || (validateObject.val.indexOf(".") == -1) || (validateObject.val.charAt(validateObject.val.indexOf("@") + 1) == ".") || (validateObject.val.charAt(validateObject.val.indexOf("@") - 1) == ".")) {
            alert("代表著者のメールアドレスをご記入ください。");
            document.frmSubmit.email_a.focus();
            return false;
        }
        if (document.frmSubmit.designation_a.selectedIndex == 0) {
            alert("代表著者の役職をお選びください。");
            document.frmSubmit.designation_a.focus();
            return false;
        }
    }
    return true;
}

function isRunningTitle() {
    var str = document.frmSubmit.runningtitle.value;
    if (str == "") {
        alert("ランニングタイトルをお書きください");
        document.frmSubmit.runningtitle.focus();
        return false;
    }
    return true;
}

function isNumberFigure() {
    var str = document.frmSubmit.numfigures.value;
    if (str == "") {
        alert("図の数をお書きください");
        document.frmSubmit.numfigures.focus();
        return false;
    }
    return true;
}

function isNumberTables() {
    var str = document.frmSubmit.numtables.value;
    if (str == "") {
        alert("表の数をお書きください");
        document.frmSubmit.numtables.focus();
        return false;
    }
    return true;
}

function isSupplimentary() {
    var str = document.frmSubmit.supplimentary.value;
    if (str == "") {
        alert("補助的な資料についてお書きください");
        document.frmSubmit.supplimentary.focus();
        return false;
    }
    return true;
}

function isDeadline() {
    var str = document.frmSubmit.deadline.value;
    if (str == "") {
        alert("投稿の期限をご記入下さい。");
        document.frmSubmit.deadline.focus();
        return false;
    }
    return true;
}

function isSubmittedSameJournal() {
    var pub = false;
    for (var i = 0; i <= 1; i++) {
        if (document.frmSubmit.submittedsame[i].checked) {
            if (document.frmSubmit.submittedsame[0].checked) {
                if (document.frmSubmit.username19.value == "") {
                    alert("前回投稿時のユーザーネームをご記入ください。");
                    document.frmSubmit.username19.focus();
                    return false;
                } else if (document.frmSubmit.password19.value == "") {
                    alert("前回投稿時のパスワードをご記入ください。");
                    document.frmSubmit.password19.focus();
                    return false;
                } else {
                    pub = true;
                }
            } else {
                pub = true;
            }
        }
    }
    if (pub == false) {
        alert("以前にも同じジャーナルに投稿したことはありますか？")
        document.frmSubmit.submittedsame[0].focus();
        return false;
    }
    return true;
}

function isSubmittedDiffJournal() {
    var pub = false;
    for (var i = 0; i <= 1; i++) {
        if (document.frmSubmit.submitteddiff[i].checked) {
            if (document.frmSubmit.submitteddiff[0].checked) {
                if (document.frmSubmit.username20.value == "") {
                    alert("前回投稿時のユーザーネームをご記入下さい。");
                    document.frmSubmit.username20.focus();
                    return false;
                } else if (document.frmSubmit.password20.value == "") {
                    alert("前回投稿時のパスワードをお書き下さい。");
                    document.frmSubmit.password20.focus();
                    return false;
                } else {
                    pub = true;
                }
            } else if (document.frmSubmit.submitteddiff[1].checked) {
                if (document.frmSubmit.desiredusername.value == "") {
                    alert("ご希望のユーザーネームをご記入下さい。");
                    document.frmSubmit.desiredusername.focus();
                    return false;
                } else if (document.frmSubmit.desiredpassword.value == "") {
                    alert("ご希望のパスワードをご記入下さい。");
                    document.frmSubmit.desiredpassword.focus();
                    return false;
                } else {
                    pub = true;
                }
            } else {
                pub = true;
            }
        }
    }
    if (pub == false) {
        alert("同じ出版社の別のジャーナルに投稿したことはありますか？")
        document.frmSubmit.submitteddiff[0].focus();
        return false;
    }
    return true;
}

function isConfirmManuscript() {
    var pub = false;
    for (var i = 0; i <= 1; i++) {
        if (document.frmSubmit.manuscriptconfirm[i].checked) {
            pub = true;
        }
    }
    if (pub == false) {
        alert("この原稿はまだ出版されたことがなく、さらに、今回投稿するジャーナル以外に、現在審査を受けているジャーナルはありませんかお答えください。");
        document.frmSubmit.manuscriptconfirm[0].focus();
        return false;
    }
    return true;
}

function isConfirmAuthors() {
    var pub = false;
    for (var i = 0; i <= 1; i++) {
        if (document.frmSubmit.confirmauthors[i].checked) {
            pub = true;
        }
    }
    if (pub == false) {
        alert("タイトルに記載されている著者全員が原稿を読み、ジャーナルへの投稿を承諾しましたかお答えください。");
        document.frmSubmit.confirmauthors[0].focus();
        return false;
    }
    return true;
}

function isBriefSummary() {
    var str = document.frmSubmit.briefsummary.value;
    if (str == "") {
        alert("研究の成果を英文150ワード程度でお書きください");
        document.frmSubmit.briefsummary.focus();
        return false;
    }
    return true;
}

function isSubmissionFees() {
    var index = document.frmSubmit.submissionfees.selectedIndex;
    if (index == 0) {
        alert("投稿費用をエナゴが一時的に立て替えますか？　それとも著者ご自身が直接支払いますか？");
        document.frmSubmit.submissionfees.focus();
        return false;
    }
    return true;
}

function isJourName2submit() {
    var str = document.frmSubmit.journalname.value;
    if (str == "") {
        alert("投稿予定のジャーナル名をお書きください");
        document.frmSubmit.journalname.focus();
        return false;
    }
    return true;
}

function isJournaltype() {
    var index = document.frmSubmit.journaltype.selectedIndex;
    var journaltype = document.frmSubmit.journaltype[index].value;
    if (index == 0) {
        alert("ジャーナルの読者層についての希望をお選びください。");
        document.frmSubmit.journaltype.focus();
        return false;
    }
    if (journaltype == "Others") {
        return isOtherjournaltype();
    }
    return true;
}

function isOtherjournaltype() {
    var str = document.frmSubmit.other_journaltype.value;
    if (str == "") {
        alert("ジャーナルの読者層についての希望をお書きください。");
        document.frmSubmit.other_journaltype.focus();
        return false;
    }
    return true;
}

function isDoctype() {
    var index = document.frmSubmit.typeofdoc.selectedIndex;
    var typeofdoc = document.frmSubmit.typeofdoc[index].value;
    if (index == 0) {
        alert("原稿の種類をお選びください");
        document.frmSubmit.typeofdoc.focus();
        return false;
    }
    if (typeofdoc == "Others") {
        return isOthertypeofdoc();
    }
    return true;
}

function isOthertypeofdoc() {
    var str = document.frmSubmit.other_typeofdoc.value;
    if (str == "") {
        alert("原稿の種類をお選びください");
        document.frmSubmit.other_typeofdoc.focus();
        return false;
    }
    return true;
}

function ifOthers() {
    if (document.frmSubmit.journaltype.value == "Others") {
        document.getElementById("jourtype").style.display = "block";
        document.getElementById("jourtype").style.visibility = "visible";
    } else {
        document.getElementById("jourtype").style.display = "none";
        document.getElementById("jourtype").style.visibility = "hidden";
    }
}

function choice1() {
    if (document.frmSubmit.serviceschoice_1.checked == true) {
        document.getElementById("10_13").style.display = "block";
        document.getElementById("10_13").style.visibility = "visible";
    } else {
        document.getElementById("10_13").style.display = "none";
        document.getElementById("10_13").style.visibility = "hidden";
    }
}

function choice3() {
    if (document.frmSubmit.serviceschoice_3.checked == true) {
        document.getElementById("5_7").style.display = "block";
        document.getElementById("5_7").style.visibility = "visible";
    } else {
        document.getElementById("5_7").style.display = "none";
        document.getElementById("5_7").style.visibility = "hidden";
    }
}

function choice4() {
    if (document.frmSubmit.serviceschoice_4.checked == true) {
        document.getElementById("8").style.display = "block";
        document.getElementById("8").style.visibility = "visible";
        document.getElementById("14_30").style.display = "block";
        document.getElementById("14_30").style.visibility = "visible";
    } else {
        document.getElementById("8").style.display = "none";
        document.getElementById("8").style.visibility = "hidden";
        document.getElementById("14_30").style.display = "none";
        document.getElementById("14_30").style.visibility = "hidden";
    }
}

function choice7() {
    if (document.frmSubmit.serviceschoice_7.checked == true) {
        document.getElementById("9").style.display = "block";
        document.getElementById("9").style.visibility = "visible";
    } else {
        document.getElementById("9").style.display = "none";
        document.getElementById("9").style.visibility = "hidden";
    }
}

function choiceother() {
    if (document.frmSubmit.serviceschoice_3.checked == true) {
        document.getElementById("1_2").style.display = "none";
        document.getElementById("1_2").style.visibility = "hidden";
    } else {
        document.getElementById("1_2").style.display = "block";
        document.getElementById("1_2").style.visibility = "visible";
    }
}

function samejournalYes() {
    document.getElementById("19_yes").style.visibility = "visible";
    document.getElementById("19_yes").style.display = "block";
}

function samejournalNo() {
    document.getElementById("19_yes").style.visibility = "hidden";
    document.getElementById("19_yes").style.display = "none";
    document.frmSubmit.username19.value = "";
    document.frmSubmit.password19.value = "";
}

function sameauthorinfo() {
    document.getElementById("authorinfo").style.visibility = "hidden";
    document.getElementById("authorinfo").style.display = "none";
    document.frmSubmit.fname_a.value = "";
    document.frmSubmit.lname_a.value = "";
    document.frmSubmit.organisation_a.value = "";
    document.frmSubmit.email_a.value = "";
    document.frmSubmit.designation_a.selectedIndex = 0;
}

function diffauthorinfo() {
    document.getElementById("authorinfo").style.visibility = "visible";
    document.getElementById("authorinfo").style.display = "block";
}

function showhide12_13() {
    var index = document.frmSubmit.services.selectedIndex;
    var services = document.frmSubmit.services[index].value;
    if (services == "Revised and submitted to another journal") {
        document.getElementById("12_13").style.visibility = "visible";
        document.getElementById("12_13").style.display = "block";
    } else {
        document.getElementById("12_13").style.visibility = "hidden";
        document.getElementById("12_13").style.display = "none";
        document.frmSubmit.journalname_a.value = "";
        document.frmSubmit.journalurl_a.value = "";
    }
}

function diffjournalYes() {
    document.getElementById("20_yes").style.visibility = "visible";
    document.getElementById("20_yes").style.display = "block";
    document.getElementById("20_no").style.visibility = "hidden";
    document.getElementById("20_no").style.display = "none";
    document.frmSubmit.desiredusername.value = "";
    document.frmSubmit.desiredpassword.value = "";
}

function diffjournalNo() {
    document.getElementById("20_yes").style.visibility = "hidden";
    document.getElementById("20_yes").style.display = "none";
    document.getElementById("20_no").style.visibility = "visible";
    document.getElementById("20_no").style.display = "block";
    document.frmSubmit.username20.value = "";
    document.frmSubmit.password20.value = "";
}

function isQues1() {
    var q1 = false;
    var q2 = false;
    var q3 = false;
    var q4 = false;
    var q5 = false;
    var q6 = false;
    var q7 = false;
    for (var i = 0; i <= 4; i++) {
        if (document.frmSubmit.ques1[i].checked) {
            q1 = true;
        }
    }
    for (var i = 0; i <= 1; i++) {
        if (document.frmSubmit.ques2[i].checked) {
            q2 = true;
        }
    }
    for (var i = 0; i <= 2; i++) {
        if (document.frmSubmit.ques3[i].checked) {
            q3 = true;
        }
    }
    for (var i = 0; i <= 2; i++) {
        if (document.frmSubmit.ques4[i].checked) {
            q4 = true;
        }
    }
    for (var i = 0; i <= 3; i++) {
        if (document.frmSubmit.ques5[i].checked) {
            q5 = true;
        }
    }
    for (var i = 0; i <= 2; i++) {
        if (document.frmSubmit.ques6[i].checked) {
            q6 = true;
        }
    }
    for (var i = 0; i <= 1; i++) {
        if (document.frmSubmit.ques7[i].checked) {
            q7 = true;
        }
    }
    if ((q1 == false) && (q2 == false) && (q3 == false) && (q4 == false) && (q5 == false) && (q6 == false) && (q7 == false)) {
        alert("請您至少回答一個問題");
        document.frmSubmit.ques1[0].focus();
        return false;
    }
    return true
}

function forexisting_ec() {
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
}

function fornew_ec() {
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

/**************************************************** Service Recommandation EC support form *******************************************************/
function validate_sreindex() {
    if (iskanjiFamily() && iskanjiGiven() && islastname() && isfirstname() && isEmail() && isMatch() && isChosenJournal() && isRejectedRevision() && isCaptcha()) {
        document.frmSubmit.action = "thankyou.php";
        return true;
    } else {
        return false;
    }
}

function isChosenJournal() {
    var pub = false;
    for (var i = 0; i <= 1; i++) {
        if (document.frmSubmit.chosenjournal[i].checked) {

            if (document.frmSubmit.chosenjournal[0].checked) {
                return isJourNameUrlsubmit();
            } else {
                pub = true;
            }
        }
    }
    if (pub == false) {
        alert("投稿予定ジャーナルはすでにお決まりですか?");
        document.frmSubmit.chosenjournal[0].focus();
        return false;
    }
    return true;
}

function isJourNameUrlsubmit() {
    var str = document.frmSubmit.journalname.value;
    var ptr = document.frmSubmit.journalurl.value;
    if (str == "") {
        alert("投稿を予定しているジャーナル名をお知らせください。");
        document.frmSubmit.journalname.focus();
        return false;
    }
    if (ptr == "") {
        alert("投稿規程のURLをお知らせください。");
        document.frmSubmit.journalurl.focus();
        return false;
    }
    return true;
}

function isRejectedRevision() {
    var pub = false;
    for (var i = 0; i <= 1; i++) {
        if (document.frmSubmit.rejectedinpast[i].checked) {

            if (document.frmSubmit.rejectedinpast[0].checked) {
                return isRejectionDetails();
            } else {
                pub = true;
            }
        }
    }
    if (pub == false) {
        alert("こちらの原稿について、以前掲載を拒否されたり、改訂を求められたりしたことがありますでしょうか?");
        document.frmSubmit.rejectedinpast[0].focus();
        return false;
    }
    return true;
}

function isRejectionDetails() {
    var str = document.frmSubmit.journalname2.value;
    if (str == "") {
        alert("リジェクト・リバイス論文についての詳細をご記入ください。");
        document.frmSubmit.journalname2.focus();
        return false;
    }
    return true;
}

function showifchosen() {
    document.getElementById('ifchosenjournal').style.visibility = "visible";
    document.getElementById('ifchosenjournal').style.display = "block";
}

function hidechosen() {
    document.getElementById('ifchosenjournal').style.visibility = "hidden";
    document.getElementById('ifchosenjournal').style.display = "none";
    document.frmSubmit.journalname.value = "";
    document.frmSubmit.journalurl.value = "";
}

function showifrejected() {
    document.getElementById('ifrejectedpast').style.visibility = "visible";
    document.getElementById('ifrejectedpast').style.display = "block";
}

function hiderejected() {
    document.getElementById('ifrejectedpast').style.visibility = "hidden";
    document.getElementById('ifrejectedpast').style.display = "none";
    document.frmSubmit.journalname2.value = "";
    document.frmSubmit.superdat.value = "";
}