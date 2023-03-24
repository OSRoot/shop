import { Router } from "express";
import * as controller from '../../controller/orders';
const orderRoute = Router();

orderRoute.post('/order', controller.makeOrder)

export default orderRoute;