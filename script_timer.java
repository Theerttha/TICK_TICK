function show1(){
    document.getElementById("drop1").classList.toggle("show");
}
function show2(){
    document.getElementById("drop2").classList.toggle("show");
}
function show3(){
    document.getElementById("drop3").classList.toggle("show");
}
function show4(){
    document.getElementById("drop4").classList.toggle("show");
}
function show5(){
    document.getElementById("drop5").classList.toggle("show");
}
function show6(){
    document.getElementById("drop6").classList.toggle("show");
}
function timer(){
    if (clockAction%2!=0){
        if(time>=0){
            let h=Math.floor(time/3600);
            let s=Math.floor(time%60);
            let m=Math.floor((time%3600-s)/60);
            if(s<10){
                s="0"+s;
            }
            if(m<10){
                m="0"+m;
            }
            if(h<10){
                h="0"+h;
            }
            let count=h+":"+m+":"+s;
            document.getElementById('text').innerHTML=count;
            console.log(count);

            time--;
            flag=setTimeout(timer,1000);}
        else{
            document.getElementById("audio").play();
            document.getElementById('starttext').innerHTML='&#9658';
            clockAction+=1;
        }}
    else{
        clearTimeout(flag);
        return time;
    }


}

