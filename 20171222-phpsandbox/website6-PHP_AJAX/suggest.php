<?php
//People array @TODO - get from DB

$people[] = "Henry";
$people[] = "Jamison";
$people[] = "Jerry";
$people[] = "Buelah";
$people[] = "Olaf";
$people[] = "Chinua";
$people[] = "Louis";
$people[] = "Antoin"; 
$people[] ="Mary"; 
$people[] ="Beth"; 
$people[] ="Melanie"; 
$people[] ="Jose"; 
$people[] ="James"; 
$people[] ="Jimmy"; 
$people[] ="Esmerelda"; 
$people[] ="Emily"; 
$people[] = "Brian"; 
$people[] = "Henrik";

//get query string

$q = $_REQUEST['q'];

$suggestion = "";

//Get suggestions

if($q !== ""){
	$q = strtolower($q);
	$len = strlen($q);

	foreach($people as $person){
		if(stristr($q, substr($person, 0, $len))){
			if($suggestion === ""){
				$suggestion = $person;
			}else{
				$suggestion .=", $person";
			}
		}
	}
}

echo $suggestion === "" ? "No Suggestion" : $suggestion;

?>