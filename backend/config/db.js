import mongoose from 'mongoose';
import 'dotenv/config';

const dburl = process.env.MONGO_URL;

export const connectDB = async () => {
    await mongoose.connect(dburl).then(()=>console.log('Database connected'));
}
