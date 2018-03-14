<?php
header("Content-Type:application/json");
require_once("init.php");
@$aid=$_REQUEST["aid"];
@$sql="DELETE FROM fl_receiver_address where aid=$aid";
$result=mysqli_query($conn,$sql);
if($result){
    echo '{"code":1,"msg":"删除成功"}';
}else{
    echo '{"code":-1,"msg":"删除失败"}';
}