import { Component, Input, OnInit} from '@angular/core';
import { JiraService } from '../../services/service.index';

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css']
})

export class IssueComponent implements OnInit {
  @Input() issue: {key: string, title: string, hours: number};
  @Input() verticalLayout: boolean;
  @Input() id: string;

  // variables
   isCollapsed = true;
   newSpentTime = 0;
   labelSpentTime = '0';

  constructor(private _jiraService: JiraService) {
  }

  ngOnInit() {
    this.labelSpentTime = '0';
    this.newSpentTime = 0;
  }

  addSpentTime(seconds: number) {
    this.newSpentTime = this.newSpentTime + seconds;
    this.labelSpentTime = this._jiraService.builNewSpendTime(this.newSpentTime);
  }

  saveChanges() {
    console.log('Changes Saved for ' + this.issue.key);
  }
}
