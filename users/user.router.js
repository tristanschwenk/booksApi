import express from "express"
import { ErrorMiddleware } from "../middlewares/error.js"
import { validIdMiddleware } from "../middlewares/validId.js"
import { validSchemaMiddleware } from "../middlewares/validSchema.js"
import { userController } from "./user.controller.js"

export const userRouter = express.Router()



userRouter.get('/:id', validIdMiddleware, userController.findOne)

userRouter.post('/register', userController.create)
userRouter.post('/login', userController.login)

userRouter.delete("/:id", validIdMiddleware, userController.remove)

userRouter.patch('/:id', validIdMiddleware,  userController.update)

userRouter.put('/:id', validIdMiddleware, userController.replace)

userRouter.use(ErrorMiddleware)