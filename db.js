import mongoose from "mongoose"; 

export const connectDB = async () => { 
    await mongoose.connect('mongodb+srv://Subrina:<db_password>@cluster0.hbeds.mongodb.net/FYP').then(()=>console.log("DB Connected"));  
} 