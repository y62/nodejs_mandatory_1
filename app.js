const express = require("express");
const app = express();
app.use(express.static("public"));


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/frontend/home.html");
});

const port = 8080;

app.listen(port, () => {
    console.log("Server is running...")
});
