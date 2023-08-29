import { UserType } from "../../entities/userModel";
import { qFindUserById} from "../../repositories/userRepository";

const getuserData = async (_id:string):Promise<UserType|undefined|null> => {
  try {
    const userData = await qFindUserById(_id);
    return userData;
  } catch (err) {
    console.log(err);
  }
};

export default getuserData;
