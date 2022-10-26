export const noRouteMiddleware = (req,res,next) => {
    console.log(req.route)
    if (!req.route){
        return res.status(404).send("Sorry, no endpoint found")
    }

    next()
}