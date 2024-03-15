import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan'   //colorful console.log
import connectDB from './config/db.js';
import  authRoutes from './routes/authRoute.js'; 
import cors from 'cors'

//config dotenv
dotenv.config()

//database conffig
connectDB();



//rest object
const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));



//routes
app.use('/api/v1/auth',authRoutes);

//rest api

app.get("/",(req,res)=>{
    res.send("<h1>welcome to ecommerce  app </h1>");
});

//port

const PORT=process.env.PORT||8080;

//run llisten
app.listen(PORT,()=>{
    console.log(`Server runing on ${process.env.DEV_MODE} mode on ${PORT}`);
});