import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, "../../../db/todos.json");
export const todosRouter = express.Router();
todosRouter.get("/todos", (req, res) => {
    fs.readFile(filePath, "utf-8", (err, data) => {
        if (err) {
            console.error("Error reading file:", err);
            res.status(500).send("Internal Server Error");
            return;
        }
        const todos = JSON.parse(data);
        res.send(todos);
    });
});
todosRouter.post("/todos", (req, res) => {
    fs.writeFile(filePath, JSON.stringify(req.body), (err) => {
        if (err) {
            res.status(500).send("Internal Server Error");
            return;
        }
        res
            .status(201)
            .send("Todo created successfully " + JSON.stringify(req.body));
        console.log(req.body);
    });
});
todosRouter.delete("/todos/:id", (req, res) => {
    const todoId = req.params.id;
    const todos = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    const updatedTodos = todos.filter((todo) => todo.id !== todoId);
    fs.writeFile(filePath, JSON.stringify(updatedTodos), (err) => {
        if (err) {
            res.status(500).send("Internal Server Error");
            return;
        }
        res.status(200).send(`Todo with id ${todoId} deleted successfully`);
        console.log(`Todo with id ${todoId} deleted successfully`);
    });
});
