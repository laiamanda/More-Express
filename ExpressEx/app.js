var express = require("express");
var app = express();

//DEFAULT PAGE
app.get("/", function(req,res){
	res.send("Hi there. Welcome to my assignment");
});

//If user has speak following w/ an animal type. Print out the animal and their sound
app.get("/speak/:animal/",function(req,res){
	var animalType =req.params.animal.toLowerCase();
	
	var sound = "hi";
	
	if(animalType == "dog"){
		sound = "woof";
	}
	else if ( animalType == "pig"){
		sound = "oink";
	}
	else if(animalType == "cow"){
		sound = "moo";
	}
	res.send("The " + animalType + " says " + sound);
});

//If the user has repeat and follow with a word that want to repeat with the time
app.get("/repeat/:str/:times",function(req,res){
	var str = req.params.str;
	var times = Number(req.params.times);
	var result = "";
	
	for(var i = 0 ;i < times;i++){
		result += str;
	}
	
	res.send (result + " ");
	
});

//FOR THE INVALID 
app.get("*", function(req,res){
	res.send("Sorry  page is not found...What are you doing with your life?");
});

//Tell Express to listen for request
app.listen(3000,function(){
	console.log("Server listening on Port 3000");
});
