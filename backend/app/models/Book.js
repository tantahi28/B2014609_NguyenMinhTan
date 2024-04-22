const mongoose = require('mongoose');
const BookSchema = new mongoose.Schema({
    title: String,
    author: String,
    price: Number,
    image: String,
    genreId: { type: mongoose.Schema.Types.ObjectId, ref: 'Genre' },
    
  });

module.exports = mongoose.model('Book', BookSchema);
