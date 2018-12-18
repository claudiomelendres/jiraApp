import { Injectable } from '@angular/core';

// here all methods to consume the API of Jira

@Injectable({
  providedIn: 'root'
})
export class JiraService {

  private proyectos: any = [
    {
      nombre: 'Proyecto 1',
      Historias: 'historia 2',
      Horas: '30'
    },
    {
      nombre: 'Proyecto 2',
      Historias: 'historia 2',
      Horas: '30'
    }];
  constructor() {
    console.log('Service ready to use!!');
  }

  getProyectos(): any {
    return this.proyectos;
  }
}
