import { Document } from 'mongoose';
import {ObjectId} from 'bson';

export interface Project extends Document {
    projectName: string;
    description?: string;
    imgUrl?: string;
    creator: ObjectId;
    members: ObjectId[];
}
