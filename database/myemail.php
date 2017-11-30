<?php 
header("Content-Type: text/html; charset=utf-8");

$recepient = ($_POST["self_email"]);
$sitename = "Арин-Берд";

//var_dump($_POST['ghpuformbg']);

$json = '{"constructor_menu_body"}';
print_r($arr);
var_dump(json_decode($json));
//var_dump(json_decode($json, true));


$email = htmlspecialchars ($_POST["self_email"]);
$name = json_decode($_POST['constructor_menu_body']);
//$name = json_decode(stripslashes($_COOKIE['constructor_menu_body']),true);



$message = "Имя: $name \r\n";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\r\n From: $recepient");

//$to = ($_POST["self_email"]);
$subject = 'Арин-Берд';
$message = "Спасибо за Вашу заявку! Мы скоро свяжемся с Вами для подтверждения.\r\n Ваш заказ: \r\n \r\n $comment \r\n \r\n \r\n \r\n Администрация Арин-Берд";

$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";

//mail($to, $subject, $message, implode("\r\n", $headers));
