const mongoose = require('mongoose');
const PublisherSchema = new mongoose.Schema({
    publisherID: { type: Schema.Types.ObjectId, required: true, unique: true },
    name: { type: String, required: true },
    address: { type: String, required: true }
});

module.exports = mongoose.model('Publisher', PublisherSchema);
