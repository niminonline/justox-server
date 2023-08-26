import Admin from '../entities/adminModel'

export const qVerifyAdminLogin= async(email:string,password:string)=>{
    return await Admin.find({email:email});

}