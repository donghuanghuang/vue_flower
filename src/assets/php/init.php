<?php
    header('Access-Control-Allow-Origin:http://localhost:8080');
    header('Access-Control-Allow-Credentials:true');
    $conn=mysqli_connect("127.0.0.1","root","","flower",3306);
    $sql="SET NAMES UTF8";
    mysqli_query($conn,$sql);
?>

