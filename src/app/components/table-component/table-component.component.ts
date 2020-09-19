import { PeriodicElement } from './../../models/PeriodicElement';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-component',
  templateUrl: './table-component.component.html',
  styleUrls: ['./table-component.component.scss']
})
export class TableComponentComponent implements OnInit {
  @Input('data') data: PeriodicElement;
  @Input('columns') displayedColumns: string[];
  constructor() { }

  ngOnInit(): void {
  }

}
