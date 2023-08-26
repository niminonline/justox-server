import { Request, Response } from "express";
import { verifyAdminLogin } from "../../usecases/adminUsecases/verifyAdminLogin";
import { upload } from "../../middlewares/multer";

export const adminLogin = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const adminData = await verifyAdminLogin(email, password);

    if (adminData) {
      res.json({ verification: "done" });
    } else {
      res.json({ verification: "failed" });
    }
  } catch (error) {
    console.log(error);
  }
};
