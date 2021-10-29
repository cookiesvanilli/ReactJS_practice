<?php
header("Access-Control-Allow-Origin: *");

$content = trim(file_get_contents("php://input"));
$content = json_decode($content, true);
switch ($content['action']) {
    case 1:
        echo date('Y H:i:s');
        break;
    case 2:
        echo rand($content['num1'], $content['num2']);
        break;
    case 3:
        echo (file_put_contents('files/'.$content['filename'], $content['filedata']));
        break;
    case 4:
        echo php_uname();
        break;
    case 5: 
        echo file_get_contents('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=11');
    break;
    default:
       echo "check parametrs";
}