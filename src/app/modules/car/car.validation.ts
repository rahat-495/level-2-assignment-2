
import { z } from "zod"

export const createCarValidationSchema = z.object({
    body: z.object({
        brand: z.string({
            required_error: "Please enter the brand name!",
        }),
        model: z.string({
            required_error: "Please enter the model!",
        }),
        year: z.number({
            required_error: "Please enter the year of manufacture!",
        }),
        price: z.number({
            required_error: "Please enter the price of the car!",
        }),
        category: z.enum(["Sedan", "SUV", "Truck", "Coupe", "Convertible"], {
            required_error: "Please enter a valid category!",
        }),
        description: z.string({
            required_error: "Please enter a description!",
        }),
        quantity: z.number({
            required_error: "Please enter the quantity of the car available!",
        }),
        inStock: z.boolean().default(true),
        isDeleted: z.boolean().default(false),
    }),
})

export const updateCarValidationSchema = z.object({
    body: z.object({
        brand: z.string({
            required_error: "Please enter the brand name!",
        }).optional(),
        model: z.string({
            required_error: "Please enter the model!",
        }).optional(),
        year: z.number({
            required_error: "Please enter the year of manufacture!",
        }).optional(),
        price: z.number({
            required_error: "Please enter the price of the car!",
        }).optional(),
        category: z.enum(["Sedan", "SUV", "Truck", "Coupe", "Convertible"], {
            required_error: "Please enter a valid category!",
        }).optional(),
        description: z.string({
            required_error: "Please enter a description!",
        }).optional(),
        quantity: z.number({
            required_error: "Please enter the quantity of the car available!",
        }).optional(),
        inStock: z.boolean().default(true).optional(),
        isDeleted: z.boolean().default(false).optional(),
    }),
})

export const carValidations = {
    createCarValidationSchema ,
    updateCarValidationSchema ,
}
