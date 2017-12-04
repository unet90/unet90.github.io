<?php 
header("Content-Type: text/html; charset=utf-8");

$recepient = ($_POST["sendmess"]);
$sitename = "Арин-Берд";
    
//$email = htmlspecialchars ($_POST["sendmess"]);

//$data = "document.write(localStorage.getItem('imprs'))";


$name = ($_POST["number_person"]);

echo $_COOKIE["im-prs"];

//echo '<div class="constructor_result_menu_list_all">';
//$name = json_decode($_POST["constructor_result_menu_list_all"]);
//$data = ($_REQUEST['constructor_result_menu_list_all']);
//$json_string = json_encode($data, JSON_PRETTY_PRINT);
//$name = ($_POST["constructor_result_menu_list_all"]); 
echo "Значение параметра id данного элемента: $name, $data, $json_string, $json"; 

$message = "Имя: $name \r\n DATA: $data \r\n STRING: $json_string";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\r\n From: $recepient");

//$to = ($_POST["sendmess"]);
$subject = 'Арин-Берд';
$message = "Спасибо за Вашу заявку! Мы скоро свяжемся с Вами для подтверждения.\r\n Ваш заказ: \r\n \r\n $comment \r\n \r\n \r\n \r\n Администрация Арин-Берд";

$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";

//mail($to, $subject, $message, implode("\r\n", $headers));
?>