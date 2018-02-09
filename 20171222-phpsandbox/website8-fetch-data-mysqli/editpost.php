<?php
	require('config/config.php');
	require('config/db.php');


	//check for submission
	if(isset($_POST['submit'])){
		//get form data
		$update_id = mysqli_real_escape_string($conn, $_POST['update_id']);
		$title = mysqli_real_escape_string($conn, $_POST['title']);
		$body = mysqli_real_escape_string($conn, $_POST['body']);
		$author = mysqli_real_escape_string($conn, $_POST['author']);

		$query = "UPDATE posts SET 
					title = '$title',
					author = '$author',
					body = '$body'
						WHERE id = {$update_id}";

		// die($query); //prints out values to see problems

		if(mysqli_query($conn, $query)){
			header('Location: '.ROOT_URL.'');
		}else{
			echo 'ERROR: '.mysqli_error($conn);
		}
	}

	//get ID - the wrapping function escapes any dangerous characters
	$id = mysqli_real_escape_string($conn, $_GET['id']);

	//create query
	$query = 'SELECT * FROM posts WHERE id = '.$id;

	//get result
	$result = mysqli_query($conn, $query);

	//Fetch Data - takes the one post result and returns it as an associative array
	$post = mysqli_fetch_assoc($result);

	// var_dump($posts);

	//free result from memory
	mysqli_free_result($result);

	//close connection
	mysqli_close($conn);


?>

	<?php include('inc/header.php'); ?>
			<div class="container">
				<h1>Write Post</h1>
				<form method="POST" action="<?php $_SERVER['PHP_SELF']; ?>">
					<div class="form-group">
						<label>Title</label>
						<input type="text" name="title" class="form-control" required="true" value="<?php echo $post['title']; ?>">
					</div>
					<div class="form-group">
						<label>Author</label>
						<input type="text" name="author" class="form-control" required="true" value="<?php echo $post['author']; ?>">
					</div>
					<div class="form-group">
						<label>Body</label>
						<textarea name="body" class="form-control" required="true"><?php echo $post['body']; ?></textarea>
					</div>
					<input type="hidden" name="update_id" value="<?php echo $post['id']; ?>">
					<input type="submit" name="submit" value="submit" class="btn btn-primary">
				</form>
			</div>
	<?php include('inc/footer.php'); ?>
