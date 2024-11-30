
import express from "express";
import { carControllers } from "./car.controllers";
const router = express.Router() ;

router.post('/' , carControllers.createCar) ;
router.get('/' , carControllers.getAllCars) ;
router.get('/:carId' , carControllers.getSpecificCar) ;

export const carRoutes = router ;
