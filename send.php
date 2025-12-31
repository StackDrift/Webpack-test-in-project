
<?php
// Получаем JSON тело запроса
$data = json_decode(file_get_contents('php://input'), true);

$email = $data['email'] ?? '';

// Сохраняем email в файл (опционально)
file_put_contents('emails.txt', $email . PHP_EOL, FILE_APPEND);

// Отправляем на почту
$to = example@provendeveloper.com";
$subject = "Новая подписка";
$message = "Email: $email";
$headers = "From: example@provendeveloper.com";

mail($to, $subject, $message, $headers);

echo "Спасибо! Email сохранён.";
?>
