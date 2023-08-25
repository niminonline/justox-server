import { Router } from "express";

const userRoute = Router();

userRoute.get("/", (req, res) => {
 res.status(220).json({message:"Hello"});
});

export default userRoute;
