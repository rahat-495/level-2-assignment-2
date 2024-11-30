
import mongoose from "mongoose";
import Order from "../interfaces/order.interface";
import CarsModel from "../../car/models/car.model";

const orderSchema = new mongoose.Schema<Order>({
    email : {
        type : String ,
        required : [true , "Plz enter the email !"] ,
    },
    car : {
        ref : 'car' ,
        type : mongoose.Schema.ObjectId ,
        required : [true , "Plz enter the email !"] ,
    },
    quantity : {
        type : Number ,
        required : [true , "Plz enter the quantity of the ordered car !"] ,
    },
    totalPrice : {
        type : Number ,
    },
})

const OrdersModel = mongoose.model('order' , orderSchema) ;
export default OrdersModel ;
