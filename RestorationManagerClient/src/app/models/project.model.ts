import { Client } from "./client.model"

export class Project {
    name: string = "";
    dueDate: Date = new Date;
    quotedPrice: number = 0;
    notes: string = "";
    photo: string = "";
    client: Client = { firstName : "", lastName : "", phoneNumber : 0, email : "", projects : []};
}
