import { z } from 'zod';

const signupValidatorSchema = z.object({
  username: z.string().min(5).max(20),
  name: z.string().min(5).max(20),
  email: z.string().email(),
  password: z
    .string()
    .min(6)
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/),
});

export { signupValidatorSchema };