// index.js
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import paymentRoutes from './pago.js'; // Importa el enrutador de pagos

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Usa el enrutador de pagos
app.use(paymentRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
