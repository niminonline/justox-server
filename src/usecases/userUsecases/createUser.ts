import {
  qFindUserByEmail,
  qFindUserByMobile,
} from "../../repositories/userRepository";
import { qCreateUser } from "../../repositories/userRepository";
import { securePassword } from "../../services/bcrypt";

const createUser = async (
  username: string,
  email: string,
  mobile: string,
  password: string,
  image: any
):Promise<object|undefined> => {
  try {
    const sPassword = await securePassword(password);
    const isEmailExists = await qFindUserByEmail(email);
    if (isEmailExists) {
      return { message: "Email already exists", status: "FAILED" };
    }
    const isMobileExists = await qFindUserByMobile(mobile);
    if (isMobileExists) {
      return { message: "Mobile already exists", status: "FAILED" };
    }
    const createUserData = await qCreateUser(
      username,
      email,
      mobile,
      sPassword,
      image
    );
    if (createUserData) {
      return { message: "User created successfully", status: "OK" };
    } else {
      return { message: "User creation failed", status: "FAILED" };
    }
  } catch (err) {
    console.log(err);
  }
};
export default createUser;
