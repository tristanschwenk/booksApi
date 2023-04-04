import mongoose, { Schema } from "mongoose";

export const User = mongoose.model("User", new Schema({
    name: String,
    username: String,
    email: String,
    password: String,
    creationDate: {
        type: Date,
        default: new Date()
    }
}))

