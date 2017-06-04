const express = require("express")
	, app = express()
	, server = require("http").createServer(app)
	, logger = require("morgan")
	, bodyParser = require("body-parser")
	, cors = require("cors")
    , commandList = require("./app/command-list.js");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));
app.use(cors());

app.post("/api/tably", (req, res) => {

	console.log(req.body);

	commandList.hello(eq.body);
	commandList.sendMail(eq.body);
	commandList.commandLed(eq.body);
	commandList.ativar(eq.body);

	let response = "Comando recebido";
	res.json(response);

});

app.listen(8000);
console.log("aplicação escutando 8000");