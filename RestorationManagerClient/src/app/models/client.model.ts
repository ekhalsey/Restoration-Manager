import { Project } from "./project.model" 

export class Client {
    name: string = "";
    phoneNumber: number = 0;
    email: string = "";
    projects: Array<Project> = [];
}
