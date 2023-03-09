import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-new-project-form',
  templateUrl: './new-project-form.component.html',
  styleUrls: ['./new-project-form.component.css']
})
export class NewProjectFormComponent implements OnInit {
  
  // TODO: Eventually add input functionality so this can be updated
  projectForm: FormGroup<any>;
  @Output() sendFormGroup = new EventEmitter<FormGroup<any>>();

  constructor(private fb: FormBuilder) {
    this.projectForm = this.fb.group({
      projectName: ['', Validators.required],
      dueDate: [''], //, Validators.pattern('\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])')
      quotedPrice: new FormControl<number | null>(null, Validators.required),
      notes: [''],
      photo: [''],
    })
  }

  ngOnInit(): void {
    this.onChange();
  }
  
  onChange(): void {
    this.sendFormGroup.emit(this.projectForm);
  }

}