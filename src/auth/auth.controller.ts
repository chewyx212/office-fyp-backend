import { AuthService } from './auth.service';
import { SignUpDto, SignInDto } from './dto/auth.dto';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { SignInPayload } from './payload.interface';
import { UserRole } from './user.entity';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Get('/role')
  getRole(): Promise<UserRole[]> {
    return this.authService.getRole();
  }

  @Post('/role')
  addRole(@Body('name') name: string): Promise<UserRole> {
    return this.authService.addRole(name);
  }

  @Post('/signup')
  signUp(@Body() signUpDto: SignUpDto): Promise<void> {
    return this.authService.signUp(signUpDto, 1);
  }

  @Post('/signadminup')
  signAdminUp(@Body() signUpDto: SignUpDto): Promise<void> {
    return this.authService.signUp(signUpDto, 2);
  }

  @Post('/signin')
  signIn(@Body() signInDto: SignInDto): Promise<SignInPayload> {
    return this.authService.signIn(signInDto);
  }
}
