import { asyncHandler } from '../../utils/AsyncHandler.js';
import User from '../../models/user.model.js';
import { ApiResponse } from '../../utils/ApiResponse.js';

const signup = asyncHandler(async (req, res, next) => {
  // const { name, email, password } = req.body;

  const usernameExists = await User.findOne({ username: req.body.username });
  if (usernameExists) {
    return next(ApiResponse.error('Username already exists', []));
  }

  const emailExists = await User.findOne({ email: req.body.email });
  if (emailExists) {
    return next(ApiResponse.error('Email already exists', []));
  }

  const user = await User.create(req.body);

  res.status(201).json(ApiResponse.success('User created successfully', user));
});

export { signup };
