/**
 * Created by Administrator on 2017/12/30.
 */
(()=>{
    var box=document.getElementById("box");
    var num=0;
function task(){
        num++
        box.style.right=num+"px";
        if(num==3500){
            num=0
        }
    }
var timer=setInterval(task,30);
    box.onmouseover=function(){
        clearInterval(timer)
    }
    box.onmouseout=function(){
    timer=setInterval(task,30)
    }
})()