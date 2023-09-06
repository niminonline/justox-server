import { Request, Response } from "express";
import createUser from "../../usecases/userUsecases/createUser";
import verifyUserLogin from "../../usecases/userUsecases/verifyUserLogin";
import getuserData from "../../usecases/userUsecases/getUserData";
import updateUserData from "../../usecases/userUsecases/updateUserData";
import updateUserImage from "../../usecases/userUsecases/updateUserImage";

export const userSignup = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { username, email, mobile, password } = req.body;
    const image = req.file?.filename;
    const response = await createUser(username, email, mobile, password, image);
    res.json(response);
  } catch (err) {
    console.error(err);
  }
};

export const userLogin = async (req: Request, res: Response): Promise<void> => {
  try {
    // console.log("login-",req.body)
    const { email, password } = req.body;
    const response = await verifyUserLogin(email, password);
    res.json(response);
  } catch (err) {
    console.error(err);
  }
};

export const getProfile = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const _id = req.query._id as string;
    if (_id) {console.log
      const userData = await getuserData(_id);
      if (userData) {
        res
          .status(200)
          .json({
            message: "User verified successfully",
            status: "OK",
            userData,
          });
      } else {
        res.status(400).json({ message: "User not found", status: "FAILED" });
      }
    } else {
      res.status(400).json({ message: "Invalid", status: "FAILED" });
    }
  } catch (err) {
    console.error(err);
    res.json({ message: "Something went wrong", status: "FAILED" });
  }
};

export const updateProfile = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { _id, username, email, mobile } = req.body;
    // console.log(req.body);
    // const image = req.file?.filename;
    const response = await updateUserData(_id, username, email, mobile);
    res.json(response);
  } catch (err) {
    console.error(err);
  }
};
export const updateImage = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    // console.log(req.body);
    // console.log(req.file);
    const { _id } = req.body;
    const image = req.file?.filename;
    const response = await updateUserImage(_id, image);
    res.json(response);
  } catch (err) {
    console.error(err);
  }
};
