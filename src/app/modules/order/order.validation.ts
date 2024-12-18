
import { z } from "zod"

export const orderValidationSchema = z.object({
    body: z.object({email: z.string({required_error: "Please enter the email!",}).email("Invalid email address!"),
        car: z.string({required_error: "Please enter the car _id!",}),
        quantity: z.number({required_error: "Please enter the quantity of the ordered car!",}).positive("Quantity must be greater than 0!"),
        totalPrice: z.number().optional(),
    }),
})

export const orderValidations = {
    orderValidationSchema ,
}
