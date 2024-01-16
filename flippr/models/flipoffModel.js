import db from "../dbConnect.js";
import mongoose from "mongoose";

const flipoffSchema = db.Schema({
  flipoffMessage: String,
  upVotes: Number,
  downVotes: Number,
  reFlip: String,
  createdDate: Date,
});

export const flipoffObject = db.model("flipoff", flipoffSchema, "flipoffs");

export const createFlipoff = async (newFlipoff) => {
  try {
    const createdFlipoff = await flipoffObject.create(newFlipoff);
    return createdFlipoff;
  } catch (error) {
    console.log("Error on createFlipoff in flipoffModel.js");
  }
};

//THIS ONE DOESNT SEEM TO WORK; TRY TO FIND THE SOLUTION
export const findOneFlipoffbyID = async (id) => {
  let objectID = new mongoose.Types.ObjectId(id);
  const flipoff = await flipoff.findById(objectID);
  return flipoff;
};
