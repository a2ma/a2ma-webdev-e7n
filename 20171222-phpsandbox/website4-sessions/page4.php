<?php
  session_start();
  unset($_SESSION['name']);

  session_destroy();
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Session Variables: Unset</title>
</head>
<body>
  <h2><a href="page3.php">Page 3</a></h2>
</body>
</html>
