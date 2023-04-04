import compression from "compression";
import express from "express"
import helmet from "helmet";
import mongoose from "mongoose"
import { bookRouter } from "./books/book.router.js";
import { loggerMiddleware } from "./middlewares/logger.js";
import { noRouteMiddleware } from "./middlewares/noRoute.js";
import { userRouter } from "./users/user.router.js";

export const app = express()

mongoose.connect("mongodb://localhost:27017/devAPI", () => {
    console.log("succesfully connected to mongoDB")
})
app.use(helmet())
app.use(compression())
app.use(express.json())
app.use(loggerMiddleware)

app.use("/books", bookRouter)
app.use("/users", userRouter)

app.use(noRouteMiddleware)
