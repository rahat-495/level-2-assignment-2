"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const car_routes_1 = require("./app/modules/car/car.routes");
const order_routes_1 = require("./app/modules/order/order.routes");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/api/cars', car_routes_1.carRoutes);
app.use('/api/orders', order_routes_1.orderRoutes);
app.use('/', (req, res) => {
    res.json({ message: "Server are connected !", success: true });
});
exports.default = app;
