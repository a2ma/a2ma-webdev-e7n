<?php
  $user = ['name' => 'Brad', 'email' => 'test@testy.com', 'age' => 323];

  $userCooked = serialize($user);

  setcookie('user', $userCooked, time() + (86400 * 30));

  echo $_COOKIE['user'];
  echo "<br>";

  $userRegained = unserialize($_COOKIE['user']);
  echo $userRegained['name'];
  echo "<br>";
  print_r($userRegained);
?>
