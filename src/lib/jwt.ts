import { TokenPayload } from "../types/user";
import jwt, {SignOptions} from "jsonwebtoken";
import { env } from "../config/env";




export function signAccessToken(payload: TokenPayload): string{
    const options: SignOptions = {
        expiresIn: env.jwtAccessExpiresIn as SignOptions['expiresIn']
    }

    return jwt.sign(payload, env.jwtAccessSecret, options)
}