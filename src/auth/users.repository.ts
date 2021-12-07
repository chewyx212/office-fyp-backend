import { SignUpDto } from './dto/auth.dto';
import { User } from 'src/auth/user.entity';

import { EntityRepository, Repository } from 'typeorm';
import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@EntityRepository(User)
export class UsersRepository extends Repository<User> {
  async createUser(signUpDto: SignUpDto): Promise<void> {
    const { email, name, password } = signUpDto;
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = this.create({
      email,
      name,
      password: hashedPassword,
      email_verified: true,
    });
    console.log(user);
    try {
      await this.save(user);
      console.log('inside');
    } catch (error) {
      console.log(error.errno)
      if (error.errno === 1062) {
      console.log(error.errno);
        throw new ConflictException('Email already registered');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }
}
