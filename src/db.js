import { createPool } from "mysql2/promise";
import { BD_PASS, BD_DATABASE, DB_PORT, DB_USER, HOST } from "./config.js";

export const pool = createPool({
  host: HOST,
  user: DB_USER,
  password: BD_PASS,
  database: BD_DATABASE,
  port: +DB_PORT,
});
