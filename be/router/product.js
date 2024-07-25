import express from 'express';
import { checkValidateProduct } from '../middleware/product.js';
import { addProduct, putProduct, getProduct, deleteproduct, getById } from '../controller/product.js';


const router = express.Router();
router.post('/products',checkValidateProduct, addProduct)
router.get('/products',getProduct)
router.get('/products/:id',getById)
router.put('/products/:id',putProduct)
router.delete('/products/:id',deleteproduct)
export default router;