import { matchPassword } from "../../services/bcrypt";
import { qFindUserByEmail } from "../../repositories/userRepository";
import { generateUserToken } from "../../middlewares/auth";
import { ApiResponse } from "../../types/interface";

const verifyUserLogin = async (email: string, password: string) :Promise<ApiResponse>=> {
  const userData = await qFindUserByEmail(email);
  if (userData) {
    const validatePassword = await matchPassword(password, userData.password);
    if (validatePassword) {
      const token = generateUserToken(userData);
      if(token){

        return { userData, token,message: "User verified successfully", status: "OK" };
      }
      else{
        return { message: "Token generation failed", status: "FAILED" };
      }
    } else {
      return { message: "Invalid credentials", status: "FAILED" };
    }
  } else {
    return { message: "User not found", status: "FAILED" };
  }
};

export default verifyUserLogin;
