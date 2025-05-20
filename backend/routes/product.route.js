// This is where we'll create the routes for our application. We'll create a route for each of the CRUD operations (Create, Read, Update, Delete) for our products. We're going with PUT instead of POST for the update operation because PUT is idempotent, meaning that calling it once or several times has the same effect. This is a good practice for RESTful APIs.
// Having the routes in a separate file is a good practice for organizing our code. It makes it easier to manage and maintain, especially as our application grows. This keeps our server.js file clean and focused on setting up the server and middleware.

import express from 'express';
import mongoose from 'mongoose';
import Product from '../models/product.model.js'; // Importing the Product model to interact with the products collection in the database.

const router = express.Router();

router.get("/", async (req, res) => {
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
router.post("/", async (req, res) => {
    const product = req.body; //This is the data the user enters.

    if (!product.name || !product.description || !product.price || !product.image) {
        return res.status(400).json({ success: false, message: "Please fill in all the fields" });
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

router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const product = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ success: false, message: "Product not found." });
    }

    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, product, { new: true });
        res.status(200).json({ success: true, data: updatedProduct });
    } catch (error) {
        console.error("Error in Update product:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
})

router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Product deleted successfully" });
    } catch (error) {
        console.error("Error in Delete product:", error.message);
        res.status(500).json({ success: false, message: "Prodcut not found in inventory" });
    }
});

export default router;