import { ApiError } from '../utils/ApiError.js';

const errorHandler = (err, req_, res, next_) => {
  res.status(err.status || 500).json(ApiError.customError(err.status, err.message, err.errors));
};

export default errorHandler;
