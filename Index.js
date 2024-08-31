const express=require('express')
const mongoose=require('mongoose')
const dotenv=require('dotenv')
const authRoutes=require('./routes/authRoutes');
const app=express();
dotenv.config();

app.use(express.json());

// console.log()

mongoose.connect(process.env.MongoUrl).then(()=>{
    // console.log("MongoDB Connected")
}).catch((err)=>{
    console.log(err)
})

app.use('/api/auth', authRoutes);


const PORT=process.env.PORT || 8800;
app.listen(PORT,()=>{
    // console.log(`User Service Up and Running ${PORT}`)
})