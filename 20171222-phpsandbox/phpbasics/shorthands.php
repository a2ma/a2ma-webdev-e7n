<?php 
	$loggedIn = false;

	// if($loggedIn){
	// 	echo 'You are logged in.';
	// }else{
	// 	echo 'You are NOT logged in.';
	// }

	echo ($loggedIn) ? 'You are logged in' : 'You are NOT logged in';

	$isRegistered = ($loggedIn == true) ? true : false;

	echo $isRegistered;

	$age = 20;
	$score = 20;

	echo 'Your score is '.($score > 10 ? ($age > 10 ? 'average ': 'exceptional ') : ($age > 10 ? 'horrible ' : 'average '));

	$arr = array(1,2,3,4,5);
?>

<!DOCTYPE html>
<html>
<head>
	<title>Shorthands in PHP</title>
</head>
<body>
	<div>
		<?php if($loggedIn)	{?>
			<h1>Welcome, User!</h1>
		<?php } else {?>
			<h1>Welcome, guest.</h1>
		<?php } ?>
	</div>

	<div>
		<?php if($loggedIn): ?>
			<h1>Welcome, User!</h1>
		<?php else: ?>
			<h1>Welcome, Guest!</h1>
		<?php endif; ?>
	</div>

	<div>
		<?php foreach($arr as $val): ?>
			<ul>
				<li><?php echo $val; ?></li>
			</ul>
		<?php endforeach; ?>
	</div>
</body>
</html>