import express from 'express';
import { addProduct, deleteproduct, getById, getProduct, putProduct } from '../controller/product.js';
import { checkValidateProduct } from '../middleware/product.js';


const router = express.Router();
router.post('/products',checkValidateProduct, addProduct)
router.get('/products',getProduct)
router.get('/products/:id',getById)
router.put('/products/:id',putProduct)
router.delete('/products/:id',deleteproduct)
export default router;