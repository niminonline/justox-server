import mongoose,{Document,Schema} from 'mongoose'

export interface UserType extends Document{
    username:string
    email:string
    mobile:string
    password:string
    image:any
    date:string
}


const userSchema:Schema = new Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    mobile:{
        type:String,
        required:true
    },    
    password:{
        type:String,
        required:true
    },
    image:{
        type:String
    },
    date:{
        type:Date,
        default: Date.now
      }
},{timestamps:true})


export default mongoose.model<UserType>('User',userSchema)