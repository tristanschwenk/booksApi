import express from "express"
import { bookRouter } from "./books/book.router.js";
import { loggerMiddleware } from "./middlewares/logger.js";
import { noRouteMiddleware } from "./middlewares/noRoute.js";
import { validIdMiddleware } from "./middlewares/validId.js";

export const app = express()


app.use(express.json())
app.use(loggerMiddleware)

app.use("/books", bookRouter)

app.use(noRouteMiddleware)
