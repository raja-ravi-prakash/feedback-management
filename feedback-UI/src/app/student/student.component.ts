import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
  form=this.fb.group({});
  options=[
    {'value':"EXCELLENT" , 'data':"Excellent"},
    {'value':"VERY GOOD" , 'data':"Very Good"},
    {'value':"GOOD" , 'data':"Good"},
    {'value':"SATISFACTORY" , 'data':"Satisfactory"},
    {'value':"POOR" , 'data':"Poor"}
];
  ngOnInit(): void {
  }
  onSubmit()
  {

  }
}
