import bodyParser from "body-parser";
import configDotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import route from "./app/routes/userRoute.js";
import employeeRoute from "./app/routes/EmployeeRoute.js";
const app = express();

app.use(bodyParser.json());
configDotenv.configDotenv();
const PORT = process.env.PORT || 5000;
const MONGOURL = process.env.MONGO_URL;

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to omkar powar application." });
});

mongoose
  .connect(MONGOURL)
  .then(() => {
    console.log("connected");
    app.listen(PORT, () => {
      console.log(`server is running on port ${PORT}`);
    });
  })
  .catch((error) => console.log(error));

app.use("/api/user", route);
app.use("/api/employee", employeeRoute);
