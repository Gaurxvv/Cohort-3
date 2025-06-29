import { PrismaClient } from "@prisma/client";
import express from "express";

const client = new PrismaClient();
const app = express();

app.use(express.json());

app.get("/users", async (req, res) => {
  const users = await client.user.findMany();
  res.json(users);
});

app.get("/todos/:id", async (req, res) => {
  const id = req.params.id;
  const users = await client.user.findFirst({
    where: {
      id: parseInt(id),
    },
    select: {
      todos: true,
      username: true,
      password: true,
    },
  });
  res.json(users);
});

async function readUser() {
  const user = await client.user.findFirst({
    where: {
      id: 1,
    },
    include: {
      todos: true,
    },
  });

  console.log(user);
}

// Call the readUser function to execute it
readUser();

// Start the Express server on port 3000
app.listen(3000);
