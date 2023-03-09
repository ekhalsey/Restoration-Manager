import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-existing-client-form',
  templateUrl: './existing-client-form.component.html',
  styleUrls: ['./existing-client-form.component.css']
})
export class ExistingClientFormComponent implements OnInit {

  @Input() existingClientForm: FormGroup<any>;
  @Output() sendFormGroup = new EventEmitter<FormGroup>();

  constructor(private fb: FormBuilder) {
    this.existingClientForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
    })
    this.onChange();
  }
  
  ngOnInit(): void { }

  onChange(): void {
    this.sendFormGroup.emit(this.existingClientForm);
  }

}