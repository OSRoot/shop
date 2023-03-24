import { Request, Response, NextFunction } from "express";
// import mongoose from "mongoose";
import Product from '../model/product'


// ###########################################################################################
// #############################          CREATE             #################################
// ###########################################################################################

export const createProduct = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        // validate the body within the coming request 
        const product = req.body;
        console.log(product);
        if (!product.productName || product.productName.length < 5) {
            return res.status(400).json({
                Error: 'product name is short or missing'
            })
        }
        if (!product.productCategory || product.productCategory.length < 5) {
            return res.status(400).json({
                Error: 'product category is short or missing'
            })
        }
        if (!product.productQty) {
            return res.status(400).json({
                Error: 'product qty is required'
            })
        }
        if (!product.price) {
            return res.status(400).json({
                Error: 'product price is required'
            })
        }
        if (!product.productDescription || product.productDescription.length < 10) {
            return res.status(400).json({
                Error: 'product description is short or missing'
            })
        }


        const new_product = await Product.create(req.body)
        console.log(new_product.id);
        res.status(200).json(new_product)

    } catch (error) {
        next(error)
    }
}

// ###########################################################################################
// #############################        Get one by ID        #################################
// ###########################################################################################

export const getProductById = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
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
    // if ID does not match the database documents
    else {
        const product = await Product.findById(req.params.id)
        if (!product?.id) {
            return res.json({
                Message: 'No Products related to the proivded ID, try again...'
            })
        }
        // if all the conditions passed , then return the product object
        else {
            return res.json({
                name: product.productName,
                descrption: product.productQty,
                price: product.price,
                time_added: product.createdAt.toLocaleDateString()
            })
        }
    }
}

// ###########################################################################################
// #############################      Delete one by ID       #################################
// ###########################################################################################

export const deleteProductById = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
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
    else {
        const found_product = await Product.findById(req.params.id)
        if (!found_product?.id) {
            return res.json({
                Message: 'No Products related to the proivded ID, try again...'
            })
        }
        else {
            console.log(req.params.id);
            console.log(found_product.id);
            const product = await Product.findByIdAndDelete(found_product.id)

            return res.json({
                Message: `Product with ID: ${req.params.id} is deleted`,
                product: product
            })
        }
    }


}

// ###########################################################################################
// #############################           Get All           #################################
// ###########################################################################################

export const getAllProducts = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const products = await Product.find();
        res.json(products)
    } catch (error) {
        next(error)
    }
}

// ###########################################################################################
// #############################       Update one by ID      #################################
// ###########################################################################################

export const updateProduct = async (
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

        if (!req.body) {
            return res.status(400).json({
                message: 'Data to update can not be empty'
            })
        }
        else {
            const id = req.params.id
            const exists = await Product.findById(id);
            if (!exists) {
                return res.status(400).json({
                    Error: 'No such ID'
                })
            }
            await Product.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
            res.json(req.body)

        }

    } catch (error) {
        next(error)
    }
}