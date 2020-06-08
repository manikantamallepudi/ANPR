import { Component, OnInit } from '@angular/core';

const data = {
  chart: {
    caption: "Safety Violation",
    subcaption: "2012-2016",
    xaxisname: "Years",
    yaxisname: "Violating Safety Measures",
    formatnumberscale: "1",
    plottooltext:
      `<b>$dataValue</b> people were available on <b>$seriesName</b> in $label`,
    theme: "fusion"
  },
  categories: [
    {
      category: [
        {
          label: "2012"
        },
        {
          label: "2013"
        },
        {
          label: "2014"
        },
        {
          label: "2015"
        },
        {
          label: "2016"
        }
      ]
    }
  ],
  dataset: [
    {
      seriesname: "Total",
      color:"#ffc868",
      data: [
        {
          value: "125"
        },
        {
          value: "300"
        },
        {
          value: "480"
        },
        {
          value: "800"
        },
        {
          value: "110"
        }
      ]
    },
    {
      seriesname: "No Mask",
      color: "#D50000",
      data: [
        {
          value: "70"
        },
        {
          value: "150"
        },
        {
          value: "350"
        },
        {
          value: "600"
        },
        {
          value: "140"
        }
      ]
    },
    {
      seriesname: "No Social Distance",
      color:"#8EF9FE",
      data: [
        {
          value: "100"
        },
        {
          value: "100"
        },
        {
          value: "300"
        },
        {
          value: "600"
        },
        {
          value: "900"
        }
      ]
    }
  ]
};


@Component({
  selector: 'app-covid-building-reports',
  templateUrl: './covid-building-reports.component.html',
  styleUrls: ['./covid-building-reports.component.scss']
})
export class CovidBuildingReportsComponent implements OnInit {

  width = "100%";
  height = "300";
  type = "mscolumn3d";
  dataFormat = "json";
  dataSource = data;

  foods: any[] = [
    {value: 'steak-0', viewValue: '44A'},
    {value: 'pizza-1', viewValue: '44B'},
    {value: 'tacos-2', viewValue: '44C'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
