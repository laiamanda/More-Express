var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine","ejs");

app.get("/",function(req,res){
	res.render("home");
	res.send("Welcome to the Home Page");
});

app.get("/fallinlove/:thing", function(req,res){
	var thing = req.params.thing;
	res.render("love", {thingVar: thing});
	
});

app.get("/posts",function(req,res){
	var posts = [
		{title: "Post1", author: "Susy"},
		{title: "My Adorable San", author: "Amanda"},
		{title: "iT's MeNtaL iLlness, Luv", author: "TikTok"},
	];
	res.render("posts",{posts:posts});
});

app.listen(3000,function(){
	console.log("Server listening on Port 3000");
});
