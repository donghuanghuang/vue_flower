/**
 * Created by web-01 on 2017/12/1.
 */
function task(){
    var show=document.querySelector("#banner .show")
    show.className="";
    if(show.nextElementSibling!=null){
        show.nextElementSibling.className="show"
    }
    else{
        show.parentNode.children[0].className="show"
    }
}
var timer=setInterval(task,3000);