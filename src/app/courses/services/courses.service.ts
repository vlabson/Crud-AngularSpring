import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Course } from '../model/course';
<<<<<<< Updated upstream
import { delay, first, tap } from 'rxjs/operators';
=======
import { first, tap } from 'rxjs/operators';
>>>>>>> Stashed changes


@Injectable({
  providedIn: 'root'
})

export class CoursesService {

  private readonly API = '/assets/acourses.json'

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Course[]>(this.API).pipe(
      first(),
<<<<<<< Updated upstream
      delay(60000),
=======
>>>>>>> Stashed changes
      tap( courses => console.log(courses))
    );

  }
}
