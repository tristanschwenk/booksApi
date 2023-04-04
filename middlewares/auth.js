import Joi from "@hapi/joi";



export const registerValidation = (data) => {
    const registerSchema = Joi.object({
        email: Joi.string().email().lowercase().required(),
        username: Joi.string().min(1).required(),
        password: Joi.string().min(4).required(),
        name: Joi.string().min(1).required(),
    });
    registerSchema.validate(data)
}