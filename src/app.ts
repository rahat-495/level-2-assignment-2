
import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors" ;
import { carRoutes } from "./app/modules/car/car.routes";
import { orderRoutes } from "./app/modules/order/order.routes";
import { Error } from "mongoose";
const app : Application = express() ;

app.use(cors()) ;
app.use(express.json()) ;
app.use('/api/cars' , carRoutes) ;
app.use('/api/orders' , orderRoutes) ;

app.use((err : Error , req : Request , res : Response , next : NextFunction) : any => {
    if(err){
        const errorResponse = {
            message: err.message || "Something went wrong",
            success: false,
            error: {
                name: err.name || "Error",
            },
            stack: err.stack ,
        };
        return res.status(500).json(errorResponse) ;
    }
})

app.use('/' , (req : Request , res : Response) => {
    res.json({message : "Server are connected !" , success : true}) ;
})

export default app ;
