import mongoose from "mongoose";

// This is our product schema. It defines the structure of the product documents in our MongoDB database.
const productSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        brand: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        rating: {
            type: Number,
            required: true,
            default: 0,
        },
        numReviews: {
            type: Number,
            required: true,
            default: 0,
        },
        price: {
            type: Number,
            required: true,
            default: 0,
        },
    },
    {
        timestamps: true, // This option adds createdAt and updatedAt timestamps to the schema
    }
);
// This creates a model called Product based on the productSchema. The model is used to interact with the products collection in the MongoDB database.
const Product = mongoose.model("Product", productSchema);
// This exports the Product model so it can be used in other parts of the application.
export default Product;
// This code defines a Mongoose schema and model for a product in a MongoDB database. The schema specifies the structure of the product documents, including fields like name, image, brand, category, description, rating, number of reviews, and price. The model allows for interaction with the products collection in the database.
// The schema includes validation rules, such as required fields and default values. The timestamps option adds createdAt and updatedAt fields to the documents. The model is exported for use in other parts of the application.
// The code is structured to be easily readable and maintainable, following best practices for defining Mongoose schemas and models.
// The use of ES6 import/export syntax allows for better modularization and organization of the code.