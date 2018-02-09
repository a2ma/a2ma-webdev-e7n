<?php
	$path = '/dir0/dir1/myfile.php';

	$file = 'file1.txt';
	$file2 = 'file2.txt';

	/*
	//function called basename to get file name
		echo basename($path);

	//filename without php extension
	echo basename($path, '.php');


	//return dir name from path
	echo dirname($path);

	

	//check if file exists
	echo file_exists($file);
	echo file_exists($file2);

	

	//gets the absolute path:

	echo realpath($file);


	//checks if it is a file, not just if it exists--above can be used for directories, too

	echo is_file($file);


	//check if file is writable

	echo is_writable($file); //returns 1


	//check if file is readable

	echo is_readable($file); //returns 1


	//check file size
	echo filesize($file); //in bytes
	

	//create directory

	mkdir('testing');


	//remove directory -- if EMPTY

	rmdir('testing');


	//copy file

	echo copy('file1.txt', 'file2.txt');


	//rename file

	rename('file2.txt', 'renamed.txt');



	//delete file with unlink command
	unlink('renamed.txt');



	//write from file to string

	echo file_get_contents('file1.txt');



	//write from string to file; replaces previous content

	file_put_contents('file1.txt', 'Goodbye World'); //returns new file size
		

	$current = file_get_contents('file1.txt');

	echo $current;

	$current .= "\nGoodbye World";

	echo file_put_contents('file1.txt', $current);



	//FOpen command - putting a file into a variable called
	//a handle, and then continuous ops can be run on handle

	//Open a file for reading

	$handle = fopen($file, 'r');
	$data = fread($handle, filesize($file));
	echo $data;
	fclose($handle);

	*/

	//Open file for writing
	//can also create a file then write to it
	$handle = fopen('file3.txt', 'w');
	$txt = 'some information we want to write';
	fwrite($handle, $txt);
	$txtadd = "\nmore information that we have decided to add later";
	fwrite($handle, $txtadd);
	//close file when done
	fclose($handle);


