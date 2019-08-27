import * as mongoose from 'mongoose';
import {Schema} from 'mongoose';

import {PROJECTS_COLLECTION} from '../../../constants';

export const DocumentsSchema = new mongoose.Schema({
    documentTitle: String,
    content: String,
    project: { type : Schema.Types.ObjectId, ref: PROJECTS_COLLECTION },
});
