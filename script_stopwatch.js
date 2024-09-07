let i=0;
function stopWatch(){
    if (clockAction%2!=0){
        i+=1;
        let time;
        let h,s,m,ms;
        h=Math.floor((i/100)/3600);
        m=Math.floor((i/6000)-(h*60))
        s=Math.floor((i/100)-(m*60)-(h*3600));
        ms=i-(s*100)-(m*6000)-(h*360000)
        
        if(ms<10){
            ms="0"+ms;
        }
        if(s<10){
            s="0"+s;
        }
        if(m<10){
            m="0"+m;
        }
        if(h<10){
            h="0"+h;
            }
        time=h+":"+m+":"+s+":"+ms;
        
        document.getElementById('show').innerHTML=time;

        
    }}
function stop(){
    i=0;
    document.getElementById('show').innerHTML="00:00:00";

}