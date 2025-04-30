import { ZodError } from 'zod';
import { ApiError } from '../utils/ApiError.js';

export function validator(schema) {
  return (req, res_, next) => {
    try {
      const schemaValidation = schema.parse(req.body);
      req.body = schemaValidation;
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        const formateZodError = {};
        error.errors.forEach((issue) => (formateZodError[issue.path[0]] = issue.message));
        console.log(formateZodError);
        return next(ApiError.validationError('Validation error', formateZodError, error));
      }
      return next(ApiError.serverError('Validation error', error));
    }
  };
}
