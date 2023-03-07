import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-project-form',
  templateUrl: './new-project-form.component.html',
  styleUrls: ['./new-project-form.component.css']
})
export class NewProjectFormComponent implements OnInit {


  newProjectForm = new FormGroup({
    projectName: new FormControl(''),
    dueDate: new FormControl(''),
    quotedPrice: new FormControl<number | null>(0),
    notes: new FormControl(''),
    photo: new FormControl('')
  })

  constructor() { }

  ngOnInit(): void {
  }

  // updateName(): void {
  //   this.newProjectForm.projectName.setValue("Goobers!");
  //   this.name.setValue("Goobers!");
  // }

  onSubmit(): void {
    console.warn("You are about to submit this form!")
  }

}
