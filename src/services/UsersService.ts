import { getCustomRepository, Repository } from "typeorm";
import bcrypt from "bcrypt";
import { User } from "../entities/User";
import { UsersRepository } from "../repositories/UsersRepository";

interface ICreateUser {
  fname: string;
  lname: string;
  username: string;
  email: string;
  password: string;
}

class UserService {
  private usersRepository: Repository<User>;

  constructor() {
    this.usersRepository = getCustomRepository(UsersRepository);
  }

  async create({ password, ...otherUserDetails }: ICreateUser) {
    const saltRounds = 14;

    password = await bcrypt.hash(password, saltRounds);

    const newUser = this.usersRepository.create({
      password,
      ...otherUserDetails,
    });

    await this.usersRepository.save(newUser);

    return newUser;
  }
}

export { UserService, ICreateUser };
