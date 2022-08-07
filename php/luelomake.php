 <!DOCTYPE html>
<html>
<head>
<title>Lomake</title>
</head>
<body>


<?php
//header('Content-Type: application/json; charset=utf-8');

$myObj = new stdClass();


if (isset($_POST['fname'])){
    $myObj->fname = strval($_POST['fname']);
}
if (isset($_POST['lname'])){
    $myObj->lname =  strval($_POST['lname']);
}
if (isset($_POST['lang'])){
    $myObj->main_lang =  strval($_POST['lang']);
}
// Muu kielitaito
$langs_arr = [];


if (isset($_POST['suomi'])){
    array_push($langs_arr,  strval($_POST['suomi']));
}
if (isset($_POST['ruotsi'])){
    array_push($langs_arr,  strval($_POST['ruotsi']));
}
if (isset($_POST['englanti'])){
    array_push($langs_arr,  strval($_POST['englanti']));
}
if (isset($_POST['saksa'])){
   array_push($langs_arr,  strval($_POST['saksa']));
}
if (isset($_POST['venaja'])){
   array_push($langs_arr,  strval($_POST['venaja']));
}
if (count($langs_arr) > 0) {
    $myObj->secondary_langs = $langs_arr;
}

//----
if (isset($_POST['year'])){
    $myObj->year =  intval($_POST['year']);
}
$myObj->bio = 'No Message';
if (isset($_POST['bio'])){
    $myObj->bio =  strval($_POST['bio']);
}
if (isset($_POST['color'])){
    $myObj->color =  strval($_POST['color']);


}
if (isset($_POST['date'])){
    $myObj->date =  strval($_POST['date']);
}
if (isset($_POST['email'])){
    $myObj->email =  strval($_POST['email']);
}
if (isset($_POST['password'])){
    $myObj->password =  (strval($_POST['password']));
}

$encoded = json_encode($myObj);

$obj = json_decode($encoded);

// Loop through the object
foreach($obj as $key=>$value){

    if ($key == 'secondary_langs'){
        echo $key . " => ";
         echo '<br><ul>' ;

         foreach ($value as $item){
             echo '<li>'.$item.'</li>';
         }
         echo '</ul>';

    }
    else if ($key == 'color'){
        echo $key . " => "."<span style='background-color:".strval($_POST['color'])."'>".$value.'</span><br>';

    }
    else{
      echo $key . " => " . $value . "<br>";
    }

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
