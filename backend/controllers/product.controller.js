import Product from "../models/product.model.js"; // Importing the Product model to interact with the products collection in the database.
import mongoose from "mongoose"; // Importing mongoose to work with MongoDB

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find({}); // This retrieves all products from our database.
        res.status(200).json({ success: true, data: products });
    } catch (error) {
        console.log("Error retrieving products:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};
// The async/await syntax is used to handle asynchronous operations, making the code cleaner and easier to read.
// The try/catch block is used to handle any errors that may occur during the database operation. If an error occurs, a 500 status code is sent back with an error message.
// The res.status(200).json({ success: true, data: products }) line sends a JSON response with a 200 status code, indicating that the request was successful and includes the retrieved products in the response body.

export const createProduct = async (req, res) => {
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
};

export const updateProduct = async (req, res) => {
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
};

export const deleteProduct = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ success: false, message: "Product not found." });
    }

    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Product deleted successfully" });
    } catch (error) {
        console.error("Error in Delete product:", error.message);
        res.status(500).json({ success: false, message: "Server error" });
    }
};