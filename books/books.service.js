import { Book } from "./book.model.js"

export const booksService = {
    findByPage: async (pageIndex, pageSize) => {
        const startIndex = pageIndex * pageSize
        const endIndex = (pageIndex+1) * pageSize

        const books = await Book.find({})
        return books.slice(startIndex, endIndex)
    },

    findAll: async () => {
        return await Book.find({})
    },

    findOne: async (id) => {
        return await Book.findById(id)
    },

    create: async (data) => {
        const book = await Book.create(data)
        return book
    },

    delete: async (id) => {
        const deleteItem = await Book.findOneAndDelete({_id: id})
        return deleteItem
    },

    patch: async(data, id) => {
        const book = await Book.findOneAndUpdate({_id: id}, data, {
            new: true
        })
        return book
    },

    put: async(data, id) => {
        const book = await Book.findOneAndReplace({_id: id}, data, {
            new: true
        })
        return book
    },
}