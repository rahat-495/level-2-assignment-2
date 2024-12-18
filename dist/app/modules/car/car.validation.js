"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.carValidations = exports.updateCarValidationSchema = exports.createCarValidationSchema = void 0;
const zod_1 = require("zod");
exports.createCarValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        brand: zod_1.z.string({
            required_error: "Please enter the brand name!",
        }),
        model: zod_1.z.string({
            required_error: "Please enter the model!",
        }),
        year: zod_1.z.number({
            required_error: "Please enter the year of manufacture!",
        }),
        price: zod_1.z.number({
            required_error: "Please enter the price of the car!",
        }),
        category: zod_1.z.enum(["Sedan", "SUV", "Truck", "Coupe", "Convertible"], {
            required_error: "Please enter a valid category!",
        }),
        description: zod_1.z.string({
            required_error: "Please enter a description!",
        }),
        quantity: zod_1.z.number({
            required_error: "Please enter the quantity of the car available!",
        }),
        inStock: zod_1.z.boolean().default(true),
        isDeleted: zod_1.z.boolean().default(false),
    }),
});
exports.updateCarValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        brand: zod_1.z.string({
            required_error: "Please enter the brand name!",
        }).optional(),
        model: zod_1.z.string({
            required_error: "Please enter the model!",
        }).optional(),
        year: zod_1.z.number({
            required_error: "Please enter the year of manufacture!",
        }).optional(),
        price: zod_1.z.number({
            required_error: "Please enter the price of the car!",
        }).optional(),
        category: zod_1.z.enum(["Sedan", "SUV", "Truck", "Coupe", "Convertible"], {
            required_error: "Please enter a valid category!",
        }).optional(),
        description: zod_1.z.string({
            required_error: "Please enter a description!",
        }).optional(),
        quantity: zod_1.z.number({
            required_error: "Please enter the quantity of the car available!",
        }).optional(),
        inStock: zod_1.z.boolean().default(true).optional(),
        isDeleted: zod_1.z.boolean().default(false).optional(),
    }),
});
exports.carValidations = {
    createCarValidationSchema: exports.createCarValidationSchema,
    updateCarValidationSchema: exports.updateCarValidationSchema,
};
