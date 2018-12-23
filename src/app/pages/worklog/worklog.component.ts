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
          this._jiraService.requestAllWorkLogData(this.issues).subscribe(workLogList => {
            for (let i = 0; i < workLogList.length; i++) {
              if (workLogList[i].fields) {
               if (workLogList[i].fields.worklog) {
                if (workLogList[i].fields.worklog.worklogs) {
                  if (workLogList[i].fields.worklog.worklogs.length > 0) {
                    this.issues[i].hours = this._jiraService.getWorklogTotal(workLogList[i].fields.worklog.worklogs);
                  }
                }
               }
              }
            }
          });
    });
}

  ngOnInit() {
    this.issues = [];
  }
}
