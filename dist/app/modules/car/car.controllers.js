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
Object.defineProperty(exports, "__esModule", { value: true });
exports.carControllers = void 0;
const car_services_1 = require("./car.services");
const createCar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const result = yield (0, car_services_1.createCarService)(data);
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
const getAllCars = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { searchTerm } = req.query;
        const result = yield (0, car_services_1.getAllCarsService)(searchTerm);
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
const getSpecificCar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { carId } = req.params;
        const result = yield (0, car_services_1.getSpecificCarService)(carId);
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
const updateSpecificCar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const { carId } = req.params;
        const result = yield (0, car_services_1.updateSpecificCarService)(carId, data);
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
const deleteSpecificCar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { carId } = req.params;
        const result = yield (0, car_services_1.deleteSpecificCarService)(carId);
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
exports.carControllers = {
    createCar,
    getAllCars,
    getSpecificCar,
    updateSpecificCar,
    deleteSpecificCar,
};
