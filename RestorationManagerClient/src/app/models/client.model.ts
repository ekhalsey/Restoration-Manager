import { Project } from "./project.model" 

export class Client {
    id: number = 0;
    firstName: string = "";
    lastName: string = "";
    phoneNumber: number = 0;
    email: string = "";
    projects: Array<Project> = [];
}
