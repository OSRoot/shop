import { Router } from "express";
import * as controller from '../../controller/products'
const productsRoute = Router();

productsRoute.post('/products', controller.createProduct)
productsRoute.get('/products/:id', controller.getProductById)
productsRoute.get('/products', controller.getAllProducts)
productsRoute.delete('/products/:id', controller.deleteProductById)
productsRoute.put('/products/:id', controller.updateProduct)

export default productsRoute;