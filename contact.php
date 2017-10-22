<?php
header('Content-Type: text/html; charset=utf-8');

$method = $_SERVER['REQUEST_METHOD'];
/* Осуществляем проверку вводимых данных и их защиту от враждебных 
скриптов */
$name = htmlspecialchars($_POST["name"]);
$mail = htmlspecialchars($_POST["mail"]);
$comment = htmlspecialchars($_POST["comment"]);
/* Устанавливаем e-mail адресата */
$myemail = "vladi4ek1990@mail.ru";
/* Проверяем заполнены ли обязательные поля ввода, используя check_input 
функцию */
$name = check_input($_POST["name"], "Введите ваше имя!");
$mail = check_input($_POST["mail"], "Введите ваш e-mail!");
$comment = check_input($_POST["comment"], "Вы забыли написать сообщение!");
/* Проверяем правильно ли записан e-mail */
//if (!preg_match("/([\w\-]+\@[\w\-]+\.[\w\-]+)/", $mail))
//{
//show_error("<br /> Е-mail адрес не существует");
//}
/* Создаем новую переменную, присвоив ей значение */
$message_to_myemail = "Здравствуйте! 
Вашей контактной формой было отправлено сообщение! 
Имя отправителя: $name 
E-mail: $mail 
Текст сообщения: $comment
Конец";
/* Отправляем сообщение, используя mail() функцию */
$from  = "From: $name <$mail> \r\n Reply-To: $mail \r\n"; 
mail($myemail, $comment_to_myemail, $from);
?>
<p>Ваше сообщение было успешно отправлено!</p>
<p>На <a href="index.html">Главную >>></a></p>
<?php
/* Если при заполнении формы были допущены ошибки сработает 
следующий код: */
function check_input($data, $problem = "")
{
$data = trim($data);
$data = stripslashes($data);
$data = htmlspecialchars($data);
if ($problem && strlen($data) == 0)
{
show_error($problem);
}
return $data;
}
function show_error($myError)
{
?>
<html>
<body>
<p>Пожалуйста исправьте следующую ошибку:</p>
<?php echo $myError; ?>
</body>
</html>
<?php
exit();
}
?>