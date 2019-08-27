import {BadRequestException, Injectable} from '@nestjs/common';
import {  CreateProjectDto } from './dto/createProject.dto';
import { Project } from './interfaces/project.interface';
import { ProjectsProvider } from './projects.provider';
import {EditProjectDto} from './dto/editProject.dto';
import {isMember} from './utils/isMember';
import {UsersProvider} from '../users/users.provider';
import {isAdmin} from './utils/isAdmin';

@Injectable()
export class ProjectsService {
    constructor(private readonly projectsProvider: ProjectsProvider, private readonly usersProvider: UsersProvider) {}

    async create(userId: string, createProjectDto: CreateProjectDto): Promise<Project> {
        return this.projectsProvider.create(userId, createProjectDto);
    }

    async findById(userId: string, projectId: string): Promise<Project> {
        const res = await this.projectsProvider.findById(projectId);

        if (!isMember(userId, res)) { throw new BadRequestException(); }

        return res;
    }

    async findAll(userId: string): Promise<Project[]> {
        return this.projectsProvider.findAll(userId);
    }

    async edit(userId: string, projectId: string, editProjectDto: EditProjectDto): Promise<Project | undefined> {
        const res = await this.projectsProvider.findById(projectId);

        if (!isMember(userId, res)) { throw new BadRequestException(); }

        return this.projectsProvider.edit(projectId, editProjectDto);
    }

    async addToProject(userId: string, projectId: string, emailToAdd: string) {
        const res = await this.projectsProvider.findById(projectId);

        if (!isAdmin(userId, res)) { throw new BadRequestException(); }

        const userToAdd = await this.usersProvider.findOneWithEmail(emailToAdd);

        if (isMember(userToAdd.id, res)) { return res; }

        return this.projectsProvider.addToProject(projectId, userToAdd.id);
    }

    async removeFromProject(userId: string, projectId: string, emailToRemove: string) {
        const res = await this.projectsProvider.findById(projectId);

        if (!isAdmin(userId, res)) { throw new BadRequestException(); }

        const userToAdd = await this.usersProvider.findOneWithEmail(emailToRemove);

        if (!isMember(userToAdd.id, res)) { return res; }

        return this.projectsProvider.removeFromProject(projectId, userToAdd.id);
    }

    async delete(userId: string, projectId: string) {
        const res = await this.projectsProvider.findById(projectId);

        if (!isAdmin(userId, res)) { throw new BadRequestException(); }

        return this.projectsProvider.delete(projectId);
    }
}
