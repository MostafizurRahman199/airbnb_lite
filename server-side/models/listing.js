const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        minlength: [3, "Title must be at least 3 characters long"],
        maxlength: [100, "Title cannot exceed 100 characters"],
    },
    description: {
        type: String,
        maxlength: [500, "Description cannot exceed 500 characters"],
    },
    price: {
        type: Number,
        required: [true, "Price is required"],
        min: [0, "Price must be a positive number"],
    },
    location: String, 
    image: {
        type: {
            filename: String,
            url: {
                type: String,
                default: "https://cdn.pixabay.com/photo/2023/03/26/01/45/ai-generated-7877339_1280.jpg",
                validate: {
                    validator: function (v) {
                     
                        return /^(https?:\/\/.*)/.test(v) || v === "";
                    },
                    message: "Invalid URL format for the image",
                },
                set: function (v) {
                    
                    const defaultUrl =
                        "https://cdn.pixabay.com/photo/2023/03/26/01/45/ai-generated-7877339_1280.jpg";
                    return !v || !/^(https?:\/\/.*)/.test(v) ? defaultUrl : v;
                },
            },
        },
    },
    country: String, 
    createdAt: {
        type: Date,
        default: Date.now,
    },
    isAvailable: {
        type: Boolean,
        default: true,
    },
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
