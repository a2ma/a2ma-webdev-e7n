<?php
    if(isset($_POST['submit'])){
      session_start(); //start the session
      $_SESSION['name'] = htmlentities($_POST['name']);
      $_SESSION['email'] = htmlentities($_POST['email']);

	  header('Location: page2.php');
    }
?>

<!DOCTYPE html>
<html>
<head>
	<title>PHP Sessions 1</title>
</head>
<body>
	<form method="POST" action="<?php echo $_SERVER['PHP_SELF']; ?>">
		<input type="text" name="name" placeholder="Name">
		<input type="Email" name="email" placeholder="Email">
		<input type="submit" name="submit" value="submit">
	</form>
</body>
</html>
