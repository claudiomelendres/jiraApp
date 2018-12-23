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

  public lineChartOptions: any = {
    responsive: true
  };


  public lineChartLegend: boolean = true;
  public lineChartType: string = 'line';


  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
}
