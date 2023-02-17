import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  // buttons:String[] = ['Home', 'Clients', 'Projects'];
  buttons = [
    {buttonName : "Home", path : "/"},
    {buttonName : "Add Project", path : "/add/project"},
    {buttonName : "Add Client", path : "/add/client"},
    {buttonName : "Client Lookup", path : "/client"},
    {buttonName : "Project Lookup", path : "/project"},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
