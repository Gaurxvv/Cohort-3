import { Client } from "pg";
import express from "express";

const app = express();
app.use(express.json());

const pgClient = new Client(
  "postgresql://neondb_owner:npg_G8QgHAUnM2lN@ep-withered-lab-a8e721e3-pooler.eastus2.azure.neon.tech/neondb?sslmode=require"
);
pgClient.connect();

app.post("/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;

  const city = req.body.city;
  const country = req.body.country;
  const street = req.body.street;
  const pincode = req.body.pincode;
  try {
    const insertQuery =
      "INSERT INTO users (username, password, email) VALUES ($1, $2, $3) RETURNING id";
    const addressQuery =
      "INSERT INTO addresses (city, country, street, pincode,user_id) VALUES ($1, $2, $3, $4, $5)";
    await pgClient.query("BEGIN");
    const response = await pgClient.query(insertQuery, [
      username,
      password,
      email,
    ]);
    const userId = response.rows[0].id;
    await pgClient.query(addressQuery, [
      city,
      country,
      street,
      pincode,
      userId,
    ]);
    await pgClient.query("COMMIT");
    res.json({ message: "User created successfully" });
  } catch (error) {
    console.error("Error inserting user:", error);
    res.status(500).json({ error: "Failed to create user" });
  }
});

app.get("/metadata", async (req, res) => {
  const id = req.query.id;

  const query =
    "SELECT users.id, users.username, users.email, addresses.city, addresses.country, addresses.street, addresses.pincode FROM users JOIN addresses ON users.id = addresses.user_id WHERE users.id=$1";
  const response = await pgClient.query(query, [id]);

  res.json({
    user: response.rows,
  });
});
app.listen(3000);
