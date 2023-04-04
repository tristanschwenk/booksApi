import { ErrorOutOfRange } from "../middlewares/error.js"
import { parseData, parseDataArray } from "../utils.js"
import {
    booksService
} from "./books.service.js"

export const bookController = {
    findAll: async (req, res) => {
        const books = await booksService.findAll()
        return res.status(200).json(books)
    },

    find: async (req, res) => {
        const {
            start,
            size
        } = req.query
        const books = await booksService.findByPage(start, size)

        return res.status(200).json(books)
    },

    findOne: async (req, res, next) => {
        try {
            const {
                id
            } = req.params

            const book = await booksService.findOne(id)
            return res.status(200).json(book)
        } catch (error) {
            next(error)
        }
        
    },

    create: async (req, res) => {
        const book = await booksService.create(req.body)
        return res.status(201).json(book)
    },

    remove: async (req, res, next) => {
        const {
            id
        } = req.params
        try {
            const book = await booksService.delete(id)
            return res.status(200).json(book)
        } catch (error) {
            next(error)
        }
    },

    update: async (req, res, next) => {
        try {
            const {
                id
            } = req.params
            const book = await booksService.patch(req.body, id)
            return res.status(200).json(book)
        } catch (error) {
            next(error)   
        }
        
    },

    replace: async (req, res, next) => {
        try {
            const {
                id
            } = req.params
            const book = await booksService.put(req.body, id)
    
            return res.status(200).json(book)
        } catch (error) {
            next(error)
        }
        
    }
}

