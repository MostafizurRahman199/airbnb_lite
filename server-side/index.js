const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const mongoose = require("mongoose");
const Listing = require("./models/listing");
const wrapAsync = require("./utils/wrapAsync");
const ExpressError = require("./utils/ExpressError");
const app = express();



// Middleware
app.use(cors());
app.use(express.json());




// MongoDB URI
const dbURI = process.env.MONGO_URI;

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







//_________________________Root Route
app.get("/", wrapAsync(async (req, res) => {
  res.send("This is the root server");
}));







app.get("/listings", wrapAsync(async (req, res) => {
  const listings = await Listing.find({});
  res.status(200).json(listings);
}));







app.get("/listings/:id", wrapAsync(async (req, res) => {
  const id = req.params.id;
  const listing = await Listing.findById(id);

  if (!listing) {
    return res.status(404).json({ message: "Listing not found" });
  }

  res.status(200).json(listing);
}));








app.put("/listings/:id", wrapAsync(async (req, res) => {
  const { id } = req.params;

  const listing = await Listing.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true, 
  });

  if (!listing) {
    return res.status(404).json({ message: "Listing not found" });
  }

  res.status(200).json(listing);
}));







  app.delete("/listings/:id", wrapAsync(async (req, res) => {
    const id = req.params.id;
    const listing = await Listing.findByIdAndDelete(id);
    if (!listing) {
      return res.status(404).json({ message: "Listing not found" });
    }
    res.status(200).json("deleted");
  }));







// create list

app.post("/listings/createList", wrapAsync(async (req, res, next) => {
  const newList = req.body;
  const newListing = new Listing(newList);
  await newListing.save();

  res.status(201).json("success");
}));


app.all("*", (req, res, next)=>{
  next(new ExpressError(404, "Page not found"))
})


app.use((err, req, res, next  )=>{
  let {status, message} = err;
  res.status(status).send(message);
})


//____________________________Start the Server

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
