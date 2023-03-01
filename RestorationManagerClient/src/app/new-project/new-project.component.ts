import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { NewClientComponent } from '../new-client/new-client.component';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {

  formData: object = {};
  formIntro: String = "New Project Entry";

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm) {
    console.log(form);
  }
  
  newCustomer:boolean = true;


  collectFormData(projectName: string, customerName: string, workToPerform: string, dueByDate:Date | null, quotedPrice:string, photo:FileList | null, projectNotes: string) {
    
    // FIXME: price is still a string for now.
    // TODO: learn datatypes for Date, Photo

    this.formData = {
      projectName: projectName, 
      customerName: customerName,
      workToPerform: workToPerform, 
      dueByDate: dueByDate,
      quotedPrice: quotedPrice, photo: photo,
      projectNotes: projectNotes
    };

    console.log(this.formData);
  }


  // TODO: Generate form with *ngFor looping over an object array.

  // TODO: Write backend form processing.

  // TODO: Need a way to search customer names before submission

  // TODO: Break into separate firstName and lastName fields??
}
