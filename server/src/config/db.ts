import mongoose from "mongoose";

export const connectToDb = async () => {
    try {

        const response = mongoose.connect(process.env.MONGO_URI!);
        console.log("Connection to database successfull");
        return response;

    } catch (error) {
        console.log("[MONGO_CONNECT_FAILED]", error);
        return error;
    }
}