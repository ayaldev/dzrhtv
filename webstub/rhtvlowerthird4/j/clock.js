
tday  =new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
tmonth=new Array("January","February","March","April","May","June","July","August","September","October","November","December");

function GetClock(){
d = new Date();
nday   = d.getDay();
nmonth = d.getMonth();
ndate  = d.getDate();
nyear = d.getYear();
if(nyear<1000) nyear=nyear+1900;


document.getElementById('clockbox2').innerHTML=""+tday[nday]+"<br/>"+tmonth[nmonth]+" "+ndate+", "+nyear+"";
setTimeout("GetClock()", 1000);
}
window.onload=GetClock;




var timerID = null;
var timerRunning = false;
var id,pause=0,position=0;

function stopclock (){
        if(timerRunning)
                clearTimeout(timerID);
        timerRunning = false;
}

function showtime () {
        var now = new Date();
        var hours = now.getHours();
        var minutes = now.getMinutes();
        var seconds = now.getSeconds()
        var timeValue = "" + ((hours >12) ? hours -12 :hours)
        timeValue += ((minutes < 10) ? ":0" : ":") + minutes
        timeValue += (hours >= 12) ? " PM" : " AM"
        document.clock.face.value = timeValue;
        timerID = setTimeout("showtime()",1000);
        timerRunning = true;
}
function startclock () {
        stopclock();
        showtime();
}