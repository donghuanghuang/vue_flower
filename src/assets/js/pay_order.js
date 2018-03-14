/**
 * Created by web-01 on 2017/12/4.
 */
window.onload=function () {
    var img=$("pay_nav_2").getElementsByTagName("img");
    for (var i=0;i<img.length;i++){
        img[i].onclick = function () {
            $("sure_pay").style.display="block";
    }
    }
}

