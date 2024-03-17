const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    UserID: { type: Schema.Types.ObjectId, required: true, unique: true },
    lastName: { type: String, required: true },
    firstName: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    gender: { type: String, required: true },
    address: { type: String, required: true },
    phoneNumber: { type: String, required: true }
  });

module.exports = mongoose.model('User', UserSchema);
