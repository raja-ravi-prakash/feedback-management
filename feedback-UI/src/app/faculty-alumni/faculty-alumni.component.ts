import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-faculty-alumni',
  templateUrl: './faculty-alumni.component.html',
  styleUrls: ['./faculty-alumni.component.scss']
})
export class FacultyAlumniComponent implements OnInit {

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
