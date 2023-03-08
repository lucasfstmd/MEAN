import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import Chart from "chart.js/auto";

@Component({
  selector: 'grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent implements AfterViewInit{
  @ViewChild('lineCanvas') lineCanvas: ElementRef | undefined;
  lineChart: any;

  constructor() {}

  ngAfterViewInit(): void {
    this.lineChartMethod();
  }

  lineChartMethod() {
    this.lineChart = new Chart(this.lineCanvas?.nativeElement, {
      type: 'line',
      data: {
        labels: [
          '00:00', '03:00', '06:00', '09:00', '12:00', '15:00', '18:00', '21:00', '24:00'
        ],
        datasets: [
          {
            label: 'Sell per week',
            fill: false,
            pointHitRadius: 10,
            data: [0, 600, 1200, 1800, 2400],
            spanGaps: false,
          },
        ],
      },
    });
  }
}
