<?php
header("Content-Type:application/json");
require("init.php");
@$price_start = $_REQUEST["price_start"];
@$price_end = $_REQUEST["price_end"];
$sql="select * from flower_mes where price>=$price_start and price<=$price_end;";
$result=mysqli_query($conn,$sql);
@$product=mysqli_fetch_all($result,1);
echo json_encode($product);
