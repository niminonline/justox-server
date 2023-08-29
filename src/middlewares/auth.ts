import { UserType } from "../entities/userModel";
import { Request, Response, NextFunction } from "express";
import { AdminType } from "../entities/adminModel";
import Jwt from "jsonwebtoken";

export const generateUserToken = (existingUser: UserType): string | null => {
  try {
    const { _id, username, email, mobile } = existingUser;
    // const jwtSecretKey = "jvvt53Cr#7k3Y";
    const jwtSecretKey = process.env.jwtSecretKey;
    if (!jwtSecretKey) {
      console.error("jwtSecretKey is missing");
      process.exit(1);
    }
    const token = Jwt.sign({ _id, username, email, mobile }, jwtSecretKey);
    return token;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const generateAdminToken = (adminData: AdminType): string | null => {
  try {
    const { email } = adminData;
    const jwtSecretKey = process.env.jwtSecretKey;
    if (!jwtSecretKey) {
      console.error("jwtSecretKey is missing");
      process.exit(1);
    }
    const token = Jwt.sign({ email }, jwtSecretKey);
    return token;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const verifyToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(" ")[1];
    console.log("Auth---", token);

    if (!token) {
      return res
        .status(401)
        .json({ status: "FAILED", message: "No tokens found" });
    }
    if (!process.env.jwtSecretKey) {
      console.error("jwtSecretKey is missing");
      return res
        .status(401)
        .json({ status: "FAILED", message: "Token verification failed" });
    }
    Jwt.verify(token, process.env.jwtSecretKey);

    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ status: "FAILED", message: "Invalid token" });
  }
};
