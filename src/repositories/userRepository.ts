import User, { UserType } from "../entities/userModel";

export const qCreateUser = async (
  username: string,
  email: string,
  mobile: string,
  sPassword: string,
  image: any
): Promise<UserType | undefined> => {
  try {
    console.log("image from user createq:",image);
    const createUser = await User.create({
      username,
      email,
      mobile,
      password: sPassword,
      image,
    });
    return createUser;
  } catch (err) {
    console.log(err);
  }
};

export const qFindUserById = async (
  id: string
): Promise<UserType | null> => {
  const userData = await User.findById(id);
  return userData;
};

export const qFindUserByEmail = async (
  email: string
): Promise<UserType | null> => {
  const userData = await User.findOne({ email:email });
  return userData;
};
export const qFindUserByMobile = async (
  mobile: string
): Promise<UserType | null> => {
  return await User.findOne({ mobile });
};

export const qUpdateUser=async(_id:string,username:string,email:string,mobile:string,image:any):Promise<UserType | null>=>{
  const userData= User.findByIdAndUpdate({_id},{
      $set:{username:username,email:email,mobile:mobile,image:image}
  });
  return userData;
}