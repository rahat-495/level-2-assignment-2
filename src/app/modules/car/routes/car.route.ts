
import express from "express";
import { carControllers } from "../controllers/createCar";
const router = express.Router() ;

router.post('/' , carControllers.createCar) ;

export const carRoutes = router ;
