import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
import {MatChipsModule} from '@angular/material/chips';

import {FlexLayoutModule} from "@angular/flex-layout";
import { ComponentOneComponent } from './components/component-one/component-one.component';
import { ComponentTwoComponent } from './components/component-two/component-two.component';
import { ComponentThreeComponent } from './components/component-three/component-three.component';
import { InfoCardComponent } from './components/info-card/info-card.component';
import { TableComponentComponent } from './components/table-component/table-component.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ComponentOneComponent,
    ComponentTwoComponent,
    ComponentThreeComponent,
    InfoCardComponent,
    TableComponentComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    MatSelectModule,
    MatChipsModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
