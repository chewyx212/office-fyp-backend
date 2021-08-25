import { RolesRepository } from './repository/roles.repository';
import { SignInPayload } from './payload.interface';
import { SignUpDto, SignInDto } from './dto/auth.dto';
import { UsersRepository } from './repository/users.repository';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserRole } from './user.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UsersRepository)
    private userRepo: UsersRepository,
    @InjectRepository(RolesRepository)
    private roleRepo: RolesRepository,
    private jwtService: JwtService,
  ) {}
  async getRole(): Promise<UserRole[]> {
    return this.roleRepo.find();
  }

  async addRole(name: string): Promise<UserRole> {
    const role = this.roleRepo.create({ name });
    return this.roleRepo.save(role);
  }

  async signUp(signUpDto: SignUpDto, roleId: number): Promise<void> {
    console.log(signUpDto);
    const role = await this.roleRepo.findOne({ id: roleId });
    console.log(role);
    return this.userRepo.createUser(signUpDto, role);
  }

  async signIn(signInDto: SignInDto): Promise<SignInPayload> {
    const { email, password } = signInDto;
    const user = await this.userRepo.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
      const token = await this.jwtService.sign({ email });
      const payload: SignInPayload = { user, token };
      return payload;
    } else {
      throw new UnauthorizedException('Pleace check your login credential');
    }
  }
}
