import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
})
export class CustomersComponent implements OnInit {
  name = new FormControl('');
  constructor() {}

  ngOnInit(): void {}

  updateName() {
    this.name.setValue('Nancy');
  }
}
