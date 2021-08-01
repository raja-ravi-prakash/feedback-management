import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { EmployeesOrIndustryFeedback, employeeOrIndustryQuestions, RatingVals } from '../models/feedback.model';
@Component({
  selector: 'app-employee-industry',
  templateUrl: './employee-industry.component.html',
  styleUrls: ['./employee-industry.component.scss']
})
export class EmployeeIndustryComponent implements OnInit {

  constructor(private s: ServiceService) { }

  public ob: EmployeesOrIndustryFeedback = {
    department: "",
    academicYear: 0,
    regulation: "",
    suggestions: "",
    ratings: []
  }
  public ratingVals = RatingVals;

  ngOnInit(): void {
    employeeOrIndustryQuestions.forEach((val, ind) => {
      this.ob.ratings.push({
        question: val,
        rating: ""
      });
    })
  }

  async onSubmit() {
    this.s.showLoading();
    let res = await this.s.createEmployee(this.ob).toPromise();
    this.s.endLoading(res);
  }
}
