const express = require("express");
const fetch = require("node-fetch");
const app = express();
app.use(express.static("frontend"));
app.use(express.json());

const port = 8080;


let stones = [
    {id : 1, name : "Sapphire"},
    {id : 2, name : "Ruby"},
    {id : 3, name : "Diamond"},
    {id : 4, name : "Emerald"},
    {id : 5, name : "Onyx"}
]

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/frontend/home.html");
});

app.get("/basics", (req, res) => {
    res.sendFile(__dirname + "/frontend/basics.html");
});

app.get("/stones", (req, res) =>  {
 return res.send({data: stones});
});

app.post("/cars", (req, res) => {
   const newStone = req.body;
   stones.push(newStone);
    return res.send({data: newStone});
});



app.listen(port, () => {
    console.log("Server is running...")
});
