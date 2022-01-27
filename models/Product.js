import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
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
        maxLength: 60,
    },
})