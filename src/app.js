import express from "express";

import employeesRouter from "./routes/employes.routes.js";
import pingRouter from "./routes/index.routes.js";
const app = express();

app.use(express.json());

app.use(pingRouter);
app.use("/api", employeesRouter);

app.use((req, res, next) => {
  res.status(404).json({
    message: "endpoint not found",
  });
});

export default app;
