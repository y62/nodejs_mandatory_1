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
   return res.sendFile(__dirname + "/frontend/home.html");
});

app.get("/basics", (req, res) => {
   return res.sendFile(__dirname + "/frontend/basics.html");
});

app.get("/express", (req, res) => {
   return res.sendFile(__dirname + "/frontend/express.html");
});

app.get("/stone", (req, res) => {
    return res.sendFile(__dirname + "/frontend/stone_api.html");
});

app.get("/stones", (req, res) =>  {
 return res.send({data: stones});
});

app.post("/stones", (req, res) => {
   const newStone = req.body;
   stones.push(newStone);
    return res.send({data: req.body});
});

app.put("/stones/:id", (req, res) => {
    const newStone = req.body;
    stones.push(newStone);
    return res.send({data: req.body});
});

app.delete("/stones/:id", (req, res) => {
    stones = stones.filter(stone => stone.id !== Number(req.params.id));
    return res.send({ data: stones });
});


app.listen(port, () => {
    console.log("Server is running on port:", port)
});
