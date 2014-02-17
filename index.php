<?php
/*
* This is the launcher, goes to the main controller called handler.php and the application starts
* @ Raul Hernandez Lopez - 2014
*/
$app = require_once __DIR__.'/../src/controllers/handler.php';
$app->run();
