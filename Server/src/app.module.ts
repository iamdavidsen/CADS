import {Module} from '@nestjs/common';
import {MongooseModule} from "@nestjs/mongoose";

import {AppService} from './app.service';
import {UsersModule} from "./modules/users/users.module";
import {AuthModule} from "./modules/auth/auth.module";

import {DB_CONNECTION_STRING} from "./env";

@Module({
    imports: [
        MongooseModule.forRoot(DB_CONNECTION_STRING, {useNewUrlParser: true}),
        UsersModule,
        AuthModule
    ],
    providers: [AppService],
})

export class AppModule {
}
