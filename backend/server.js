// const express = require('express'); This is the traditional way of importing and using Express. We're going to ignore this in favor of our ES6 import syntax. This is the more modern way of importing and using Express.
import express from "express";
// We're importing the dotenv package to load environment variables from a .env file into process.env. This is useful for managing sensitive information like API keys, database connection strings, etc.
import dotenv from "dotenv";
import path from "path"; // Importing the path module to work with file and directory paths. This is useful for serving static files or resolving paths in our application.
// We're importing the connectDB function from the config/db.js file to establish a connection to the MongoDB database.
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js"; // Importing the product routes from the product.route.js file. This is where we'll define our API endpoints for product-related operations.


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000; // This sets the port for our server. If the PORT environment variable is not set, it defaults to 5000.

const __dirname = path.resolve(); // This resolves the current directory name. It's useful for constructing paths relative to the current directory, especially when serving static files or resolving paths in our application.

app.use(express.json()); // This middleware parses incoming JSON requests and makes the data available in req.body.

// We're not serving static files directly from this server.js file. Instead, we're using the product routes defined in product.route.js to handle API requests.
app.use("/api/products", productRoutes); // This sets up the product routes. Any request to /api/products will be handled by the routes defined in product.route.js. Our CRUD operations will all be prefixed with /api/products.

if (process.env.NODE_ENV === "production") {
    // This condition checks if the application is running in production mode.
    // If it is, we serve the static files from the 'frontend/dist' directory.
    app.use(express.static(path.join(__dirname, "/frontend/dist"))); // This serves static files from the 'frontend/dist' directory. This is where our frontend build files will be located when we build our React application for production.
    // The __dirname variable is used to get the current directory name, and the path.join method is used to create a path that is compatible with the current operating system.
    // This is useful for serving the frontend application when the server is running in production mode, as mentiooned above.
    
    // This route serves the index.html file for any requests that don't match our API routes.
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
    });
}

app.listen(PORT, () => {
    connectDB();
    console.log("Server is up and running at http://localhost:" + PORT);
    // This logs a message to the console indicating that the server is running and listening on the specified port.
    // The connectDB function is called to establish a connection to the MongoDB database.
    // The connectDB function is defined in the config/db.js file and is responsible for connecting to the MongoDB database.
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
