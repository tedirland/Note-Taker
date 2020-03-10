var notesData = require("notesData");
var fs = require("fs")



module.exports = function (app) {

    app.get("/api/notes", function (req, res) {
        res.json(notesData)
    });

    app.post("/api/notes", function (req,res){

    alert("Saving Notes...")

    })
}

