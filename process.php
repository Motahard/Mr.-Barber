<?php

if (isset($_POST['name'])){

$admin_email = "mas280499@gmail.com";
$name = $_POST['name'];
$tel= $_POST['tel'];
$date= $_POST['date'];
$service= $_POST['service'];

mail($admin_email, "Service", $service ,'telephone' , $tel, 'date' , $date, "From:" , $name);

header('Location: http://mrbarberl.netlify.com/index.html')
}
?>