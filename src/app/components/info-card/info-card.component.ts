import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss']
})
export class InfoCardComponent implements OnInit {
  @Input('color') color: string;
  @Input('header') header: string;
  @Input('subHeader') subHeader: string;
  @Input('icon') icon: string;
  classes: string[];
  
  constructor() { }
  

  ngOnInit(): void {
    let classes_temp= ["circle",`circle-${this.color}`];
    this.classes = classes_temp;
  }
  

}
