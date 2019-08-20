import {Controller, Request, Post, UseGuards, Body, Get} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {RegisterDto} from "./dto/register.dto";
import {AuthService} from "./auth.service";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}
    
    @UseGuards(AuthGuard('local'))
    @Post('login')
    async login(@Request() req) {
        return this.authService.login(req.user);
    }
    
    @Post('register')
    async register(@Body() registerDto: RegisterDto) {
        return this.authService.registerUser(registerDto)
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('me')
    getProfile(@Request() req) {
        return req.user;
    }
}