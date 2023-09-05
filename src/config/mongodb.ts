import mongoose from "mongoose";

// ==============MongoDb Compass=====================

const connectDB = async ():Promise<void> => {
  try {
    mongoose.set("strictQuery", true);
    if (process.env.mongo_url) {
     await  mongoose.connect(process.env.mongo_url);
      console.log("database connected successfully");
    } else {
      console.error("Error in mongodb connection url");
    }
  } catch (error) {
    console.error("Error while connecting db", error);
  }
};

export default connectDB;

