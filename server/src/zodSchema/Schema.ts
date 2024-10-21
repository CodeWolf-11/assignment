import { z } from "zod";

export const loginSchema = z.object({
    email: z.string().email({ message: "Email is Invalid" }),
    password: z.string().min(1, { message: "Password is required" })
});

export const registerSchema = z.object({
    email: z.string().email({ message: "Email is Invalid" }),
    password: z.string().min(8, { message: "Password must be at least 8 characters long" }),
    DOB: z.string().min(1, { message: "DOB is required" }),
    name: z.string().min(1, { message: "Name is Required" })
});