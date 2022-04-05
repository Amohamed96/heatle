const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const db = require("./db/index");
const dbHelpers = require("./helpers/dbHelpers")(db);
const indexRouter = require("./routes/index");
const statsRouter = require("./routes/stats");
const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/api/stats", statsRouter(dbHelpers));

app.get("/api/stats", (req, res) => {
  console.log("REQ PARARMS APP.JS: ", req.params);
});

module.exports = app;
