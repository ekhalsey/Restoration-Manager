import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Project } from '../models/project.model';
import { ProjectService } from '../service/project.service';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {

  project: Project;
  formIntro: String = "New Project Entry";
  newCustomer: boolean = false;
  projectName: any;

  constructor(private projectService:ProjectService) { 
    this.project = new Project();
  }

  ngOnInit(): void { }

  onSubmit(projectForm: NgForm) {
    
    console.log("CL: " + this.projectName.valid)

    // TODO: implement reading the new client form so it may be submitted with
    // a new project

    // TODO: implenent lookup of an existing client in order to attach it to a 
    // new project

    // This is some dummy client data that works to pass current model validation
    // this should be removed once client submission is working on this form
    this.project.client.firstName = "Nathan";
    this.project.client.lastName = "Hamface";
    this.project.client.email = "ham.man@hotmeatmail.net";
    this.project.client.phoneNumber = 1234567;

    // this.projectService.save(this.project).subscribe();
  }

  // TODO: Generate form with *ngFor looping over an object array?

  // TODO: Need a way to search customer names before submission

}
