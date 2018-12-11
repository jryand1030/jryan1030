<?php
/*SendGrid Library*/
require 'vendor/autoload.php';

$name=$_POST['name'];
$sender=$_POST['email'];
$message=$_POST['message'];


$from= 'From: Ryandionne.ca';
$to= 'ryandionne.ca@gmail.com';
$subject='You have mail!';

$email = new \SendGrid\Mail\Mail();
$email->setFrom("test@example.com", "Potential client");
$email->setSubject("You have mail");
$email->addTo("ryandionne.ca@gmail.com", "Me");
$email->addContent(
    "text/html", 
    "<h2>From:{$name}</h2>".
    "<h2>sender:</h2>{$sender}".
    "<h3>message:</h3><br>
    {$message}"
);
$apikey = getenv('SENDGRID_API_KEY');
$sendgrid = new \SendGrid($apikey);
try {
    $response = $sendgrid->send($email);
    print $response->statusCode() . "\n";
    print_r($response->headers());
    print $response->body() . "\n";
} catch (Exception $e) {
    echo 'Caught exception: ',  $e->getMessage(), "\n";
}

header('location:thanks.html');



?>