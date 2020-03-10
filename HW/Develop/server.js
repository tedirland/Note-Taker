//App Requirements
var express = require("express");
var path = require("path");
var fs = require("fs");

// Setting up express configuration 

var app = express();
//Setting an initial port (enviornment port for Heroku or port 3660 for localhost)
var PORT = 7000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json);
app.use(express.static("public"));

//Setting up router paths
app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
});

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT)
})

