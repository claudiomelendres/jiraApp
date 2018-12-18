import { Component, OnInit } from '@angular/core';
import { JiraService } from '../../services/jira.service';

@Component({
  selector: 'app-worklog',
  templateUrl: './worklog.component.html'
})
export class WorklogComponent implements OnInit {

  proyectos: any[] = [];

  constructor(
    private _jiraService: JiraService
  ) {

   }

  ngOnInit() {
    this.proyectos = this._jiraService.getProyectos();
  }

}
