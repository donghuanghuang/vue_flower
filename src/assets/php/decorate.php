<?php
header("Content-Type,application/json");
require_once("init.php");
$sql="select * from fl_index_decorate_product";
$result=mysqli_query($conn,$sql);
$decorate=mysqli_fetch_all($result,1);
echo json_encode($decorate);
