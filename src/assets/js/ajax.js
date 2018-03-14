/**
 * Created by web-01 on 2017/12/3.
 */
function ajax({type,url,data,datatype}){
    return new Promise(callback=>{
            var xhr = createXhr();
    if(type.toLowerCase()=="get"&&data!==undefined){
        url+="?"+data
    }
    xhr.open(type,url,true)
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4&&xhr.status==200){
            //接收响应数据
            var resdata=xhr.responseText;
            //如果响应信息的类型是json
            if(datatype!==undefined&&datatype.toLowerCase()=="json"){
                var resdata=JSON.parse(resdata)
            }
            //否则
            callback(resdata)
            //就直接返回restext
        }
    }
    if(type.toLowerCase()==="post"){
        xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded")
    }
    xhr.send(type.toLowerCase()=="get"?null:data)
})
}


