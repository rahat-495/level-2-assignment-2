
import { Request, Response } from "express"
import { createCarService, deleteSpecificCarService, getAllCarsService, getSpecificCarService, updateSpecificCarService } from "./car.services";

const createCar = async (req : Request , res : Response) => {
    try {
        const data = req.body ;
        const result = await createCarService(data) ;
        res.json(result) ;
    } catch (error) {
        res.status(500).json({
            "message": "Validation failed",
            "success": false,
            error : error,
        })
    }
}

const getAllCars = async (req : Request , res : Response) => {
    try {
        const {searchTerm} = req.query ;
        const result = await getAllCarsService(searchTerm as string) ;
        res.json(result) ;
    } catch (error) {
        res.status(500).json({
            "message": "Validation failed",
            "success": false,
            error : error,
        })
    }
}

const getSpecificCar = async (req : Request , res : Response) => {
    try {
        const {carId} = req.params;
        const result = await getSpecificCarService(carId) ;
        res.json(result) ;
    } catch (error) {
        res.status(500).json({
            "message": "Validation failed",
            "success": false,
            error : error,
        })
    }
}

const updateSpecificCar = async (req : Request , res : Response) => {
    try {
        const data : object = req.body ;
        const {carId} = req.params;
        const result = await updateSpecificCarService(carId , data) ;
        res.json(result) ;
    } catch (error) {
        res.status(500).json({
            "message": "Validation failed",
            "success": false,
            error : error,
        })
    }
}

const deleteSpecificCar = async (req : Request , res : Response) => {
    try {
        const {carId} = req.params;
        const result = await deleteSpecificCarService(carId) ;
        res.json(result) ;
    } catch (error) {
        res.status(500).json({
            "message": "Validation failed",
            "success": false,
            error : error,
        })
    }
}

export const carControllers = {
    createCar ,
    getAllCars ,
    getSpecificCar ,
    updateSpecificCar ,
    deleteSpecificCar ,
}
