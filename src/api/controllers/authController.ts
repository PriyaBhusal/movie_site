import { Request, Response } from "express";
import { UserInterface } from "../../interfaces";
import { userService } from "../../services";
import { jwtSecret } from "../../config";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { access } from "fs";
export class AuthController {
  public static async signup(req: Request, res: Response): Promise<Response> {
    
    const userData = req.body;
    const user = await new userService().findOne(userData.email);
    if (user) {
      return res.status(409).json({
        message: "User already exists",
        success: false,
      });
    }

    const hashedPassword = await bcrypt.hash(userData.password, 10);
    console.log(hashedPassword);
    const newUser = await new userService().create({
      name: userData.name,
      email: userData.email,
      password: hashedPassword,
      role: userData.role,
    });
    return res.status(201).json({
      message: "Signup successfull.You can proceed to login.",
      data: newUser,
    })}

  public static async login(req: Request, res: Response): Promise<Response> {
    const userData = req.body;
    const user = await new userService().findOne(userData.email);
    if (!user) {
      return res.status(401).json({
        message: "User doesnot exists",
        success: false,
      });
    }
    const checkPass = await bcrypt.compare(userData.password, user.password);

    if (!checkPass) {
      res.status(500).json({
        message: "Invalid credentials",
        success: false,
      });
    }
    const token = jwt.sign({
      id:user.id,
      name:user.name,
      email:user.email,
      role:user.role
    }, jwtSecret, { expiresIn: "1d" });
    return res.status(200).json({
      message: "login successfull",
      success: true,
      data: {
        token,
      },
    });
  }
}
