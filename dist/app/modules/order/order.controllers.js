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
exports.orderControllers = void 0;
const order_services_1 = require("./order.services");
const car_models_1 = __importDefault(require("../car/car.models"));
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const car = yield car_models_1.default.findById(data === null || data === void 0 ? void 0 : data.car);
        if ((car === null || car === void 0 ? void 0 : car.quantity) > 0) {
            const result = yield (0, order_services_1.createOrderService)(data);
            res.json(result);
        }
        else {
            yield car_models_1.default.updateOne({ _id: car === null || car === void 0 ? void 0 : car._id }, { $set: { inStock: false } });
            res.status(500).json({
                "message": "Insufficient stock available for the requested quantity!",
                "status": false,
            });
        }
    }
    catch (error) {
        res.status(500).json({
            "message": "Validation failed",
            "success": false,
            error: error,
        });
    }
});
const getAllRevenue = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, order_services_1.getAllRevenueService)();
        res.json(result);
    }
    catch (error) {
        res.status(500).json({
            "message": "Validation failed",
            "success": false,
            error: error,
        });
    }
});
exports.orderControllers = {
    createOrder,
    getAllRevenue,
};
