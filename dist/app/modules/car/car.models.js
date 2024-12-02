"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const validator_1 = __importDefault(require("validator"));
const carSchema = new mongoose_1.default.Schema({
    brand: {
        type: String,
        required: [true, "Plz enter the brand name !"],
        validate: {
            validator: (value) => validator_1.default.isAlpha(value), message: '{VALUE} is not valid',
        }
    },
    model: {
        type: String,
        required: [true, "Plz enter the model !"],
        validate: {
            validator: (value) => validator_1.default.isAlpha(value), message: '{VALUE} is not valid',
        }
    },
    year: {
        type: Number,
        required: [true, "Plz enter the year of manufacture !"],
        validate: {
            validator: (value) => {
                const currentYear = new Date().getFullYear();
                return value >= 1886 && value <= currentYear; // Ensure the year is valid
            },
            message: (props) => `${props.value} is not a valid year! Year must be between 1886 and ${new Date().getFullYear()}.`,
        },
    },
    price: {
        type: Number,
        required: [true, "Plz enter price of the car !"],
        validate: {
            validator: (value) => validator_1.default.isNumeric(String(value)), message: '{VALUE} is not valid',
        },
    },
    category: {
        type: String,
        enum: ["Sedan", "SUV", "Truck", "Coupe", "Convertible"],
        required: [true, "Plz enter category !"],
        validate: {
            validator: (value) => validator_1.default.isAlpha(value), message: '{VALUE} is not valid',
        },
    },
    description: {
        type: String,
        required: [true, "Plz enter description !"],
        validate: {
            validator: (value) => value.trim().length > 10, message: '{VALUE} is not valid . Please enter minimum 10 letters !',
        },
    },
    quantity: {
        type: Number,
        required: [true, "Plz enter quantity of the car available !"],
        validate: {
            validator: (value) => value > 0, message: '{VALUE} is not valid',
        },
    },
    inStock: {
        default: true,
        type: Boolean,
        validate: {
            validator: (value) => value, message: '{VALUE} is not valid for initially create !',
        },
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
