const cors = require("cors");
const express = require("express");
const costsRouter = require("./routes/costsRoutes");
const db = require("./config/db");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors("*"));
app.use("/costs", costsRouter);

db.connect(
  "mongodb+srv://Mongo:123@firstmongodb-abyjl.mongodb.net/test?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, database) => {
    if (err) return console.log("ERROR!!! From db: ", err);

    console.log("Conect MongoDB. All working!!!");
  }
);
app.listen(PORT, () => console.log(PORT));
