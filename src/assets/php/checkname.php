<?php
header("Content-Type:application/json");
@$uname = $_REQUEST["uname"];
require("init.php");
$sql="select * from fl_user where uname = '$uname'";
$result = mysqli_query($conn,$sql);
$row = mysqli_fetch_row($result);
if($row==null){
    echo json_encode(0);
}else{
    echo json_encode(1);
}
?>

