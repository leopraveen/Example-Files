
const express = require("express");
const path = require("path");
const app = new express();
const PORT = 3000;


// app.use(function(req, res, next) {
//   setTimeout(next, 3000);
// });

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));

});

app.get("/snake.html", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "snake.html"));
});

app.get("/pong.html", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "pong.html"));
});

app.get("/bomberman.html", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "bomberman.html"));
});

app.get("/breakout.html", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "breakout.html"));
});

app.get("/snake.jpeg", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "snake.jpeg"));
});

app.get("/pong.jpg", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "pong.jpg"));
});

app.get("/bomberman.jpeg", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "bomberman.jpeg"));
});

app.get("/breakout.jpeg", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "breakout.jpeg"));
});

app.post("/game", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "game.html"));

});

app.post("/logout", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "logout.html"));

});

app.post("/home", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));

});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

