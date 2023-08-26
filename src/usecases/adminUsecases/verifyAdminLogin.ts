import { AdminType } from "../../entities/adminModel";
import { generateAdminToken } from "../../middlewares/auth";
import { qAdminData, } from "../../repositories/adminRepository";

export const getAdminToken = async (email: string, password: string):Promise<AdminType| object> => {
  const adminData = await qAdminData(email);
  if (adminData?.password === password) {
    const adminToken = generateAdminToken(adminData);
    return { adminData, adminToken };
  } else {
    return { message: "Invalid credentials" };
  }
};
