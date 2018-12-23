import { Component, NgZone, OnInit } from '@angular/core';
import { JiraService } from '../../services/jira.service';
import { IssueService } from '../../services/issue.service';

@Component({
  selector: 'app-worklog',
  templateUrl: './worklog.component.html'
})
export class WorklogComponent implements OnInit {

 issues: any[] = [];
 verticalLayout = false;

  constructor(
               private _jiraService: JiraService,
               private _issueService: IssueService,
               private ngZone: NgZone
              ) {

    window.onresize = (e) => {
        ngZone.run(() => {
            this.verticalLayout = window.innerWidth < 1200;
        });
    };

    this._issueService.searchIssues().subscribe(rawIssues => {
        this.issues = this._issueService.getIssues(rawIssues);
      }
    );
}

  ngOnInit() {
    this.issues = [];
  }
}
