import React, { useState } from 'react';

const AddressForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    house: '',
    apartment: '',
    category: 'Home',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="house" placeholder="House/Flat No" onChange={handleChange} />
      <input name="apartment" placeholder="Apartment/Road/Area" onChange={handleChange} />
      <select name="category" onChange={handleChange}>
        <option value="Home">Home</option>
        <option value="Office">Office</option>
        <option value="Friends">Friends & Family</option>
      </select>
      <button type="submit">Save Address</button>
    </form>
  );
};

export default AddressForm;
