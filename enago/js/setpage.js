function extractPageName(hrefString)
{var arr=hrefString.split('/');return(arr.length<2)?hrefString:arr[arr.length-2].toLowerCase()+arr[arr.length-1].toLowerCase();}
function setActiveMenu(arr,crtPage)
{for(var i=0;i<arr.length;i++)
{if(extractPageName(arr[i].href)==crtPage)
{if(arr[i].parentNode.tagName!="div")
{arr[i].className="itemcurrent";}}}}
function setPage()
{hrefString=document.location.href?document.location.href:document.location;if(document.getElementById("subnav")!=null)
setActiveMenu(document.getElementById("subnav").getElementsByTagName("a"),extractPageName(hrefString));}
function GetQueryStringParams(sParam)
{var sPageURL=window.location.search.substring(1);var sURLVariables=sPageURL.split('&');for(var i=0;i<sURLVariables.length;i++)
{var sParameterName=sURLVariables[i].split('=');if(sParameterName[0]==sParam)
{return sParameterName[1];}}}

