import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RestoService } from '../resto.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  alert = false;
  register = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private resto: RestoService) {}
  ngOnInit() {}

  collectUser() {
    console.warn(this.register.value);
    this.resto.registerUser(this.register.value).subscribe((data) => {
      console.warn('Result :', data);
      this.alert = true;
    });
  }

  closeAlert() {
    this.alert = false;
  }
}
