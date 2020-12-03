import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';
import { User } from '../user';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
})
export class CustomersComponent implements OnInit {
  users: User[] = [];
  constructor(private courseService: CoursesService) {}

  ngOnInit(): void {
    this.getGithubUsers();
  }

  getGithubUsers() {
    this.courseService.getGithubUserLazyLoading().subscribe((response) => {
      this.users = response.items;
      console.log('this.users', this.users);
    });
  }
}
