ot_d=document;ot_un="undefined";
if(typeof otgoal!==ot_un){ot_goal=escape(otgoal);if(ot_goal.indexOf('%u')!=-1)ot_goal=escape(ot_goal);ot_goal='&otgoal='+ot_goal;}else ot_goal='';
if(typeof otclv!==ot_un)ot_clv='&otclv='+otclv;else ot_clv='';
ot_is='http'+(ot_d.URL.indexOf('https:')==0?'s://':'://');
ot_b=ot_is+'gm02.opentracker.net';
if(typeof(top.document)=="object") ot_r=top.document;else ot_r=ot_d;
ot_c=ot_r;
ot_cd=(new Date("December 31, 2023")).toGMTString();ot_cld=new Date();ot_fv=false;ot_ac=false;
if (typeof ot_ti===ot_un) {
  ot_ti=ot_d.title;
}
ot_ti=escape(ot_ti);if (ot_ti.indexOf('%u')!=-1) ot_ti=escape(ot_ti);
ot_mj=parseInt(navigator.appVersion);if(ot_mj>=5){if(ot_d.referrer.indexOf(ot_r.location.hostname)==-1)ot_r=ot_d;}else{ot_r=document;}
if(ot_c.cookie.indexOf('machine-id')!=-1)ot_ac=true;else{
 if(ot_c.cookie.indexOf('machine-id')==-1) f_sc("machine-id","61.16.196.106:1418280621413",ot_cd,"/");
 if(ot_c.cookie.indexOf('machine-id')!=-1)ot_ac=true;
}
ot_rc=f_rc("machine-id");ot_lc=escape((typeof ot_url===ot_un)?ot_d.location:ot_url);ot_t0=1418280621413;

ot_di=_j(0)-ot_t0;
ot_rnd=Math.round(Math.random() * 2147483647);

OTMap = function(){
 this.dct = {};
 this.k = new Array();
}
OTMap.prototype.put = function put(key, value){
 this.dct[key] = value;
 var i = this.k.indexOf(key);
 if (i == -1) this.k.push(key);
 return this;
}
OTMap.prototype.get = function get(key){
 return this.dct[key];
}
OTMap.prototype.remove = function remove(key) {
  var i = this.k.indexOf(key);
  if (i != -1) {
   this.k.splice(i, 1);
   delete this.dct[key];
  }
  return this;
};
OTMap.prototype.clear = function clear(){
 this.dct = {};
 this.k = new Array();
}
OTMap.prototype.size = function size(){
 return this.k.length;
}

function _ot_uid(){
 if (_otui = f_rc("_otui")) {
  var _otua = _otui.split(".");
  return _otua[1] + "." + _otua[0];
 }
 return "";
}

function _ot_sid(){
 if (_otui = f_rc("_otui")) {
  var _otua = _otui.split(".");
  return _otua[3] + "." + _otua[0];
 }
 return "";
}

function _ot_u(m){
 if(m.size()>0){
  var u="";
  for (i=0; i<m.size();i++) {
    u+=encodeURIComponent(m.k[i])+"="+encodeURIComponent(m.get(m.k[i]));
    u+=(i<m.size()-1)?"&":"";
  }
  return u;
 }
 return "";
}

function _gd(m) {
  var d1 = new Date();
  d1.setMinutes(d1.getMinutes() + m);
  return d1;
}

function _gtld() {
  var i = 0,
    tld = document.domain,
    p = tld.split('.'),
    s = '_gtld',
    l = p.length - 1;
  if (p[l] == "com" || p[l] == "net" || p[l] == "org" || p[l] == "nl") return p[l-1] + "." + p[l];
  if (p[l] == "uk") return p[l-2] + "." +  p[l-1] + "." + p[l];
  while (i < l && (i == 0 || document.cookie.indexOf(s + '=' + s) == -1)) {
    tld = p.slice(-1 - (++i)).join('.');
    document.cookie = s + "=" + s + ";domain=" + tld + ";";
  }
  document.cookie = s + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT;domain=" + tld + ";";
  return tld;
}


