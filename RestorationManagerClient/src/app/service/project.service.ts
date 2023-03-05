import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from '../models/project.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProjectService {
  private url: string;

  constructor(private http: HttpClient) { 
    this.url = "http://localhost:8080/project";
  }

  public findAll(): Observable<Project[]> {
    return this.http.get<Project[]>(this.url);
  }

  public save(project: Project) {
    return this.http.post<Project>(`${this.url}/add`, project);
  }

  // TODO: Figure out how to pull one record
}
