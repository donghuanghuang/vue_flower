/*
此文件存放分页功能，添加购物车功能，

*/
function loadPage(pageNo=1){
    var pageSize=6;
    var query=`pageNo=${pageNo}&pageSize=${pageSize}`;
    var search=location.search;//?kw=mac i7
if(search!==""){
    search=decodeURI(search.split("=")[1]);
    query+=`&kw=${search}`
}
    $.ajax({
    type:"get",
    url:"php/getProductsByKw.php",
    data:query,
    datatype:"json"
}).then(result=> {
    var {pageNo, pageCount, data}=result
    var html = "";
    for (var p of data){
        html +=`
    <li>
        <p><a href="${p.href}"><img src = "${p.src}" alt=""></a></p>
        <p>${p.NAME}</p>
        <p>¥${p.price}</p>
        <p>
        <span class="reduce">-</span>
        <input type="text" value="1">
        <span class="add">+</span>
        <a href="javascript:;" data-fid="${p.fid}"  class="addCart">加入购物车</a>
        </p>
        </li>
 `
    }
    document.getElementById("showflower").innerHTML = html;
    html=`<a href="javascript:;" class='${pageNo==1?"previous disabled":"previous"}'>上一页</a>`;
    for(var i=1;i<=pageCount;i++){
        html+=`<a href="javascript:;" class=${pageNo==i?"current":""}>${i}</a>`
    }
    html+=`<a href="javascript:;" class='${pageNo==pageCount?"next disabled":"next"}'>下一页</a> `;
    document.getElementById("pages").innerHTML=html;
})
}
loadPage();
//为添加到购物车按钮绑定事件
$(()=>{
    $.get("php/islogin.php").then(data=>{
        if(data.ok==0){
            alert("你尚未登录")
            location="login.html?back="+location.href;
        }else{
            $("#showflower").on("click",".addCart",e=>{
                var $tar=$(e.target);
                var fid=$tar.data("fid");
                    var count=$tar.prev().prev().val();
                    $.get("php/addcart.php",{fid,count}).then(alert("添加成功"));
                    $tar.prev().prev().val(1);
            }
            )
        }
    });
})

$(()=>{
    var divPages=document.getElementById("pages");
divPages.onclick=e=>{
    var tar=e.target;
    if(tar.nodeName=="A"
        &&!/disabled|current/.test(tar.className)){
        var i=1;
        if(/previous/.test(tar.className)){
            //获得divPages下class为current的a的内容转为整数保存在i中
            var a=divPages.querySelector(".current");
            i=parseInt(a.innerHTML)-1;//i-1
        }else if(/next/.test(tar.className)){
            //获得divPages下class为current的a的内容转为整数保存在i中
            var a=divPages.querySelector(".current");
            i=parseInt(a.innerHTML)+1;//i+1
        }else{//获得tar的内容转为整数保存在i中
            i=parseInt(tar.innerHTML);
        }//用i为pageNo重新加载当前页面
        loadPage(i);
    }
};
});

$(()=>{
$("#showflower").on("click",e=>{
    var $tar= $(e.target);
    if($tar.is(".reduce") || $tar.is(".add")){
        var $input=$tar.parent().children(":eq(1)");
        var n=parseInt($input.val());
        if($tar.is(".add"))
            n++;//n++
        else if(n>1)//否则 如果n>1
            n--;//n--
    }
    $input.val(n);
})
})










