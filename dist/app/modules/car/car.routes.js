"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.carRoutes = void 0;
const express_1 = __importDefault(require("express"));
const car_controllers_1 = require("./car.controllers");
const router = express_1.default.Router();
router.post('/api/cars', car_controllers_1.carControllers.createCar);
router.get('/api/cars', car_controllers_1.carControllers.getAllCars);
router.get('/api/cars/:carId', car_controllers_1.carControllers.getSpecificCar);
router.put('/api/cars/:carId', car_controllers_1.carControllers.updateSpecificCar);
router.delete('/api/cars/:carId', car_controllers_1.carControllers.deleteSpecificCar);
exports.carRoutes = router;
