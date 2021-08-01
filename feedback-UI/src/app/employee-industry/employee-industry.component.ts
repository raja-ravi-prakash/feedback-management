import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroupDirective, NgForm, Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-employee-industry',
  templateUrl: './employee-industry.component.html',
  styleUrls: ['./employee-industry.component.scss']
})
export class EmployeeIndustryComponent implements OnInit {
  form=this.fb.group({});
  options=[
    {'value':"EXCELLENT" , 'data':"Excellent"},
    {'value':"VERY GOOD" , 'data':"Very Good"},
    {'value':"GOOD" , 'data':"Good"},
    {'value':"SATISFACTORY" , 'data':"Satisfactory"},
    {'value':"POOR" , 'data':"Poor"}
];
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit()
  {

  }
}
