import express from 'express';
import { addCategory, deleteCategory, getById, getCategory, putCategory } from '../controller/categorys.js';


const routerCategory = express.Router();
routerCategory.post('/category',addCategory)
routerCategory.get('/category',getCategory)
routerCategory.get('/category/:id',getById)
routerCategory.put('/category/:id',putCategory)
routerCategory.delete('/category/:id',deleteCategory)
export default routerCategory;