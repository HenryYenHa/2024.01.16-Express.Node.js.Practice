import express from "express";
//This is to allow you to consume body of message
import bp from "body-parser";
import flipoffRouter from "./routes/flipoff.js";

//Initialize to use express
const app = express();
//Common port for use; 3000, 5000, 8000 are typically safe; otherwise look them up
const PORT = 3000;

app.use(express.json());
//BP Reads the body
app.use(bp.urlencoded());
//Grab-all to show path for debugging
app.use("*", (req, res, next) => {
  console.log("path is: ", req.originalUrl);
  next();
});

app.get("/test", (req, res) => {
  res.send("test endpoint working");
});

//Looking for a post rather than a get here
app.use("/flipoff", flipoffRouter);

app.listen(PORT, () => {
  console.log("Listening on port: ", PORT);
});
