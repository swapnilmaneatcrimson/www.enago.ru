$(document).ready(function(){$(".content").hide();$('<img src="img/common/icon_+.png" class="arrow" />').insertAfter('a h1');$("a h1").click(function(){if($(this).is(".active")){$(this).toggleClass("active");$('.arrow.active').attr('src','img/common/icon_+.png');$(this).parent().next(".content").slideToggle();return false;}else{$(".content:visible").slideUp("slow");$("h1.active").removeClass("active");$(this).toggleClass("active");$('.arrow.active').attr('src','img/common/icon_+.png');$(".arrow").addClass('active');$(this).siblings('.arrow.active').attr('src','img/common/icon_close.png');$(this).parent().next(".content").slideToggle();return false;}});});