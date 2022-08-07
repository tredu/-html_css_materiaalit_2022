<?php
header('Content-Type: application/json; charset=utf-8');

$myObj = new stdClass();
$myObj->message = 'No Message';

if (isset($_POST['name'])){
    $myObj->name = strval($_POST['name']);
}
if (isset($_POST['email'])){
    $myObj->email = strval($_POST['email']);
}
if (isset($_POST['date'])){
    $myObj->date = strval($_POST['date']);
}
if (isset($_POST['message'])){
    $myObj->message = strval($_POST['message']);
}

echo json_encode($myObj);
