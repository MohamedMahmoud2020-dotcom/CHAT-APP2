import express from "express"
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js"
import dotenv from "dotenv"
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser"
import cors from "cors"
import { app, io, server } from "./lib/socket.js";

dotenv.config();


app.use(express.json({ limit: '10mb' })); // or higher if needed
app.use(cookieParser())
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}
))

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes)
server.listen(5001, ()=>{
    console.log("Server is running on port 5001");
    connectDB();
})
