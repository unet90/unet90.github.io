<?php 
//header("Content-Type: text/html; charset=utf-8");

$recepient = "vladi4ek1990@mail.ru";
$sitename = "Арин-Берд";

$name = htmlspecialchars ($_POST["name"]);
$email = htmlspecialchars ($_POST["email"]);
$phone = htmlspecialchars ($_POST["phone"]);
$comment = htmlspecialchars ($_POST["comment"]);
$message = "Имя: $name \r\n Email: $email \r\n Телефон: $phone \r\n Текст: $comment";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message);

$to = ($_POST["email"]);
$subject = 'Арин-Берд';
$message = "Спасибо за Вашу заявку! Мы скоро свяжемся с Вами для подтверждения.\r\n Ваш заказ: \r\n \r\n $comment \r\n \r\n \r\n \r\n Администрация Арин-Берд";

$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";

mail($to, $subject, $message, implode("\r\n", $headers));

//$link = new mysqli("127.0.0.1", "root", "", "arinberd");
//$mysqli = new mysqli("127.0.0.1", "root", "", "arinberd", 3306);
//$mysqli->query("INSERT INTO test(id) VALUES('$name', '$phone')";

//$link = new mysqli("127.0.0.1", "root", "", "arinberd",3306);
//$mysqli = new mysqli("127.0.0.1", "root", "", "arinberd", 3306);


// подключаем скрипт
require_once 'connection.php';


// подключаемся к серверу
$link = mysqli_connect($host, $user, $password, $database)
    or die("Ошибка" . mysqli_error($link));

// выполняем операции с базой данных


// экранирования символов для mysql
$name = htmlentities(mysqli_real_escape_string($link, $_POST['name']));
$phone = htmlentities(mysqli_real_escape_string($link, $_POST['phone']));
$email = htmlentities(mysqli_real_escape_string($link, $_POST['email']));
$comment = htmlentities(mysqli_real_escape_string($link, $_POST['comment']));

// создание строки запроса
$query ="INSERT INTO comment VALUES(NULL,'$name','$phone','$email','$comment',NOW())";

// выполняем запрос
$result = mysqli_query($link, $query) or die("Ошибка " . mysqli_error($link)); 
if($result)
{
    echo "<span style='color:#fab940; background-color:black; font-size:1.5em; font-family:Kurale, sans-serif'>Данные добавлены</span>";
}


// закрываем подключение
mysqli_close($link);




?>