var m_DivLocationX = 790
var m_DivLocationY = 130
var m_timerIDtiming = 300   //移動検知時間軸（静止状態での検知） [数値]ns
var m_moveIDtiming  = 30    //移動タイミング時間軸               [数値]ns
var m_drawCount = 0.15      //移動動作速度指定(0 静止 0.1>移動 1=完全追従 (1以上の設定は不可) )
var m_timerID = 0;
var m_div_data = "";
var m_ScriptStart = false;
var m_init_flag = 0;

function divPreset(){
	clearInterval(m_timerID);
	//座標移動を検出した場合に発動するルーチン
	if ( (DivLocat("Y") - DivNow("Y")) !=0 ){
		m_timerID = 0;
		m_timerID = setInterval("moveDiv()",m_moveIDtiming);
	}
}

function moveDiv(){
	
	m_tempY = DivLocat("Y") - DivNow("Y"); 
	m_ty = parseInt((m_tempY - Math.abs(m_tempY)) / (Math.abs(m_tempY) * 2))
	if (m_ty==0) m_ty=1;
	if (isNaN(m_ty) || m_drawCount==1) m_ty=0;

	if ( m_div_data ) {
		m_div_data.style.top = DivNow("Y") + Math.ceil(m_tempY * m_drawCount) + m_ty + "px";
	}
	if (m_ty == 0){
		clearInterval(m_timerID); m_timerID = 0;
		//timerID = setInterval("divPreset()",m_timerIDtiming);
	}
}
window.onscroll = function() {
	if ( !m_timerID && m_init_flag==1 ) {
		m_timerID = setInterval("divPreset()",m_timerIDtiming);
	}
}

function DivLocat(ordinate){
	m_mouseXm = document.documentElement.scrollLeft;
	m_mouseYm = document.documentElement.scrollTop;
	if ( self.pageYOffset ) {
		m_mouseXm = self.pageXOffset;
		m_mouseYm = self.pageYOffset;
	}
	if (ordinate.toUpperCase() == "X"){
		return m_DivLocationX + m_mouseXm
	} else if (ordinate.toUpperCase() == "Y"){
		return m_DivLocationY + m_mouseYm
	}
}

function DivNow(ordinate){
	if(!m_ScriptStart) return;
	if (ordinate.toUpperCase()=="X"){
		return parseInt(m_div_data.style.left)
	} else if (ordinate.toUpperCase()=="Y"){
		return parseInt(m_div_data.style.top)
	}
}

function setScrollInit(){
	return;
	if ( !$("sliderBG") ) return;
	m_init_flag = 1;
	m_div_data = $("sliderBG");
	m_div_data.style.top  = DivLocat("Y") + "px";
	m_div_data.style.left = DivLocat("X") + "px";
	m_ScriptStart = true;
	//m_timerID = setInterval("divPreset()",m_timerIDtiming);

}
