import { Request, Response, NextFunction } from "express";
import Order from "../model/order";


// ###########################################################################################
// #############################        make order           #################################
// ###########################################################################################
export const makeOrder = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {

    try {
        const order = req.body;
        if (!order.orderStatus || order.orderStatus.length < 7) {
            return res.status(400).json({
                Error: 'order status is misspelled or missing'
            })
        }
        if (!order.userID || order.userID.length < 24 || order.userID.length > 24) {
            return res.status(400).json({
                Error: 'user id is misspelled or missing'
            })
        }
        const new_order = await Order.create(order)
        console.log(new_order.id);
        res.status(200).json({
            status: new_order.orderStatus,
            user_id: new_order.userID,
            order_time: new_order.createdAt.toLocaleDateString()
        })
    } catch (error) {
        next(error)
    }

}

// ###########################################################################################
// #############################        get one order        #################################
// ###########################################################################################

export const getOneOrder = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const id = req.params.id
        if (!id || id.length > 24 || id.length < 24) {
            return res.status(400).json({
                Error: 'Wrong id , provide the exact id of the order'
            })
        }
        const order_exists = await Order.findById(id)
        if (!order_exists?.id) {
            return res.status(400).json({
                Error: 'No Such order'
            });
        }

        const order = await Order.findById(id)
        console.log(order?.id);
        res.json(order)


    } catch (error) {
        next(error)
    }
}

// ###########################################################################################
// #############################        get all orders       #################################
// ###########################################################################################
export const getAllOrders = async (
    _req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const orders = await Order.find();
        return res.status(200).json(orders)

    } catch (error) {
        next(error)
    }
}
