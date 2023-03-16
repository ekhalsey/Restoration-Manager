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
  id: number;
  routeParams: Params;

  constructor(private projectService: ProjectService, private clientService: ClientService, private activatedRoute: ActivatedRoute) {
    this.client = new Client;
    this.projects = [];
    this.id = 0;
    this.routeParams=[];
    this.getRouteParams();
   }

  ngOnInit(): void {
  this.getClient();
  this.getProjects();
  }

 

  getRouteParams() {
    this.activatedRoute.params.subscribe( params => (
        this.routeParams = params, console.log(this.routeParams)
        ));
  }

  getClient() {
    this.clientService.getClientById(this.routeParams['id']).subscribe(result => this.client = result)
  }

  getProjects(){

  }
}
