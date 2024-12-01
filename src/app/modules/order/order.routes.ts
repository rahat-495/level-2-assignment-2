
import express from "express";
import { orderControllers } from "./order.controllers";

const router = express.Router() ;

router.post('/' , orderControllers.createOrder) ;
router.get('/revenue' , orderControllers.getAllRevenue) ;

export const orderRoutes = router ;
