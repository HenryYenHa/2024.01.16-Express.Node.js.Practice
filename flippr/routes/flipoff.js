import express from "express";

//DB connection
import { flipoffObject } from "../models/flipoffModel.js";

const router = express.Router();

router.post("/", async (req, res) => {
  console.log("going to flip someone off:", req.body);

  // let shortenedUrlObject = {
  //   originalURL: req.body.url,
  //   shortenedURL: "localhost:3000/test123"};
  // }
  // try {
  //   const createFlipoff = await createFlipoff(flipoffObject);
  //   res.send(createFlipoff);
  // } catch (error) {
  //   res.status(403).send({ message: error.message });
  // }
  res.send("You flipped someone off");
});

export default router;
