import express, { Request, Response }  from 'express';
import dotenv from 'dotenv';
import adminRoute from './interfaces/routes/adminRoute';
import userRoute from './interfaces/routes/userRoute';
import connectDB from './config/mongodb'

// import cors from 'cors';


const app= express();
dotenv.config();
const port:number= parseInt(process.env.PORT || '5001');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/",userRoute);
app.use("/admin",adminRoute);
app.use('/public',express.static("../public"));
connectDB();

// const corsOptions={
//     origin:'',
//     methods:'GET,POST',
// }
// app.use(cors(corsOptions));


app.listen(port,()=>{
    console.log(`Server started on port ${port}. URL: http://localhost:${port}/`);
})
