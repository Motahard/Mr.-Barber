<?php

if (isset($_POST['name'])){

$admin_email = "mas280499@yandex.by";
$name = $_POST['name'];
$tel= $_POST['tel'];
$date= $_POST['date'];
$service= $_POST['service'];

mail($admin_email, "name", $name . "telephone" . $tel, "date" . $date, "service" . $service);

header('Location: http://mrbarberl.netlify.com/index.html')
}