import { Component, NgZone, OnInit } from '@angular/core';
import { JiraService } from '../../services/jira.service';

@Component({
  selector: 'app-worklog',
  templateUrl: './worklog.component.html'
})
export class WorklogComponent implements OnInit {

  proyectos: any[] = [];
 verticalLayout = false;

  constructor(
               private _jiraService: JiraService,
               private ngZone: NgZone
              ) {

    window.onresize = (e) =>
    {
        ngZone.run(() => {
            console.log('[ Width: ' + window.innerWidth + ' Height: ' + window.innerHeight + ']');
            this.verticalLayout = window.innerWidth < 1200;
            console.log('verticalLayout:' + this.verticalLayout);
        });
    };
}

  ngOnInit() {
    this.proyectos = this._jiraService.getProyectos();
  }

}
