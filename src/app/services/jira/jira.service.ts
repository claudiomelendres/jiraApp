import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {forkJoin} from 'rxjs/observable/forkJoin';

const CONTENT_TYPE = 'application/json';
const URL_BASE = 'http://localhost:4200';
const AUTHORIZATION = 'Basic bWNsYXVyZUBnbWFpbC5jb206YWxzaWUyMDE4';
const PERCENTAGE_TIME_OVERDUE = 10;

@Injectable({
  providedIn: 'root'
})

export class JiraService {

  private issues: any = [];

  constructor(private http: HttpClient) {
    console.log('Issue List Service ready to use!!');
  }

  // JIRA API Services
  searchIssues() {
    const url = URL_BASE + '/rest/api/2/search';
    const body = JSON.stringify({
        jql: 'project = JIR AND issuetype = Story ORDER BY key ASC',
        startAt: 0,
        maxResults: 20,
        fields: [
            'key',
            'summary'
        ]
    });

    return this.http.post(url, body, {
      headers: new HttpHeaders({
        'Authorization': AUTHORIZATION,
        'Content-Type': CONTENT_TYPE
      })
    });
  }

  getIssue(issueID: string) {
    const url = URL_BASE + '/rest/api/2/issue/' + issueID;

    return this.http.get(url, {
      headers: new HttpHeaders({
        'Content-Type': CONTENT_TYPE,
        'Authorization': AUTHORIZATION
      })
    });
  }

   requestAllWorkLogData(issues: any[]): Observable<any[]> {
    const requests: any = [];
    for (const issue of issues) {
      requests.push(this.getIssue(issue.key));
    }
    return forkJoin(requests);
  }

  addWorkLog(issueId: string, spentTime: number) {
    const url = URL_BASE + '/rest/api/2/issue/' + issueId + '/worklog';
    const body = JSON.stringify({
      timeSpentSeconds: spentTime // value in seconds
    });

    return this.http.post(url, body, {
      headers: new HttpHeaders({
        'Content-Type': CONTENT_TYPE,
        'Authorization': AUTHORIZATION
      })
    });
  }

  // JIRA HELPERS

  getAllIssues(rawIssues: any): any {
    this.issues = [];
    if (rawIssues['issues']) {
      if (rawIssues['issues'].length > 0) {
        for (const item of rawIssues['issues']) {
          this.issues.push({
                              key:  item.key,
                              title: item.fields.summary,
                              hours: 0
                          });
        }
      }
    }
    return this.issues;
  }

  getWorklogTotal(workLogs: any): any {
   let  total = 0;
    for (const item of workLogs) {
      if (item.timeSpentSeconds) {
        total += item.timeSpentSeconds;
      }
    }
    return this.builNewSpendTime(total);
  }

  builNewSpendTime(seconds: number): any {
    let output = '';
    const days = Math.floor( ( seconds / 3600 ) / 24 );
    if ( days >= 1 ) {
      output += days.toString() + 'd ';
      seconds -= days * 24 * 3600;
    }
    const hours = Math.floor( seconds / 3600 );
    output += hours + 'h ';
    seconds -= hours * 3600;

    const minutes = Math.floor( seconds / 60 );
    output += minutes + 'm ';

    return output;
  }

  getTrackingTimeWarning(issue: any): string {
    const values = Object.keys(issue).map(key => issue[key]);
    let estimatedSeconds = values[4].timetracking.originalEstimateSeconds;
    let spentSeconds = values[4].timetracking.timeSpentSeconds;
    estimatedSeconds = estimatedSeconds * (PERCENTAGE_TIME_OVERDUE / 100 + 1);
    let labelWarning = '';

    if (spentSeconds > estimatedSeconds) {
      labelWarning = 'Warning: time consumed is close to time estimated.'
    }
    console.log("Estimated seconds:" + estimatedSeconds);
    console.log("Time spent:" + spentSeconds);

    return labelWarning;
  }
}
