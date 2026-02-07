import dotenv from "dotenv";
dotenv.config();

export const envConfig = {
    PORT: process.env.PORT,
    MONGODB_URI: process.env.MONGODB_URL   
}