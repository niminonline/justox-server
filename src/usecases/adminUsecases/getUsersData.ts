import {qUsersData} from '../../repositories/adminRepository'

 const getUsersData= async (): Promise<object | undefined> =>{
    try{

        const usersData= await qUsersData();
        if(usersData){
            return ({usersData,message:"Users' data fetched successfully",status:"OK"});
        }
        else{
            return ({message:"Users' data fetching failed",status:"FAILED"});
        }
       
    }
    catch(err){
        console.log(err);
    }
}

export default getUsersData;