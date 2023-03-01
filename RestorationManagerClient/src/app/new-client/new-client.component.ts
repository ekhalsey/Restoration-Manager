import { Component, OnInit } from '@angular/core';
import { Client } from '../models/client.model';
import { ClientService } from '../service/client.service';

@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.css']
})
export class NewClientComponent implements OnInit {
  client: Client;

  constructor(private clientService:ClientService) {
    this.client = new Client;
   }

  ngOnInit(): void {
   
  }
  onSubmit(){
    this.clientService.save(this.client).subscribe();
  }

}
