function getBrowserId() {

	var userAgent = navigator.userAgent.toLowerCase();

	if ( userAgent.indexOf( "msie" ) != -1 ) {
		return "explorer";
	} else 	{
		if ( userAgent.indexOf( "netscape" ) != -1 ) {
			return "netscape";
		} else 		{
			if ( userAgent.indexOf( "firefox" ) != -1 ) {
				return "firefox";
			}
		}
	}
}


function showHideiFrame( objiFrame ) {

	theiFrame = parent.document.getElementById( objiFrame );
	
	if ( theiFrame.style.display == "block" ) {
		theiFrame.style.display = "none"
	} else {
		centerIFrame( objiFrame );
		theiFrame.style.display = "block"
	}

}


function showHideSpan( objSpan ) {
	
	theSpan = document.getElementById( objSpan );
	theSpan.style.display = ( ( theSpan.style.display == "block" ) ? "none" : "block" );
}


function showQuestion( sectionId, questionId ) {
	
	// Change the section's +/- icon
	var objImg = document.getElementById( 'img_' + sectionId );
	var imgSrc = objImg.src;
	objImg.src = '..images/icon_-.gif';

	// Expand the Section
	var objSection = document.getElementById( 'section_' + sectionId );
	objSection.style.display = "block";

	// Change the question's +/- icon
	objImg = document.getElementById( 'img_pm_' + questionId + '_' + sectionId );
	imgSrc = objImg.src;
	objImg.src = '../images/icon_-.gif';

	// Expand the Question
	var objQuestion = document.getElementById( 'item_q_' + questionId + '_ss_' );
	objQuestion.style.display = "block";
	//Focus on the question
	objQuestion.focus();
}

 
function showHideHelp( objSpan, status ) {

	var theSpan = document.getElementById( objSpan );
	
	if ( status == 1 ) {
		var x = 0;
		var y = 0;
		var theRef  = document.getElementById( 'selType' );
		var element = theRef;

		while ( element ) {
			x += element[ 'offsetLeft' ];
			y += element[ 'offsetTop' ];
			element = element.offsetParent;
		}
		
		theSpan.style.left = x + 'px';
		theSpan.style.top  = y + ( theRef.offsetHeight * 3 ) + 'px';
		theSpan.style.display = "block";
	} 
	else {
		theSpan.style.display = "none";
	}
}


function toggleFAQSection( oSectionHeader, sectionId ) {

	// -- Toggle the images +/-
	with ( document.getElementById( 'img_' + sectionId ) ) 
		src = ( src.indexOf( 'plus.gif' ) > -1 ) ? '/images/tables/book_minus.gif' : '/images/tables/book_plus.gif';
	
    // Highlight the section's text if necessary
    oSectionHeader.className = oSectionHeader.className == 'faq_secHeader' ? 'faq_secHeader_bold' : 'faq_secHeader';
    
    // -- Show/Hide the span    
	var oSpan = document.getElementById( 'section_' + sectionId );
	
	oSpan.style.display = ( ( oSpan.style.display == 'block' ) ? 'none' : 'block' );
}


function swapImgs( obj, img1, img2, altTxtImg1, altTxtImg2 ){
    
    theImg = document.getElementById( obj );
    
    currentImg = theImg.src.substr( theImg.src.lastIndexOf("/") + 1 );
    
    if ( currentImg == img1 ) {
        theImg.src = theImg.src.substr( 0, theImg.src.lastIndexOf("/") + 1 ) + img2;
        theImg.alt = altTxtImg2;
    } else {
        theImg.src = theImg.src.substr( 0, theImg.src.lastIndexOf("/") + 1 ) + img1;
        theImg.alt = altTxtImg1;
    }
    
}



function testBrowser(){
		var NS6 = (!document.all && document.getElementById)?true:false;
		var IE  = ((document.all)&&(navigator.appVersion.indexOf("MSIE"!=-1)))?true:false;
		var NS4 =  (!(document.all)&&(navigator.appVersion.indexOf("5.0"==-1)))?true:false;
	
		if ((NS4)||(NS6)){
			//alert("Netscape");
			displayNS6();
		}else if (IE){
			//display();
			//alert("Internet Explorer");
		}
	}
	

	function displayNS6(){
			
			var spanTags = "";
			alert(document.getElementsByTagName('div').length);

			var spanTags = document.getElementsByTagName('span');

			var len = spanTags.length ;
			
			var spans = new Array(len);
			var m = 0;		
			
			for (var i = 0; i < spanTags.length; i++ ) { 
				
				if ((spanTags[i].id.length > 0)&& (spanTags[i].id.indexOf('item')!= -1)){
					spans[m] = spanTags[i];
					m  = m + 1;
					
				}
			}  
						
			for (var pp1 = 0; pp1 < spans.length; pp1++){
				if (spans[pp1].style.display == "none"){
					spans[pp1].style.display = "inline";
				}
			}		
		
	
	}

