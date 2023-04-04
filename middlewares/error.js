const errorBuilder = (title, message) => {
    return {
        title, 
        message
    }
}

export class ErrorOutOfRange extends Error {
    status = 404;
    constructor() {
        super('Index given is out of range')
    }
}

export const ErrorMiddleware = (error, req, res, next) => {
    return res.status(error.status).json({message: error.message})
}