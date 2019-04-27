<?php
$name = $_POST['name'];
$tel= $_POST['tel'];
$date= $_POST['date'];
$service= $_POST['service'];

if (mail("mas280499@myandex.by", "Заявка с сайта", "Имя:".$name.". Телефон: ".$tel , ". Date: ".$date ,". Услуга: ".$service ,"From: example2@mail.ru \r\n"))
{ 
  echo "сообщение успешно отправлено"; 
} 
else { 
  echo "при отправке сообщения возникли ошибки"; 
}
?>