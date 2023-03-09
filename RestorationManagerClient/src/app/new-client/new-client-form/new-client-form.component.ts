import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-client-form',
  templateUrl: './new-client-form.component.html',
  styleUrls: ['./new-client-form.component.css']
})
export class NewClientFormComponent implements OnInit {

  @Output() sendFormGroup = new EventEmitter<FormGroup>();
  newClientForm: FormGroup<any>;

  constructor(private fb: FormBuilder) {
    this.newClientForm = fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: new FormControl<number | null>(null, Validators.minLength(7)),
      email: ['', Validators.email],
    })
    this.onChange;
  }

  ngOnInit(): void {
  }

  onChange(): void {
    this.sendFormGroup.emit(this.newClientForm);
  }

}
