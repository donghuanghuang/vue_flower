/**
 * Created by web-01 on 2017/12/12.
 */
var x=59;   //秒
var y=1;    //分
var z=21;   //时
window.onload=function () {
    function task(){
        //启动定时器
        var time=setTimeout(task,1000);
        var d2=document.getElementById("d2");
        var d3=document.getElementById("d3");
        var d4=document.getElementById("d4");
        var d5=document.getElementById("d5");
        var d6=document.getElementById("d6");
        var d7=document.getElementById("d7");
        d4.innerHTML=z+"时";
        d2.innerHTML=x+"秒";
        d3.innerHTML=y+"分钟";
        d7.innerHTML=z+"时";
        d5.innerHTML=x+"秒";
        d6.innerHTML=y+"分钟";
        //临界值
        if (y==0 &&x==0){
            x=59;
            y=59;
            --z;
        }
        else if (x!=0){
            --x;
        }
        else if(x==0) {
            x=59;
            --y;
        }
    }
    var time=setTimeout(task,1000);
}