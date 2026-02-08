import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    publisher: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true
    }
})

const cartModel = mongoose.model('cartModel',cartSchema);

export default cartModel;