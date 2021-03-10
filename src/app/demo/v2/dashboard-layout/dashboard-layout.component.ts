import { Component, OnInit } from '@angular/core';
import { IMenuItem, DashboardGraphData } from 'moh-package';
import { ChartDataSets, ChartOptions, ChartPoint, Chart } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { Router } from '@angular/router';
// import { Moment } from 'moment';


/*
  To make the chart larger or smaller, use this:
  [minHeight]="350"
  [chartOptions]="{
    aspectRatio: 2,
    maintainAspectRatio: true
  }"
*/
@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss']
})
export class DashboardLayoutComponent implements OnInit {
  simpleChart: DashboardGraphData[] = [
    {
      labelTextKey: 'firstName',
      value: 20,
      color: 'rgba(175,0,0,1)',
      url:'/homepage'
    },
      {
      labelTextKey: 'Label 2',
      value: 70,
      color: 'rgba(175,0,175,1)',
    },
    {
      labelTextKey: 'Label 3',
      value: 50,
      color: 'orange',
      url:'/homepage3'
    }
  ];
  menuItems?: IMenuItem[] = [
    { title: 'wizard', url: '/v2/wizard' },
    { title: 'alert', url: '', triggerFunction: function(){alert('Hi!');} },
  ];
  chartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
  ];
  chartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  chartLegend = true;
  chartType = 'pie';
  chartOptions: ChartOptions = {
    aspectRatio: 2,
    maintainAspectRatio: true,
    animation:{
      duration: 1000
    }
  };
  chartColors: Color[] = [{
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
  }];

  constructor(private router:Router) { }

  ngOnInit() {
    // setTimeout(() => {
    //   this.chartOptions.title.text = 'blue';
    // },5000);
  }

  clickedOnChart(event, text){
    var url = '/' + text + '/' + event.label;
    console.log('event',event);
    console.log('url',url);

  }

}
