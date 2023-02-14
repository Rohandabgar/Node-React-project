const express = require("express");
const morgan = require("morgan");
const passengerRouter = require("./router/liftRouter");
const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.use("/api/v1/user", passengerRouter);
module.exports = app;
