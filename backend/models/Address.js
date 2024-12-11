const mongoose = require('mongoose');

const AddressSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  house: String,
  apartment: String,
  category: String, // Home, Office, etc.
  coordinates: {
    latitude: Number,
    longitude: Number,
  },
}, { timestamps: true });

module.exports = mongoose.model('Address', AddressSchema);
