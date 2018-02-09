<?php

	if(isset($_GET['Name'])){
		// echo $_GET['Name']."<br>";
		// print_r($_GET);
		$name = htmlentities($_GET['Name']);
		// echo $name;
	}

		/*

	if(isset($_POST['Name'])){
		// echo $_POST['Name']."<br>";
		// print_r($_POST);
		$name = htmlentities($_POST['Name']);
		echo $name;
	}

	if(isset($_REQUEST['Name'])){
		// echo $_REQUEST['Name']."<br>";
		// print_r($_REQUEST);
		$name = htmlentities($_REQUEST['Name']);
		echo $name;
	}

	*/

	// echo $_SERVER['QUERY_STRING'];
?>
<!DOCTYPE html>
<html>
<head>
	<title>Get/Post Practice</title>
</head>
<body>
	<form method="GET" action="get_post.php">
		<div>
			<label>Name:</label><br>
			<input type="text" name="Name" required="true">
		</div>
		<div>
			<label>Email:</label><br>
			<input type="Email" name="Email" required="true">
		</div>
		<div>
			<label></label><br>
			<input type="submit" value="Submit">
		</div>
	</form>


	<!-- <form method="POST" action="get_post.php">
		<div>
			<label>Name:</label><br>
			<input type="text" name="Name" required="true">
		</div>
		<div>
			<label>Email:</label><br>
			<input type="Email" name="Email" required="true">
		</div>
		<div>
			<label></label><br>
			<input type="submit" value="Submit">
		</div>
	</form> -->

	<ul>
		<li><a href="get_post.php?Name=Harold">Harold</a></li>
		<li><a href="get_post.php?Name=Maude">Maude</a></li>
	</ul>
	<h1><?php echo "{$name}'s Profile";?></h1>
</body>
</html>