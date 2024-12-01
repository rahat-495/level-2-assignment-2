
import express from "express";
import { carControllers } from "./car.controllers";
const router = express.Router() ;

router.post('/' , carControllers.createCar) ;
router.get('/' , carControllers.getAllCars) ;
router.get('/:carId' , carControllers.getSpecificCar) ;
router.put('/:carId' , carControllers.updateSpecificCar) ;
router.delete('/:carId' , carControllers.deleteSpecificCar) ;

export const carRoutes = router ;
