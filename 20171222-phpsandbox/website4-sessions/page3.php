<?php
  session_start();

  // $_SESSION['name'] = 'John Doe'; //Sessions vars can be updated at any time
  print_r($_SESSION);

  $name = isset($_SESSION['name'])? $_SESSION['name']: 'Guest';
  $email = isset($_SESSION['email'])? $_SESSION['email']: 'Not subscribed';
 ?>


 <!DOCTYPE html>
 <html lang="en">
 <head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <meta http-equiv="X-UA-Compatible" content="ie=edge">
   <title>PHP Sessions 3</title>
 </head>
 <body>
   <h1>Hello, <?php echo $name; ?> </h1>
   <h2><a href="page4.php">Page 4</a></h2>
 </body>
 </html>
