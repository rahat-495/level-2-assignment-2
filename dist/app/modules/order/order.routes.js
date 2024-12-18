"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderRoutes = void 0;
const express_1 = __importDefault(require("express"));
const order_controllers_1 = require("./order.controllers");
const validateRequest_1 = __importDefault(require("../middlewares/validateRequest"));
const order_validation_1 = require("./order.validation");
const router = express_1.default.Router();
router.post('/orders', (0, validateRequest_1.default)(order_validation_1.orderValidations.orderValidationSchema), order_controllers_1.orderControllers.createOrder);
router.get('/orders/revenue', order_controllers_1.orderControllers.getAllRevenue);
exports.orderRoutes = router;
