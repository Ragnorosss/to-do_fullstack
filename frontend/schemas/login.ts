import { z } from 'zod';

const UserSchema = z.object({
  email: z.string().email({ message: 'Invalid email format' }),
  password: z
    .string()
    .min(6, { message: 'Password must be at least 6 characters' }),
  token: z.string().optional(),
});
type UserType = z.infer<typeof UserSchema>;

export { type UserType, UserSchema };