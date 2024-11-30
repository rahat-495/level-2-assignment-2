
import express from "express";
import { carControllers } from "./car.controllers";
const router = express.Router() ;

router.post('/' , carControllers.createCar) ;

export const carRoutes = router ;
