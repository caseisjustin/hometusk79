import { Controller, Request, Post, UseGuards, Body, UseInterceptors } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';
import { ClassSerializerInterceptor } from '@nestjs/common';

@Controller('auth')
@UseInterceptors(ClassSerializerInterceptor)
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req, @Body() body) {
    req.user = body
    return this.authService.login(req.user);
  }

  @Post('register')
  async register(@Body() body) {
    return this.authService.register(body);
  }
}
