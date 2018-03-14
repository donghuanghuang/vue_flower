<?php
header("Content-Type:application/json");
require_once("init.php");
session_start();
@$uid=$_SESSION["uid"];
@$sql="SELECT * FROM fl_receiver_address where uid=$uid";
$result=mysqli_query($conn,$sql);
@$row=mysqli_fetch_all($result,1);
echo json_encode($row);