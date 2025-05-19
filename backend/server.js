import express from "express";

const app = express();

app.listen(5000, () => {
    console.log("Server is up and running at http://localhost:5000");
});

// const express = require('express'); This is the traditional way of importing and using Express. We're going to ignore this in favor of our ES6 import syntax. This is the more modern way of importing and using Express.