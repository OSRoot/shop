import { Router } from "express";
import * as controller from '../../controller/orders';
const orderRoute = Router();

orderRoute.post('/orders', controller.makeOrder)
orderRoute.get('/orders/:id', controller.getOneOrder)
orderRoute.get('/orders', controller.getAllOrders)

export default orderRoute;