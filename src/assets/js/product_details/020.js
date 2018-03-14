/**
 * Created by web-01 on 2017/11/15.
 */
//加减运算
$(".left_text").on("click","#btn1,#btn3",function(e){
    $tar=$(e.target);
    var $input=$tar.parent().children(":eq(2)");
    var count=$input.val();
    if($tar.is("#btn3")){
        count++;
    }else if(count>1){
        count--;
    }
    $input.val(count);
})

//加入购物车

$(()=>{
    $.get("php/islogin.php").then(data=>{
        if(data.ok==0){
            location="login.html"
        }else{
            $(".left_text").on("click",".addcart1",e=>{
                    e.preventDefault();
                    var $tar=$(e.target);
                    var fid=20;
                    var input=$tar.parent().parent().children(":eq(2)");
                    var count=parseInt(input.val());
                    //console.log(count)
                    $.get("php/addcart.php",{fid:fid,count:count}).then(alert("添加成功"));
                    input.val(1);
                }
            )
        }
    });
})