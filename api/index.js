import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("connected to mongo db");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
const port = 3000;
app.listen(port, () => {
  console.log(`server is running on ${port}!`);
});

app.use("/api/user",userRouter);
