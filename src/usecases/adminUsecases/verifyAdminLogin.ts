import { AdminType } from "../../entities/adminModel";
import { generateAdminToken } from "../../middlewares/auth";
import { qAdminData, } from "../../repositories/adminRepository";

export const getAdminToken = async (email: string, password: string): Promise<object | undefined>  => {
 try{
  const adminData = await qAdminData(email);
  if (adminData?.password === password) {
    const adminToken = generateAdminToken(adminData);
    return { adminData, adminToken,message: "Admin verified successfully",status:"OK" };
  } else {
    return { message: "Invalid credentials",status:"FAILED" };
  }
 }
 catch(err){
  console.error(err);
 }
};
