import { qDeleteUser } from "../../repositories/adminRepository";
const deleteUserData = async (id: string):Promise<object|undefined> => {
  try {
    const deleteUser = await qDeleteUser(id);
    if (deleteUser) {
      return { message: "User deleted successfully", status: "OK" };
    } else {
      return { message: "User deleted failed", status: "FAILED" };
    }
  } catch (err) {
    console.log(err);
  }
};
export default deleteUserData;
