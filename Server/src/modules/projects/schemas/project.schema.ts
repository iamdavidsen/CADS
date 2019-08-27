import * as mongoose from 'mongoose';
import {Schema} from 'mongoose';

import {USERS_COLLECTION} from '../../../constants';

export const ProjectSchema = new mongoose.Schema({
    projectName: String,
    description: String,
    imgUrl: String,
    creator: { type : Schema.Types.ObjectId, ref: USERS_COLLECTION },
    members: [{ type : Schema.Types.ObjectId, ref: USERS_COLLECTION }],
});
