import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, NgForm } from '@angular/forms';
import { Project } from '../models/project.model';
import { ProjectService } from '../service/project.service';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {

  project: Project;
  projectForm: FormGroup<any>;
  formIntro: String = "New Project Entry";
  newCustomer: boolean = false;
  activeClientTab: String = 'newClient';
  clientSelectButtons = [
    {name: 'newClient', text: 'New Customer'},
    {name: 'existingClient', text: 'Existing Customer'},
  ]

  constructor(private projectService:ProjectService, private fb: FormBuilder) { 
    this.project = new Project();
    this.projectForm = fb.group({
      project: FormGroup<any>,
      existingClient: FormGroup<any>,
      newClient: FormGroup<any>,
    })
  }

  ngOnInit(): void { }

  onSubmit(): void {
    
    this.project = new Project();

    // Do nothing on invalid form
    if (!this.projectForm.valid) {
      console.log("You have a logic error in the onSubmit method")
      return;
    }

    // TODO: Fill out model
    this.project.name = this.projectForm.value.project.projectName;
    this.project.dueDate = this.projectForm.value.project.dueDate;
    this.project.quotedPrice = this.projectForm.value.project.quotedPrice;
    this.project.notes = this.projectForm.value.project.notes;
    this.project.photo = this.projectForm.value.project.photo;

    // TODO: implenent lookup of an existing client in order to attach it to a 
    // new project -> Need a way to search customer names before submission

    
    if (this.activeClientTab === 'existingClient') {
      this.project.client.firstName = this.projectForm.value.existingClient.firstName;
      this.project.client.lastName = this.projectForm.value.existingClient.lastName;
    } else if (this.activeClientTab === 'newClient') {
      this.project.client.firstName = this.projectForm.value.newClient.firstName;
      this.project.client.lastName = this.projectForm.value.newClient.lastName;
      this.project.client.phoneNumber = this.projectForm.value.newClient.phoneNumber;
      this.project.client.email = this.projectForm.value.newClient.email;
    }
    else {
      this.project.client.firstName = "Nathan";
      this.project.client.lastName = "Hamface";
      this.project.client.email = "ham.man@hotmeatmail.net";
      this.project.client.phoneNumber = 1234567;
      console.log("DOH!");
    }

    console.log(this.project);

    this.projectService.save(this.project).subscribe();
  }

  getFormGroup(formName: string): FormGroup {
    // This is used to pass filled out FormGroup object
    // to child forms, but I haven't figured out how to
    // implement this properly yet.
    return this.projectForm.get(formName) as FormGroup;
  }

  setActiveClientTab(activeTab: String) {
    this.activeClientTab = activeTab;
  }

  onSendFormGroup(name: string, form: FormGroup): void {
    this.projectForm.setControl(name, form)
  }

}
