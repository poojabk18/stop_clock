let [hour , minute , second ] = [0 , 0 , 0 ];

let displaytime = document.getElementById("clock")
console.log(displaytime.innerHTML)

let timer = null;

function runclock(){
    second ++
            if(second == 60){
                minute++;
                second = 0;
                 
                if(minute == 60){
                    hour++
                    minute = 0;
            }
        }
let h = hour < 10 ? "0" : ""
let m = minute < 10 ? "0" : ""
let s= second < 10 ? "0" : ""

displaytime.innerHTML = ` ${h}${hour} : ${m}${minute} : ${s}${second}`;
}

function start(){
    if(timer != null){
        clearInterval(timer)
    }
    timer = setInterval(runclock,1000)
}

function restart(){
    window.location.reload();
}

function stop(){
    clearInterval(timer)
}