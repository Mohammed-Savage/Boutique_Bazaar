// We're importing the express package to create a web server and handle HTTP requests and responses.
import express from "express";
// We're importing the dotenv package to load environment variables from a .env file into process.env. This is useful for managing sensitive information like API keys, database connection strings, etc.
import dotenv from "dotenv";
dotenv.config();

const app = express();

// Creating a route with the GET method
app.get("/products", (req, res) => { });

console.log(process.env.MONGO_URI);
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