import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Client } from 'src/app/models/client.model';
import { Project } from 'src/app/models/project.model';
import { ClientService } from 'src/app/service/client.service';
import { ProjectService } from 'src/app/service/project.service';

@Component({
  selector: 'app-client-w-projects',
  templateUrl: './client-w-projects.component.html',
  styleUrls: ['./client-w-projects.component.css']
})
export class ClientWProjectsComponent implements OnInit {

  client: Client;
  projects: Array<Project>;
  projectIds: Array<number>;
  id: number;
  routeParams: Params;

  constructor(private projectService: ProjectService, private clientService: ClientService, private activatedRoute: ActivatedRoute) {
    this.client = new Client;
    this.projects = [];
    this.projectIds = [];
    this.id = 0;
    this.routeParams=[];
    this.getRouteParams();
   }

  ngOnInit(): void {
  this.getClient();
  this.getProjectIds();
  }

 

  getRouteParams() {
    this.activatedRoute.params.subscribe( params => (
        this.routeParams = params, console.log(this.routeParams)
        ));
  }

  getClient() {
    this.clientService.getClientById(this.routeParams['id']).subscribe(result => this.client = result)
  }

  getProjectIds(){
    this.projectService.getProjectIdsByClientId(this.client.id).subscribe(result => (this.projectIds = result, this.getProjects(this.projectIds)));
  }

  //this is ugly and doesnt work anyway,failed experiment
  //need to figure out how to populate Array of projects using array of project Ids
  //the issue is that the get method returns Observable<Project> not project
  getProjects(ids:Array<number>):Project{
   let projectt;
    this.projectService.getProjectById(ids[0]).subscribe(result => projectt = result);
    console.log(projectt);
    return projectt as unknown as Project;
  }
}
