import express from "express";

const app = express();

// Creating a route with the GET method
app.get("/", (req, res) => {
    res.send("I'm up, I'm up I said. What do you want?");
});
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