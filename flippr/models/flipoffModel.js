import db from "../mongoose.js";

const flipoffSchema = db.Schema({
  flipoffMessage: String,
  upVotes: Number,
  downVotes: Number,
  reFlip: String,
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
