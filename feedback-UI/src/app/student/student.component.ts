import { Component, OnInit } from '@angular/core';
import { studentsQuestions, StudentsFeedback, RatingVals } from '../models/feedback.model';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {


  constructor(private s: ServiceService) { }
  public ob: StudentsFeedback = {
    ratings: [],
    suggestions: ""
  }
  public ratingVals = RatingVals;

  ngOnInit(): void {
    studentsQuestions.forEach((val, ind) => {
      this.ob.ratings.push({
        question: val,
        rating: ""
      });
    })
  }

  async onSubmit() {
    this.s.showLoading();
    let res = await this.s.createStudent(this.ob).toPromise();
    this.s.endLoading(res);
  }
}
