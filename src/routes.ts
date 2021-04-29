import { Router } from "express";

import { LettersController } from "./controllers/LettersController";

const routes = Router();

const lettersController = new LettersController();

routes.get("/", lettersController.getLetters);

export { routes };
