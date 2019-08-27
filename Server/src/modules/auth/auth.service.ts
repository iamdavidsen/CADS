import * as bcrypt from 'bcrypt';
import {BadRequestException, Injectable} from '@nestjs/common';
import {UsersProvider} from '../users/users.provider';
import {RegisterDto} from './dto/register.dto';
import {User} from '../users/interfaces/user.interface';
import {JwtService} from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private readonly usersProvider: UsersProvider,
        private readonly jwtService: JwtService,
    ) {
    }

    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.usersProvider.findOneWithEmail(username);

        if (user && await bcrypt.compare(pass, user.hash)) {
            return user;
        }

        return null;
    }

    async registerUser(registerDto: RegisterDto) {
        const alreadyCreatedUser = await this.usersProvider.findOneWithEmail(registerDto.email);

        if (alreadyCreatedUser) { throw new BadRequestException(); }

        return this.usersProvider.create({
            username: registerDto.username,
            email: registerDto.email,
            hash: await bcrypt.hash(registerDto.password, 12),
        } as User);
    }

    async login(user: any) {
        const payload = {username: user.username, userId: user._id};
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}
