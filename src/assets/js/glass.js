/**
 * Created by Administrator on 2017/12/30.
 */
(()=>{
    var mimg=document.getElementById("mimg"),
    mask=document.getElementById("mask"),
    supermask=document.getElementById("supermask"),
    large_img=document.getElementById("large_img");
    supermask.onmouseover=function(){
       mask.style.display=large_img.style.display="block"
    }
    supermask.onmouseout=function(){
        mask.style.display=large_img.style.display=""
    }
    supermask.onmousemove=e=>{
    var offsetX=e.offsetX, offsetY=e.offsetY;
    var top=offsetY-175/2,
        left=offsetX-175/2;
    //top=top<0?0:top>175?175:top;
    //left=left<0?0:left>175?175:left;
    if(left<0){
        left=0;
    }else if(left>175){
        left=175
    }
    if(top<0){
        var top=0
    }else if(top>175){
        var top=175;
    }
    mask.style.cssText=
        "display:block; left:"+left+"px; top:"+top+"px";
    //if(e.target.nodeName=="IMG"){
        var src= mimg.src;
        var i=src.lastIndexOf(".")
        src=src.slice(0,i)+"_large.jpg";
    //}
    large_img.style.backgroundImage="url("+src+")";
    large_img.style.backgroundRepeat="no-repeat";
    large_img.style.backgroundPosition= -left*16/7+"px "+ -top*16/7+"px";
    }
})()