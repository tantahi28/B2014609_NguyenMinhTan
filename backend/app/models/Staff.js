const mongoose = require('mongoose');
const StaffSchema = new mongoose.Schema({
    staffID: { type: Schema.Types.ObjectId, required: true, unique: true },
    fullName: { type: String, required: true },
    password: { type: String, required: true },
    position: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: String, required: true }
});

module.exports = mongoose.model('Staff', StaffSchema);
