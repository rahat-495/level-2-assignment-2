
import { Request, Response } from "express" ;
import { createOrderService, getAllRevenueService } from "./order.services";
import CarsModel from "../car/car.models";
import Order from "./order.interfaces";
import OrdersModel from "./order.models";

const createOrder = async (req : Request , res : Response) => {
    const data : Order = req.body ;
    const car = await CarsModel.findById(data?.car) ;
    if(car?.quantity as number > 0){
        const result = await createOrderService(data) ;
        res.json(result) ;
    }
    else{
        await CarsModel.updateOne({_id : car?._id} , { $set : { inStock : false } })
        res.status(500).json({
            "message": "Insufficient stock available for the requested quantity!",
            "status": false ,
        })
    }
}

const getAllRevenue = async (req : Request , res : Response) => {
    const result = await getAllRevenueService() ;
    res.json(result) ;
}

export const orderControllers = {
    createOrder ,
    getAllRevenue ,
}
