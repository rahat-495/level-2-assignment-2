
import express from "express";
import { carControllers } from "./car.controllers";
import validateRequest from "../middlewares/validateRequest";
import { carValidations} from "./car.validation";
const router = express.Router() ;

router.post('/cars' , validateRequest(carValidations.createCarValidationSchema) , carControllers.createCar) ;
router.get('/cars' , carControllers.getAllCars) ;
router.get('/cars/:carId' , carControllers.getSpecificCar) ;
router.put('/cars/:carId' , validateRequest(carValidations.updateCarValidationSchema) , carControllers.updateSpecificCar) ;
router.delete('/cars/:carId' , carControllers.deleteSpecificCar) ;

export const carRoutes = router ;
