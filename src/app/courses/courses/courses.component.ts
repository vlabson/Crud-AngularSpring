import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})

export class CoursesComponent implements OnInit {

<<<<<<< Updated upstream
  courses$: Observable<Course[]>;
  displayedColumns = ['name','category'];

    constructor( private coursesService: CoursesService ) {
    this.courses$ = this.coursesService.list()
    .pipe(
      catchError(error => {
        console.log(error);
        return of([])
      })
    );
=======
  courses: Observable<Course[]>;
  displayedColumns = ['id','name','category'];

  constructor( private coursesService: CoursesService ) {
    this.courses = this.coursesService.list();
>>>>>>> Stashed changes
  }

  ngOnInit(): void {

  }

}
