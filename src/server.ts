import express, { Request, Response }  from 'express';
import dotenv from 'dotenv';
import adminRoute from './interfaces/routes/adminRoute';
import userRoute from './interfaces/routes/userRoute';
import connectDB from './config/mongodb'
import cors from 'cors';


const app= express();
dotenv.config();
const port:number= parseInt(process.env.PORT || '5001');

// app.use(cors());
const allowedOrigins = ['http://localhost:4200'];
app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));
const corsOptions={
    origin:'',
    methods:'GET,POST',
}
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/",userRoute);
app.use("/admin",adminRoute);
app.use('/public',express.static("../public"));
connectDB();





app.listen(port,()=>{
    console.log(`Server started on port ${port}. URL: http://localhost:${port}/`);
})
