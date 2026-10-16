import { error } from "node:console";
import { AppError } from "../errors/AppError";
import { createUser, findUserByEmail } from "../repositories/user.repository";
import bcrypt from "bcryptjs";


export async function registerUser(
  email: string,
  password: string,
): Promise<void> {
  if (!email || !password) {
    throw new AppError(400, "Email and password are required");
  }

  if(password.length < 6){
    throw new AppError(400, "Password must be atleast 6 characters");
  }

  const normalizeEmail = email.toLowerCase().trim()


  // find the user if its already present in db or not
  // id yes then we will not allow to register with the same email again
  // thats it -> vv imp

  const existingUser = await findUserByEmail(normalizeEmail)

  if(existingUser){
    throw new AppError(409, "Email already present")
  }

  const passwordHash = await bcrypt.hash(password, 10)

  await createUser(normalizeEmail, passwordHash)
}