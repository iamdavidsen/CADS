import {Module} from '@nestjs/common';
import {MongooseModule} from "@nestjs/mongoose";

import {AppService} from './app.service';
import {UsersModule} from "./modules/users/users.module";
import {AuthModule} from "./modules/auth/auth.module";

import {DB_CONNECTION_STRING} from "./env";
import {ProjectsModule} from "./modules/projects/projects.module";
import {DocumentsModule} from "./modules/documents/documents.module";

@Module({
    imports: [
        MongooseModule.forRoot(DB_CONNECTION_STRING, {useNewUrlParser: true}),
        UsersModule,
        ProjectsModule,
        DocumentsModule,
        AuthModule
    ],
    providers: [AppService],
})

export class AppModule {
}
