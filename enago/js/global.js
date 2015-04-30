if(typeof dd_domreadycheck=="undefined")
var dd_domreadycheck=false
var ddlevelsmenu={enableshim:true,arrowpointers:{downarrow:["img/index-new/arrow-down.png",11,7],rightarrow:["img/index-new/arrow-right.gif",12,12],showarrow:{toplevel:true,sublevel:true}},hideinterval:200,effects:{enableswipe:true,enablefade:true,duration:200},httpsiframesrc:"blank.htm",topmenuids:[],topitems:{},subuls:{},lastactivesubul:{},topitemsindex:-1,ulindex:-1,hidetimers:{},shimadded:false,nonFF:!/Firefox[\/\s](\d+\.\d+)/.test(navigator.userAgent),getoffset:function(what,offsettype){return(what.offsetParent)?what[offsettype]+this.getoffset(what.offsetParent,offsettype):what[offsettype]},getoffsetof:function(el){el._offsets={left:this.getoffset(el,"offsetLeft"),top:this.getoffset(el,"offsetTop")}},getwindowsize:function(){this.docwidth=window.innerWidth?window.innerWidth-10:this.standardbody.clientWidth-10
this.docheight=window.innerHeight?window.innerHeight-15:this.standardbody.clientHeight-18},gettopitemsdimensions:function(){for(var m=0;m<this.topmenuids.length;m++){var topmenuid=this.topmenuids[m]
for(var i=0;i<this.topitems[topmenuid].length;i++){var header=this.topitems[topmenuid][i]
var submenu=document.getElementById(header.getAttribute('rel'))
header._dimensions={w:header.offsetWidth,h:header.offsetHeight,submenuw:submenu.offsetWidth,submenuh:submenu.offsetHeight}}}},isContained:function(m,e){var e=window.event||e
var c=e.relatedTarget||((e.type=="mouseover")?e.fromElement:e.toElement)
while(c&&c!=m)try{c=c.parentNode}catch(e){c=m}
if(c==m)
return true
else
return false},addpointer:function(target,imgclass,imginfo,BeforeorAfter){var pointer=document.createElement("img")
pointer.src=imginfo[0]
pointer.style.width=imginfo[1]+"px"
pointer.style.height=imginfo[2]+"px"
if(imgclass=="rightarrowpointer"){pointer.style.left=target.offsetWidth-imginfo[2]-2+"px"}
pointer.className=imgclass
var target_firstEl=target.childNodes[target.firstChild.nodeType!=1?1:0]
if(target_firstEl&&target_firstEl.tagName=="SPAN"){target=target_firstEl}
if(BeforeorAfter=="before")
target.insertBefore(pointer,target.firstChild)
else
target.appendChild(pointer)},css:function(el,targetclass,action){var needle=new RegExp("(^|\\s+)"+targetclass+"($|\\s+)","ig")
if(action=="check")
return needle.test(el.className)
else if(action=="remove")
el.className=el.className.replace(needle,"")
else if(action=="add"&&!needle.test(el.className))
el.className+=" "+targetclass},addshimmy:function(target){var shim=(!window.opera)?document.createElement("iframe"):document.createElement("div")
shim.className="ddiframeshim"
shim.setAttribute("src",location.protocol=="https:"?this.httpsiframesrc:"about:blank")
shim.setAttribute("frameborder","0")
target.appendChild(shim)
try{shim.style.filter='progid:DXImageTransform.Microsoft.Alpha(style=0,opacity=0)'}
catch(e){}
return shim},positionshim:function(header,submenu,dir,scrollX,scrollY){if(header._istoplevel){var scrollY=window.pageYOffset?window.pageYOffset:this.standardbody.scrollTop
var topgap=header._offsets.top-scrollY
var bottomgap=scrollY+this.docheight-header._offsets.top-header._dimensions.h
if(topgap>0){this.shimmy.topshim.style.left=scrollX+"px"
this.shimmy.topshim.style.top=scrollY+"px"
this.shimmy.topshim.style.width="99%"
this.shimmy.topshim.style.height=topgap+"px"}
if(bottomgap>0){this.shimmy.bottomshim.style.left=scrollX+"px"
this.shimmy.bottomshim.style.top=header._offsets.top+header._dimensions.h+"px"
this.shimmy.bottomshim.style.width="99%"
this.shimmy.bottomshim.style.height=bottomgap+"px"}}},hideshim:function(){this.shimmy.topshim.style.width=this.shimmy.bottomshim.style.width=0
this.shimmy.topshim.style.height=this.shimmy.bottomshim.style.height=0},buildmenu:function(mainmenuid,header,submenu,submenupos,istoplevel,dir){header._master=mainmenuid
header._pos=submenupos
header._istoplevel=istoplevel
if(istoplevel){this.addEvent(header,function(e){ddlevelsmenu.hidemenu(ddlevelsmenu.subuls[this._master][parseInt(this._pos)])},"click")}
this.subuls[mainmenuid][submenupos]=submenu
header._dimensions={w:header.offsetWidth,h:header.offsetHeight,submenuw:submenu.offsetWidth,submenuh:submenu.offsetHeight}
this.getoffsetof(header)
submenu.style.left=0
submenu.style.top=0
submenu.style.visibility="hidden"
this.addEvent(header,function(e){if(!ddlevelsmenu.isContained(this,e)){var submenu=ddlevelsmenu.subuls[this._master][parseInt(this._pos)]
if(this._istoplevel){ddlevelsmenu.css(this,"selected","add")
clearTimeout(ddlevelsmenu.hidetimers[this._master][this._pos])}
ddlevelsmenu.getoffsetof(header)
var scrollX=window.pageXOffset?window.pageXOffset:ddlevelsmenu.standardbody.scrollLeft
var scrollY=window.pageYOffset?window.pageYOffset:ddlevelsmenu.standardbody.scrollTop
var submenurightedge=this._offsets.left+this._dimensions.submenuw+(this._istoplevel&&dir=="topbar"?0:this._dimensions.w)
var submenubottomedge=this._offsets.top+this._dimensions.submenuh
var menuleft=(this._istoplevel?this._offsets.left+(dir=="sidebar"?this._dimensions.w:0):this._dimensions.w)
if(submenurightedge-scrollX>ddlevelsmenu.docwidth){menuleft+=-this._dimensions.submenuw+(this._istoplevel&&dir=="topbar"?this._dimensions.w:-this._dimensions.w)}
submenu.style.left=menuleft+"px"
var menutop=(this._istoplevel?this._offsets.top+(dir=="sidebar"?0:this._dimensions.h):this.offsetTop)
if(submenubottomedge-scrollY>ddlevelsmenu.docheight){if(this._dimensions.submenuh<this._offsets.top+(dir=="sidebar"?this._dimensions.h:0)-scrollY){menutop+=-this._dimensions.submenuh+(this._istoplevel&&dir=="topbar"?-this._dimensions.h:this._dimensions.h)}
else{menutop+=-(this._offsets.top-scrollY)+(this._istoplevel&&dir=="topbar"?-this._dimensions.h:0)}}
submenu.style.top=menutop+"px"
if(ddlevelsmenu.enableshim&&(ddlevelsmenu.effects.enableswipe==false||ddlevelsmenu.nonFF)){ddlevelsmenu.positionshim(header,submenu,dir,scrollX,scrollY)}
else{submenu.FFscrollInfo={x:scrollX,y:scrollY}}
ddlevelsmenu.showmenu(header,submenu,dir)}},"mouseover")
this.addEvent(header,function(e){var submenu=ddlevelsmenu.subuls[this._master][parseInt(this._pos)]
if(this._istoplevel){if(!ddlevelsmenu.isContained(this,e)&&!ddlevelsmenu.isContained(submenu,e))
ddlevelsmenu.hidemenu(submenu)}
else if(!this._istoplevel&&!ddlevelsmenu.isContained(this,e)){ddlevelsmenu.hidemenu(submenu)}},"mouseout")},setopacity:function(el,value){el.style.opacity=value
if(typeof el.style.opacity!="string"){el.style.MozOpacity=value
if(el.filters){el.style.filter="progid:DXImageTransform.Microsoft.alpha(opacity="+value*100+")"}}},showmenu:function(header,submenu,dir){if(this.effects.enableswipe||this.effects.enablefade){if(this.effects.enableswipe){var endpoint=(header._istoplevel&&dir=="topbar")?header._dimensions.submenuh:header._dimensions.submenuw
submenu.style.width=submenu.style.height=0
submenu.style.overflow="hidden"}
if(this.effects.enablefade){this.setopacity(submenu,0)}
submenu._curanimatedegree=0
submenu.style.visibility="visible"
clearInterval(submenu._animatetimer)
submenu._starttime=new Date().getTime()
submenu._animatetimer=setInterval(function(){ddlevelsmenu.revealmenu(header,submenu,endpoint,dir)},10)}
else{submenu.style.visibility="visible"}},revealmenu:function(header,submenu,endpoint,dir){var elapsed=new Date().getTime()-submenu._starttime
if(elapsed<this.effects.duration){if(this.effects.enableswipe){if(submenu._curanimatedegree==0){submenu.style[header._istoplevel&&dir=="topbar"?"width":"height"]="auto"}
submenu.style[header._istoplevel&&dir=="topbar"?"height":"width"]=(submenu._curanimatedegree*endpoint)+"px"}
if(this.effects.enablefade){this.setopacity(submenu,submenu._curanimatedegree)}}
else{clearInterval(submenu._animatetimer)
if(this.effects.enableswipe){submenu.style.width="auto"
submenu.style.height="auto"
submenu.style.overflow="visible"}
if(this.effects.enablefade){this.setopacity(submenu,1)
submenu.style.filter=""}
if(this.enableshim&&submenu.FFscrollInfo)
this.positionshim(header,submenu,dir,submenu.FFscrollInfo.x,submenu.FFscrollInfo.y)}
submenu._curanimatedegree=(1-Math.cos((elapsed/this.effects.duration)*Math.PI))/2},hidemenu:function(submenu){if(typeof submenu._pos!="undefined"){this.css(this.topitems[submenu._master][parseInt(submenu._pos)],"selected","remove")
if(this.enableshim)
this.hideshim()}
clearInterval(submenu._animatetimer)
submenu.style.left=0
submenu.style.top="-1000px"
submenu.style.visibility="hidden"},addEvent:function(target,functionref,tasktype){if(target.addEventListener)
target.addEventListener(tasktype,functionref,false);else if(target.attachEvent)
target.attachEvent('on'+tasktype,function(){return functionref.call(target,window.event)});},domready:function(functionref){if(dd_domreadycheck){functionref()
return}
if(document.addEventListener){document.addEventListener("DOMContentLoaded",function(){document.removeEventListener("DOMContentLoaded",arguments.callee,false)
functionref();dd_domreadycheck=true},false)}
else if(document.attachEvent){if(document.documentElement.doScroll&&window==window.top)(function(){if(dd_domreadycheck){functionref()
return}
try{document.documentElement.doScroll("left")}catch(error){setTimeout(arguments.callee,0)
return;}
functionref();dd_domreadycheck=true})();}
if(document.attachEvent&&parent.length>0)
this.addEvent(window,function(){functionref()},"load");},init:function(mainmenuid,dir){this.standardbody=(document.compatMode=="CSS1Compat")?document.documentElement:document.body
this.topitemsindex=-1
this.ulindex=-1
this.topmenuids.push(mainmenuid)
this.topitems[mainmenuid]=[]
this.subuls[mainmenuid]=[]
this.hidetimers[mainmenuid]=[]
if(this.enableshim&&!this.shimadded){this.shimmy={}
this.shimmy.topshim=this.addshimmy(document.body)
this.shimmy.bottomshim=this.addshimmy(document.body)
this.shimadded=true}
var menubar=document.getElementById(mainmenuid)
var alllinks=menubar.getElementsByTagName("a")
this.getwindowsize()
for(var i=0;i<alllinks.length;i++){if(alllinks[i].getAttribute('rel')){this.topitemsindex++
this.ulindex++
var menuitem=alllinks[i]
this.topitems[mainmenuid][this.topitemsindex]=menuitem
var dropul=document.getElementById(menuitem.getAttribute('rel'))
document.body.appendChild(dropul)
dropul.style.zIndex=2000
dropul._master=mainmenuid
dropul._pos=this.topitemsindex
this.addEvent(dropul,function(){ddlevelsmenu.hidemenu(this)},"click")
var arrowclass=(dir=="sidebar")?"rightarrowpointer":"downarrowpointer"
var arrowpointer=(dir=="sidebar")?this.arrowpointers.rightarrow:this.arrowpointers.downarrow
if(this.arrowpointers.showarrow.toplevel)
this.addpointer(menuitem,arrowclass,arrowpointer,(dir=="sidebar")?"before":"after")
this.buildmenu(mainmenuid,menuitem,dropul,this.ulindex,true,dir)
dropul.onmouseover=function(){clearTimeout(ddlevelsmenu.hidetimers[this._master][this._pos])}
this.addEvent(dropul,function(e){if(!ddlevelsmenu.isContained(this,e)&&!ddlevelsmenu.isContained(ddlevelsmenu.topitems[this._master][parseInt(this._pos)],e)){var dropul=this
if(ddlevelsmenu.enableshim)
ddlevelsmenu.hideshim()
ddlevelsmenu.hidetimers[this._master][this._pos]=setTimeout(function(){ddlevelsmenu.hidemenu(dropul)},ddlevelsmenu.hideinterval)}},"mouseout")
var subuls=dropul.getElementsByTagName("ul")
for(var c=0;c<subuls.length;c++){this.ulindex++
var parentli=subuls[c].parentNode
if(this.arrowpointers.showarrow.sublevel)
this.addpointer(parentli.getElementsByTagName("a")[0],"rightarrowpointer",this.arrowpointers.rightarrow,"before")
this.buildmenu(mainmenuid,parentli,subuls[c],this.ulindex,false,dir)}}}
this.addEvent(window,function(){ddlevelsmenu.getwindowsize();ddlevelsmenu.gettopitemsdimensions()},"resize")},setup:function(mainmenuid,dir){this.domready(function(){ddlevelsmenu.init(mainmenuid,dir)})}}
var g_browserDetect={init:function(){this.browser=this.searchString(this.dataBrowser)||"An unknown browser";this.version=this.searchVersion(navigator.userAgent)
||this.searchVersion(navigator.appVersion)
||"an unknown version";this.OS=this.searchString(this.dataOS)||"an unknown OS";},searchString:function(data){for(var i=0;i<data.length;i++){var dataString=data[i].string;var dataProp=data[i].prop;this.versionSearchString=data[i].versionSearch||data[i].identity;if(dataString){if(dataString.indexOf(data[i].subString)!=-1)
return data[i].identity;}
else if(dataProp)
return data[i].identity;}},searchVersion:function(dataString){var index=dataString.indexOf(this.versionSearchString);if(index==-1)return;return
parseFloat(dataString.substring(index+this.versionSearchString.length+1));},dataBrowser:[{string:navigator.userAgent,subString:"Chrome",identity:"Chrome"},{string:navigator.userAgent,subString:"OmniWeb",versionSearch:"OmniWeb/",identity:"OmniWeb"},{string:navigator.vendor,subString:"Apple",identity:"Safari",versionSearch:"Version"},{prop:window.opera,identity:"Opera"},{string:navigator.vendor,subString:"iCab",identity:"iCab"},{string:navigator.vendor,subString:"KDE",identity:"Konqueror"},{string:navigator.userAgent,subString:"Firefox",identity:"Firefox"},{string:navigator.vendor,subString:"Camino",identity:"Camino"},{string:navigator.userAgent,subString:"Netscape",identity:"Netscape"},{string:navigator.userAgent,subString:"MSIE",identity:"Explorer",versionSearch:"MSIE"},{string:navigator.userAgent,subString:"Gecko",identity:"Mozilla",versionSearch:"rv"},{string:navigator.userAgent,subString:"Mozilla",identity:"Netscape",versionSearch:"Mozilla"}],dataOS:[{string:navigator.platform,subString:"Win",identity:"Windows"},{string:navigator.platform,subString:"Mac",identity:"Mac"},{string:navigator.userAgent,subString:"iPhone",identity:"iPhone/iPod"},{string:navigator.platform,subString:"Linux",identity:"Linux"}]};g_browserDetect.init();var $j=jQuery.noConflict();function setupGlobal()
{$j("a").focus(function(){$j(this).blur();});$j("#searchBoxBtn").focus(function(){$j(this).blur();});}
function setupCommunityButtons()
{$j("#enagoBtn, #enagoTWBtn, #enagoCNBtn, #enagoJPBtn").hover(function()
{$j(this).css("background-position","0px -26px");},function()
{$j(this).css("background-position","0px 0px");});}
function setupToolTipText()
{$j(".textTooltipCenterTop, .textTooltipLeftTop, .textTooltipRightTop").hover(function(e)
{var yoffset=-10;var tip=$j(this).find(".desc").html();$j("body").append("<div id='textPreview'><div id='textPreviewDesc'></div></div>");$j("#textPreviewDesc").html(tip);var textToolTipWidth=$j("#textPreview").width();var xoffset=0;if($j(this).hasClass("textTooltipCenterTop"))
{xoffset=-Math.round(textToolTipWidth/2)}else
if($j(this).hasClass("textTooltipLeftTop"))
{xoffset=-textToolTipWidth;}else
if($j(this).hasClass("textTooltipRightTop"))
{xoffset=0;}
$j("#textPreview").css("width",textToolTipWidth+"px")
.css("left",(e.pageX+xoffset)+"px")
.css("top",(e.pageY+yoffset-$j("#textPreview").height())+"px")
.css("visibility","visible")
.css("opacity","0.0")
.animate({opacity:1.0},400);},function()
{$j("#textPreview").remove();});$j(".textTooltipCenterTop, .textTooltipLeftTop, .textTooltipRightTop").mousemove(function(e)
{var yoffset=-10;var textToolTipWidth=$j("#textPreview").width();var xoffset=0;if($j(this).hasClass("textTooltipCenterTop"))
{xoffset=-Math.round(textToolTipWidth/2)}else
if($j(this).hasClass("textTooltipLeftTop"))
{xoffset=-textToolTipWidth;}else
if($j(this).hasClass("textTooltipRightTop"))
{xoffset=0;}
$j("#textPreview")
.css("top",(e.pageY+yoffset-$j("#textPreview").height())+"px")
.css("left",(e.pageX+xoffset)+"px");});};var $j=jQuery.noConflict();$j(document).ready(function()
{setupGlobal();setupCommunityButtons();setupToolTipText();});var pausecontentindex=new Array()
pausecontentindex[0]='<div class="testimonialquoteText">自分の英語を客観的に見れるので、カルテは嬉しかったです。</div><div class="testimonialname"><img src="img/about/icn-comment.png" width="20" height="18" border="0" >M. O様<BR><div class="designation">京都大学</DIV></DIV><div class="testimonialquoteText">自分の英文を客観的に見てもらうことができ、大変役に立った。</div><div class="testimonialname"><img src="img/about/icn-comment.png" width="20" height="18" border="0" >Y. O様<BR><div class="designation">東京大学</DIV></DIV>'
pausecontentindex[1]='<div class="testimonialquoteText">専門的な視点で校閲して頂き、随分と読みやすくなりました。時間、料金ともに満足の行く者でした。次回も宜しくお願い致します。</div><div class="testimonialname"><img src="img/about/icn-comment.png" width="20" height="18" border="0" >T. K様<BR><div class="designation">北海道大学</DIV></DIV><div class="testimonialquoteText">とても丁寧な対応で、お勧めできます。</div><div class="testimonialname"><img src="img/about/icn-comment.png" width="20" height="18" border="0" >Y. F様<BR><div class="designation">一橋大学大学院</DIV></DIV>'
pausecontentindex[2]='<div class="testimonialquoteText">専門的な内容は踏まえられており、  質は良いと思いました。</div><div class="testimonialname"><img src="img/about/icn-comment.png" width="20" height="18" border="0" >M.T様<BR><div class="designation">名古屋大学</DIV></DIV><div class="testimonialquoteText">教育工学という学際分野だったこともあり，専門的知識にあたる範囲が広かったと思うが，文意の解釈に齟齬などは見受けられなかったと思う。</div><div class="testimonialname"><img src="img/about/icn-comment.png" width="20" height="18" border="0" >K様<BR><div class="designation">東北大学</DIV></DIV>'
pausecontentindex[3]='<div class="testimonialquoteText">専門的な内容は踏まえられており、  質は良いと思いました。</div><div class="testimonialname"><img src="img/about/icn-comment.png" width="20" height="18" border="0" >M.T様<BR><div class="designation">名古屋大学</DIV></DIV><div class="testimonialquoteText">料金と期間、質のバランスが良く、依頼しやすい雰囲気がある。  次の機会があれば、また是非お願いしたい、そう思える。</div><div class="testimonialname"><img src="img/about/icn-comment.png" width="20" height="18" border="0" >Y. Uwatoko様<BR><div class="designation"></DIV></DIV>'
function pausescroller(content,divId,divClass,delay){this.content=content
this.tickerid=divId
this.delay=delay
this.mouseoverBol=0
this.hiddendivpointer=1
document.write('<div id="'+divId+'" class="'+divClass+'" style="position: relative; text-align:left; overflow: hidden;"><div class="innerDiv" style="position: absolute; width: 100%; text-align:left" id="'+divId+'1">'+content[0]+'</div><div class="innerDiv" style="position: absolute; width: 100%; margin-left:0px; text-align:left; visibility: hidden" id="'+divId+'2">'+content[1]+'</div>')
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
function MM_swapImgRestore(){var i,x,a=document.MM_sr;for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++)x.src=x.oSrc;}
function MM_preloadImages(){var d=document;if(d.images){if(!d.MM_p)d.MM_p=new Array();var i,j=d.MM_p.length,a=MM_preloadImages.arguments;for(i=0;i<a.length;i++)
if(a[i].indexOf("#")!=0){d.MM_p[j]=new Image;d.MM_p[j++].src=a[i];}}}
function MM_findObj(n,d){var p,i,x;if(!d)d=document;if((p=n.indexOf("?"))>0&&parent.frames.length){d=parent.frames[n.substring(p+1)].document;n=n.substring(0,p);}
if(!(x=d[n])&&d.all)x=d.all[n];for(i=0;!x&&i<d.forms.length;i++)x=d.forms[i][n];for(i=0;!x&&d.layers&&i<d.layers.length;i++)x=MM_findObj(n,d.layers[i].document);if(!x&&d.getElementById)x=d.getElementById(n);return x;}
function MM_swapImage(){var i,j=0,x,a=MM_swapImage.arguments;document.MM_sr=new Array;for(i=0;i<(a.length-2);i+=3)
if((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x;if(!x.oSrc)x.oSrc=x.src;x.src=a[i+2];}}
var min=8;var max=18;function increaseFontSize(){var p=document.getElementsByTagName('p');for(i=0;i<p.length;i++){if(p[i].style.fontSize){var s=parseInt(p[i].style.fontSize.replace("px",""));}else{var s=12;}
if(s!=max){s+=1;}
p[i].style.fontSize=s+"px"}}
function decreaseFontSize(){var p=document.getElementsByTagName('p');for(i=0;i<p.length;i++){if(p[i].style.fontSize){var s=parseInt(p[i].style.fontSize.replace("px",""));}else{var s=12;}
if(s!=min){s-=1;}
p[i].style.fontSize=s+"px"}}
function resetFontSize(){var p=document.getElementsByTagName('p');for(i=0;i<p.length;i++){if(p[i].style.fontSize){var s=parseInt(p[i].style.fontSize.replace("px",""));}else{var s=12;}
if(s!=min){s=12;}
if(s!=max){s=12;}
p[i].style.fontSize=s+"px"}}