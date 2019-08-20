import * as mongoose from "mongoose";
import {ObjectId} from "bson";

export interface Document extends mongoose.Document {
    documentTitle: string;
    content: string;
    project: ObjectId,
}
