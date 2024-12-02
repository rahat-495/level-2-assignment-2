"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
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
const mongoose_1 = __importStar(require("mongoose"));
const car_models_1 = __importDefault(require("../car/car.models"));
const validator_1 = __importDefault(require("validator"));
const orderSchema = new mongoose_1.default.Schema({
    email: {
        type: String,
        required: [true, "Plz enter the email !"],
        validate: {
            validator: (value) => validator_1.default.isEmail(value), message: '{VALUE} is not a valid email !'
        }
    },
    car: {
        ref: 'car',
        type: mongoose_1.default.Schema.ObjectId,
        required: [true, "Plz enter the car _id !"],
        validate: {
            validator: (value) => (0, mongoose_1.isValidObjectId)(value), message: '{VALUE} is not a valid car id !'
        }
    },
    quantity: {
        type: Number,
        required: [true, "Plz enter the quantity of the ordered car !"],
        validate: {
            validator: (value) => value > 0, message: '{VALUE} is not a valid car quantity !'
        }
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
