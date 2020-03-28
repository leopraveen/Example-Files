
const express = require("express");
const path = require("path");
const app = new express();
const PORT = 3000;


app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));

});

app.get("/game", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "game.html"));

});

app.get("/logout", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "logout.html"));

});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
