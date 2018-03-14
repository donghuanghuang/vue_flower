<?php
header("Content-Type,application/json");
require_once("init.php");
$sql="select * from fl_index_banner";
$result=mysqli_query($conn,$sql);
$banner=mysqli_fetch_all($result,1);
echo json_encode($banner);


