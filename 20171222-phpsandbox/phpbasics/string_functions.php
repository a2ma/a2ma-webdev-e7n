<?php 
	#substr - returns a seleection from a string
	
	$output = substr("Hello", 1);
	$output2 = substr("Hello", 1, 3);
	$output3 = substr("Hello", -2);

	echo $output.'<br>';
	echo $output2.'<br>';
	echo $output3.'<br>';

	#strlen() - returns the length of a string

	$length = strlen('Hello, what have we here?');
	echo $length.'<br>';

	#strpos() - returns first occurence of a sub-string

	$first_occ = strpos('Roger roger!', 'g');

	echo $first_occ.'<br>';
	
	#strrpos() - returns last occurence of a sub-string

	$last_occ = strrpos('Roger roger!', 'g');

	echo $last_occ.'<br>';

	#trim() - cuts away whitespace

	$text = 'Here there be whitespace                  ';

	$trimmedtext = trim($text);

	echo $text.': '.$trimmedtext.'<br>'; //there appears to be no difference when echoing.

	var_dump($text);
	var_dump($trimmedtext);

	#strtoupper - turns every alphabetical character in a string to upper-case
	$upperized = strtoupper($text);

	echo $upperized.'<br>';

	#strtolower()

	# ucwords() - capitalizes each word

	# str_replace(<original>, <replacement>, <target string>); - replace ALL occurences of search string with replacement

	# is_string() - checks if given argument is a string - returns 1 if string, and nothing if not.

	$values = array(true, false, null, 'abd', 33, '33', 22.4, '22.4','', ' ', 0, '0');

	foreach($values as $value){
		if(is_string($value)){
			echo "{$value} is a string<br>";
		}
	}


	# gzcompress(); - compress a string

	$reallylongstring = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc...";

	$compressedstring = gzcompress($reallylongstring);

	echo $compressedstring.'<br><br>';

	# gzuncompress(); 

	$originaltext = gzuncompress($compressedstring);

	echo $originaltext.'<br><br>';

	// $cipher = gzuncompress("��ࡱ�");

	// echo $echo;
// attempt to decipher contents of: "C:\Users\ruway\Downloads\Thumbs.db"

?>