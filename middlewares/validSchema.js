export const validSchemaMiddleware = (req, res, next) => {
    const body = req.body
    if (!body.title) {
        return res.status(400).json({details: "Body must contain title"})
    }

    if (!(typeof body.title === "string")) {
        return res.status(400).json({details: "Title must be a string"})
    }

    if (!body.publicationDate) {
        return res.status(400).json({details: "Body must contain publicationDate"})
    }

    const date = new Date(body.publicationDate)

    if (!date) {
        return res.status(400).json({details: "Date must be in usable format"})
    }

    next()
}