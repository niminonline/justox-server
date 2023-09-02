import {qUpdateImage} from '../../repositories/userRepository'

const updateUserImage = async(_id:string,image:any)=>{

    try{
        
      const updateImage = await qUpdateImage(_id, image);
      if (updateImage) {
        return { message: "Profile image updated successfully", status: "OK" };
      } else {
        return { message: "Profile image updated failed", status: "FAILED" };
      }
      }
      catch(err){
        console.log(err);
        return { message: "Something went wrong", status: "FAILED" };
      }
    };

export default updateUserImage;