const mongoose = require("mongoose");

require("dotenv").config();

const connectDB = async () => {
  const dbUser = process.env.MONGODB_USER;
  const dbPassword = process.env.MONGODB_PASSWORD;
  try {
    await mongoose.connect(
      `mongodb+srv://${dbUser}:${dbPassword}@cluster0.re3ha3x.mongodb.net/subscribers`
    );
    console.log("Connected to MongoDB database!");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1);
  }
};

module.exports = connectDB;
