import { Request, Response } from "express";
import { User } from "../models/user.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const RegisterController = async (req: Request, res: Response) => {
    try {

        const body = req.body;

        if (!body.email || !body.DOB || !body.name || !body.password) {
            res.status(400).json(
                {
                    "message": "Insufficient Data"
                }
            );

            return;
        }

        const user = await User.findOne({
            email: body.email
        });

        if (user) {
            res.status(400).json(
                {
                    "message": "Email Id already taken"
                }
            );

            return;
        }

        const encryptedPassword = await bcrypt.hash(body.password, 10);


        const createdUser = await User.create({
            email: body.email,
            name: body.name,
            DOB: body.DOB,
            password: encryptedPassword
        });

        if (!createdUser) {
            res.status(500).json(
                {
                    "message": "Something went wrong"
                }
            );

            return;
        }

        const payload = {
            id: createdUser.id,
            name: createdUser.name,
            email: createdUser.email
        }

        const token = jwt.sign(payload, process.env.JWT_SECRET!, {
            expiresIn: "10d"
        });

        res.status(200).json({
            user: {
                name: createdUser.name,
                email: createdUser.email,
            },
            token: token,
            message: "User Registered successfully"
        });

        return;

    } catch (error) {
        console.log("[REGISTER_USER_ERROR_POST]", error);
        res.status(500).json(
            {
                "message": "Something went wrong"
            }
        );

        return;
    }
}

export const LoginController = async (req: Request, res: Response) => {
    try {

        const body = req.body;

        if (!body.password || !body.email) {
            res.status(400).json(
                {
                    "message": "Insufficient Data"
                }
            );

            return;
        }

        const userInDB = await User.findOne({
            email: body.email
        });

        if (!userInDB) {
            res.status(404).json(
                {
                    "message": "User not found"
                }
            );
            return;
        }

        const isPasswordCorrect = await bcrypt.compare(body.password, userInDB.password);

        if (!isPasswordCorrect) {
            res.status(403).json(
                {
                    "message": "Email Id or Password Incorrect"
                }
            );

            return;
        }

        const payload = {
            name: userInDB.name,
            email: userInDB.email,
            DOB: userInDB.DOB
        }

        const token = jwt.sign(payload, process.env.JWT_SECRET!, {
            expiresIn: "10d"
        });

        res.status(200).json(
            {
                "message": "User Logged in successfully",
                data: {
                    email: userInDB.email,
                    name: userInDB.name
                },
                token: token
            }
        );

        return;


    } catch (error) {
        console.log("[REGISTER_USER_ERROR_POST]", error);
        res.status(500).json(
            {
                "message": "Something went wrong"
            }
        );

        return;
    }
}