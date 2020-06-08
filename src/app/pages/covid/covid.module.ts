import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FusionChartsModule } from "angular-fusioncharts";
import { Covid19Component } from './covid19/covid19.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CovidInformationCardsComponent } from './covid-information-cards/covid-information-cards.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { CovidBuildingReportsComponent } from './covid-building-reports/covid-building-reports.component';

import * as FusionCharts from "fusioncharts";
import * as charts from "fusioncharts/fusioncharts.charts";
import * as FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// Pass the fusioncharts library and chart modules
FusionChartsModule.fcRoot(FusionCharts, charts, FusionTheme);

export const routes = [
  { path: '', component: Covid19Component, pathMatch: 'full' }
];


@NgModule({
  declarations: [Covid19Component, CovidInformationCardsComponent, CovidBuildingReportsComponent],
  imports: [
    CommonModule,
    SharedModule,
    FusionChartsModule,
    NgxChartsModule,
    RouterModule.forChild(routes)
  ]
})
export class CovidModule { }
