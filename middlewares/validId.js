export const validIdMiddleware = (req,res,next) => {
    const {id} = req.params

    if(isNaN(parseInt(id)) || parseInt(id) <= 0) {

        return res.status(400).json({details: "id should be a positive number"})
    }

    next()
}