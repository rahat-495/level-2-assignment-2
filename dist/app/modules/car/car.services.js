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
exports.getAllCarsService = exports.createCarService = void 0;
const car_models_1 = __importDefault(require("./car.models"));
const createCarService = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield car_models_1.default.create(data);
    return {
        "message": "Car created successfully",
        "success": true,
        "data": result,
    };
});
exports.createCarService = createCarService;
const getAllCarsService = (searchTerm) => __awaiter(void 0, void 0, void 0, function* () {
    if (searchTerm) {
        const result = yield car_models_1.default.find({
            $or: [
                { brand: { $regex: searchTerm, $options: "i" } },
                { model: { $regex: searchTerm, $options: "i" } },
                { category: { $regex: searchTerm, $options: "i" } }
            ]
        });
        return {
            "message": "Cars retrieved successfully",
            "status": true,
            "data": result,
        };
    }
    else {
        const result = yield car_models_1.default.find();
        return {
            "message": "Cars retrieved successfully",
            "status": true,
            "data": result,
        };
    }
});
exports.getAllCarsService = getAllCarsService;
