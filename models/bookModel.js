import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
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
});

const bookModel = mongoose.model('bookModel',bookSchema);

export default bookModel;