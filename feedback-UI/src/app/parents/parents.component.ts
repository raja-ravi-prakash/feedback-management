import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-parents',
  templateUrl: './parents.component.html',
  styleUrls: ['./parents.component.scss']
})
export class ParentsComponent implements OnInit {
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
