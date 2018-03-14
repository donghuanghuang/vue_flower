//封装一个函数显示收货地址信息
function loadaddress(){
    $.ajax({
        type:"get",
        url:"php/islogin.php",
        success:function(data){
            if(data.ok==1){
    $.ajax({
        type:"get",
        url:"php/add_address.php",
        success:function(data1){
            //console.log(data);
            var html="";
            for(var item of data1){
                //console.log(item)
            html+=`
                 <tr>
                    <td>${item.aid}</td>
                    <td>${item.receiver}</td>
                    <td>${item.address}</td>
                    <td>${item.cellphone}</td>
                    <td  class="delete"><a href="" data-aid="${item.aid}" class="btn-danger btn btn-xs">删除</a></td>
                </tr>
            `
            }
            $("#tbody1").html(html)
        },
        error:function(){
            alert("网络故障请检查")
        }
    })
            }
        },
        error:function(){
            alert("网络故障请检查");
        }
    })
}
$(()=>{
    loadaddress();
})

//点击删除按钮时删除相对应的收货地址
$("#tbody1").on("click",".delete>a",function(e){
    e.preventDefault();
    var $tar=$(e.target);
    var aid=$tar.data("aid");
    if(confirm("是否继续删除"+aid+"编号地址")){
    $.ajax({
        type:"post",
        url:"php/del_address.php",
        data:{aid:aid},
        success:function(data){
            if(data.code>0){
            loadaddress();
            }
        },
        error:function(){
            alert("网络故障请检查")
        }
    })
    }
})

//点击新增收货地址按钮显示模态框
$(".btn1").click(function(){
    var html=$(".modal-body").html();
    alertMsg("编辑收货地址",html,false,"取消","保存地址",function(){
        //console.log("编辑成功");
        var receiver=$("#efname").val();      //收货人
        var address=$("#eadr").val();          //地址
        var cellphone=$("#ephone").val();      //电话号码
        console.log(receiver)
        console.log(address)
        console.log(cellphone)
        $.ajax({
            type:"get",
            url:"php/islogin.php",
            success:function(data){
                if(data.ok==1){
        $.ajax({
            type:"post",
            url:"php/insert_address.php",
            data:{receiver,address,cellphone},
            success:function(data){
                if(data.code>0){
                    loadaddress();
                }
            },
            error:function(){
                alert("网络故障请检查")
            }
        })
                }
            },
            error:function(){
                alert("网络故障请检查")
            }
        })
    })
})