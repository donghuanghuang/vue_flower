<?php
header("Content-Type:application/json");
require("init.php");
$uname = $_REQUEST["uname"];
$upwd = $_REQUEST["upwd"];
$phone = $_REQUEST["phone"];
$email = $_REQUEST["email"];
$sql="INSERT INTO fl_user(uname,upwd,phone,email)
values('$uname','$upwd','$phone','$email')";
$result = mysqli_query($conn,$sql);
if($result==true){
    echo json_encode(1);
}else{
    echo json_encode(0);
}

?>

