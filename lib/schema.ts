import * as z from 'zod'
import validator from 'validator'

export const AddProductSchema = z.object({
    title: z.string().nonempty(),
    description: z.string().nonempty(),
    price: z.number().positive(),
    // discountPercentage: z.number().min(0).max(100),
    rating: z.number().min(0).max(5),
    stock: z.number().int().nonnegative(),
    // brand: z.string().nonempty(),
    category: z.string().nonempty(),
    thumbnail: z.string().url(),
    images: z.array(z.string().url()).optional().default([]),
  })

const envSchema = z.object({
    GOOGLE_CLIENT_ID: z.string().nonempty(),
    GOOGLE_CLIENT_SECRET: z.string().nonempty(),
    NEXTAUTH_SECRET: z.string().nonempty(),
    DATABASE_URL: z.string().nonempty(),
    // NEXTAUTH_URL: z.string().nonempty()
})
// console.log(envSchema.GO))0O)
export const env = envSchema.safeParse(process.env)
// const phoneRegex = new RegExp(g
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
export type AddProductData = z.infer<typeof AddProductSchema>