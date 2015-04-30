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
var g_browserDetect={init:function(){this.browser=this.searchString(this.dataBrowser)||"An unknown browser";this.version=this.searchVersion(navigator.userAgent)||this.searchVersion(navigator.appVersion)||"an unknown version";this.OS=this.searchString(this.dataOS)||"an unknown OS";},searchString:function(data){for(var i=0;i<data.length;i++){var dataString=data[i].string;var dataProp=data[i].prop;this.versionSearchString=data[i].versionSearch||data[i].identity;if(dataString){if(dataString.indexOf(data[i].subString)!=-1)
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
$j("#textPreview").css("width",textToolTipWidth+"px").css("left",(e.pageX+xoffset)+"px").css("top",(e.pageY+yoffset-$j("#textPreview").height())+"px").css("visibility","visible").css("opacity","0.0").animate({opacity:1.0},400);},function()
{$j("#textPreview").remove();});$j(".textTooltipCenterTop, .textTooltipLeftTop, .textTooltipRightTop").mousemove(function(e)
{var yoffset=-10;var textToolTipWidth=$j("#textPreview").width();var xoffset=0;if($j(this).hasClass("textTooltipCenterTop"))
{xoffset=-Math.round(textToolTipWidth/2)}else
if($j(this).hasClass("textTooltipLeftTop"))
{xoffset=-textToolTipWidth;}else
if($j(this).hasClass("textTooltipRightTop"))
{xoffset=0;}
$j("#textPreview").css("top",(e.pageY+yoffset-$j("#textPreview").height())+"px").css("left",(e.pageX+xoffset)+"px");});};var $j=jQuery.noConflict();$j(document).ready(function()
{setupGlobal();setupCommunityButtons();setupToolTipText();});var pausecontent=new Array()
pausecontent[0]='<span class="quoteText">一般的な実験方法ではないのですが、大きく読み違えられて変に直されることもなく、満足できる校正内容でした。料金も妥当で、スピードも速く、次の機会にもまたお願いしたくなりました。ありがとうございました。</span><div class="quoteAuthorRight eng">C.Y 様、 国立精神・神経センター、 Biosciences and Medicine</div>'
pausecontent[1]='<span class="quoteText">タイトルおよび冠詞表現の校正が適切で良かった。また、語彙の確認タグについては、適切な代替表現を例示すると良いのではないかと思った。しかし、日本人には通じていた表現であったので、今回指摘を頂き助かった。 </span><div class="quoteAuthorRight eng">Y.K 様、 東邦大学、 Biosciences and Medicine</div>'
pausecontent[2]='<span class="quoteText">大変丁寧なご対応と校正サービスをありがとうございました。もし、今回の投稿で拒絶されたとしたら、それは内容のみの問題でしょう！この次の投稿にも、是非利用したいと思っております。</span><div class="quoteAuthorRight eng">U. S様、パナソニック株式会社、Physical Sciences And Engineering</div>'
pausecontent[3]='<span class="quoteText">全体によく校正していただいたと思います。冠詞など苦手なところは特に。校正内容を見ると、専門的内容についての理解のうえで校正していただいたと感じます。</span><div class="quoteAuthorRight eng">D.S 様、 海洋研究開発機構　地球内部変動研究センター、 Physical Sciences and Engineering</div>'
pausecontent[4]='<span class="quoteText">他社は最低価格が決まっており、依頼しづらい感があったが、見積りフォーム等もあり、貴社に決めました。少額にもかかわらず、快く引き受けてくださり、ありがとうございました。またどうぞ宜しくお願いいたします。</span><div class="quoteAuthorRight eng">H.Y様、団体名非公開、 Biosciences and Medicine</div>'
pausecontent[5]='<span class="quoteText">投稿からアクセプトまで英文の文法および単語に対する指摘はありませんでした。  対応も迅速で満足しています。  校正後の英文表現の見直しについては丁寧で素早い対応で助かりました。</span><div class="quoteAuthorRight eng">T. S様、団体名非公開、Biosciences and Medicine, 匿名希望</div>'
pausecontent[6]='<span class="quoteText">米国人共同研究者による校正を除くと、今までの英文校正の中で、もっとも丁寧で内容のある校正をしてもらえたと感じています。その上、値段もreasonableなので、これからも利用していきたい。</span><div class="quoteAuthorRight eng">N. S様、神戸大学、 Biosciences And Medicine</div>'
pausecontent[7]='<span class="quoteText">校正者は専門誌のreviewerのようでもあり、校正者という専門家とのやり取りの中で考察や構成が美しくなりました。的確な校正を経た論文は即アクセプトとなりました。ありがとうございました。</span><div class="quoteAuthorRight eng">K. S様、北海道大学、Biosciences And Medicine</div>'
pausecontent[8]='<span class="quoteText">かなり特殊な内容の論文であったにもかかわらず、専門的な内容をよく理解して、査読者の気持ちも配慮した適切な校正がされていたと思います。その気配りには感心いたしました。</span><div class="quoteAuthorRight eng">T.T 様、 長崎大学、 Physical Sciences and Engineering</div>'
pausecontent[9]='<span class="quoteText">他社迅速に対応していただいてたいへん助かりました。ただ、意味が不明確との指摘で変更した点を、再校正という形で依頼するのか、質問という形にするのかがはっきりせず迷いました。</span><div class="quoteAuthorRight eng">M.K 様、 日立総合病院　小児科、 Biosciences and Medicine</div>'
pausecontent[10]='<span class="quoteText">的確に校正していただいたと思います。図表のキャプションについても、単なる校正ではなく、より良いスタイルになるための提案もいただけて、ありがたく思いました。 </span><div class="quoteAuthorRight eng">M.I 様、 昭和女子大学、 Physical Sciences and Engineering</div>'
pausecontent[11]='<span class="quoteText">自分の英文執筆能力を客観的に評価して頂けるので、大変参考になりました。英文校正サービス会社を選ぶにあたって、原稿評価カルテのサービスは重要なポイントになりました。</span><div class="quoteAuthorRight eng">M. Y様、東京農工大学、Biosciences and Medicine</div>'
pausecontent[12]='<span class="quoteText">校正内容に特に違和感はなく、適切に直して頂けたように思います。価格もリーズナブルで校正品質も満足のいくものでした。良かったと思います。 </span><div class="quoteAuthorRight eng">S.M 様、 独立行政法人　農業環境技術研究所、 Biosciences and Medicine</div>'
pausecontent[13]='<span class="quoteText">まだ1回しか利用していませんが、次回もお願いしようと考えております。対応も非常によく納期もきちんと守ってくださり印象が良かったです。</span><div class="quoteAuthorRight eng">H. E様、参天製薬株式会社、Physical Sciences And Engineering</div>'
pausecontent[14]='<span class="quoteText">教育工学という学際分野だったこともあり，専門的知識にあたる範囲が広かったと思うが，文意の解釈に齟齬などは見受けられなかったと思う。</span><div class="quoteAuthorRight eng">K様、東北大学、The Arts, Humanities, and Social Sciences</div>'
pausecontent[15]='<span class="quoteText">原稿評価カルテはとても参考になりました。次回からの論文投稿の際にも、エナゴを利用させていただいて英文作成能力を向上させる目安にしたいと思います。</span><div class="quoteAuthorRight eng">J.M様、森永乳業株式会社、Biosciences and Medicine</div>'
pausecontent[16]='<span class="quoteText">校正については大変満足しました。  省略語の使い方へのアドバイスや、前出の単語を避けるような細かい配慮が、すばらしく安心して今後も任せられます。</span><div class="quoteAuthorRight eng">K. K様、熊本学園大学、Biosciences And Medicine</div>'
pausecontent[17]='<span class="quoteText">医学論文に精通した校正者によって校正が行われていると思います。丁寧な仕事であり、大変満足しております。今後も必要に応じて利用させて頂きます。</span><div class="quoteAuthorRight eng">M.S 様、 北里大学、 Biosciences and Medicine</div>'
pausecontent[18]='<span class="quoteText">細かいミスなど予想していた以上に丁寧に校正して頂き，感謝しています。</span><div class="quoteAuthorRight eng">T. N様、（独）海洋研究開発機構、Physical Sciences and Engineering, 地球科学(Earth Science)</div>'
pausecontent[19]='<span class="quoteText">校正時間も早く、料金も手頃だと感じました。問い合わせに対する対応も早く、また機会があれば利用してみたいと思います。</span><div class="quoteAuthorRight eng">M. T様、名古屋市立大学、 Physical Sciences And Engineering</div>'
pausecontent[20]='<span class="quoteText">とても丁寧な校正をしてくれます。特に、非ネイティブの人にとって苦手な冠詞の付け方は大いに参考になりました。 </span><div class="quoteAuthorRight eng">大堀 隆文 様、 北海道工業大学、 Physical Sciences and Engineering</div>'
pausecontent[21]='<span class="quoteText">大変丁寧に校正いただいたと感謝しております。また、納期よりも早く納品いただき助かりました。 </span><div class="quoteAuthorRight eng">M.F 様、 独立行政法人 国立高等専門学校機構、 Physical Sciences and Engineering</div>'
pausecontent[22]='<span class="quoteText">英文の文法的なチェックのみならず、文書の内容も理解した上で構成等をアドバイスしていただいたので、大変理解しやすく、また役立った。</span><div class="quoteAuthorRight eng">N. O様、参天製薬株式会社、Biosciences and Medicine</div>'
pausecontent[23]='<span class="quoteText">初めての海外への投稿でしたが，何も修正なく，そのまま採用されました。どうもありがとうございました。</span><div class="quoteAuthorRight eng">K. S様、東京大学、The Arts, Humanities, And Social Sciences</div>'
pausecontent[24]='<span class="quoteText">投稿先のジャーナルの投稿規程を読んでいただいた上でのコメントが入っていた点が、従来利用したところと異なり、有益だった。</span><div class="quoteAuthorRight eng">匿名希望 様、団体名非公開、 Biosciences and Medicine </div>'
pausecontent[25]='<span class="quoteText">初めて利用しました。校正の早さ、質、料金とも納得できる内容です。依頼方法をもう少し改善して頂けるとありがたいと思います。</span><div class="quoteAuthorRight eng">T. K 様、 琉球大学、 Biosciences and Medicine</div>'
pausecontent[26]='<span class="quoteText">専門的な視点で校閲して頂き、随分と読みやすくなりました。時間、料金ともに満足の行く者でした。次回も宜しくお願い致します。</span><div class="quoteAuthorRight eng">T. K様、北海道大学、Biosciences And Medicine</div>'
pausecontent[27]='<span class="quoteText">校正の後に、前のBossに見せると、可成り直されたのですが、今回はさほどでは有りませんでした。質が高いことが伺えます。</span><div class="quoteAuthorRight eng">K. N様、日本工業大学、Biosciences And Medicine</div>'
pausecontent[28]='<span class="quoteText">小さなコメントが大変為になりました．また，フォントの訂正もしていただき細かく見て頂いたと感心しました。</span><div class="quoteAuthorRight eng">Y. H様、同志社大学、Physical Sciences and Engineering</div>'
pausecontent[29]='<span class="quoteText">料金と期間、質のバランスが良く、依頼しやすい雰囲気がある。  次の機会があれば、また是非お願いしたい、そう思える。</span><div class="quoteAuthorRight eng">Y. U様、団体名非公開、Biosciences and Medicine</div>'
pausecontent[30]='<span class="quoteText">あまり時間がないところで素早い校正、そして値段も比較的安くてとても満足できました。また利用したいと思っています。</span><div class="quoteAuthorRight eng">T.H様、千葉科学大学、Biosciences and Medicine</div>'
pausecontent[31]='<span class="quoteText">手軽にオンラインで注文を出せる点や迅速にやってくださる点で、大変助かりました。</span><div class="quoteAuthorRight eng">Y. S様、立教大学、The Arts, Humanities, And Social Sciences</div>'
pausecontent[32]='<span class="quoteText">人文・社会科学の知識があると思われる校閲者が、適切な助言をしてくれました。</span><div class="quoteAuthorRight eng">H. F様、中央大学、The Arts, Humanities, and Social Sciences</div>'
pausecontent[33]='<span class="quoteText">的確な評価で、科学論文のみならず英文作成に関しても助言があり、今後にも大変役に立つと思った。</span><div class="quoteAuthorRight eng">N. O様、参天製薬株式会社、Biosciences and Medicine</div>'
pausecontent[34]='<span class="quoteText">これまでこのようなサービスを受けたことがなかったので、大変参考になりました。</span><div class="quoteAuthorRight eng">M. I様、独立行政法人 農業生物資源研究所、Biosciences and Medicine</div>'
pausecontent[35]='<span class="quoteText">迅速で的確な校正をしていただけました。次回も利用したいと思います。</span><div class="quoteAuthorRight eng">T. T様、秋田県農林水産技術センター農業試験場、Biosciences And Medicine</div>'
pausecontent[36]='<span class="quoteText">丁寧さがちょうど良かった。（細かすぎず、的を得ていた。）</span><div class="quoteAuthorRight eng">T. Y様、東京芸術大学、The Arts, Humanities, and Social Sciences</div>'
pausecontent[37]='<span class="quoteText">英文構成の品質については他に比べて大変よいと考える。  今後も質の維持を希望している。</span><div class="quoteAuthorRight eng">N. O様、参天製薬株式会社、Biosciences and Medicine</div>'
pausecontent[38]='<span class="quoteText">自分の英文を客観的に見てもらうことができ、大変役に立った。</span><div class="quoteAuthorRight eng">Y. O様、東京大学、The Arts, Humanities, and Social Sciences</div>'
pausecontent[39]='<span class="quoteText">量の多少によらず気軽に利用できるのがいいところです。</span><div class="quoteAuthorRight eng">A. T様、兵庫医療大学、The Arts, Humanities, And Social Sciences</div>'
pausecontent[40]='<span class="quoteText">内容も理解していただいた上での校正やコメントがいただけたと思います。</span><div class="quoteAuthorRight eng">M. K様、千葉工業大学、Physical Sciences and Engineering</div>'
pausecontent[41]='<span class="quoteText">類似業者よりも、高品質で価格が安いと感じた。結果には十分満足できた。</span><div class="quoteAuthorRight eng">Y. Y様、筑波大学、Physical Sciences And Engineering</div>'
pausecontent[42]='<span class="quoteText">すぐに対応していただけたので、大変助かりました。</span><div class="quoteAuthorRight eng">匿名希望様、団体名非公開、The Arts, Humanities, and Social Sciences</div>'
pausecontent[43]='<span class="quoteText">とても丁寧な対応で、お勧めできます。</span><div class="quoteAuthorRight eng">Y. F様、一橋大学大学院、The Arts, Humanities, And Social Sciences</div>'
pausecontent[44]='<span class="quoteText">スピーディーで、かつ、専門的知識にも十二分に対応でき、大変助かりました。</span><div class="quoteAuthorRight eng">K. S様、日本医科大学、Biosciences And Medicine</div>'
pausecontent[45]='<span class="quoteText">専門的な内容は踏まえられており、  質は良いと思いました。</span><div class="quoteAuthorRight eng">M.T様、名古屋大学、Physical Sciences and Engineering</div>'
pausecontent[46]='<span class="quoteText">自分の現状の英語力の通知表のようで興味深い結果でした。</span><div class="quoteAuthorRight eng">K. I様、団体名非公開、Physical Sciences and Engineering</div>'
pausecontent[47]='<span class="quoteText">自分の英語を客観的に見れるので、カルテは嬉しかったです。</span><div class="quoteAuthorRight eng">M. O様、京都大学、Physical Sciences and Engineering</div>'
pausecontent[48]='<span class="quoteText">技術的内容はよく理解されている印象を受けました。</span><div class="quoteAuthorRight eng">N. M様、株式会社 東芝、Physical Sciences and Engineering</div>'
pausecontent[49]='<span class="quoteText">ほぼ我々の意図する研究内容を把握されていたように感じております。</span><div class="quoteAuthorRight eng">O. M様、長崎国際大学、Biosciences and Medicine</div>'
pausecontent[50]='<span class="quoteText">納期１日で急いでいたので助かりました。</span><div class="quoteAuthorRight eng">匿名希望様、有明工業高等専門学校、Physical Sciences and Engineering</div>'
pausecontent[51]='<span class="quoteText">参考になり、よかったです。今後も続けてほしいです。</span><div class="quoteAuthorRight eng">M. M様、（独）産業技術総合研究所、Biosciences and Medicine</div>'
pausecontent[52]='<span class="quoteText">丁寧なご指導で，とても勉強になりました。</span><div class="quoteAuthorRight eng">S. M様、東京学、芸大学、Physical Sciences and Engineering</div>'
pausecontent[53]='<span class="quoteText">適切な修正を有難うございました。</span><div class="quoteAuthorRight eng">T. I様、千葉県立保健医療大学、Physical Sciences And Engineering</div>'
pausecontent[54]='<span class="quoteText">適切なご指摘をいただき大変参考になりました。</span><div class="quoteAuthorRight eng">M. N様、東京慈恵会医科大学、Biosciences And Medicine</div>'
pausecontent[55]='<span class="quoteText">参考になりました。次の論文作成時の励みになります。</span><div class="quoteAuthorRight eng">G. U様、福岡大学、Biosciences and Medicine</div>'
pausecontent[56]='<span class="quoteText">原稿評価カルテが参考になった。</span><div class="quoteAuthorRight eng">D. K様、明治大学、Physical Sciences and Engineering</div>'
pausecontent[57]='<span class="quoteText">専門的な内容を十分に踏まえておられました。</span><div class="quoteAuthorRight eng">T. S様、森永乳業、Biosciences and Medicine</div>'
var pausecontent1=new Array()
pausecontent1[0]='<span class="quoteText">一般的な実験方法ではないのですが、大きく読み違えられて変に直されることもなく、満足できる校正内容でした。料金も妥当で、スピードも速く、次の機会にもまたお願いしたくなりました。ありがとうございました。</span><div class="quoteAuthorRight eng">C.Y 様、 国立精神・神経センター、 Biosciences and Medicine</div>'
pausecontent1[1]='<span class="quoteText">タイトルおよび冠詞表現の校正が適切で良かった。また、語彙の確認タグについては、適切な代替表現を例示すると良いのではないかと思った。しかし、日本人には通じていた表現であったので、今回指摘を頂き助かった。 </span><div class="quoteAuthorRight eng">Y.K 様、 東邦大学、 Biosciences and Medicine</div>'
pausecontent1[2]='<span class="quoteText">大変丁寧なご対応と校正サービスをありがとうございました。もし、今回の投稿で拒絶されたとしたら、それは内容のみの問題でしょう！この次の投稿にも、是非利用したいと思っております。</span><div class="quoteAuthorRight eng">U. S様、パナソニック株式会社、Physical Sciences And Engineering</div>'
pausecontent1[3]='<span class="quoteText">全体によく校正していただいたと思います。冠詞など苦手なところは特に。校正内容を見ると、専門的内容についての理解のうえで校正していただいたと感じます。</span><div class="quoteAuthorRight eng">D.S 様、 海洋研究開発機構　地球内部変動研究センター、Physical Sciences and Engineering</div>'
pausecontent1[4]='<span class="quoteText">米国人共同研究者による校正を除くと、今までの英文校正の中で、もっとも丁寧で内容のある校正をしてもらえたと感じています。その上、値段もreasonableなので、これからも利用していきたい。</span><div class="quoteAuthorRight eng">N. S様、神戸大学、 Biosciences And Medicine</div>'
pausecontent1[5]='<span class="quoteText">的確に校正していただいたと思います。図表のキャプションについても、単なる校正ではなく、より良いスタイルになるための提案もいただけて、ありがたく思いました。 </span><div class="quoteAuthorRight eng">M.I 様、 昭和女子大学、 Physical Sciences and Engineering</div>'
pausecontent1[6]='<span class="quoteText">投稿からアクセプトまで英文の文法および単語に対する指摘はありませんでした。  対応も迅速で満足しています。  校正後の英文表現の見直しについては丁寧で素早い対応で助かりました。</span><div class="quoteAuthorRight eng">T. S様、団体名非公開、Biosciences and Medicine</div>'
pausecontent1[7]='<span class="quoteText">細かいミスなど予想していた以上に丁寧に校正して頂き，感謝しています。</span><div class="quoteAuthorRight eng">T. N様、（独）海洋研究開発機構、Physical Sciences and Engineering, 地球科学、(Earth Science)</div>'
pausecontent1[8]='<span class="quoteText">とても丁寧な校正をしてくれます。特に、非ネイティブの人にとって苦手な冠詞の付け方は大いに参考になりました。 </span><div class="quoteAuthorRight eng">大堀 隆文 様、 北海道工業大学、 Physical Sciences and Engineering</div>'
pausecontent1[9]='<span class="quoteText">英文の文法的なチェックのみならず、文書の内容も理解した上で構成等をアドバイスしていただいたので、大変理解しやすく、また役立った。</span><div class="quoteAuthorRight eng">N. O様、参天製薬株式会社、Biosciences and Medicine</div>'
pausecontent1[10]='<span class="quoteText">小さなコメントが大変為になりました。また，フォントの訂正もしていただき細かく見て頂いたと感心しました。</span><div class="quoteAuthorRight eng">Y. H様、同志社大学、Physical Sciences and Engineering</div>'
pausecontent1[11]='<span class="quoteText">料金と期間、質のバランスが良く、依頼しやすい雰囲気がある。  次の機会があれば、また是非お願いしたい、そう思える。</span><div class="quoteAuthorRight eng">Y. U様、団体名非公開、Biosciences and Medicine</div>'
pausecontent1[12]='<span class="quoteText">英文校正の品質については他に比べて大変よいと考える。  今後も質の維持を希望している。</span><div class="quoteAuthorRight eng">N. O様、参天製薬株式会社、Biosciences and Medicine</div>'
pausecontent1[13]='<span class="quoteText">内容も理解していただいた上での校正やコメントがいただけたと思います。</span><div class="quoteAuthorRight eng">M. K様、千葉工業大学、Physical Sciences and Engineering</div>'
var pausecontent2=new Array()
pausecontent2[0]='<span class="quoteText">他社は最低価格が決まっており、依頼しづらい感があったが、見積りフォーム等もあり、貴社に決めました。少額にもかかわらず、快く引き受けてくださり、ありがとうございました。またどうぞ宜しくお願いいたします。</span><div class="quoteAuthorRight eng">H.Y様、団体名非公開、Biosciences and Medicine</div>'
pausecontent2[1]='<span class="quoteText">校正者は専門誌のreviewerのようでもあり、校正者という専門家とのやり取りの中で考察や構成が美しくなりました。的確な校正を経た論文は即アクセプトとなりました。ありがとうございました。</span><div class="quoteAuthorRight eng">K. S様、北海道大学、Biosciences And Medicine</div>'
pausecontent2[2]='<span class="quoteText">投稿からアクセプトまで英文の文法および単語に対する指摘はありませんでした。  対応も迅速で満足しています。  校正後の英文表現の見直しについては丁寧で素早い対応で助かりました。</span><div class="quoteAuthorRight eng">T. S様、団体名非公開、Biosciences and Medicine</div>'
pausecontent2[3]='<span class="quoteText">校正については大変満足しました。  省略語の使い方へのアドバイスや、前出の単語を避けるような  細かい配慮が、すばらしく安心して今後も任せられます。</span><div class="quoteAuthorRight eng">K. K様、熊本学園大学、Biosciences And Medicine</div>'
pausecontent2[4]='<span class="quoteText">細かいミスなど予想していた以上に丁寧に校正して頂き，感謝しています．</span><div class="quoteAuthorRight eng">T. N様、（独）海洋研究開発機構、Physical Sciences and Engineering, 地球科学、(Earth Science)</div>'
pausecontent2[5]='<span class="quoteText">とても丁寧な校正をしてくれます。特に、非ネイティブの人にとって苦手な冠詞の付け方は大いに参考になりました。 </span><div class="quoteAuthorRight eng">大堀 隆文 様、 北海道工業大学、 Physical Sciences and Engineering</div>'
pausecontent2[6]='<span class="quoteText">校正時間も早く、料金も手頃だと感じました。問い合わせに対する対応も早く、また機会があれば利用してみたいと思います。</span><div class="quoteAuthorRight eng">M. T様、名古屋市立大学、Physical Sciences And Engineering</div>'
pausecontent2[7]='<span class="quoteText">英文の文法的なチェックのみならず、文書の内容も理解した上で構成等をアドバイスしていただいたので、大変理解しやすく、また役立った。</span><div class="quoteAuthorRight eng">N. O様、参天製薬株式会社、Biosciences and Medicine</div>'
pausecontent2[8]='<span class="quoteText">投稿先のジャーナルの投稿規程を読んでいただいた上でのコメントが入っていた点が、従来利用したところと異なり、有益だった。</span><div class="quoteAuthorRight eng">匿名希望 様、団体名非公開、 Biosciences and Medicine </div>'
pausecontent2[9]='<span class="quoteText">専門的な視点で校閲して頂き、随分と読みやすくなりました。時間、料金ともに満足の行く者でした。次回も宜しくお願い致します。</span><div class="quoteAuthorRight eng">T. K様、北海道大学、Biosciences And Medicine</div>'
pausecontent2[10]='<span class="quoteText">小さなコメントが大変為になりました．また，フォントの訂正もしていただき細かく見て頂いたと感心しました．</span><div class="quoteAuthorRight eng">Y. H様、同志社大学、Physical Sciences and Engineering</div>'
pausecontent2[11]='<span class="quoteText">料金と期間、質のバランスが良く、依頼しやすい雰囲気がある。  次の機会があれば、また是非お願いしたい、そう思える。</span><div class="quoteAuthorRight eng">Y. U様、団体名非公開、Biosciences and Medicine</div>'
pausecontent2[12]='<span class="quoteText">手軽にオンラインで注文を出せる点や迅速にやってくださる点で、大変助かりました。</span><div class="quoteAuthorRight eng">Y. S様、立教大学、The Arts, Humanities, And Social Sciences</div>'
pausecontent2[13]='<span class="quoteText">英文構成の品質については他に比べて大変よいと考える。  今後も質の維持を希望している。</span><div class="quoteAuthorRight eng">N. O様、参天製薬株式会社、Biosciences and Medicine</div>'
pausecontent2[14]='<span class="quoteText">量の多少によらず気軽に利用できるのがいいところです。</span><div class="quoteAuthorRight eng">A. T様、兵庫医療大学、The Arts, Humanities, And Social Sciences</div>'
pausecontent2[15]='<span class="quoteText">内容も理解していただいた上での校正やコメントがいただけたと思います。</span><div class="quoteAuthorRight eng">M. K様、千葉工業大学、Physical Sciences and Engineering</div>'
pausecontent2[16]='<span class="quoteText">類似業者よりも、高品質で価格が安いと感じた。結果には十分満足できた。</span><div class="quoteAuthorRight eng">Y. Y様、筑波大学、Physical Sciences And Engineering</div>'
var pausecontent3=new Array()
pausecontent3[0]='<span class="quoteText">一般的な実験方法ではないのですが、大きく読み違えられて変に直されることもなく、満足できる校正内容でした。料金も妥当で、スピードも速く、次の機会にもまたお願いしたくなりました。ありがとうございました。</span><div class="quoteAuthorRight eng">C.Y 様、 国立精神・神経センター、 Biosciences and Medicine</div>'
pausecontent3[1]='<span class="quoteText">他社は最低価格が決まっており、依頼しづらい感があったが、見積りフォーム等もあり、貴社に決めました。少額にもかかわらず、快く引き受けてくださり、ありがとうございました。またどうぞ宜しくお願いいたします。</span><div class="quoteAuthorRight eng">H.Y様、団体名非公開、 Biosciences and Medicine</div>'
pausecontent3[2]='<span class="quoteText">校正内容に特に違和感はなく、適切に直して頂けたように思います。価格もリーズナブルで校正品質も満足のいくものでした。良かったと思います。 </span><div class="quoteAuthorRight eng">S.M 様、独立行政法人　農業環境技術研究所、Biosciences and Medicine</div>'
pausecontent3[3]='<span class="quoteText">まだ1回しか利用していませんが、次回もお願いしようと考えております。対応も非常によく納期もきちんと守ってくださり印象が良かったです。</span><div class="quoteAuthorRight eng">H. E様、参天製薬株式会社、Physical Sciences And Engineering</div>'
pausecontent3[4]='<span class="quoteText">大変丁寧に校正いただいたと感謝しております。また、納期よりも早く納品いただき助かりました。 </span><div class="quoteAuthorRight eng">M.F 様、独立行政法人 国立高等専門学校機構、Physical Sciences and Engineering</div>'
pausecontent3[5]='<span class="quoteText">専門的な視点で校閲して頂き、随分と読みやすくなりました。時間、料金ともに満足の行く者でした。次回も宜しくお願い致します。</span><div class="quoteAuthorRight eng">T. K様、北海道大学、Biosciences And Medicine</div>'
pausecontent3[6]='<span class="quoteText">小さなコメントが大変為になりました．また，フォントの訂正もしていただき細かく見て頂いたと感心しました．</span><div class="quoteAuthorRight eng">Y. H様、同志社大学、Physical Sciences and Engineering</div>'
pausecontent3[7]='<span class="quoteText">料金と期間、質のバランスが良く、依頼しやすい雰囲気がある。  次の機会があれば、また是非お願いしたい、そう思える。</span><div class="quoteAuthorRight eng">Y. U様、団体名非公開、Biosciences and Medicine</div>'
pausecontent3[8]='<span class="quoteText">あまり時間がないところで素早い校正、そして値段も比較的安くてとても満足できました。また利用したいと思っています。</span><div class="quoteAuthorRight eng">T.H様、千葉科学大学、Biosciences and Medicine</div>'
pausecontent3[9]='<span class="quoteText">納期１日で急いでいたので助かりました。</span><div class="quoteAuthorRight eng">匿名希望様、有明工業高等専門学校、Physical Sciences and Engineering</div>'
var pausecontent4=new Array()
pausecontent4[0]='<span class="quoteText">全体によく校正していただいたと思います。冠詞など苦手なところは特に。校正内容を見ると、専門的内容についての理解のうえで校正していただいたと感じます。</span><div class="quoteAuthorRight eng">D.S 様、海洋研究開発機構　地球内部変動研究センター、Physical Sciences and Engineering</div>'
pausecontent4[1]='<span class="quoteText">校正者は専門誌のreviewerのようでもあり、校正者という専門家とのやり取りの中で考察や構成が美しくなりました。的確な校正を経た論文は即アクセプトとなりました。ありがとうございました。</span><div class="quoteAuthorRight eng">K. S様、北海道大学、Biosciences And Medicine</div>'
pausecontent4[2]='<span class="quoteText">かなり特殊な内容の論文であったにもかかわらず、専門的な内容をよく理解して、査読者の気持ちも配慮した適切な校正がされていたと思います。その気配りには感心いたしました。</span><div class="quoteAuthorRight eng">T.T 様、 長崎大学、 Physical Sciences and Engineering</div>'
pausecontent4[3]='<span class="quoteText">教育工学という学際分野だったこともあり，専門的知識にあたる範囲が広かったと思うが，文意の解釈に齟齬などは見受けられなかったと思う．</span><div class="quoteAuthorRight eng">K様、東北大学、The Arts, Humanities, and Social Sciences</div>'
pausecontent4[4]='<span class="quoteText">医学論文に精通した校正者によって校正が行われていると思います。丁寧な仕事であり、大変満足しております。今後も必要に応じて利用させて頂きます。</span><div class="quoteAuthorRight eng">M.S 様、 北里大学、 Biosciences and Medicine</div>'
pausecontent4[5]='<span class="quoteText">スピーディーで、かつ、専門的知識にも十二分に対応でき、大変助かりました。</span><div class="quoteAuthorRight eng">K. S様、日本医科大学、Biosciences And Medicine</div>'
pausecontent4[6]='<span class="quoteText">専門的な内容は踏まえられており、  質は良いと思いました。</span><div class="quoteAuthorRight eng">M.T様、名古屋大学、Physical Sciences and Engineering</div>'
pausecontent4[7]='<span class="quoteText">技術的内容はよく理解されている印象を受けました。</span><div class="quoteAuthorRight eng">N. M様、株式会社 東芝、Physical Sciences and Engineering</div>'
pausecontent4[8]='<span class="quoteText">ほぼ我々の意図する研究内容を把握されていたように感じております。</span><div class="quoteAuthorRight eng">O. M様、長崎国際大学、Biosciences and Medicine</div>'
pausecontent4[9]='<span class="quoteText">専門的な内容を十分に踏まえておられました。</span><div class="quoteAuthorRight eng">T. S様、森永乳業、Biosciences and Medicine</div>'
var pausecontent5=new Array()
pausecontent5[0]='<span class="quoteText">校正の後に、前のBossに見せると、可成り直されたのですが、今回はさほどでは有りませんでした。質が高いことが伺えます。</span><div class="quoteAuthorRight eng">K. N様、日本工業大学、Biosciences And Medicine</div>'
pausecontent5[1]='<span class="quoteText">適切な修正を有難うございました。</span><div class="quoteAuthorRight eng">T. I様、千葉県立保健医療大学、Physical Sciences And Engineering</div>'
var pausecontent6=new Array()
pausecontent6[0]='<span class="quoteText">細かいミスなど予想していた以上に丁寧に校正して頂き，感謝しています．</span><div class="quoteAuthorRight eng">T. N様、（独）海洋研究開発機構、Physical Sciences and Engineering, 地球科学(Earth Science)</div>'
pausecontent6[1]='<span class="quoteText">医学論文に精通した校正者によって校正が行われていると思います。丁寧な仕事であり、大変満足しております。今後も必要に応じて利用させて頂きます。</span><div class="quoteAuthorRight eng">M.S 様、北里大学、Biosciences and Medicine</div>'
pausecontent6[2]='<span class="quoteText">丁寧さがちょうど良かった。（細かすぎず、的を得ていた。）</span><div class="quoteAuthorRight eng">T. Y様、東京芸術大学、The Arts, Humanities, and Social Sciences</div>'
pausecontent6[3]='<span class="quoteText">ほぼ我々の意図する研究内容を把握されていたように感じております。</span><div class="quoteAuthorRight eng">O. M様、長崎国際大学、Biosciences and Medicine</div>'
pausecontent6[4]='<span class="quoteText">丁寧なご指導で，とても勉強になりました。</span><div class="quoteAuthorRight eng">S. M様、東京学芸大学、Physical Sciences and Engineering</div>'
pausecontent6[5]='<span class="quoteText">専門的な内容を十分に踏まえておられました。</span><div class="quoteAuthorRight eng">T. S様、森永乳業、Biosciences and Medicine</div>'
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
function addLoadEvent(func){var oldonload=window.onload;if(typeof window.onload!='function'){window.onload=func;}
else{window.onload=function(){if(oldonload){oldonload();}
func();}}}
function getElementsByClass(searchClass,node,tag){var classElements=new Array();if(node==null)
node=document;if(tag==null)
tag='*';var els=node.getElementsByTagName(tag);var elsLen=els.length;var pattern=new RegExp("(^|\\s)"+searchClass+"(\\s|$)");for(i=0,j=0;i<elsLen;i++){if(pattern.test(els[i].className)){classElements[j]=els[i];j++;}}
return classElements;}
function insertAfter(newElement,targetElement){var parent=targetElement.parentNode;if(parent.lastChild==targetElement){parent.appendChild(newElement);}
else{parent.insertBefore(newElement,targetElement.nextSibling);}}
function buttonEndings(){if(!document.getElementsByTagName){return false}
var buttons=getElementsByClass("bt1");for(i=0;i<buttons.length;i++){var div=document.createElement("div");div.className="bt1Ending";insertAfter(div,buttons[i]);}}
addLoadEvent(buttonEndings);

function closebtn(){document.getElementById('ribbons').style.visibility="hidden";document.getElementById('ribbons').style.display="none";document.getElementById('flagsection').className="";document.getElementById('headerwrap').className+="bgexpand";}