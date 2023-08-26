import Admin, { AdminType } from "../entities/adminModel";
import User, { UserType } from "../entities/userModel";
import { ObjectId } from "mongodb";

export const qAdminData = async (email: string): Promise<AdminType | null> => {
  return await Admin.findOne({ email: email });
};

export const qUsersData = async () => {
  return await User.find({}).lean();
};
export const qUserData = async (id: string): Promise<UserType | null> => {
  const _id = new ObjectId(id);
  return await User.findById(_id);
};
