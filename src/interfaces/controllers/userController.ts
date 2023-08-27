import { Request, Response } from "express";
import createUser from "../../usecases/userUsecases/createUser";
import verifyUserLogin from "../../usecases/userUsecases/verifyUserLogin";
import getuserData from "../../usecases/userUsecases/getUserData";
import updateUserData from "../../usecases/userUsecases/updateUserData";

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
    console.log(err);
  }
};

export const userLogin = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;
    const response = await verifyUserLogin(email, password);
    res.json(response);
  } catch (err) {
    console.log(err);
  }
};

export const getProfile = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const email = req.query.email as string;
    if (email) {
      const userData = await getuserData(email);
      if (userData) {
        res.status(200).json(userData);
      } else {
        res.status(400).json({ message: "User not found" });
      }
    } else {
      res.status(400).json({ message: "Invalid" });
    }
  } catch (err) {
    console.log(err);
  }
};

export const updateProfile = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { _id, username, email, mobile } = req.body;
    console.log(req.body);
    const image = req.file?.filename;
    const response = await updateUserData(_id, username, email, mobile, image);
    res.json(response);
  } catch (err) {
    console.log(err);
  }
};
