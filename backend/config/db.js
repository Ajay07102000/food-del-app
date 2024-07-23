import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect("mongodb+srv://ajaysaini:181818@cluster0.mnsifsr.mongodb.net/food-del").then(() => console.log("Db connected"));
};
