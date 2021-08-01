import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StudentComponent} from  './student/student.component';
import {ParentsComponent} from  './parents/parents.component';
import {EmployeeIndustryComponent} from './employee-industry/employee-industry.component';
import {FacultyAlumniComponent} from './faculty-alumni/faculty-alumni.component';
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {path:'student' , component:StudentComponent},
    {path:'parent', component:ParentsComponent},
    {path:'employees', component:EmployeeIndustryComponent},
    { path: 'faculty', component: FacultyAlumniComponent },
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
