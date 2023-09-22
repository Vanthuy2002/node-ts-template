import express, { Express } from 'express';
import cors from 'cors';
import cookie from 'cookie-parser';

const defineConfig = (app: Express) => {
  app.use(cors());
  app.use(express.json());
  app.use(cookie());
};

export { defineConfig };
