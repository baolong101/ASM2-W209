import mongoose from "mongoose";

const pschema = new mongoose.Schema({
    name: String,
    image: String,
    price: Number,
    desc: String,
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'categorys'
    }
}, {
    timestamps: true
});

export const products = mongoose.model('products', pschema);
