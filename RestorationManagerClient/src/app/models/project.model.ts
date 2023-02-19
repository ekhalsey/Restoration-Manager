import { Client } from "./client.model"

export class Project {
    projectName: string = "";
    dueDate: Date = new Date;
    quotedPrice: number = 0;
    notes: string = "";
    photo: string = "";
    client: Client = { name : "", phoneNumber : 0, email : "", projects : []};
}
