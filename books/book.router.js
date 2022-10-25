import express from "express"
import { bookController } from "./book.controller.js"

export const bookRouter = express.Router()

bookRouter.get('/', bookController.findAll)

bookRouter.get('/paginate', bookController.find)

bookRouter.get('/:id', bookController.findOne)

bookRouter.post('/', bookController.create)

bookRouter.delete("/:id", bookController.remove)

bookRouter.patch('/:id', bookController.update)

bookRouter.put('/:id', bookController.replace)