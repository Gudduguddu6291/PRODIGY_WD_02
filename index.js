let milsec = 0;
let sec = 0;
let min = 0;
let getmilseconds = document.querySelector('.milsec');
let getseconds = document.querySelector('.sec');
let getmin = document.querySelector('.min');
let btnStart = document.querySelector('.start');
let btnstop = document.querySelector('.stop');
let btnreset = document.querySelector('.reset');
let interval;
btnStart.addEventListener('click',()=>{
   interval=setInterval(startTimer,10)
})

btnstop.addEventListener('click',()=>{
    clearInterval(interval);
})

btnreset.addEventListener('click',()=>{
    clearInterval(interval);
    interval =0;
    milsec=0;
    sec =0;
    min =0;
    getmilseconds.innerHTML='00';
    getseconds.innerHTML='00';
    getmin.innerHTML='00';

})

function startTimer()
{
    milsec++;
    if (milsec<=9) {
        getmilseconds.innerHTML='0'+milsec;
    }
    if(milsec>9)
    {
        getmilseconds.innerHTML=milsec;
    }
    if(milsec>99)
    {
        sec=sec+1;
        getseconds.innerHTML = '0'+sec;
        milsec =0;
        getmilseconds.innerHTML='0'+0;
    }
    if (sec>9) {
        getseconds.innerHTML = sec
    }
    if(sec>59)
    {
        min= min+1;
        getmin.innerHTML ='0'+min;
        sec = 0;
        getseconds.innerHTML ='0'+0;
    }
    if(min>9)
    {
        getmin.innerHTML = min;
    }
}