import { z } from "zod";

export const regiterSchema = z.object({
    username: z.string({ 
        required_error: 'Username is requered',
    }),
    email : z.string({
        required_error: 'email is requered',
    }).email({
        message:'email invalid',
    }),
    password: z.string({
        required_error: 'invalid is requered'
    }).min(6,{
        message:'password is must be at least 6 characters',
    }),
})

export const loginSchema = z.object({
    email : z.string({
        required_error: 'email is requered',
    }).email({
        message:'email invalid',
    }),
    password: z.string({
        required_error: 'invalid is requered'
    }).min(6,{
        message:'password is must be at least 6 characters',
    }),
})
