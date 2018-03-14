/**
 * Created by Administrator on 2018/1/20.
 */
/**
 * 此文件的存放密码修改功能
 */

$.get("php/islogin.php").then(data=>{
    if(data.ok==1){
        $(".right").on("click",".sure",function(e){
            e.preventDefault();
            var opwd = $(".opwd").val();
            var npwd = $(".npwd").val();
            var spwd = $(".spwd").val();
            $.ajax({
                type: "post",
                url: "php/changepwd.php",
                data: {opwd, npwd, spwd},
                success: function (data) {
                    //console.log(data)
                    if (opwd !== data.psd) {
                        alert("原密码不对");
                    }
                    else if (npwd !== spwd) {
                        alert("新密码和确认密码不一致")
                    }
                    else if (opwd == npwd) {
                        alert("原密码和新密码要不一致")
                    }
                    else if (data.code > 0) {
                        alert("保存成功,请重新登录");

                        $.get("php/logout.php").then(()=> {
                            //location.reload(true);
                            location = "login.html";
                        })
                    }

                },
                error: function () {
                    alert("网络故障请检查");
                }
            })
        })
        }
        })


