import { Router } from "express";
import { upload } from "../../middlewares/multer";
import  {userSignup,userLogin,getProfile,updateProfile} from "../controllers/userController"
import { verifyToken } from "../../middlewares/auth";


const userRoute = Router();

userRoute.get("/",(req,res)=>{
    res.json({status:"Success"})
})
userRoute.post('/signup',upload.single('image'), userSignup);
userRoute.post('/login',userLogin);
userRoute.get('/profile',verifyToken, getProfile);
userRoute.patch('/update-profile',verifyToken,upload.single('image'), updateProfile);


export default userRoute;
