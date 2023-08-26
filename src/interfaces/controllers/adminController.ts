import { Request, Response } from "express";
import { getAdminToken } from "../../usecases/adminUsecases/verifyAdminLogin";
import getUsersData from "../../usecases/adminUsecases/getUsersData";
import getUserData from "../../usecases/adminUsecases/getUserData";

export const adminLogin = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { email, password } = req.body;

    const adminData: object = await getAdminToken(email, password);
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
