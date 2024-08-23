// backend/src/index.js
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { createPreference } from './pago.js';

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/api/create_preference', createPreference);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
