import Joi from 'joi';

export const ProductValidators = {
    createSchema: {
        payload: Joi.object({
            name: Joi.string().required(),
            description: Joi.string().allow(null).optional(),
            price: Joi.number().positive().required(),
            stock: Joi.number().min(0).required()
        })
    },
    getByIdSchema: {
        params: Joi.object({
            id: Joi.number().required()
        })
    },
    updateSchema: {
        params: Joi.object({
            id: Joi.number().required()
        }),
        payload: Joi.object({
            name: Joi.string().optional(),
            description: Joi.string().allow(null).optional(),
            price: Joi.number().positive().optional(),
            stock: Joi.number().min(0).optional()
        })
    },
    deleteSchema: {
        params: Joi.object({
            id: Joi.number().required()
        }),
        query: Joi.object({
            soft: Joi.string().valid('true', 'false').optional()
        })
    }
};
