import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project.model';
import { ProjectService } from '../service/project.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  projects: Project[];
  myObserver = {
    next: (value: Project[]) => this.projects = value,
    error: (error: Error) => console.log("An error: " + error.message),
    complete: () => console.log("Completed")
  };


  constructor(private projectService: ProjectService) {
    this.projects = new Array();
    this.projectService.findAll().subscribe(this.myObserver);
  }
  
  ngOnInit(): void {
  }

  onClick(): void {
    console.log(this.projects)
  }

  // sort(column: string): void {
	// 	// array.sort modifies the array, sorting the items based on the given compare function
	// 	this.projects.sort(function (a: Project, b: Project): number {
	// 		if (a[column] < b[column]) {
	// 			return -1;
	// 		} else if (a[column] > b[column]) {
	// 			return 1;
	// 		}
	// 		return 0;
	// 	});
	// }

}
