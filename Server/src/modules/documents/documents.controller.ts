import {Controller, Get, Request, Post, Body, Param, UseGuards, Patch, Delete} from '@nestjs/common';
import { Document } from './interfaces/document.interface';
import {DocumentsService} from "./documents.service";
import {AuthGuard} from "@nestjs/passport";

import { AddDocumentDto } from './dto/addDocument.dto';
import { EditDocumentDto } from './dto/editDocument.dto';

@Controller('documents')
export class DocumentsController {
    constructor(private documentsService: DocumentsService) {}

    @UseGuards(AuthGuard('jwt'))
     @Get('project/:id')
    async getDocumentsInProject(@Request() req, @Param('id') projectId: string) {
        return this.documentsService.findAllByProjectId(req.user.userId, projectId)
     }

    @UseGuards(AuthGuard('jwt'))
    @Post('project/:id')
    async addDocument(@Request() req, @Param('id') projectId: string, @Body() addDocumentDto: AddDocumentDto): Promise<Document | undefined> {
        return this.documentsService.createDocument(req.user.userId, projectId, addDocumentDto)
    }


    @UseGuards(AuthGuard('jwt'))
    @Patch(':id')
    async editDocument(@Request() req, @Param('id') documentId: string, @Body() editDocumentDto: EditDocumentDto): Promise<Document | undefined> {
        return this.documentsService.updateDocument(req.user.userId, documentId, editDocumentDto)
    }
    
    @UseGuards(AuthGuard('jwt'))
    @Delete(':id')
    async deleteDocument(@Request() req, @Param('id') documentId: string) {
        return this.documentsService.deleteDocument(req.user.userId, documentId)
    }
}