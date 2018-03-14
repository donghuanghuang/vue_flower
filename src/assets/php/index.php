<?php
header("Content-Type,application/json");
require_once("init.php");
       $sql="SELECT * FROM fl_index_update_product";
       $result=mysqli_query($conn,$sql);
       $product=mysqli_fetch_all($result,1);
 echo json_encode($product);








