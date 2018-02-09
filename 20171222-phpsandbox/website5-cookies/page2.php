<?php
  setcookie('username', 'Frank', time() + (86400* 30));
  //delete cookies
  // setcookie('username', 'Frank', time() - 1);

  if(count($_COOKIE) > 0){
    echo "There are ".count($_COOKIE)." cookies saved.<br>";
    foreach ($_COOKIE as $cookie) {
      print_r($cookie);
      echo "<br>";
    }
  }else{
    echo "There are no cookies saved.";
  }
  if(isset($_COOKIE['username'])){
    echo 'User \'<strong>'.$_COOKIE['username'].'\'</strong> is set.<br>';
  }else{
    echo 'User not set';
  }
?>



<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>

</body>
</html>
