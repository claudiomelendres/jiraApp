import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html'
})
export class ChartsComponent implements OnInit {

  public lineChartData: Array<any> = [
    {data: [60, 50, 40, 30, 20, 10, 0], label: 'Estimated'},
    {data: [60, 58, 38, 33, 28, 5, 1], label: 'Logged'}
  ];

  public lineChartLabels: Array<any> = ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'];

  constructor() { }

  ngOnInit() {
  }

  // tslint:disable-next-line:member-ordering
  public lineChartOptions: any = {
    responsive: true
  };
  // tslint:disable-next-line:member-ordering
  public lineChartColors: Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  // tslint:disable-next-line:member-ordering
  public lineChartLegend: boolean = true;
  // tslint:disable-next-line:member-ordering
  public lineChartType: string = 'line';

  public randomize(): void {
    // tslint:disable-next-line:prefer-const
    let _lineChartData: Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.lineChartData = _lineChartData;
  }

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
}
