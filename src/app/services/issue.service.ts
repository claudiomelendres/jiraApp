import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

const CONTENT_TYPE = 'application/json';

@Injectable({
  providedIn: 'root'
})

export class IssueService {
  constructor(private http: HttpClient) {
    console.log('Issue List Service ready to use!!');
  }

  private issues: any = [];

  searchIssues() {
    const url = 'http://localhost:4200/rest/api/2/search';
    const body = JSON.stringify({
        jql: 'project = BM AND issuetype = Story ORDER BY key ASC',
        startAt: 0,
        maxResults: 20,
        fields: [
            'key',
            'summary'
        ]
    });

    return this.http.post(url, body, {
      headers: new HttpHeaders({
        'Authorization': 'Basic bWNsYXVyZUBnbWFpbC5jb206YWxzaWUyMDE4',
        'Content-Type': CONTENT_TYPE
      })
    });
  }

  getIssues(rawIssues: any): any {
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