var OTLogService = {};OTLogService.sendEvent = function(msg, m, a){

  if (msg instanceof OTMap) {
   m = msg;
  } else {
    if (typeof m === ot_un) {
      m = new OTMap();
    }
    if (typeof a === ot_un) {
      a = 1;
    }
    if (typeof msg !== ot_un) {
      m.put("ti",msg);
      msg = "#" + msg;
    } else {
      msg = "";
    }
  }
  //if (typeof m.get("url") !== ot_un) { m.put("lc", m.get("url")); m.remove("url"); }
  if (typeof m.get("lc") !== ot_un) {
    //m.put("lc", m.get("lc"));
  } else {
    m.put("lc",unescape(ot_lc)+msg);
  }

  ot_t0=_j(0)-ot_di;
  _ot_send(m, a);
}
function _ot_send(m,e){
  if (typeof e === ot_un) e = true;
  if(!e) {
   ot_im=new Image(1,1);
   ot_im.src=ot_is+'log.opentracker.net/?si=www.enago.jp&uid='+_ot_uid()+'&sid='+_ot_sid()+'&'+_ot_u(m)+'&pix&proxy='+_j(5);

  }else{
   _re();
   ot_im=new Image(1,1);
   ot_im.src=ot_is+'log.opentracker.net/?si=www.enago.jp'
    +'&ots='+encodeURIComponent(f_rc('_ots'))
    +'&otui='+encodeURIComponent(f_rc('_otui'))
    +'&otr='+encodeURIComponent(f_rc('_otr'))
    +'&otor='+encodeURIComponent(f_rc('_otor'))
    +'&otpe='+encodeURIComponent(f_rc('_otpe'))
    +'&'+_ot_u(m)+'&pix&rnd='+_j(5);

   if(_lc=m.get("lc"))
    f_sc("_otpe", _lc, _gd(30).toGMTString(), "/", _gtld());
  }
}
function _re() {
 var _r=ot_r.referrer;
 var _ir=(_r.indexOf(ot_r.location.hostname)==-1||_r.indexOf(ot_r.location.hostname)> _r.indexOf("/", _r.indexOf(":") + 3))&&_r!="";
 if (!f_rc("_otor") && _ir) f_sc("_otor", ot_t0 + "." + _r, ot_cd, "/", _gtld());

 if(_ots=f_rc("_ots")){
   var _otsa = _ots.split("."),_sr=null;
   if(_otsa[3]+1800000>ot_t0){
     if (!(_sr=f_rc("_otr"))) {
       if(_ir) _sr=ot_t0+"."+_r;
     }
     f_sc("_ots",(parseInt(_otsa[0])+1)+"."+_otsa[1]+"."+_otsa[3]+"."+ot_t0, _gd(30).toGMTString(), "/", _gtld());
     if(_sr)f_sc("_otr",_sr, _gd(30).toGMTString(), "/", _gtld());
     _uc(0);
     return;
   }
 }
 var _sr;
 if(_ir)_sr=ot_t0+"."+_r;
 f_sc("_ots","1."+ot_t0+"."+ot_t0+"."+ot_t0, _gd(30).toGMTString(), "/", _gtld());
 if(_ir)f_sc("_otr",_sr, _gd(30).toGMTString(), "/", _gtld());
 _uc(ot_t0);
}

function _uc(s) {
  if (_otui = f_rc("_otui")) {
    var _otua = _otui.split(".");
    if(typeof(_otua[5])===ot_un)_otua[5]=_otua[4];
    if (s!=0) f_sc("_otui", _otua[0] + "." + _otua[1] + "." + _otua[3] + "." + s + "." + (parseInt(_otua[4]) + 1) + "." + (parseInt(_otua[5]) + 1), ot_cd, "/", _gtld());
    else f_sc("_otui", _otua[0] + "." + _otua[1] + "." + _otua[2] + "." + _otua[3] + "." + _otua[4] + "." + (parseInt(_otua[5]) + 1), ot_cd, "/", _gtld());
  } else {
    if(s==0)s=ot_t0;
    var _t = "." + s;
    f_sc("_otui", ot_rnd + _t + _t + _t + ".1.1", ot_cd, "/", _gtld());
  }
}




var _otmap = new OTMap();

