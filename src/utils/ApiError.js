class ApiError extends Error {
  constructor(status, message, stack = '', code = '') {
    super(message);
    this.status = status;
    this.stack = stack;
    this.success = false;
    this.code = code;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }

  static badRequest(message = 'bad request', errors = []) {
    return new ApiError(400, message, errors);
  }

  static forbidden(message = 'forbidden', errors = []) {
    return new ApiError(403, message, errors);
  }

  static notFound(message = 'not found', errors = []) {
    return new ApiError(404, message, errors);
  }

  static serverError(message = 'server error', errors = []) {
    return new ApiError(500, message, errors);
  }

  static unauthorized(message = 'unauthorized', errors = []) {
    return new ApiError(401, message, errors);
  }

  static conflict(message = 'conflict', errors = []) {
    return new ApiError(409, message, errors);
  }

  static validationError(message = 'validation error', errors = []) {
    return new ApiError(422, message, errors);
  }

  static gatewayTimeout(message = 'gateway timeout', errors = []) {
    return new ApiError(504, message, errors);
  }

  static serviceUnavailable(message = 'service unavailable', errors = []) {
    return new ApiError(503, message, errors);
  }

  static tooManyRequests(message = 'too many requests', errors = []) {
    return new ApiError(429, message, errors);
  }

  static customError (status, message, errors = []) {
    return new ApiError(status, message, errors);
  }

}
export { ApiError };
