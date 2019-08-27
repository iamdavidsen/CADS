import {Controller, Get, Request, Post, Body, Param, UseGuards, Patch, Delete} from '@nestjs/common';
import { CreateProjectDto } from './dto/createProject.dto';
import { EditProjectDto } from './dto/editProject.dto';
import { Project } from './interfaces/project.interface';
import {ProjectsService} from './projects.service';
import {AuthGuard} from '@nestjs/passport';
import {AddToProjectDto} from './dto/addToProject.dto';
import {RemoveFromProjectDto} from './dto/removeFromProject.dto';

@Controller('projects')
export class UsersController {
    constructor(private projectsProvider: ProjectsService) {}

    @UseGuards(AuthGuard('jwt'))
    @Get()
    async getProjects(@Request() req) {
        return this.projectsProvider.findAll(req.user.userId);
    }

    @UseGuards(AuthGuard('jwt'))
     @Get(':id')
    async getProject(@Request() req, @Param('id') projectId: string) {
        return this.projectsProvider.findById(req.user.userId, projectId);
     }

    @UseGuards(AuthGuard('jwt'))
    @Post()
    async createProject(@Request() req, @Body() createProjectDto: CreateProjectDto): Promise<Project | undefined> {
        return this.projectsProvider.create(req.user.userId, createProjectDto);
    }

    @UseGuards(AuthGuard('jwt'))
    @Patch(':id')
    async editProject(@Request() req, @Param('id') projectId, @Body() editProjectDto: EditProjectDto): Promise<Project | undefined> {
        return this.projectsProvider.edit(req.user.userId, projectId, editProjectDto);
    }

    @UseGuards(AuthGuard('jwt'))
    @Patch(':id/add')
    async addToProject(@Request() req, @Param('id') projectId, @Body() addToProjectDto: AddToProjectDto): Promise<Project | undefined> {
        return this.projectsProvider.addToProject(req.user.userId, projectId, addToProjectDto.emailToAdd);
    }

    @UseGuards(AuthGuard('jwt'))
    @Patch(':id/remove')
    async addToRemove(@Request() req, @Param('id') projectId, @Body() removeFromProjectDto: RemoveFromProjectDto): Promise<Project | undefined> {
        return this.projectsProvider.removeFromProject(req.user.userId, projectId, removeFromProjectDto.emailToRemove);
    }

    @UseGuards(AuthGuard('jwt'))
    @Delete(':id')
    async deleteProject(@Request() req, @Param('id') projectId) {
        return this.projectsProvider.delete(req.user.userId, projectId);
    }
}
