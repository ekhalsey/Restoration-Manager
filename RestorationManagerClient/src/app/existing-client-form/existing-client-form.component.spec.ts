import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistingClientFormComponent } from './existing-client-form.component';

describe('ExistingClientFormComponent', () => {
  let component: ExistingClientFormComponent;
  let fixture: ComponentFixture<ExistingClientFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExistingClientFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExistingClientFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
