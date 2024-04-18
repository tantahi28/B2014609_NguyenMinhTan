const mongoose = require('mongoose');
const BookSchema = new mongoose.Schema({
    title: { type: String },
    price: { type: Number },
    quantity: { type: Number },
    author: { type: String },
    genreId: { type: mongoose.Schema.Types.ObjectId, ref: 'Genre', required: true },
    
  });

module.exports = mongoose.model('Book', BookSchema);
