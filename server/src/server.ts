import { prisma } from "./prisma";
import express from "express";

const app = express();

app.use(express.json());

app.post("/feedbacks", async (req, res) => {
  const { type, comment, screenshot } = req.body;

  const feedback = await prisma.feedback.create({
    data: {
      type,
      comment,
      screenshot,
    },
  });

  return res.status(201).json({ data: feedback });
});

app.listen(4444, () => {
  console.log("HTTP server running!");
});
