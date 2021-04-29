import { Request, Response } from "express";

class LettersController {
  public async getLetters(request: Request, response: Response) {
    return response.send("test");
  }
}

export { LettersController };
