import mongoose from "mongoose";

const connectDB = async() =>{

    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`connected to mongdb database ${conn.connection.host}`);
        
    } catch (error) {
        console.log(`Erro is mongdob ${error}`);
    }
}

export default connectDB;