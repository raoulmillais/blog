var zombie = require("zombie");
var assert = require("assert");

// Load the page from localhost
zombie.visit("http://localhost:3000/", function (err, browser, status) {
	var articles;
	console.log(err);
	/*
	assert.ok(err, "Homepage should not return an error");
	articles = browser.querySelector(".article")
	
	assert.ok(articles, "Homepage should have articles");
	assert.ok(articles.querySelector(".author"), "Articles hould have authors");
	*/
});
