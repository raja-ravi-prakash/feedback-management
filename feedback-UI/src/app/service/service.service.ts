import { ElementRef, Injectable, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { EmployeesOrIndustryFeedback, FacultyOrAluminiFeedback, ParentsFeedback, StudentsFeedback } from '../models/feedback.model';
import { Observable } from 'rxjs';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  showLoading() {
    let o: any = document.getElementById('loading');
    o.style = "z-index:200;opacity:1;";
  }

  endLoading(res: any) {
    let o: any = document.getElementById('loading');
    o.style = "z-index:-200;opacity:0;";
    this._snackBar.open(res.message, 'ok', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

  createStudent(data: StudentsFeedback): Observable<Object> {
    return this.http.post(`${environment.url}/feedback/students`, data);
  }

  createParent(data: ParentsFeedback): Observable<Object> {
    return this.http.post(`${environment.url}/feedback/parents`, data);
  }

  createFaculty(data: FacultyOrAluminiFeedback): Observable<Object> {
    return this.http.post(`${environment.url}/feedback/faculty`, data);
  }

  createEmployee(data: EmployeesOrIndustryFeedback): Observable<Object> {
    return this.http.post(`${environment.url}/feedback/employee`, data);
  }

  constructor(private http: HttpClient, private _snackBar: MatSnackBar) { }
}
