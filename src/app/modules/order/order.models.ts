
import mongoose, { isValidObjectId } from "mongoose";
import Order from "./order.interfaces";
import CarsModel from "../car/car.models";
import validator from "validator";

const orderSchema = new mongoose.Schema<Order>({
    email : {
        type : String ,
        required : [true , "Plz enter the email !"] ,
        validate : {
            validator : (value : string) => validator.isEmail(value) , message : '{VALUE} is not a valid email !'
        }
    },
    car : {
        ref : 'car' ,
        type : mongoose.Schema.ObjectId ,
        required : [true , "Plz enter the car _id !"] ,
        validate : {
            validator : (value : string) => isValidObjectId(value) , message : '{VALUE} is not a valid car id !'
        }
    },
    quantity : {
        type : Number ,
        required : [true , "Plz enter the quantity of the ordered car !"] ,
        validate : {
            validator : (value : number) => value > 0 , message : '{VALUE} is not a valid car quantity !'
        }
    },
    totalPrice : {
        type : Number ,
    },
},{
    timestamps : true
})

orderSchema.pre('save' , async function (next){
    const order = this ;
    const car = await CarsModel.findById(order.car) ;

    if(!car){
        return next(new Error("Car not found!"));
    }

    order.totalPrice = order.quantity * car?.price ;
    next() ;
})

const OrdersModel = mongoose.model('order' , orderSchema) ;
export default OrdersModel ;
