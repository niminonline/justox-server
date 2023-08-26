import {qVerifyAdminLogin} from '../../repositories/adminRepository'

export const verifyAdminLogin= async(email:string,password:string)=>{
    return await qVerifyAdminLogin(email,password);

}