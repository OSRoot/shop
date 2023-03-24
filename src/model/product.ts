import mongoose from 'mongoose';

const product_schema = new mongoose.Schema(
    {
        productID: { type: mongoose.Schema.Types.ObjectId },
        productName: { type: String, required: true },
        productCategory: { type: String, required: [true, 'Please add the category where this product belongs'] },
        productDescription: { type: String, required: [true, 'please add some description about the product'] },
        price: { type: Number, required: true },
        priceCondition: { type: String },
        productCondition: { type: String },
        adCategory: { type: String },
        city: { type: String },
        rating: {
            oneStar: { type: Number },
            twoStars: { type: Number },
            threeStars: { type: Number },
            fourStars: { type: Number },
            fiveStar: { type: Number }
        },
        productQty: { type: Number, required: true },
        productImage: { type: String },
    },
    { timestamps: true }
)

const Product = mongoose.model('products', product_schema);

export default Product;