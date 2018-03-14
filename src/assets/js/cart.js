/**
 * Created by Administrator on 2018/1/14.
 */
/*
此文件存放购物车显示产品功能，价格计算，删除，
*/
//加载购物车页面
function loadcart(){
    $.get("php/islogin.php").then(data=>{
        if(data.ok==0){
            location="login.html";
        }else{
            $.get("php/getcart.php").then(result=>{
               var html="",total=0;
                for(var p of result){
                    html+=`
                        <tr>
                    <td><img src="${p.small}" alt=""/></td>
                    <td>${p.NAME}</td>
                    <td class="count" data-cid="${p.cid}">
                    <span class="reduce">-</span>
                    <input type="text"  value="${p.count}" min="1"/>
                    <span class="add">+</span>
                    </td>
                    <td class="price">￥<span>${p.price}&nbspX</span>&nbsp<span data-toggle="count">${p.count}</span></td>
                    <td class="delete"><a href="" data-cid="${p.cid}" class="btn-danger btn btn-xs">删除</a></td>
                </tr>
                    `
                    total+=p.price*p.count;
                }
                if(result.length!==0){
                $("[data-toggle=tbody]").html(html);
                }else{
                    var html="<tr><td colspan='5' align='center'>您的购物车空空如也~快去添加商品吧!!!</td></tr>";
                    $("[data-toggle=tbody]").css({
                        "fontSize":24,
                        "color":"gray"
                    })
                    $("[data-toggle=tbody]").html(html)
                }
                    $("[data-total=total]").html(total);
            })
        }
    })
}

$(()=>{
    loadcart();
})

//计算数量
$(()=>{
    $("[data-toggle=tbody]").on("click",".reduce,.add",e=>{
        e.preventDefault();
        var $tar=$(e.target);
        var $result=$tar.parent().children(":eq(1)");
        var count=$tar.parent().next().find("[data-toggle=count]");
        var cid=$tar.parent().data(cid);
        var n=$result.val();
        if($tar.is(".add")){
            n++;
        }else{
            n--;
        }
        $result.val(n);
        count.html(n);
        $.get("php/updatecount.php",{count:n,cid:cid.cid}).then(loadcart);
    })
})

//删除商品
$(()=>{
    /*为每个删除按钮添加事件*/
    $("[data-toggle=tbody]").on("click",".delete>a",e=>{
        e.preventDefault();
        var $tar=$(e.target);
        var cid=$tar.data(cid);
        var title=$tar.parent().parent().children(":eq(1)").html();
        if(confirm("是否继续删除"+title+"吗")){
      $.get("php/deletecart.php",{cid:cid.cid}).then(loadcart)}
    })
    });

//点击删除按钮之后删除所有商品的功能
$(()=>{
    $("[data-clear=clear]").on("click",e=>{
        e.preventDefault();
        if(confirm("是否删除全部商品")){
    $.get("php/delete_cartall.php").then(loadcart)
        }
        })
})