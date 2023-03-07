import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormProfileEditorComponent } from './form-profile-editor.component';

describe('FormProfileEditorComponent', () => {
  let component: FormProfileEditorComponent;
  let fixture: ComponentFixture<FormProfileEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormProfileEditorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormProfileEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
