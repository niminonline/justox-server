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