const bodyParser = require("body-parser");
const port = 3000;
const dotEnv = require("dotenv");
dotEnv.config();

const express = require("express");
const app = express();

app.use(bodyParser.json());

const routes = require("./routes");

app.use("/api", routes);

const errorHandler = require("./utils/validator");

app.use(errorHandler);

const mongoose = require("mongoose");
mongoose
  .connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    console.log("connected");
  })
  .catch((err) => {
    console.log("Unable to connect to MongoDB. Error: " + err);
  });

app.listen(port, () => console.log(`server running in ${port}`));
