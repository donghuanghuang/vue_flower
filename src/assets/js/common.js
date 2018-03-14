/**
 * Created by Administrator on 2017/9/11.
 */
function createXhr(){
    if(window.XMLHttpRequest)
        return new XMLHttpRequest();
    else
        return new ActiveXObject("Microsoft.XMLHttp");
}