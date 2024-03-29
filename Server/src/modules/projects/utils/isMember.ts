import {Project} from '../interfaces/project.interface';

export const isMember = (userId: string, project?: Project) => {
  return Boolean(project && (project.creator.toString() === userId || project.members.some(m => m.toHexString() === userId)));
};
