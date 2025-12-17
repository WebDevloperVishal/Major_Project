import mongoose from "mongoose";

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("DataBase connected successfully ✅")
    } catch (error) {
        console.log("DataBase connection error ❌")
    }
}

export default connectDb