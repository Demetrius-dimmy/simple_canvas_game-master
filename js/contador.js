
<!-- begin

var sHors = "00"; 
var sMins = "00";
var sSecs = 60;



function getSecs(){
	sSecs--;
	if(sSecs<0)
    {sSecs=59;sMins--;if(sMins<=9)sMins="0"+sMins;}
	if(sMins=="0-1")
    {sMins=5;sHors--;if(sHors<=9)sHors="0"+sHors;}
	if(sSecs<=9)sSecs="0"+sSecs;
	if(sHors=="0-1")
	{sHors="00";sMins="00";sSecs="00";
	clock1.innerHTML=sHors+"<font color=#000000>:</font>"+sMins+"<font color=#000000>:</font>"+sSecs;}
    else
    {
   clock1.innerHTML=sHors+"<font color=#000000>:</font>"+sMins+"<font color=#000000>:</font>"+sSecs;
   	setTimeout('getSecs()',1000);
	}
	if(sSecs <01){
		estCaught=0;
		monstersCaught=0;
		bombaCaught=0;
		reset();
		
		
	}
	if(sSecs <12 && sMins ==0){
		SOM_Relogio.play();	
		}
		if (sSecs ==0){
		SOM_Relogio.pause();
		SOM_Relogio.currentTime=0.0;
		SOM_Trilha.pause();
		SOM_Trilha.currentTime=0.0;
	}
	
	if (sSecs>11){
		SOM_Trilha.play();
		
	}
	if (sSecs<11 && sMins==0){
		SOM_Trilha.volume = 0.6;
	}
	
	}
	
	