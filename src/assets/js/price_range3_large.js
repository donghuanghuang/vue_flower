/**
 * Created by web-01 on 2017/12/6.
 */
(()=>{
    eight_start=parseInt(document.getElementById("eight_start").innerHTML),
    eight_price=document.getElementById("eight_price");
ajax({
    type:"get",
    url:"php/price_range_large.php",
    data:"price_end="+eight_start,
    datatype:"json"
}).then(result=>{
    var html=""
    for(var p of result){
html+=`<li>
    <p><a href="${p.href}"><img src="${p.src}" alt=""></a></p>
    <p>${p.NAME}</p>
    <p>¥${p.price}</p>
    <p>
    <span class="reduce">-</span>
    <input type="text" value="1">
    <span class="add">+</span>
    <a href="javascript:;" class="addCart">加入购物车</a>
    </p>
    </li>`
}
eight_price.onclick=function(){
    document.getElementById("showflower").innerHTML=html
}
})
})()

