import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';

import {AddDocumentDto} from './dto/addDocument.dto';
import {EditDocumentDto} from './dto/editDocument.dto';

import {Document} from './interfaces/document.interface';

import {DOCUMENTS_COLLECTION, PROJECTS_COLLECTION} from '../../constants';

import * as mongoose from 'mongoose';

@Injectable()
export class DocumentsProvider {
    constructor(@InjectModel(DOCUMENTS_COLLECTION) private readonly documentModel: Model<Document>) {
    }

    async findDocument(documentId: string): Promise<Document | undefined> {
        return this.documentModel.findById(documentId);
    }

    async createDocument(projectId: string, addDocumentDto: AddDocumentDto): Promise<Document> {
        return this.documentModel.create({
            ...addDocumentDto,
            project: mongoose.Types.ObjectId(projectId),
        } as Document);
    }

    async updateDocument(documentId: string, editDocumentDto: EditDocumentDto): Promise<Document | undefined> {
        return this.documentModel.findByIdAndUpdate(documentId, editDocumentDto);
    }

    async deleteDocument(documentId: string) {
        return this.documentModel.findByIdAndDelete(documentId);
    }

    async findAllByProjectId(projectId: string): Promise<Document[]> {
        return this.documentModel.find({project: mongoose.Types.ObjectId(projectId)});
    }
}
