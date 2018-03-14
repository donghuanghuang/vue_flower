function alertMsg(title,msg,isConfirm,btn1,btn2,callback){
    var dialog= $("#alertmsg");
    dialog.find(".modal-title").html(title);
    dialog.find(".modal-body").html(msg);
    dialog.find(".modal-footer>button:eq(0)").html(btn1);
    if(!isConfirm){
        dialog.find(".modal-footer>button:eq(1)").addClass("hide");
        dialog.find(".modal-footer>button:eq(0)").html(btn2).on("click",callback);
    }else{
        dialog.find(".modal-footer>button:eq(1)").html(btn2).on("click",callback);
    }
    dialog.modal("show");
}

