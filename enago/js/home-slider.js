// JavaScript Document

$(function(){var current=1;var iterate=function(){var i=parseInt(current+1);var lis=$('#rotmenu').children('li').size();if(i>lis)i=1;display($('#rotmenu li:nth-child('+i+')'));}
display($('#rotmenu li:first'));var slidetime=setInterval(iterate,5000);$('#rotmenu li').bind('click',function(e){clearTimeout(slidetime);display($(this));e.preventDefault();});function display(elem){var $this=elem;var repeat=false;if(current==parseInt($this.index()+1))
repeat=true;if(!repeat)
$this.parent().find('li:nth-child('+current+') a').stop(true,true).animate({'marginRight':'40px'},600,function(){$(this).animate({'opacity':'1'},1500);});current=parseInt($this.index()+1);var elem=$('a',$this);elem.stop(true,true).animate({'marginRight':'10px','opacity':'1.0'},300);var info_elem=elem.next();$('#rot1 .heading').animate({'left':'-200px','top':'20px'},00,'easeOutQuad',function(){$('div',$(this)).html(info_elem.find('.info_heading').html());$(this).animate({'left':'480px'},1000,'easeInSine');});$('#rot1 .description').animate({'bottom':'-270px'},500,'easeOutCirc',function(){$('p',$(this)).html(info_elem.find('.info_description').html());$(this).animate({'bottom':'0px'},400,'easeInOutQuad');})
$('#rot1').prepend($('<img/>',{style:'opacity:0',className:'bg'}).load(function(){$(this).animate({'opacity':'1'},600);$('#rot1 img:first').next().animate({'opacity':'0'},700,function(){$(this).remove();});})
.attr('src','images/'+info_elem.find('.info_image').html())
     .attr('width','0')
     .attr('height','0')
);}});


/////////////////////////////////////////////////////////////////////////


