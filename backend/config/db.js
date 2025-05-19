import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1); // Process Code 1 signifies exit process with failure, while 0 signifies success.
    }
}
export default connectDB;
// This code connects to a MongoDB database using Mongoose. It exports a function `connectDB` that attempts to connect to the database using the URI stored in the environment variable `MONGO_URI`. If the connection is successful, it logs the host of the connected database. If there is an error, it logs the error message and exits the process with a failure code (1).
// The `useNewUrlParser` and `useUnifiedTopology` options are used to avoid deprecation warnings related to the MongoDB driver's URL parser and topology engine. The `connectDB` function is exported for use in other parts of the application, allowing for easy database connection management.