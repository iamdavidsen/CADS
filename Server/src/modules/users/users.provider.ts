import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/createUser.dto';
import { User } from './interfaces/user.interface';

import {InjectModel} from "@nestjs/mongoose";
import {USERS_COLLECTION} from "../../constants";

@Injectable()
export class UsersProvider {
    constructor(@InjectModel(USERS_COLLECTION) private readonly userModel: Model<User>) {}

    async create(createUserDto: User): Promise<User> {
        const createdUser = new this.userModel(createUserDto);
        return await createdUser.save();
    }
    
    async findOneWithEmail(email: string): Promise<User | undefined> {
        return this.userModel.findOne({ email })
    }
    
    async findAll(): Promise<User[]> {
        return await this.userModel.find().exec();
    }
}