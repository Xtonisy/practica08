let timerHours = document.getElementById('timer-hours');
let timerMinutes=document.getElementById('timer-minutes');
let timerSeconds=document.getElementById('timer-seconds');
let nav=document.querySelector("nav");
let html = document.querySelector("html");

function getTimer(dedline){
    const dateNow = new Date(),
    dateFuture = new Date(dedline),
    date= dateFuture- dateNow;
    ms=dateFuture-dateNow<0?0:dateFuture-dateNow,
    sec=Math.floor(ms/1000 % 60),
    min=Math.floor(ms/1000/60%60),
    hours=Math.floor(ms/1000/60/60);
    if (date<0){
        clearInterval(IsInterval);
        sec=0;
        min=0;
        hours=0;
    }

    return {
        sec,
        min,
        hours
    };
    
}
function setTimer(){
    const timer = getTimer('30 july 2020');
        timerHours.textContent=(timer.hours<10?"0":"")+timer.hours;
        timerMinutes.textContent=(timer.min<10?"0":"")+timer.min;
        timerSeconds.textContent=(timer.sec<10?"0":"")+timer.sec;
    }

let IsInterval=setInterval(setTimer, 1000);

html.addEventListener("click", (event) =>{
    let target = event.target;
    if (document.body.clientWidth<800) nav.style.display="none";
    if (!target.matches("#burgermenu")) return;
    else if (target.matches("#burgermenu")){
        nav.style.display = nav.style.display == "none"? "flex":"none";
    };
});