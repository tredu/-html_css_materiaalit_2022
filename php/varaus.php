
<!DOCTYPE html>
<html>
<head>
<title>Pöytävaraus</title>
</head>
<body>
<h1>Kiitos varauksestanne!</h1>

<?php
//header('Content-Type: application/json; charset=utf-8');

$myObj = new stdClass();
$nodata = '[no data]';
    $myObj->name = $nodata;
if (isset($_POST['name'])){
    $myObj->name = strval($_POST['name']);
}    $myObj->phone = $nodata;
if (isset($_POST['phone'])){
    $myObj->phone = strval($_POST['phone']);
}   $myObj->email = $nodata;
if (isset($_POST['email'])){
    $myObj->email =  strval($_POST['email']);
}
   $myObj->date = $nodata;
if (isset($_POST['date'])){
    $myObj->date =  strval($_POST['date']);
}
$myObj->time = $nodata;
if (isset($_POST['time'])){
    $myObj->time =  strval($_POST['time']);
}
$myObj->details = $nodata;
if (isset($_POST['details'])){
    $myObj->details =  strval($_POST['details']);
}



$encoded = json_encode($myObj);

$obj = json_decode($encoded);

// Loop through the object
foreach($obj as $key=>$value){
    echo $key . " => " . $value . "<br>";
}
?>

<hr>
<?php
echo "<pre>";
echo json_encode($myObj, JSON_PRETTY_PRINT);
echo "</pre>";
?>
</body>
</html>
