import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';

import {UserSchema} from './schemas/user.schema';
import {UsersProvider} from './users.provider';
import {UsersService} from './users.service';
import {UsersController} from './users.controller';

import {USERS_COLLECTION} from '../../constants';

@Module({
    imports: [
        MongooseModule.forFeature([{name: USERS_COLLECTION, schema: UserSchema}]),
    ],
    controllers: [UsersController],
    providers: [UsersProvider, UsersService],
    exports: [UsersProvider],
})
export class UsersModule {
}
