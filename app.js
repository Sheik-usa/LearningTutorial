const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Welcome to LearningTutorial!....A Simple Express app Setup");
})

const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

module.exports = {app, server}