
import express, { Application, Request, Response } from "express";
import cors from "cors" ;
import { carRoutes } from "./app/modules/car/car.routes";
import { orderRoutes } from "./app/modules/order/order.routes";
const app : Application = express() ;

app.use(cors()) ;
app.use(express.json()) ;
app.use('/api/cars' , carRoutes) ;
app.use('/api/orders' , orderRoutes) ;

app.use('/' , (req : Request , res : Response) => {
    res.json({message : "Server are connected !" , success : true}) ;
})

export default app ;
