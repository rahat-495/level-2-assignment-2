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
exports.getAllRevenueService = exports.createOrderService = void 0;
const car_models_1 = __importDefault(require("../car/car.models"));
const order_models_1 = __importDefault(require("./order.models"));
const createOrderService = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_models_1.default.create(data);
    const car = yield car_models_1.default.findById(data === null || data === void 0 ? void 0 : data.car);
    yield car_models_1.default.updateOne({ _id: car === null || car === void 0 ? void 0 : car._id }, { $set: { quantity: (car === null || car === void 0 ? void 0 : car.quantity) - 1 } });
    return {
        "message": "Order created successfully",
        "status": true,
        "data": result,
    };
});
exports.createOrderService = createOrderService;
const getAllRevenueService = () => __awaiter(void 0, void 0, void 0, function* () {
    const revenuePipeline = [
        {
            $lookup: {
                from: "cars", // The collection name for CarsModel
                localField: "car",
                foreignField: "_id",
                as: "carDetails",
            },
        },
        {
            $unwind: "$carDetails", // Unwind the car details array
        },
        {
            $project: {
                _id: 0, // Exclude the document ID from the result
                email: 1,
                quantity: 1,
                "carDetails.price": 1,
                totalPrice: {
                    $multiply: ["$quantity", "$carDetails.price"], // Calculate total price
                },
            },
        },
        {
            $group: {
                _id: null, // Group all orders
                totalRevenue: {
                    $sum: "$totalPrice", // Sum up all total prices
                },
            },
        },
    ];
    const result = yield order_models_1.default.aggregate(revenuePipeline);
    return {
        "message": "Revenue calculated successfully",
        "status": true,
        "data": result,
    };
});
exports.getAllRevenueService = getAllRevenueService;
