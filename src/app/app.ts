import express, { Application, Request, Response } from "express";
import { todosRouter } from "./todos/todos.js";
import { userRoutes } from "./user/userRoutes.js";
const app: Application = express();
app.use(express.json());

// Set up todos router

app.use("/", todosRouter); // Optional prefix like /api
app.use("/", userRoutes);

// Root route
app.get("/", (req: Request, res: Response) => {
  res.send("Hey Hello from server. I am changing by nodemon!!!");
});

export default app;
