
import mongoose from "mongoose";
import Car from "./car.interfaces";
import validator from 'validator';

const carSchema = new mongoose.Schema<Car>({
    brand : {
        type : String ,
        required : [true , "Plz enter the brand name !"] ,
        validate : {
            validator : (value : string) => validator.isAlpha(value) , message : '{VALUE} is not valid' ,
        }
    },
    model : {
        type : String ,
        required : [true , "Plz enter the model !"] ,
        validate : {
            validator : (value : string) => validator.isAlpha(value) , message : '{VALUE} is not valid' ,
        }
    },
    year : {
        type : Number ,
        required : [true , "Plz enter the year of manufacture !"] ,
        validate : {
            validator: (value: number) => {
                const currentYear = new Date().getFullYear();
                return value >= 1886 && value <= currentYear; // Ensure the year is valid
            },
            message: (props: { value: number }) => `${props.value} is not a valid year! Year must be between 1886 and ${new Date().getFullYear()}.`,
        },
    },
    price : {
        type : Number ,
        required : [true , "Plz enter price of the car !"] ,
        validate : {
            validator : (value : number) => validator.isNumeric(String(value)) , message : '{VALUE} is not valid' ,
        },
    },
    category : {
        type : String ,
        enum : ["Sedan", "SUV", "Truck", "Coupe", "Convertible"] ,
        required : [true , "Plz enter category !"] ,
        validate : {
            validator : (value : string) => validator.isAlpha(value) , message : '{VALUE} is not valid' ,
        },
    },
    description : {
        type : String ,
        required : [true , "Plz enter description !"] ,
        validate : {
            validator : (value : string) => value.trim().length > 10 , message : '{VALUE} is not valid . Please enter minimum 10 letters !' ,
        },
    },
    quantity : {
        type : Number ,
        required : [true , "Plz enter quantity of the car available !"] ,
        validate : {
            validator : (value : number) => value > 0 , message : '{VALUE} is not valid' ,
        },
    },
    inStock : {
        default : true ,
        type : Boolean ,
        validate : {
            validator : (value : boolean) => value , message : '{VALUE} is not valid for initially create !' ,
        },
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
