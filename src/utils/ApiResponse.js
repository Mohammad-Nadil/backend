class ApiResponse {
  constructor(statusCode, message, data) {
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
    this.success = statusCode < 400;
  }

  static success(message = 'success', data) {
    return new ApiResponse(200, message, data);
  }

  static created(message = 'created', data) {
    return new ApiResponse(201, message, data);
  }

  static accepted(message = 'accepted', data) {
    return new ApiResponse(202, message, data);
  }

  static noContent(message = 'no content', data) {
    return new ApiResponse(204, message, data);
  }

  static resetContent(message = 'reset content', data) {
    return new ApiResponse(205, message, data);
  }

  static partialContent(message = 'partial content', data) {
    return new ApiResponse(206, message, data);
  }

  static customResponse(statusCode, message, data) {
    return new ApiResponse(statusCode, message, data);
  }
}

export { ApiResponse };
