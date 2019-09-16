import { Document } from 'mongoose';
import {ObjectId} from 'bson';

export interface Project extends Document {
    projectName: string;
    description?: string;
    color: string;
    public: boolean;
    creator: ObjectId | string;
    members: ObjectId[] | string[];
}
