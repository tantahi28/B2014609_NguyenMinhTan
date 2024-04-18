const mongoose = require('mongoose');
const OrderSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    bookID: { type: mongoose.Schema.Types.ObjectId, ref: 'Book', required: true },
    staffId:{type: mongoose.Schema.Types.ObjectId, ref: 'Staff', required: true},
    orderDate: { type: Date, required: true },
    status: {
        type: String,
        default: 'Chờ duyệt'
    },
    returnDate: { type: Date, required: true }
  });
module.exports = mongoose.model('Order', OrderSchema);
