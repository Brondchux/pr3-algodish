const express = require("express");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 3001;

app.use("/images", express.static(path.join(__dirname, "../client/images")));
if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "../client/build")));
}
app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

app.listen(PORT, (err) => {
	console.log("Listening on port:", PORT);
});
