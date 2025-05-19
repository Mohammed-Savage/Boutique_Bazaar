import mongoose from "mongoose";

// This is our product schema. It defines the structure of the product documents in our MongoDB database.
const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
            default: 0,
        },
        image: {
            type: String,
            required: true,
        },
        // category: {
        //     type: String,
        //     required: true,
        // },
        // brand: {
        //     type: String,
        //     required: true,
        // },
        // rating: {
        //     type: Number,
        //     required: true,
        //     default: 0,
        // },
        // numReviews: {
        //     type: Number,
        //     required: true,
        //     default: 0,
        // },
    },
    {
        timestamps: true, // This option adds createdAt and updatedAt timestamps to the schema
    }
);
// The productSchema defines the structure of the product documents in the MongoDB database. Each product has fields like name, image, brand, category, description, rating, number of reviews, and price. The schema also includes validation rules, such as required fields and default values.
// The timestamps option automatically adds createdAt and updatedAt fields to the documents, which can be useful for tracking when products were added or modified.

// This creates a model called Product based on the productSchema. The model is used to interact with the products collection in the MongoDB database.
const Product = mongoose.model("Product", productSchema);
// This exports the Product model so it can be used in other parts of the application.
export default Product;
