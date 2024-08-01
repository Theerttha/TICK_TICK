let i=0;
function stopWatch(){
    if (clockAction%2!=0){
        i+=1;
        let time;
        let h,s,m;
        s=i%60;
        m=Math.floor((i%3600-s)/60);
        h=Math.floor(i/3600);
        if(s<10){
            s="0"+s;
        }
        if(m<10){
            m="0"+m;
        }
        if(h<10){
            h="0"+h;
            }
        time=h+":"+m+":"+s;
        
        document.getElementById('show').innerHTML=time;

        
    }}
function stop(){
    i=0;
    document.getElementById('show').innerHTML="00:00:00";

}