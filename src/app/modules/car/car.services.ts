
import Car from "./car.interfaces"
import CarsModel from "./car.models"

export const createCarService = async (data : Car) => {
    const result = await CarsModel.create(data) ;
    return {
        "message": "Car created successfully",
        "success": true,
        "data": result ,
    }
}
