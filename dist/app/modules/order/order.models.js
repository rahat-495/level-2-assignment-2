"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const car_models_1 = __importDefault(require("../car/car.models"));
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
}, {
    timestamps: true
});
orderSchema.pre('save', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        const order = this;
        const car = yield car_models_1.default.findById(order.car);
        if (!car) {
            return next(new Error("Car not found!"));
        }
        order.totalPrice = order.quantity * (car === null || car === void 0 ? void 0 : car.price);
        next();
    });
});
const OrdersModel = mongoose_1.default.model('order', orderSchema);
exports.default = OrdersModel;
