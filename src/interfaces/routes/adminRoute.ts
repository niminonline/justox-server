import { Router, Request, Response } from "express";
import {
  adminLogin,
  loadUsers,
  getEditUserData,
} from "../controllers/adminController";
const adminRoute = Router();

adminRoute.post("/login", adminLogin);
adminRoute.get("/load-users", loadUsers);
adminRoute.get("/get-user-data/:id", getEditUserData);

export default adminRoute;
