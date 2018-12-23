import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

const CONTENT_TYPE = 'application/json';
const URL_BASE = 'http://localhost:4200';
const AUTHORIZATION = 'Basic bWNsYXVyZUBnbWFpbC5jb206YWxzaWUyMDE4';

@Injectable({
  providedIn: 'root'
})

export class JiraService {

  private issues: any = [];

  constructor(private http: HttpClient) {
    console.log('Issue List Service ready to use!!');
  }

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

  getAllIssues(rawIssues: any): any {
    this.issues = [];
    if (rawIssues['issues']) {
      if (rawIssues['issues'].length > 0) {
        for (const item of rawIssues['issues']) {
          this.issues.push({
                            name:  item.key,
                            title: item.key,
                            hours: 0
                          });
        }
      }
    }

    return this.issues;
  }
}
