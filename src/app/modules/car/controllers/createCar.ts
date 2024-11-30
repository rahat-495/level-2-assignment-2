
import { Request, Response } from "express"

const createCar = async (req : Request , res : Response) => {
    console.log(req.body) ;
}

export const carControllers = {
    createCar ,
}
