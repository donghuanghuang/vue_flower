<?php
//php/addcart.php
require_once("init.php");
session_start();
@$uid=$_SESSION["uid"];
@$fid=$_REQUEST["fid"];
@$count=$_REQUEST["count"];
$sql="select * from flower_cart where uid=$uid and fid=$fid";
$result=mysqli_query($conn,$sql);
@$row=mysqli_fetch_row($result);
if($row==null){
	$sql="insert into flower_cart (uid, fid, count) values ($uid,$fid,$count)";
	echo '{"code":1,"msg":"插入成功"}';
	}
else{
	$sql="update flower_cart set count=count+$count where uid=$uid and fid=$fid";
		echo '{"code":2,"msg":"更新成功"}';
		}
mysqli_query($conn,$sql);