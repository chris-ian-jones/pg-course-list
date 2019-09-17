import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Course } from './course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  courselistUrl:string = 'https://cj-course-list.herokuapp.com/api/courses'
  
  constructor(private http:HttpClient) { }

  getCourses():Observable<Course[]> {
    return this.http.get<Course[]>(this.courselistUrl);
  }
}