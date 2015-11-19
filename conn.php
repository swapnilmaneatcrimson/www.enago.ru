<?php
$conn = mysql_connect("localhost","user_testimonial","ZdnsYMQdDruVnv3j") or die("could not connect to server");

mysql_set_charset('utf8',$conn); 

mysql_select_db("testimonials_accepted",$conn) or die("could not connect to database");


?>
