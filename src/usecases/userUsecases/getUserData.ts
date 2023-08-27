import { UserType } from "../../entities/userModel";
import { qFindUserByEmail } from "../../repositories/userRepository";

const getuserData = async (email:string):Promise<UserType|undefined|null> => {
  try {
    const userData = await qFindUserByEmail(email);
    return userData;
  } catch (err) {
    console.log(err);
  }
};

export default getuserData;
