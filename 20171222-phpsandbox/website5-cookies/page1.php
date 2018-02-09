<?php
  if(isset($_POST['submit'])){
    $username = htmlentities($_POST['username']);

    setcookie('username', $username, time()+3600);

    header('Location: page2.php');
  }
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>PHP Cookies Primer</title>
</head>
<body>
  <form class="" action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">
    <input type="text" name="username" placeholder="Enter Username">
    <br>
    <input type="submit" name="submit" value="Submit">
  </form>

  <h2><a href="page2.php">Page 2</a></h2>
</body>
</html>
