// const express = require('express'); This is the traditional way of importing and using Express. We're going to ignore this in favor of our ES6 import syntax. This is the more modern way of importing and using Express.
import express from "express";
// We're importing the dotenv package to load environment variables from a .env file into process.env. This is useful for managing sensitive information like API keys, database connection strings, etc.
import dotenv from "dotenv";
// We're importing the connectDB function from the config/db.js file to establish a connection to the MongoDB database.
import { connectDB } from "./config/db.js";
import Product from "./models/product.model.js";

dotenv.config();

const app = express();

app.use(express.json()); // This middleware parses incoming JSON requests and makes the data available in req.body.

app.get("/api/products", async (req, res) => {
    try {
        const products = await Product.find({}); // This retrieves all products from our database.
        res.status(200).json({ success: true, data: products });
    } catch (error) {
        console.log("Error retrieving products:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
});
// This is a route that handles GET requests to the "/api/products" endpoint. It retrieves all products from the database and sends them back in the response.
// The async/await syntax is used to handle asynchronous operations, making the code cleaner and easier to read.
// The try/catch block is used to handle any errors that may occur during the database operation. If an error occurs, a 500 status code is sent back with an error message.
// The res.status(200).json({ success: true, data: products }) line sends a JSON response with a 200 status code, indicating that the request was successful and includes the retrieved products in the response body.

// Creating a route with the GET method
app.post("/api/products", async (req, res) => {
    const product = req.body; //This is the data the user enters.

    if(!product.name || !product.description || !product.price || !product.image) {
        return res.status(400).json({ success:false, message: "Please fill in all the fields" });
    }

    const newProduct = new Product(product)

    try {
        await newProduct.save();
        res.status(201).json({ success: true, data: newProduct });
    } catch (error) {
        console.error("Error in Create product:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
});

app.delete("/api/products/:id", async (req, res) => {
    const { id } = req.params;
    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Product deleted successfully" });
    } catch (error) {
        console.error("Error in Delete product:", error.message);
        res.status(500).json({ success: false, message: "Prodcut not found in inventory" });
    }
});

app.listen(5000, () => {
    connectDB();
    console.log("Server is up and running at http://localhost:5000");
});

// console.log("Mongo URI:", process.env.MONGO_URI); This is just to test if the Mongo URI is being read correctly from the .env file. It should log the Mongo URI to the console.

// These are the routes we would utilize if we were operating directly from this server.js file:
// Creating a route with the POST method
// app.post("/", (req, res) => {
//     res.send("I'm up, I'm up I said");
// });
// Creating a route with the PUT method
// app.put("/", (req, res) => {
//     res.send("I'm up, I'm up I said");
// });
// // Creating a route with the DELETE method
// app.delete("/", (req, res) => {
//     res.send("I'm up, I'm up I said");
// });
