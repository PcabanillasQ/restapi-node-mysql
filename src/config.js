import { config } from "dotenv";
config();

export const PORT = process.env.PORT || 3000;
export const DB_PORT = process.env.DB_PORT || 3306;
export const DB_USER = process.env.DB_USER || "root";
export const BD_DATABASE = process.env.BD_DATABASE || "companydb";
export const BD_PASS = process.env.DB_PASS || "PCabanillasQ1";
export const HOST = process.env.DB_HOST || "127.0.0.1";
