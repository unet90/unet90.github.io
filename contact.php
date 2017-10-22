<?php

$recepient = "vladi4ek1990@gmail.com";
$sitename = "Арин-Берд";

$name = trim($_POST["name"]);
$mail = trim($_POST["mail"]);
$comment = trim($_POST["comment"]);
$message = "Имя: $name \nТелефон: $mail \nТекст: $comment";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");