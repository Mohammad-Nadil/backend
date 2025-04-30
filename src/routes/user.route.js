import e from 'express';
// import { validator } from '../middlewares/validator.middleware.js';
import { signupValidatorSchema } from '../validator/user.validator.js';
import { signup } from '../controllers/user/user.controller.js';
import {  validator } from '../middlewares/validator.middleware.js';

const router = e.Router();

router.post('/user/signup', validator(signupValidatorSchema), signup);

export default router;
