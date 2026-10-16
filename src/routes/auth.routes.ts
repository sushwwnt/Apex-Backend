import { Router } from "express";
import { register } from "node:module";
import { registerUser } from "../services/auth.service";

export const authRouter = Router()

authRouter.post("/register", async(req, res, next)=> {
    try{
        const {email, password}= req.body

        // not writing service login here
        // service login - servicefile
        await registerUser(email, password)

        res.status(201).json({
            succes: true,
            message: "Registration successfull. Please login to continue"
        });
    }catch(error){
        next(error);
    }
})