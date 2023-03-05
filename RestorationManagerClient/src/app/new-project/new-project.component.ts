import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project.model';
import { Client } from '../models/client.model';
import { ProjectService } from '../service/project.service';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {

  project: Project;

  constructor(private projectService:ProjectService) { 
    this.project = new Project();
  }

  ngOnInit(): void { }

  onSubmit() {
    console.log(this.project);
    this.projectService.save(this.project).subscribe();
    // TODO: figure out why this works...
  }

  // TODO: Generate form with *ngFor looping over an object array?

  // TODO: Need a way to search customer names before submission

}
