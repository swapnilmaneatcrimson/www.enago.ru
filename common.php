<?php
//--------------------------- Config file for REQUEST and AUTO and COntact FORM -------------

// Always set content-type when sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/plain; charset=UTF-8" . "\r\n";

//all forms
$tod = "russiauploads@enago.com, alluploads@crimsonjapan.co.jp"; // to the people in the company
$fromAdd= "russiauploads@enago.com"; //from which address
$clientfromAdd= "DO_NOT_REPLY@enago.com"; //client email from address

//VCS
//$replyvcs="uploads@enago.com";
//$tovcs="lyazzat.ilimkhanova@gmail.com"; //lyazzats email address for vcs purposes
//VCS END


$ratepdf=0;
$rateexcel=15;
$ratelatex=0;
$ratelatextotex=30;

//advance editing
$advratepdf=0;
$advrateexcel=15;
$advratelatex=0;
$advratelatextotex=30;
?>