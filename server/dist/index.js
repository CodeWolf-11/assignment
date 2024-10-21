"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 5000;
app.use(express_1.default.json());
app.get("/", (req, res) => {
    return res.json({ "message": "This is a message" });
});
app.listen(PORT, () => {
    console.log("Server is running on port 5000");
});