function ToggleSpanImg( spanObj, imgObj ){ 

	var theSpan = document.getElementById( spanObj );
	var theImg	= document.getElementById( imgObj );
	
	// -- Toggle the +/- image
	var theSrc = theImg.src
	if ( theSrc.substr( theSrc.length - 10 ) == 'icon_+.gif' ) {
		theImg.src = theSrc.substring( 0, theSrc.lastIndexOf( 'icon_+.gif' ) ) + 'icon_-.gif';
	} else {
		theImg.src = theSrc.substring( 0, theSrc.lastIndexOf( 'icon_-.gif' ) ) + 'icon_+.gif';
	}
	
	// Show/hide the span
	theSpan.style.display == "block" ? theSpan.style.display = "none" : theSpan.style.display = "block"
}


function disappear1(obj) {
	
	//alert(obj.id);
	
	var NS6 = (!document.all && document.getElementById)?true:false;
	var IE  = ((document.all)&&(navigator.appVersion.indexOf("MSIE"!=-1)))?true:false;
	var m=0;
	var k = 0;
	var pos = 0;
	var j = 0;
	
	//if (IE || NS6){
		var spanTags = "";
		spanTags = document.getElementsByTagName( 'span' ); 
		var spans = new Array();
			
		for (var i = 0; i < spanTags.length; i++ ) { 
			if ((spanTags[i].id != "" )&& (spanTags[i].id.indexOf('item')!= -1)){
				spans[m] = spanTags[i];
				m  = m + 1;
			}
		}
		m = 0;
		for (var j = 0; j < spans.length; j ++){
			//if (spans[j].id == document.getElementById(obj).id){
			if (spans[j].id == obj.id){
				var pos = 0;
				pos = j;
				break;
			}	
		}
	
		j = 0;

		for ( var k = 0; k < spans.length; k++) { 
			if (k == pos) {
				if (spans[k].style.display == 'none'){
					spans[k].style.display = '';
				} else if (spans[k].style.display == ''){
					spans[k].style.display = 'none'	;
				}	
			}else{
				if (spans[k].style.display == ''){
					spans[k].style.display = 'none'	;
				}
			}	
		} 
 	//}
}



function swapImages( obj, img1, img2, altTxtImg1, altTxtImg2 ){
    
    objImg = obj.src
    currentImg = objImg.substr( objImg.lastIndexOf("/") + 1 );
    
    if ( currentImg == img1 ) {
        obj.src = objImg.substr( 0, objImg.lastIndexOf("/") + 1 ) + img2;
        obj.alt = altTxtImg2;
    } else {
        obj.src = objImg.substr( 0, objImg.lastIndexOf("/") + 1 ) + img1;
        obj.alt = altTxtImg1;
    }
    
}


function disappear( spanObj ){ 
	
		var NS6 = (!document.all && document.getElementById)?true:false;
		var IE  = ((document.all)&&(navigator.appVersion.indexOf("MSIE"!=-1)))?true:false;
		
 	var spanTags = "";
		spanTags = document.getElementsByTagName( 'span' ); 
		len = spanTags.length ;
		//var ks = len / 2;
	
		var spans = new Array(len);
		var m = 0;		
		for ( var i = 0; i < spanTags.length; i++ ) 
		  { 
				if ( ( spanTags[i].id.length > 0 ) && ( spanTags[i].id.indexOf('item')!= -1) ){
						spans[m] = spanTags[i];
						m = m + 1;
				}
		}  
		
		
 
	//var spanId = document.getElementById( spanObj );
	
	//if (IE){
 	for ( var j = 0; j < spans.length; j ++ ){
        if ( spans[j].id == spanObj )	{
			var pos = 0;
			pos = j;
			break;
		}	
	}
		
	for ( var k = 0; k < spans.length; k++ ) {
	
	    if ( k == pos ) {
    		if ( spans[k].style.display == "none" ){
    			spans[k].style.display = "block";
			} 
			else if ( spans[k].style.display == "block" ) {
    			spans[k].style.display = "none"	;
			}
		} else {
		    if ( ( spans[k] ) && ( spans[k].style.display == "block" ) ){
    			spans[k].style.display = "none"	;
			}
		}	
	}	

	/*}else if(NS6){
		/*for (var pp = 0; pp < spans.length; pp++){
			if (spans[pp].style.display == "none"){
				spans[pp].style.display = "inline";
			}
		}	
	} 	*/	

 }	

 function testFunction(){
 	
 	var NS6 = (!document.all && document.getElementById)?true:false;
	var IE  = ((document.all)&&(navigator.appVersion.indexOf("MSIE"!=-1)))?true:false;
	

	
	if (NS6)	{
 	var spanTags = "";
	spanTags = document.getElementsByTagName( 'span' ); 
	len = spanTags.length ;
	var ks = len / 2;
	
	var spans = new Array(len/2);
	var m = 0;		
	for (var i = 0; i < spanTags.length; i++ ) { 
		
		if ((spanTags[i].id.length > 0) && (spanTags[i].id.indexOf('item')!= -1)){
			
			spans[m] = spanTags[i];
			m  = m + 1;
			
		}
	}  
	
	
	for (var pp1 = 0; pp1 < spans.length; pp1++){
	
			if (spans[pp1].style.display == "none"){
					//spans[k].id.className = '';
					spans[pp1].style.display = "inline";
					
				}
		}		
 	}
 } 