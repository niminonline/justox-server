import {
  qFindUserByEmail,
  qFindUserByMobile,
  qUpdateUser,
} from "../../repositories/adminRepository";

const updateUserData = async (
  _id: string,
  username: string,
  email: string,
  mobile: string,
  image: any
) : Promise<object | undefined> => {
  try{
    const isEmailExists = await qFindUserByEmail(email);
   
  if (isEmailExists&& (isEmailExists._id.toString()!==_id.toString())) {
    console.log(isEmailExists._id+"-"+_id)
    return { message: "Email already exists", status: "FAILED" };
  }
  const isMobileExists = await qFindUserByMobile(mobile);
  if (isMobileExists&& isMobileExists._id.toString()!==_id.toString()) {
    return { message: "Mobile already exists", status: "FAILED" };
  }
  const updateUser = await qUpdateUser(_id, username, email, mobile, image);
  if (updateUser) {
    return { message: "User updated successfully", status: "OK" };
  } else {
    return { message: "User updated failed", status: "FAILED" };
  }
  }
  catch(err){
    console.log(err);
  }
};
export default updateUserData;
