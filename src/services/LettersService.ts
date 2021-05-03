import { getCustomRepository, Repository } from "typeorm";
import { Letter } from "../entities/Letter";
import { LettersRepository } from "../repositories/LettersRepository";

interface ICreateLetter {
  author_id: string;
  title: string;
  content: string;
}

interface IUpdateLetter {
  title?: string;
  content?: string;
}

class LettersService {
  private lettersRepository: Repository<Letter>;

  constructor() {
    this.lettersRepository = getCustomRepository(LettersRepository);
  }
  async create(letter: ICreateLetter) {
    const newLetter = this.lettersRepository.create(letter);

    await this.lettersRepository.save(newLetter);

    return newLetter;
  }

  async findAll() {
    const letters = await this.lettersRepository.find();

    return letters;
  }

  async findById(id: string) {
    const letter = await this.lettersRepository.findOne({ id });

    return letter;
  }

  async update(id: string, letter: IUpdateLetter) {
    const foundLetter = await this.lettersRepository.findOne({ id });

    const updatedLetter = await this.lettersRepository.save({
      ...foundLetter,
      ...letter,
    });

    return updatedLetter;
  }

  async delete(id: string) {
    return await this.lettersRepository.delete({ id });
  }
}

export { LettersService };
