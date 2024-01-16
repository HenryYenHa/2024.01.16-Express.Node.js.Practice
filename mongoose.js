import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
const connectionString = procsss.env.MONGO_URL;
const db = await mongoose.connect(connectionString);

console.log("connected");
export default db;
