import { Component, OnInit } from '@angular/core';
import { PeriodicElement } from 'src/app/models/PeriodicElement';

@Component({
  selector: 'app-component-two',
  templateUrl: './component-two.component.html',
  styleUrls: ['./component-two.component.scss']
})
export class ComponentTwoComponent implements OnInit {
  scheduleData: any[] = [
    {
      color: "green",
      icon: "account_box",
      header: "Meeting today",
      subHeader: "you can write anything",
      button: false
    },
    {
      color: "blue",
      icon: "account_box",
      header: "send documents to cleark",
      subHeader: "lorem ipsum is simply",
      button: false
    },
    {
      color: "yellow",
      icon: "account_box",
      header: "john doe",
      subHeader: "call today with John doe",
      button: false
    },
    {
      color: "purple",
      icon: "account_box",
      header: "go to the doctor",
      subHeader: "Contrary to popular belief",
      button: false
    },
    {
      color: "red",
      icon: "account_box",
      header: "Tiger Sroff",
      subHeader: "approve meeting with tiger",
      button: true
    }
  ];
  tableData: PeriodicElement[] = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  ];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  months: string[] = ['January','February','March','April','May','June','July','August','September','October','November','December'];

  constructor() { }

  ngOnInit(): void {
  }
  
}
