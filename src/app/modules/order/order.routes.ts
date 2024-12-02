
import express from "express";
import { orderControllers } from "./order.controllers";

const router = express.Router() ;

router.post('/api/orders' , orderControllers.createOrder) ;
router.get('/api/orders/revenue' , orderControllers.getAllRevenue) ;

export const orderRoutes = router ;
