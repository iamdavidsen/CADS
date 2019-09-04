import {Project} from '../interfaces/project.interface';

export const isAdmin = (userId: string, project?: Project) => {
    return Boolean(project && (project.creator.toHexString() === userId));
};
