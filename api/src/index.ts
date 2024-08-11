import "./setup";

import express from "express";
import http from "http";
import { configureServer } from "./configureServer";
import { database } from "./infra/database/pg";

const app = express();
const server = http.createServer(app);

// Handle SIGTERM signal
process.on('SIGTERM', () => {
  console.log('Received SIGTERM signal. Shutting down gracefully...');
});

database.connect();

configureServer(app);

const PORT = process.env.SERVER_PORT || 5686;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
