
import Car from "./car.interfaces"
import CarsModel from "./car.models"

export const createCarService = async (data : Car) => {
    const result = await CarsModel.create({...data , isDeleted : false}) ;
    return {
        "message": "Car created successfully",
        "success": true,
        "data": result ,
    }
}

export const getAllCarsService = async (searchTerm : string) => {
    if(searchTerm){
        const result = await CarsModel.find({
            isDeleted : {$ne : true} ,
            $or: [
              { brand: { $regex: searchTerm, $options: "i" } },
              { model: { $regex: searchTerm, $options: "i" } }, 
              { category: { $regex: searchTerm, $options: "i" } }
            ] 
        }).select("-__v") ;
        return {
            "message": "Cars retrieved successfully",
            "status": true,
            "data": result ,
        }
    }
    else{
        const result = await CarsModel.find({isDeleted : {$ne : true}}) ;
        return {
            "message": "Cars retrieved successfully",
            "status": true,
            "data": result ,
        }    
    }
}

export const getSpecificCarService = async (carId : string) => {
    const result = await CarsModel.findOne({$and : [{_id : carId} , {isDeleted : {$ne : true}}]}).select("-__v") ;
    return {
        "message": "Car retrieved successfully",
        "status": true,
        "data": result ,
    }
}

export const updateSpecificCarService = async (carId : string , data : object) => {
    const result = await CarsModel.updateOne({_id : carId} , { $set : data }) ;
    if(result?.modifiedCount > 0){
        const car = await CarsModel.findById(carId).select("-__v") ;
        return {
            "message": "Car updated successfully",
            "status": true,
            "data": car ,
        }
    }
}

export const deleteSpecificCarService = async (carId : string) => {
    const result = await CarsModel.updateOne({_id : carId} , { $set : { isDeleted : true } }) ;
    if(result.modifiedCount > 0){
        return {
            "message": "Car deleted successfully",
            "status": true,
            "data": {}
        }
    }
}
