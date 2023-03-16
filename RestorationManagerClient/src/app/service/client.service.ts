import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from '../models/client.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private url: string;

  constructor(private http: HttpClient) { 
    this.url = "http://localhost:8080/client";
  }

  public findAll(): Observable<Client[]> {
    return this.http.get<Client[]>(this.url);
  }

  public save(client: Client) {
    return this.http.post<Client>(`${this.url}/add`, client);
  }

  public getClientById(id: number): Observable<Client> {
    return this.http.get<Client>(`${this.url}/${id}`)
  }

}
