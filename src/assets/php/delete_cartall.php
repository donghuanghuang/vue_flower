<?php
/*
此文件存放点击删除按钮触发删除所有购物车商品的功能
*/
//php/delete_cartall.php
require_once("init.php");
$sql="delete from flower_cart";
$result=mysqli_query($conn,$sql);
echo $result;