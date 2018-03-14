<?php
header("Content-type:application/json;charset=utf-8");
require_once("init.php");
@$kw=$_REQUEST['kw'];
if(!$kw)
	die("[]");
$sql="select fid,NAME,sale_count,price from flower_mes where NAME like '%$kw%';";
$result=mysqli_query($conn,$sql);
$row=mysqli_fetch_all($result,1);
echo json_encode($row);












