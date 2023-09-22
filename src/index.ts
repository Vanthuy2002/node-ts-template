import express from 'express';
import dotenv from 'dotenv';
import { defineConfig } from './config';

dotenv.config();
const app = express();
const PORT = process.env.PORT;

defineConfig(app);

app.listen(PORT, () => console.log(`Express is listening at port ${PORT}`));
