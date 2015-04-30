var ids=new Array();

function QAinit(){
if(document.getElementById){
var tids=document.getElementsByTagName('div');
for(i=0;i<tids.length;i++)if(tids[i].className=="qa_question")ids[ids.length]=tids[i];
for(i=0;i<ids.length;i++)ids[i].onmouseup=setstate;
}}

function setstate(){
for(i=0;i<ids.length;i++){
if(ids[i]==this){
var d=this.parentNode.getElementsByTagName('div')[1];
if(d.style.display=="block"){
	d.style.display="none";
	ids[i].style.color="#0000ff";
	ids[i].style.fontWeight="normal";
	ids[i].style.width="37px";
	ids[i].style.backgroundImage="url(img/new-services/a-close-icon.png)";
	ids[i].style.textIndent="0px";
}
else {
	d.style.display="block";
	ids[i].style.color="#006600";
	ids[i].style.fontWeight="bold";
	ids[i].style.backgroundImage="url(img/new-services/a-open-icon.png)";
	ids[i].style.textIndent="20px";
}
}}}

window.onload=QAinit;
