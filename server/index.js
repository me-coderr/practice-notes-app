const express = require('express');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 5000;

app.get("/", async (req, res) => {
    res.send("API is running");
});

// get all notes
app.get("api/notes", async (req, res) => {
    res.json(notes);    
})

// get a particular note based on id
app.get("api/notes/:id", async (req, res) => {
    const thisNote = Array.from(notes).find((note) => note._id === req.params.id);
    res.json(thisNote);
});

app.listen(PORT, () => {
    console.log(`server listening at ${PORT}`);
});