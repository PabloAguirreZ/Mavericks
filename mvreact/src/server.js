
const mongoose = require('mongoose');
const Comment = require('./models/Comment'); 
const express = require('express');
const app = express();

// Conecta con tu base de datos MongoDB
mongoose.connect('mongodb://localhost:27017', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json()); 

app.post('/api/comments', async (req, res) => {
  try {
    const { text } = req.body; 
    const newComment = new Comment({ text });
    await newComment.save();
    res.status(201).json(newComment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});



const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
