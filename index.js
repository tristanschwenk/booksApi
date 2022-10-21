import express from "express";
import { booksService } from "./books.service.js";
const PORT = 3333

const findByPage = (pageIndex, pageSize) => {
    const startIndex = pageIndex * pageSize
    const endIndex = (pageIndex+1) * pageSize
    return books.slice(startIndex, endIndex)
}

const app = express()

app.use(express.json())

app.get('/books', (req,res) => {
    const books = booksService.findAll()
    return res.status(200).json(books)
})

app.get('/books/paginate', (req,res) => {
    const {start, size} = req.query
    const books = booksService.findByPage(start, size)
    
    return res.status(200).json(books.slice(startIndex, endIndex))
})

app.get('/books/:id', (req, res) => {
    const {id} = req.params
    const book = booksService.findOne(id)
    return res.status(200).json(book)
})

app.post('/books', (req,res) => {
    const book = booksService.create(req.body)
    return res.status(201).json(book)         
})

app.delete("/books/:id", (req,res) => {
    const {id} = req.params
    try {
        const book = booksService.delete(id)   
        return res.status(200).json(deleteItem) 
    } catch (error) {
        console.error(error)
        return res.status(500).json({error: "An error occured"})
    }    
})

app.patch('/books/:id', (req, res) => {
    const {id} = req.params
    const book = booksService.patch(req.body, id)
    return res.status(200).json(book)
})

app.put('/books/:id', (req, res) => {
    const {id} = req.params
    const book = booksService.put(req.body, id)

    return res.status(200).json(book)
})


app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`)
})