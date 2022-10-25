import express from "express"
import { bookRouter } from "./books/book.router.js";

export const app = express()

app.use(express.json())

app.use("/books", bookRouter)
