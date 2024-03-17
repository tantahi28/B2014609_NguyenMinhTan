const mongoose = require('mongoose');
const BookSchema = new mongoose.Schema({
    bookID: { type: Schema.Types.ObjectId, required: true, unique: true },
    title: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    year: { type: Number, required: true },
    publisherID: { type: mongoose.Schema.Types.ObjectId, ref: 'Publisher', required: true },
    author: { type: String } 
  });

module.exports = mongoose.model('Book', BookSchema);
