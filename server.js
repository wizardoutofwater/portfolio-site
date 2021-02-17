const express = require("express");
const morgan = require("morgan");
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));
app.use(morgan("dev"));

app.listen(port, function () {
    console.log("Forum API is now listening on port " + port + "...");
  });
  