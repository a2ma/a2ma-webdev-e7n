<?php 
	if(filter_has_var(INPUT_POST, 'data')){
		echo 'Data found.';
	}else{
		echo 'Data not found.';
	}

	if(filter_has_var(INPUT_POST, 'data')){
		$email = $_POST['data'];

		//remove illegal characters:

		$email = filter_var($email, FILTER_SANITIZE_EMAIL);

		echo $email.'<br>';

		if(filter_input(INPUT_POST, 'data', FILTER_VALIDATE_EMAIL)){
			echo "Email is valid.";
		}else{
			echo "Email is not valid.";
		}
	}

	$var = 22;
	//works also for: $var = '234';

	if(filter_var($var, FILTER_VALIDATE_INT)){
		echo $var.' is a number.';
	}else{
		echo $var.' is not a  number.';
	}

	//sanitize number:

	$var2 = '23432lkjl2kj34lkj234';

	$var2sanitized = filter_var($var2, FILTER_SANITIZE_NUMBER_INT);

	var_dump($var2sanitized);

	echo "<br><br>";

	$injection = '<script>alert(\'YOU HAVE BEEN HACKED\')</script>';
	// echo $injection;

	echo filter_var($injection, FILTER_SANITIZE_SPECIAL_CHARS);

	$filters = array(
		"data" => FILTER_VALIDATE_EMAIL,
		"data2" => array(
			"filter" => FILTER_VALIDATE_INT,
			"options" => array(
				"min_range" => 1,
				"max_range" => 100
			)
		)
	);

	print_r(filter_input_array(INPUT_POST, $filters));

	$personal = array(
		"name" => "henrik lacks",
		"age" => 55,
		"email" => "henrik@sbs.net" 
	);

	$filters2 = array(
		"name" => array(
			"filter" => FILTER_CALLBACK,
			"options" => "ucwords"
		),
		"age" => array(
			"filter" => FILTER_VALIDATE_INT,
			"options" => array(
				"min_range" => 1,
				"max_range" => 100
			)
		),
		"email" => FILTER_VALIDATE_EMAIL
	);

	print_r(filter_var_array($personal, $filters2))
?>
<!DOCTYPE html>
<html>
<head>
	<title>Form Filters & Validation</title>
</head>
<body>
	<br><br>
	<form method="POST" action="<?php echo $_SERVER['PHP_SELF']; ?>">
		<input type="email" name="data" placeholder="Enter Data Here" required="true">
		<input type="text" name="data2" placeholder="Enter Data Here" required="true">
		<button type="Submit">Submit</button>
	</form>
</body>
</html>