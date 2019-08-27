import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from 'mongoose';

import {CreateProjectDto} from './dto/createProject.dto';
import {Project} from './interfaces/project.interface';

import {PROJECTS_COLLECTION} from "../../constants";

import * as mongoose from "mongoose";
import {EditProjectDto} from "./dto/editProject.dto";

@Injectable()
export class ProjectsProvider {
    constructor(@InjectModel(PROJECTS_COLLECTION) private readonly projectModel: Model<Project>) {
    }

    async create(userId: string, createProjectDto: CreateProjectDto): Promise<Project> {
        const createdProject = new this.projectModel({...createProjectDto, creator: mongoose.Types.ObjectId(userId)});
        return await createdProject.save();
    }

    async findById(projectId): Promise<Project> {
        return this.projectModel.findById(projectId)
    }

    async findAll(userId: string): Promise<Project[]> {
        return await this.projectModel.find({
            $or: {
                creator: mongoose.Types.ObjectId(userId),
                members: {$all: [mongoose.Types.ObjectId(userId)]}
            }
        }).exec();
    }

    async edit(id: string, project: EditProjectDto): Promise<Project | undefined> {
        return this.projectModel.findByIdAndUpdate(id, {
            projectName: project.projectName,
            description: project.description,
            imgUrl: project.imgUrl
        })
    }
    
    async addToProject(id: string, idToAdd: string): Promise<Project | undefined> {
        return this.projectModel.findByIdAndUpdate(id, {
            $push: { members: mongoose.Types.ObjectId(idToAdd) }
        })
    }
    
    async removeFromProject(id: string, idToRemove: string): Promise<Project | undefined> {
        return this.projectModel.findByIdAndUpdate(id, {
            $pull: { members: mongoose.Types.ObjectId(idToRemove) }
        })
    }

    async delete(id: string) {
        await this.projectModel.findByIdAndDelete(id)
    }
}