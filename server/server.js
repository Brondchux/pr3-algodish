const express = require("express");
const app = express();

const PORT = process.env.PORT || 3001;

// TODO: Please delete me
app.get("/", (req, res) => {
	const hello = "<h1><center>Hello AlgoDish!</center></h1>";
	res.send(hello);
});

app.listen(PORT, (err) => {
	console.log("Listening on port:", PORT);
});
