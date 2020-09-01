// Library imports
const config = require("config");
const startupDebugger = require("debug")("app:startup");
const dbDebugger = require("debug")("app:db");
const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");

// User imports
const users = require("./routes/users");
const auth = require("./routes/auth");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());
app.use(express.static("public"));
app.use(helmet());

// DEV STUFF
if (app.get("env") === "development") {
  app.use(morgan("tiny"));
  startupDebugger("Morgan enabled...");
}

mongoose
  .connect(config.get("db.uri"), {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => dbDebugger("Connected to Second Servings MongoDB..."))
  .catch((err) => console.log("Could not connect to MongoDB...", err));

// Routes
app.use("/api/users", users);
app.use("/api/auth", auth);

// DB Work...
// dbDebugger("Connected to database...");

const port = config.get("port");
app.listen(port, () => console.log(`Listening on port ${port}....`));
