<?php 
header("Content-Type: text/html; charset=utf-8");

$recepient = "vladi4ek1990@mail.ru";
$sitename = "Арин-Берд";

$name = htmlspecialchars ($_POST["name"]);
$phone = htmlspecialchars ($_POST["phone"]);
$message = "Имя: $name \nТелефон: $phone \n";

$pagetitle = "Заказ звонка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

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

// создание строки запроса
$query ="INSERT INTO arin VALUES(NULL,'$name','$phone',NOW())";

// выполняем запрос
$result = mysqli_query($link, $query) or die("Ошибка " . mysqli_error($link)); 
if($result)
{
    echo "<span style='color:#fab940; background-color:black; font-size:1.5em; font-family:Philosopher, sans-serif'>Данные добавлены</span>";
}


// закрываем подключение
mysqli_close($link);




?>