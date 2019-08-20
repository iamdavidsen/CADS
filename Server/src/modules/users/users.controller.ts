import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.dto';
import { UsersProvider } from './users.provider';
import { User } from './interfaces/user.interface';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersProvider) {}
}