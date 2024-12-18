
import express from "express";
import { carControllers } from "./car.controllers";
const router = express.Router() ;

router.post('/cars' , carControllers.createCar) ;
router.get('/cars' , carControllers.getAllCars) ;
router.get('/cars/:carId' , carControllers.getSpecificCar) ;
router.put('/cars/:carId' , carControllers.updateSpecificCar) ;
router.delete('/cars/:carId' , carControllers.deleteSpecificCar) ;

export const carRoutes = router ;
