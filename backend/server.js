// We're importing the express package to create a web server and handle HTTP requests and responses.
import express from "express";
// Since our .env file is in the root directory, we need to use the path module to resolve the path to the .env file. This is important for loading environment variables correctly.
import path from "path";
import { fileURLToPath } from "url";
// We're importing the dotenv package to load environment variables from a .env file into process.env. This is useful for managing sensitive information like API keys, database connection strings, etc.
import dotenv from "dotenv";

// This is a workaround to get the current directory name in ES6 modules. It allows us to resolve the path to the .env file correctly.
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// This loads environment variables from a .env file into process.env. It's important to call this before using any environment variables.
// The .env file is in the root directory of our project.
// The dotenv package will look for a .env file in the current working directory and load the variables into process.env.
// This is useful for managing sensitive information like API keys, database connection strings, etc.
dotenv.config({ path: path.resolve(__dirname, "../.env") });

const app = express();

// Creating a route with the GET method
app.get("/products", (req, res) => { });

console.log("Mongo URI:", process.env.MONGO_URI);
// Creating a route with the POST method
app.post("/", (req, res) => {
    res.send("I'm up, I'm up I said");
});
// Creating a route with the PUT method
app.put("/", (req, res) => {
    res.send("I'm up, I'm up I said");
});
// Creating a route with the DELETE method
app.delete("/", (req, res) => {
    res.send("I'm up, I'm up I said");
});

app.listen(5000, () => {
    console.log("Server is up and running at http://localhost:5000");
});

// const express = require('express'); This is the traditional way of importing and using Express. We're going to ignore this in favor of our ES6 import syntax. This is the more modern way of importing and using Express.