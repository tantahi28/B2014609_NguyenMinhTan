const mongoose = require('mongoose');
const BorrowingSchema = new mongoose.Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'Reader', required: true },
    bookID: { type: Schema.Types.ObjectId, ref: 'Book', required: true },
    staffId:{type: Schema.Types.ObjectId, ref: 'Staff', required: true},
    borrowingDate: { type: Date, required: true },
    returnDate: { type: Date, required: true }
  });
module.exports = mongoose.model('Borrowing', BorrowingSchema);
