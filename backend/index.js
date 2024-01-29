import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Server } from "socket.io";

const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());

const server = app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
  
  const io = new Server(server, {
    cors: {
      origin: "http://localhost:3000",
      credentials: true,
    },
  });
