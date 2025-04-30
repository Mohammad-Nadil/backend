import { ApiError } from '../utils/ApiError.js';

const errorHandler = (err, _req, res, _next) => {
  let error = err;

  if (!(err instanceof ApiError)) {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    const errors = err.errors || [];
    const stack = err.stack || '';
    error = new ApiError(statusCode, message, errors, stack);
  }

  res
    .status(error.statusCode)
    .json(ApiError.customError(error.statusCode, error.message, error.errors, error.stack));
};

export default errorHandler;
