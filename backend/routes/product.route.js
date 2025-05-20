// This is where we'll create the routes for our application. We'll create a route for each of the CRUD operations (Create, Read, Update, Delete) for our products. We're going with PUT instead of POST for the update operation because PUT is idempotent, meaning that calling it once or several times has the same effect. This is a good practice for RESTful APIs.
// Having the routes in a separate file is a good practice for organizing our code. It makes it easier to manage and maintain, especially as our application grows. This keeps our server.js file clean and focused on setting up the server and middleware.

import express from 'express';
import { createProduct, deleteProduct, getProducts, updateProduct } from '../controllers/product.controller.js';

const router = express.Router();

router.get("/", getProducts);
// This is a route that handles GET requests to the "/api/products" endpoint. It retrieves all products from the database and sends them back in the response.
router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;