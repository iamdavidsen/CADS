import { Document } from 'mongoose';
import {ObjectId} from 'bson';

export interface Project extends Document {
    projectName: string;
    description?: string;
    imgUrl?: string;
    color: string;
    creator: ObjectId | string;
    members: ObjectId[] | string[];
}
