import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/createUser.dto';
import { User } from './interfaces/user.interface';
import {UsersProvider} from "./users.provider";

@Injectable()
export class UsersService {
    constructor(private readonly usersProvider: UsersProvider) {}
}
