// const express = require('express'); This is the traditional way of importing and using Express. We're going to ignore this in favor of our ES6 import syntax. This is the more modern way of importing and using Express.
import express from "express";
// We're importing the dotenv package to load environment variables from a .env file into process.env. This is useful for managing sensitive information like API keys, database connection strings, etc.
import dotenv from "dotenv";
// We're importing the connectDB function from the config/db.js file to establish a connection to the MongoDB database.
import { connectDB } from "./config/db.js";

dotenv.config();

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
    connectDB();
    console.log("Server is up and running at http://localhost:5000");
});