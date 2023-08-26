import {Router,Request,Response} from 'express';
import {adminLogin} from '../controllers/adminController';
const adminRoute=Router();

adminRoute.post('/login',adminLogin);


export default adminRoute