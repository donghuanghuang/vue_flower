/**
 * Created by Administrator on 2017/12/29.
 */
/**
 * Created by Administrator on 2017/12/29.
 */
$(()=>{
    $.ajax({
        type:"get",
        url:"http://localhost/vue_flower/tpls/src/assets/php/index.php",
        dataType:"json"
    }).then(result=>{
        var html=""
        console.log(result);
        html+=`
<ul>
<li>
<p><a href="${result[0].href}"><img src="${result[0].src}" alt=""></a></p>
<p>${result[0].name}</p>
<p>¥${result[0].price}</p>
</li>

<li>
<p><a href="${result[1].href}"><img src="${result[1].src}" alt=""></a></p>
<p>${result[1].name}</p>
<p>¥${result[1].price}</p>
</li>

<li>
<p><a href="${result[2].href}"><img src="${result[2].src}" alt=""></a></p>
<p>${result[2].name}</p>
<p>¥${result[2].price}</p>
</li>

<li>
<p><a href="${result[3].href}"><img src="${result[3].src}" alt=""></a></p>
<p>${result[3].name}</p>
<p>¥${result[3].price}</p>
</li>
</ul>
`
document.getElementById("today").innerHTML=html;
})
})



