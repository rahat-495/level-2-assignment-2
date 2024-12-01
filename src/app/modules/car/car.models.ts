
import mongoose from "mongoose";
import Car from "./car.interfaces";

const carSchema = new mongoose.Schema<Car>({
    brand : {
        type : String ,
        required : [true , "Plz enter the brand name !"]
    },
    model : {
        type : String ,
        required : [true , "Plz enter the model !"]
    },
    year : {
        type : Number ,
        required : [true , "Plz enter the year of manufacture !"]
    },
    price : {
        type : Number ,
        required : [true , "Plz enter price of the car !"]
    },
    category : {
        type : String ,
        enum : ["Sedan", "SUV", "Truck", "Coupe", "Convertible"] ,
        required : [true , "Plz enter category !"] ,
    },
    description : {
        type : String ,
        required : [true , "Plz enter description !"] ,
    },
    quantity : {
        type : Number ,
        required : [true , "Plz enter quantity of the car available !"] ,
    },
    inStock : {
        default : true ,
        type : Boolean ,
    },
    isDeleted : {
        default : false ,
        type : Boolean ,
    },
},{
    timestamps : true
})

const CarsModel = mongoose.model("car" , carSchema) ;
export default CarsModel ;
