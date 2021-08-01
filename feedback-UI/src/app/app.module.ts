import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';
import { AngularMaterialModule } from './angular-material.module';
import { StudentComponent } from './student/student.component';
import { ParentsComponent } from './parents/parents.component';
import { EmployeeIndustryComponent } from './employee-industry/employee-industry.component';
import { FacultyAlumniComponent } from './faculty-alumni/faculty-alumni.component';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    ParentsComponent,
    EmployeeIndustryComponent,
    FacultyAlumniComponent,
    DialogBoxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
