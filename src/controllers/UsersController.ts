import { Request, Response } from "express";
import { UserService } from "../services/UsersService";

class UsersController {
  async register(request: Request, response: Response): Promise<Response> {
    
    const userService = new UserService();

    try {
      const newUser = await userService.create(request.body);
      return response.json(newUser);
    } catch (e) {
      return response.json({
        message: "Something Went wrong! Try again later.",
      });
    }
  }
}

export { UsersController };
