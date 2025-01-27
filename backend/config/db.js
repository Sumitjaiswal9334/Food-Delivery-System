import mongoose from 'mongoose';

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://sumitjaiswalskj9334:8VgaE0O17rO0FKYD@cluster2.8iktg.mongodb.net/tomato').then(()=>console.log('Database connected'));
}