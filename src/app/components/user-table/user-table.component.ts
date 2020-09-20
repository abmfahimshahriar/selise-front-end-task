import { Component, Input, OnInit } from '@angular/core';
import { PeriodicElement } from 'src/app/models/PeriodicElement';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {

  @Input('data') data: PeriodicElement;
  @Input('columns') displayedColumns: string[];
  
  constructor() { }

  ngOnInit(): void {
  }

}
