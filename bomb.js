let inputenter=document.getElementById("defuser");
let timer=document.getElementById("timer");


let counter = 30;
let intervalid=setInterval(function(){
    counter=counter-1;
    timer.textContent=counter;
   
    if (counter === 0){
        timer.textContent="BOOM";
        clearInterval(intervalid);
    }
},1000);
inputenter.addEventListener('keydown',function(event){
    let entertext=inputenter.value;
    if(event.key === 'Enter' && entertext === "job" && counter !==0){
        timer.textContent="you did it ";
        clearInterval(intervalid);    }
    
});