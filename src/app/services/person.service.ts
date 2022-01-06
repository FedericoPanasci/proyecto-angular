import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Persona } from '../models/persona.model';
//import { personasMock } from './person.mock';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private url = environment.UserRestApi;
  constructor(
    private HttpClient: HttpClient
  ) { }

  getList(): Observable<Persona[]> {
    return this.HttpClient.get<Persona[]>(`${this.url}`);
  }
  getById(id: string): Observable<Persona> {
    return this.HttpClient.get<Persona>(`${this.url}/${id}`);
  }
}