function f_log(send) {

 var r = ot_r.referrer;
 if (typeof ot_ref !== ot_un) r=ot_ref;
 ot_im=new Image(1,1);
 ot_im.src=ot_b+'/collect.jsp?p=1&mid='+ot_rc
  +'&fv='+ot_fv+'&ti='+ot_ti+'&si=www.enago.jp'
  +ot_goal+ot_clv
  +'&sh='+screen.height+'&sw='+screen.width
  +'&sc='+screen.pixelDepth+ot_goal+ot_clv
  +'&lc='+ot_lc+'&ref='+escape(r)
  +'&t0='+ot_t0;


 _otmap.put("p",1);
 _otmap.put("mid",ot_rc);
 _otmap.put("fv",ot_fv);
 _otmap.put("ti",unescape(ot_ti));
 _otmap.put("sh",screen.height);
 _otmap.put("sw",screen.width);
 _otmap.put("sc",screen.pixelDepth);
 _otmap.put("lc",unescape(ot_lc));
 _otmap.put("ref",ot_r.referrer);
 _otmap.put("t0",ot_t0);
 _otmap.put("cld",ot_cld);
 if(typeof send=="undefined" || send) _ot_send(_otmap,1);
}

function f_sc(n,v,h,p,d,s){
ot_fv=true;ot_c.cookie=n+'='+escape(v)+((h)?(';expires='+h):'')+((p)?';path='+p:'')+((d)?';domain='+d:'')+((s && (s==true))?'; secure':'');
}

function f_rc(n){
 if(ot_c.cookie=='')return false;else{
 var fc,lc;var tbc=ot_c.cookie;fc=tbc.indexOf(n);var NN2Hack=fc+n.length;
 if((fc != -1) && (tbc.charAt(NN2Hack)=='=')){
  fc += n.length+1;lc=tbc.indexOf(';',fc);
  if(lc==-1)lc=tbc.length;return unescape(tbc.substring(fc,lc));
  }else{return false;}
 }
}

function ot_f(e) {
 et=e.target;
 ot_o=et;
 if (ot_o.caught==true) {ot_o.caught=false;return;}
 ep=et.parentNode;
 if (ep==null) return;
 if (ep.tagName=="A" || ep.tagName=="AREA") et = ep; else {
  if (ep.parentNode) {
   epp=ep.parentNode;
   if (epp.tagName=="A" || epp.tagName=="AREA") et = epp;
  }
 }
 isA=(et.tagName=="A" || et.tagName=="AREA")?1:0;
 isL=(isA && et.href)?1:0;
 if (!isL || et.href.indexOf('ot_evt(')!=-1) return;
 ot_i=et.href.indexOf(ot_d.domain);
 if ((ot_i<9&&ot_i!=-1) || et.href.indexOf("/")==1) return;
 ot_l=escape(et.href);

 ot_im=new Image(1,1);
 ot_im.src=ot_b+'/collect_.jsp?p=3&mid='+ot_rc+'&si=www.enago.jp&ms='+ot_l+'&lc='+ot_lc+'&ti='+ot_ti+'&t0='+ot_t0;


 var m = new OTMap();
 m.put("p",3);
 m.put("mid",ot_rc);
 m.put("ms",unescape(ot_l));
 m.put("lc",unescape(ot_lc));
 m.put("ti",unescape(ot_ti));
 m.put("t0",ot_t0);
 _ot_send(m,0);

}

function _j(m){
var n=new Date();n=n.getTime()+m;
if(m==0)return n;
if(m>15){while(true){m=new Date();if(m.getTime()>n)return;}}
else{n+="";return n.substring(n.length-m,n.length);}
}

function ot_evt(m,c){
if(m===undefined)m="unknown";
if(typeof m=="object"){m="unload";return;}
if(c==undefined)c=0;
m=escape(m+"|"+c+"|"+_j(5));if (m.indexOf('%u')!=-1) m=escape(m);

ot_im=new Image(1,1);
ot_im.src=ot_b+'/collect_.jsp?p=2&mid='+ot_rc+'&si=www.enago.jp&ms='+m+'&lc='+ot_lc+'&ti='+ot_ti+'&t0='+ot_t0;


var m = new OTMap();
m.put("p",2);
m.put("mid",ot_rc);
m.put("ms",m);
m.put("lc",unescape(ot_lc));
m.put("ti",unescape(ot_ti));
m.put("t0",ot_t0);
//_ot_send(m,0);
_j(250);
}

if (ot_d.getElementById && ot_d.createElement){
 if (window.addEventListener){
  window.addEventListener("unload",ot_evt,true);
  self.addEventListener("click",ot_f,true);
 }
}
f_log()

