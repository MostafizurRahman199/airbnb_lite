const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const mongoose = require("mongoose");
const Listing = require("./models/listing");

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
app.get("/", (req, res) => {
  res.send("This is the root server");
});

app.get("/listings", async (req, res) => {
  try {
    const listings = await Listing.find({});
    res.status(200).json(listings);
  } catch (error) {
    console.error("Error fetching listings:", error);
    res.status(500).json({ message: "Internal Server Error", error });
  }
});

app.get("/listings/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const listing = await Listing.findById(id);

    if (!listing) {
      return res.status(404).json({ message: "Listing not found" });
    }

    res.status(200).json(listing);
  } catch (error) {
    console.error("Error fetching listing:", error);
    res.status(500).json({ message: "Internal Server Error", error });
  }
});

app.put("/listings/:id", async (req, res) => {
    try {
      const { id } = req.params;
  
      const listing = await Listing.findByIdAndUpdate(id, req.body, {
        new: true, // Return the updated document
        runValidators: true, // Run schema validation
      });
  
      // Check if the listing exists
      if (!listing) {
        return res.status(404).json({ message: "Listing not found" });
      }
  
      res.status(200).json(listing);
    } catch (error) {
      console.error("Error updating listing:", error);
      res.status(500).json({ message: "Internal Server Error", error });
    }
  });
  


  app.delete("/listings/:id", async(req, res)=>{
    try{
            const id = req.params.id;
            const listing = await Listing.findByIdAndDelete(id);
            if(!listing){
                return res.status(404).json({message: "Listing not found"})
                }
                res.status(200).json("deleted");
    }catch(error){
        res.json(error.message);
    }
  })


app.post("/listings/createList", async (req, res) => {
  try {
    const newList = req.body;
    const newListing = new Listing(newList);
    await newListing.save();

    res.status(201).json("success");
  } catch (error) {
    console.error("Error creating new listing:", error);

    if (error.name === "ValidationError") {
      return res
        .status(400)
        .json({ message: "Validation failed", error: error.message });
    }

    res.status(500).json({ message: "Internal Server Error", error });
  }
});



//____________________________Start the Server
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
