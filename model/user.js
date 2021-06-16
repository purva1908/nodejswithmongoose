import mongoose from 'mongoose'
const Schema=mongoose.Schema
const userSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    gender:{
        type:String,
        required:true
    }
},{timestamps:true})

export const User=mongoose.model("User",userSchema)
