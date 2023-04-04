import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
import { User } from "./user.model.js"

dotenv.config()

export const usersService = {  

    findOne: async (id) => {
        return await User.findById(id)
    },

    me: async (username) => {
        return User.findOne({username})        
    },

    create: async (data) => {
        const usedEmail = await User.find({email: data.email})
        if (usedEmail.length) {
            throw new Error("Email already exist")
        }

        const usedUsername = await User.find({username: data.username})
        if(usedUsername.length) {
            throw new Error("Username already exist")
        }

        const salt = await bcrypt.genSalt(10)
        data.password = await bcrypt.hash(data.password, salt)

        const user = await User.create(data)
        return user
    },

    login: async (data) => {
        const userToLog = (await User.findOne({email: data.email})).toObject()

        if (!userToLog) {
            throw new Error("No user matched those credentials")
        }


        const isSamePassword = await bcrypt.compare(data.password, userToLog.password)
        if (!isSamePassword) {
            throw new Error("No user matched those credentials")
        }

        const accessToken = await jwt.sign({
            id: userToLog._id,
            username: userToLog.username,
        }, process.env.SECRET, {expiresIn: "5min"})        

        return {
            ...userToLog,
            password: undefined,
            accessToken
        }
    },

    delete: async (id) => {
        const deleteUser = await User.findOneAndDelete({_id: id})
        return deleteUser
    },

    patch: async(data, id) => {
        const user = await User.findOneAndUpdate({_id: id}, data, {
            new: true
        })
        return book
    },

    put: async(data, id) => {
        const user = await User.findOneAndReplace({_id: id}, data, {
            new: true
        })
        return user
    },
}