$(()=>{
$form=$("form");
$("#btn").on("click",e=>{
$.get("php/login.php",$form.serialize()).then(data=>{
    if(data=="false"){
        alert("用户名或者密码错误")
    }
    else{
        alert("登录成功")
        if(location.search!==""){
         var back=location.search.slice(6);
            location=back;
        }else{
        location="index.html";
        }
    }
})
});
    $(window).keyup(e=>{
        if(e.keyCode==13)
        $("#btn").click();
    })
})










