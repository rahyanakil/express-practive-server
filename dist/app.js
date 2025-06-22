"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get("/", (req, res) => {
    console.log("request", req, "response", res);
    res.send("Hello from server!!!");
});
exports.default = app;
//server --> server handling like -starting,closing error handling of server.only related to server
//app --> routing handle,middleware,route related error handling
//app folder -->app business logic handling like create read update delete ,database related work
