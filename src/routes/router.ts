import { Router } from "express";
import productsRoute from "./apis/products";
import orderRoute from "./apis/orders";
const routes = Router();

routes.use('/', productsRoute)
routes.use('/', orderRoute)

export default routes;