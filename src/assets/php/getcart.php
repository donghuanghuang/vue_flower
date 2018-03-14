<?php
//php/getcart.php
/*
SELECT fc.cid,fc.fid,fm.href,fm.src,fm.price,fm.sale_count,fm.NAME,fp.small
FROM flower_cart as fc,flower_mes_photo as fp,flower_mes as fm
WHERE fc.fid=fp.fid and fp.fid=fm.fid and fc.uid=$uid
*/
header("Content-Type:application/json");
require_once("init.php");
session_start();
@$uid=$_SESSION["uid"];
$sql="SELECT fc.cid,fc.fid,fm.href,fm.price,fm.sale_count,fm.NAME,fp.small,fc.count
      FROM flower_cart as fc,flower_mes_photo as fp,flower_mes as fm
      WHERE fc.fid=fp.fid and fp.fid=fm.fid and fc.uid=$uid";
$result=mysqli_query($conn,$sql);
echo json_encode(mysqli_fetch_all($result,1));