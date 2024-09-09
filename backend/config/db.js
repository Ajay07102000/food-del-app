import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect('mongodb+srv://18ajaysaini:181818@cluster0.vvgjk.mongodb.net/food-del').then(() => console.log("Db connected"));
};
