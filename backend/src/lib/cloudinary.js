import { v2 as cloudinary } from 'cloudinary';
import dotenv from "dotenv";
dotenv.config();

// Config Cloudinary (do it once, on app startup)
cloudinary.config({ 
  cloud_name: process.env.CLOUD_NAME, 
  api_key: process.env.API_KEY, 
  api_secret: process.env.API_SECRET 
});

export { cloudinary };
