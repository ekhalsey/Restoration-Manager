import { Project } from "./project.model" 

export class Client {
    firstName: string = "";
    lastName: string = "";
    phoneNumber: number = 0;
    email: string = "";
    projects: Array<Project> = [];
}
