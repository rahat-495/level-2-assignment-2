"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const carSchema = new mongoose_1.default.Schema({
    brand: {
        type: String,
        required: [true, "Plz enter the brand name !"]
    },
    model: {
        type: String,
        required: [true, "Plz enter the model !"]
    },
    year: {
        type: Number,
        required: [true, "Plz enter the year of manufacture !"]
    },
    price: {
        type: Number,
        required: [true, "Plz enter price of the car !"]
    },
    category: {
        type: String,
        enum: ["Sedan", "SUV", "Truck", "Coupe", "Convertible"],
        required: [true, "Plz enter category !"],
    },
    description: {
        type: String,
        required: [true, "Plz enter description !"],
    },
    quantity: {
        type: Number,
        required: [true, "Plz enter quantity of the car available !"],
    },
    inStock: {
        default: true,
        type: Boolean,
    },
    isDeleted: {
        default: false,
        type: Boolean,
    },
}, {
    timestamps: true
});
const CarsModel = mongoose_1.default.model("car", carSchema);
exports.default = CarsModel;
