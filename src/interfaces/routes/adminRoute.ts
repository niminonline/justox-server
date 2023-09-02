import { Router, Request, Response } from "express";
import { upload } from "../../middlewares/multer";
import { verifyToken } from "../../middlewares/auth";
import {
  sessionSuccess,
  adminLogin,
  loadUsers,
  getEditUserData,
  updateUser,
  deleteUser
} from "../controllers/adminController";
const adminRoute = Router();

adminRoute.post("/login", adminLogin);
adminRoute.get("/verify-session",verifyToken,sessionSuccess);
adminRoute.get("/load-users",verifyToken, loadUsers);
adminRoute.get("/get-user-data/:id",verifyToken, getEditUserData);
adminRoute.put('/update-user',verifyToken,upload.single('image'),updateUser)
adminRoute.delete('/delete-user/:id',verifyToken,deleteUser)

export default adminRoute;
