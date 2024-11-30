
import { Request, Response } from "express"
import { createCarService, getAllCarsService, getSpecificCarService } from "./car.services";

const createCar = async (req : Request , res : Response) => {
    const data = req.body ;
    const result = await createCarService(data) ;
    res.json(result) ;
}

const getAllCars = async (req : Request , res : Response) => {
    const {searchTerm} = req.query ;
    const result = await getAllCarsService(searchTerm as string) ;
    res.json(result) ;
}

const getSpecificCar = async (req : Request , res : Response) => {
    const {carId} = req.params;
    const result = await getSpecificCarService(carId) ;
    res.json(result) ;
}

export const carControllers = {
    createCar ,
    getAllCars ,
    getSpecificCar ,
}
