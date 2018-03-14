<?php
//php/updatecount.php
require_once("init.php");
@$cid=$_REQUEST["cid"];
@$count=$_REQUEST["count"];
if($cid!=null&&$count!=null){
	if($count==0)
		$sql="delete from flower_cart where cid=$cid";
	else
		$sql="update flower_cart set count=$count where cid=$cid";
	mysqli_query($conn,$sql);
	echo '{"mes":"更新成功"}';
}