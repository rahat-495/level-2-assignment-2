
import express from "express";
import { carControllers } from "./car.controllers";
const router = express.Router() ;

router.post('/' , carControllers.createCar) ;
router.get('/' , carControllers.getAllCars) ;

export const carRoutes = router ;
