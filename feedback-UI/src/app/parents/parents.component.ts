import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { ParentsFeedback, parentQuestions, RatingVals } from '../models/feedback.model';

@Component({
  selector: 'app-parents',
  templateUrl: './parents.component.html',
  styleUrls: ['./parents.component.scss']
})
export class ParentsComponent implements OnInit {
  constructor(private s: ServiceService) { }

  public ob: ParentsFeedback = {
    ratings: [],
    suggestions: ""
  }
  public ratingVals = RatingVals;

  ngOnInit(): void {
    parentQuestions.forEach((val, ind) => {
      this.ob.ratings.push({
        question: val,
        rating: ""
      });
    })
  }

  async onSubmit() {
    this.s.showLoading();
    let res = await this.s.createParent(this.ob).toPromise();
    this.s.endLoading(res);
  }

}
