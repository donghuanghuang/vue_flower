<?php
/*
此文件存放点击删除按钮触发的功能
*/
//php/deletecart.php
require_once("init.php");
@$cid=$_REQUEST["cid"];
$sql="delete from flower_cart where cid=$cid";
$result=mysqli_query($conn,$sql);
echo $result;