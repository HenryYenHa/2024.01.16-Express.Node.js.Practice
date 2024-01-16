import express from "express";

//DB connection
import { createFlipoff } from "../models/flipoffModel.js";

const router = express.Router();

router.post("/", async (req, res) => {
  console.log("going to flip someone off:", req.body);

  let flipoffObject = {
    flipoffMessage: req.body.flipoffMessage,
    upVotes: 0,
    downVotes: 0,
    reFlip: "",
    createdDate: Date.now(),
  };

  try {
    const createdFlipoff = await createFlipoff(flipoffObject);
    res.send(createdFlipoff);
  } catch (error) {
    res.status(403).send({ message: error.message });
  }
  // res.send("You flipped someone off");
});

router.get("/:id", async (req, res) => {
  console.log("get a specific flipoff");
  try {
    const getFlippedOff = await findOneFlipoffByID(id);
    res, send(getFlippedOff);
  } catch (error) {
    res.status(403).send({ message: error.message });
  }

  // let flipoffObject = {
  //   flipoffMessage: req.body.flipoffMessage,
  //   upVotes: 0,
  //   downVotes: 0,
  //   reFlip: "",
  //   createdDate: Date.now(),
  // };

  // try {
  //   const createdFlipoff = await createFlipoff(flipoffObject);
  //   res.send(createdFlipoff);
  // } catch (error) {
  //   res.status(403).send({ message: error.message });
  // }
  // res.send("You flipped someone off");
  res.status(200).send({ message: "Got flipped off yo" });
});

export default router;
