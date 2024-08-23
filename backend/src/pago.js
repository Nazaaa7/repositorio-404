import * as mercadopago from 'mercadopago';
import dotenv from 'dotenv';

dotenv.config();

mercadopago.configure({
  access_token: process.env.MERCADOPAGO_ACCESS_TOKEN // Reemplaza con tu Access Token
});

export const createPreference = async (req, res) => {
  try {
    const preference = {
      items: [
        {
          title: req.body.title,
          quantity: req.body.quantity,
          currency_id: 'ARS',
          unit_price: req.body.price,
        },
      ],
    };

    const response = await mercadopago.preferences.create(preference);
    res.json(response.body);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error creating preference');
  }
};
