var data = require("../data.json");

exports.view = function(req, res){
	console.log("In home page. ");
	
	res.render('seeHistories2', data);
};







