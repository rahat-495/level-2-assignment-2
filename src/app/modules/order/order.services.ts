
import CarsModel from "../car/car.models";
import Order from "./order.interfaces";
import OrdersModel from "./order.models";

export const createOrderService = async (data : Order) => {
    const result = await OrdersModel.create(data) ;
    const car = await CarsModel.findById(data?.car) ;
    await CarsModel.updateOne({_id : car?._id} , { $set : { quantity : car?.quantity as number - 1 } })
    return {
        "message": "Order created successfully",
        "status": true ,
        "data": result ,
    }
}

export const getAllRevenueService = async () => {
    const revenuePipeline = [
        {
            $lookup: {
                from: "cars", // The collection name for CarsModel
                localField: "car",
                foreignField: "_id",
                as: "carDetails",
            },
        },
        {
            $unwind: "$carDetails", // Unwind the car details array
        },
        {
            $project: {
                _id: 0, // Exclude the document ID from the result
                email: 1,
                quantity: 1,
                "carDetails.price": 1,
                totalPrice: {
                    $multiply: ["$quantity", "$carDetails.price"], // Calculate total price
                },
            },
        },
        {
            $group: {
                _id: null, // Group all orders
                totalRevenue: {
                    $sum: "$totalPrice", // Sum up all total prices
                },
            },
        },
    ];
    const result = await OrdersModel.aggregate(revenuePipeline);
    return {
        "message": "Revenue calculated successfully",
        "status": true,
        "data": result ,
    }
}
