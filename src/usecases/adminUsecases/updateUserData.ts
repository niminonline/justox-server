import {
  qEmailExists,
  qMobileExists,
  qUpdateUser,
} from "../../repositories/adminRepository";

const updateUserData = async (
  _id: string,
  username: string,
  email: string,
  mobile: string,
  image: any
) => {
  const isEmailExists = await qEmailExists(email);
  if (isEmailExists) {
    return { message: "Email already exists", status: "FAILED" };
  }
  const isMobileExists = await qMobileExists(mobile);
  if (isMobileExists) {
    return { message: "Mobile already exists", status: "FAILED" };
  }
  const updateUser = await qUpdateUser(_id, username, email, mobile, image);
  if (updateUser) {
    return { message: "User updated successfully", status: "OK" };
  } else {
    return { message: "User updated failed", status: "FAILED" };
  }
};
export default updateUserData;
