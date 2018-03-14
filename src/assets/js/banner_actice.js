/**
 * Created by Administrator on 2017/12/29.
 */
$(()=>{
    $.ajax({
    type:"get",
    url:"http://localhost/vue_flower/tpls/src/assets/php/banner.php",
    dataType:"json"
    }).then(result=>{
        console.log(result);
        var html=""
    html+=`
    <img src="${result[0].img}" class="show" alt="">
    <img src="${result[1].img}" alt="">
    <img src="${result[2].img}" alt="">
    <img src="${result[3].img}" alt="">
    `
document.getElementById("banner").innerHTML=html;
    })
})



