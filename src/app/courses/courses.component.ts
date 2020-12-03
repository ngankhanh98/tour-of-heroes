import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../course';
import { CoursesService } from '../courses.service';
import { User } from '../user';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  courses: Course[] = [];
  githubUsers: User[] = [];
  constructor(private courseService: CoursesService) {}

  ngOnInit(): void {
    // this.getCourses();
    this.getGithubUserLazyLoading();
    console.log('Call Courses');
  }

  getCourses() {
    this.courseService
      .getCourses()
      .subscribe((courses) => (this.courses = courses));
  }

  getGithubUserLazyLoading() {
    this.courseService.getGithubUserLazyLoading().subscribe((response) => {
      this.githubUsers = response.items;
      console.log('this.githubUsers', this.githubUsers);
    });
  }
}
