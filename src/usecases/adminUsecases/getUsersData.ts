import {qUsersData} from '../../repositories/adminRepository'

 const getUsersData= async (): Promise<object | undefined> =>{
    try{

        const usersData= await qUsersData();
        if(usersData){
            return ({usersData,status:"OK"});
        }
        else{
            return ({message:"Users data fetching failed",status:"FAILED"});
        }
       
    }
    catch(err){
        console.log(err);
    }
}

export default getUsersData;