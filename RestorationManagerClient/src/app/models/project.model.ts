import { Client } from "./client.model"

export class Project {
    id: number = 0;
    name: string = "";
    dueDate: Date = new Date;
    quotedPrice: number = 0;
    notes: string = "";
    photo: string = "";
    client: Client = { 
        id : 0, 
        firstName : "", 
        lastName : "", 
        phoneNumber : 0, 
        email : "", 
        projects : [],
    };
}
