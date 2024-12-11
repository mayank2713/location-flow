const express = require('express');
const { addAddress, getAddresses, updateAddress, deleteAddress } = require('../controllers/addressController');
const router = express.Router();

router.post('/', addAddress);
router.get('/:userId', getAddresses);
router.put('/:id', updateAddress);
router.delete('/:id', deleteAddress);

module.exports = router;
