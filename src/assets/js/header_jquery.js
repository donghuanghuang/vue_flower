/**
 * Created by web-01 on 2017/12/3.
 */

$(()=>{
    $.ajax({
        type:"get",
        url:"header.html"}).then(html=>{
        document.getElementById("header").innerHTML=html;
var img1=document.getElementById("img1"); //图片id
var txtSearch=document.getElementById("txtSearch"); //搜索框id
img1.onclick=function(){
    if(txtSearch.value.trim()!=="")
        location="getProductsByKw.html?kw="+txtSearch.value.trim();
    else
        location="getProductsByKw.html";
}
txtSearch.onkeyup=e=>{
    if(e.keyCode==13){
        img1.onclick();//模拟触发!
    }
}
var search=location.search;//?kw=mac i7 256g
if(search!="")
    txtSearch.value="";
})
    islogin();

})
function islogin(){
    $.get("php/islogin.php").then(data=>{
        if(data.ok==0){
           //未登录
            $("[data-toggle=header_5]").children(":eq(2)").show().prev().hide();
        }else{
            //成功登录
            $("[data-toggle=header_5]").children(":eq(1)").show().next().hide();
            $("[data-name=uname]").html(data.uname);
        }
    })
}

$(document.body).on(
    "click",
    ".show_session>a:last-child",
        e=>{
        $.get("php/logout.php").then(()=>{
            location.reload(true);
            alert("退出成功")
        })
    }
);