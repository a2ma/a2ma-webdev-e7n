<?php

class Person{
	//properties - attributes in form of variable
	private $name;
	private $email;
	//static properties and methods can be used without instantiating an object
	// public static $ageLimit = 40;

	//making static attribute private and accessing with static method
	private static $ageLimit = 40;

	//PHP 5 method; before that name of constructor had to be same as that of class
	public function __construct($name, $email){
		$this->name = $name;
		$this->email = $email;
		// echo "Person created <br>";

		echo __CLASS__.' created <br>';
	}

	public function __destruct(){
		echo __CLASS__.' destroyed <br>';
	}

	public function setName($name){
		$this->name = $name;
	}

	public function getName(){
		return $this->name.'<br>';
	}

	public function setEmail($email){
		$this->email = $email;
	}

	public function getEmail(){
		return $this->email.'<br>';
	}

	public static function getAgeLimit(){
		//not $this but self
		return self::$ageLimit;
	}
}

#Static properties and methods
//acccessing public static property
// echo Person::$ageLimit;

//acccessing private static property
echo Person::getAgeLimit();

//The below works with access set to public on the attributes
// $person1 = new Person;
// $person1->name = 'Jon Arryn';

// echo $person1->name;

//When access set to private and getter and setter:
// $person1 = new Person;
// $person1->setName('Jon Arryn');
// echo $person1->getName();

//With inclusion of constructor:
// $person1 = new Person('Jon Arryn', 'jon@handofking.net');
// echo $person1->getName();



class Customer extends Person{
	private $balance;

	public function __construct($name, $email, $balance){
		parent::__construct($name, $email, $balance);
		$this->balance = $balance;
		echo 'A new '.__CLASS__.' has been created.<br>';
	}

	public function setBalance($balance){
		$this->balance = $balance;
	}

	public function getBalance(){
		return $this->balance.'<br>';
	}
}

// $customer1 = new Customer('Marty Bull', 'marty@bull.com', 500);

// echo $customer1->getBalance();

