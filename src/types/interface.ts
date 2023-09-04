export interface UserType {
    username:string
    email:string
    mobile:string
    password:string
    image:any
    date:string
}

export interface AdminType {
  email:string,
  password:string
}



export interface ApiResponse{
    message:string,
    status:string,
    userData?:UserType,
    token?:string
  }

  export interface AdminLoginResponse{

    adminData: {
      _id: string,
      email: string,
      password: string
  },
  adminToken:string,
  message: string,
  status: string
}
  