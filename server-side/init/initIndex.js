const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing");
const dotenv = require("dotenv");
dotenv.config();



const dbURI ="";


if (!dbURI) {
  console.error("MONGO_URI is not defined in .env file");
  process.exit(1);
}





//____________________Connect to MongoDB
async function main() {
  try {
    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully!");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    throw err;
  }
}





// ___________call main function

main()
  .then(() => console.log("Connected to DB"))
  .catch((error) => console.error("Error connecting to DB:", error.message));

const initDB = async ()=>{
    await Listing.deleteMany({});
    await Listing.insertMany(initData.data);
    console.log("DB initialized");
}


initDB();




