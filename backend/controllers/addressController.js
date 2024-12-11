const Address = require('../models/Address');

exports.addAddress = async (req, res) => {
  try {
    const address = await Address.create(req.body);
    res.status(201).json(address);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getAddresses = async (req, res) => {
  try {
    const addresses = await Address.find({ userId: req.params.userId });
    res.status(200).json(addresses);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateAddress = async (req, res) => {
  try {
    const updatedAddress = await Address.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedAddress);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteAddress = async (req, res) => {
  try {
    await Address.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Address deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
