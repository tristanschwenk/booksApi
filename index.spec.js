import {
    booksService
} from "./books.service.js";

describe('-- FindAll', () => {
    const books = booksService.findAll()
    it("Should return all elements of base ", () => {
        expect(books.length).toBe(3)
    })

    it("Should be return an array", () => {
        expect(books).toBeInstanceOf(Array)
    })
})
describe('-- FindOne', () => {
    const book = booksService.findOne(2)
    it("Should return an object", () => {
        expect(book).toBeInstanceOf(Object)
    })

    it("Should return the object with id passed as parameter", () => {
        expect(book.id).toBe(2)
    })
})

describe('-- Create', () => {
    const data = {
        title: "New book",
        publicationDate: "2026-04-12"
    }

    const newBook = booksService.create(data)
    const books2 = booksService.findAll()
    it('Should return the new book', () => {
        expect(newBook).toBeInstanceOf(Object)
    })

    it('Should have add new book to books', () => {
        expect(books2.length).toBe(4)
    })
})