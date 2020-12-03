import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Course } from './course';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private uri: string = 'https://api.github.com/search/users?q=tom&page=30';

  courses: Course[] = [];
  constructor(private http: HttpClient) {}

  getCourses(): Observable<Course[]> {
    const result = this.http.get<Course[]>('http://localhost:3000/v1/course');
    return result;
  }

  getGithubUserLazyLoading(): Observable<any> {
    return this.http.get(this.uri)
  }
}
