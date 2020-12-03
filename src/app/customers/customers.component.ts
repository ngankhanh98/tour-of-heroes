import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
})
export class CustomersComponent implements OnInit {
  searchForm = new FormGroup({
    username: new FormControl(''),
    repo: new FormControl(''),
  });

  constructor() {}
  ngOnInit(): void {}

  onSubmit() {
    console.log('this.searchForm.value', this.searchForm.value);
  }
  // name = new FormControl('');
  // constructor() {}

  // ngOnInit(): void {}

  // updateName() {
  //   this.name.setValue('Nancy');
  // }
}
