
const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Welcome to my Express server!");
});

app.get("/api/teachers", (req, res) => {
    res.json([
        {
            id: 1,
            name: "Priya",
            subject: "Java"
        },
        {
            id: 2,
            name: "Arun",
            subject: "React"
        }
    ]);
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});