
import express from "express";
import { carControllers } from "./car.controllers";
const router = express.Router() ;

router.post('/api/cars' , carControllers.createCar) ;
router.get('/api/cars' , carControllers.getAllCars) ;
router.get('/api/cars/:carId' , carControllers.getSpecificCar) ;
router.put('/api/cars/:carId' , carControllers.updateSpecificCar) ;
router.delete('/api/cars/:carId' , carControllers.deleteSpecificCar) ;

export const carRoutes = router ;
