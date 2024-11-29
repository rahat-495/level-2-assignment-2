
import { ObjectId } from "mongoose";

interface Order {
    email : string ;
    car : ObjectId ;
    quantity : number ;
    totalPrice : number ;
}

export default Order ;
