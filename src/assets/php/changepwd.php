<?php
session_start();
require_once("init.php");
$uid=$_SESSION["uid"];
@$opwd=$_REQUEST["opwd"];
@$npwd=$_REQUEST["npwd"];
@$spwd=$_REQUEST["spwd"];
$sql1="select upwd from fl_user where uid=$uid";
$result=mysqli_query($conn,$sql1);
$row=mysqli_fetch_assoc($result);
$psd=$row["upwd"];
if($npwd===$spwd){
$sql="update fl_user set upwd='$npwd' where uid=$uid and $psd='$opwd'";
}
$result=mysqli_query($conn,$sql);
$success=["code"=>1,"msg"=>"更新密码成功","psd"=>$psd];
$fail=["code"=>-1,"msg"=>"更新密码失败","psd"=>$psd];
if($psd==$opwd){
    echo json_encode($success);
    }
    else{
  echo json_encode($fail);
    }
