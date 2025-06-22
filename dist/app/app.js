import express from "express";
const app = express();
app.use(express.json());
// Set up todos router
const todosRouter = express.Router();
app.use("/", todosRouter); // Optional prefix like /api
todosRouter.get("/todo", (req, res) => {
    res.send([{ id: 1, title: "Learn TypeScript", completed: false }]);
});
// Root route
app.get("/", (req, res) => {
    res.send("Hey Hello from server. I am changing by nodemon!!!");
});
export default app;
