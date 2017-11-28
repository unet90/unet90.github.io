<?php 
header("Content-Type: text/html; charset=utf-8");

$recepient = ($_POST["76f99e31f0cf49020"]);
$sitename = "Арин-Берд";


$email = htmlspecialchars ($_POST["76f99e31f0cf49020"]);
$name = [dyn_inputs];


$message = "Имя: $name \r\n";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\r\n From: $recepient");

//$to = ($_POST["76f99e31f0cf49020"]);
$subject = 'Арин-Берд';
$message = "Спасибо за Вашу заявку! Мы скоро свяжемся с Вами для подтверждения.\r\n Ваш заказ: \r\n \r\n $comment \r\n \r\n \r\n \r\n Администрация Арин-Берд";

$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";

//mail($to, $subject, $message, implode("\r\n", $headers));
