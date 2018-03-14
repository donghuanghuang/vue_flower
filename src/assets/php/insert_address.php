<?php
require_once("init.php");
session_start();
$uid=$_SESSION["uid"];
@$receiver=$_REQUEST["receiver"];
@$address=$_REQUEST["address"];
@$cellphone=$_REQUEST["cellphone"];
$sql="INSERT INTO fl_receiver_address(receiver,address,cellphone) VALUES('$receiver','$address','$cellphone')";
$result=mysqli_query($conn,$sql);
if($result==true){
  echo '{"code":1,"msg":"增加地址成功"}';
}else{
  echo '{"code":-1,"msg":"增加地址失败"}';
}