import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Settings } from 'src/app/app.settings.model';
import { AppSettings } from 'src/app/app.settings';
import { CommonServices } from 'src/app/services/common.services';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-covid-information-cards',
  templateUrl: './covid-information-cards.component.html',
  styleUrls: ['./covid-information-cards.component.scss']
})
export class CovidInformationCardsComponent implements OnInit {
  company_id: any;

  public monthlyReports: any;
  public dailyReports: any;
  public yearlyReports: any;

  loading_daily: boolean = true;
  loading_yearly: boolean = true;
  loading_monthly: boolean = true;


  public showXAxis = true;
  public showYAxis = true;
  public gradient = false;
  public showLegend = false;
  public showXAxisLabel = true;
  public xAxisLabel = 'Country';
  public showYAxisLabel = true;
  public yAxisLabel = 'Population';
  public colorScheme = {
    domain: ['#2F3E9E', '#D22E2E', '#378D3B', '#0096A6', '#F47B00', '#606060']
  };

  @ViewChild('resizedDiv', { static: true }) resizedDiv: ElementRef;
  public previousWidthOfResizedDiv: number = 0;

  public settings: Settings;
  constructor(public appSettings: AppSettings, private commonServices: CommonServices, public dialog: MatDialog) {
    this.settings = this.appSettings.settings;

    let company_dataitem = JSON.parse(localStorage.getItem('company_dataitem'));
    this.company_id = company_dataitem.id;
  }

  ngOnInit() {

    this.getDailyReportGraphs();
    this.getMonthlyReportGraphs();
  }

  getDailyReportGraphs() {
    let obj = {
      company_id: this.company_id
    }
    this.commonServices.dailyReportGraphs(obj).subscribe(res => {
      if (res['success'] == '1') {
        this.dailyReports = res['data'];
        if (this.dailyReports.length == 0) {
          this.loading_daily = true;
        } else {
          this.loading_daily = false;
        }
      } else if (res['success'] == '0') {
        this.dailyReports = []
      } else if (res['success'] == '3') {
        this.getDailyReportGraphs()
      }
    },
      err => {
        console.log(err);
      });
  }


  getMonthlyReportGraphs() {
    let obj = {
      company_id: this.company_id
    }
    this.commonServices.monthlyReportGraphs(obj).subscribe(res => {
      if (res['success'] == '1') {
        this.monthlyReports = res['data'];
        if (this.monthlyReports.length == 0) {
          this.loading_monthly = true;
        } else {
          this.loading_monthly = false;
        }
      } else if (res['success'] == '0') {
        this.monthlyReports = [];
      } else if (res['success'] == '3') {
        this.getMonthlyReportGraphs()
      }
    },
      err => {
        console.log(err);
      });
  }


}
