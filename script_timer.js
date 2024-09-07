let x=0;
window.addEventListener("click",windows);
function windows(){
    if(document.getElementById("drop1").style.display=="flex"){
        document.getElementById("drop1").style.display="none";
    }
    if(document.getElementById("drop2").style.display=="flex"){
        document.getElementById("drop2").style.display="none";
    }
    if(document.getElementById("drop3").style.display=="flex"){
        document.getElementById("drop3").style.display="none";
    }
    if(document.getElementById("drop4").style.display=="flex"){
        document.getElementById("drop4").style.display="none";
    }
    if(document.getElementById("drop5").style.display=="flex"){
        document.getElementById("drop5").style.display="none";
    }
    if(document.getElementById("drop6").style.display=="flex"){
        document.getElementById("drop6").style.display="none";
    }


}

function show1(){
    
    var div=document.getElementById("drop1");

    if (div.style.display==="none"){
    
        div.style.display="flex";
        
    }
    else{
        div.style.display="none";}}


function show2(){
    var div=document.getElementById("drop2");
  
    if (div.style.display==="none"){
        div.style.display="flex";
    }
    else{
        div.style.display="none";}}
    

function show3(){
    var div=document.getElementById("drop3");
 
    
    if (div.style.display==="none"){
        div.style.display="flex";
    }
    else{
        div.style.display="none";}}

function show4(){
    var div=document.getElementById("drop4");
    
    if (div.style.display==="none"){
        div.style.display="flex";
        }
    else{
        div.style.display="none";}}

function show5(){
    var div=document.getElementById("drop5");
    if (div.style.display==="none"){
        div.style.display="flex";
        }
    else{
        div.style.display="none";}}
function show6(){
    var div=document.getElementById("drop6");
    if (div.style.display==="none"){
        div.style.display="flex";
                }
    else{
        div.style.display="none";}}


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

