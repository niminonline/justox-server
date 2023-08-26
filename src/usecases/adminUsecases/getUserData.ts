import { UserType } from "../../entities/userModel";
import { qUserData } from "../../repositories/adminRepository";

const getUserData = async (id: string): Promise<UserType | null> => {
  return await qUserData(id);
};

export default getUserData;
