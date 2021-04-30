import { EntityRepository, Repository } from "typeorm";
import { Letter } from "../entities/Letter";

@EntityRepository(Letter)
class LettersRepository extends Repository<Letter> {}

export { LettersRepository };
