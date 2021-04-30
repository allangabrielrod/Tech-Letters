import { Router } from "express";

import { LettersController } from "./controllers/LettersController";
import { UsersController } from "./controllers/UsersController";

const routes = Router();

const lettersController = new LettersController();
const usersController = new UsersController();

//Letters routes
routes.get("/letters", lettersController.getLetters);
routes.get("/letters/:id", lettersController.getLetterById);
routes.post("/letters", lettersController.createLetter);

//Users routes
routes.post("/users", usersController.register);

export { routes };
