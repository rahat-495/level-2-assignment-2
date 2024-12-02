
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

app.use((err: any, req: Request, res: Response, next: NextFunction) : any => {

    if (err.name === "ValidationError") {

      const customErrors = Object.keys(err.errors).reduce((acc: any, key) => {
        const { message, kind, path, value } = err.errors[key];
        acc[key] = {
          message: message,
          name: err.errors[key].name,
          properties: err.errors[key].properties,
          kind: kind,
          path: path,
          value: value,
        };
        return acc;
      }, {});
  
      return res.status(400).json({
        message: "Validation failed",
        success: false,
        error: {
          name: err.name,
          errors: customErrors,
        },
        stack: err.stack, 
      });

    }
  
    res.status(500).json({
      message: "Something went wrong",
      success: false,
      error: err.message,
    });

});

app.use('/' , (req : Request , res : Response) => {
    res.json({message : "Server are connected !" , success : true}) ;
})

export default app ;
