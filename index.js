let express = require("express");
let nocache = require("nocache");
let morgan = require("morgan");

let port = parseInt(process.argv[2], 10) || 8000;

let app = express();

app.use(nocache());
app.use(morgan("tiny"));
app.use(express.static("."));

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
