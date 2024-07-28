import { products } from "../models/product.js";


export const getProduct = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;

        const responsive = await products.find()
            .skip((page - 1) * limit)
            .limit(limit)
            .populate('categoryId', 'name');

        res.status(200).send(responsive);
    } catch (error) {
        res.status(503).send({ status: false, message: "loi" + error });
    }
}

export const getById = async (req, res) => {
    try {
        const id = req.params.id;
        const respon = await products.findById(id)
            .populate('categoryId', 'name');  

        if (!respon) {
            return res.status(404).json({ status: false, message: "Product not found" });
        }

        res.json(respon);
    } catch (error) {
        res.status(503).send({ status: false, message: "loi" + error });
    }
}

export const addProduct= async (req,res)=>{
    const product = await new products(req.body).save();
    res.send({status: true, data:product});    
}

export const putProduct=async(req,res)=>{
    const id = req.params.id;
    const body = req.body;
    const response = await products.findOneAndUpdate({_id:id},body,{new:true});
    res.send(response)
}

export const deleteproduct=async(req,res)=>{
    const id = req.params.id;
    const response = await products.findOneAndDelete({_id:id});
    res.send(response)
}