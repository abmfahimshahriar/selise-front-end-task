import { User } from './../../models/User';
import { Component, OnInit } from '@angular/core';
import { PeriodicElement } from 'src/app/models/PeriodicElement';

@Component({
  selector: 'app-component-three',
  templateUrl: './component-three.component.html',
  styleUrls: ['./component-three.component.scss']
})
export class ComponentThreeComponent implements OnInit {

  months: string[] = ['January','February','March','April','May','June','July','August','September','October','November','December'];

  tableData: User[] = [
    {
      person: {
        color: 'blue',
        icon: 'account_box',
        name: 'Sunil Joshi',
        designation: 'web developer'
      },
      postName: 'elite admin',
      priority: 'low',
      budget: 3.9
    },
    {
      person: {
        color: 'orange',
        icon: 'account_box',
        name: 'Andrew',
        designation: 'Project manager'
      },
      postName: 'Real Homes',
      priority: 'Medium',
      budget: 23.9
    },
    {
      person: {
        color: 'green',
        icon: 'account_box',
        name: 'Bhavesh Patel',
        designation: 'Developer'
      },
      postName: 'MedicalPro Theme',
      priority: 'High',
      budget: 12.9
    },
    {
      person: {
        color: 'red',
        icon: 'account_box',
        name: 'Micheal Doe',
        designation: 'content writer'
      },
      postName: 'Helping Hand',
      priority: 'High',
      budget: 12.9
    },
    {
      person: {
        color: 'purple',
        icon: 'account_box',
        name: 'Johnathan',
        designation: 'Graphic'
      },
      postName: 'Digital Agency',
      priority: 'High',
      budget: 2.6
    }
    
  ];

  displayedColumns: string[] = ['person', 'postName', 'priority', 'budget'];
  
  constructor() { }

  ngOnInit(): void {
  }

}
