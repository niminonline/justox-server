import {qUsersData} from '../../repositories/adminRepository'

 const getUsersData= async ()=>{
    const usersData= await qUsersData();
    return usersData;
}

export default getUsersData;