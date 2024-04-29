import { Controller, Post, Body } from '@nestjs/common';

import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { ApiResponse } from '../common/dto/api-response.dto';
import { SignInResponse } from './types/sign-in-response.type';
import { SkipAuth } from './decorators/skip-auth.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @SkipAuth()
  @Post('login')
  login(@Body() loginDto: LoginDto): Promise<ApiResponse<SignInResponse>> {
    return this.authService.login(loginDto);
  }

  @SkipAuth()
  @Post('admin')
  adminLogin(@Body() loginDto: LoginDto): Promise<ApiResponse<SignInResponse>> {
    return this.authService.adminLogin(loginDto);
  }
}
