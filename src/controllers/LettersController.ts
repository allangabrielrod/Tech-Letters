import { Request, Response } from "express";
import { LettersService } from "../services/LettersService";

class LettersController {
  async getLetters(request: Request, response: Response): Promise<Response> {
    const lettersService = new LettersService();

    try {
      const letters = await lettersService.findAll();
      return response.json(letters);
    } catch (e) {
      return response.json({
        message: "Something Went wrong! Try again later.",
      });
    }
  }

  async createLetter(request: Request, response: Response): Promise<Response> {
    const lettersService = new LettersService();
    const { author_id, title, content } = request.body;

    try {
      const letter = await lettersService.create({ author_id, title, content });

      return response.json(letter);
    } catch (e) {
      return response.json({
        message: "Something Went wrong! Try again later.",
      });
    }
  }

  async getLetterById(request: Request, response: Response): Promise<Response> {
    const lettersService = new LettersService();
    const { id } = request.params;

    try {
      const letter = await lettersService.findById(id);

      return response.json(letter);
    } catch (e) {
      return response.json({
        message: "Something Went wrong! Try again later.",
      });
    }
  }
}

export { LettersController };
