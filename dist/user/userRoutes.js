import express from "express";
import fs from "fs";
import path from "path";
const filePath = path.join(__dirname, "../../../db/todos.json");
export const userRoutes = express.Router();
userRoutes.get("/user", (req, res) => {
    fs.readFile(filePath, "utf-8", (err, data) => {
        if (err) {
            console.error("Error reading file:", err);
            res.status(500).send("Internal Server Error");
            return;
        }
        const users = JSON.parse(data);
        res.send(users);
    });
});
export default userRoutes;
