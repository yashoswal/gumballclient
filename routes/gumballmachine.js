var restClient = require('node-rest-client').Client;

var client = new restClient();
var host = "http://localhost:8000";


// GET call for loading GumballMachine details
exports.getGumballMachine = function(req, res) {

	client.get(host + "/gumballMachine", function(data, resp) {

		res.render("index", JSON.parse(data));
	});
}

// PUT call for insertQuarter action
exports.insertQuarter = function(req, res) {
	var args = {
		data : req.body,
		parameters : req.body,
		headers : {
			"Content-Type" : "application/json"
		},
	};

	client.put(host + "/gumballMachine", args, function(data, response) {
		var value = JSON.parse(data);
		res.send(value);
	});
}

// POST call for turnCrank action
exports.turnCrank = function(req, res) {
	var args = {
		data : req.body,
		parameters : req.body,
		headers : {
			"Content-Type" : "application/json"
		},
	};
	client.post(host + "/gumballMachine", args, function(data, response) {
		var value = JSON.parse(data);
		res.send(value);
	});
}