var pausecontentindex=new Array()
pausecontentindex[0]='<div class="testimonialquoteText">???????????????????????????????????????????????</div><DIV class="testimonialname"><IMG src="img/index/icn-comment.png" alt="" width="18" height="15" border=0 />R.M ??<BR /><DIV class="designation">????</div></div>'
pausecontentindex[1]='<div class="testimonialquoteText">????????????????????????????</div><DIV class="testimonialname"><IMG src="img/index/icn-comment.png" alt="" width="18" height="15" border=0 />N.S ??<BR /><DIV class="designation">???????</div></div>'
pausecontentindex[2]='<div class="testimonialquoteText">???????????????????????????????????????????????????????????????????? </div><DIV class="testimonialname"><IMG src="img/index/icn-comment.png" alt="" width="18" height="15" border=0 />????<BR /><DIV class="designation">??????</div></div>'
pausecontentindex[3]='<div class="testimonialquoteText">??????????????????????</div><DIV class="testimonialname"><IMG src="img/index/icn-comment.png" alt="" width="18" height="15" border=0 />I.N ??<BR /><DIV class="designation">???????????</div></div>'
pausecontentindex[4]='<div class="testimonialquoteText">?????????????????????? ??????????????????????????????????????????????</div><DIV class="testimonialname"><IMG src="img/index/icn-comment.png" alt="" width="18" height="15" border=0 />M.N ??<BR /><DIV class="designation">???????</div></div>'
pausecontentindex[5]='<div class="testimonialquoteText">???????????????????????????????????????????????????</div><DIV class="testimonialname"><IMG src="img/index/icn-comment.png" alt="" width="18" height="15" border=0 />R.M ??<BR /><DIV class="designation">MV Communications</div></div>'
function pausescroller(content,divId,divClass,delay){this.content=content
this.tickerid=divId
this.delay=delay
this.mouseoverBol=0
this.hiddendivpointer=1
document.write('<div id="'+divId+'" class="'+divClass+'" style="position: relative; text-align:left; overflow: hidden; min-height:125px"><div class="innerDiv" style="position: absolute; width: 100%; text-align:left" id="'+divId+'1">'+content[0]+'</div><div class="innerDiv" style="position: absolute; width: 100%; margin-left:0px; text-align:left; visibility: hidden" id="'+divId+'2">'+content[1]+'</div></div>')
var scrollerinstance=this
if(window.addEventListener)
window.addEventListener("load",function(){scrollerinstance.initialize()},false)
else if(window.attachEvent)
window.attachEvent("onload",function(){scrollerinstance.initialize()})
else if(document.getElementById)
setTimeout(function(){scrollerinstance.initialize()},500)}
pausescroller.prototype.initialize=function(){this.tickerdiv=document.getElementById(this.tickerid)
this.visiblediv=document.getElementById(this.tickerid+"1")
this.hiddendiv=document.getElementById(this.tickerid+"2")
this.visibledivtop=parseInt(pausescroller.getCSSpadding(this.tickerdiv))
this.visiblediv.style.width=this.hiddendiv.style.width=this.tickerdiv.offsetWidth-(this.visibledivtop*2)+"px"
this.getinline(this.visiblediv,this.hiddendiv)
this.hiddendiv.style.visibility="visible"
var scrollerinstance=this
document.getElementById(this.tickerid).onmouseover=function(){scrollerinstance.mouseoverBol=1}
document.getElementById(this.tickerid).onmouseout=function(){scrollerinstance.mouseoverBol=0}
if(window.attachEvent)
window.attachEvent("onunload",function(){scrollerinstance.tickerdiv.onmouseover=scrollerinstance.tickerdiv.onmouseout=null})
setTimeout(function(){scrollerinstance.animateup()},this.delay)}
pausescroller.prototype.animateup=function(){var scrollerinstance=this
if(parseInt(this.hiddendiv.style.top)>(this.visibledivtop+5)){this.visiblediv.style.top=parseInt(this.visiblediv.style.top)-5+"px"
this.hiddendiv.style.top=parseInt(this.hiddendiv.style.top)-5+"px"
setTimeout(function(){scrollerinstance.animateup()},50)}
else{this.getinline(this.hiddendiv,this.visiblediv)
this.swapdivs()
setTimeout(function(){scrollerinstance.setmessage()},this.delay)}}
pausescroller.prototype.swapdivs=function(){var tempcontainer=this.visiblediv
this.visiblediv=this.hiddendiv
this.hiddendiv=tempcontainer}
pausescroller.prototype.getinline=function(div1,div2){div1.style.top=this.visibledivtop+"px"
div2.style.top=Math.max(div1.parentNode.offsetHeight,div1.offsetHeight)+"px"}
pausescroller.prototype.setmessage=function(){var scrollerinstance=this
if(this.mouseoverBol==1)
setTimeout(function(){scrollerinstance.setmessage()},100)
else{var i=this.hiddendivpointer
var ceiling=this.content.length
this.hiddendivpointer=(i+1>ceiling-1)?0:i+1
this.hiddendiv.innerHTML=this.content[this.hiddendivpointer]
this.animateup()}}
pausescroller.getCSSpadding=function(tickerobj){if(tickerobj.currentStyle)
return tickerobj.currentStyle["paddingTop"]
else if(window.getComputedStyle)
return window.getComputedStyle(tickerobj,"").getPropertyValue("padding-top")
else
return 0}
var speed=50;var pic,numImgs,arrLeft,i,totalWidth,n,myInterval;$(window).load(function(){pic=$("#slider").children("img");numImgs=pic.length;arrLeft=new Array(numImgs);for(i=0;i<numImgs;i++){totalWidth=0;for(n=0;n<i;n++){totalWidth+=$(pic[n]).width();}
arrLeft[i]=totalWidth;$(pic[i]).css("left",totalWidth);}
myInterval=setInterval("flexiScroll()",speed);$('#imageloader').hide();$(pic).show();});function flexiScroll(){for(i=0;i<numImgs;i++){arrLeft[i]-=1;if(arrLeft[i]==-($(pic[i]).width())){totalWidth=0;for(n=0;n<numImgs;n++){if(n!=i){totalWidth+=$(pic[n]).width();}}
arrLeft[i]=totalWidth;}
$(pic[i]).css("left",arrLeft[i]);}}

function closebtn(){
	document.getElementById('ribbons').style.visibility = "hidden";
	document.getElementById('ribbons').style.display = "none";
	document.getElementById('flagsection').className = "";
	document.getElementById('headerwrap').className += "bgexpand";
	document.getElementById('keyword').className += " mart0";
	document.getElementById('para1').className += " paraoriginal";
	document.getElementById('para2').className += " paraoriginal";
}