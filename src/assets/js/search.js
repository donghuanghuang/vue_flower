/**
 * Created by Administrator on 2018/1/23.
 */
/*为搜索框绑定事件  搜索帮助*/

$("#txtSearch").on("change focus keyup",function(){
    var kw =$("#txtSearch").val();
    console.log($("#txtSearch"))
    console.log(1)
    if(kw==""){
        $(".seachtxt>ul").addClass('hide').html("");
    }else{
        $.ajax({
            url:"php/search_prompt.php",
            data:{kw:kw},
            type:"get",
            success:function(data) {
                console.log(data)
                /*
                if (data.length == 0 || data == [])
                    return;
                else {
                    var html = "";
                    for (var x in data) {
                        var d = data[x];
                        html += `<li data-fid="${d.fid}">${d.NAME} <span class="fr">${d.price} </span></li>`;
                    }
                    $(".seachtxt>ul").removeClass('hide').html(html);

                }
                */
            }
        });
    }
});