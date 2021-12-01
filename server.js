const express = require("express");
const mysql = require("mysql");
const myconnect = require("express-myconnection");
const routes = require("./routes");

const app = express();

app.set("port", process.env.PORT || 9000);
const dbOptions = {
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "library",
};

//Middlewares
app.use(myconnect(mysql, dbOptions, "single"));
app.use(express.json());
//Rotes

app.use("/api", routes);

//Server runnig
app.listen(app.get("port"), () => {
  console.log("Server running on port", app.get("port"));
});
