import { Component, NgZone, OnInit } from '@angular/core';
import { JiraService } from '../../services/service.index';

@Component({
  selector: 'app-worklog',
  templateUrl: './worklog.component.html'
})
export class WorklogComponent implements OnInit {

 issues: any[] = [];
 verticalLayout = false;

  constructor(
               private _jiraService: JiraService,
               private ngZone: NgZone
              ) {

    window.onresize = (e) => {
        ngZone.run(() => {
            this.verticalLayout = window.innerWidth < 1200;
        });
    };

    this._jiraService.searchIssues().subscribe(rawIssues => {
        this.issues = this._jiraService.getAllIssues(rawIssues);
      }
    );
}

  ngOnInit() {
    this.issues = [];
  }
}
