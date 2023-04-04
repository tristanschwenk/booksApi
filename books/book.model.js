import mongoose, { Schema } from "mongoose";

export const Book = mongoose.model("Book", new Schema({
    title: String,
    publicationDate: {
        type: Date,
        default: new Date()
    }
}))

