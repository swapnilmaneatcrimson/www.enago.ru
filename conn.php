<?php
$conn = mysql_connect("db143b.pair.com","crimsoni_17","68F09dL3a") or die("could not connect to server");

mysql_set_charset('utf8',$conn); 

mysql_select_db("crimsoni_testimonials",$conn) or die("could not connect to database");


?>
