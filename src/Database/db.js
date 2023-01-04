import pkg from "pg";
import dotenv from "dotenv";
dotenv.config();

const { Pool } = pkg;

const connectionDb = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});

export default connectionDb;