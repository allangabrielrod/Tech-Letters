import { Router } from "express";

import { LettersController } from "./controllers/LettersController";
import { UsersController } from "./controllers/UsersController";

const routes = Router();

const lettersController = new LettersController();
const usersController = new UsersController();

//Letters routes
routes.get("/letters", lettersController.getLetters);
routes.post("/letters", lettersController.createLetter);
routes.get("/letters/:id", lettersController.getLetterById);
routes.patch("/letters/:id", lettersController.updateLetter);
routes.delete("/letters/:id", lettersController.deleteLetter);

//Users routes
routes.post("/users", usersController.register);

export { routes };
