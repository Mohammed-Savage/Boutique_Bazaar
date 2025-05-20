// const express = require('express'); This is the traditional way of importing and using Express. We're going to ignore this in favor of our ES6 import syntax. This is the more modern way of importing and using Express.
import express from "express";
// We're importing the dotenv package to load environment variables from a .env file into process.env. This is useful for managing sensitive information like API keys, database connection strings, etc.
import dotenv from "dotenv";
// We're importing the connectDB function from the config/db.js file to establish a connection to the MongoDB database.
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js"; // Importing the product routes from the product.route.js file. This is where we'll define our API endpoints for product-related operations.


dotenv.config();

const app = express();

app.use(express.json()); // This middleware parses incoming JSON requests and makes the data available in req.body.

app.use("/api/products", productRoutes); // This sets up the product routes. Any request to /api/products will be handled by the routes defined in product.route.js.

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
