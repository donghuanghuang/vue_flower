/**
 * Created by web-01 on 2017/12/6.
 */
(()=>{
    var fourth_start=parseInt(document.getElementById("fourth_start").innerHTML),
    five_end=parseInt(document.getElementById("five_end").innerHTML),
    third_price=document.getElementById("third_price");
ajax({
    type:"get",
    url:"php/price_range.php",
    data:"price_start="+fourth_start+"&price_end="+five_end,
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
third_price.onclick=function(){
    document.getElementById("showflower").innerHTML=html
}
})
})()

