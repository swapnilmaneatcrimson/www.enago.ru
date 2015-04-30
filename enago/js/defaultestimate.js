// JavaScript Document

function estimation()
{ 

var clienttype ="New";
var totalwrc = 100;
var latex = "No";
var strservice;
var strtat;
var tatwpd;
var strbasicrate;
var strminormal;
var strmiadvance;
var strdiscount;
var strpremium;
var strdeldays;
var grossamount;
var netamount;
var mifees;
var finaltat;


// Service type defined

if(document.frmSubmit.servicetype[0].checked == true)
{
	strservice = "Normal";
	document.getElementById('eco').style.visibility = "visible";
	document.getElementById('eco').style.display = "block";
}
else
{
	strservice = "Advance";
	document.getElementById('eco').style.visibility = "hidden";
	document.getElementById('eco').style.display = "none";
	
}


// MI Calculation

if(document.frmSubmit.servicetype[0].checked == true)
{
	if(document.frmSubmit.miaddon[0].checked == true)
	{
		strminormal = "Yes";
		mifees = totalwrc * 2;
		document.getElementById('miinfo').style.visibility = "visible";
		document.getElementById('miinfo').style.display = "block";
		strmiadvance = "";

	}
	else
	{
		strminormal = "No";
		mifees = 0;
		document.getElementById('miinfo').style.visibility = "hidden";
		document.getElementById('miinfo').style.display = "none";
		strmiadvance = "";
	}
}
else if(document.frmSubmit.servicetype[1].checked == true)
{
	if(document.frmSubmit.miaddon[0].checked == true)
	{
		strminormal = "";
		mifees = totalwrc * 4;
		document.getElementById('miinfo').style.visibility = "visible";
		document.getElementById('miinfo').style.display = "block";
		strmiadvance = "Yes";

	}
	else
	{
		strminormal = "";
		mifees = 0;
		document.getElementById('miinfo').style.visibility = "hidden";
		document.getElementById('miinfo').style.display = "none";
		strmiadvance = "No";

	}
}

// TAT Calculation 

if(document.frmSubmit.tat[1].checked == true)
{
	
	strtat="Super Rush";
	//alert(strtat);
	
}
else if(document.frmSubmit.tat[2].checked == true)
{
	strtat="Rush";
	//alert(strtat);
}
else if(document.frmSubmit.tat[3].checked == true)
{
	strtat="Standard";
	//alert(strtat);
}
else if(document.frmSubmit.tat[4].checked == true)
{
	strtat="Economy";
	//alert(strtat);
}
else
{
	strtat="LMP";
	//alert(strtat);
}

//


// Slab Concatenate

var a = strservice;
var b = strtat;

slab = a + b;

var slabinfo=slab;

var tatslab = new Array();
tatslab['NormalEconomy'] = ['6', '750'];
tatslab['NormalStandard'] = ['7', '1000'];
tatslab['NormalRush'] = ['8', '1500'];
tatslab['NormalSuper Rush'] = ['12', '2000'];
tatslab['NormalLMP'] = ['15', '2000 ŒêˆÈã'];

tatslab['AdvanceStandard'] = ['12', '1500'];
tatslab['AdvanceRush'] = ['14', '2000'];
tatslab['AdvanceSuper Rush'] = ['16', '2500'];
tatslab['AdvanceLMP'] = ['18', '2500 ŒêˆÈã'];


// Rate 

strbasicrate = tatslab[slabinfo][0];
tatwpd = tatslab[slabinfo][1];

//alert(strbasicrate);


// Gross Amount
	
grossamount = totalwrc * strbasicrate;

// Tat 
if(strservice == "Advance")
{
	if(slabinfo == "AdvanceLMP")
	{ 
		finaltat ="ˆê“ú2500’PŒêˆÈãZ³‚µ‚Ü‚·BÚ‚µ‚­‚Í‚¨–â‚¢‡‚í‚¹‚­‚¾‚³‚¢B";
	}
	else
	{
		strdeldays = Math.ceil(totalwrc/tatwpd);
		finaltat ="–ñ"+ strdeldays + "“ú (‚¨‹}‚¬‚Ì‚¨‹q—l‚ÍA‚¨–â‚¢‡‚í‚¹‚­‚¾‚³‚¢B)";
	}
}
else
{
	if(slabinfo == "NormalLMP")
	{
		finaltat = "2000 ŒêˆÈã";
	}
	else
	{
		strdeldays = Math.ceil(totalwrc/tatwpd);
		finaltat = strdeldays + "“úi“ú—j“úœ‚­j";
	}
}


// New Client Discount

if(clienttype == "New")
{ 
	if(strservice == "Advance")
	{  
		strdiscount = (grossamount * 15)/100;
		discounttext = "(V‹K‚¨‹q—lŠ„ˆø15%)";
		//alert(strdiscount);
		
	}
	else
	{
		if(totalwrc > 9999)
		{
			strdiscount = (grossamount * 20)/100;
			discounttext = "(VolumeDiscount 20%)";
			//alert(strdiscount);
		}
		else
		{
			strdiscount = (grossamount * 15)/100;
			discounttext = "(V‹K‚¨‹q—lŠ„ˆø15%)";
		}
	}
}
else
{
	if(strservice == "Advance")
	{  
		strdiscount = 0;
		
	}
	else
	{
		if(totalwrc >= 10001)
		{
			strdiscount = (grossamount * 20)/100;
			discounttext = "(VolumeDiscount 20%)";
			//alert(strdiscount);
		}
		else if(totalwrc >= 8001 && totalwrc <= 10000)
		{
			strdiscount = (grossamount * 15)/100;
			discounttext = "(VolumeDiscount 15%)";
			//alert(strdiscount);
		}
		else if(totalwrc >= 4000 && totalwrc <= 8000)
		{
			strdiscount = (grossamount * 10)/100;
			discounttext = "(VolumeDiscount 10%)";
			//alert(strdiscount);
		}
		else
		{
			strdiscount = 0;
		}
	}
	
}


// If Discount is 0

if(strdiscount == 0)
{
	document.getElementById('discountinfo').style.visibility = "hidden";
	document.getElementById('discountinfo').style.display = "none";
}
else
{
	document.getElementById('discountinfo').style.visibility = "visible";
	document.getElementById('discountinfo').style.display = "block";
}

// Latex Premium

if(latex == "Yes")
{
	strpremium = (grossamount * 30)/100;
	document.getElementById('premiuminfo').style.visibility = "visible";
	document.getElementById('premiuminfo').style.display = "block";
}
else
{
	strpremium = 0;
	document.getElementById('premiuminfo').style.visibility = "hidden";
	document.getElementById('premiuminfo').style.display = "none";
}

// Net Amount Calculation

netamount = Math.round(grossamount) - Math.round(strdiscount);
netamount = Math.round(netamount) + Math.round(mifees) + Math.round(strpremium);



// Final Formatting
strbasicrate = strbasicrate+"‰~ (1Œê‚ ‚½‚è)";
grossamount = grossamount + "‰~";
mifees = mifees+"‰~";
finaltat = finaltat;
strdiscount = strdiscount+discounttext;
strpremium= strpremium+ "‰~ (ƒ_ƒCƒŒƒNƒgTeXŠ„‘—¿‹à30%)";
netamount= netamount+"‰~";

//


document.getElementById('rate').innerHTML = strbasicrate;
document.getElementById('grossamt').innerHTML = grossamount;
document.getElementById('discountamt').innerHTML = strdiscount;
document.getElementById('premiumamt').innerHTML = strpremium;
document.getElementById('mifamt').innerHTML = mifees;
document.getElementById('netamt').innerHTML = netamount;
document.getElementById('deldays').innerHTML = finaltat;

}

