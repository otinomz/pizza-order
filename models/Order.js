import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxLength: 60,
    },
    description: {
        type: String,
        required: true,
        maxLength: 250,
    },
    image: {
        type: String,
         required: true,
    },
    prices: {
        type:[Number],
        required: true,
    },
    extraOptions: {
        type: [{
            text: {
                type: String,
                required: true,
            },
            price: {
                type: Number,
                required: true,
            }
        }],
    },
},
    { timestamps: true }
)

export default mongoose.models.Order || mongoose.model("Order", OrderSchema) 