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

export const qFindUserByEmail=async (email:string):Promise<UserType | null>=>{
    return await User.findOne({email});
}
export const qFindUserByMobile=async (mobile:string):Promise<UserType | null>=>{
    return await User.findOne({mobile});
}
export const qUpdateUser=async(_id:string,username:string,email:string,mobile:string,image:any):Promise<UserType | null>=>{
  
    const userData= User.findByIdAndUpdate({_id},{
        $set:{username:username,email:email,mobile:mobile,image:image}
    });
    return userData;
}
export const qDeleteUser= async(id:string):Promise<UserType | null>=>{
    const deleteUser= await User.findByIdAndDelete(id);
    return deleteUser;
}