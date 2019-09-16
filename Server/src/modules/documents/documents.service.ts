import {BadRequestException, Injectable} from '@nestjs/common';
import { Document } from './interfaces/document.interface';
import {UsersProvider} from '../users/users.provider';
import {EditDocumentDto} from './dto/editDocument.dto';
import {  AddDocumentDto } from './dto/addDocument.dto';
import {DocumentsProvider} from './documents.provider';
import {ProjectsProvider} from '../projects/projects.provider';
import {isMember} from '../projects/utils/isMember';

@Injectable()
export class DocumentsService {
    constructor(private readonly documentsProvider: DocumentsProvider, private readonly projectsProvider: ProjectsProvider, private readonly usersProvider: UsersProvider) {}

    async createDocument(userId: string, projectId: string, addDocumentDto: AddDocumentDto): Promise<Document> {
        const project = await this.projectsProvider.findById(projectId);

        if (!isMember(userId, project)) { throw new BadRequestException(); }

        return this.documentsProvider.createDocument(projectId, addDocumentDto);
    }

    async updateDocument(userId: string, documentId: string, editDocumentDto: EditDocumentDto): Promise<Document | undefined> {
        const document = await this.documentsProvider.findDocument(documentId);

        if (!document) { throw new BadRequestException(); }

        const project = await this.projectsProvider.findById(document.project.toHexString());

        if (!isMember(userId, project)) { throw new BadRequestException(); }

        return this.documentsProvider.updateDocument(documentId, editDocumentDto);
    }

    async deleteDocument(userId: string, documentId: string) {
        const document = await this.documentsProvider.findDocument(documentId);

        if (!document) { throw new BadRequestException(); }

        const project = await this.projectsProvider.findById(document.project.toHexString());

        if (!isMember(userId, project)) { throw new BadRequestException(); }

        return this.documentsProvider.deleteDocument(documentId);
    }

    async findAllByProjectIdPublic(projectId: string): Promise<Document[]> {
        const project = await this.projectsProvider.findById(projectId);

        if (!project.public) { throw new BadRequestException(); }

        return this.documentsProvider.findAllByProjectId(projectId);
    }

    async findAllByProjectId(userId: string, projectId: string): Promise<Document[]> {
        const project = await this.projectsProvider.findById(projectId);

        if (!isMember(userId, project)) { throw new BadRequestException(); }

        return this.documentsProvider.findAllByProjectId(projectId);
    }
}
