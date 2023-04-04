import { registerValidation } from "../middlewares/auth.js"
import { ErrorOutOfRange } from "../middlewares/error.js"
import { parseData, parseDataArray } from "../utils.js"
import {
    usersService
} from "./user.service.js"

export const userController = {

    findOne: async (req, res, next) => {
        try {
            const {
                id
            } = req.params

            const user = await usersService.findOne(id)
            return res.status(200).json(user)
        } catch (error) {
            next(error)
        }
        
    },

    create: async (req, res) => {
        const errors = registerValidation(req.body)
        console.log(errors)

        if(errors) {
            return res.status(401).json({errors})
        }

        try {
            const user = await usersService.create(req.body)
            return res.status(201).json(user)    
        } catch (error) {
            console.error(error)
            return res.status(400).json({error: error})
        }
        
    },

    login: async (req, res) => {
        const loggedUser = await usersService.login(req.body)
        return res.status(201).json(loggedUser)
    },

    remove: async (req, res, next) => {
        const {
            id
        } = req.params
        try {
            const user = await usersService.delete(id)
            return res.status(200).json(user)
        } catch (error) {
            next(error)
        }
    },

    update: async (req, res, next) => {
        try {
            const {
                id
            } = req.params
            const user = await usersService.patch(req.body, id)
            return res.status(200).json(user)
        } catch (error) {
            next(error)   
        }
        
    },

    replace: async (req, res, next) => {
        try {
            const {
                id
            } = req.params
            const user = await usersService.put(req.body, id)
    
            return res.status(200).json(user)
        } catch (error) {
            next(error)
        }
        
    }
}

