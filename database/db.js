import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, { dbName: 'racipe-app' });
        console.log('Database Connected')
    } catch (error) {
        console.error('Error in database connection', error)
    }
}