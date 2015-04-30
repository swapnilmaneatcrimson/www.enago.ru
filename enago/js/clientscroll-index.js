/* message arrays for the two scrollers */
// this file is encoded as charset = 8859-1

var pausecontentindex=new Array()
pausecontentindex[0]='<div class="testimonialquoteText">自分の英語を客観的に見れるので、カルテは嬉しかったです。</div><div class="testimonialname"><img src="img/about/icn-comment.png" width="20" height="18" border="0" >M. O様<BR><div class="designation">京都大学</DIV></DIV><div class="testimonialquoteText">自分の英文を客観的に見てもらうことができ、大変役に立った。</div><div class="testimonialname"><img src="img/about/icn-comment.png" width="20" height="18" border="0" >Y. O様<BR><div class="designation">東京大学</DIV></DIV>'

pausecontentindex[1]='<div class="testimonialquoteText">専門的な視点で校閲して頂き、随分と読みやすくなりました。時間、料金ともに満足の行く者でした。次回も宜しくお願い致します。</div><div class="testimonialname"><img src="img/about/icn-comment.png" width="20" height="18" border="0" >T. K様<BR><div class="designation">北海道大学</DIV></DIV>'

pausecontentindex[2]='<div class="testimonialquoteText">とても丁寧な対応で、お勧めできます。</div><div class="testimonialname"><img src="img/about/icn-comment.png" width="20" height="18" border="0" >Y. F様<BR><div class="designation">一橋大学大学院</DIV></DIV><div class="testimonialquoteText">専門的な内容は踏まえられており、  質は良いと思いました。</div><div class="testimonialname"><img src="img/about/icn-comment.png" width="20" height="18" border="0" >M.T様<BR><div class="designation">名古屋大学</DIV></DIV>'

pausecontentindex[3]='<div class="testimonialquoteText">教育工学という学際分野だったこともあり，専門的知識にあたる範囲が広かったと思うが，文意の解釈に齟齬などは見受けられなかったと思う。</div><div class="testimonialname"><img src="img/about/icn-comment.png" width="20" height="18" border="0" >K様<BR><div class="designation">東北大学</DIV></DIV>'

pausecontentindex[4]='<div class="testimonialquoteText">専門的な内容は踏まえられており、  質は良いと思いました。</div><div class="testimonialname"><img src="img/about/icn-comment.png" width="20" height="18" border="0" >M.T様<BR><div class="designation">名古屋大学</DIV></DIV>'
/*
pausecontentindex[5]=''


pausecontentindex[6]=''

pausecontentindex[7]=''

pausecontentindex[8]=''

pausecontentindex[9]=''
*/

/***********************************************
Actual script no need to edit below
***********************************************/

function pausescroller(content, divId, divClass, delay){
this.content=content //message array content
this.tickerid=divId //ID of ticker div to display information
this.delay=delay //Delay between msg change, in miliseconds.
this.mouseoverBol=0 //Boolean to indicate whether mouse is currently over scroller (and pause it if it is)
this.hiddendivpointer=1 //index of message array for hidden div
document.write('<div id="'+divId+'" class="'+divClass+'" style="position: relative; text-align:left; overflow: hidden;"><div class="innerDiv" style="position: absolute; width: 100%; text-align:left" id="'+divId+'1">'+content[0]+'</div><div class="innerDiv" style="position: absolute; width: 100%; margin-left:0px; text-align:left; visibility: hidden" id="'+divId+'2">'+content[1]+'</div>')
var scrollerinstance=this
if (window.addEventListener) //run onload in DOM2 browsers
window.addEventListener("load", function(){scrollerinstance.initialize()}, false)
else if (window.attachEvent) //run onload in IE5.5+
window.attachEvent("onload", function(){scrollerinstance.initialize()})
else if (document.getElementById) //if legacy DOM browsers, just start scroller after 0.5 sec
setTimeout(function(){scrollerinstance.initialize()}, 500)
}

// -------------------------------------------------------------------
// initialize()- Initialize scroller method.
// -Get div objects, set initial positions, start up down animation
// -------------------------------------------------------------------

pausescroller.prototype.initialize=function(){
this.tickerdiv=document.getElementById(this.tickerid)
this.visiblediv=document.getElementById(this.tickerid+"1")
this.hiddendiv=document.getElementById(this.tickerid+"2")
this.visibledivtop=parseInt(pausescroller.getCSSpadding(this.tickerdiv))
//set width of inner DIVs to outer DIV's width minus padding (padding assumed to be top padding x 2)
this.visiblediv.style.width=this.hiddendiv.style.width=this.tickerdiv.offsetWidth-(this.visibledivtop*2)+"px"
this.getinline(this.visiblediv, this.hiddendiv)
this.hiddendiv.style.visibility="visible"
var scrollerinstance=this
document.getElementById(this.tickerid).onmouseover=function(){scrollerinstance.mouseoverBol=1}
document.getElementById(this.tickerid).onmouseout=function(){scrollerinstance.mouseoverBol=0}
if (window.attachEvent) //Clean up loose references in IE
window.attachEvent("onunload", function(){scrollerinstance.tickerdiv.onmouseover=scrollerinstance.tickerdiv.onmouseout=null})
setTimeout(function(){scrollerinstance.animateup()}, this.delay)
}


// -------------------------------------------------------------------
// animateup()- Move the two inner divs of the scroller up and in sync
// -------------------------------------------------------------------

pausescroller.prototype.animateup=function(){
var scrollerinstance=this
if (parseInt(this.hiddendiv.style.top)>(this.visibledivtop+5)){
this.visiblediv.style.top=parseInt(this.visiblediv.style.top)-5+"px"
this.hiddendiv.style.top=parseInt(this.hiddendiv.style.top)-5+"px"
setTimeout(function(){scrollerinstance.animateup()}, 50)
}
else{
this.getinline(this.hiddendiv, this.visiblediv)
this.swapdivs()
setTimeout(function(){scrollerinstance.setmessage()}, this.delay)
}
}

// -------------------------------------------------------------------
// swapdivs()- Swap between which is the visible and which is the hidden div
// -------------------------------------------------------------------

pausescroller.prototype.swapdivs=function(){
var tempcontainer=this.visiblediv
this.visiblediv=this.hiddendiv
this.hiddendiv=tempcontainer
}

pausescroller.prototype.getinline=function(div1, div2){
div1.style.top=this.visibledivtop+"px"
div2.style.top=Math.max(div1.parentNode.offsetHeight, div1.offsetHeight)+"px"
}

// -------------------------------------------------------------------
// setmessage()- Populate the hidden div with the next message before it's visible
// -------------------------------------------------------------------

pausescroller.prototype.setmessage=function(){
var scrollerinstance=this
if (this.mouseoverBol==1) //if mouse is currently over scoller, do nothing (pause it)
setTimeout(function(){scrollerinstance.setmessage()}, 100)
else{
var i=this.hiddendivpointer
var ceiling=this.content.length
this.hiddendivpointer=(i+1>ceiling-1)? 0 : i+1
this.hiddendiv.innerHTML=this.content[this.hiddendivpointer]
this.animateup()
}
}

pausescroller.getCSSpadding=function(tickerobj){ //get CSS padding value, if any
if (tickerobj.currentStyle)
return tickerobj.currentStyle["paddingTop"]
else if (window.getComputedStyle) //if DOM2
return window.getComputedStyle(tickerobj, "").getPropertyValue("padding-top")
else
return 0
}
