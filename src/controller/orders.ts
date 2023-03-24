import { Request, Response, NextFunction } from "express";
import Order from "../model/order";

export const makeOrder = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {

    try {
        if (!req.body) {
            return res.status(400).json({
                Message: 'No Data Provided in the request body'
            })
        }
        else {
            res.json({
                M: "If u see me u r Wrong"
            })
        }

    } catch (error) {
        next(error)
    }



}