
import { Request, Response } from "express"
import { createCarService, getAllCarsService } from "./car.services";
import { Query } from "mongoose";

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

export const carControllers = {
    createCar ,
    getAllCars
}
