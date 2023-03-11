import { Component, OnInit } from '@angular/core';
import { ClientService } from '../service/client.service';
import { Client } from '../models/client.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  allClients: Array<Client>;

  constructor(private clientService:ClientService, private router:Router) {
    this.allClients = [];
  }

  ngOnInit(): void {
    this.clientService.findAll().subscribe(result => (this.allClients = result));
  }


}
