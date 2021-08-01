import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { facultyQuestions, FacultyOrAluminiFeedback, RatingVals, EducationType } from '../models/feedback.model';

@Component({
  selector: 'app-faculty-alumni',
  templateUrl: './faculty-alumni.component.html',
  styleUrls: ['./faculty-alumni.component.scss']
})
export class FacultyAlumniComponent implements OnInit {

  constructor(private s: ServiceService) { }

  public ob: FacultyOrAluminiFeedback = {
    department: "",
    name: "",
    education: "",
    designation: "",
    occupationDetails: "",
    academicYear: 0,
    regulation: "",
    ratings: [],
    suggestions: ""
  }
  public ratingVals = RatingVals;
  public educationTypes = EducationType;

  ngOnInit(): void {
    facultyQuestions.forEach((val, ind) => {
      this.ob.ratings.push({
        question: val,
        rating: ""
      });
    })
  }

  async onSubmit() {
    this.s.showLoading();
    let res = await this.s.createFaculty(this.ob).toPromise();
    this.s.endLoading(res);
  }
}
