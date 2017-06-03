//Blibliocas
const     express = require("express")
		, app = express()
		, server = require("http").createServer(app)
		, logger = require("morgan")
		, bodyParser = require("body-parser")
		, cors = require("cors");
		//, commandList = require("./app/command-list.js");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));
app.use(cors());

app.post("/api/test", (req, res) => {

	console.log(req.body);

	var response = "Retornando resposta";
	res.json(response);

});

app.listen(8000);
console.log("aplicação escutando 8000")



