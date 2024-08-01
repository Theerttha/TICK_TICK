function setClock(){
    const d=new Date();
    let hours=d.getHours();
    let min=d.getMinutes();
    let sec=d.getSeconds();
    if (hours<10){
        hours='0'+hours;
    }
    if (min<10){
        min='0'+min;
    }
    if (sec<10){
        sec='0'+sec;
    }
    let time=hours+':'+min+':'+sec;
    return time;

}
setInterval(updateClock,1000);
function updateClock(){
    if(document.getElementById('textClock').clicked!=true){
        
        document.getElementById('textClock').innerHTML=setClock();
        
    }}

