import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import {AuthModule} from '../auth/auth.module';

import {DocumentsSchema} from './schemas/document.schema';
import {DocumentsProvider} from './documents.provider';
import {DocumentsService} from './documents.service';
import {DocumentsController} from './documents.controller';

import {DOCUMENTS_COLLECTION} from '../../constants';
import {ProjectsModule} from '../projects/projects.module';

@Module({
    imports: [
        MongooseModule.forFeature([{name: DOCUMENTS_COLLECTION, schema: DocumentsSchema}]),
        AuthModule,
        ProjectsModule,
    ],
    controllers: [DocumentsController],
    providers: [DocumentsProvider, DocumentsService],
    exports: [DocumentsProvider],
})
export class DocumentsModule {
}
