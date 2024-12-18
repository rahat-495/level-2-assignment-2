"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderValidations = exports.orderValidationSchema = void 0;
const zod_1 = require("zod");
exports.orderValidationSchema = zod_1.z.object({
    body: zod_1.z.object({ email: zod_1.z.string({ required_error: "Please enter the email!", }).email("Invalid email address!"),
        car: zod_1.z.string({ required_error: "Please enter the car _id!", }),
        quantity: zod_1.z.number({ required_error: "Please enter the quantity of the ordered car!", }).positive("Quantity must be greater than 0!"),
        totalPrice: zod_1.z.number().optional(),
    }),
});
exports.orderValidations = {
    orderValidationSchema: exports.orderValidationSchema,
};
