import { z } from "zod";

export const loginSchema = z.object({
    email: z.string().email({ message: "Email is Invalid" }),
    password: z.string()
});

export const registerSchema = z.object({
    email: z.string().email({ message: "Email is Invalid" }),
    password: z.string().min(8, { message: "Password must be at least 8 characters long" }),
    DOB: z.string(),
    name: z.string()
});