/**
 * Created by web-01 on 2017/12/3.
 */
$(()=>{
    $.ajax({
        type:"get",
        url:"footer.html"}).then(html=>{document.getElementById("footer").innerHTML=html;})
})