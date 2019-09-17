import { Component, OnInit } from '@angular/core';

import { CoursesService } from './../../courses.service';
import { Course } from './../../course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  courses:Course[];

  constructor(private coursesService:CoursesService) { }

  ngOnInit() {
    this.coursesService.getCourses().subscribe(courses => {
      this.courses = courses;
    });
  }
}
