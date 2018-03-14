/**
 * Created by web-01 on 2017/11/29.
 */
var form=document.forms[0];
var uname=form.uname;
var upwd=form.upwd;
var cpwd=form.cpwd
var phone=form.phone
var email=form.email
function vali(txt,reg){
    //清除当前文本框的class
    txt.className="";
    //获取旁边div
    var div=txt.nextElementSibling
    //用reg测试当前文本框的内容
    //如果通过,就修改div的class为vali_success
    if(reg.test(txt.value)){
        div.className="vali_success";
        div.innerHTML=""
        return true;
    }
    else if(txt.value=="" || txt.value==null){
        div.className="vali_fail";
        div.innerHTML="此项不能为空"
        return false;
    }
    else if(!reg.test(txt.value)){
        div.className="vali_fail";
        div.innerHTML="格式不符合"
    }
    else{//否则修改div的class为vali_fail
        div.className="vali_fail";
        return false;
    }
}
var isregister = true;
//验证用户名
uname.onblur=function checkname(){
    var xhr = createXhr();
    var uname=$("uname").value;
    var url = "php/checkname.php?uname="+uname;
    xhr.open("get",url,true);
    xhr.onreadystatechange=function () {
        if (xhr.readyState==4&&xhr.status==200){
            var res = xhr.responseText;
            var regexp=/^\w{1,10}$/
            var div=$("uname").nextElementSibling
            if (res == 0 && !uname=="" &&regexp.test(uname)){
                div.className="vali_success";
                $("showname").innerHTML="";
                isregister=true;
            }else if(uname=="" || uname==null){
                $("showname").className="vali_fail"
                $("showname").innerHTML="此项不能为空";
                isregister=false;
            }
            else if(!regexp.test(uname)){
                $("showname").className="vali_fail"
                $("showname").innerHTML="用户名格式不对";
                $("showname").style.color="red";
                isregister=false;
            }else{
                $("showname").className="vali_fail"
                $("showname").innerHTML="用户名已存在";
                $("showname").style.color="red";
                isregister=false;
            }
        }
    }
    xhr.send(null);
}

//注册
function register() {
    if (isregister){
        var xhr = createXhr();
        xhr.open("post", "php/register.php", true);
        xhr.onreadystatechange = function (e) {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var res = xhr.responseText;
                if(res==1){
                    e.preventDefault();
                    alert("注册成功,即将跳转到登录页面")
                    location="login.html";
                }
            }
        }
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        var uname = $("uname").value;
        var upwd = $("upwd").value;
        var phone = $("phone").value;
        var email = $("email").value;
        var mes = "uname=" + uname + "&upwd=" + upwd + "&phone=" + phone + "&email=" + email;
        xhr.send(mes);
    }
    else{
        alert("注册失败");
    }
}
//Step1:为name为uname和upwd的文本框绑定获得焦点事件
uname.onfocus=getFocus;
upwd.onfocus=getFocus;
cpwd.onfocus=getFocus;
phone.onfocus=getFocus;
email.onfocus=getFocus;
function getFocus(){
    //this->当前文本框
    //清除旁边div的class
    var div=this.nextElementSibling
    div.className=""
    if(div.innerHTML=="此项不能为空"){
        div.innerHTML="此项必填"
        div.style.color="red"
    }
    else if(div.innerHTML=="密码不一致"){
        div.innerHTML="此项必填"
        div.style.color="red"
    }
}
//uname.onblur=function(){
//    vali(this,/^\w{1,10}$/);
//}

upwd.onblur=function(){
    vali(this,/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,12}$/);
}
phone.onblur=function(){
    vali(this,/^[1][358][0-9]{9}$/);
}
email.onblur=function(){
    vali(this,/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/);
}

cpwd.onblur=function(){
    var div=cpwd.nextElementSibling
    if (upwd.value===cpwd.value && upwd.value!==""){
        div.className="vali_success";
        div.innerHTML=""
    }
    else if(cpwd.value=="" || cpwd.value==null){
        div.className="vali_fail";
        div.innerHTML="此项不能为空"
    }
    else if (upwd.value!==cpwd.value ){
        div.className="vali_fail";
        $("showcpwd").innerHTML="密码不一致";
    }
}


