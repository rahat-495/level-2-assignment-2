"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const orderSchema = new mongoose_1.default.Schema({
    email: {
        type: String,
        required: [true, "Plz enter the email !"],
    },
    car: {
        ref: 'car',
        type: mongoose_1.default.Schema.ObjectId,
        required: [true, "Plz enter the email !"],
    },
    quantity: {
        type: Number,
        required: [true, "Plz enter the quantity of the ordered car !"],
    },
    totalPrice: {
        type: Number,
    },
});
const OrdersModel = mongoose_1.default.model('order', orderSchema);
exports.default = OrdersModel;
