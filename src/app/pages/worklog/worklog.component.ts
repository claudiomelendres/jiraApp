import { Component, NgZone, OnInit, OnDestroy } from '@angular/core';
import { JiraService } from '../../services/service.index';
import { timer } from 'rxjs/observable/timer';

@Component({
  selector: 'app-worklog',
  templateUrl: './worklog.component.html'
})

export class WorklogComponent implements OnInit, OnDestroy {

 issues: any[] = [];
 verticalLayout = false;
 editMode = false;

 // timer settings
 source = timer(1000, 5000);
 serviceSubscription: any;

  constructor(
               private _jiraService: JiraService,
               private ngZone: NgZone
              ) {

  // Window Listener for resizing
  window.onresize = (e) => {
    ngZone.run(() => {
      this.verticalLayout = window.innerWidth < 1200;
    });
  };

  // Timer for Interval requests
  this.serviceSubscription = this.source.subscribe(val => {
    if (!this.editMode) {
      this.runServiceRequests();
      console.log('Updating remote data');
    }
   console.log('Running request #: ' + val);
 });
}

onEditModeUpdate(issueMode: {editMode: boolean}) {
  this.editMode = issueMode.editMode;
  console.log('Worklog editMode updated to: ' + this.editMode);
}

onSaveChangesUpdate() {
  // this.editMode = false;
  this.runServiceRequests();
}

  ngOnInit() {
    this.issues = [];
  }

  runServiceRequests() {
    this._jiraService.searchIssues().subscribe(rawIssues => {
      const partialIssues = this._jiraService.getAllIssues(rawIssues);
        this._jiraService.requestAllWorkLogData(partialIssues).subscribe(workLogList => {
          for (let i = 0; i < workLogList.length; i++) {
            if (workLogList[i].fields) {
             if (workLogList[i].fields.worklog) {
              if (workLogList[i].fields.worklog.worklogs) {
                if (workLogList[i].fields.worklog.worklogs.length > 0) {
                  this.issues[i] = {
                                    key:   partialIssues[i].key,
                                    title:  partialIssues[i].name,
                                    hours: this._jiraService.getWorklogTotal(workLogList[i].fields.worklog.worklogs)
                  };
                }
              }
             }
            }
          }
        });
    });
  }

    ngOnDestroy() {
      console.log('timer destroy');
      this.serviceSubscription.unsubscribe();
    }
}
