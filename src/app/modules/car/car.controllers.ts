
import { Request, Response } from "express"
import { createCarService } from "./car.services";

const createCar = async (req : Request , res : Response) => {
    const data = req.body ;
    const result = await createCarService(data) ;
    res.json(result) ;
}

export const carControllers = {
    createCar ,
}
