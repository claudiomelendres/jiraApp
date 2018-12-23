import { Component, OnInit } from '@angular/core';
import { JiraService } from '../../services/service.index';

import swal from 'sweetalert';

@Component({
  selector: 'app-worklog',
  templateUrl: './worklog.component.html'
})
export class WorklogComponent implements OnInit {

  proyectos: any[] = [];

  constructor(
    private _jiraService: JiraService
  ) {

   }

  ngOnInit() {
    this.proyectos = this._jiraService.getProyectos();
  }

<<<<<<< Updated upstream
=======
  showAlert() {
    swal('Important', 'The logged time should not be 10% > of estimated time', 'warning');
  }
>>>>>>> Stashed changes
}
