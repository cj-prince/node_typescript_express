import { Request, Response, NextFunction } from 'express';
import * as Joi from 'joi'; // Assuming you're using Joi for validation

type DataType = 'body' | 'params' | 'query' | 'headers' | 'file';

const validateData =
    (schema: Joi.ObjectSchema<any>, type: DataType) =>
    async (req: any, res: Response, next: NextFunction) => {
    try {
        const getType = {
        body: req.body,
        params: req.params,
        query: req.query,
        headers: req.headers,
        file: req.files,
    };

    //   const options: Joi.ValidationOptions = { language: { key: '{{key}} ' } };
        const data = getType[type];

        const isValid = await schema.validate(data, {
            abortEarly: false, 
            stripUnknown: true,
        });
        if (!isValid.error) {
            return next();
        }

        const { message } = isValid.error.details[0];
        return res.status(400).json({ error: message });
    } catch (error) {
        return next(error);
    }
};

export default validateData;
