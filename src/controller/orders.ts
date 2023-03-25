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
        if (!id || id.length > 24) {
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

// ###########################################################################################
// #############################        Update an order      #################################
// ###########################################################################################

export const updateOneOrder = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const order = req.body

        // check if there is an ID in the URL and The length is correct
        if (req.params.id) {
            const id = req.params.id;
            if (id.length < 24 || id.length > 24) {
                return res.json({
                    Error: 'Invalid ID'
                })
            }
        }
        if (!req.body) {
            return res.status(400).json({
                message: 'Data to update can not be empty'
            })
        }
        else {
            const id = req.params.id
            const exists = await Order.findById(id);
            if (!exists) {
                return res.status(400).json({
                    Error: 'No such ID'
                })
            }
        }


    } catch (error) {
        next(error)
    }
}
// ###########################################################################################
// #############################        Delete an order      #################################
// ###########################################################################################


export const DeleteOneOrder = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        // check if there is an ID in the URL and The length is correct
        if (req.params.id) {
            const id = req.params.id;
            if (id.length < 24 || id.length > 24) {
                return res.json({
                    Error: 'Invalid ID'
                })
            }
        }
        // if no Id is provided 
        if (!req.params.id) {
            return res.json({
                Message: "ID is required"
            });
        }
        if (req.body) {
            const order = req.body
            if (!order.userID) {
                return res.status(400).json({
                    Error: 'No user id found'
                })
            }
        }


        else {
            const id = req.params.id;
            const order_exists = await Order.findById(id);
            if (!order_exists?.id) {
                return res.status(400).json({
                    Error: 'Order not found or Wrong order id'
                })
            }
            else {

                const order = await Order.findByIdAndDelete(order_exists.id);
                res.json(order)

            }

        }
    } catch (error) {
        next(error)
    }
}