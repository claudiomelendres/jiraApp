import { Injectable } from '@angular/core';

// here all methods to consume the API of Jira

@Injectable({
  providedIn: 'root'
})
export class JiraService {

  private proyectos: any = [
    {
      name: 'Proyecto 1',
      title: 'BAN 5 (2h)',
      hours: '2d15h15m'
    },
    {
      name: 'Proyecto 2',
      title: 'BAN 8 (3h)',
      hours: '30'
    }];
  constructor() {
    console.log('Service ready to use!!');
  }

  getProyectos(): any {
    return this.proyectos;
  }
}
