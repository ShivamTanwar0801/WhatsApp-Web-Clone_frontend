// src/socket.js
import { io } from "socket.io-client";

// Use environment variable for API/Socket URL, fallback to current origin
const SOCKET_URL = import.meta.env.VITE_SOCKET_URL || "http://localhost:4000";

export const socket = io(SOCKET_URL, {
  transports: ["websocket", "polling"],
  withCredentials: true,
});
