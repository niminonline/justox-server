import {
  qFindUserByEmail,
  qFindUserByMobile,
  qUpdateUser,
} from "../../repositories/userRepository";

const updateUserData = async (
  _id: string,
  username: string,
  email: string,
  mobile: string,
  image: any
) => {
  try{
    const isEmailExists = await qFindUserByEmail(email);
  if (isEmailExists) {
    return { message: "Email already exists", status: "FAILED" };
  }
  const isMobileExists = await qFindUserByMobile(mobile);
  if (isMobileExists) {
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
