import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientWProjectsComponent } from './client-w-projects.component';

describe('ClientWProjectsComponent', () => {
  let component: ClientWProjectsComponent;
  let fixture: ComponentFixture<ClientWProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientWProjectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientWProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
