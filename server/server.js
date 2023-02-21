require('dotenv').config({path: "./config.env"});
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
    console.log("Server is running in " + PORT);
});
connectDB();

process.on("unhandledRejection", (err, promise) => {
    console.log(`Error: ${err}`);
    server.close(() => process.exit(1));
})


