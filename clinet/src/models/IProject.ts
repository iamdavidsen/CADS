export interface IProject {
    _id: string
    projectName: string
    creator: string
    color: string
    description?: string
    members?: string[]
}