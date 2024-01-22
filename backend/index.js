import express, { request, response } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import booksRoute from "./routes/booksRoute.js";

const app = express();

// Middleawere for parsing request body
app.use(express.json());

// Middleware for handling CORS Policy
// Option 1: Allow All Origins with Default of Cors(*)
// app.use(cors());
// Option 2: Allow Custom Origins
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.get("/", (request, response) => {
  console.log(request);
  return response.status(200).send("Hello World!");
});

app.use("/books", booksRoute);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((error) => console.log(error));
