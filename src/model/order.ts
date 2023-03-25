import mongoose from "mongoose";

const order_schema = new mongoose.Schema(
    {
        orderID: { type: mongoose.Schema.Types.ObjectId },
        orderStatus: { type: String, required: [true, 'Please provide the state of the current order [pending,delivered]'] },
        userID: {
            type: String,
            required: [true, 'Please Provide the id user who will make the order']
        },
    },
    { timestamps: true }
);

const Order = mongoose.model('orders', order_schema);

export default Order;