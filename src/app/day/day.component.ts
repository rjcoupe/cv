import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.scss']
})
export class DayComponent implements OnInit {
  chartLabels: string[] = [
    'Acceptance',
    'Assisting with Estimation',
    'Family Time',
    'Planning',
    'Tracking KPIs',
    'Updating Stakeholders'
  ];
  chartValues: number[] = [10, 15, 30, 35, 10, 10];
  chartType: string = 'doughnut';
  chartOptions: any = {
    legend: {
      position: 'right'
    }
  };

  constructor() { }

  ngOnInit() {

  }

}
