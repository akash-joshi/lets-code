const express = require('express');
const app = new express();

app.get("/", (req, res) => {
  res.send("this is root.");
});

app.get("/page-2", (req, res) => {
  res.send("this is page-2");
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log("the server is running on "+port);
});