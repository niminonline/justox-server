import { UserType } from "../../entities/userModel";
import { qUserData } from "../../repositories/adminRepository";

const getUserData = async (id: string): Promise<object | undefined> => {
  const userData= await qUserData(id);
  if(userData){
    return({userData,status:"OK"})
  }
  else{
    return({message:"User not found",status:"FAILED"})
  }
   
};

export default getUserData;
