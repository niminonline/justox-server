import { Request, Response } from "express";
import { getAdminToken } from "../../usecases/adminUsecases/verifyAdminLogin";
import getUsersData from "../../usecases/adminUsecases/getUsersData";
import getUserData from "../../usecases/adminUsecases/getUserData";
import updateUserData from "../../usecases/adminUsecases/updateUserData";
import deleteUserData from "../../usecases/adminUsecases/deleteUserData";

export const adminLogin = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { email, password } = req.body;

    const adminData = await getAdminToken(email, password);
    res.json(adminData);
  } catch (error) {
    console.log(error);
  }
};

export const loadUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const usersData = await getUsersData();
    res.json(usersData);
  } catch (err) {
    console.log(err);
  }
};

export const getEditUserData = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const userData = await getUserData(id);
    res.json(userData);
  } catch (err) {
    console.log(err);
  }
};

export const updateUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { _id, username, email, mobile } = req.body;
    const image = req.file?.filename;
    console.log("image from admincontroller-",image)
    const response = await updateUserData(_id, username, email, mobile, image);
    res.json(response);
  } catch (err) {
    console.log(err);
  }
};

export const deleteUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id = req.params.id;
    const response = await deleteUserData(id);
    res.json(response);
  } catch (err) {
    console.log(err);
  }
};
