import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-covid19',
  templateUrl: './covid19.component.html',
  styleUrls: ['./covid19.component.scss']
})
export class Covid19Component implements OnInit {
  public data = [
    {
      "class":"gradient-orange tile p-2",
      "icon" : "timeline",
      "prop" : "total"
    },
    {
      "class":"gradient-red tile p-2",
      "icon" : "public_off",
      "prop" : "no mask"
    },
    {
      "class":"gradient-gray tile p-2",
      "icon" : "group",
      "prop" : "no social distance"
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
