import express from "express";
import dotenv from "dotenv";
import errorHandler from "./middlewares/errorMiddlewares.js";
import questionRouter from "./routes/questionsRoutes.js";
dotenv.config();

const app = express();

app.use(express.json());

app.use("/api", questionRouter);

app.use(errorHandler);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
