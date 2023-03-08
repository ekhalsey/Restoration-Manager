import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-new-project-form',
  templateUrl: './new-project-form.component.html',
  styleUrls: ['./new-project-form.component.css']
})
export class NewProjectFormComponent implements OnInit {

  newCustomer = false;

  projectForm = this.fb.group({
    projectName: ['', Validators.required],
    dueDate: [''], //, Validators.pattern('\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])')
    quotedPrice: new FormControl<number | null>(null, Validators.required),
    notes: [''],
    photo: ['']
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }



  onSubmit(): void {
    console.warn("You are about to submit this form!")
  }

}
