import express, { Request, Response }  from 'express';
import dotenv from 'dotenv';
import adminRoute from './interfaces/routes/adminRoute';
import userRoute from './interfaces/routes/userRoute';
import connectDB from './config/mongodb'
import cors from 'cors';
import path from 'path'; 


const app= express();
dotenv.config();
const port:number= parseInt(process.env.PORT || '5001');

const allowedOrigins = ['http://localhost:4200', 'localhost:4200'];


const corsOptions = {
  origin: function (origin:any, callback:any) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true, 
  methods: 'GET, POST, PUT, PATCH, DELETE', 
};


app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/",userRoute);
app.use("/admin",adminRoute);
app.use('/public', express.static(path.join(__dirname, '../public')));
connectDB();





app.listen(port,()=>{
    console.log(`Server started on port ${port}. URL: http://localhost:${port}/`);
})
