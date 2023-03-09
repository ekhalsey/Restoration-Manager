import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-existing-client-form',
  templateUrl: './existing-client-form.component.html',
  styleUrls: ['./existing-client-form.component.css']
})
export class ExistingClientFormComponent implements OnInit {

  @Output() sendFormGroup = new EventEmitter<FormGroup>();
  @Input() parentForm: FormGroup = new FormGroup('');
  existingClientForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.existingClientForm = this.fb.group({
      clientName: ['', Validators.required]
    })
  }
  
  ngOnInit(): void {
    this.parentForm.addControl('existingClient', this.existingClientForm)
    this.onChange();
  }

  onChange(): void {
    this.sendFormGroup.emit(this.existingClientForm);
    
  }

}