import * as z from 'zod'
import validator from 'validator'


// const phoneRegex = new RegExp(
//     /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
// )
export const schema = z.object({
    username: z.string().min(3).max(20).nonempty('Username is required').refine((val) => !/\s/.test(val), 'Username cannot contain spaces'),
    email: z.string().email('Invalid email address').nonempty('Email is required'),
    // phone: z.string().
    // regex(phoneRegex, 'Invalid phone number'),
    // .refine((val) => validator.isMobilePhone(val)),
    password: z.string().min(8).max(32).nonempty('password is required').refine((val) => /[A-Z]/.test(val), 'password must contain at least one uppercase letter').refine((val) => /[a-z]/.test(val), 'password must contain at least one lowercase letter').refine((val) => /\d/.test(val), 'Password must contain at least one digit').refine((val) => /[^A-Za-z0-9]/.test(val),'Password must contain at least one special character')
})

export const signInSchema = z.object({
    email: z.string().email('Invalid email address').nonempty('Email is required'),
    password: z.string().min(8).max(32).nonempty('password is required').refine((val) => /[A-Z]/.test(val), 'password must contain at least one uppercase letter').refine((val) => /[a-z]/.test(val), 'password must contain at least one lowercase letter').refine((val) => /\d/.test(val), 'Password must contain at least one digit').refine((val) => /[^A-Za-z0-9]/.test(val),'Password must contain at least one special character')
})

export type signUpData = z.infer<typeof schema>
export type signInData = z.infer<typeof signInSchema>