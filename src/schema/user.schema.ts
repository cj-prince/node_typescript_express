import Joi, { ObjectSchema } from "joi"


export const createUserSchema: ObjectSchema = Joi.object({
  name: Joi.string().min(3).max(255).required(),
  email: Joi.string().email().required(),
  date_of_birth: Joi.date(),
  username: Joi.string().alphanum().min(3).max(30).required(),
  password: Joi.string().min(6).required(),
});

export const emailLoginSchema: ObjectSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
});