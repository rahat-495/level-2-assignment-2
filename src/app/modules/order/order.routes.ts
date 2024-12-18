
import express from "express";
import { orderControllers } from "./order.controllers";
import validateRequest from "../middlewares/validateRequest";
import { orderValidations } from "./order.validation";

const router = express.Router() ;

router.post('/orders' , validateRequest(orderValidations.orderValidationSchema) , orderControllers.createOrder) ;
router.get('/orders/revenue' , orderControllers.getAllRevenue) ;

export const orderRoutes = router ;
