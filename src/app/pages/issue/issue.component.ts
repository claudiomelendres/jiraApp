import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css']
})

export class IssueComponent implements OnInit {
  @Input() issue: {name: string, title: string, hours: number};
  @Input() verticalLayout: boolean;
  @Input() id: string;

  // variables
   isCollapsed = true;

  constructor() {
  }

  ngOnInit() {
  }
}
