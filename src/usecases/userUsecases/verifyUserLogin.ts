import { matchPassword } from "../../services/bcrypt";
import { qFindUserByEmail } from "../../repositories/userRepository";
import { generateUserToken } from "../../middlewares/auth";

const verifyUserLogin = async (email: string, password: string) => {
  const userData = await qFindUserByEmail(email);
  if (userData) {
    const validatePassword = await matchPassword(password, userData.password);
    if (validatePassword) {
      const token = generateUserToken(userData);
      return { userData, token, status: "OK" };
    } else {
      return { message: "Invalid credentials", status: "FAILED" };
    }
  } else {
    return { message: "User not found", status: "FAILED" };
  }
};

export default verifyUserLogin;
