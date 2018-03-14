/**
 * Created by Administrator on 2018/1/5.
 */
(()=>{
    ajax({
        type:"get",
        url:"php/active_allthing.php",
        datatype:"json"
    }).then(result=>{
      var html="";
    for(var p of result){
    html+=`
    <li>
<p><a href="${p.href}"><img src="${p.src}" alt=""></a></p>
    <p>${p.NAME}</p>
    <p>¥${p.price}</p>
        </li>
    `
}
document.getElementById("showflower").innerHTML=html
    })
})()