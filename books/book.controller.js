import { parseData, parseDataArray } from "../utils.js"
import {
    booksService
} from "./books.service.js"

export const bookController = {
    findAll: (req, res) => {
        const books = booksService.findAll()
        return res.status(200).json(parseDataArray(books))
    },

    find: (req, res) => {
        const {
            start,
            size
        } = req.query
        const books = booksService.findByPage(start, size)

        return res.status(200).json(parseData(books))
    },

    findOne: (req, res) => {
        const {
            id
        } = req.params
        const book = booksService.findOne(id)
        return res.status(200).json(parseData(book))
    },

    create: (req, res) => {
        const book = booksService.create(req.body)
        return res.status(201).json(parseData(book))
    },

    remove: (req, res) => {
        const {
            id
        } = req.params
        try {
            const book = booksService.delete(id)
            return res.status(200).json(parseData(deleteItem))
        } catch (error) {
            console.error(error)
            return res.status(500).json({
                error: "An error occured"
            })
        }
    },

    update: (req, res) => {
        const {
            id
        } = req.params
        const book = booksService.patch(req.body, id)
        return res.status(200).json(parseData(book))
    },

    replace: (req, res) => {
        const {
            id
        } = req.params
        const book = booksService.put(req.body, id)

        return res.status(200).json(parseData(book))
    }
}

