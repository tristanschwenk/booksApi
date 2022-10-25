
const books = [
    {
        id: 1,
        title: "JavaScript pour les noobs",
        publicationDate: '2015-06-01'
    },

    {
        id: 2,
        title: "NodeJS pour les noobs",
        publicationDate: '2015-08-01'
    },

    {
        id: 3,
        title: "Express pour les noobs",
        publicationDate: '2015-08-01'
    },
]

export const booksService = {
    findByPage: (pageIndex, pageSize) => {
        const startIndex = pageIndex * pageSize
        const endIndex = (pageIndex+1) * pageSize
        return books.slice(startIndex, endIndex)
    },

    findAll: () => {
        return books
    },

    findOne: (id) => {
        return books[id-1]
    },

    create: (data) => {
        const newBook = {
            ...data,
            id: books.length+1
        }

        books.push(newBook)
        return newBook
    },

    delete: (id) => {
        const deleteItem = books.splice(id-1, 1)

        return deleteItem
    },

    patch: (data, id) => {
        const newBook = {
            ...books[id-1],
            ...data
        }

        books[id-1] = newBook

        return newBook
    },

    put: (data, id) => {

        const newBook = {
            id,
            ...data
        }

        books[id-1] = newBook 

        return newBook
    }
}