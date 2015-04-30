//-----------//
//  Process  //
//-----------//

// 1) Make the h1 selectable and hide the .content div 
//----------------------------------------------------
//  $(document).ready(function(){					   
//  	$("a h1").click(function(){
//  			$(".content").hide();
//  			return false;
//  		});
//  });


// 2) hide only the content div underneath it
//-------------------------------------------
//  $(document).ready(function(){					   
//  	$("a h1").click(function(){
//  			$(this).parent().next(".content").toggle();
//  			return false;
//  		});
//  });


// 3) hide all content div's on load
//----------------------------------
//  $(document).ready(function(){
//	$(".content").hide();					   
//  	$("a h1").click(function(){
//  			$(this).parent().next(".content").toggle();
//  			return false;
//  		});
//  });


// 4) make a cooler transition using slideToggle effect
//------------------------------------------------------
//  $(document).ready(function(){
//	$(".content").hide(); 				   
//  	$("a h1").click(function(){
//  			$(this).parent().next(".content").slideToggle();
//  			return false;
//  		});
//  });


// 5) Give an active class to the opened item so there is user feedback.
//----------------------------------------------------------------------
//  $(document).ready(function(){
//	$(".content").hide(); 				   
//  	$("a h1").click(function(){
//  			$(this).toggleClass("active");
//  			$(this).parent().next(".content").slideToggle();
//  			return false;
//  		});
//  });


// 6) Hide all open content div's when opening a new link
//-------------------------------------------------------
//  $(document).ready(function(){
//	$(".content").hide(); 				   
//  	$("a h1").click(function(){
//  			$(".content:visible").slideUp("slow"); // close all visible divs with the class of .content
//		        $("h1.active").removeClass("active"); // remove the class active from all h1's with the class of .active
//		        $(this).toggleClass("active");
//  			$(this).parent().next(".content").slideToggle();
//  			return false;
//  		});
//  });


// 7) If div is open and h1 is already active and opened, when clicked hide it.
//-----------------------------------------------------------------------------
//  $(document).ready(function(){
//	$(".content").hide(); 				   
//  	$("a h1").click(function(){
//  	if($(this).is('.active')) {
//		$(this).toggleClass("active");
//  		$(this).parent().next(".content").slideToggle();
//  		return false;
//  	} else {
//  		$(".content:visible").slideUp("slow"); // close all visible divs with the class of .content
//		$("h1.active").removeClass("active"); // remove the class active from all h1's with the class of .active
//		$(this).toggleClass("active");
//  		$(this).parent().next(".content").slideToggle();
//  		return false;
//		}
//	});
//});


// 8) add a drop down image next to the h1
//------------------------------------------
//  $(document).ready(function(){
//	$(".content").hide();
//	$('<img src="arrow-down.png" class="arrow" />').insertAfter('a h1'); 				   
//  	$("a h1").click(function(){
//  	if($(this).is('.active')) {
//         $(this).toggleClass("active");
//         $(this).parent().next(".content").slideToggle();
//         return false;
//  	} else {
//  		$(".content:visible").slideUp("slow"); // close all visible divs with the class of .content
//		$("h1.active").removeClass("active"); // remove the class active from all h1's with the class of .active
//		$(this).toggleClass("active");
//  		$(this).parent().next(".content").slideToggle();
//  		return false;
//		}
//	});
//});


// 9) change the image based on if the box is active or not
////----------------------------------------------------------------
 $(document).ready(function(){
	$(".content").hide();
	$('<img src="white.png" width="1px" height="1px" class="arrow" />').insertAfter('a h1'); 				   
	$("a h1").click(function(){
		if($(this).is(".active")) {
         $(this).toggleClass("active");
		 $('.arrow.active').attr('src','img/common/white.png width=1px height=1px'); // change the image src of the current ACTIVE image to have an INACTIVE state.
         $(this).parent().next(".content").slideToggle();
         return false;
		} else {
			$(".content:visible").slideUp("slow"); // close all visible divs with the class of .content
			$("h1.active").removeClass("active");  // remove the class active from all h1's with the class of .active
			$(this).toggleClass("active");
			$('.arrow.active').attr('src','img/common/white.png width=1px height=1px"'); // change the image src of the current ACTIVE image to have an INACTIVE state.
			$(".arrow").addClass('active');
			$(this).siblings('.arrow.active').attr('src','img/common/white.png width=1px height=1px'); // change the image src of the new active image to have an active state.
			$(this).parent().next(".content").slideToggle();
			return false;
		}
	});
});