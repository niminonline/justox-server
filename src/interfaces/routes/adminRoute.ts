import { Router, Request, Response } from "express";
import { upload } from "../../middlewares/multer";
import {
  adminLogin,
  loadUsers,
  getEditUserData,
  updateUser,
  deleteUser
} from "../controllers/adminController";
const adminRoute = Router();

adminRoute.post("/login", adminLogin);
adminRoute.get("/load-users", loadUsers);
adminRoute.get("/get-user-data/:id", getEditUserData);
adminRoute.put('/update-user',upload.single('image'),updateUser)
adminRoute.delete('/delete-user/:id',deleteUser)

export default adminRoute;
