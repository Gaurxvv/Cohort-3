import { Client } from "pg";

const pgClient = new Client(
  "postgresql://neondb_owner:npg_G8QgHAUnM2lN@ep-withered-lab-a8e721e3-pooler.eastus2.azure.neon.tech/neondb?sslmode=require"
);
async function initializeDatabase() {
  try {
    await pgClient.connect();
    await pgClient.query(`
      CREATE TABLE IF NOT EXISTS SQL_String (
        id SERIAL PRIMARY KEY,              
        username VARCHAR(50) UNIQUE NOT NULL, 
        email VARCHAR(255) UNIQUE NOT NULL,   
        password VARCHAR(255) NOT NULL,       
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP 
      );
    `);
    console.log("Table initialized successfully.");
  } catch (err) {
    console.error("Error during table initialization:", err);
  }
}

async function insertData(username: string, email: string, password: string) {
  try {
    const insertQuery =
      "INSERT INTO SQL_String (username, email, password) VALUES ($1, $2, $3)";
    const values = [username, email, password];
    const res = await pgClient.query(insertQuery, values);
    console.log("Insertion success:", res);
  } catch (err) {
    console.error("Error during the insertion:", err);
  }
}
