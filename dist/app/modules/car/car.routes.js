"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.carRoutes = void 0;
const express_1 = __importDefault(require("express"));
const car_controllers_1 = require("./car.controllers");
const validateRequest_1 = __importDefault(require("../middlewares/validateRequest"));
const car_validation_1 = require("./car.validation");
const router = express_1.default.Router();
router.post('/cars', (0, validateRequest_1.default)(car_validation_1.carValidations.createCarValidationSchema), car_controllers_1.carControllers.createCar);
router.get('/cars', car_controllers_1.carControllers.getAllCars);
router.get('/cars/:carId', car_controllers_1.carControllers.getSpecificCar);
router.put('/cars/:carId', (0, validateRequest_1.default)(car_validation_1.carValidations.updateCarValidationSchema), car_controllers_1.carControllers.updateSpecificCar);
router.delete('/cars/:carId', car_controllers_1.carControllers.deleteSpecificCar);
exports.carRoutes = router;
