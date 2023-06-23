import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit{
  @Input() label!: string; 
  @Input() total!: string; 
  @Input() percentage!: string;
  @Input() data = [];
  chartOptions!:{};
  Highcharts = Highcharts;
  ngOnInit(): void {
    this.chartOptions = {
      chart: {
        type: 'area',
        backgroundcolor: null,
        borderWidth: 0, 
        margin: [2, 2, 2, 2], 
        height: 60
    },
    title: {
        text: null
    },
    subtitle: {
        text: null
    },
    tooltip: {
        shared: true,
        outside:true,
    },
    exporting:{
      enabled: false,
    },
    legend:{
      enabled: false,
    }, 
    credits:{
      enabled: false,
    },
    xAxis:{
      labels:{
        enabled: false,
      }, 
      title:{
        text: null,
      }, 
      startOnTick: false, 
      endOnTick: false,
      tickOptions:[]
    }, 
    yAxis:{
      labels:{
        enabled: false,
      }, 
      title:{
        text: null,
      }, 
      startOnTick: false, 
      endOnTick: false,
      tickOptions:[]
    }, 
    series: [{
      data:this.data
    }]
    }
    HC_exporting(this.Highcharts);
  }

}
