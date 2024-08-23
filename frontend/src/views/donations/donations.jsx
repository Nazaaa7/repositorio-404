import React, { useState } from 'react';
import Header from '../header';

export const Donations = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [preferenceId, setPreferenceId] = useState('');

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('http://localhost:5000/api/create_preference', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setPreferenceId(data.id); // Asumiendo que el ID de la preferencia se devuelve aquí
      console.log(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <h1>Donaciones</h1>
      <button onClick={handleSubmit} disabled={loading}>
        {loading ? 'Cargando...' : 'Crear Preferencia'}
      </button>
      {error && <p>Error: {error}</p>}
      {preferenceId && <p>ID de la Preferencia: {preferenceId}</p>}
    </>
  );
};
