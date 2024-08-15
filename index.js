import bodyParser from "body-parser";
import configDotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";

const app = express();

app.use(bodyParser.json());
configDotenv.configDotenv();
const PORT = process.env.PORT || 5000;
const MONGOURL = process.env.MONGO_URL;

mongoose
  .connect(MONGOURL)
  .then(() => {
    console.log("connected");
    app.listen(PORT, () => {
      console.log(`server vis runngin on port ${PORT}`);
    });
  })
  .catch((error) => console.log(error));
