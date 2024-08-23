// pago.js
import express from 'express';
import mercadopago from 'mercadopago';

// Configura Mercado Pago
mercadopago.configure({
  access_token: 'https://api.mercadopago.com/v2/wallet_connect/agreements/{agreement_id}/payer_token', // Reemplaza con tu Access Token
});

const router = express.Router();

// Define la ruta para crear la preferencia
router.post('/api/create_preference', async (req, res) => {
  try {
    const preference = {
      items: [
        {
          title: 'Sample Item',
          quantity: 1,
          currency_id: 'ARS',
          unit_price: 100.00,
        },
      ],
    };

    // Usa el método correcto para crear una preferencia
    const response = await mercadopago.preferences.create(preference);
    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error creating preference');
  }
});

export default router;
