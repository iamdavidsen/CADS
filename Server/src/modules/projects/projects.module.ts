import {Module} from '@nestjs/common';
import {MongooseModule} from "@nestjs/mongoose";
import {AuthModule} from "../auth/auth.module";

import {ProjectSchema} from "./schemas/project.schema";
import {ProjectsProvider} from './projects.provider';
import {ProjectsService} from "./projects.service"
import {UsersController} from './projects.controller';

import {PROJECTS_COLLECTION} from "../../constants";

@Module({
    imports: [
        MongooseModule.forFeature([{name: PROJECTS_COLLECTION, schema: ProjectSchema}]),
        AuthModule
    ],
    controllers: [UsersController],
    providers: [ProjectsProvider, ProjectsService],
    exports: [ProjectsProvider]
})
export class ProjectsModule {
}