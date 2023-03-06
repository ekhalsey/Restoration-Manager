import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { NewClientComponent } from '../new-client/new-client.component';
import { Project } from '../models/project.model';
import { Client } from '../models/client.model';
import { ProjectService } from '../service/project.service';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {

  project: Project;
  formIntro: String = "New Project Entry";

  constructor(private projectService:ProjectService) { 
    this.project = new Project();
  }

  ngOnInit(): void { }

  onSubmit() {
    console.log(this.project);
    this.projectService.save(this.project).subscribe();
    // TODO: figure out why this works...

  
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

  // TODO: Generate form with *ngFor looping over an object array?

  // TODO: Need a way to search customer names before submission

}
