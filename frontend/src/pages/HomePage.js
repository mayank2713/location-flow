import React, { useState } from 'react';
import axios from 'axios';
import LocationMap from '../components/LocationMap';
import AddressForm from '../components/AddressForm';

const HomePage = () => {
  const [location, setLocation] = useState(null); // To store the user's selected location
  const [error, setError] = useState(''); // To handle error messages

  const handleLocationChange = (newLocation) => {
    setLocation(newLocation);
  };

  const handleSubmit = async (data) => {
    try {
      if (!location) {
        setError('Please select a location on the map.');
        return;
      }

      const payload = {
        ...data,
        coordinates: location,
        userId: '123456', // Replace with a real user ID from your authentication system
      };

      // API call to save the address
      const response = await axios.post('http://localhost:5000/api/addresses', payload);
      console.log('Address saved:', response.data);

      // Reset form and error
      setError('');
      alert('Address saved successfully!');
    } catch (err) {
      console.error(err);
      setError('Failed to save the address. Please try again.');
    }
  };

  return (
    <div>
      <h1>Save Your Address</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <LocationMap onLocationChange={handleLocationChange} />
      <AddressForm onSubmit={handleSubmit} />
    </div>
  );
};

export default HomePage;
