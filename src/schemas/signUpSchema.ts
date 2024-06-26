import {z} from 'zod'

export const usernameValidation = z
    .String()
    .min(2, "Username must be at least 2 characters")
    .min(20, "Username must be no more than 20 characters")
    .regex(/^[a-zA-Z0-9_]+$/, "Username must not contain any special characters")

export const signUpSchema = z.object({
    username: usernameValidation,
    email:z.string().email({message: 'Invalid email address'}),
    password: z.string().min(6, {message: 'Password must be at least 6 characters'}),
})