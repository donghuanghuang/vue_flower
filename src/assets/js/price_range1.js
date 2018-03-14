/**
 * Created by web-01 on 2017/12/6.
 */
(()=>{
    var second=parseInt(document.getElementById("second").innerHTML),
        third_end=parseInt(document.getElementById("third_end").innerHTML),
    first_price=document.getElementById("first_price");
ajax({
    type:"get",
    url:"php/price_range.php",
    data:"price_start="+second+"&price_end="+third_end,
    datatype:"json"
}).then(result=>{
        //console.log(html[0].href)
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
first_price.onclick=function(){
    document.getElementById("showflower").innerHTML=html
}
})
})()

