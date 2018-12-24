import { Component, Input,  Output, OnInit, EventEmitter} from '@angular/core';
import { JiraService } from '../../services/service.index';
import swal from 'sweetalert';

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css']
})

export class IssueComponent implements OnInit {
  @Output() editModeUpdated = new EventEmitter<{editMode: boolean}>();
  @Output() saveChangesUpdate = new EventEmitter();
  @Input() issue: {key: string, title: string, hours: number};
  @Input() verticalLayout: boolean;
  @Input() id: string;

  // variables
   isCollapsed = true;
   newSpentTime = 0;
   labelSpentTime = '0';
   labelWarning = '';

  constructor(private _jiraService: JiraService) {
  }

  ngOnInit() {
    this.labelSpentTime = '0';
    this.newSpentTime = 0;
  }

  updatePanel() {
    this.isCollapsed = !this.isCollapsed;
    console.log('Emitting the mode change to: ' + !this.isCollapsed);
    this.editModeUpdated.emit({editMode: !this.isCollapsed});
  }

  addSpentTime(seconds: number) {
    this.newSpentTime = this.newSpentTime + seconds;
    this.labelSpentTime = this._jiraService.builNewSpendTime(this.newSpentTime);
  }

  saveChanges() {
    this._jiraService.addWorkLog(this.issue.key, this.newSpentTime).subscribe(response => {
    });

    this.updatePanel();
    this.saveChangesUpdate.emit();

    this._jiraService.getIssue(this.issue.key).subscribe(
      issue => {
        this.labelWarning = this._jiraService.getTrackingTimeWarning(issue);
        if (this.labelWarning.length > 0 ) {
          swal('Important!!!' , 'time consumed is more of 10% to time estimated.', 'warning');
        }
      }
    );
  }
}
