export const loggerMiddleware = (req, res, next) => {
    console.log("Method:", req.method)
    console.log("Path:", req.path)
    console.log("Query:", req.query)
    console.log("Body:", req.body)

    next()
}