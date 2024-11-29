"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get("/home", (req, res) => {
    res.send("welcome");
});
app.post("/user", (req, res) => {
    console.log(req === null || req === void 0 ? void 0 : req.body);
    res.send("welcome user");
});
app.listen(9000, () => {
    console.log("Server Started");
});
//# sourceMappingURL=app.js.map