// frontend/src/views/Donations.jsx
import React, { useState } from 'react';
import axios from 'axios';

export const Donations = () => {
  const [loading, setLoading] = useState(false);

  const handleDonate = async () => {
    setLoading(true);

    try {
      const response = await axios.post('http://localhost:5000/api/create_preference', {
        title: 'Donación',
        quantity: 1,
        price: 100.00
      });

      window.location.href = response.data.init_point; // Redirige al checkout de Mercado Pago
    } catch (error) {
      console.error('Error al crear la preferencia:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Realizar una Donación</h1>
      <button onClick={handleDonate} disabled={loading}>
        {loading ? 'Cargando...' : 'Donar $100'}
      </button>
    </div>
  );
};
