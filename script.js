let day = document.getElementById("dia");
let month = document.getElementById("mes");
let year = document.getElementById("ano");
let hour = document.getElementById("hora");
let minute = document.getElementById("minuto");
let seconds = document.getElementById("segundo");





let relogio = setInterval(function time(){
    let data = new Date();
    let d = data.getDate();
    let m = data.getMonth();
    let a = data.getFullYear();
    let hr = data.getHours();
    let min = data.getMinutes();
    let seg = data.getSeconds();

    if (d<10) {
        d = "0"+d;    
    }else{
        d=d;
    }

    if (m<10) {
        m = "0"+m;    
    }else{
        m=m;
    }

    if (hr<10) {
        hr = "0"+hr;    
    }else{
        hr=hr;
    }

    if (min<10) {
        min = "0"+min;    
    }else{
        min=min;
    }

    if (seg<10) {
        seg = "0"+seg;    
    }else{
        seg=seg;
    }

    m = m + 1;


    day.textContent = d;
    month.textContent = m;
    year.textContent = a;
    hour.textContent = hr;
    minute.textContent = min;
    seconds.textContent = seg;
})
 


